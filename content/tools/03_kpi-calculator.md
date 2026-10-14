---
title: RCM KPI calculator
short: KPI calculator
description: Calculate days in AR, AR over 90 days, net and gross collection rates, clean claim rate and denial rate, and compare them with common benchmarks.
order: 3
level: Tool
kind: tool
track: false
keywords: KPI calculator days in AR calculator net collection rate calculator clean claim rate denial rate AR over 90 benchmarks
---

<div class="tool" data-tool="kpi" markdown="0">
  <div class="tool-grid">
    <label class="field"><span>Total AR today ($)</span><input id="kpi-ar" type="number" min="0" value="640000"></label>
    <label class="field"><span>AR older than 90 days ($)</span><input id="kpi-ar90" type="number" min="0" value="96000"></label>
    <label class="field"><span>Gross charges, last 90 days ($)</span><input id="kpi-charges90" type="number" min="0" value="1800000"></label>
    <label class="field"><span>Payments in the period ($)</span><input id="kpi-pay" type="number" min="0" value="540000"></label>
    <label class="field"><span>Charges in the same period ($)</span><input id="kpi-charges" type="number" min="0" value="1200000"></label>
    <label class="field"><span>Contractual adjustments in the period ($)</span><input id="kpi-contract" type="number" min="0" value="640000"></label>
    <label class="field"><span>Claims submitted</span><input id="kpi-claims" type="number" min="0" value="4000"></label>
    <label class="field"><span>Claims accepted first time (clean)</span><input id="kpi-clean" type="number" min="0" value="3840"></label>
    <label class="field"><span>Claims denied</span><input id="kpi-denied" type="number" min="0" value="280"></label>
  </div>
  <div class="tool-out" id="kpi-out" aria-live="polite"></div>
  <p class="small-note">The starting numbers are an example. Replace them with your own.</p>
</div>

## Formulas

| KPI | Formula | Typical target |
|---|---|---|
| Days in AR | Total AR ÷ (charges last 90 days ÷ 90) | Under 35–45 days |
| AR over 90 days | AR > 90 days ÷ total AR | Under 15–20% |
| Net collection rate | Payments ÷ (charges − contractual adjustments) | 95% or higher |
| Gross collection rate | Payments ÷ charges | Depends on fee schedule; not a performance measure on its own |
| Clean claim rate | Clean claims ÷ claims submitted | 95% or higher |
| Denial rate | Claims denied ÷ claims submitted | Under 5–10% |

Targets vary by specialty and payer mix; these are common industry ranges. More detail in [reporting and KPIs](/rcm-cycle/reporting-and-kpis/).
