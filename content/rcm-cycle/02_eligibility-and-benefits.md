---
title: Eligibility and benefits verification
short: Eligibility and benefits
description: How to confirm a patient's coverage and benefits before the visit, what to record, the 270/271 transaction, and the questions to ask a payer.
order: 2
reviewed: 2026-10-14
level: Beginner
keywords: eligibility verification benefits verification EV BV 270 271 deductible coinsurance copay out of pocket active coverage
quiz:
  - q: Which EDI transaction pair is used to check eligibility electronically?
    options:
      - 837 and 835
      - 270 and 271
      - 276 and 277
      - 278 and 999
    answer: 1
    why: The 270 is the eligibility inquiry and the 271 is the payer's response. The 837 is the claim, the 835 is the remittance, and 276/277 is claim status.
  - q: The patient's deductible is $1,500 and $1,200 has been met. The plan pays 80% after deductible. For a $500 allowed service, what does the patient owe? (Assume in-network, no copay, and the out-of-pocket maximum isn't reached.)
    options:
      - $300 plus 20% of $200 = $340
      - $100
      - $500
      - $400
    answer: 0
    why: The patient first pays the remaining $300 of the deductible. The plan then covers 80% of the remaining $200, so the patient pays 20% of $200, which is $40. Total $340.
  - q: Eligibility is active, but the service is excluded from the plan. Which denial would you expect if you billed anyway?
    options:
      - CO-27
      - CO-204 or CO-96
      - PR-1
      - CO-45
    answer: 1
    why: Active coverage doesn't mean every service is covered. Excluded services deny as not covered under the benefit plan (CO-204) or non-covered (CO-96).
  - q: Why should eligibility be checked again on the day of service?
    options:
      - It isn't necessary once checked
      - Coverage can end or change between scheduling and the visit
      - Payers require it for every claim
      - To get a new member ID
    answer: 1
    why: Patients lose jobs, change plans and age out of coverage. A check close to the date of service catches changes.
---

## Eligibility versus benefits

These two words are often said together, but they answer different questions.

- **Eligibility:** *Is the patient covered by this payer on the date of service?*
- **Benefits:** *What does the plan pay for this service, and what will the patient owe?*

A patient can be eligible and still have no benefit for a particular service, such as a cosmetic procedure or, under many plans, routine hearing aids.

## How eligibility is checked

1. **Electronic (270/271).** The practice management system or clearinghouse sends a **270** inquiry and receives a **271** response, often in seconds. Most practices run this automatically a few days before appointments.
2. **Payer portals.** Availity, UHC Provider Portal, Aetna and other payer websites show coverage, benefits and accumulators (how much deductible is met).
3. **Phone calls (IVR or a representative).** Needed when portal data is unclear, for specialty benefits, or for payers with weak online tools.
4. **Medicare.** Checked through the MAC portal or HETS (HIPAA Eligibility Transaction System) using the patient's **MBI**. The response shows Part A and B entitlement, Medicare Advantage enrolment, MSP records, hospice and home health episodes.
5. **Medicaid.** Checked on the state's Medicaid portal, which also shows the managed care plan the member belongs to and any spend-down.

## What to record

A complete verification note includes:

| Item | Example |
|---|---|
| Date verified, method, reference | 10/02, Availity, ref #A12345 |
| Coverage status and dates | Active since 01/01, no termination date |
| Plan type and network | PPO, provider in-network |
| Deductible (individual and family) and amount met | $1,500 / $1,200 met |
| Coinsurance and copay | 20% after deductible; specialist copay $40 |
| Out-of-pocket maximum and amount met | $5,000 / $1,900 met |
| Service-specific benefits | Physical therapy: 20 visits a year, 6 used |
| Authorization or referral requirements | MRI needs prior authorization |
| Other insurance / COB | None on file |
| Claims address or payer ID | Payer ID 60054 |

!!! tip "Accumulators change daily"
    The deductible met amount only reflects claims the payer has already processed. If the patient saw another doctor last week, that claim may not be processed yet, so the patient may owe less than the portal shows. Record the date you checked.

## Benefits math you must be able to do

There's no single order that every plan follows. How a claim's cost is split depends on the **plan design**, the **service category** (office visit, imaging, surgery, emergency), **network status**, how much of the **accumulators** (deductible and out-of-pocket) is met, and the payer's own processing rules. A common pattern looks like this:

1. **Copay** for services that have one. Some plans apply the deductible first even for copay services; many don't.
2. **Deductible** until it's met, for services the deductible applies to (many plans exempt preventive care and some copay services).
3. **Coinsurance** on the remaining allowed amount.
4. **Out-of-pocket maximum** stops in-network cost-sharing for covered services once it's reached. It usually doesn't cap premiums, non-covered services, out-of-network balance bills, or amounts above the allowed amount.

!!! example "Worked example (illustrative, one common plan design)"
    In-network, covered service. Allowed amount $800. Deductible $1,000 with $600 met. Coinsurance 20% after deductible. No copay for this service. Out-of-pocket max not reached.

    - Remaining deductible: $1,000 − $600 = **$400** (patient)
    - Remaining allowed: $800 − $400 = $400
    - Coinsurance: 20% × $400 = **$80** (patient)
    - Plan pays: $400 − $80 = **$320**
    - Patient total: $400 + $80 = **$480**

    Change any assumption (out-of-network, a copay that applies, a deductible that's waived for this service, an out-of-pocket max that's nearly met) and the answer changes. The **ERA** shows how the payer actually applied benefits, and it's the ERA that you post from.

!!! warning "Eligibility is not a guarantee of payment"
    An active eligibility response and a benefits quote tell you what the plan expects **if** the claim is otherwise payable. The claim can still deny for authorization, medical necessity, coding, coordination of benefits, a benefit limit, or a coverage change the payer learns about later (retroactive termination). Payers say this themselves in the disclaimers on 271 responses and portal printouts. Record what you were told, by whom, and the reference number, so you can dispute an inconsistent denial.

### What to verify for this specific service

- The **exact service** (CPT/HCPCS) and place of service, not just "office visit" or "radiology"
- **Provider and facility network status** for this plan (in-network for one product doesn't mean in-network for all)
- **Authorization and referral** rules for this service and this plan
- **Effective and termination dates**, and any pending changes
- **Benefit limits** (visits per year, frequency) and how many are used
- **Accumulators**: deductible and out-of-pocket met, individual and family, and the date they were current
- **Exclusions** that apply to this service or diagnosis
- **Other coverage** and order of benefits

## Questions to ask on an eligibility call

1. Is the coverage active for the date of service, and what are the effective and termination dates?
2. Is this plan primary? Is there other insurance on file?
3. Is the provider in-network for this plan?
4. What are the deductible, coinsurance, copay and out-of-pocket amounts, and how much is met?
5. Is this service (give the CPT code and place of service) covered? Are there limits on visits or frequency?
6. Does it need prior authorization or a referral?
7. What's the timely filing limit and the claims mailing address or payer ID?
8. Can I have a call reference number?

## Common eligibility outcomes and what to do

| What you find | What to do |
|---|---|
| Coverage active, no issues | Record benefits, estimate patient share, collect copay |
| Coverage terminated | Ask the patient for new insurance; if none, treat as self-pay and give an estimate |
| Patient not found | Recheck name, DOB, member ID and subscriber; ask for the card again |
| Other insurance on file | Confirm order of benefits with the patient and payers before billing |
| Enrolled in Medicare Advantage or Medicaid managed care | Bill the managed plan, not Original Medicare or fee-for-service Medicaid |
| Hospice election on file (Medicare) | Services related to the terminal illness go to the hospice; unrelated services need the right modifier |
| Service needs authorization | Hand off to the authorization team before the visit |

## Denials caused by skipped or poor verification

- **CO-26 / CO-27:** expenses before coverage started or after it ended
- **CO-31:** patient can't be identified as insured
- **CO-22 / CO-109:** another payer is responsible, or wrong payer billed
- **CO-197:** authorization missing
- **CO-204 / CO-96:** service not covered under the plan
- **CO-119:** benefit maximum reached

!!! mistake "Auditor's red flag"
    Eligibility checked weeks before the visit and never re-checked. A verification older than the plan's coverage change (often January 1 or the first of the month) proves nothing on the date of service.

!!! interview "If an interviewer asks “What do you check in benefits verification?”"
    “Coverage status and dates, plan type and network status, deductible, coinsurance, copay and out-of-pocket amounts and how much is met, whether the specific service is covered and any visit or frequency limits, authorization or referral needs, other insurance and order of benefits, and the claims address and timely filing limit. I always note the date and reference number.”
