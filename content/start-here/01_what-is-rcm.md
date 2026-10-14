---
title: What is revenue cycle management (RCM)?
short: What is RCM?
description: The plain-language definition of RCM, why US healthcare needs it, and how one doctor's visit turns into money in the bank.
order: 1
reviewed: 2026-10-14
level: Beginner
keywords: revenue cycle management definition medical billing meaning RCM full form
takeaways:
  - "RCM is everything that turns a patient visit into payment, from scheduling to the last dollar collected."
  - "Work splits into front end (before the visit), mid-cycle (care becomes a claim) and back end (the claim becomes cash)."
  - "A clean claim is complete and correct, but clean doesn't guarantee it gets paid."
  - "Most denials start in the front end and are discovered in the back end."
quiz:
  - q: Which statement best describes revenue cycle management?
    options:
      - Sending invoices to patients after a hospital stay
      - Every administrative and clinical step that turns a patient visit into collected, correct payment
      - Coding diagnoses with ICD-10-CM
      - Negotiating contracts with insurance companies
    answer: 1
    why: Billing, coding and contracting are all parts of RCM, but RCM is the whole chain, from scheduling and eligibility through payment and patient collections.
  - q: Why does a US provider usually receive less than the amount billed?
    options:
      - The payer always pays 50%
      - The claim was denied
      - The payer pays its allowed amount, and the difference is written off under the contract
      - The patient refused to pay
    answer: 2
    why: Providers bill their standard charge. In-network payers pay the contracted allowed amount, and the gap is a contractual adjustment (usually CO-45). It isn't a denial.
  - q: A claim has no errors or missing information and the payer can process it without asking for anything more. What is it called?
    options:
      - A clean claim
      - A paid claim
      - A corrected claim
      - An appeal
    answer: 0
    why: A clean claim is complete and correct, so nothing stops the payer from processing it. Being clean doesn't guarantee payment; the payer can still deny it for coverage, medical necessity or benefit reasons. A "paid claim" describes the outcome, not the claim's quality.
  - q: Which of these is a back-end RCM activity?
    options:
      - Insurance eligibility verification
      - Patient registration
      - Denial management and AR follow-up
      - Appointment scheduling
    answer: 2
    why: Scheduling, registration and eligibility happen before or at the visit (front end). Denials and AR follow-up happen after the claim is adjudicated (back end).
---

## The one-sentence definition

**Revenue cycle management (RCM)** is the set of steps a healthcare provider follows to get paid correctly for the care it gives, from the moment a patient books an appointment until the last dollar is collected or written off.

It's called a *cycle* because it repeats for every visit, and because problems found at the end (a denial, say) are fed back to the beginning so they don't happen again.

## Why the US needs a whole industry for this

In many countries the patient pays at the counter, or one government body pays for everything. In the United States, a single visit can involve:

- **Many payers.** Medicare, Medicaid, hundreds of commercial insurance companies, military plans, workers' compensation and auto insurers, each with different rules.
- **Shared payment.** The insurance plan pays part of the bill and the patient pays the rest through deductibles, copays and coinsurance.
- **Strict coding.** Every diagnosis and procedure has to be translated into standard codes (ICD-10-CM, CPT, HCPCS) before a payer will pay.
- **Contracts.** The amount a provider is paid depends on its contract with each payer, not on what it charges.

Because of this, a medium-sized physician group can easily have thousands of open claims at a time. RCM teams, many of them in India and the Philippines, keep those claims moving.

## How one visit becomes money

Follow a fictional patient, Maya, through a routine visit to a family doctor.

```flow
type: steps
title: How Maya's visit turns into payment
numbered: true
steps:
  - t: Scheduling and eligibility
    d: Book the visit, confirm the plan is active
    c: blue
  - t: Visit and coding
    d: Doctor documents; coder assigns codes
    c: green
  - t: Claim submission
    d: Charges entered, claim sent to the payer
    c: green
  - t: Adjudication
    d: The payer decides what to pay
    c: yellow
  - t: Posting and follow-up
    d: Payment posted; unpaid claims worked
    c: purple
  - t: Patient billing
    d: Maya gets a statement for her share
    c: purple
note: Each box is a full stage in the RCM cycle, and each one can break. The table below adds who does the work.
```

| Step | What happens | Who does it |
|---|---|---|
| Scheduling | Maya books an appointment and gives her insurance details | Front desk or call center |
| Eligibility | Staff confirm her plan is active and check her copay and deductible | Eligibility team |
| Visit | The doctor examines Maya and documents the visit | Provider |
| Coding | The visit is translated into a diagnosis code and a procedure code | Medical coder |
| Charge entry | The codes and charges are entered into the billing system | Charge entry team |
| Claim submission | A claim is sent electronically through a clearinghouse | Billing team |
| Adjudication | The payer decides what to pay | Payer |
| Payment posting | The payment and adjustments from the ERA are posted to Maya's account | Payment posting team |
| Follow-up | Any unpaid or denied claim is investigated and fixed | AR and denial team |
| Patient billing | Maya receives a statement for her share | Patient billing team |

Each row is a full stage in [the RCM cycle](/rcm-cycle/), and each one can break.

## Front end, mid-cycle and back end

RCM work is usually divided into three blocks. Interviewers love this split.

```flow
type: steps
title: Front end, mid-cycle, back end
steps:
  - t: Front end
    d: Scheduling, registration, eligibility, authorization, upfront collections
    c: blue
    a: care is given
  - t: Mid-cycle
    d: Documentation, coding, charge entry, claim scrubbing
    c: green
    a: claim leaves
  - t: Back end
    d: Submission, posting, denials, AR follow-up, appeals, patient collections
    c: purple
```

- **Front end (before and at the visit):** scheduling, registration, eligibility and benefits verification, prior authorization, and upfront patient collections.
- **Mid-cycle (turning care into a claim):** clinical documentation, medical coding, charge capture and charge entry, and claim scrubbing.
- **Back end (after the claim leaves):** claim submission and rejections, payment posting, denial management, AR follow-up, appeals, credit balances and patient collections.

!!! tip "Why this matters"
    Most denials are caused in the front end but discovered in the back end. An AR analyst who fixes an eligibility denial is cleaning up a mistake made weeks earlier at registration. Good RCM teams report those root causes back to the front desk.

## The money words you need on day one

**Billed amount (charge).** What the provider charges for the service, from its own fee schedule. Every payer sees the same charge.

**Allowed amount.** The maximum the payer recognizes for that service under the provider's contract or the payer's fee schedule.

**Contractual adjustment.** Billed minus allowed. The provider agreed to write this off by signing the contract. It isn't lost money in the usual sense; it was never collectible.

**Patient responsibility.** The part of the allowed amount the patient owes: deductible, coinsurance or copay.

**Paid amount.** What the payer actually sends.

!!! example "Worked example"
    Billed $200. The payer's allowed amount is $120. The patient has met the deductible and owes 20% coinsurance.

    - Contractual adjustment: $200 − $120 = **$80** (CO-45)
    - Patient coinsurance: 20% × $120 = **$24** (PR-2)
    - Payer pays: $120 − $24 = **$96**

    Check: $96 + $24 + $80 = $200. Every dollar of the charge is accounted for. That balancing check is the heart of payment posting.

## How RCM success is measured

RCM leaders track a small set of numbers. You'll see these on every team dashboard.

| Metric | What it tells you | A healthy target (typical) |
|---|---|---|
| Clean claim rate | Share of claims that pass edits and are accepted with no errors on first submission | 95% or higher |
| First-pass resolution rate | Share of claims fully resolved (paid or correctly closed) on the first submission, with no rework | 90% or higher |
| Denial rate | Share of adjudicated claims (or dollars) denied | Below 5–10% |
| Days in AR | How many days of charges are still unpaid | Below 35–45 days |
| AR over 90 days | Share of AR older than 90 days | Below 15–20% |
| Net collection rate | Collected ÷ (charges − contractual adjustments) | 95% or higher |

A clean claim isn't the same as a paid claim. A claim can be complete, accepted and processed, and still be denied or pay $0 because of coverage, medical necessity or benefits (for example, the whole amount goes to the deductible). That's why clean claim rate and first-pass resolution rate are tracked separately.

Targets vary by specialty and payer mix, and organizations define these metrics differently, so treat them as rough benchmarks and always check the definition behind a number. You'll learn each one in detail in [reporting and KPIs](/rcm-cycle/reporting-and-kpis/).

## What RCM is not

- **It isn't only billing.** Billing (creating and sending claims) is one part of RCM.
- **It isn't only coding.** Coders turn documentation into codes; RCM is everything around that.
- **It isn't the hospital's accounting department.** Accounting records revenue. RCM produces and protects it.

!!! interview "If an interviewer asks “What is RCM?”"
    “Revenue cycle management is the end-to-end process a provider uses to get paid correctly for patient care. It starts at scheduling and eligibility on the front end, moves through coding, charge entry and claim submission, and ends with payment posting, denial management, AR follow-up and patient collections on the back end. The goal is to get the maximum legitimate reimbursement in the shortest time, with the fewest denials.”
