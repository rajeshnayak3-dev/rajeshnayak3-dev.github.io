# Changelog

## 2026-10-15 — First-version look with the current learning structure

- **Identity restored:** navy ink and form-red REVEX mark with "RCM Academy", Public Sans with bold headings, IBM Plex Mono for codes and amounts, squarer form-like buttons. The four tabs keep their shadowed segmented control, with a red underline on the current tab.
- **Home:** the animated claim ticket (Charge → Scrub → Accepted → Adjudicated → Paid) is back, next to the headline, two actions, search and real counts. The caption now states the deductible is met so the $28.10 coinsurance adds up.
- **Lessons:** the course sidebar with progress counts is always visible from 1280px; below that it opens from "All lessons". The local bar and path ribbon are merged into one sticky bar with Next. The right rail shows when there is room.
- **Flowcharts:** step flows switch to a vertical layout when their box is too narrow, so text no longer wraps word by word.

## 2026-10-15 — Layout that uses the width, shadowed tabs, content re-validation

- **Header:** frosted white header; the four tabs sit in a segmented control with soft shadows, and the current tab is raised.
- **Lessons and topic pages:** a sticky local bar under the header shows the topic, an **All lessons** button (opens the lesson list as a drawer) and **Next**. The left sidebar no longer takes up space, so content is centered (max 1240px) and a right rail holds "On this page", "In this module" and "Up next". This removes the empty space on the right of lessons. Topic intros use the full width.
- **Content validation:** a second expert pass over filing limits, appeal levels and windows, Medicare Secondary Payer employer-size rules, QMB, ABN and modifiers GA/GZ/GY, E/M level selection (MDM or time), and all 71 code-library titles against the official CARC/RARC meanings. No factual errors found; see docs/RCM_CONTENT_AUDIT.md.
- **Tests:** e2e now checks the local bar, drawer and centered lesson width (THEME-01, LAYOUT-01): 25/25 pass.

## 2026-10-15 — Dotted canvas, flowcharts and lesson structure

- **Figma-style dotted canvas** behind every page; lessons, code pages, cases and About sit on it as white frames.
- **Flowcharts:** a new `flow` block in lesson Markdown draws step flows, yes/no decision trees and phase maps as accessible HTML (no images, works on phones). 22 diagrams added: the RCM cycle, how one visit becomes money, money and information flow, claim journey, rejection vs denial, payer checks, posting decisions, choosing the AR action, five steps for any denial, ERA codes, who owes the amount, Medicare appeal ladder, corrected-claim routes, COB order, QMB billing, verification, authorization, no-response answers, secondary billing, rejection routine, underpayment disputes, root cause and CAPA. Where a diagram showed the same steps as a long list, the list was removed.
- **Lesson structure (instructional design):** a path ribbon on every path lesson ("New to RCM › Module 2 of 5 › Lesson 3 of 7" with progress dots); Next follows the learning path; a "Remember this" recap before the quiz on all 29 New to RCM lessons; a prompt to practice at the end of a path.

## 2026-10-15 — Light Google-style theme, simpler navigation, US spelling

- **Spelling:** the whole site now uses US English (practice, prioritize, organization, program, anesthesia, center, behavior and others: 269 changes in 77 files). Related-code headings no longer lowercase acronyms ("NCCI", "RARCs"). New `tests/spellcheck.py` checks every page against a US English dictionary plus a reviewed allowlist of medical and payer terms.
- **Look:** white, Google Material-style theme with soft pastel containers, pill buttons, rounded cards, Outfit headings and Roboto text. Removed the dark hero, drawings, heartbeat animation, patterns and confetti.
- **Navigation:** four top tabs (Learn, Practice, Reference, Career) plus search and My progress; the lesson list appears only inside lessons; hub and reference pages are full width; phones get a bottom tab bar (Home, Learn, Practice, Reference, Progress). Theme switch removed.
- **Home:** a centered search box with quick-start chips, "Where are you starting from?" (three paths), "How it works", "Explore" and a short "Why REVEX is free".

## 2026-10-14 — Professional look and simpler learning

- New palette: midnight navy, clinical blue, healthcare teal and mint, with three levels of navy-tinted shadow for depth.
- Home hero is now a midnight panel with abstract glows, flowing contour lines and a dot grid, plus three floating "product" cards that teach: a fictional member insurance card, a claim status tracker and an ERA payment breakdown with a chart. The heartbeat claim journey now glows inside the hero.
- Home simplified to five blocks: hero, how REVEX works (learn, practice, check), choose your path, start with a topic, and why you can trust it. A "continue where you left off" bar appears only once you've started.
- Learning paths page cut down to one clear card per path.
- Lessons: hover or tap underlined RCM terms (ERA, CARC, COB, timely filing…) to see a plain-English definition from the glossary; a reading progress bar along the top; the "On this page" list starts collapsed on laptops; sources and review details fold into one line you can open.
- Inner page headers get a soft abstract background in each area's accent color.

## 2026-10-14 — Friendlier visual layer

- Clinical teal added to the palette, with one accent color per main area (Learning paths teal, Reference blue, Practice amber, Career red).
- Home hero: line illustration of a claim form on a clipboard with a stethoscope, and a heartbeat line that draws once to show a claim's journey (Charge → Scrub → Accepted → Adjudicated → Paid) before a PAID stamp lands. Replay button included.
- Small healthcare spot illustrations on path cards, hub pages and home previews; faint claim-form dot grid and medical-cross patterns on the hero, bands and page headers; heartbeat divider above the footer.
- Motion that answers actions: button press, card lift, quiz check pop and gentle nudge on a wrong answer, a small burst when you mark a lesson complete, filling progress bars, header shadow on scroll, smooth fades between pages in supporting browsers, and a one-time fade-in for home sections. Everything is turned off when the device asks for reduced motion.
- Fixed quiz and case options that YAML read as true/false or as a mapping (one sampling quiz option showed "True"; one AR quiz option was garbled; one spend-down case choice showed "True"). The build now stops if this happens again.

## 2026-10-14 — Accuracy, trust and learning-platform audit

Audit documents: `docs/AUDIT_INVENTORY.md`, `docs/RCM_CONTENT_AUDIT.md`, `docs/CONTENT_COVERAGE_MATRIX.md`, `docs/UX_REDESIGN_PLAN.md`, `docs/QA_TEST_PLAN.md`.

### Accuracy (with sources)
- Clean claim no longer described as "paid on first submission"; clean claim rate, first-pass acceptance, first-pass resolution/payment, rejection, denial rate and final adjudication are now distinguished (lessons, quiz, glossary, interview answer).
- Eligibility lesson: no universal order for applying benefits; worked example labeled illustrative; "eligibility is not a guarantee of payment"; per-service verification checklist.
- ERA, documentation, Medicare and denial-category lessons: ABN validity conditions, Original Medicare scope, CO never to the patient, PR still needs checks, stop-and-escalate list. CMS and Noridian sources.
- CARC/RARC maintenance reworded with links to the official X12 lists.
- Corrected claims: "check the payer's rules first" box, MAC reopening limits, sources.
- QMB: corrected remark codes (N781/N782 with OA-209), can't-waive rule, bill the state, refunds, Medicare Advantage, bad-debt sequence, sources.
- Medicare timely filing worded as "1 calendar year after the date of service", with the through-date and next-workday rules.
- Filing-limits reference marks which rows were re-verified.

### Trust and privacy
- Certification shows "Coming soon" with no start form and no certificate claims while the backend isn't configured; when open, the certificate is described as an educational certificate from an open-book, unproctored exam.
- Verification no longer returns or shows the score; certificate IDs are 8 random characters; stricter name validation on client and server.
- Site-wide educational disclaimer and PHI warning; About page lists every browser storage key and third-party request; "Report an error" links.
- Every lesson shows a scope and review box with sources and the review date, or says it hasn't been re-reviewed yet. Code and specialty pages carry equivalent notes.

### Navigation and layout
- Five main destinations: Dashboard, Learning paths, RCM reference, Practice lab, Career & certification. All old URLs kept.
- New pages: `/learn/` and three paths, `/reference/`, `/practice/`, `/career/`, `/sources/`.
- New home page: compact hero, audience entry points, local "Your learning", featured path, practice and reference previews, trust strip.
- Code library: category filter, clear button, result count, empty state; code pages add "what not to assume" and the official-list link.
- Accessibility: AA contrast for secondary text, visible focus on form fields, text status labels, reduced-motion support, live regions.

### New content
- Quality and analytics section (7 lessons): audit scope, sampling, error definitions and scoring, calibration and kappa, root cause and Pareto, CAPA and coaching, AR prioritization and work queues.
- Practice cases SC-17 to SC-21: corrected claim or appeal, recoupment after retro termination, ambiguous remittance, AR worklist prioritization, auditing an AR note. Cases now support objectives and a debrief (documentation, escalation, root cause, sources), and every case shows an ID.
- Career hub with 8 roles, competencies linked to lessons, and a local self-check.

### Tools
- Timely filing: calendar-date arithmetic (no daylight-saving drift), leap-day handling, a limit must be chosen, optional weekend/federal-holiday roll and 5-day presumed receipt, assumptions shown, no "write-off" verdict.
- Payment: plan-design selector, optional out-of-pocket cap, validation, assumptions.
- KPI: validation for blanks, negatives, impossible values and zero denominators; denial rate uses adjudicated claims; definitions table.
- AR note generator: PHI warning, structured template with findings, next action and owner, clear button, never invents reference numbers.

### Tests
- `tests/calc.test.js` (29 calculator tests), `tests/linkcheck.py`, `tests/e2e.py` (23 browser tests), `tests/apps-script.test.js`, `tests/exam_flow.py` with `tests/mock-api.js`.
