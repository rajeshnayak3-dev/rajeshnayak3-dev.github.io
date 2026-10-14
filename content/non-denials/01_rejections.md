---
title: Claim rejections
short: Rejections
description: Clearinghouse and payer front-end rejections, how to read them, the most common ones and their fixes, and the daily routine that stops rejections from turning into timely filing write-offs.
order: 1
level: Beginner
keywords: claim rejection clearinghouse rejection payer rejection 277CA 999 rejection reasons subscriber not found invalid NPI payer ID rejection queue
quiz:
  - q: A claim rejected for “subscriber not found.” What should you send after fixing it?
    options:
      - A corrected claim with frequency code 7
      - A new original claim (frequency 1)
      - An appeal
      - Nothing
    answer: 1
    why: A rejected claim never entered adjudication, so there's no original claim to replace. Fix it and send a new claim.
  - q: Why must rejection queues be worked daily?
    options:
      - Payers fine providers for rejections
      - The timely filing clock keeps running because the payer never received the claim
      - Rejections expire after 24 hours
      - Clearinghouses delete them
    answer: 1
    why: Until an accepted claim reaches the payer, timely filing isn't met. Old unworked rejections become CO-29 write-offs.
---

## What a rejection is

A **rejection** means the claim failed a check **before** the payer adjudicated it. It never entered the payer's claim system, so:

- there is **no ERA** and no denial code,
- there's **nothing to appeal**, and
- the payer has **no record** of receiving it for timely filing purposes.

Rejections come from three places:

| Source | Report | Typical cause |
|---|---|---|
| Clearinghouse | Clearinghouse edit or rejection report | Missing data, invalid formats, payer ID problems |
| Payer front end | **277CA** with an A3, A6 or A7 category code | Member not found, provider not on file, invalid codes |
| File level | **999** (or TA1) rejected | Technical file errors, usually for the whole batch |

## Common rejections and fixes

| Rejection (plain language) | Usual fix |
|---|---|
| Subscriber or patient not found | Recheck name, DOB, member ID, subscriber and relationship against the card; run eligibility |
| Invalid or missing member ID | Correct ID including prefix or suffix |
| Billing provider NPI invalid or not on file | Confirm NPI and tax ID pair; check EDI enrollment with that payer |
| Rendering NPI missing or invalid | Add the individual NPI; confirm it's enrolled |
| Referring or ordering provider missing | Add name and NPI in box 17 or the 837 loop |
| Invalid diagnosis or procedure code for the DOS | Coding to provide the valid code |
| Diagnosis pointer missing | Link each line to a diagnosis |
| Invalid payer ID or payer not accepting electronic claims from this provider | Correct the payer ID; complete EDI enrollment; or send on paper |
| Date of service after the claim's create date, or in the future | Fix the DOS |
| Billing address is a P.O. box | Use a physical address in the billing provider loop; P.O. box can go in pay-to |
| Duplicate batch | Confirm whether the claims were already accepted before resending |

## The daily rejection routine

1. **Pull the reports** from the clearinghouse every morning (rejections, 277CA rejections, unacknowledged batches).
2. **Group rejections by reason.** Twenty claims rejected for the same NPI problem need one fix in the provider set-up, not twenty manual edits.
3. **Fix and resubmit** as new claims.
4. **Confirm acceptance** on the next day's report.
5. **Track the root cause** (registration, charge entry, provider set-up) so the error stops at the source.

!!! warning "A claim can reject quietly"
    Some payers return rejections only on the 277CA, which many billing systems don't show on the claim itself. If a claim has no ERA after 30 days, check whether it was ever accepted.

## Rejection or denial? Quick test

Ask: **does the payer's ERA (835) mention this claim?**

- **No** → it's a rejection or it's not on file. Fix and send a new claim.
- **Yes, with $0 and a CARC** → it's a denial. Work it as a denial.

!!! example "Scenario"
    Monday's 277CA shows 34 claims rejected by one Medicare Advantage plan with “Billing provider not on file.” All are for a new satellite location. The analyst checks with credentialing: the location's NPI wasn't added to the plan's provider file. Credentialing submits the update; once confirmed, the analyst resubmits all 34 as new claims, keeping the rejection report as a record. Timely filing (90 days for this plan) is still safe.

!!! mistake "Auditor's red flag"
    Rejected claims resent without fixing the cause, so they reject again. Check the rejection reason before every resubmission.

!!! interview "If an interviewer asks “How do you handle rejections?”"
    “I work the clearinghouse and 277CA rejection reports daily, group them by reason, fix the data, such as member ID, NPI or codes, and resubmit as new claims because they never entered adjudication. I confirm acceptance the next day and report repeated causes so they're fixed at registration, charge entry or provider set-up. Daily work matters because timely filing keeps running until the payer accepts the claim.”
