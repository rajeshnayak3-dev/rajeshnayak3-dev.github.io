---
title: Payment and secondary liability calculator
short: Payment calculator
description: Split a billed charge into contractual adjustment, deductible, copay, coinsurance and primary payment, then see what a secondary payer may owe.
order: 2
level: Tool
kind: tool
track: false
keywords: payment calculator coinsurance calculator deductible calculator CO-45 PR-1 PR-2 PR-3 secondary payment calculator OA-23 expected payment
---

<div class="tool" data-tool="pay" markdown="0">
  <h2 class="tool-h">Primary payer</h2>
  <div class="tool-grid">
    <label class="field"><span>Billed charge ($)</span><input id="pay-billed" type="number" min="0" step="0.01" value="250"></label>
    <label class="field"><span>Allowed amount ($)</span><input id="pay-allowed" type="number" min="0" step="0.01" value="150"></label>
    <label class="field"><span>Copay ($)</span><input id="pay-copay" type="number" min="0" step="0.01" value="0"></label>
    <label class="field"><span>Deductible still to meet ($)</span><input id="pay-ded" type="number" min="0" step="0.01" value="50"></label>
    <label class="field"><span>Coinsurance (%)</span><input id="pay-coins" type="number" min="0" max="100" step="1" value="20"></label>
  </div>
  <h2 class="tool-h">Secondary payer (optional)</h2>
  <div class="tool-grid">
    <label class="field"><span>Secondary allowed amount ($)</span><input id="pay-sec" type="number" min="0" step="0.01" placeholder="Leave blank if none"></label>
  </div>
  <div class="tool-out" id="pay-out" aria-live="polite"></div>
</div>

## How the calculator applies benefits

1. **Contractual adjustment (CO-45)** = billed − allowed.
2. **Copay (PR-3)** is taken first, up to the allowed amount.
3. **Deductible (PR-1)** is applied to what's left, up to the amount still to meet.
4. **Coinsurance (PR-2)** is the percentage of what remains after the deductible.
5. **Primary payment** = allowed − PR-1 − PR-2 − PR-3. Every dollar of the charge is accounted for: paid + CO-45 + PR = billed.

Real plans vary. Some waive the deductible for copay services, and many have out-of-pocket maximums that stop cost-sharing. Use the ERA as the source of truth.

## How the secondary estimate works

The calculator uses the common **non-duplication** approach: the secondary pays the smaller of the patient's remaining responsibility and its own allowed amount minus what the primary paid. If the primary already paid as much as or more than the secondary allows, the secondary pays nothing and the ERA shows **OA-23**. Medicare as secondary, Medicaid and some employer plans use different formulas, so treat this as an estimate.
