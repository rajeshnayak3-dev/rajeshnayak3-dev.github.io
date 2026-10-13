---
title: Medicaid, QMB, dual eligibles and spend-down
short: Medicaid, QMB and spend-down
description: How Medicaid works, managed Medicaid, payer of last resort, the Medicare Savings Programs (QMB, SLMB, QI, QDWI), dual-eligible billing and the Medicaid spend-down explained with examples.
order: 4
level: Intermediate
keywords: Medicaid QMB SLMB QI QDWI Medicare Savings Program dual eligible full dual partial dual spend down medically needy payer of last resort retroactive eligibility balance billing CHIP
quiz:
  - q: A QMB patient has Original Medicare. Medicare paid and applied $28 coinsurance. The state Medicaid pays $0 toward it. Can the provider bill the patient the $28?
    options:
      - Yes, coinsurance is patient responsibility
      - No, federal law prohibits billing QMB individuals for Medicare cost-sharing
      - Yes, after 90 days
      - Only if the patient agrees verbally
    answer: 1
    why: Providers may not bill QMB individuals for Medicare deductibles, coinsurance or copays, even when Medicaid pays less than the full amount.
  - q: A patient has Medicare and full Medicaid. Who is primary?
    options:
      - Medicaid
      - Medicare
      - Whichever has the higher payment
      - The patient chooses
    answer: 1
    why: Medicaid is the payer of last resort. Medicare pays first; Medicaid pays secondary for covered cost-sharing and services.
  - q: A medically needy patient has a $600 monthly spend-down. On 03/04 they incur $400 of bills; on 03/15, $500. What happens?
    options:
      - Medicaid pays all $900
      - The patient owes all $900
      - The patient owes $400 + $200 of the second bill; Medicaid covers the remaining $300 and later bills that month
      - Medicaid pays nothing in March
    answer: 2
    why: The spend-down is met once incurred expenses reach $600. The patient is responsible for the first $600 ($400 + $200), and Medicaid covers eligible expenses after that.
  - q: Medicaid eligibility can sometimes be made retroactive by how much before the application month?
    options:
      - Up to 3 months
      - Up to 2 years
      - Never
      - Up to 1 week
    answer: 0
    why: Federal rules allow up to three months of retroactive eligibility, although several states have waivers limiting it. Always check the state's rules.
---

## Medicaid basics

**Medicaid** is health coverage for people with limited income and resources. It's funded jointly by the federal government and each state, and **run by the states**, so eligibility, covered services, IDs, timely filing and billing rules differ from state to state. Many states have their own program names (for example Medi-Cal in California, MassHealth in Massachusetts, TennCare in Tennessee).

Who may qualify, depending on the state:

- Low-income adults (in states that expanded Medicaid under the ACA)
- Children (with CHIP covering more children)
- Pregnant women
- People aged 65 and older, blind or disabled, with low income and assets
- People in nursing homes who meet financial tests

## Payer of last resort

Medicaid pays **after** every other source: Medicare, commercial insurance, TRICARE, workers' compensation, auto and liability. If the patient has other coverage, bill it first. Medicaid will deny claims with other coverage on file until it sees the primary payment.

Providers who accept Medicaid must accept Medicaid's payment as **payment in full** for covered services. They generally can't bill the patient more, except for small state-defined copays.

## Fee-for-service versus managed Medicaid

- **Fee-for-service Medicaid:** claims go to the state Medicaid agency (or its fiscal agent).
- **Managed Medicaid:** most states enroll most members in **managed care organizations (MCOs)**, such as plans run by Centene, Molina, Elevance or UnitedHealthcare Community Plan. The MCO is the payer for most services, with its own network, authorization rules and timely filing.

Check the state portal for the member's **assigned plan on the date of service**. Billing the wrong one is a frequent denial.

## Retroactive eligibility

Medicaid can cover bills from up to **three months before** the month a person applies, if they'd have been eligible then (some states limit this through waivers). That's why hospitals screen self-pay patients for Medicaid: a claim that looked uncollectible can become payable. Timely filing for retro-eligible claims is usually counted from the eligibility determination date, under state rules.

## Dual eligibles

A **dual-eligible** person has both **Medicare and Medicaid**.

- **Medicare is primary.** Medicaid is secondary.
- **Full duals** get full Medicaid benefits plus help with Medicare costs.
- **Partial duals** get help only with Medicare premiums and/or cost-sharing through a **Medicare Savings Program**.
- Many duals are enrolled in **D-SNPs** (dual-eligible special needs plans), Medicare Advantage plans designed for them, sometimes integrated with the Medicaid plan.

## Medicare Savings Programs (MSPs)

State Medicaid programs help low-income Medicare beneficiaries pay Medicare costs.

| Program | Full name | What Medicaid pays |
|---|---|---|
| **QMB** | Qualified Medicare Beneficiary | Part A and Part B premiums, **plus Medicare deductibles, coinsurance and copays** |
| **SLMB** | Specified Low-Income Medicare Beneficiary | Part B premium only |
| **QI** | Qualifying Individual | Part B premium only (funding limited) |
| **QDWI** | Qualified Disabled and Working Individual | Part A premium only, for certain working people with disabilities |

Only **QMB** covers cost-sharing, which is why it matters most in RCM.

## QMB: the balance-billing rule

Federal law **prohibits** Medicare providers from billing QMB individuals for **any** Medicare cost-sharing (deductible, coinsurance, copay), for services under both Original Medicare and Medicare Advantage.

- This applies even if the state pays **less than** the full cost-sharing or nothing at all (many states pay only up to the Medicaid rate, which is often lower than Medicare's).
- It applies even if the provider doesn't accept Medicaid.
- The remaining amount is written off.

!!! example "QMB example"
    Medicare allowed $150 for a visit, paid $120, and assigned $30 coinsurance (PR-2). The patient is QMB. The state Medicaid rate for the visit is $110, which is less than Medicare's $120 payment, so Medicaid pays $0 toward the coinsurance.

    The provider **can't bill the patient $30**. It writes off the $30 according to the client's adjustment policy.

How to identify QMB status: the Medicare eligibility response (HETS) and MAC portals show QMB indicators, and Medicare ERAs include remark codes such as **N781–N784** telling you the patient is QMB and must not be billed. Train posting teams to look for them.

!!! warning "A common compliance failure"
    Automated patient statements that bill QMB patients for Medicare coinsurance are a regulatory violation. Billing systems should flag QMB status so statements are suppressed.

## Medicaid spend-down (medically needy programs)

Some states have **medically needy** programs for people whose income is **too high** for regular Medicaid but who have large medical bills. They qualify after they **spend down** their excess income on medical expenses.

**How it works:**

1. The state sets an income limit. The amount the person's income is above that limit, over a budget period (often one month or six months), is the **spend-down amount**.
2. The person incurs medical bills. Once the bills in the period add up to the spend-down amount, the spend-down is **met**.
3. Medicaid then covers eligible services for the **rest of the period**.
4. The person (or other insurance) is responsible for the bills used to meet the spend-down.

It works like a deductible that resets every budget period.

!!! example "Spend-down example"
    Monthly spend-down: $500.

    - 05/03: clinic visit, $200 charge → applied to spend-down. Patient owes $200. Running total $200.
    - 05/10: lab tests, $150 → applied. Patient owes $150. Running total $350.
    - 05/18: imaging, $400 → $150 applied to meet the spend-down (total $500); the remaining **$250 is covered by Medicaid**, along with eligible bills for the rest of May.
    - 06/01: the spend-down resets.

### RCM tips for spend-down

- The state portal shows the spend-down amount, budget period and whether it's met, and which claims were applied. Check it before billing.
- Claims submitted **before** the spend-down is met may deny as patient responsibility or ineligible; once the state applies the spend-down, claims after the met date can be paid.
- Bills used for the spend-down must be documented and given to the patient or caseworker; some states let the provider report them directly.
- Spend-down liability is assigned to specific claims, so order and dates matter.

## Medicaid timely filing and secondary claims

- Timely filing ranges widely by state and MCO (from 90 days to a year), with extra time allowed after a primary payer's EOB in many states.
- As secondary, Medicaid needs the **primary payer's adjudication** (ERA data or EOB). Missing primary information is a common denial (remark **MA04** or **N4**).
- Medicaid often pays up to its own allowed amount minus what the primary paid, which can be $0.

!!! interview "If an interviewer asks “What is QMB?”"
    “QMB is the Qualified Medicare Beneficiary program, a Medicare Savings Program run by state Medicaid. It pays the Medicare Part A and B premiums and the Medicare deductibles, coinsurance and copays for low-income beneficiaries. The key RCM rule is that providers can't bill QMB patients for Medicare cost-sharing, even if Medicaid pays less, so any unpaid cost-sharing is written off.”
