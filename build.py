#!/usr/bin/env python3
"""
REVEX static site builder.

    python build.py            -> builds the public site into ./dist
    python build.py --preview  -> builds with explicit index.html links
                                  (for opening files directly / previews)

Content lives in:
    content/<section>/_index.md   section introduction
    content/<section>/<slug>.md   lessons (Markdown + YAML front matter)
    data/denials.yaml             denial code library
    data/specialties.yaml         specialty guides
    data/scenarios.yaml           interactive scenarios
    data/glossary.yaml            terminology
"""
import json
import math
import re
import shutil
import sys
from datetime import date
from html import escape
from pathlib import Path

import markdown
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape
from markupsafe import Markup

ROOT = Path(__file__).parent
CONTENT = ROOT / "content"
DATA = ROOT / "data"
STATIC = ROOT / "static"
OUT = ROOT / "dist"
PREVIEW = "--preview" in sys.argv

SITE = yaml.safe_load((ROOT / "site.yaml").read_text(encoding="utf-8"))
SITE["site_url"] = SITE["site_url"].rstrip("/")
SECTIONS = {s["id"]: s for s in SITE["sections"]}
TODAY = date.today().isoformat()

PAGES = []  # every rendered page, for sitemap and search


# ------------------------------------------------------------------ helpers
def slugify(text):
    text = re.sub(r"[^a-zA-Z0-9]+", "-", str(text).lower()).strip("-")
    return text or "item"


def split_front_matter(raw):
    if raw.startswith("---"):
        _, fm, body = raw.split("---", 2)
        return yaml.safe_load(fm) or {}, body.strip()
    return {}, raw


def make_rel(url):
    """Return a function converting a root path ('/denials/') into a
    path relative to the page at `url` ('denials/codes/co-45/')."""
    depth = url.count("/")
    prefix = "../" * depth
    if url == "404.html":  # served at any depth, so use absolute paths
        from urllib.parse import urlparse
        prefix = urlparse(SITE["site_url"]).path.rstrip("/") + "/"

    def rel(path):
        if not path.startswith("/"):
            return path
        path, _, frag = path.partition("#")
        path = path.lstrip("/")
        if PREVIEW and (path == "" or path.endswith("/")):
            path += "index.html"
        out = (prefix + path) or "./"
        return out + ("#" + frag if frag else "")

    return rel


def md_to_html(text):
    md = markdown.Markdown(
        extensions=[
            "tables", "fenced_code", "attr_list", "admonition",
            "md_in_html", "def_list", "sane_lists",
            "toc",
        ],
        extension_configs={"toc": {"toc_depth": "2-3"}},
    )
    html = md.convert(text)
    toc = [{"id": t["id"], "name": re.sub(r"<[^>]+>", "", t["name"])}
           for t in md.toc_tokens if t["level"] == 2]
    html = re.sub(r"<table>", '<div class="table-wrap" tabindex="0"><table>', html)
    html = html.replace("</table>", "</table></div>")
    return html, toc


def md_inline(text):
    html = markdown.markdown(str(text))
    if html.startswith("<p>") and html.endswith("</p>") and html.count("<p>") == 1:
        html = html[3:-4]
    return html


def rewrite_links(html, rel):
    return re.sub(r'href="(/[^"]*)"', lambda m: f'href="{rel(m.group(1))}"', html)


def read_minutes(text):
    words = len(re.findall(r"\w+", text))
    return max(2, math.ceil(words / 170))  # study pace, slower than casual reading


# ------------------------------------------------------------------ jinja
env = Environment(
    loader=FileSystemLoader(ROOT / "templates"),
    autoescape=select_autoescape(["html"]),
    trim_blocks=True,
    lstrip_blocks=True,
)
env.filters["md"] = lambda t: Markup(md_inline(t))
env.filters["slug"] = slugify


def render(template, url, **ctx):
    rel = make_rel(url)
    html = env.get_template(template).render(
        site=SITE, sections=SITE["sections"], url=url, rel=rel,
        year=date.today().year, preview=PREVIEW, **ctx)
    html = rewrite_links(html, rel)
    target = OUT / url / "index.html" if (url == "" or url.endswith("/")) else OUT / url
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html, encoding="utf-8")


def register(url, title, description, section=None, keywords="", kind="page",
             search=True):
    PAGES.append({"url": url, "title": title, "description": description or "",
                  "section": section, "keywords": keywords, "kind": kind,
                  "search": search})


# ------------------------------------------------------------------ loaders
def load_lessons(section_id):
    folder = CONTENT / section_id
    intro, lessons = {"meta": {}, "html": ""}, []
    if not folder.exists():
        return intro, lessons
    for f in sorted(folder.glob("*.md")):
        meta, body = split_front_matter(f.read_text(encoding="utf-8"))
        if f.name == "_index.md":
            intro = {"meta": meta, "html": md_to_html(body)[0]}
            continue
        html, toc = md_to_html(body)
        slug = meta.get("slug", f.stem.split("_", 1)[-1] if re.match(r"^\d+_", f.stem) else f.stem)
        lessons.append({
            "slug": slug,
            "url": f"{section_id}/{slug}/",
            "title": meta["title"],
            "short": meta.get("short", meta["title"]),
            "description": meta.get("description", ""),
            "order": meta.get("order", 999),
            "level": meta.get("level", "Beginner"),
            "minutes": meta.get("minutes") or read_minutes(body),
            "quiz": meta.get("quiz", []),
            "keywords": meta.get("keywords", ""),
            "updated": meta.get("updated", TODAY),
            "track": meta.get("track", True),
            "kind": meta.get("kind", "lesson"),
            "html": html,
            "toc": toc,
            "headings": " ".join(t["name"] for t in toc),
        })
    lessons.sort(key=lambda l: (l["order"], l["title"]))
    return intro, lessons


def load_yaml(name):
    path = DATA / name
    return yaml.safe_load(path.read_text(encoding="utf-8")) if path.exists() else None



# ------------------------------------------------------------------ exam bank
import hashlib
import random as _random


def _strip_p(html):
    return html


def build_exam_bank(lessons_by_section, denial_codes, specialties):
    """Collect every lesson quiz plus generated code and specialty questions.
    Returns (public_bank, answer_key)."""
    bank, key = [], {}

    def add(qid, section, q, options, answer, why):
        bank.append({"id": qid, "s": section, "q": md_inline(q),
                     "o": [md_inline(o) for o in options]})
        key[qid] = {"a": int(answer), "w": re.sub(r"<[^>]+>", "", md_inline(why or ""))}

    for sec in SITE["sections"]:
        _, lessons = lessons_by_section.get(sec["id"], (None, []))
        for l in lessons:
            for i, q in enumerate(l.get("quiz") or []):
                add(f'{l["url"]}#{i + 1}', sec["id"], str(q["q"]), [str(o) for o in q["options"]],
                    q["answer"], q.get("why", ""))

    # Denial and remark code meanings
    titles = {c["code"]: c["title"] for c in denial_codes}
    for c in denial_codes:
        rnd = _random.Random(int(hashlib.md5(c["code"].encode()).hexdigest(), 16))
        others = [t for k, t in titles.items() if k != c["code"] and t != c["title"]]
        wrong = rnd.sample(others, 3)
        pos = rnd.randrange(4)
        opts = wrong[:pos] + [c["title"]] + wrong[pos:]
        add(f'code/{c["slug"]}', "denials", f'What does **{c["code"]}** mean on an ERA?', opts, pos,
            f'{c["code"]}: {c["title"]}. {c.get("summary", "")}')

    # Specialty code ownership
    names = [s["name"] for s in specialties]
    for s in specialties:
        codes = [c for c in s.get("codes", []) if c.get("desc")]
        if not codes:
            continue
        c = codes[0]
        rnd = _random.Random(int(hashlib.md5(s["name"].encode()).hexdigest(), 16))
        wrong = rnd.sample([n for n in names if n != s["name"]], 3)
        pos = rnd.randrange(4)
        opts = wrong[:pos] + [s["name"]] + wrong[pos:]
        add(f'spec/{s["slug"]}', "specialties",
            f'Code **{c["code"]}** ({c["desc"]}) is most typical of which specialty?', opts, pos,
            f'{c["code"]} belongs to {s["name"]}. {s.get("summary", "")}')
    return bank, key


def write_apps_script(key):
    """Generate the Google Apps Script backend with the current answer key."""
    tpl = (ROOT / "apps-script" / "Code.template.gs").read_text(encoding="utf-8")
    code = tpl.replace("/*__ANSWER_KEY__*/{}", json.dumps(key, ensure_ascii=False, separators=(",", ":")))
    code = code.replace("__KEY_VERSION__", hashlib.md5(json.dumps(key, sort_keys=True).encode()).hexdigest()[:10])
    code = code.replace("__KEY_URL__", SITE["site_url"] + "/static/exam/key.json")
    (ROOT / "apps-script" / "Code.gs").write_text(code, encoding="utf-8")
    return hashlib.md5(json.dumps(key, sort_keys=True).encode()).hexdigest()[:10]


# ------------------------------------------------------------------ build
def build():
    if OUT.exists():
        shutil.rmtree(OUT)
    shutil.copytree(STATIC, OUT / "static")

    section_items = {}  # section id -> list of {url,title,description,minutes,level}

    denials = load_yaml("denials.yaml") or {"categories": [], "codes": []}
    denials.setdefault("codes", [])
    for extra in sorted(DATA.glob("denials-*.yaml")):  # extra code files
        denials["codes"] += (yaml.safe_load(extra.read_text(encoding="utf-8")) or {}).get("codes", [])
    order = {c["id"]: i for i, c in enumerate(denials["categories"])}
    denials["codes"].sort(key=lambda c: (order.get(c["category"], 99), c.get("sort", 0)))
    specialties = []
    for f in sorted(DATA.glob("specialties*.yaml")):
        specialties += yaml.safe_load(f.read_text(encoding="utf-8")) or []
    specialties.sort(key=lambda s: s["name"].lower())
    scenarios = load_yaml("scenarios.yaml") or []
    glossary = load_yaml("glossary.yaml") or []

    # ---- markdown lesson sections
    lessons_by_section = {}
    for sec in SITE["sections"]:
        intro, lessons = load_lessons(sec["id"])
        lessons_by_section[sec["id"]] = (intro, lessons)

    # ---- sidebar navigation (shared by every page)
    nav = []
    for sec in SITE["sections"]:
        _, lessons = lessons_by_section[sec["id"]]
        items = [{"url": l["url"], "title": l["short"], "track": l["track"]} for l in lessons]
        if sec["id"] == "denials":
            items.append({"url": "denials/codes/", "title": "Denial code library", "track": False})
        if sec["id"] == "specialties":
            items = [{"url": f'specialties/{sp.get("slug") or slugify(sp["name"])}/', "title": sp["name"], "track": True}
                     for sp in sorted(specialties, key=lambda x: x["name"].lower())]
        if sec["id"] == "scenarios":
            items = [{"url": f'scenarios/{sc.get("slug") or slugify(sc["title"])}/', "title": sc["title"], "track": True}
                     for sc in scenarios]
        nav.append({"id": sec["id"], "title": sec["title"], "icon": sec["icon"], "items": items})
    env.globals["nav"] = nav

    # ---- lesson pages
    for sec in SITE["sections"]:
        intro, lessons = lessons_by_section[sec["id"]]
        for i, l in enumerate(lessons):
            prev_l = lessons[i - 1] if i > 0 else None
            next_l = lessons[i + 1] if i + 1 < len(lessons) else None
            render("lesson.html", l["url"], page=l, section=sec,
                   prev=prev_l, next=next_l, step=(i + 1 if sec.get("sequence") else None),
                   total=len(lessons),
                   title=l["title"], description=l["description"])
            register(l["url"], l["title"], l["description"], sec["id"],
                     f'{l["keywords"]} {l["headings"]}', "lesson")
        section_items[sec["id"]] = [
            {"url": l["url"], "title": l["title"], "short": l["short"],
             "description": l["description"], "minutes": None if l["kind"] == "tool" else l["minutes"],
             "level": l["level"], "track": l["track"]} for l in lessons]

    # ---- denial code library
    cats = {c["id"]: c for c in denials["categories"]}
    for c in denials["codes"]:
        c["slug"] = c.get("slug") or slugify(c["code"])
        c["url"] = f"denials/codes/{c['slug']}/"
    for c in denials["codes"]:
        cat = cats.get(c["category"], {"title": c["category"]})
        related = [o for o in denials["codes"] if o["category"] == c["category"] and o is not c][:6]
        title = f'{c["code"]} denial: {c["title"]}'
        desc = c.get("summary") or f'What {c["code"]} means, why payers use it and how to resolve it.'
        render("denial.html", c["url"], code=c, category=cat, related=related,
               section=SECTIONS["denials"], title=title, description=desc)
        register(c["url"], title, desc, "denials",
                 f'{c["code"]} CARC {c.get("carc","")} {c["title"]} {cat["title"]}', "code")
    if denials["codes"]:
        grouped = [{"cat": cat, "codes": [c for c in denials["codes"] if c["category"] == cat["id"]]}
                   for cat in denials["categories"]]
        grouped = [g for g in grouped if g["codes"]]
        render("denial_index.html", "denials/codes/", groups=grouped,
               section=SECTIONS["denials"], count=len(denials["codes"]),
               title="Denial code library: CARC and RARC explained",
               description="Every common claim adjustment reason code, what it means and how to work it.")
        register("denials/codes/", "Denial code library", "All common CARC denial codes with resolution steps.",
                 "denials", "CARC RARC codes list", "page")
        section_items["denials"].append({
            "url": "denials/codes/", "title": "Denial code library",
            "short": "Denial code library",
            "description": f'{len(denials["codes"])} common denial codes, each with causes, fixes and prevention.',
            "minutes": None, "level": "Reference", "track": False})

    # ---- specialties
    for i, s in enumerate(specialties):
        s["slug"] = s.get("slug") or slugify(s["name"])
        s["url"] = f"specialties/{s['slug']}/"
    for i, s in enumerate(specialties):
        prev_s = specialties[i - 1] if i > 0 else None
        next_s = specialties[i + 1] if i + 1 < len(specialties) else None
        title = f'{s["name"]} billing guide'
        desc = s.get("summary", "")
        render("specialty.html", s["url"], spec=s, section=SECTIONS["specialties"],
               prev=prev_s, next=next_s, title=title, description=desc)
        codes = " ".join(str(c["code"]) for c in s.get("codes", []))
        register(s["url"], title, desc, "specialties", f'{s["name"]} CPT {codes}', "lesson")
    section_items["specialties"] = [
        {"url": s["url"], "title": s["name"], "short": s["name"],
         "description": s.get("summary", ""), "minutes": s.get("minutes", 8),
         "level": s.get("level", "Intermediate"), "track": True} for s in specialties]

    # ---- scenarios
    for s in scenarios:
        s["slug"] = s.get("slug") or slugify(s["title"])
        s["url"] = f"scenarios/{s['slug']}/"
    for i, s in enumerate(scenarios):
        nxt = scenarios[i + 1] if i + 1 < len(scenarios) else None
        s_html = dict(s)
        s_html["setup_html"] = md_to_html(s.get("setup", ""))[0]
        render("scenario.html", s["url"], sc=s_html, section=SECTIONS["scenarios"],
               next=nxt, title=f'Scenario: {s["title"]}', description=s.get("summary", ""),
               data_json=json.dumps({"stages": s["stages"], "takeaways": s.get("takeaways", [])}))
        register(s["url"], f'Scenario: {s["title"]}', s.get("summary", ""), "scenarios",
                 s.get("keywords", ""), "lesson")
    section_items["scenarios"] = [
        {"url": s["url"], "title": s["title"], "short": s["title"],
         "description": s.get("summary", ""), "minutes": s.get("minutes", 6),
         "level": s.get("level", "Intermediate"), "track": True, "tag": s.get("tag")}
        for s in scenarios]

    # ---- glossary
    for t in glossary:
        t["term"] = str(t["term"])
    terms = sorted(glossary, key=lambda t: t["term"].lower())
    for t in terms:
        t["id"] = "term-" + slugify(t["term"])
    letters = {}
    for t in terms:
        ch = t["term"][0].upper()
        letters.setdefault(ch if ch.isalpha() else "#", []).append(t)
    render("glossary.html", "glossary/", letters=letters, count=len(terms),
           section=SECTIONS["glossary"], title="RCM terminology: glossary of medical billing terms",
           description="Plain-language definitions of US healthcare revenue cycle and medical billing terms.")
    register("glossary/", "RCM terminology", "Glossary of medical billing terms.", "glossary",
             "glossary terms definitions", "page")
    for t in terms:
        register(f"glossary/#{t['id']}", t["term"], re.sub(r"<[^>]+>", "", md_inline(t["def"]))[:160],
                 "glossary", t.get("aka", ""), "term")

    # ---- section landing pages (glossary has its own)
    for sec in SITE["sections"]:
        if sec["id"] == "glossary":
            continue
        intro, _ = lessons_by_section[sec["id"]]
        url = f'{sec["id"]}/'
        extra = {}
        if sec["id"] == "denials":
            extra["categories"] = [
                {"cat": c, "codes": [d for d in denials["codes"] if d["category"] == c["id"]]}
                for c in denials["categories"]]
        render("section.html", url, section=sec, intro=intro,
               items=section_items.get(sec["id"], []),
               title=intro["meta"].get("title", sec["title"]),
               description=intro["meta"].get("description", sec["blurb"]), **extra)
        register(url, sec["title"], sec["blurb"], sec["id"], "", "section")

    # ---- counts for home page
    for sec in SITE["sections"]:
        n = len([i for i in section_items.get(sec["id"], []) if i["track"]])
        if sec["id"] == "glossary":
            n = len(terms)
        if sec["id"] == "tools":
            n = len(section_items.get("tools", []))
        if sec["id"] == "denials":
            sec["codes"] = len(denials["codes"])
        sec["count"] = n

    # ---- progress tracker data: every trackable page
    track = []
    for sec in SITE["sections"]:
        for it in section_items.get(sec["id"], []):
            if it["track"]:
                track.append({"u": it["url"], "t": it["title"], "s": sec["id"]})

    featured_codes = [c for c in denials["codes"] if c.get("featured")][:8]
    stats = {"lessons": sum(1 for _, ls in lessons_by_section.values() for l in ls if l["track"]),
             "codes": len(denials["codes"]), "specialties": len(specialties),
             "scenarios": len(scenarios), "tools": len(section_items.get("tools", []))}
    render("home.html", "", featured=featured_codes, stats=stats,
           title=f'{SITE["name"]}: free US healthcare RCM training',
           description=SITE["description"],
           first_lesson=(section_items.get("start-here") or [{"url": "start-here/"}])[0]["url"])
    register("", SITE["name"], SITE["description"], None, "", "home", search=False)

    # ---- certification exam
    bank, key = build_exam_bank(lessons_by_section, denials["codes"], specialties)
    key_version = write_apps_script(key)
    (OUT / "static" / "exam").mkdir(parents=True, exist_ok=True)
    (OUT / "static" / "exam" / "key.json").write_text(
        json.dumps(key, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    (OUT / "static" / "exam" / "bank.json").write_text(
        json.dumps({"v": key_version, "questions": bank}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    exam_sections = {s["id"]: s["title"] for s in SITE["sections"]}
    render("certification.html", "certification/", exam_sections=exam_sections,
           bank_size=len(bank), cert=SITE.get("certification", {}),
           title="REVEX RCM certification exam",
           description="Pass a 50-question exam on US healthcare revenue cycle management and earn a free, verifiable REVEX certificate.")
    register("certification/", "REVEX RCM certification", "Take the certification exam and earn a verifiable certificate.",
             None, "certificate certification exam test", "page")
    render("verify.html", "verify/", cert=SITE.get("certification", {}),
           title="Verify a REVEX certificate",
           description="Check that a REVEX certificate ID is genuine.")
    register("verify/", "Verify a certificate", "Check a REVEX certificate ID.", None, "verify certificate", "page")
    print(f"Exam bank: {len(bank)} questions (key {key_version})")

    render("progress.html", "progress/", track_json=json.dumps(track),
           title="Your progress", description="Track lessons, quiz scores and your REVEX certificate.")
    register("progress/", "Your progress", "Lessons read, quiz scores and certificate.", None, "", "page")

    render("about.html", "about/", title="About REVEX",
           description="Who built REVEX, how the content is written, and important disclaimers.")
    register("about/", "About REVEX", "About the site and disclaimers.", None, "", "page")

    render("404.html", "404.html", title="Page not found", description="")

    # ---- search index
    index = [{"t": p["title"], "d": p["description"][:180], "u": p["url"],
              "s": SECTIONS[p["section"]]["title"] if p["section"] else "",
              "k": p["keywords"], "y": p["kind"]}
             for p in PAGES if p["search"]]
    (OUT / "static" / "search-index.json").write_text(
        json.dumps(index, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    # ---- sitemap and robots
    urls = sorted({p["url"] for p in PAGES if "#" not in p["url"]})
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        sm.append(f"  <url><loc>{escape(SITE['site_url'])}/{u}</loc><lastmod>{TODAY}</lastmod></url>")
    sm.append("</urlset>")
    (OUT / "sitemap.xml").write_text("\n".join(sm), encoding="utf-8")
    (OUT / "robots.txt").write_text(
        f"User-agent: *\nAllow: /\n\nSitemap: {SITE['site_url']}/sitemap.xml\n", encoding="utf-8")
    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    if SITE.get("custom_domain"):
        (OUT / "CNAME").write_text(SITE["custom_domain"].strip() + "\n", encoding="utf-8")

    print(f"Built {len(urls)} pages, {len(index)} search entries -> {OUT}")


if __name__ == "__main__":
    build()
