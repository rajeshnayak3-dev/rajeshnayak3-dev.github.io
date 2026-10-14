---
title: Underpayments and contract variances
short: Underpayments
description: How to spot a claim that was paid, but paid wrong. Expected versus actual payments, common underpayment causes, how to dispute them, and why they cost providers more than denials do.
order: 3
level: Intermediate
keywords: underpayment contract variance expected reimbursement allowed amount fee schedule wrong fee schedule multiple procedure reduction payment dispute contract management
quiz:
  - q: The contract allows $120 for 99214. The ERA shows allowed $98 with CO-45 for the difference. What is this?
    options:
      - A correct payment
      - An underpayment of $22 in allowed amount
      - A denial
      - A duplicate
    answer: 1
    why: CO-45 should only reflect billed minus the contracted allowed amount. An allowed amount below contract is an underpayment to dispute.
  - q: Why are underpayments easy to miss?
    options:
      - They're always small and unimportant
      - The claim shows as paid, so it drops out of denial and no-response worklists
      - Payers report them separately
      - They only happen on paper
    answer: 1
    why: Paid claims leave AR worklists. Without an expected-payment comparison, nobody notices the shortfall.
---

## Paid is not the same as paid correctly

An **underpayment** is a payment lower than what the provider's contract, fee schedule or law says it should receive. The claim looks resolved, the balance is often adjusted off as “contractual”, and the money is lost quietly.

## How to spot one

Compare **expected** reimbursement with **actual**:

> Expected allowed = contract rate for the code (or DRG, per diem, percentage)
>
> Variance = Expected allowed − Actual allowed

Many billing systems and contract management tools load payer fee schedules and flag lines where the variance passes a threshold. Without a tool, posting teams can spot-check top codes per payer.

## Common causes

| Cause | Example |
|---|---|
| Wrong fee schedule year | Payer still using last year's rates after a contract update |
| Wrong provider or location rate | Claim priced at a non-par or out-of-area rate |
| Multiple procedure reduction applied wrongly | Highest-value procedure reduced instead of the second |
| Modifier not recognised | Bilateral (50) paid at 100% instead of 150% |
| Units underpaid | Drug units paid as 1 instead of the billed quantity |
| Facility rate applied to an office service | POS 11 paid at facility rate |
| Carve-outs missed (hospital) | Implant or high-cost drug carved out in the contract but paid inside the DRG |
| Outlier not paid (hospital) | Stay exceeded outlier threshold but no outlier payment |
| Wrong DRG or APC grouping | Payer's grouper version differs |
| Rental network misapplied | Claim repriced under a network the provider didn't agree to for that plan |
| Secondary paid less than owed | Secondary didn't apply its own allowed amount correctly |

## How to dispute

1. **Confirm the contract terms** for that payer, plan, code and date (amendments matter).
2. **Calculate the expected payment** and the variance, showing your working.
3. **Call the payer** for simple cases (wrong fee schedule, units): many will reprocess on the call.
4. **Send a written payment dispute** or reconsideration with the contract section and calculation for complex cases.
5. **Group disputes**: if one error affects many claims, send a list to the provider representative for a bulk reprocessing project.
6. **Track recoveries** and follow up.

!!! example "Example"
    Contract: 115% of the current Medicare fee schedule. Medicare's rate for 20610 at this locality is $72.00, so expected allowed = $82.80. The ERA shows allowed $68.50. Variance $14.30 per line. A search finds 212 lines with the same pattern since January: the payer loaded the wrong locality. Total variance about $3,030. The analyst sends the list and calculation to the payer's provider relations representative; the payer reprocesses all lines.

## Underpayments versus legitimate reductions

Not every low payment is wrong. These are normal:

- Patient cost-sharing (PR-1, PR-2, PR-3)
- Medicare sequestration (CO-253)
- Correct multiple procedure, bilateral or imaging reductions
- Correct assistant-surgeon or non-physician practitioner rates (for example, NPs paid at 85% of the physician fee schedule by Medicare)
- Contracted withholds (some HMO contracts withhold a percentage)

Know the contract before disputing.

!!! tip "Why this is a career skill"
    Underpayment analysis requires knowing contracts, fee schedules and payment methodologies. Analysts who can find and recover underpayments, especially on hospital claims, are valued highly and move into contract management and revenue integrity roles.

!!! mistake "Auditor's red flag"
    Underpaid lines closed because the claim shows as “paid”. Spot-check allowed amounts against the contract for your top codes every month.

!!! interview "If an interviewer asks “What is an underpayment and how do you find it?”"
    “An underpayment is when the payer pays less than the contracted or fee schedule amount. We find them by comparing the expected allowed amount from the contract with the actual allowed on the ERA, for example a wrong fee schedule year, a missed modifier like 50, or units underpaid. I'd confirm the contract terms, calculate the variance, ask the payer to reprocess or file a payment dispute, and if it's a pattern, send a list for bulk reprocessing.”
