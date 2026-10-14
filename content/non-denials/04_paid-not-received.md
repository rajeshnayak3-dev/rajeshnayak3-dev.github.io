---
title: Paid but not received, and paid to the wrong place
short: Paid not received
description: When the payer says “paid” but the money isn't on the account. Tracing checks and EFTs, unapplied cash, payments to the wrong provider or patient, and check reissues.
order: 4
level: Intermediate
keywords: paid not received check not received EFT trace number unapplied cash paid to patient paid to wrong provider check reissue stop payment check tracer
quiz:
  - q: The payer says a claim paid by EFT on 09/05. What detail do you need to trace it?
    options:
      - The patient's phone number
      - The EFT trace number, amount and date, and the bank account it was sent to
      - The CPT code
      - The diagnosis
    answer: 1
    why: The trace number lets posting find the deposit and ERA. Confirming the bank account rules out payments sent to an old account.
  - q: An out-of-network payer sent the payment to the patient. What happens next?
    options:
      - The provider writes it off
      - The provider bills the patient for the amount the payer sent them, plus any patient responsibility
      - The payer must pay again
      - Nothing
    answer: 1
    why: Without an assignment of benefits honored by the payer, the patient receives the check and owes the provider that amount.
---

## The situation

The payer's status shows **paid**, but the account still shows a balance. Somewhere between the payer and the posted account, the money or the information got lost.

## First: get the payment details

On the call or portal, collect:

- Paid date and paid amount for this claim
- Payment method: **EFT** or **check**
- **Trace number** (EFT) or **check number**
- Total amount of the check or EFT (it usually covers many claims)
- **Payee** name, tax ID and address (or masked bank account for EFT)

## Then: search in this order

1. **Posting history** of the account and of related accounts (same patient, other dates of service). It may be posted to the wrong DOS or patient.
2. **ERA files** for that trace number: was the ERA received and loaded?
3. **Unapplied or suspense cash**: payments received but not matched to an account.
4. **Bank deposits** for that date and amount (posting or finance team).
5. **Lockbox images** for paper checks.

Most “paid not received” cases end here: the money arrived but wasn't posted, or the ERA was never loaded.

## When the money really didn't arrive

| Situation | Action |
|---|---|
| Check sent to an old address | Ask the payer to stop payment and reissue to the correct address; update the address with the payer |
| EFT sent to an old bank account | Confirm EFT enrollment details; ask the payer for a trace or reissue; update enrollment |
| Check never cashed and older than the payer's void period | Ask for a reissue (payers often void uncashed checks after 90–180 days) |
| Paid to another provider or tax ID in the group | Get details; if within the same organization, move the payment internally; otherwise ask the payer to recoup and repay |
| Paid to the **patient** | See below |

Payers often require a **check tracer** request and a waiting period before reissuing a check.

## Paid to the patient

Payers send payment to the member instead of the provider when:

- the provider is **out-of-network** and the plan pays members directly for non-par services,
- the **assignment of benefits** wasn't indicated (box 13 or 27 on the CMS-1500), or
- some plans pay members by policy.

What to do:

1. Confirm with the payer that the payment went to the member, and get the amount and date.
2. Update the account: post the insurance processing as **paid to patient** (per client SOP) and transfer the paid amount to patient responsibility.
3. Bill the patient for the amount the payer sent them, plus any deductible, coinsurance or copay.
4. Fix the cause: check box 13 or 27 settings; for out-of-network providers, collect at the time of service where policy allows.

!!! warning "Medicare non-participating providers"
    If a non-participating provider doesn't accept assignment on a Medicare claim, Medicare pays the beneficiary, and the provider collects from the patient, subject to the limiting charge (115% of the non-par fee schedule amount).

## Prevent it

- Keep **EFT and ERA enrollment** current for every payer, location and tax ID.
- Notify payers of address and bank changes well before they take effect.
- Clear **unapplied cash** daily.
- Reconcile ERAs against deposits by trace number.

!!! mistake "Auditor's red flag"
    Payments the payer confirms as sent, but no one searches unapplied cash before asking for a reissue. Most “missing” payments are already in the bank.

!!! interview "If an interviewer asks “What do you do when the payer says paid but you don't see it?”"
    “I get the paid date, amount, check or EFT trace number and where it was sent. Then I search posting history, the ERA files, unapplied cash and bank deposits for that trace number. Usually it's unposted or misposted. If it really wasn't received, for example sent to an old address or account, I ask the payer to reissue and update our details. If it was paid to the patient, I bill the patient for that amount.”
