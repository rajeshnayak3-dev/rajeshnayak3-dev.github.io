---
title: Therapy units calculator (8-minute rule)
short: 8-minute rule calculator
description: Enter timed minutes for each therapy code to get total billable units under Medicare's 8-minute rule, and how to split them across codes.
order: 4
level: Tool
kind: tool
track: false
keywords: 8 minute rule calculator therapy units calculator physical therapy billing units 97110 97140 97530 timed codes Medicare
---

<div class="tool" data-tool="units" markdown="0">
  <p class="tool-help">Enter the minutes of each <strong>timed</strong> code (15-minute codes such as 97110, 97112, 97140, 97530). Leave untimed codes, such as evaluations, out.</p>
  <div class="unit-rows" id="unit-rows">
    <div class="unit-row"><input aria-label="Code 1" class="u-code" value="97110"><input aria-label="Minutes for code 1" class="u-min" type="number" min="0" value="23"><span>min</span></div>
    <div class="unit-row"><input aria-label="Code 2" class="u-code" value="97140"><input aria-label="Minutes for code 2" class="u-min" type="number" min="0" value="9"><span>min</span></div>
    <div class="unit-row"><input aria-label="Code 3" class="u-code" placeholder="Code"><input aria-label="Minutes for code 3" class="u-min" type="number" min="0" placeholder="0"><span>min</span></div>
    <div class="unit-row"><input aria-label="Code 4" class="u-code" placeholder="Code"><input aria-label="Minutes for code 4" class="u-min" type="number" min="0" placeholder="0"><span>min</span></div>
  </div>
  <div class="tool-out" id="units-out" aria-live="polite"></div>
</div>

## The Medicare 8-minute rule

Medicare adds up **all timed minutes** in the session and converts the total to units:

| Total timed minutes | Units |
|---|---|
| Fewer than 8 | 0 |
| 8–22 | 1 |
| 23–37 | 2 |
| 38–52 | 3 |
| 53–67 | 4 |
| 68–82 | 5 |
| 83–97 | 6 |

Then each code first gets one unit for every full 15 minutes it was performed. Any units left over go to the code(s) with the most remaining minutes.

Some commercial payers instead apply the rule to **each code separately** (each code needs at least 8 minutes to bill a unit). Check the payer's policy. More in the [therapy specialty guide](/specialties/therapy/).
