# REVEX repository and feature inventory

Reviewed: 14 October 2026. Baseline: commit `d540ca9` (before this audit). Changes from this audit are listed in `CHANGELOG.md`.

## 1. Architecture

| Area | What the repository actually uses |
|---|---|
| Framework / build | No framework. `build.py` (Python 3) is a static site generator: Jinja2 templates, Python-Markdown (tables, admonition, md_in_html, toc, attr_list), PyYAML. Output is `dist/`. `--preview` adds `index.html` to links for file:// viewing. |
| Dependencies | `requirements.txt`: Jinja2, Markdown, PyYAML (and MarkupSafe via Jinja2). Tests additionally use Node (no packages) and Playwright for Python. |
| Hosting / deploy | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`: setup-python → `python build.py` → `upload-pages-artifact@v3` → `deploy-pages@v4`). Site: https://rajeshnayak3-dev.github.io/ |
| Routing | One folder per page with `index.html` (pretty URLs). All internal links are rewritten to relative paths at build time (`make_rel`), so the site works from any base path. `404.html` uses absolute paths. `.nojekyll` written. Sitemap and robots.txt generated. |
| Content storage | Lessons: `content/<section>/*.md` (YAML front matter + Markdown). Data: `data/denials*.yaml` (code library), `data/specialties-*.yaml`, `data/scenarios*.yaml`, `data/glossary.yaml`, and (new) `data/paths.yaml`, `data/roles.yaml`, `data/sources.yaml`. Site settings: `site.yaml`. |
| Templates | `templates/*.html`: `base.html` (shell, header, sidebar, footer, search modal), `home`, `lesson`, `section`, `denial`, `denial_index`, `specialty`, `scenario`, `glossary`, `progress`, `about`, `certification`, `verify`, `404`, and (new) `learn`, `path`, `reference`, `practice`, `career`, `sources`. Shared macros in `_parts.html`, icons in `_icons.html`. |
| CSS / design system | `static/css/site.css`: tokens on `:root` (light default) and `:root[data-mode="dark"]`; Public Sans and IBM Plex Mono from Google Fonts; "claim form" visual motif (navy ink, form red, paid green). |
| Client JS | `site.js` (theme, drawer, search, progress, quizzes, scenarios, filters, paths, competencies), `tools.js` (calculators; pure functions exposed as `window.REVEXCalc`), `exam.js` (certification exam), `cert.js` (certificate canvas, PNG/PDF, LinkedIn link). |
| External libraries / APIs | Google Fonts (CSS + fonts). On `/certification/` and `/verify/` only: jsPDF 2.5.1 and qrcodejs 1.0.0 from cdnjs. Certification backend: Google Apps Script web app (not deployed; `api_url` empty). No analytics, no cookies. |
| Browser storage | `localStorage` only: `revex-progress-v1` (completed pages, quiz scores), `revex-theme`, `revex-last`, `revex-competency-v1` (new), `revex-exam-session`, `revex-exam-lock`, `revex-cert`. No sessionStorage, no IndexedDB. |
| Search | Build writes `static/search-index.json` (lessons, codes, glossary terms, hub pages); client-side scoring in `site.js`. |
| Exam bank | Built from every lesson quiz plus generated code-meaning and specialty questions: `static/exam/bank.json` (questions) and `static/exam/key.json` (answers). `apps-script/Code.gs` is generated from `Code.template.gs` with the key embedded. |

## 2. Feature inventory

| Feature | Location | Current behavior (after this audit) | Works? | Risk | Recommended action |
|---|---|---|---|---|---|
| Lessons and tool pages (70; 64 tracked lessons, 6 tools) | `content/*` | Markdown lessons with TOC, quiz, scope/review box, mark-complete, prev/next | Yes (tested R-01, QUIZ-01) | Many lessons not yet re-reviewed against sources | Continue the review program section by section (see content audit) |
| Learning paths (3) | `data/paths.yaml`, `/learn/` | Outcomes, prerequisites, modules, practice, estimated time, local progress and next lesson | Yes (PROG-01) | Time estimates are word-count based | Calibrate estimates with learner feedback |
| Five-area navigation | `base.html` | Dashboard, Learning paths, RCM reference, Practice lab, Career & certification; drawer on mobile | Yes (NAV-01..03) | — | — |
| Global search | `site.js`, search index | `/` shortcut, results, empty state | Yes (SRCH-01) | Simple keyword scoring | Consider fuzzy matching later |
| Denial/remark code library (71) | `data/denials*.yaml`, `/denials/codes/` | Text + category filter, clear, empty state; pages show meaning, causes, call questions, steps, prevention, "what not to assume", X12 link | Yes (REF-01, REF-02) | Summaries not individually re-checked vs X12 | Review entries against X12 lists; add per-code review dates |
| Glossary (193 terms) | `data/glossary.yaml` | A–Z list with filter | Yes (R-01) | Not re-reviewed | Review policy-sensitive terms |
| Specialties (32) | `data/specialties-*.yaml` | Services, codes, prerequisites, denial patterns, tips; scope box | Yes | No practical case or sources per specialty; not re-reviewed | Add specialty cases and sources (Module 11) |
| Practice cases (21) | `data/scenarios*.yaml` | Step-by-step decisions with rationale per choice; new cases add objectives, debrief, escalation, root cause, sources | Yes (SCN-01) | Older 16 cases lack objectives/debrief fields | Backfill fields on SC-01..16 |
| Practice lab hub | `/practice/` | Case filters, quizzes by section, tools, interview practice, clearly labeled "Planned" items with no links | Yes (PRACT-01) | — | Build the planned simulation/decision tree/capstone |
| Reference hub, sources page | `/reference/`, `/sources/` | Category cards; official sources with scope and review date | Yes | External links not machine-checked (sandbox has no internet) | Run an external link check from a normal network |
| Career & certification hub | `/career/` | 8 roles with competencies linked to lessons; local self-check; interview prep; exam status | Yes (PROG-02) | — | — |
| Timely filing calculator | `tools.js`, `/tools/timely-filing-calculator/` | Requires a chosen limit; calendar-date arithmetic; Medicare 1-calendar-year rule; optional weekend/federal-holiday roll; 5-day presumed receipt; assumptions shown | Yes (TF-01..16, TOOL-01) | Payer rules vary | Keep "verify" messaging |
| Payment calculator | `/tools/payment-calculator/` | Plan-design choice, optional OOP cap, secondary estimate, validation, assumptions | Yes (PAY-01..08, TOOL-03) | Illustrative only | — |
| KPI calculator | `/tools/kpi-calculator/` | Validation for blanks, negatives, impossible values, zero denominators; definitions table | Yes (KPI-01..05, TOOL-02) | Benchmarks are common ranges, not standards | — |
| 8-minute rule calculator | `/tools/therapy-units-calculator/` | Medicare total-time method | Loads without errors (R-01); formula not newly tested | Formula not covered by unit tests | Add unit tests |
| AR note generator | `/tools/ar-note-generator/` | Structured note with placeholders, gaps list, copy, clear, PHI warning | Yes (TOOL-04) | Users could still paste PHI | Warning shown; nothing stored |
| Progress tracking | `site.js`, `/progress/` | Local completion and quiz scores, reset (two-click), disclosure | Yes (PROG-01) | Device-only | Disclosed |
| Certification exam | `/certification/`, `exam.js`, `apps-script/` | While `api_url` is empty: "Coming soon", no start form, disabled button, no claims elsewhere. With a backend: 50 questions, 60 min, 75%, server scoring, 24 h retake lock | Closed state: yes (CERT-01..03). Open state: tested against a local mock of the real `Code.gs` (pass, fail, verify, sanitizing, boundary 37/38) | Answer key is public, so the exam is open-book; Google quota limits | Described honestly as open-book educational certificate |
| Certificate verification | `/verify/` | Closed: explains no certificates exist. Open: shows name, title, issue date, status only (no score); 8-character random IDs | Mock-tested | Revocation path not exercised in tests | Test revoke after deployment |
| Theme | `base.html`, `site.js` | Light default; dark persists | Yes (THEME-01) | — | — |
| About, disclaimer, privacy | `/about/`, footer | Independent-resource disclaimer, PHI warning, every storage key listed, third-party requests disclosed | Yes (PRIV-01) | — | — |

## 3. Known issues and limits (after this audit)

- External links (CMS, X12, eCFR, MACs, HHS) couldn't be fetched from the build sandbox; URLs were taken from search results or the pages themselves. Run an external link check from a normal network.
- 51 of the 70 lesson and tool pages, the 71 code entries, 32 specialties and 16 older cases are labeled "not yet re-reviewed under the October 2026 source policy". The labels are honest; the review itself is ongoing work.
- The exam's answer key is public by design (so the Apps Script stays in sync), so the exam can't be a concealed assessment.

## 4. Test plan

See `QA_TEST_PLAN.md` for test IDs, steps and results. Summary of what runs:

| Suite | Command | Covers |
|---|---|---|
| Calculator unit tests | `node tests/calc.test.js` (also run with `TZ=America/New_York` and `TZ=Australia/Sydney`) | Dates, DST, leap years, holidays, KPI validation, payment math |
| Internal links | `python tests/linkcheck.py dist` | Every `href`/`src` and in-page anchor in 221 HTML files |
| Browser end-to-end | `python tests/e2e.py http://localhost:PORT docs/e2e-results.md` | All routes, layout at 6 widths, navigation, keyboard, search, filters, progress, certification state, tools, quizzes, scenarios, privacy, theme |
| Apps Script logic | `node tests/apps-script.test.js apps-script/Code.gs` | Scoring boundaries, IDs, verify, duplicates, stale keys, name sanitizing |
| Exam flow | `tests/exam_flow.py` with `tests/mock-api.js` | Full pass and fail flow, certificate, verification, progress page |
