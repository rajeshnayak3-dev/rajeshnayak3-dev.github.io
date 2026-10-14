---
title: Denial management and AR follow-up
short: Denials and AR follow-up
description: How AR teams prioritise worklists, check claim status, work denials to payment, write notes an auditor will pass, and feed root causes back to prevent repeats.
order: 10
level: Intermediate
keywords: AR follow up denial management worklist prioritisation claim status call payer reference number root cause appeal reconsideration corrected claim
quiz:
  - q: Which of these is the best AR note?
    options:
      - Called payer, claim in process.
      - "10/14 Called BCBS, spoke to Ann, ref 7781. Claim received 09/20, denied CO-197 auth missing. Auth A55 on file for DOS. Sent corrected claim with auth in box 23. F/U 11/04."
      - Claim denied, will check later.
      - Sent to coding.
    answer: 1
    why: A good note shows date, who and how contacted, reference number, status, reason, action and the next follow-up date.
  - q: A denial was caused by a wrong member ID entered at registration. What's the full fix?
    options:
      - Correct and resubmit the claim only
      - Correct and resubmit, then report the root cause so the registration error is prevented
      - Write it off
      - Appeal with a letter
    answer: 1
    why: Denial management means fixing the claim AND preventing the next one. Root cause tracking is what reduces the denial rate over time.
  - q: When should you send a corrected claim instead of an appeal?
    options:
      - When the claim data itself was wrong (code, modifier, units, provider), and the payer accepts corrected claims for that issue
      - Never
      - When the payer's decision on medical necessity is disputed with records
      - When the claim was paid correctly
    answer: 0
    why: Corrected (replacement) claims fix billing errors. Appeals dispute the payer's decision when the claim was correct or needs clinical justification.
---

## Two jobs, one goal

- **AR follow-up** keeps every unpaid claim moving and stops claims from ageing past deadlines.
- **Denial management** turns denied claims into payment and stops the same denial from happening again.

Both end in the same place: the claim is paid correctly, or closed with a valid reason.

## Building the worklist

Nobody can work every claim every day. Teams prioritise by:

1. **Deadline risk:** claims approaching timely filing or appeal limits.
2. **Dollar value:** high-balance claims first (sometimes called “high-dollar” or “top-down” worklists).
3. **Aging bucket:** older claims before newer ones.
4. **Payer:** grouping by payer lets one call cover several claims.
5. **Denial type:** grouping similar denials makes fixes faster.

Billing systems or AR tools build these worklists automatically, and each claim gets a **follow-up date** so it returns if unresolved.

## Checking claim status

| Method | When to use |
|---|---|
| Payer portal | First choice; fast, shows details and often the ERA |
| EDI 276/277 | Automated status checks in bulk |
| IVR (automated phone) | Payers without good portals; gives status and dates |
| Calling a representative | When the portal is unclear, or you need reprocessing, details or a reference number |

### What you can learn from status

- **Not on file:** the payer never received it. Check the rejection reports and resubmit with proof of timely filing if needed.
- **In process or pended:** find out why and what's needed.
- **Paid:** get the date, amount, check or EFT number and where it was sent. Then find out why it isn't posted.
- **Denied:** get the reason, the denial date and the next step.

## The AR call

A structured call saves time and passes audit.

1. **Introduce:** your name, the provider's name, NPI and tax ID.
2. **Identify the claim:** patient name, DOB, member ID, date of service, billed amount.
3. **Ask for status.**
4. **If denied, ask:** the denial reason and code, whether a corrected claim or reconsideration is accepted, the appeal limit and address or fax, and whether the claim can be **reprocessed** on the call (for example, when the payer made the error).
5. **If paid, ask:** paid date, amount, check or EFT number, and the payee address.
6. **Close:** representative's name and **call reference number**.

Payer-specific questions for each denial are on its page in the [denial code library](/denials/codes/).

## Choosing the action

| Situation | Action |
|---|---|
| Billing error on the claim | **Corrected claim** (frequency code 7 on CMS-1500 box 22 with the original claim number; type of bill xx7 on UB-04) |
| Payer processing error | Ask for **reprocessing** on the call, or a written **reconsideration** |
| Payer needs information | Send medical records, itemized bill or COB form |
| Patient needs to act | Contact the patient (COB update, accident questionnaire, new insurance) |
| Payer decision you disagree with | **Appeal** with supporting documents within the appeal limit |
| Another payer is responsible | Bill the correct payer |
| Claim is truly not collectible | Write off with the correct adjustment code and approval per SOP |

!!! warning "Don't resubmit an original claim to fix a denial"
    Resending the same claim as a new original creates a **duplicate denial (CO-18)** and can push the corrected claim past timely filing. Use the payer's correction or reconsideration process.

## Writing notes that pass audit

A complete AR note has six parts. Use the payer's terms and the client's abbreviations.

1. **Date and method** (call, portal, IVR)
2. **Who** (representative name, or portal name) and **reference number**
3. **Status** found (received date, processed date, paid or denied)
4. **Reason** (CARC/RARC and plain-language reason)
5. **Action** taken (what you did, what you sent, to whom)
6. **Next step and follow-up date**

!!! example "Before and after"
    **Weak:** “Called UHC, denied for auth, will send to client.”

    **Strong:** “10/14/26 Called UHC 877-xxx, spoke to Mark, ref 2026101400123. Claim #UH8812 rcvd 09/02, denied 09/18 CO-197 no auth for 72148. Rep confirms no auth on file. Retro auth allowed within 90 days of DOS for this plan per rep. Sent to client auth team via task #554 to request retro auth. F/U 10/28.”

## Root cause analysis

Every denial has a cause somewhere earlier in the cycle. Denial teams tag each one:

| Root cause area | Examples |
|---|---|
| Registration | Wrong member ID, wrong subscriber, outdated insurance |
| Eligibility | Coverage not verified, benefits misunderstood |
| Authorization | Not obtained, expired, wrong code |
| Coding | Wrong code, missing modifier, unsupported diagnosis |
| Charge entry | Wrong provider, POS, units |
| Credentialing | Provider not enrolled with payer |
| Billing | Late submission, wrong payer, missing primary EOB |
| Payer error | Wrong fee schedule, incorrect processing |

Reports by root cause show leaders where to spend training and process fixes. That's how denial rates fall from 12% to 5%, not by working denials faster.

## Measuring the work

- **Productivity:** claims or accounts worked per day, often weighted by complexity.
- **Quality:** audit score on a sample of each analyst's work.
- **Resolution rate:** share of claims worked that end paid or correctly closed.
- **Touches per claim:** how many times a claim is worked before it resolves. Fewer is better.
- **Denial overturn rate:** share of appealed denials that are paid.

!!! mistake "Auditor's red flag"
    Notes without a call reference number or follow-up date. Without them, the work can't be verified or picked up by the next analyst, so the note fails audit even if the action was right.

!!! interview "If an interviewer asks “How do you handle a denied claim?”"
    “I first read the denial reason and remark codes on the ERA and check the claim, notes and documents to confirm the cause. Then I decide the right action: a corrected claim for a billing error, reprocessing for a payer error, sending records if information is missing, an appeal if we disagree, or billing the right payer. I document the call or action with a reference number and set a follow-up date, and I tag the root cause so it can be prevented.”
