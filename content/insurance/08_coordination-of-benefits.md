---
title: Coordination of benefits and Medicare Secondary Payer
short: COB and MSP
description: How to decide which payer is primary, secondary and tertiary. The birthday rule, active versus retiree, divorced parents, Medicare Secondary Payer rules for employers, ESRD, accidents, and COB denials.
order: 8
level: Intermediate
keywords: coordination of benefits COB birthday rule primary secondary tertiary Medicare Secondary Payer MSP working aged 20 employees 100 employees ESRD 30 month coordination period CO-22 OA-23 MA04
quiz:
  - q: A child is covered by both parents' plans. Mom's birthday is 03/15/1985; Dad's is 01/20/1990. Whose plan is primary under the birthday rule?
    options:
      - Mom's, because she is older
      - Dad's, because his birthday (month and day) comes earlier in the year
      - Whichever plan is larger
      - The child's choice
    answer: 1
    why: The birthday rule uses only month and day. January 20 comes before March 15, so Dad's plan is primary. The year doesn't matter.
  - q: A 67-year-old still works for a company with 250 employees and has its group plan plus Medicare. Who is primary?
    options:
      - Medicare
      - The employer group health plan
      - Medicaid
      - They split equally
    answer: 1
    why: For working aged beneficiaries (65+), the employer plan is primary when the employer has 20 or more employees.
  - q: A person under 65 on Medicare due to disability has coverage through a spouse's employer with 50 employees. Who is primary?
    options:
      - The employer plan
      - Medicare, because the disability rule requires 100 or more employees for the employer plan to be primary
      - Neither
      - Medicaid
    answer: 1
    why: For disability-based Medicare, the group plan is primary only if the employer has 100 or more employees. With 50, Medicare is primary.
  - q: A secondary claim denies with remark MA04. What's missing?
    options:
      - The authorization
      - The primary payer's payment information
      - The NPI
      - The patient's signature
    answer: 1
    why: MA04 means the secondary payment can't be considered without the identity of or payment information from the primary payer.
---

## Why COB exists

When a patient has more than one plan, the plans **coordinate** so that together they never pay more than the total allowed charges. One plan is **primary** (pays first, as if it were the only plan), the next is **secondary** (pays some or all of what's left), and occasionally a third is **tertiary**.

Billing in the wrong order is one of the most common causes of denials and later recoupments.

## General COB rules (commercial plans)

Most commercial plans follow rules modelled on the NAIC (National Association of Insurance Commissioners) guidelines. Apply them **in order**; stop at the first rule that decides.

1. **A plan with no COB provision** is primary over one that has it.
2. **Subscriber before dependent.** The plan covering the person as an **employee/subscriber** pays before the plan covering them as a **dependent**.
3. **Dependent children of parents who are married or living together: the birthday rule.** The plan of the parent whose **birthday (month and day) comes first in the calendar year** is primary. The year of birth is ignored. If both have the same birthday, the plan that has covered the parent longer is primary.
4. **Dependent children of divorced or separated parents:**
    - If a **court decree** makes one parent responsible for health coverage, that parent's plan is primary.
    - Otherwise: the **custodial parent's** plan, then the **custodial parent's spouse's** plan, then the **non-custodial parent's** plan, then the non-custodial parent's spouse's plan.
5. **Active employee before retiree or laid-off employee.** A plan covering the person as an active employee pays before one covering them as a retiree (and the same applies to dependents).
6. **Active employee before COBRA.** Coverage as an active employee (or their dependent) pays before COBRA continuation coverage.
7. **Longer coverage first.** If none of the above decides, the plan that has covered the person longer is primary.

!!! tip "Same person, two jobs"
    If an adult is a subscriber on two employer plans (two jobs), the longer-held plan is generally primary.

## Government programs in the order

| Combination | Primary | Secondary |
|---|---|---|
| Medicare + Medicaid | Medicare | Medicaid (always last) |
| Commercial + Medicaid | Commercial | Medicaid |
| Medicare + Medigap | Medicare | Medigap (crossover) |
| Medicare + retiree plan | Medicare | Retiree plan |
| Medicare + COBRA | Usually Medicare | COBRA (ESRD exception below) |
| Commercial (OHI) + TRICARE | Commercial | TRICARE |
| Medicare + TRICARE For Life | Medicare | TFL |
| Any health plan + workers' comp (work injury) | Workers' comp | Health plan only if WC denies |
| Any health plan + auto PIP (car accident) | PIP up to its limit (depending on state) | Health plan |

## Medicare Secondary Payer (MSP)

**MSP** rules decide when another payer must pay **before Medicare**. Providers must collect MSP information (usually through the **MSP questionnaire**) and bill correctly. Billing Medicare first when another payer is primary leads to denials, or worse, Medicare paying and later **recovering** the money.

### Medicare is secondary when the patient has:

| Situation | Rule |
|---|---|
| **Working aged:** 65+ with group health coverage through **their own or their spouse's current employment** | Group plan is primary if the employer has **20 or more employees** |
| **Disability:** under 65, on Medicare due to disability, with large group health coverage through their own or a family member's current employment | Group plan is primary if the employer has **100 or more employees** |
| **ESRD:** on Medicare due to end-stage renal disease, with any group health plan | Group plan is primary during a **30-month coordination period**; after that, Medicare is primary |
| **Workers' compensation** | WC is primary for work-related injuries and illness |
| **No-fault (auto) insurance** | No-fault is primary for accident-related care |
| **Liability insurance** | Liability is primary for the injury; Medicare may make a **conditional payment** and recover it later |
| **Black lung program** | Federal Black Lung Program is primary for related lung conditions |
| **Veterans Affairs** | Medicare and VA don't coordinate; VA pays for VA-authorized care, Medicare for Medicare-covered care elsewhere |

### Medicare is primary when:

- The patient is 65+ with coverage from an employer with **fewer than 20** employees,
- The patient is disabled with coverage from an employer with **fewer than 100** employees,
- The coverage is **retiree** coverage (not current employment),
- The coverage is **COBRA** (except during the ESRD coordination period), or
- The secondary coverage is **Medigap, Medicaid or TRICARE For Life**.

!!! warning "Employer size is the employer's, not the patient's location"
    The 20 and 100 employee thresholds count the employer's employees (for the 20-employee rule, on each working day in 20 or more weeks in the current or prior year). Patients rarely know this. Payers and Medicare's **Benefits Coordination & Recovery Center (BCRC)** hold the official MSP record, which is what the eligibility response shows.

### When Medicare's MSP record is wrong

If Medicare shows another payer as primary but the patient's other coverage has ended (or vice versa), Medicare will keep denying. The **patient or the other insurer** usually needs to update the record with the **BCRC**. Providers can help by giving the patient the BCRC phone number and documenting the call.

## Billing secondary claims

1. Post the primary payment.
2. Send the secondary claim with the **primary's adjudication**: paid amounts and every adjustment with group and reason codes, at line level (837 loops 2320/2430), or the primary EOB on paper.
3. The secondary pays based on its own rules, typically up to its allowed amount, minus what the primary paid, often limited to the patient's remaining responsibility.
4. On the secondary's ERA, **OA-23** shows the impact of the prior payer's adjudication.

## COB denials and what they mean

| Code | Meaning | Usual fix |
|---|---|---|
| **CO-22** | This care may be covered by another payer per COB | Confirm order of benefits; bill the primary; or have the patient update COB with the payer |
| **MA04** (remark) | Secondary payment can't be considered without primary payer information | Send primary EOB/ERA data |
| **N4 / N479** (remarks) | Missing or invalid prior payer EOB | Attach or send the primary's adjudication |
| **CO-109** | Not covered by this payer; send to the correct payer | Bill the correct payer |
| **PR-227** or member questionnaire hold | Payer waiting for member COB update | Contact the patient |
| **OA-23** | Impact of prior payer adjudication | Not a denial; it's how secondary payment is explained |

!!! example "Scenario"
    Ruth, 68, works full-time for a school district with 1,200 employees and has Medicare Part A and B. The clinic billed Medicare first; Medicare denied, showing an MSP record for her employer plan. The analyst billed the employer plan as primary, posted its payment, then sent the remaining balance to Medicare as secondary with the primary's adjudication. Medicare paid as secondary payer.

!!! interview "If an interviewer asks “What is the birthday rule?”"
    “The birthday rule decides which parent's plan is primary for a dependent child covered by both parents' plans when the parents are married or living together. The plan of the parent whose birthday, month and day only, comes first in the calendar year is primary. If both share a birthday, the plan that has covered that parent longer is primary. For divorced parents, a court order or custody rules apply instead.”
