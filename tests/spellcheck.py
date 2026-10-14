"""US English spell check of all visible text in the built site.

Usage: python tests/spellcheck.py dist
Uses the system hunspell en_US dictionary (/usr/share/hunspell/en_US.dic) plus
tests/spelling-allow.txt. Exits 1 and lists unknown words if any are found,
which catches typos and British spellings (practise, organisation, centre...).
"""
import collections, os, re, sys
from html.parser import HTMLParser
from pathlib import Path

DIC = "/usr/share/hunspell/en_US.dic"
words = set()
for line in open(DIC, encoding="latin-1").read().splitlines()[1:]:
    w = line.split("/")[0].strip()
    if w:
        words.add(w.lower())
allow = {l.strip().lower() for l in (Path(__file__).parent / "spelling-allow.txt").read_text().splitlines() if l.strip() and not l.startswith("#")}
SUFFIXES = [("ies", "y"), ("ied", "y"), ("ier", "y"), ("iest", "y"), ("ily", "y"), ("es", ""), ("s", ""), ("ed", ""), ("ed", "e"),
            ("ing", ""), ("ing", "e"), ("ly", ""), ("er", ""), ("er", "e"), ("ers", ""), ("ers", "e"), ("est", ""), ("ment", ""),
            ("ments", ""), ("ness", ""), ("able", ""), ("able", "e"), ("ably", ""), ("ally", "al"), ("d", ""), ("al", ""),
            ("ions", "e"), ("ion", "e"), ("ion", ""), ("ions", "")]
PREFIXES = ("re", "un", "pre", "non", "over", "under", "co", "sub", "multi", "mis", "de", "in", "inter", "out", "dis", "self-")

def base_ok(l):
    if l in words or l in allow:
        return True
    for suf, rep in SUFFIXES:
        if l.endswith(suf) and (l[:-len(suf)] + rep) in words:
            return True
    m = re.match(r"(.*)([bdglmnprt])\2(ed|ing|er)$", l)
    return bool(m and m.group(1) + m.group(2) in words)

def ok(w):
    l = re.sub(r"['’]s$", "", w.lower().replace("’", "'"))
    if base_ok(l):
        return True
    if "-" in l:
        return all(ok(p) for p in l.split("-") if p)
    return any(l.startswith(p) and base_ok(l[len(p):]) for p in PREFIXES)

class Text(HTMLParser):
    SKIP = {"script", "style", "code", "pre", "svg", "kbd"}
    def __init__(self):
        super().__init__(); self.depth = 0; self.parts = []
    def handle_starttag(self, tag, attrs):
        if tag in self.SKIP: self.depth += 1
    def handle_endtag(self, tag):
        if tag in self.SKIP: self.depth = max(0, self.depth - 1)
    def handle_data(self, data):
        if not self.depth: self.parts.append(data)

bad, where = collections.Counter(), {}
root = Path(sys.argv[1])
for f in root.rglob("*.html"):
    t = Text(); t.feed(f.read_text(encoding="utf-8"))
    for w in re.findall(r"[A-Za-z][A-Za-z'’-]*[A-Za-z]", " ".join(t.parts)):
        if w.isupper() or (w[0].isupper() and not w[1:].islower()):
            continue  # acronyms and CamelCase names
        if not ok(w):
            bad[w] += 1; where.setdefault(w, str(f.relative_to(root)))
for w, n in sorted(bad.items(), key=lambda x: x[0].lower()):
    print(f"{w}\t{n}\t{where[w]}")
print(f"{len(bad)} unknown words")
sys.exit(1 if bad else 0)
