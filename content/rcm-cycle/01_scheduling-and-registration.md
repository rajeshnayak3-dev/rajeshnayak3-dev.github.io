---
title: Scheduling and patient registration
short: Scheduling and registration
description: The first stage of the cycle, where most avoidable denials begin. What to capture, how to read an insurance card, and the registration errors that come back months later.
order: 1
level: Beginner
keywords: patient registration demographics insurance card front desk scheduling pre-registration new patient
quiz:
  - q: A claim denies because the patient's date of birth doesn't match the payer's records. Where did the error most likely start?
    options:
      - Coding
      - Registration
      - Payment posting
      - Adjudication
    answer: 1
    why: Demographic errors such as name spelling, date of birth and member ID are entered at registration. They surface later as rejections or denials such as CO-31 or CO-140.
  - q: Which detail on a Blue Cross Blue Shield card is essential for routing the claim?
    options:
      - The customer service phone number only
      - The three-character alpha prefix at the start of the member ID
      - The card's colour
      - The pharmacy BIN
    answer: 1
    why: The prefix identifies the member's home plan, which is how the BlueCard program routes out-of-area claims.
  - q: What is the main benefit of pre-registration?
    options:
      - It replaces eligibility checks
      - It lets staff collect and verify information before the visit, so errors are fixed early
      - It removes the need for a copay
      - It is required by HIPAA
    answer: 1
    why: Collecting details days ahead gives time to verify coverage, get authorizations and correct mistakes before the claim exists.
---

## Why the first stage matters most

Registration feels like simple data entry, but it decides whether the claim can be paid at all. Industry studies consistently rank **registration and eligibility errors** among the top causes of denials. The cruel part is timing: a typo entered today won't be noticed until the claim rejects or denies weeks later.

## Scheduling

When a patient books, the scheduler should capture:

- **Reason for visit**, which decides whether a referral or authorization is needed.
- **New or established patient** status. A new patient hasn't received professional services from that doctor, or another of the same specialty in the same group, in the past three years. It changes the E/M code range used later.
- **Insurance** on file, or new insurance to verify.
- **Referring provider**, if the plan requires a referral.

Good practices schedule far enough ahead to complete **pre-registration**: verifying insurance and getting authorizations before the patient walks in.

## What registration must capture

### Patient demographics
- Full legal name, exactly as on the insurance card
- Date of birth and sex
- Address and phone number
- Patient's relationship to the subscriber (self, spouse, child, other)

### Subscriber details
- Subscriber's name and date of birth (if different from the patient)
- Employer, for employer-sponsored plans

### Insurance details
- Payer name and the **claims address or payer ID**
- **Member ID** and **group number**
- Primary, secondary and tertiary plans, in the correct order
- Copies of the **front and back** of each insurance card, and photo ID

### Consents and forms
- Assignment of benefits, so the payer pays the provider directly
- HIPAA notice of privacy practices acknowledgment
- Financial responsibility agreement
- **Medicare Secondary Payer (MSP) questionnaire** for Medicare patients, which asks whether another insurance should pay first
- Accident details, if the visit is for an injury (date, how it happened, auto or work related)

## Reading an insurance card

A typical commercial card shows:

| Field | Why it matters |
|---|---|
| Member name and ID | Must match exactly on the claim |
| Group number | Identifies the employer plan |
| Plan type (HMO, PPO, EPO) | Tells you if referrals are needed and whether out-of-network is covered |
| Copays | Collect at the visit |
| Payer ID / claims address (back) | Where the claim goes |
| Provider services phone (back) | For eligibility and status calls |
| Prefix (BCBS cards) | Routes Blue claims to the home plan |
| “Administered by” wording | Signals a self-funded plan run by a TPA |

!!! tip "Medicare Advantage cards"
    A patient with a Medicare Advantage plan (such as a Humana or UnitedHealthcare Medicare plan) should show that card, not the red, white and blue Medicare card. Bill the Advantage plan. Billing Original Medicare by mistake leads to denials telling you the patient is enrolled in a Medicare Advantage plan.

## The registration errors that come back as denials

| Error at registration | How it shows up later |
|---|---|
| Name misspelled or nickname used | Rejection for subscriber not found, or CO-31 / CO-140 |
| Wrong date of birth | Eligibility failure, CO-31 |
| Patient entered as subscriber | Subscriber not found, CO-31 or CO-32 |
| Old insurance not updated | CO-27 (coverage terminated) or CO-26 (not yet effective) |
| Primary and secondary reversed | CO-22 (COB) or OA-23 issues |
| MSP questionnaire skipped | Medicare denial or later recoupment when another payer should have been primary |
| Accident question skipped | Payer pends or denies to investigate accident liability |
| Missing referral | CO-197 or CO-242 |

## Good registration habits

1. **Scan both sides of every card at every visit.** Insurance changes more often than patients remember to mention.
2. **Ask, don't assume.** “Do you have any other insurance?” at every visit.
3. **Verify demographics against the card and photo ID**, not against what was in the system last year.
4. **Run eligibility** (the next stage) before or at check-in.
5. **Collect the copay** and any known patient balance at check-in. Collecting later costs more and succeeds less often.

!!! example "Scenario"
    Priya, 19, is registered as the subscriber on her mother's Aetna plan because the front desk copied her name into every field. The claim rejects because no subscriber with Priya's name and date of birth exists. The AR analyst calls Aetna, confirms the subscriber is her mother, corrects the subscriber details and relationship code (child), and resubmits. The fix takes five minutes, but the claim sat unpaid for 40 days.

!!! mistake "Auditor's red flag"
    Registration that copies the patient's name into every subscriber field. Child patients registered as their own subscriber are behind a large share of “subscriber not found” rejections.

!!! interview "If an interviewer asks “Why is registration important in RCM?”"
    “Because the claim is built on registration data. If the patient's name, date of birth, member ID, subscriber or insurance order is wrong, the claim rejects or denies, even if the care and coding were perfect. Most eligibility and COB denials start at registration, so accurate registration is the cheapest way to prevent denials.”
