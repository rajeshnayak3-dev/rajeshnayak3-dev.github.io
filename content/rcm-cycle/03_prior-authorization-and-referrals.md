---
title: Prior authorization and referrals
short: Authorization and referrals
description: The difference between a referral, a prior authorization and a pre-determination, what to track on an approval, and how to handle retro-authorizations and denials.
order: 3
level: Beginner
keywords: prior authorization precertification referral pre determination retro authorization 278 auth number units dates CO-197 CO-198
quiz:
  - q: An HMO requires the primary care doctor to send the patient to a specialist. What is this called?
    options:
      - Prior authorization
      - Referral
      - Pre-determination
      - Coordination of benefits
    answer: 1
    why: A referral is the PCP's approval for a specialist visit, typical of HMO and POS plans. Prior authorization is the payer's approval of a specific service.
  - q: An MRI was approved for one unit from 03/01 to 03/31. It was performed on 04/05. What will likely happen?
    options:
      - It pays normally
      - It denies because the service fell outside the authorized dates
      - It pays at 50%
      - The patient is billed automatically
    answer: 1
    why: Authorizations are valid only for the approved dates, units, codes and provider. A service outside the window is treated as unauthorized (CO-197, or CO-198 if limits were exceeded).
  - q: What is a pre-determination?
    options:
      - A guarantee of payment
      - A voluntary review where the payer says in advance whether it would cover a service
      - A type of referral
      - A Medicare-only form
    answer: 1
    why: A pre-determination (or pre-treatment estimate) is an optional advance review. It isn't a guarantee of payment.
  - q: Which EDI transaction is used for electronic authorization requests?
    options:
      - 270
      - 278
      - 835
      - 837
    answer: 1
    why: The 278 is the health care services review request and response, used for prior authorizations and referrals.
---

## Three kinds of approval

| | Referral | Prior authorization | Pre-determination |
|---|---|---|---|
| Who approves | Usually the patient's primary care provider (PCP) | The payer, or its utilization management vendor | The payer |
| What it approves | Seeing a specialist | A specific service, drug, admission or piece of equipment | Nothing; it's an advance opinion |
| Required? | Yes, for HMO and POS plans | Yes, when the plan lists the service | No, optional |
| If missing | Denial for no referral (for example CO-197 or CO-242) | Denial for no authorization (CO-197) | No denial for skipping it |
| Guarantees payment? | No | No, coverage and eligibility still apply | No |

You'll also hear **precertification**, **pre-auth**, **prior approval** and **notification**. Payers use different words, but they all mean asking permission (or at least telling the payer) before the service.

## What usually needs authorization

Payers publish lists, which differ by plan. Commonly included:

- Advanced imaging: MRI, CT, PET, nuclear cardiology
- Elective inpatient admissions and many outpatient surgeries
- Specialty and infusion drugs (often J-codes)
- Durable medical equipment over a cost threshold
- Physical, occupational and speech therapy beyond a set number of visits
- Behavioral health, especially intensive programs
- Genetic testing
- Sleep studies, and some cardiology and pain procedures
- Home health, skilled nursing and inpatient rehab

**Emergency services don't require prior authorization**, but many plans require **notification of an inpatient admission** within a short window, often 24–48 hours or the next business day.

Original Medicare traditionally requires little prior authorization, though CMS requires it for some hospital outpatient services, certain DME and a few other programs. Medicare Advantage plans require it far more often.

## The authorization workflow

1. **Identify the need** at scheduling: check the payer's list for the CPT code, diagnosis and place of service.
2. **Gather clinical information:** office notes, test results, failed conservative treatment, and the ordering provider's details.
3. **Submit the request** through the payer portal, by fax, by phone or by 278 transaction. Many payers delegate to vendors such as Evolent, Carelon or EviCore for imaging and specialty services.
4. **Track the decision.** Urgent requests are decided faster than standard ones.
5. **Record the approval** in the billing system so it prints on the claim (CMS-1500 box 23 or UB-04 FL 63).
6. **Handle a denial** with a peer-to-peer review (the ordering doctor speaks to the payer's medical reviewer) or an appeal.

## What to record on an approval

- Authorization number
- Approved CPT/HCPCS codes (and sometimes the diagnosis)
- Number of units or visits
- Start and end dates
- Approved provider and facility (rendering, servicing and place of service)
- Inpatient: approved number of days and level of care

!!! warning "The four mismatches that cause denials even with an auth on file"
    1. **Code mismatch:** approved for 72148 (MRI lumbar without contrast) but 72158 (without and with contrast) was performed.
    2. **Date mismatch:** service done after the authorization expired.
    3. **Units exceeded:** 12 therapy visits approved, 14 billed (CO-198).
    4. **Provider or site mismatch:** approved for the hospital outpatient department, performed at a freestanding imaging centre.

    When the procedure changes during the visit, the provider's office must ask the payer to update the authorization, ideally within the payer's allowed window.

## Retro-authorizations

A **retro-authorization** is an approval requested **after** the service. Payers allow it only in limited cases, such as:

- the patient's insurance wasn't known at the time (for example, they gave it after an emergency),
- an urgent situation made it impossible to get approval first, or
- the payer's own policy allows it within a stated number of days.

Many payers deny retro requests outright. If the provider failed to get a required authorization and the contract says the patient can't be billed, the balance may have to be written off.

## Referrals in practice

- HMO and POS plans usually require an **electronic referral** from the PCP, listing the specialist and number of visits.
- The specialist's office should confirm the referral is on file **before** the visit.
- Referrals have expiry dates and visit counts, just like authorizations.
- Some plans need the **referring provider's NPI** on the claim (CMS-1500 box 17 and 17b).

!!! example "Scenario"
    A patient on an Aetna HMO sees a dermatologist with no referral on file. The claim denies for no referral. The AR analyst calls the PCP's office, which says it forgot to send it. Some plans let the PCP issue a retro-referral within a set period; if this plan doesn't, and the patient signed a waiver that they'd pay if no referral was obtained, the balance may move to the patient. Otherwise it's a provider write-off and a training point for the front desk.

!!! interview "If an interviewer asks “What is the difference between a referral and an authorization?”"
    “A referral is the primary care provider's approval for the patient to see a specialist, mainly required by HMO and POS plans. A prior authorization is the payer's approval for a specific service, drug or admission, based on medical necessity. Either can be required, and both have limits on dates, units and providers, so the claim must match what was approved.”
