---
title: Timely filing and appeal deadline calculator
short: Timely filing calculator
description: Enter a date of service or denial date and a payer limit to get the exact deadline, the days left and whether you'll need proof of timely filing.
order: 1
reviewed: 2026-10-14
level: Tool
kind: tool
track: false
keywords: timely filing calculator TFL appeal deadline calculator AFL days remaining proof of timely filing date calculator
---

<div class="tool" data-tool="tfl" markdown="0">
  <div class="tool-grid">
    <label class="field"><span>What are you calculating?</span>
      <select id="tfl-mode">
        <option value="tfl">Timely filing for a claim</option>
        <option value="appeal">Appeal or reconsideration deadline</option>
        <option value="corrected">Corrected claim deadline</option>
      </select>
    </label>
    <label class="field"><span id="tfl-date-label">Date of service</span>
      <input id="tfl-date" type="date" min="1900-01-01" max="2100-12-31" required>
    </label>
    <label class="field"><span>Limit from the payer contract, manual or program rule</span>
      <select id="tfl-window">
        <option value="" selected>Choose a limit…</option>
        <option value="d60">60 days</option>
        <option value="d90">90 days</option>
        <option value="d120">120 days (e.g. Medicare redetermination)</option>
        <option value="d180">180 days</option>
        <option value="d365">365 days</option>
        <option value="m12">1 calendar year (Medicare initial claims)</option>
        <option value="custom">Other number of days</option>
      </select>
    </label>
    <label class="field" id="tfl-custom-wrap" hidden><span>Number of days</span>
      <input id="tfl-custom" type="number" min="1" max="3650" step="1" inputmode="numeric" value="60">
    </label>
    <label class="field"><span>Check against (today if blank)</span>
      <input id="tfl-asof" type="date" min="1900-01-01" max="2100-12-31">
    </label>
  </div>
  <div class="tool-checks">
    <label class="check" id="tfl-presume-wrap" hidden><input type="checkbox" id="tfl-presume"> <span>Count from presumed receipt (notice date + 5 days), as Medicare does for appeals</span></label>
    <label class="check"><input type="checkbox" id="tfl-roll"> <span>If the deadline falls on a weekend or US federal holiday, move it to the next workday (Medicare rule; many other payers don't do this)</span></label>
  </div>
  <div class="tool-out" id="tfl-out" aria-live="polite">Choose the filing or appeal limit from the payer's contract, provider manual or the program rule.</div>
</div>

!!! warning "There's no universal filing limit"
    Every payer, plan type, state program and contract sets its own limits, starting points and exceptions. The limits in the list are examples. Use the number from the payer contract or provider manual for this claim, and confirm it before relying on the result.

## How the deadline is counted

- **Day limits** are counted in calendar days, with the start date as day 0. A 90-day limit from 01/01/2026 ends on 04/01/2026. Some payers count differently; their manual decides.
- **Which start date?**
    - Professional claims: usually the **date of service**.
    - Institutional claims with a date span: Medicare uses the **"through" date**; other payers may use the discharge date. Check the manual.
    - Appeals: usually the date of the **denial or remittance notice**, or the date it was **received**.
    - Corrected claims: many commercial payers count from the **original remittance date**, but some count from the date of service.
- **Medicare initial claims** must be filed no later than the close of the period ending **1 calendar year after the date of service**. A 03/15/2026 service is due by 03/15/2027. If that day is a weekend, federal holiday or other federal nonworkday, the deadline moves to the next workday. There are limited exceptions (for example, administrative error or retroactive Medicare entitlement).
- **Medicare redeterminations** must be requested within **120 days** of receiving the initial determination, and receipt is presumed to be **5 days after the notice date** unless shown otherwise. Tick the receipt box for this.
- **Federal holidays** in the calculator follow the standard observed-date rule. Other nonworkdays (for example, a day the federal government closes unexpectedly) aren't included.

Sources: [42 CFR 424.44, Time limits for filing Medicare claims](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-424/subpart-C/section-424.44); [Medicare Claims Processing Manual, Chapter 1, section 70](https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c01.pdf); [Medicare Claims Processing Manual, Chapter 29 (appeals)](https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c29.pdf). Medicare fee-for-service scope; reviewed October 2026. Other payers: the contract and provider manual.

## When you need proof of timely filing (POTF)

If the deadline has passed and the payer says it never received the claim, you need proof that it reached the payer in time: a clearinghouse acceptance report showing the payer accepted it, a payer 277CA acceptance, a prior payer's denial showing you billed the wrong payer in time, or a reference number from an earlier call. A rejection report usually isn't proof, because a rejected claim was never accepted. See [CO-29](/denials/codes/co-29/).
