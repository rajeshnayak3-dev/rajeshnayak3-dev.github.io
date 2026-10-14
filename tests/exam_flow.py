# Full exam flow against tests/mock-api.js. Build with api_url "http://localhost:8790" into a copy of dist served on :8771, start:
#   node tests/mock-api.js apps-script/Code.gs <site>/static/exam/key.json
# then run: python tests/exam_flow.py (from the folder that contains the built site as ./examsite)
import asyncio, json
from playwright.async_api import async_playwright
key=json.load(open('examsite/static/exam/key.json'))
async def run(pass_it):
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={"width":1440,"height":900})
        errs=[]; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto("http://localhost:8771/certification/", wait_until="networkidle")
        await pg.fill("#cand-name","Asha Verma"); await pg.check("#cand-agree"); await pg.click("[data-start-btn]")
        await pg.wait_for_selector("[data-screen=exam]:not([hidden])")
        sess=json.loads(await pg.evaluate("localStorage.getItem('revex-exam-session')"))
        for i,qid in enumerate(sess["ids"]):
            a=key[qid]["a"]
            if not pass_it and i%3==0: a=(a+1)%2  # deliberately wrong on every third question
            await pg.click(f".opt[data-i='{a}']")
            if i < len(sess["ids"])-1: await pg.click("[data-next]")
        await pg.click("[data-review]"); await pg.click("[data-submit-confirm]")
        await pg.wait_for_selector("[data-screen=result]:not([hidden])", timeout=15000)
        await pg.wait_for_timeout(1500)
        print("result:", (await pg.inner_text("[data-result-head]")).replace("\n"," | "))
        if pass_it:
            cert=json.loads(await pg.evaluate("localStorage.getItem('revex-cert')")); print("cert", cert["id"])
            await pg.goto("http://localhost:8771/verify/?id="+cert["id"], wait_until="networkidle"); await pg.wait_for_timeout(1500)
            print("verify:", (await pg.inner_text("[data-verify-result]")).replace("\n"," | "))
            await pg.goto("http://localhost:8771/progress/", wait_until="networkidle"); print("progress cert:", await pg.inner_text("[data-cert-have]"))
        print("errors", [e for e in errs])
        await b.close()
asyncio.run(run(True)); asyncio.run(run(False))
