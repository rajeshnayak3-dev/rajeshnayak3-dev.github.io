# QA test plan and results

Run on 14 October 2026 against the build in this commit (220 routes). Every PASS below was actually executed; nothing is marked passed from inspection alone. Environment: Linux, Python 3.13, Node, Playwright Chromium (headless).

## How to run

```bash
python build.py
node tests/calc.test.js
python tests/linkcheck.py dist
node tests/apps-script.test.js apps-script/Code.gs
python -m http.server -d dist 8000 &   # in another terminal
python tests/e2e.py http://localhost:8000 docs/e2e-results.md
```

The exam flow test needs a build with `api_url: "http://localhost:8790"` (don't commit that), the mock (`node tests/mock-api.js apps-script/Code.gs <site>/static/exam/key.json`) and `python tests/exam_flow.py`.

## 1. Calculator unit tests (29)

| Test ID | Feature | Steps/input | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|---|
| TF-01 | Calculator logic | `node tests/calc.test.js` | parseDate rejects impossible dates | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-02 | Calculator logic | `node tests/calc.test.js` | parseDate accepts leap day | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-03 | Calculator logic | `node tests/calc.test.js` | 90 days from 2026-01-01 is 2026-04-01 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-04 | Calculator logic | `node tests/calc.test.js` | 180 days across US DST change (2026-03-01 + 180 = 2026-08-28) | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-05 | Calculator logic | `node tests/calc.test.js` | 365 days across a leap year (2023-03-01 + 365 = 2024-02-29) | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-06 | Calculator logic | `node tests/calc.test.js` | 1 calendar year from 2026-03-15 is 2027-03-15 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-07 | Calculator logic | `node tests/calc.test.js` | 1 calendar year from leap day 2024-02-29 clamps to 2025-02-28 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-08 | Calculator logic | `node tests/calc.test.js` | Month-end: 30 days from 2026-01-31 is 2026-03-02 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-09 | Calculator logic | `node tests/calc.test.js` | Workday roll: 2026-01-03 + 1 year = Sun 2027-01-03 -> Mon 2027-01-04 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-10 | Calculator logic | `node tests/calc.test.js` | Workday roll over a holiday: Sat 2026-07-04 + 1 year = Sun 2027-07-04 -> Mon 07-05 is observed holiday -> Tue 2027-07-06 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-11 | Calculator logic | `node tests/calc.test.js` | No roll when the option is off | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-12 | Calculator logic | `node tests/calc.test.js` | Presumed receipt adds 5 days before counting (Medicare redetermination 120 days) | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-13 | Calculator logic | `node tests/calc.test.js` | Days left and passed deadlines | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-14 | Calculator logic | `node tests/calc.test.js` | Invalid inputs return errors, not dates | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-15 | Calculator logic | `node tests/calc.test.js` | Federal holidays 2026 (observed) | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| TF-16 | Calculator logic | `node tests/calc.test.js` | New Year's Day 2022 (Saturday) is observed Fri 2021-12-31 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| KPI-01 | Calculator logic | `node tests/calc.test.js` | Known values for the example data | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| KPI-02 | Calculator logic | `node tests/calc.test.js` | Zero denominators give an error, never NaN or Infinity | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| KPI-03 | Calculator logic | `node tests/calc.test.js` | Blank inputs ask for the missing field | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| KPI-04 | Calculator logic | `node tests/calc.test.js` | Negative values are rejected | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| KPI-05 | Calculator logic | `node tests/calc.test.js` | Impossible values are rejected | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-01 | Calculator logic | `node tests/calc.test.js` | Deductible then coinsurance: billed 250, allowed 150, ded 50, 20% | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-02 | Calculator logic | `node tests/calc.test.js` | Copay only: allowed 150, copay 30 | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-03 | Calculator logic | `node tests/calc.test.js` | Copay then deductible and coinsurance | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-04 | Calculator logic | `node tests/calc.test.js` | Out-of-pocket cap limits patient share | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-05 | Calculator logic | `node tests/calc.test.js` | Deductible larger than allowed: plan pays 0, no negatives | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-06 | Calculator logic | `node tests/calc.test.js` | Secondary non-duplication estimate | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-07 | Calculator logic | `node tests/calc.test.js` | Invalid inputs | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |
| PAY-08 | Calculator logic | `node tests/calc.test.js` | Allowed above billed warns and never shows a negative contractual adjustment | As expected | PASS | Also passed with TZ=America/New_York and TZ=Australia/Sydney |

## 2. Browser end-to-end tests (23)

| Test ID | Feature | Steps/input | Expected | Actual | Result | Notes |
|---|---|---|---|---|---|---|
| R-01 | All routes | Load all 220 routes at 1280px | HTTP 200, no JS errors | 220/220 clean | PASS |  |
| R-02 | Responsive layout | 22 key pages at 360, 390, 768, 1024, 1280, 1440px | No horizontal page scroll | none | PASS |  |
| NAV-01 | Desktop navigation | Open /learn/working-in-rcm/ at 1280px | 5 destinations visible; 'Learning paths' current | visible=True, ['Dashboard', 'Learning paths', 'RCM reference', 'Practice lab', 'Career & certification'], current=Learning paths | PASS |  |
| NAV-02 | Current-area highlight | Visit a page in each area | Matching destination highlighted | all correct | PASS |  |
| NAV-03 | Mobile menu | 390px: tap menu, check destinations, tap close | Header nav hidden; drawer opens with destinations; aria-expanded true; closes | hidden_nav=True, opened=True, destinations=True, aria-expanded=true, closed=True | PASS |  |
| KB-01 | Keyboard access | Tab, Enter on skip link, Tab again | Skip link first; jumps to #main; next focus has a visible outline | first='Skip to content', at_main=True, outline=solid | PASS |  |
| SRCH-01 | Global search | Press /, type CO-197, then nonsense | Results include CO-197; nonsense shows an empty-state message | 5 hits, first='DenialsCO-197 denial: Precertification, ', empty='No results for “CO-197zzzzqqq”. Try a shorter word' | PASS |  |
| REF-01 | Code library search and filters | Type 'authorization'; choose Timely filing; type nonsense; Clear | Narrowed results; empty state; clear restores all | total=71, text=3, cat=1, empty=True, cleared=71, count='71 codes' | PASS |  |
| REF-02 | Code page caveats | Open CO-50 | Shows REVEX-summary note with X12 link and 'what not to assume' box | official=True, caveat=True | PASS |  |
| PROG-01 | Progress save, path progress, reset | Mark 'What is RCM?' complete; open path; open progress; reset twice | Path shows 1 complete and next lesson moves on; reset clears to 0 | path='1 of 33 lessons and cases completed (3%) on this device.', next='Revenue cycle in general business vs in healthcare', before='1%of REVEX completed', after='0%of REVEX completed' | PASS |  |
| PROG-02 | Competency self-check | Tick one competency, reload | Tick persists; count shows 1/4 | kept=True, count=1/4 | PASS |  |
| CERT-01 | Certification status | Open /certification/ with api_url empty | No start form; 'coming soon'; disabled button; no verifiable-certificate claims | form=False, soon=True, disabled=True, claims=[] | PASS |  |
| CERT-02 | Verification while closed | Open /verify/?id=… | Explains no certificates have been issued | Verification isn't available yet because the REVEX exam hasn't opened. No REVEX  | PASS |  |
| CERT-03 | No certificate claims elsewhere | Read sidebar card and home page | Sidebar says 'Coming soon'; home makes no 'verifiable' claim | sidebar='REVEX examComing soon: not open yet', home_ok=True | PASS |  |
| TOOL-01 | Timely filing UI | 390px: no limit chosen; then 1 calendar year from 01/03/2026 with workday roll | Asks for a limit first; then deadline Mon 01/04/2027 with roll note and assumptions | before='Choose the filing or appeal limit from t', after has 01/04/2027=True, roll note=True | PASS |  |
| TOOL-02 | KPI calculator validation UI | Set claims submitted = 0 and clear charges | Errors shown, no NaN/Infinity | Days in AR–Enter charges for the AR period.AR over 90 days15.0%Within common rangeCommon target: under 15–20%Net collect | PASS |  |
| TOOL-03 | Payment calculator validation UI | Enter a negative allowed amount | Error, no result | Error Amounts can't be negative. | PASS |  |
| TOOL-04 | AR note generator | Check PHI warning; empty note placeholders; fill; clear | Warning visible; placeholders not invented; filled values appear; clear removes them | phi=True, placeholder=True, filled=True, cleared=True | PASS |  |
| QUIZ-01 | Quiz scoring and rationale | Answer every question correctly on /quality/calibration/ | Every rationale shown; score 3/3 | why=3/3, score='You scored 3 out of 3. Well done. This t' | PASS |  |
| SCN-01 | Scenario flow and debrief | Play SC-19 through three decisions | Summary and debrief (documentation, escalation, root cause) appear | debrief=True | PASS |  |
| PRIV-01 | Disclaimer and privacy | Lesson footer, review box, About#privacy | Disclaimer and review box on lessons; privacy lists every storage key | footer=True, review_box=True, privacy=True | PASS |  |
| PRACT-01 | Practice lab filters and planned items | Filter Advanced, clear; check planned items | Filter narrows and clears; planned items have no links | all=21, advanced=5, cleared=21, planned_links=0 | PASS |  |
| THEME-01 | Theme | Load home; toggle; navigate | Light by default; dark persists across pages | default=None, after=dark | PASS |  |

## 2b. Spelling

| Test ID | Feature | Steps/input | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|---|
| SPELL-01 | US English spelling | `python tests/spellcheck.py dist` | 0 unknown words | 0 unknown words (2026-10-15) | PASS | hunspell en_US plus `tests/spelling-allow.txt` (255 reviewed medical, payer and RCM terms); verified it flags British spellings and typos |

## 3. Links

| Test ID | Feature | Steps/input | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|---|
| LINK-01 | Internal links and anchors | `python tests/linkcheck.py dist` | 0 missing pages or anchors | 221 HTML files, 0 problems | PASS | External links weren't checked: the test environment has no general internet access |

## 4. Certification backend and flow

| Test ID | Feature | Steps/input | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|---|
| AS-01 | Pass boundary | 38/50 correct (12 unanswered) | 76%, passed | 76%, passed | PASS | Unanswered counted wrong |
| AS-02 | Fail boundary | 37/50 correct | 74%, not passed, no ID | 74%, not passed, no ID | PASS | |
| AS-03 | ID format | Pass | `RVX-YYYYMM-` + 8 characters | e.g. RVX-202610-C7KAQY5G | PASS | |
| AS-04 | Verify | Valid, lower-case, unknown, junk IDs | Valid; valid; "not found"; "invalid format" | As expected | PASS | |
| AS-05 | Revoke | Set Status to Revoked, verify | "has been revoked" | As expected | PASS | |
| AS-06 | Privacy | Verify response | No score fields | No `percent` or `score` | PASS | |
| AS-07 | Bad submissions | 10 questions; duplicate; unknown question | Errors; stale flag on unknown | As expected | PASS | |
| AS-08 | Name sanitizing | `<script>x</script> Bob`; `José … O'Brien-Ünal` | Only letters, marks, spaces, . ' ’ - kept | `scriptxscript Bob`; `José scriptalertscript O'Brien-Ünal` | PASS | |
| EX-01 | Full pass flow (browser + mock of real Code.gs) | Start, answer all correctly, submit | Certificate, ID stored, verify page shows name/title/date only, progress page shows certificate | As expected, no JS errors | PASS | QR and PDF libraries couldn't load (CDN blocked in the test environment); PDF falls back to PNG |
| EX-02 | Full fail flow | Every third answer wrong | "Not passed", 24 h retake message, breakdown | 66%, as expected | PASS | |
| CERT-01…03 | Closed state on the real build | See section 2 | | | PASS | |

## 5. Accessibility checks

| Test ID | Feature | Steps/input | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|---|
| A11Y-01 | Text contrast | WCAG formula on palette | ≥ 4.5:1 for body text colors | ink-3 5.13:1 (was 4.33:1), ink-2 6.92:1, link 7.18:1, green 5.43:1, amber 5.85:1, red 6.07:1 on #F4F6F9 | PASS | Light theme; dark theme not measured |
| KB-01 | Keyboard | See section 2 | | | PASS | |

## Not tested / limits

- External links (CMS, X12, eCFR, HHS, MACs) weren't fetched by an automated checker; several were confirmed through search results during the review.
- Screen-reader behavior wasn't tested with a real screen reader; only semantic markup, labels and `aria-live` regions were checked.
- Dark-mode contrast wasn't measured.
- The 8-minute rule calculator's formula has no unit tests (page load only).
- The live Google Apps Script deployment doesn't exist yet, so Google quotas, CORS and real latency are untested.
- Real mobile devices weren't used; widths were emulated in Chromium.
