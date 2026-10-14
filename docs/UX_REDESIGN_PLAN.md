# UX redesign plan and decisions

Reviewed 14 October 2026. Status: implemented items are marked **Done**; the rest are proposals.

## Information architecture

Five top-level destinations, in the header on desktop (≥1101px) and at the top of the menu drawer below that. Global search stays in the header on every page.

| Destination | URL | Contains | Status |
|---|---|---|---|
| Dashboard | `/` | Hero with two actions, three audience entry points, "Your learning" (local, disclosed), featured path, practice and reference previews, trust strip | Done |
| Learning paths | `/learn/`, `/learn/<path>/` | New to RCM · Working in RCM · QA, senior, team lead and analyst. Each: audience, outcomes, prerequisites, modules, practice, estimated time (labelled estimate), completion criteria, next recommended lesson | Done |
| RCM reference | `/reference/` | Denial and remark codes, terminology, payers and programs, claim forms and transactions, specialties, filing limits, official sources | Done |
| Practice lab | `/practice/` | Scenario library (level and topic filters), quizzes by section, calculators, interview practice, planned items labelled and unlinked | Done |
| Career & certification | `/career/` | Roles with competencies and self-check, interview preparation, exam status | Done |

Secondary destinations (About, disclaimer, privacy, sources, report an error) are in the footer. "Your learning" (progress) is in the drawer and the header icon.

**Routes preserved:** every URL that existed before still works (`/start-here/…`, `/rcm-cycle/…`, `/denials/codes/…`, `/scenarios/…`, `/tools/…`, `/certification/`, `/verify/`, `/progress/`). Topic sections stay in the sidebar as "Course topics". New pages only add URLs. The link checker confirms no broken internal links.

**Current-area highlight:** `area_for(url)` in `build.py` maps each page to one destination (lessons → Learning paths; codes, glossary, specialties, sources → Reference; scenarios, tools → Practice; interview prep, certification, verify → Career). Tested in NAV-02.

## Page-level decisions

### Home
- Compact hero: "From your first claim to confident RCM decisions." with **Start learning** and **Practise a case**. The animated claim ticket was removed to keep the hero compact; its arithmetic lessons live in the lessons.
- Three audience cards map to the three paths and show local progress.
- "Your learning" says *saved in this browser only*. No account-style personalisation.
- Counts shown are real build-time counts. No invented metrics or testimonials.
- Trust strip: free/no sign-up, fictional data, sourced where it matters, educational not advice.

### Lesson page
Breadcrumbs → title, level, estimated reading time → **objectives** (when the lesson has them) → TOC (desktop side; collapsible on smaller screens) → content (explanation, worked examples, callouts, interview answer) → quiz with rationale → **Scope and review** box (scope, sources, review date or "not yet re-reviewed", report an error) → mark complete, previous/next.

Not yet done for every lesson: objectives exist on the 7 new quality lessons; a "Your turn" decision exercise and a job-ready checklist are proposed as optional front-matter blocks (`exercise`, `checklist`) in a later phase.

### Code page
REVEX-summary note with the official X12 list link → meaning → causes (labelled common patterns) → call questions → steps → professional/hospital differences → prevention → paired RARCs → worked example → **Before you act: what not to assume** (group-aware) → related codes → review note.

### Practice case page
Case ID and level → objectives (new cases) → fictional evidence table → one decision at a time with a verdict and rationale for every choice → takeaways → **Case debrief** (what to document, when to escalate, root cause and prevention, sources).

### Certification
State is decided at build time from `site.yaml`. Closed: "Coming soon: not open yet", no form, disabled button, what the certificate will and won't mean, data use. Open: "Free educational certificate", open-book disclosure, consent text, name rules.

## Visual direction
Kept the existing brand (claim-form motif: navy ink, form red, paid green; Public Sans; IBM Plex Mono for codes). Changes:
- Status uses **text labels** (Open, Urgent, Passed, Planned, Within common range) with colour as a secondary cue.
- `--ink-3` darkened for AA contrast (5.13:1 on the page background).
- Restrained cards with subtle borders; no new gradients or decorative images.
- `prefers-reduced-motion` turns off transitions and animations site-wide.

## Responsive and accessibility
- Header nav collapses into the drawer below 1101px; drawer has its own close button and the scrim closes it.
- Tables sit in focusable horizontal scrollers (`.table-wrap`), forms stack in a single column on phones.
- Skip link, visible focus (`:focus-visible` outline including form fields), labelled inputs, `aria-live` on calculator results, filter counts and the search hint.
- Tested at 360, 390, 768, 1024, 1280 and 1440px with no horizontal page scroll on 22 key pages (R-02).

## Proposed next
1. Optional lesson blocks: "Your turn" decision and job-ready checklist.
2. Claim lifecycle simulation and denial decision tree (listed as Planned in the Practice lab).
3. Capstone with a scoring rubric.
4. Specialty practical cases.
