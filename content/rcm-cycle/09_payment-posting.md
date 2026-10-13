---
title: Payment posting (ERA and EOB)
short: Payment posting
description: How to post insurance and patient payments line by line, read an ERA, balance every dollar, handle zero-pays, takebacks and lockbox payments, and reconcile deposits.
order: 9
level: Intermediate
keywords: payment posting ERA 835 EOB EFT lockbox reconciliation zero pay takeback recoupment contractual adjustment transfer to secondary
quiz:
  - q: Billed $250, allowed $150, paid $120, PR-2 $30. What is the contractual adjustment?
    options:
      - $30
      - $100
      - $130
      - $150
    answer: 1
    why: Contractual adjustment = billed − allowed = $250 − $150 = $100 (CO-45). Check $120 + $30 + $100 = $250.
  - q: After posting the primary payment, a $30 coinsurance remains and the patient has a secondary plan. What next?
    options:
      - Bill the patient immediately
      - Transfer the balance to the secondary payer and send the claim with primary payment details
      - Write it off
      - Refund the primary
    answer: 1
    why: Patient responsibility from the primary is billed to the secondary first. Only what the secondary doesn't cover goes to the patient.
  - q: What should a poster do with a denial on the ERA?
    options:
      - Ignore it, AR will find it
      - Post the $0 payment with the denial code and route the line to the denial or AR queue
      - Write the charge off
      - Bill the patient
    answer: 1
    why: Posting denials with their codes creates the data for denial reporting and puts the line in front of the right team quickly.
  - q: Which matches an EFT deposit in the bank with an ERA?
    options:
      - The TRN (trace) number on the 835
      - The patient account number
      - The CPT code
      - The NPI only
    answer: 0
    why: The trace number on the 835 matches the EFT reference, which is how payments are reconciled to deposits.
---

## What payment posting is

**Payment posting** records every payment and adjustment against the right patient, claim and service line. It closes the loop on the claim and produces the data the rest of RCM uses: which lines were paid, denied or underpaid, and what the patient owes.

Two kinds of posting:

- **Insurance posting**, from ERAs (electronic) or paper EOBs and checks.
- **Patient posting**, from front-desk collections, online payments, mailed checks and payment plans.

## Electronic versus manual posting

| | Auto-posting | Manual posting |
|---|---|---|
| Source | 835 ERA files loaded into the billing system | Paper EOBs, checks, payer letters, scanned documents |
| Speed | Thousands of lines in minutes | Line by line |
| Risk | Exceptions not reviewed; mapping errors | Keying errors |
| Poster's job | Work the **exceptions** the system couldn't post | Post everything |

Most posting teams spend their day on ERA exceptions: unmatched claims, denied lines, takebacks and lines where the payment doesn't balance.

## Reading an ERA line

For each service line, the ERA shows:

- Billed charge, allowed amount, paid amount
- **Adjustments**, each as a **group code + CARC + amount** (for example CO-45 $60.00)
- **RARC** remark codes with more detail
- Patient responsibility total
- Claim-level details: payer claim number (ICN or DCN), patient name and ID, rendering provider, and whether the claim was forwarded to another payer

## The balancing rule

On every line:

> **Billed = Paid + all adjustments (CO + PR + OA + PI)**

!!! example "Posting example"
    | | Amount |
    |---|---|
    | Billed (99214) | $210.00 |
    | Allowed | $132.00 |
    | Paid | $105.60 |
    | CO-45 | $78.00 |
    | PR-2 | $26.40 |

    Check: $105.60 + $78.00 + $26.40 = $210.00. Post the payment, write off $78.00 as a contractual adjustment, and move $26.40 to the secondary or the patient.

If the numbers don't balance, stop and investigate before posting.

## What to post for each situation

| Situation | What to post | Then |
|---|---|---|
| Paid at allowed | Payment + contractual adjustment | Transfer PR amount to next payer or patient |
| Applied to deductible (PR-1), $0 paid | $0 payment, contractual adjustment | Transfer PR-1 to secondary or patient |
| Denied | $0 payment with denial codes, **no write-off** | Route to denial or AR queue |
| Paid by secondary | Secondary payment, any secondary adjustment | Bill patient only what's left as PR |
| Capitated (CO-24) | $0 and capitation adjustment per client SOP | Close the line |
| Overpaid | Payment as received | Flag as credit balance for review |
| Takeback (reversal) | Negative payment against the original claim | Post the corrected payment when it arrives |

!!! warning "Never write off a denial at posting"
    A denial is a problem to solve, not a contractual adjustment. Writing it off hides lost revenue and removes the claim from AR. Most clients allow write-offs only with specific adjustment codes and approval.

## Takebacks, offsets and forward balances

Payers sometimes reverse a past payment and recover the money from a current check:

- **Reversal and reprocessing:** the ERA shows a negative line for the original payment and a new line with the corrected payment, often with claim status code 22 (reversal of previous payment).
- **Offset or recoupment:** the payer reduces today's check to recover money from a different claim. On the 835 this appears as a **provider-level adjustment** (PLB segment), often coded **WO** (overpayment recovery) with a reference to the claim being recovered.
- **Forward balance (FB):** the payer carries a negative balance forward to a future check.

Posters must apply the recovery to the right original claim, or the system shows the wrong balance on two accounts.

## Lockbox and paper payments

Many practices use a bank **lockbox**: patients and payers mail checks to the bank, which scans the checks and documents and sends images to the posting team. Posters match each check to the right accounts and post from the scanned EOB.

## Reconciliation

At the end of each day or batch, posting teams **reconcile**:

1. **Deposit to posting:** total posted for a payer equals the EFT or check amount. The ERA's **TRN trace number** matches the EFT reference in the bank.
2. **ERA to posting:** every ERA file was loaded and every claim matched.
3. **Unapplied cash:** payments received but not yet matched to an account, which must be cleared quickly.

## Common posting errors

- Payment posted to the wrong patient or wrong date of service
- Denied line written off as a contractual adjustment
- Patient responsibility not transferred, so the patient is never billed
- Secondary claim never sent after primary posting
- Takeback not applied, so the account looks paid when it isn't
- Copay collected at the desk not applied, creating a false credit or balance

!!! tip "Posting as early warning"
    Posters see every payer's behaviour first. Patterns like a payer suddenly paying lower than contract on a code, or a spike in one denial code, should be escalated the same week, not discovered in month-end reports.

!!! interview "If an interviewer asks “What do you do in payment posting?”"
    “I post insurance payments from ERAs and EOBs and patient payments to the correct account and service line, apply contractual adjustments, transfer patient responsibility to secondary payers or the patient, post denials with their codes and route them to AR, handle takebacks and offsets, and reconcile posted totals to bank deposits using the trace number. Every line must balance: billed equals paid plus adjustments.”
