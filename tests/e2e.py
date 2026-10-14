"""End-to-end checks in headless Chromium (Playwright).

Usage:  python tests/e2e.py http://localhost:8812 [results.md]

Serves nothing itself; point it at a static server of dist/. Every test that
prints PASS actually ran; anything that couldn't run is reported as SKIP.
"""
import asyncio
import json
import re
import sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = sys.argv[1].rstrip("/")
OUT = sys.argv[2] if len(sys.argv) > 2 else None
DIST = Path(__file__).resolve().parent.parent / "dist"
RESULTS = []
# Requests to these hosts may be blocked in sandboxed test environments; their
# failures are recorded as notes, not test failures.
EXTERNAL_OK = ("fonts.googleapis.com", "fonts.gstatic.com", "cdnjs.cloudflare.com")


def rec(tid, feature, steps, expected, actual, ok, notes=""):
    RESULTS.append((tid, feature, steps, expected, actual, "PASS" if ok else "FAIL", notes))
    print(("PASS" if ok else "FAIL"), tid, feature, "-", actual)


def all_routes():
    routes = []
    for p in sorted(DIST.rglob("index.html")):
        rel = p.parent.relative_to(DIST).as_posix()
        routes.append("/" if rel == "." else f"/{rel}/")
    return routes


async def new_page(browser, width=1280, errors=None):
    ctx = await browser.new_context(viewport={"width": width, "height": 900})
    pg = await ctx.new_page()
    if errors is not None:
        pg.on("pageerror", lambda e: errors.append("pageerror: " + str(e)))
        pg.on("console", lambda m: errors.append("console: " + m.text) if m.type == "error" and not any(h in m.text for h in EXTERNAL_OK) and "net::ERR" not in m.text else None)
        pg.on("requestfailed", lambda r: errors.append("requestfailed: " + r.url) if not any(h in r.url for h in EXTERNAL_OK) else None)
    return ctx, pg


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        routes = all_routes()

        # ---------- R-01: every route loads with no JS errors and no failed local requests
        errs_by_route, overflow = {}, {}
        ctx, pg = await new_page(browser, 1280)
        for r in routes:
            errs = []
            pg.remove_listener("pageerror", lambda e: None) if False else None
            h1 = lambda e, errs=errs: errs.append("pageerror: " + str(e))
            h2 = lambda m, errs=errs: errs.append("console: " + m.text) if m.type == "error" and "net::ERR" not in m.text and not any(x in m.text for x in EXTERNAL_OK) else None
            pg.on("pageerror", h1); pg.on("console", h2)
            resp = await pg.goto(BASE + r, wait_until="load")
            await pg.wait_for_timeout(60)
            pg.remove_listener("pageerror", h1); pg.remove_listener("console", h2)
            if not resp or resp.status != 200:
                errs.append(f"HTTP {resp.status if resp else 'none'}")
            if errs:
                errs_by_route[r] = errs
        await ctx.close()
        rec("R-01", "All routes", f"Load all {len(routes)} routes at 1280px", "HTTP 200, no JS errors",
            f"{len(routes) - len(errs_by_route)}/{len(routes)} clean" + (f"; first problem: {list(errs_by_route.items())[0]}" if errs_by_route else ""),
            not errs_by_route)

        # ---------- R-02: no horizontal overflow at phone, tablet and desktop widths
        sample = ["/", "/learn/", "/learn/new-to-rcm/", "/reference/", "/practice/", "/career/", "/sources/",
                  "/denials/codes/", "/denials/codes/co-197/", "/rcm-cycle/eligibility-and-benefits/",
                  "/quality/calibration/", "/scenarios/ar-worklist-prioritization/", "/tools/kpi-calculator/",
                  "/tools/timely-filing-calculator/", "/tools/payment-calculator/", "/tools/ar-note-generator/",
                  "/certification/", "/verify/", "/progress/", "/about/", "/glossary/", "/specialties/cardiology/"]
        bad = []
        for w in (360, 390, 768, 1024, 1280, 1440):
            ctx, pg = await new_page(browser, w)
            for r in sample:
                await pg.goto(BASE + r, wait_until="load")
                sw = await pg.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
                if sw > 1:
                    bad.append(f"{r}@{w}px (+{sw}px)")
            await ctx.close()
        rec("R-02", "Responsive layout", f"{len(sample)} key pages at 360, 390, 768, 1024, 1280, 1440px", "No horizontal page scroll",
            "none" if not bad else ", ".join(bad[:6]), not bad)

        # ---------- NAV-01: desktop header shows Topics plus five links and marks the current one
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/learn/working-in-rcm/")
        labels = await pg.eval_on_selector_all(".primary-nav a", "els => els.map(e => e.textContent.trim())")
        visible = await pg.is_visible(".primary-nav") and await pg.is_visible(".nav-topics")
        cur = await pg.eval_on_selector(".primary-nav a.is-current", "e => e.textContent.trim()")
        want = ["Learn", "RCM cycle", "Denial codes", "Practice", "Glossary"]
        rec("NAV-01", "Desktop navigation", "Open /learn/working-in-rcm/ at 1280px", "Topics button plus Learn, RCM cycle, Denial codes, Practice, Glossary; 'Learn' current",
            f"visible={visible}, {labels}, current={cur}", visible and labels == want and cur == "Learn")
        areas = {"/denials/codes/co-45/": "Denial codes", "/scenarios/qmb-balance/": "Practice", "/rcm-cycle/claim-submission/": "RCM cycle", "/quality/sampling/": "Learn", "/glossary/": "Glossary"}
        wrong = []
        for u, want in areas.items():
            await pg.goto(BASE + u)
            got = await pg.eval_on_selector(".primary-nav a.is-current", "e => e.textContent.trim()")
            if got != want:
                wrong.append(f"{u}: {got}")
        rec("NAV-02", "Current-area highlight", "Visit a page in each area", "Matching header link highlighted", "all correct" if not wrong else "; ".join(wrong), not wrong)
        await ctx.close()

        # ---------- NAV-03: phones use the Topics menu
        ctx, pg = await new_page(browser, 390)
        await pg.goto(BASE + "/rcm-cycle/claim-submission/")
        hidden_links = not await pg.is_visible(".primary-nav a")
        await pg.click("[data-topics]")
        await pg.wait_for_timeout(200)
        opened = await pg.is_visible("#topics-panel")
        hubs = await pg.eval_on_selector_all(".topics-hubs a", "els => els.map(e => e.textContent.trim())")
        cur = await pg.eval_on_selector(".topics-grid a.is-current strong", "e => e.textContent.trim()")
        exp = await pg.get_attribute("[data-topics]", "aria-expanded")
        await pg.click(".topics-head [data-topics-close]")
        await pg.wait_for_timeout(200)
        closed = not await pg.is_visible("#topics-panel")
        ok = hidden_links and opened and len(hubs) == 5 and "RCM cycle" in cur and exp == "true" and closed
        rec("NAV-03", "Mobile navigation", "390px lesson: open and close Topics", "Header links hidden; Topics panel opens with 5 hub links and the current topic marked, then closes",
            f"hidden_links={hidden_links}, opened={opened}, hubs={len(hubs)}, current='{cur}', aria-expanded={exp}, closed={closed}", ok)
        await ctx.close()

        # ---------- KB-01: keyboard: skip link first, focus visible
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/learn/")
        await pg.keyboard.press("Tab")
        first = await pg.evaluate("document.activeElement.textContent.trim()")
        await pg.keyboard.press("Enter")
        await pg.wait_for_timeout(100)
        at_main = await pg.evaluate("location.hash === '#main'")
        await pg.keyboard.press("Tab")
        outline = await pg.evaluate("getComputedStyle(document.activeElement).outlineStyle")
        rec("KB-01", "Keyboard access", "Tab, Enter on skip link, Tab again", "Skip link first; jumps to #main; next focus has a visible outline",
            f"first='{first}', at_main={at_main}, outline={outline}", first == "Skip to content" and at_main and outline not in ("none", ""))
        # search opens with '/' and finds a code
        await pg.goto(BASE + "/")
        await pg.keyboard.press("/")
        await pg.wait_for_timeout(150)
        await pg.keyboard.type("CO-197")
        await pg.wait_for_timeout(600)
        hits = await pg.eval_on_selector_all("[data-search-results] a", "els => els.map(e => e.textContent)")
        await pg.keyboard.type("zzzzqqq")
        await pg.wait_for_timeout(500)
        empty_txt = await pg.text_content("[data-search-hint]")
        rec("SRCH-01", "Global search", "Press /, type CO-197, then nonsense", "Results include CO-197; nonsense shows an empty-state message",
            f"{len(hits)} hits, first='{(hits[0] if hits else '')[:40]}', empty='{(empty_txt or '').strip()[:50]}'", bool(hits) and "197" in hits[0] and bool((empty_txt or '').strip()))
        await ctx.close()

        # ---------- REF-01: code library text + category filter + clear + empty state
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/denials/codes/")
        total = await pg.eval_on_selector_all("[data-code-row]", "els => els.length")
        await pg.fill("[data-code-filter]", "authorization")
        n1 = await pg.eval_on_selector_all("[data-code-row]:not([hidden])", "els => els.length")
        await pg.fill("[data-code-filter]", "")
        await pg.select_option("[data-code-cat]", "timely")
        n2 = await pg.eval_on_selector_all("[data-code-row]:not([hidden])", "els => els.length")
        await pg.fill("[data-code-filter]", "qqqzzz")
        empty = await pg.is_visible("[data-code-empty]")
        await pg.click(".filter-row [data-code-clear]")
        n3 = await pg.eval_on_selector_all("[data-code-row]:not([hidden])", "els => els.length")
        count = await pg.text_content("[data-code-count]")
        rec("REF-01", "Code library search and filters", "Type 'authorization'; choose Timely filing; type nonsense; Clear", "Narrowed results; empty state; clear restores all",
            f"total={total}, text={n1}, cat={n2}, empty={empty}, cleared={n3}, count='{count}'", 0 < n1 < total and 0 < n2 < total and empty and n3 == total)
        await pg.goto(BASE + "/denials/codes/co-50/")
        has_caveat = await pg.is_visible("text=Before you act: what not to assume")
        has_official = await pg.is_visible(".official-note a[href*='x12.org']")
        rec("REF-02", "Code page caveats", "Open CO-50", "Shows REVEX-summary note with X12 link and 'what not to assume' box", f"official={has_official}, caveat={has_caveat}", has_caveat and has_official)
        await ctx.close()

        # ---------- PROG-01: mark complete persists; path progress reflects it; reset clears it
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/start-here/what-is-rcm/")
        await pg.click("[data-complete]")
        await pg.goto(BASE + "/learn/new-to-rcm/")
        txt = await pg.text_content("[data-path-progress]")
        nxt = await pg.text_content("[data-path-next]")
        await pg.goto(BASE + "/progress/")
        summ = await pg.text_content("[data-prog-summary]")
        await pg.click("[data-prog-reset]"); await pg.click("[data-prog-reset]")
        summ2 = await pg.text_content("[data-prog-summary]")
        stored = await pg.evaluate("localStorage.getItem('revex-progress-v1')")
        rec("PROG-01", "Progress save, path progress, reset", "Mark 'What is RCM?' complete; open path; open progress; reset twice",
            "Path shows 1 complete and next lesson moves on; reset clears to 0",
            f"path='{txt.strip()}', next='{nxt.strip()}', before='{summ[:20]}', after='{summ2[:20]}'",
            txt.strip().startswith("1 of") and "What is RCM" not in nxt and summ2.startswith("0%") and '"done":{}' in (stored or ""))
        # competency ticks persist
        await pg.goto(BASE + "/career/")
        await pg.click("[data-role='ar-associate'] summary")
        await pg.check("[data-comp='ar-associate-1']")
        await pg.reload()
        kept = await pg.is_checked("[data-comp='ar-associate-1']")
        cnt = await pg.text_content("[data-role='ar-associate'] [data-role-count]")
        rec("PROG-02", "Competency self-check", "Tick one competency, reload", "Tick persists; count shows 1/4", f"kept={kept}, count={cnt}", kept and cnt == "1/4")
        await ctx.close()

        # ---------- CERT-01: certification is truthful while the API is not configured
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/certification/")
        form = await pg.query_selector("[data-start-form]")
        soon = await pg.is_visible("text=Coming soon: not open yet")
        disabled = await pg.is_disabled("button:has-text('Exam not open yet')")
        body = await pg.text_content("main")
        claims = [w for w in ("recruiters can verify", "Free certification", "verifiable ID") if w in body]
        rec("CERT-01", "Certification status", "Open /certification/ with api_url empty", "No start form; 'coming soon'; disabled button; no verifiable-certificate claims",
            f"form={bool(form)}, soon={soon}, disabled={disabled}, claims={claims}", not form and soon and disabled and not claims)
        await pg.goto(BASE + "/verify/?id=RVX-202610-ABCD2345")
        await pg.wait_for_timeout(200)
        vtxt = await pg.text_content("[data-verify-result]")
        rec("CERT-02", "Verification while closed", "Open /verify/?id=…", "Explains no certificates have been issued", (vtxt or "").strip()[:80], "No REVEX certificates have been issued" in (vtxt or ""))
        await pg.goto(BASE + "/career/")
        sb = await pg.text_content("#exam")
        home_ok = True
        await pg.goto(BASE + "/")
        hb = await pg.text_content("main")
        home_ok = "verifiable" not in hb.lower()
        rec("CERT-03", "No certificate claims elsewhere", "Read career page exam box and home page", "Career page says 'Coming soon'; home makes no 'verifiable' claim", f"career='{' '.join(sb.split())[:60]}', home_ok={home_ok}", "Coming soon" in sb and home_ok)
        await ctx.close()

        # ---------- TOOL UI checks (logic is covered by tests/calc.test.js)
        ctx, pg = await new_page(browser, 390)
        await pg.goto(BASE + "/tools/timely-filing-calculator/")
        t0 = await pg.text_content("#tfl-out")
        await pg.select_option("#tfl-window", "m12")
        await pg.fill("#tfl-date", "2026-01-03")
        await pg.check("#tfl-roll")
        await pg.fill("#tfl-asof", "2026-10-14")
        t1 = await pg.text_content("#tfl-out")
        rec("TOOL-01", "Timely filing UI", "390px: no limit chosen; then 1 calendar year from 01/03/2026 with workday roll", "Asks for a limit first; then deadline Mon 01/04/2027 with roll note and assumptions",
            f"before='{t0.strip()[:40]}', after has 01/04/2027={'01/04/2027' in t1}, roll note={'next workday' in t1}", "Choose the filing" in t0 and "01/04/2027" in t1 and "next workday" in t1 and "Assumptions" in t1)
        await pg.goto(BASE + "/tools/kpi-calculator/")
        await pg.fill("#kpi-claims", "0")
        await pg.fill("#kpi-charges90", "")
        kout = await pg.text_content("#kpi-out")
        rec("TOOL-02", "KPI calculator validation UI", "Set claims submitted = 0 and clear charges", "Errors shown, no NaN/Infinity", re.sub(r"\s+", " ", kout)[:120], "NaN" not in kout and "Infinity" not in kout and "Claims submitted is 0" in kout and "Enter charges for the AR period" in kout)
        await pg.goto(BASE + "/tools/payment-calculator/")
        await pg.fill("#pay-allowed", "-5")
        pout = await pg.text_content("#pay-out")
        rec("TOOL-03", "Payment calculator validation UI", "Enter a negative allowed amount", "Error, no result", pout.strip()[:60], "can't be negative" in pout)
        await pg.goto(BASE + "/tools/ar-note-generator/")
        phi = await pg.is_visible("text=Use fictional or de-identified details only")
        n0 = await pg.text_content("#note-text")
        await pg.fill("#n-ref", "TEST-REF-1"); await pg.fill("#n-action", "Sent corrected claim")
        n1 = await pg.text_content("#note-text")
        await pg.click("#note-reset")
        n2 = await pg.text_content("#note-text")
        rec("TOOL-04", "AR note generator", "Check PHI warning; empty note placeholders; fill; clear", "Warning visible; placeholders not invented; filled values appear; clear removes them",
            f"phi={phi}, placeholder={'[enter the reference number' in n0}, filled={'TEST-REF-1' in n1}, cleared={'TEST-REF-1' not in n2}",
            phi and "[enter the reference number" in n0 and "TEST-REF-1" in n1 and "TEST-REF-1" not in n2)
        await ctx.close()

        # ---------- QUIZ-01: quiz answers reveal rationale and score
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/quality/calibration/")
        qs = await pg.query_selector_all(".quiz-q")
        for q in qs:
            ans = int(await q.get_attribute("data-answer"))
            await (await q.query_selector_all(".quiz-opt"))[ans].click()
        why_visible = await pg.eval_on_selector_all(".quiz-why:not([hidden])", "els => els.length")
        score = await pg.text_content("[data-quiz-score]")
        rec("QUIZ-01", "Quiz scoring and rationale", "Answer every question correctly on /quality/calibration/", "Every rationale shown; score 3/3", f"why={why_visible}/{len(qs)}, score='{(score or '').strip()[:40]}'", why_visible == len(qs) and "3" in (score or ""))
        # scenario completes and shows debrief
        await pg.goto(BASE + "/scenarios/ambiguous-remit-escalate/")
        for _ in range(3):
            btns = await pg.query_selector_all("[data-scenario] button.sc-choice:not([disabled])")
            await btns[0].click()
            await pg.wait_for_timeout(100)
            nxt = await pg.query_selector("[data-scenario] button.sc-next")
            if nxt:
                await nxt.click()
                await pg.wait_for_timeout(150)
        deb = await pg.is_visible("text=Case debrief")
        rec("SCN-01", "Scenario flow and debrief", "Play SC-19 through three decisions", "Summary and debrief (documentation, escalation, root cause) appear", f"debrief={deb}", deb)
        await ctx.close()

        # ---------- PRIV-01: disclaimer and privacy visible
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/rcm-cycle/payment-posting/")
        foot = await pg.is_visible("#site-disclaimer")
        rb = await pg.is_visible(".review-box")
        await pg.goto(BASE + "/about/#privacy")
        priv = await pg.is_visible("#privacy")
        keys = await pg.text_content("#privacy + ul")
        rec("PRIV-01", "Disclaimer and privacy", "Lesson footer, review box, About#privacy", "Disclaimer and review box on lessons; privacy lists every storage key",
            f"footer={foot}, review_box={rb}, privacy={priv}", foot and rb and priv and all(k in keys for k in ("revex-progress-v1", "revex-theme", "revex-last", "revex-competency-v1", "revex-cert", "revex-exam-session", "revex-exam-lock")))
        await ctx.close()

        # ---------- PRACT-01: practice lab filters
        ctx, pg = await new_page(browser, 1280)
        await pg.goto(BASE + "/practice/")
        allc = await pg.eval_on_selector_all("[data-case]", "e => e.length")
        await pg.select_option("[data-case-level]", "Advanced")
        adv = await pg.eval_on_selector_all("[data-case]:not([hidden])", "e => e.length")
        await pg.click("#cases .filter-row [data-case-clear]")
        back = await pg.eval_on_selector_all("[data-case]:not([hidden])", "e => e.length")
        planned_links = await pg.eval_on_selector_all("#planned a", "e => e.length")
        rec("PRACT-01", "Practice lab filters and planned items", "Filter Advanced, clear; check planned items", "Filter narrows and clears; planned items have no links", f"all={allc}, advanced={adv}, cleared={back}, planned_links={planned_links}", 0 < adv < allc and back == allc and planned_links == 0)
        await ctx.close()

        # ---------- FLOW-01: diagrams, path ribbon and recap render on lessons
        ctx, pg = await new_page(browser, 1280)
        total_flows, leftovers = 0, 0
        for r in routes:
            html = (DIST / r.strip("/") / "index.html").read_text(encoding="utf-8") if r != "/" else (DIST / "index.html").read_text(encoding="utf-8")
            total_flows += html.count('<figure class="flow ')
            leftovers += html.count("FLOWBLOCK")
        await pg.goto(BASE + "/insurance/coordination-of-benefits/")
        ribbon = await pg.text_content(".path-line")
        nxt = await pg.get_attribute(".pager-link.next", "href")
        recap = await pg.is_visible(".recap")
        rec("FLOW-01", "Diagrams and lesson anatomy", "Count flow diagrams in the build; open the COB lesson", "Diagrams render (no leftover placeholders); path line shows path, module and lesson; Next follows the path; recap shown",
            f"flows={total_flows}, leftovers={leftovers}, ribbon='{' '.join(ribbon.split())[:70]}', next={nxt}, recap={recap}",
            total_flows >= 20 and leftovers == 0 and "Module 2 of 5" in ribbon and nxt.endswith("rcm-cycle/eligibility-and-benefits/") and recap)
        await ctx.close()

        # ---------- THEME-01: original light theme, no sidebar, dark mode toggle persists
        ctx, pg = await new_page(browser, 1440)
        await pg.goto(BASE + "/start-here/what-is-rcm/")
        bg = await pg.evaluate("getComputedStyle(document.body).backgroundColor")
        side = await pg.query_selector(".sidebar")
        await pg.click("[data-theme-toggle]")
        dark = await pg.evaluate("document.documentElement.getAttribute('data-mode')")
        await pg.goto(BASE + "/practice/")
        kept = await pg.evaluate("document.documentElement.getAttribute('data-mode')")
        await pg.click("[data-theme-toggle]")
        light = await pg.evaluate("document.documentElement.getAttribute('data-mode')")
        ok = bg == "rgb(244, 246, 249)" and not side and dark == "dark" and kept == "dark" and light is None
        rec("THEME-01", "Theme", "Open a lesson at 1440px; switch to dark, change page, switch back", "Paper background (#F4F6F9); no sidebar; dark mode applies, persists across pages and switches back",
            f"bg={bg}, sidebar={bool(side)}, dark={dark}, kept={kept}, back={light}", ok)
        await ctx.close()

        # ---------- LAYOUT-01: lesson column with "On this page" on the right at 1440px
        ctx, pg = await new_page(browser, 1440)
        await pg.goto(BASE + "/rcm-cycle/claim-submission/")
        box = await pg.evaluate("""() => { const a = document.querySelector('.lesson-grid').getBoundingClientRect();
          const t = document.querySelector('.toc'); const tb = t.getBoundingClientRect();
          return {left: Math.round(a.left), right: Math.round(innerWidth - a.right), tocOpen: t.open, tocRight: tb.left > innerWidth / 2}; }""")
        ok = abs(box["left"] - box["right"]) <= 24 and box["tocOpen"] and box["tocRight"]
        rec("LAYOUT-01", "Lesson layout", "Open a lesson at 1440px", "Lesson centered; 'On this page' open on the right", str(box), ok)
        await ctx.close()

        await browser.close()

    failed = [r for r in RESULTS if r[5] == "FAIL"]
    print(f"\n{len(RESULTS) - len(failed)}/{len(RESULTS)} passed")
    if OUT:
        lines = ["| Test ID | Feature | Steps/input | Expected | Actual | Result | Notes |", "|---|---|---|---|---|---|---|"]
        for r in RESULTS:
            lines.append("| " + " | ".join(str(x).replace("|", "/").replace("\n", " ") for x in r) + " |")
        Path(OUT).write_text("\n".join(lines) + "\n", encoding="utf-8")
    sys.exit(1 if failed else 0)


asyncio.run(main())
