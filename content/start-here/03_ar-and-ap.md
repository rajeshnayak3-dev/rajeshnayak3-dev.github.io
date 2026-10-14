---
title: AR and AP in RCM
short: AR and AP
description: What accounts receivable and accounts payable mean in healthcare, what an AR team does every day, and where AP shows up in RCM as refunds and overpayments.
order: 3
level: Beginner
keywords: accounts receivable accounts payable AR caller AR analyst AR follow up aging buckets credit balance refunds
takeaways:
  - "AR is money owed to the provider; AP is money the provider owes others."
  - "In RCM, AR is unpaid claims and patient balances, tracked by age."
  - "AP shows up in RCM mainly as refunds of overpayments and credit balances."
quiz:
  - q: From the provider's point of view, an unpaid insurance claim is part of what?
    options:
      - Accounts payable
      - Accounts receivable
      - Capitation
      - Contractual adjustment
    answer: 1
    why: Accounts receivable is money owed to the provider. Unpaid claims and unpaid patient balances are both AR.
  - q: A payer paid a claim twice by mistake. The extra payment is best described as what?
    options:
      - AR to collect
      - A credit balance that the provider may owe back, which works like AP
      - A contractual adjustment
      - Patient responsibility
    answer: 1
    why: An overpayment creates a credit balance. The provider must refund it, so it behaves like accounts payable.
  - q: Which AR aging bucket usually gets the highest priority?
    options:
      - 0–30 days, because those claims are newest
      - The oldest buckets, especially claims near timely filing limits, and high-dollar claims
      - Only claims under $50
      - Patient balances only
    answer: 1
    why: Teams prioritize by risk and value. Old claims risk timely filing denials, and high-dollar claims have the biggest effect on cash.
  - q: What is the first thing an AR analyst should do with a no-response claim?
    options:
      - Write it off
      - Bill the patient
      - Check claim status (portal, IVR, 276/277 or a call) to confirm the payer received it
      - Submit a duplicate claim immediately
    answer: 2
    why: You need to know if the claim is on file, in process, paid or denied before acting. Resubmitting blindly creates duplicate denials.
---

## Start with accounting

The terms come from basic accounting.

- **Accounts receivable (AR):** money **owed to** the business. For a provider, that's every unpaid insurance claim and every unpaid patient balance.
- **Accounts payable (AP):** money the business **owes to** others for goods and services it has received. For a hospital or practice, that's its operating bills: medical and surgical supplies, drugs, DME vendors, rent, EHR and billing software, utilities and contracted services. Payroll is usually handled as its own liability. AP is run by the provider's finance or accounting department, not the RCM team.

In RCM, nearly all the work is about AR, because RCM exists to turn services into collected cash. RCM teams don't pay vendor bills. The closest they get to AP is money the provider has received but must give back, which is tracked separately as **credit balances** (a refund liability), not in the vendor AP ledger.

## AR in RCM

### The AR balance

Every claim that's been billed but not resolved sits in AR. It leaves AR when it's:

- paid (and any balance is moved to the patient or adjusted), or
- adjusted off for a valid reason (contractual write-off, approved small-balance write-off, bad debt).

### Aging buckets

AR is grouped by how long it's been open, counted from the date of service or the date of first billing (teams specify which).

| Bucket | What it usually means |
|---|---|
| 0–30 days | Normal processing time. Most clean claims pay here. |
| 31–60 days | Should be paid. Check status if there's no response. |
| 61–90 days | Something is wrong. Find out what. |
| 91–120 days | High risk. Timely filing and appeal deadlines are getting close. |
| 120+ days | Very high risk. Many of these end up written off if not worked. |

A healthy practice keeps most of its AR under 60 days. AR over 90 days as a percentage of total AR is one of the most watched numbers in RCM.

### What the AR team does

“AR” is also the name of the team. In Indian and Filipino RCM companies, you'll hear job titles like **AR caller**, **AR analyst**, **AR follow-up executive** or **AR specialist**. Their daily work:

1. **Pick up claims** from a worklist, usually sorted by aging bucket, payer and dollar value.
2. **Check status** on the payer portal, through the payer's phone system (IVR), by EDI 276/277, or by calling a representative.
3. **Find the reason** the claim isn't paid: not on file, in process, denied, paid to the wrong place, or waiting for information.
4. **Take action:** correct and resubmit, send records, appeal, call the patient for updated insurance, transfer to the next payer, or request reprocessing.
5. **Document notes** in the billing system with the date, who was contacted, reference number, finding and next step.
6. **Set a follow-up date** so the claim comes back if the action doesn't resolve it.

!!! tip "The auditor's view of a good AR note"
    A quality auditor checks that a note answers: what was the status, how was it confirmed (with a call reference number if a call), what action was taken, and when the claim will be checked again. Notes like “called payer, claim in process” fail audit because they can't be acted on.

### AR follow-up versus denial management

The two overlap, but many companies separate them:

- **AR follow-up** focuses on claims with **no response** or **unclear status** and on keeping aging low.
- **Denial management** focuses on claims that came back **denied**, finding the root cause, fixing and appealing, and preventing repeat denials.

## Where AP shows up in RCM

A provider sometimes receives money it isn't entitled to. That money becomes a **refund liability**. Accountants record it in a credit balance (or refunds payable) sub-ledger rather than general AP, but it behaves the same way: the provider owes it to someone.

- **Overpayments:** the payer paid more than the contract allows, paid twice, or paid for a patient who wasn't covered.
- **Patient overpayments:** a patient paid a copay at the front desk, then the payer applied the full amount to the plan.
- **Wrong payer paid:** a commercial plan paid as primary when Medicare should have been primary.

These create a **credit balance** on the account. The RCM credit balance team reviews them and issues **refunds** to the payer or patient, or lets the payer recover the money by **offset (recoupment)** from future payments.

!!! warning "Overpayments have deadlines"
    Under federal law, Medicare and Medicaid overpayments must be reported and returned within 60 days of being identified (the 60-day rule tied to the Affordable Care Act). Commercial contracts and many state laws set their own deadlines. Ignoring credit balances is a compliance risk, not just an accounting issue.

Read more in [credit balances and refunds](/non-denials/credit-balances-and-refunds/).

## AR and AP side by side

| | Accounts receivable | Credit balances and refunds (the RCM side of “payables”) |
|---|---|---|
| Direction | Money owed to the provider | Money the provider owes back |
| Typical items | Unpaid claims, patient balances | Overpayments, duplicate payments, patient refunds |
| Team | AR follow-up, denials, patient collections | Credit balance and refunds team |
| Goal | Collect quickly and fully | Return accurately and on time |
| Key metric | Days in AR, AR over 90 days | Credit balance count and age |

!!! interview "If an interviewer asks “What is AR?”"
    “AR, or accounts receivable, is the money owed to the provider for services already billed. In RCM, the AR team follows up on unpaid and denied claims, checks status with the payer, finds the reason for non-payment and takes action, such as correcting the claim, sending records or appealing, so the claim gets paid before timely filing or appeal limits. AR is tracked by aging buckets, and we prioritize older and high-dollar claims.”
