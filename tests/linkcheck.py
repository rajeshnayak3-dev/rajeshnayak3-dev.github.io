# Internal link and anchor checker. Usage: python tests/linkcheck.py dist
import os, re, sys
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse, unquote
root = sys.argv[1]
class P(HTMLParser):
    def __init__(s): super().__init__(); s.links=[]; s.ids=set()
    def handle_starttag(s, t, a):
        a=dict(a)
        if "id" in a: s.ids.add(a["id"])
        for k in ("href","src"):
            if k in a and a[k]: s.links.append(a[k])
pages={}
for dp,_,fs in os.walk(root):
    for f in fs:
        if f.endswith(".html"):
            path=os.path.join(dp,f); p=P(); p.feed(open(path,encoding="utf-8").read()); pages[path]=p
bad=0
for path,p in pages.items():
    if path.endswith("404.html"): continue
    for l in p.links:
        if l.startswith(("http","mailto:","#","data:")):
            if l.startswith("#") and l[1:] and l[1:] not in p.ids: print("ANCHOR", path, l); bad+=1
            continue
        u=urlparse(l); target=os.path.normpath(os.path.join(os.path.dirname(path), unquote(u.path)))
        if u.path.endswith("/") or os.path.isdir(target): target=os.path.join(target,"index.html")
        if not os.path.exists(target): print("MISSING", path, l); bad+=1; continue
        if u.fragment and target in pages and u.fragment not in pages[target].ids: print("FRAG", path, l); bad+=1
print("pages", len(pages), "problems", bad)
