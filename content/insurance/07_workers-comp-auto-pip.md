---
title: Workers' compensation, auto, PIP and liability claims
short: WC, auto and PIP
description: How injury claims are billed when an employer, auto insurer or another party is responsible. Workers' comp, PIP, MedPay, no-fault states, liability, letters of protection and subrogation.
order: 7
level: Intermediate
keywords: workers compensation WC adjuster claim number date of injury auto insurance PIP personal injury protection MedPay no-fault liability letter of protection subrogation CO-19 CO-20 CO-21
quiz:
  - q: A patient hurt his back lifting boxes at work. Who should be billed first?
    options:
      - His health insurance
      - The employer's workers' compensation carrier
      - Medicare
      - The patient
    answer: 1
    why: Work-related injuries are the responsibility of the workers' compensation carrier. Health plans deny them with CO-19.
  - q: In a no-fault state, a driver injured in a car crash is treated. What usually pays first?
    options:
      - The at-fault driver's liability insurer, after the case settles
      - The patient's own auto policy PIP coverage, up to its limit
      - Medicaid
      - The hospital's charity fund
    answer: 1
    why: In no-fault states, each person's own PIP coverage pays their medical bills first, up to the policy limit, regardless of fault.
  - q: Which CARC tells you the health plan believes an auto/no-fault carrier is responsible?
    options:
      - CO-19
      - CO-20
      - CO-21
      - CO-45
    answer: 2
    why: CARC 19 points to workers' comp, CARC 20 to a liability carrier, and CARC 21 to a no-fault (auto) carrier.
  - q: What should a workers' comp claim include that a normal health claim doesn't?
    options:
      - The patient's employer, date of injury and WC claim number
      - The patient's credit score
      - A Medicaid ID
      - Nothing extra
    answer: 0
    why: WC carriers match bills to an injury claim using the claim number, date of injury and employer. Missing them delays or denies payment.
---

## Why injury claims are different

When someone else is responsible for an injury, the patient's own health insurance usually wants that party to pay first. The payers involved:

| Source | Pays for |
|---|---|
| **Workers' compensation (WC)** | Injuries and illnesses caused by work |
| **Auto: PIP** (personal injury protection) | Medical bills after a car accident, in no-fault states and some others, regardless of fault |
| **Auto: MedPay** (medical payments) | Medical bills after a car accident, up to a small limit, regardless of fault, in at-fault states |
| **Liability insurance** | Injuries caused by someone else's negligence (another driver, a store, a property owner), usually after a settlement |
| **Health insurance** | What's left, or everything if no other party is responsible, with possible recovery later |

Health plans ask about accidents, deny when they suspect another payer (**CO-19, CO-20, CO-21**), or pay and later **recover** the money through **subrogation**.

## Workers' compensation

### How it works
- Every state runs its own workers' comp system and **fee schedule**. Federal employees are covered under a separate federal program.
- The employer (or its insurer) pays for treatment of work injuries, with **no deductible or copay** for the patient.
- The patient **can't be billed** for an accepted WC injury in most states.

### What you need before billing
- Employer name and address
- **Date of injury** and description
- **WC carrier**, **claim number** and **adjuster** name and contact
- Body part or condition accepted under the claim
- Authorization for treatment, where the state or carrier requires it

### Billing details
- Usually billed on **CMS-1500** or **UB-04**, with box 10a (“Is patient's condition related to employment?”) marked **Yes**, and the claim number in the appropriate field. Some states require their own forms or electronic billing rules.
- Medical records often must be attached to every bill.
- Payment follows the **state WC fee schedule**, not the provider's health plan contracts.

### Common WC problems
- **Claim not yet accepted** (“under investigation”): the carrier won't pay until it decides the injury is work-related.
- **Claim denied by the carrier** as not work-related: then the health plan can be billed, with the WC denial letter attached.
- **Treatment for a body part not accepted** on the claim.
- **Missing claim number**, or bills sent to the employer instead of the carrier.

## Auto insurance, PIP and MedPay

### No-fault states and PIP
In **no-fault states** (for example Florida, Michigan, New York, New Jersey and Pennsylvania, each with its own rules and options), each person's **own auto policy** pays their medical bills through **PIP**, up to the policy limit, no matter who caused the accident. Several other states require or offer PIP too.

- PIP is usually **primary** for accident-related medical bills; health insurance becomes secondary once PIP is exhausted, depending on state law and the policy.
- States set rules on fee schedules, required forms, and time limits to start treatment and file claims.

### At-fault states and MedPay
In **at-fault (tort)** states, the at-fault driver's **liability insurance** eventually pays, but only after a claim or lawsuit settles. Optional **MedPay** coverage on the patient's own policy pays smaller amounts quickly.

### Billing auto claims
- Mark box **10b** (auto accident) **Yes** with the **state** where it happened, and include the accident date.
- Get the auto insurer's **claim number**, the **adjuster**, and the policy holder's details.
- Track the **PIP exhaustion** letter: once PIP benefits are used up, the health plan can be billed with that letter.

## Liability, attorneys and letters of protection

When a third party is liable (a slip and fall, or a car accident in an at-fault state), the patient may hire an attorney. Providers may:

- bill the patient's health insurance (which may later seek **subrogation**, recovering its payment from the settlement), or
- treat under a **letter of protection (LOP)** or lien, agreeing to wait for payment from the settlement.

Rules vary by state and contract. In-network providers usually **can't refuse to bill** the health plan just to collect more from a settlement, and Medicare has strict **Medicare Secondary Payer** rules for liability and no-fault situations.

## How health plans handle accident claims

1. The claim shows an accident indicator or injury diagnosis, so the payer sends the member an **accident questionnaire**.
2. The claim **pends** until the member responds.
3. If the member says another party is responsible, the health plan denies (**CO-19, CO-20 or CO-21**), or pays and pursues subrogation.
4. If the member doesn't respond, the claim may deny for missing information (**PR-227** or similar).

!!! tip "Injury diagnosis codes trigger questions"
    ICD-10-CM **external cause codes** (V, W, X and Y codes, such as V43.52XA for a car driver injured in a collision with another car, initial encounter) and injury codes (S and T codes) signal accidents to payers. They must be accurate. They also tell an AR analyst to check for auto or WC coverage when a denial comes back.

!!! example "Scenario"
    Ana, 34, injured her wrist falling from a ladder at the warehouse where she works. The urgent care billed her BCBS plan, which denied with **CO-19**. The AR analyst called the employer's HR, got the WC carrier and claim number (WC-55-2026-118), sent the bill with records to the carrier, and changed the account's financial class to workers' compensation. Ana is not billed.

!!! mistake "Auditor's red flag"
    Injury claims billed to health insurance with box 10a–10c left blank. The accident questions decide which payer is primary; leaving them blank only delays the claim.

!!! interview "If an interviewer asks “What is PIP?”"
    “PIP is personal injury protection, part of an auto insurance policy that pays medical expenses after a car accident regardless of fault, mainly in no-fault states. It's usually primary for accident-related care up to its limit, so we bill the auto carrier with the claim number and accident details first, and bill health insurance once PIP is exhausted, with the exhaustion letter.”
