---
title: Payer call workflows and probing questions
short: Payer call workflows
description: Step-by-step workflows for the claim statuses AR callers hit every day, with the exact questions to ask the representative so every call ends with a clear next action.
order: 8
level: Intermediate
keywords: AR calling probing questions claim in process TAT check tracing EFT stop payment reissue W-9 offset recoupment newborn claim furnished by another provider CO-B20 payer call script
quiz:
  - q: A payer says a claim paid by paper check 12 business days ago. What do you do?
    options:
      - Ask for a stop payment immediately
      - Note the check number, amount and address, and allow time for mail delivery and posting before tracing
      - Resubmit the claim
      - Bill the patient
    answer: 1
    why: Paper checks need mailing and processing time. Record the details and follow up after your team's waiting period (often around 30 business days) before asking for a trace or stop payment.
  - q: A payer recouped money from today's ERA for a different patient's claim. What must you get from the rep?
    options:
      - Nothing; recoupments explain themselves
      - The original patient, account, date of service, claim number, amount and reason for the recoupment
      - The current patient's copay
      - A new member ID
    answer: 1
    why: Posting needs the original claim to apply the takeback correctly, and AR needs the reason to decide whether to accept or dispute it.
---

## How to use these workflows

Every call should end with three things written in your note: **what the payer said**, **what you did**, and **when the claim will be checked again**. The workflows below cover the statuses that make up most AR calls. Waiting periods (such as how long to wait for a mailed check) vary by client SOP and payer, so follow your process document where it differs.

Always close a call with: **“May I have your name and a call reference number?”**

## 1. Claim in process (pending)

**Goal:** find out why it's pending and whether anything is needed from you or the patient.

1. Get the received date and the payer's normal processing time (turnaround time, or TAT).
2. If the claim is still within TAT, set a follow-up for just after it.
3. If it's past TAT, find the reason: records requested from the provider, information requested from the patient, pricing or review, or a payer backlog.
4. Act on the reason (send records, contact the patient, escalate) and note it.

**Ask the rep:**
- “When was the claim received, and what's the normal processing time?”
- “What's the specific reason it's still pending?”
- “Has anything been requested from the provider, such as medical records or a W-9? Where should we send it?”
- “Has a letter been sent to the patient? On what date, and how many?”
- “When should it finalize?”

## 2. Claim approved to pay (finalized, payment not issued yet)

**Goal:** confirm when and how the payment will be issued, so you don't follow up too early or miss it.

1. Confirm the claim is finalized and approved, with the allowed and approved payment amounts.
2. Ask for the expected payment date. Many payers issue payments in weekly or twice-weekly cycles, so an approved claim can wait several days.
3. Ask whether it will be paid by check or EFT, and whether it will be part of a bulk payment.
4. Set a follow-up for a few days after the expected date, then confirm the payment details (see the next workflow).

**Ask the rep:**
- “What are the allowed and approved payment amounts?”
- “When is payment expected to be issued, and by check or EFT?”
- “Is any of the amount patient responsibility?”

## 3. Claim paid: check or EFT

**Goal:** confirm the payment matches what's expected and that it reached the right place.

1. Confirm allowed, paid, contractual adjustment and patient responsibility amounts.
2. Get the payment method, number, date and amount.
3. For **EFT**: give the trace number and amount to posting; confirm the bank account (last digits) and TIN match your enrollment.
4. For a **paper check**: confirm the pay-to address. Allow your team's waiting period for mail and posting.
5. If the check still isn't found after that period, ask whether it has been **cashed**:
    - **Cashed:** request a copy of the canceled check (front and back) to see who cashed it.
    - **Not cashed, correct address:** ask for a **stop payment and reissue**.
    - **Not cashed, wrong address:** send an updated **Form W-9** or address change, then ask for a reissue.

**Ask the rep:**
- “Was this paid by check or EFT? What's the check number or EFT trace number, the date and the total amount?”
- “Is that amount for this claim only, or a bulk payment covering several claims?”
- “What pay-to address was it sent to?” or “What account (last four digits) was the EFT sent to?”
- “Has the check been cashed? Can you send a copy of the canceled check, or place a stop payment and reissue?”

## 4. Payment applied to an offset (recoupment)

**Goal:** identify the original overpaid claim so it can be posted and reviewed.

1. Get the offset amount and the original claim it was taken for (it may be a different patient under the same TIN).
2. Send the offset details or offset EOB to the posting team so the takeback is applied to the original claim.
3. Review the original claim: is the overpayment valid? If not, dispute it within the payer's deadline.

**Ask the rep:**
- “What amount was withheld, and from which payment?”
- “Which patient, account number, date of service and claim number was the original overpayment for?”
- “Why was the original claim considered overpaid?”
- “Can you send the offset EOB or overpayment letter?”

## 5. Secondary paid nothing after the primary (OA-23)

**Goal:** confirm whether the secondary owes anything.

1. Compare the primary's **paid amount** with the secondary's **allowed amount** for the service.
2. If the primary paid **as much as or more than** the secondary allows, the secondary owes nothing. Adjust or move any remaining PR to the patient per the plans' rules.
3. If the primary paid **less** than the secondary allows, the secondary may owe the difference (up to the patient's remaining responsibility). Ask for reprocessing.

**Ask the rep:**
- “What's your allowed amount for this code?”
- “The primary paid [amount], which is less than your allowed [amount]. Can the claim be reprocessed for the difference?”

## 6. Patient enrolled in hospice (CO-B9)

1. Get the hospice election dates and the hospice provider's name and NPI.
2. If the service is **related** to the terminal condition, it's the hospice's responsibility: bill the hospice under your arrangement.
3. If the service is **unrelated**, Medicare Part B can pay: correct the claim with modifier **GW**.
4. If the treating physician is the patient's attending and **not employed by the hospice**, modifier **GV** applies.

**Ask the rep:** “What are the hospice start and end dates? Which hospice is it, and what's its NPI? Can the claim be resubmitted with GW for an unrelated service?”

## 7. Missing or invalid CLIA number (CO-16 with MA120)

1. Confirm the lab test codes on the claim and that the practice's 10-character CLIA number was in box 23.
2. Check the certificate was active on the date of service and covers that test level (waived tests need modifier **QW** for Medicare).
3. Correct and resubmit.

**Ask the rep:** “Which line is missing the CLIA number? If we send a corrected claim with CLIA [number], can it be reprocessed? What's the timeframe?”

## 8. Missing or invalid NDC (CO-16 with M119)

1. Find the drug line and check the NDC in the record (11 digits, 5-4-2 format, leading zeros added).
2. Confirm it's reported as **N4** + NDC + unit qualifier (**UN, ML, GR, F2** or **ME**) + quantity.
3. Send a corrected claim.

**Ask the rep:** “Which drug line has the NDC problem? What's the deadline for a corrected claim?”

## 9. Newborn not added to the policy (CO-31, CO-26 or CO-32)

1. Calculate the baby's age on the date of service.
2. Many plans and state laws cover a newborn from birth for about the first month (often 31 days), sometimes under the parent's ID, but the parent must enroll the baby within the plan's window to keep coverage. Rules differ by plan and state.
3. If the plan allows, ask for reprocessing under the parent's coverage; otherwise ask the parent to enroll the baby (submit the plan's enrollment or change form), then rebill once the ID is issued.

**Ask the rep:** “The baby was [age] days old on the date of service. How does this plan cover newborns, and can the claim be processed under the parent's policy? Has the subscriber enrolled the baby yet, and what ID will the baby have?”

## 10. Service furnished by another provider (CO-B20)

1. Ask which provider was paid for the same service on the same date.
2. If it's a provider in **your own group**, the service was likely billed twice. Confirm with the client and adjust the duplicate.
3. If it's a **different** group or specialty that genuinely provided a separate service, ask for reprocessing or appeal with records.

**Ask the rep:** “Which provider was paid for this service on this date, and what specialty and TIN?”

## 11. Benefit maximum or limits (CO-119, CO-151)

1. Ask whether the limit is by **number of visits**, **dollars** or **frequency**, and when it was reached.
2. If the limit is truly met, bill the secondary with the primary's denial, or the patient if they were informed.
3. If the count looks wrong (for example, visits from another year counted), ask for a recount and reprocessing.

**Ask the rep:** “Was the maximum reached by visits or dollars? On which date? Which claims were counted? Can you send the denial EOB so we can bill the secondary?”

!!! mistake "Auditor's red flag"
    Calls closed without a reference number, or notes that record what the rep said without the action taken. Both fail audit because the next analyst can't continue the work or prove the call happened.

!!! interview "If an interviewer asks “What do you ask when a claim is paid but not received?”"
    “I ask for the payment method, check or EFT number, date and amount, whether it's a bulk payment, and the pay-to address or bank account. If the check hasn't arrived after our waiting period, I ask whether it's been cashed. If cashed, I request the canceled check copy; if not, I ask for a stop payment and reissue, updating the address or W-9 if needed. Then I note the rep's name and reference number.”
