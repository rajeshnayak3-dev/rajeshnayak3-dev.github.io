---
title: Timely filing and appeal deadline calculator
short: Timely filing calculator
description: Enter a date of service or denial date and a payer limit to get the exact deadline, the days left and whether you'll need proof of timely filing.
order: 1
level: Tool
kind: tool
track: false
keywords: timely filing calculator TFL appeal deadline calculator AFL days remaining proof of timely filing date calculator
---

<div class="tool" data-tool="tfl" markdown="0">
  <div class="tool-grid">
    <label class="field"><span>What are you calculating?</span>
      <select id="tfl-mode">
        <option value="tfl">Timely filing (from date of service)</option>
        <option value="appeal">Appeal deadline (from denial or EOB date)</option>
        <option value="corrected">Corrected claim (from original payment date)</option>
      </select>
    </label>
    <label class="field"><span id="tfl-date-label">Date of service</span>
      <input id="tfl-date" type="date" required>
    </label>
    <label class="field"><span>Payer limit</span>
      <select id="tfl-window">
        <option value="d90">90 days</option>
        <option value="d120">120 days (Medicare redetermination)</option>
        <option value="d180" selected>180 days</option>
        <option value="d365">365 days</option>
        <option value="m12">12 months (Medicare initial claims)</option>
        <option value="custom">Custom number of days</option>
      </select>
    </label>
    <label class="field" id="tfl-custom-wrap" hidden><span>Custom days</span>
      <input id="tfl-custom" type="number" min="1" max="1825" value="60">
    </label>
    <label class="field"><span>Check against (today by default)</span>
      <input id="tfl-asof" type="date">
    </label>
  </div>
  <div class="tool-out" id="tfl-out" aria-live="polite">Enter a date to see the deadline.</div>
</div>

## How the deadline is counted

- **Day limits** (90, 180, 365) are counted in calendar days from the date. Day 1 is the day after the date of service or notice.
- **Medicare initial claims** must be filed within **12 months** of the date of service, so a 03/15/2026 service is due by 03/15/2027.
- **Medicare appeals** are counted from the date you **receive** the notice, which Medicare presumes is 5 days after the notice date. Add 5 days to the notice date before using the calculator if you don't have the receipt date.
- If a deadline falls on a weekend or holiday, some payers extend it to the next business day and some don't. Don't rely on it.

## When you need proof of timely filing (POTF)

If the deadline has passed and the payer says it never received the claim, you need proof that it reached the payer in time: a clearinghouse acceptance report, a payer 277CA acceptance, a prior payer's denial showing you billed the wrong payer in time, or a reference number from an earlier call. A rejection report isn't proof. See [CO-29](/denials/codes/co-29/).
