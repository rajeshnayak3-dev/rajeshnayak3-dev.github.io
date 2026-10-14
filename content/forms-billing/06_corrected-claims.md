---
title: Corrected claims, voids and resubmissions
short: Corrected claims
description: When to send a corrected claim, a void, a new claim or a reconsideration, how frequency codes work on the CMS-1500 and UB-04, and how to avoid duplicate denials.
order: 6
level: Intermediate
keywords: corrected claim replacement claim void claim frequency code 7 8 resubmission ICN DCN original reference number TOB xx7 xx8 reopening reconsideration duplicate denial
quiz:
  - q: A claim was paid with the wrong rendering provider. What should you send?
    options:
      - A new original claim with the right provider
      - A corrected claim, frequency code 7, with the original claim number
      - An appeal letter
      - Nothing
    answer: 1
    why: A replacement (frequency 7) claim corrects billing data on an adjudicated claim. A new original would deny as a duplicate.
  - q: A claim was billed to the wrong patient. What is the cleanest fix?
    options:
      - Send a corrected claim changing the patient
      - Void the claim (frequency 8) and bill a new claim under the correct patient
      - Ask the payer to move it
      - Write it off
    answer: 1
    why: Patient, subscriber and often billing provider changes can't be made by replacement. Void the original and submit a new claim.
  - q: For Medicare Part B, how are simple clerical errors on a processed claim usually fixed?
    options:
      - A corrected claim with frequency 7
      - A reopening, by phone, portal or written request
      - A level 2 appeal
      - A new claim
    answer: 1
    why: Medicare Part B handles minor clerical corrections through reopenings. Part A claims (UB-04) use replacement TOBs (xx7).
---

## Four ways to “resend” a claim

| Action | Use when | How |
|---|---|---|
| **New (original) claim** | The claim was **rejected** and never adjudicated, or a **void** has removed the original | Frequency **1**, no original claim number |
| **Corrected (replacement) claim** | An adjudicated claim had wrong or missing **billing data**: code, modifier, units, DOS, POS, diagnosis, rendering provider, charges | Frequency **7** with the payer's original claim number |
| **Void (cancel)** | The claim shouldn't exist: wrong patient, wrong payer, billed in error, duplicate paid claim | Frequency **8** with the original claim number |
| **Reconsideration or appeal** | The claim was **correct** but the payer's decision was wrong, or the payer needs clinical justification | Payer's form or letter, with documents |

## Where the codes go

### CMS-1500 / 837P
- **Box 22:** resubmission code **7** (replacement) or **8** (void), and the **original reference number** (the payer's claim control number, ICN or DCN, from the ERA).
- In the 837P, the frequency code is in the **CLM05-3** element and the original claim number in a **REF*F8** segment.

### UB-04 / 837I
- **FL 4 type of bill:** last digit **7** (replacement) or **8** (void), for example 0117 or 0138.
- **FL 64:** document control number of the original claim.
- **Condition codes** explaining the change (for example D1 changes to charges, D2 changes to revenue codes or HCPCS, D9 any other change, E0 change in patient status).

## Rules that trip people up

1. **Send the whole claim, not just the changed line.** A replacement claim **replaces** the original entirely. Leave a line off and the payer will treat it as removed and may recoup its payment.
2. **Use the payer's claim number**, not your own account number. It's on the ERA (the CLP07 element in the 835).
3. **Some changes need void and rebill, not replacement.** Changing the patient, subscriber, payer, or (for many payers) the billing provider or tax ID usually requires a void and a new claim.
4. **Payer-specific timely filing applies to corrections.** Many commercial payers allow corrected claims within a set time from the original payment (for example 90–180 days), separate from the original timely filing limit.
5. **Don't correct a claim that's still pending.** Wait until it's finalised, or ask the payer how to update it.
6. **Never resend an adjudicated claim as a new original.** It will deny as a duplicate (**CO-18**).

## Medicare's approach

| Medicare part | Correction method |
|---|---|
| Part B (professional, 837P) | Medicare MACs don't accept frequency 7 replacement claims from most Part B providers. Clerical errors are fixed through a **reopening** (by phone, portal or written request, generally within one year of the initial determination). Errors that need review go through **redetermination** (appeal). |
| Part A (institutional, 837I) | **Adjustment claims** using TOB xx7, or cancel with xx8, through the MAC's system |

A claim **rejected as unprocessable** by Medicare (with remark **MA130**) has no appeal rights. Correct it and send a **new claim**.

## Choosing the right action: examples

| Situation | Action |
|---|---|
| Denied CO-4: missing modifier RT | Corrected claim with RT (commercial) / reopening (Medicare Part B) |
| Denied CO-16 / M51: invalid procedure code | Corrected claim with valid code, after coding review |
| Paid, but units under-billed (2 instead of 4) | Corrected claim with all lines and the correct units |
| Billed under the wrong patient's account | Void the claim; bill a new claim under the right patient |
| Billed to Aetna, patient actually has Cigna | Void with Aetna if paid (or let the denial stand); new claim to Cigna |
| Denied CO-50, coding is correct | Appeal with medical records; not a corrected claim |
| Rejected on the 277CA for invalid member ID | Fix the ID and send a **new** claim (it was never adjudicated) |
| Duplicate paid claim (paid twice) | Void the duplicate or refund the overpayment per payer rules |

!!! tip "Write the reason in the notes"
    Every corrected claim note should say what changed and why: “Sent corrected claim (freq 7, orig ICN 2226…) adding modifier 25 to 99214 per coding review 10/12.” Auditors and the next analyst need to understand the change without opening the claim.

!!! mistake "Auditor's red flag"
    Corrected claims that include only the changed line. A replacement claim replaces the whole original, so missing lines are treated as removed and their payments recouped.

!!! interview "If an interviewer asks “What is a corrected claim?”"
    “A corrected or replacement claim fixes billing information on a claim the payer has already adjudicated, such as a wrong code, modifier, units or provider. On the CMS-1500, it's frequency code 7 in box 22 with the payer's original claim number; on the UB-04, it's type of bill ending in 7 with the document control number in FL 64. We send the complete claim, not just the changed line. To cancel a claim we use frequency 8.”
