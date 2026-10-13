---
title: How payers adjudicate claims
short: Payer adjudication
description: What happens inside the payer after a claim is accepted, the order of checks, how the allowed amount and patient share are calculated, and what pended claims mean.
order: 8
level: Intermediate
keywords: claim adjudication auto adjudication pended claim medical review allowed amount processing time prompt pay laws
quiz:
  - q: Which check usually happens first in adjudication?
    options:
      - Medical necessity review
      - Eligibility and member match
      - Calculating coinsurance
      - Issuing payment
    answer: 1
    why: Payers first confirm the member and coverage. There's no point reviewing medical necessity for someone who isn't covered.
  - q: A claim is “pended”. What does that mean?
    options:
      - It was paid
      - It's on hold awaiting information or manual review
      - It was denied permanently
      - It was rejected by the clearinghouse
    answer: 1
    why: A pended claim is in the payer's system but waiting, often for medical records, COB information from the patient, or a review.
  - q: Clean electronic Medicare claims are generally paid no earlier than how many days after receipt?
    options:
      - 1 day
      - 14 days
      - 60 days
      - 90 days
    answer: 1
    why: Medicare's payment floor means clean electronic claims aren't paid before day 14 (day 29 for paper). Most pay within about 30 days.
---

## Adjudication in one line

**Adjudication** is the payer deciding whether to pay a claim, how much, and who owes the rest. Most claims are adjudicated automatically by software (**auto-adjudication**) in minutes; some are routed to human examiners or clinical reviewers.

## The usual order of checks

1. **Front-end edits.** Already passed at acceptance (format, required data).
2. **Member and eligibility.** Is this person a member, covered on the date of service, under this plan?
3. **Provider status.** Is the provider enrolled, credentialed and in-network, with a valid NPI and tax ID?
4. **Duplicate check.** Has this exact service already been processed? (CO-18 if so.)
5. **Coordination of benefits.** Is this payer primary? Does it need another payer's information first? (CO-22, MA04)
6. **Benefits and coverage.** Is the service a covered benefit? Any limits or exclusions? (CO-96, CO-204, CO-119)
7. **Authorization and referral.** Was approval required and obtained? Does it match? (CO-197, CO-198)
8. **Coding edits.** NCCI, MUEs, modifier logic, age and sex edits, payer-specific edits. (CO-97, CO-4, CO-151)
9. **Medical necessity.** Do the diagnoses support the service under the payer's policy? (CO-50, CO-167)
10. **Timely filing.** Received within the limit? (CO-29)
11. **Pricing.** Apply the fee schedule or contract to get the **allowed amount**.
12. **Patient cost-sharing.** Apply deductible, copay and coinsurance.
13. **Payment.** Issue payment and the remittance (835 ERA to the provider; EOB to the member).

Not every payer follows exactly this order, but this mental model helps you read any ERA: the denial reason tells you which check failed.

## Pricing: how the allowed amount is set

| Contract method | How allowed is calculated |
|---|---|
| Fee schedule | Allowed = the lesser of the billed charge or the fee schedule amount for that code |
| Percentage of Medicare | Allowed = an agreed percentage of the Medicare rate |
| Percentage of charges | Allowed = an agreed percentage of billed charges (common for some hospital contracts) |
| DRG | One amount for the inpatient stay |
| Per diem | A fixed amount per inpatient day |
| Case rate | A fixed amount for a defined case (for example, a delivery) |
| Capitation | Paid separately per member per month; claim lines allowed at $0 |

Payers also apply **multiple procedure reductions**. For example, when several surgical procedures are done in one session, Medicare pays 100% of the highest-valued procedure and 50% of the others (modifier 51 situations), and similar reductions apply to imaging and therapy.

Medicare also reduces payments by **2% for sequestration**, shown as **CO-253**.

## Pended claims

A claim may **pend** (sit on hold) for:

- **Medical records requests** (additional documentation request, or ADR, for Medicare)
- **COB questionnaire**: the payer asks the member whether they have other insurance
- **Accident questionnaire**: the payer asks whether an injury involved a third party
- **Pricing review** by a network or repricer
- **Clinical review** for high-dollar or unusual claims
- **Itemized bill request** for large hospital claims

The AR team finds pended claims through status checks. The fix is usually to send what's missing quickly, or ask the patient to update their information with the payer.

!!! warning "Patient-side holds"
    If a payer is waiting on the **member** (for a COB or accident questionnaire), the provider can't fix it alone. Call or message the patient, explain what the payer needs and how to respond, and follow up. Unanswered questionnaires lead to denials like CO-22 or PR-227.

## Processing time and prompt pay

- **Medicare:** clean electronic claims are paid no earlier than day 14 and generally within 30 days of receipt (paper: no earlier than day 29).
- **Commercial plans:** most US states have **prompt pay laws** requiring clean claims to be paid within a set time, often 30–45 days, with interest owed if late.
- **Medicaid and Medicare Advantage:** contract and regulation based, often 30 days for clean claims.

When a clean claim passes the prompt pay window, AR analysts may request interest or escalate.

## Outcomes of adjudication

| Outcome | What the ERA shows | Next step |
|---|---|---|
| Paid in full (at allowed) | Payment, CO-45, PR amounts | Post and bill the patient or secondary |
| Partially paid | Some lines paid, some denied | Post paid lines, work denied lines |
| Denied | $0 with CARC and RARC | Work the denial |
| Paid at zero, applied to deductible | PR-1 for the full allowed | Bill the patient; not a denial |
| Pended | Not on ERA yet | Check status, send what's needed |
| Adjusted (later) | Reversal and reprocessing | Reconcile the old and new payments |

!!! tip "PR-1 is not a denial"
    A $0 payment where the entire allowed amount went to the deductible is a **correct payment**. The claim is resolved; the balance moves to the patient. Freshers often mistake it for a denial.

!!! interview "If an interviewer asks “What is adjudication?”"
    “Adjudication is the payer's process of evaluating a claim: verifying eligibility and the provider, checking for duplicates and other insurance, applying benefits, authorization and coding rules, checking medical necessity and timely filing, then pricing the claim, applying patient cost-sharing and issuing payment with an ERA. The CARC and RARC codes on the ERA tell us which check failed.”
