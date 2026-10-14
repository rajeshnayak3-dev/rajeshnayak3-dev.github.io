---
title: RCM KPI calculator
short: KPI calculator
description: Calculate days in AR, AR over 90 days, net and gross collection rates, clean claim rate and denial rate, with the formula, denominator and common ranges for each.
order: 3
reviewed: 2026-10-14
level: Tool
kind: tool
track: false
keywords: KPI calculator days in AR calculator net collection rate calculator clean claim rate denial rate AR over 90 benchmarks
---

<div class="tool" data-tool="kpi" markdown="0">
  <p class="small-note">The starting numbers are fictional example data for one month. Replace them with your own; leave a field blank if you don't have it.</p>
  <h2 class="tool-h">Accounts receivable</h2>
  <div class="tool-grid">
    <label class="field"><span>Total AR at period end ($)</span><input id="kpi-ar" type="number" min="0" inputmode="decimal" value="640000"></label>
    <label class="field"><span>AR older than 90 days ($)</span><input id="kpi-ar90" type="number" min="0" inputmode="decimal" value="96000"></label>
    <label class="field"><span>Gross charges in the look-back period ($)</span><input id="kpi-charges90" type="number" min="0" inputmode="decimal" value="1800000"></label>
    <label class="field"><span>Days in the look-back period</span><input id="kpi-days" type="number" min="1" step="1" inputmode="numeric" value="90"></label>
  </div>
  <h2 class="tool-h">Collections (same period)</h2>
  <div class="tool-grid">
    <label class="field"><span>Payments ($)</span><input id="kpi-pay" type="number" min="0" inputmode="decimal" value="540000"></label>
    <label class="field"><span>Charges ($)</span><input id="kpi-charges" type="number" min="0" inputmode="decimal" value="1200000"></label>
    <label class="field"><span>Contractual adjustments ($)</span><input id="kpi-contract" type="number" min="0" inputmode="decimal" value="640000"></label>
  </div>
  <h2 class="tool-h">Claims (same period)</h2>
  <div class="tool-grid">
    <label class="field"><span>Claims submitted</span><input id="kpi-claims" type="number" min="0" step="1" inputmode="numeric" value="4000"></label>
    <label class="field"><span>Accepted first time, no edits or rejections</span><input id="kpi-clean" type="number" min="0" step="1" inputmode="numeric" value="3840"></label>
    <label class="field"><span>Claims adjudicated</span><input id="kpi-adj" type="number" min="0" step="1" inputmode="numeric" value="3700"></label>
    <label class="field"><span>Claims denied (of those adjudicated)</span><input id="kpi-denied" type="number" min="0" step="1" inputmode="numeric" value="280"></label>
  </div>
  <div class="tool-out" id="kpi-out" aria-live="polite"></div>
</div>

## Definitions

| KPI | Formula | Numerator / denominator notes | Common range |
|---|---|---|---|
| Days in AR | Total AR ÷ (gross charges in the period ÷ days in the period) | AR at period end; many teams use the last 90 days of charges. Credit balances lower AR, so some report AR without credits | Under 35–45 days |
| AR over 90 days | AR older than 90 days ÷ total AR × 100 | Aged from date of service or from first billing; say which | Under 15–20% |
| Net collection rate | Payments ÷ (charges − contractual adjustments) × 100 | Use payments and adjustments for the same charges or period; exclude write-offs that aren't contractual | 95% or higher |
| Gross collection rate | Payments ÷ charges × 100 | Driven by the fee schedule; context only | No useful benchmark |
| Clean claim rate | Claims accepted first time with no edits or rejections ÷ claims submitted × 100 | Measured at the scrubber, clearinghouse or payer (277CA); say which | 95% or higher |
| Denial rate (count) | Claims denied ÷ claims adjudicated × 100 | Rejections aren't denials, so they're excluded. Many teams also report a dollar version | Under 5–10% |

**Data sources:** practice management or billing system AR aging, transaction (payment and adjustment) reports, clearinghouse acceptance reports, and 835 ERAs. **Exclusions** vary by organisation (for example capitation, self-pay, or small balances), so write the definition next to the number whenever you report it.

The ranges are commonly quoted industry figures, not standards; specialty, payer mix and definitions change what "good" looks like. More detail in [reporting and KPIs](/rcm-cycle/reporting-and-kpis/).
