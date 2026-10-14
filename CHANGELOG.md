# Changelog

## 2026-10-14 — Friendlier visual layer

- Clinical teal added to the palette, with one accent colour per main area (Learning paths teal, Reference blue, Practice amber, Career red).
- Home hero: line illustration of a claim form on a clipboard with a stethoscope, and a heartbeat line that draws once to show a claim's journey (Charge → Scrub → Accepted → Adjudicated → Paid) before a PAID stamp lands. Replay button included.
- Small healthcare spot illustrations on path cards, hub pages and home previews; faint claim-form dot grid and medical-cross patterns on the hero, bands and page headers; heartbeat divider above the footer.
- Motion that answers actions: button press, card lift, quiz check pop and gentle nudge on a wrong answer, a small burst when you mark a lesson complete, filling progress bars, header shadow on scroll, smooth fades between pages in supporting browsers, and a one-time fade-in for home sections. Everything is turned off when the device asks for reduced motion.
- Fixed quiz and case options that YAML read as true/false or as a mapping (one sampling quiz option showed "True"; one AR quiz option was garbled; one spend-down case choice showed "True"). The build now stops if this happens again.

## 2026-10-14 — Accuracy, trust and learning-platform audit

Audit documents: `docs/AUDIT_INVENTORY.md`, `docs/RCM_CONTENT_AUDIT.md`, `docs/CONTENT_COVERAGE_MATRIX.md`, `docs/UX_REDESIGN_PLAN.md`, `docs/QA_TEST_PLAN.md`.

### Accuracy (with sources)
- Clean claim no longer described as "paid on first submission"; clean claim rate, first-pass acceptance, first-pass resolution/payment, rejection, denial rate and final adjudication are now distinguished (lessons, quiz, glossary, interview answer).
- Eligibility lesson: no universal order for applying benefits; worked example labelled illustrative; "eligibility is not a guarantee of payment"; per-service verification checklist.
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
- Quality and analytics section (7 lessons): audit scope, sampling, error definitions and scoring, calibration and kappa, root cause and Pareto, CAPA and coaching, AR prioritisation and work queues.
- Practice cases SC-17 to SC-21: corrected claim or appeal, recoupment after retro termination, ambiguous remittance, AR worklist prioritisation, auditing an AR note. Cases now support objectives and a debrief (documentation, escalation, root cause, sources), and every case shows an ID.
- Career hub with 8 roles, competencies linked to lessons, and a local self-check.

### Tools
- Timely filing: calendar-date arithmetic (no daylight-saving drift), leap-day handling, a limit must be chosen, optional weekend/federal-holiday roll and 5-day presumed receipt, assumptions shown, no "write-off" verdict.
- Payment: plan-design selector, optional out-of-pocket cap, validation, assumptions.
- KPI: validation for blanks, negatives, impossible values and zero denominators; denial rate uses adjudicated claims; definitions table.
- AR note generator: PHI warning, structured template with findings, next action and owner, clear button, never invents reference numbers.

### Tests
- `tests/calc.test.js` (29 calculator tests), `tests/linkcheck.py`, `tests/e2e.py` (23 browser tests), `tests/apps-script.test.js`, `tests/exam_flow.py` with `tests/mock-api.js`.
