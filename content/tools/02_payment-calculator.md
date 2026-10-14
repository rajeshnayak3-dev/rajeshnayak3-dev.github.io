---
title: Payment and secondary liability calculator
short: Payment calculator
description: Split a billed charge into contractual adjustment, deductible, copay, coinsurance and primary payment, then see what a secondary payer may owe.
order: 2
reviewed: 2026-10-14
level: Tool
kind: tool
track: false
keywords: payment calculator coinsurance calculator deductible calculator CO-45 PR-1 PR-2 PR-3 secondary payment calculator OA-23 expected payment
---

<div class="tool" data-tool="pay" markdown="0">
  <h2 class="tool-h">Primary payer</h2>
  <div class="tool-grid">
    <label class="field"><span>Billed charge ($)</span><input id="pay-billed" type="number" min="0" step="0.01" inputmode="decimal" value="250"></label>
    <label class="field"><span>Allowed amount ($)</span><input id="pay-allowed" type="number" min="0" step="0.01" inputmode="decimal" value="150"></label>
    <label class="field wide"><span>How this plan applies cost-sharing to this service</span>
      <select id="pay-design">
        <option value="ded-coins" selected>Deductible, then coinsurance (no copay)</option>
        <option value="copay-only">Copay only (deductible and coinsurance don't apply)</option>
        <option value="copay-then-ded">Copay, then deductible and coinsurance on the rest</option>
      </select>
    </label>
    <label class="field" id="pay-copay-wrap" hidden><span>Copay ($)</span><input id="pay-copay" type="number" min="0" step="0.01" inputmode="decimal" value="30"></label>
    <label class="field" id="pay-ded-wrap"><span>Deductible still to meet ($)</span><input id="pay-ded" type="number" min="0" step="0.01" inputmode="decimal" value="50"></label>
    <label class="field" id="pay-coins-wrap"><span>Coinsurance (%)</span><input id="pay-coins" type="number" min="0" max="100" step="1" inputmode="decimal" value="20"></label>
    <label class="field"><span>Out-of-pocket max still to meet ($, optional)</span><input id="pay-oop" type="number" min="0" step="0.01" inputmode="decimal" placeholder="Leave blank to ignore"></label>
  </div>
  <h2 class="tool-h">Secondary payer (optional)</h2>
  <div class="tool-grid">
    <label class="field"><span>Secondary allowed amount ($)</span><input id="pay-sec" type="number" min="0" step="0.01" inputmode="decimal" placeholder="Leave blank if none"></label>
  </div>
  <div class="tool-out" id="pay-out" aria-live="polite"></div>
</div>

!!! warning "Illustrative, not a payment promise"
    This calculator shows how one plan design would split one service line. Real adjudication depends on the plan, the service category, network status, accumulators, exclusions, the contract and the payer's processing. Post from the **ERA**, not from an estimate.

## How the calculator applies benefits

1. **Contractual adjustment** = billed − allowed (usually CO-45 for in-network claims).
2. The **plan design** you choose decides which cost-sharing applies:
    - *Deductible, then coinsurance:* the deductible takes the allowed amount up to what's left to meet, then coinsurance applies to the rest.
    - *Copay only:* the copay applies and the plan pays the rest of the allowed amount.
    - *Copay, then deductible and coinsurance:* the copay first, then the deductible and coinsurance on what's left. Some plans do this for certain services, such as emergency or imaging.
3. If you enter an **out-of-pocket maximum still to meet**, the patient's share is capped at that amount (the calculator reduces coinsurance first, then deductible, then copay). It's an illustration; plans track accumulators their own way.
4. **Primary payment** = allowed − patient responsibility. When the allowed amount isn't above the billed charge, every dollar is accounted for: paid + contractual + patient = billed.

## How the secondary estimate works

The calculator uses a common **non-duplication** approach: the secondary pays the smaller of the patient's remaining responsibility and its own allowed amount minus what the primary paid. If the primary already paid as much as or more than the secondary allows, the secondary may pay nothing (often shown as **OA-23**). Medicare as secondary, Medicaid (including QMB rules) and many employer plans use different formulas, so treat it as an estimate and follow the secondary's ERA.
