---
title: Credit balances and refunds
short: Credit balances and refunds
description: Why accounts go negative, how to decide whether money is owed back and to whom, refund rules for Medicare, Medicaid, commercial payers and patients, and the 60-day overpayment rule.
order: 6
level: Intermediate
keywords: credit balance refund overpayment 60 day rule Medicare overpayment voluntary refund patient refund insurance refund offset credit balance report CMS-838
quiz:
  - q: A patient paid a $40 copay at check-in, but the plan applied PR-1 deductible of $25 only. What's the credit?
    options:
      - $15 owed to the patient (after checking other open balances per policy)
      - $40 owed to the payer
      - $0
      - $25 owed to the patient
    answer: 0
    why: The patient owed $25 and paid $40, so there's a $15 patient credit. Policy may apply it to other open patient balances first, then refund the rest.
  - q: Under the 60-day rule, when must an identified Medicare overpayment be reported and returned?
    options:
      - Within 60 days of the date of service
      - Within 60 days after it's identified (subject to the rule's investigation provisions)
      - Within 1 year of payment
      - Only if Medicare asks
    answer: 1
    why: Medicare and Medicaid overpayments must be reported and returned within 60 days after they are identified. Keeping them can create False Claims Act liability.
  - q: Which is NOT a normal cause of a credit balance?
    options:
      - Duplicate payment by a payer
      - Payment posted to the wrong account
      - A contractual adjustment posted correctly
      - Primary and secondary both paid as primary
    answer: 2
    why: A correct contractual adjustment reduces the balance to what's owed; it doesn't create a credit.
---

## What a credit balance is

An account has a **credit balance** when more money (payments plus adjustments) has been applied than was charged. On an aging report it appears as a negative balance.

A credit balance is either:

- a **posting error** that needs correcting (the money isn't really extra), or
- a true **overpayment** that must be refunded to someone.

## Common causes

| Cause | Real overpayment? |
|---|---|
| Payer paid the same claim twice | Yes, refund to payer |
| Primary and secondary both paid as primary | Yes, refund to the payer that shouldn't have paid |
| Payer paid more than contract | Yes, refund to payer (per contract terms) |
| Patient paid at the desk, insurance then paid more than expected | Yes, refund to patient (after other balances per policy) |
| Payment posted to the wrong patient or DOS | No, move the payment |
| Contractual adjustment posted twice | No, reverse the extra adjustment |
| Takeback received but original not reversed | No, post the takeback |
| Charge reduced or voided after payment | Often yes, depends on why |

## Working a credit balance

1. **Review the account history** line by line: charges, payments, adjustments, transfers.
2. **Correct posting errors** first (misapplied payments, duplicate adjustments).
3. **Identify who overpaid**: which payer or the patient, and how much.
4. **Check open balances** for the same patient or guarantor. Patient credits can often be applied to other patient balances per policy; **insurance overpayments generally can't** be moved to another patient's or payer's balance.
5. **Decide the method**: refund check, payer **offset** (letting the payer recoup from a future payment), or corrected claim.
6. **Get approval** per client policy (often amount thresholds).
7. **Document** the reason, calculation and refund details.

## Refund rules by payer type

### Medicare
- The **60-day rule**: overpayments must be **reported and returned within 60 days** after they're identified, with a defined period allowed for investigation. Retaining them can lead to False Claims Act liability.
- Methods: a **voluntary refund** to the MAC with its refund form, an **offset** request, or a **claim adjustment** (corrected claim or reopening) that lets Medicare recoup.
- Hospitals and other Part A providers file a quarterly **Medicare Credit Balance Report (CMS-838)**.

### Medicaid
- Also subject to the federal 60-day requirement, plus state rules.
- Usually refunded by **claim adjustment or void** so the state can recoup, or by the state's refund form.

### Commercial payers
- Contracts and state laws set timelines and processes.
- Many payers prefer an **offset**, or a **void/corrected claim**, rather than a check.
- If a payer sends an **overpayment request letter**, check it's correct before agreeing; dispute within the stated window if not.

### Patients
- Refund patient overpayments promptly, typically within a timeframe set by client policy or state law.
- **Unclaimed refunds** (patients who can't be found, uncashed checks) may need to be reported to the state under **unclaimed property (escheat)** laws.

!!! warning "Never sit on credits"
    Leaving credit balances unresolved is a compliance risk, inflates AR reports (credits offset debits), and can turn into regulatory findings. Many organisations review credits weekly.

!!! example "Scenario"
    Account shows −$84.20. History: Aetna paid $84.20 on 04/03 and again on 04/17 (two different claim numbers for the same DOS; the second was a resubmission processed as a new claim). Overpayment to Aetna: $84.20. The analyst calls Aetna, which agrees to recoup through an offset; the call reference and expected offset date are documented, and the account is flagged until the takeback posts.

!!! mistake "Auditor's red flag"
    Insurance overpayments applied to a different patient's balance. Payer money can't be moved between patients; it must be refunded or offset.

!!! interview "If an interviewer asks “How do you handle a credit balance?”"
    “I review the account history to see whether it's a posting error or a real overpayment. Posting errors I correct, such as moving a misapplied payment. For true overpayments I identify who overpaid, then refund the payer by check, offset or corrected claim, or refund the patient after applying policy for other open patient balances. Medicare and Medicaid overpayments must be returned within 60 days of identification.”
