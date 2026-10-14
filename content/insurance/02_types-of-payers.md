---
title: Types of payers
short: Types of payers
description: Government, commercial, Blue Cross Blue Shield, managed government plans, TPAs, liability payers and self-pay, with what makes each one different to bill and follow up.
order: 2
level: Beginner
keywords: commercial payers government payers BCBS BlueCard home plan host plan TPA rental network Medicare Advantage managed Medicaid self pay liability payers
quiz:
  - q: A patient from Texas with a BCBS Texas card is treated in Ohio by an Anthem Ohio network provider. Where does the provider send the claim?
    options:
      - Directly to BCBS Texas
      - To the local plan (Anthem Ohio), which routes it through BlueCard to the home plan
      - To Medicare
      - To the patient
    answer: 1
    why: Under BlueCard, providers file with their local (host) Blue plan, which uses the member prefix to route the claim to the home plan.
  - q: Which of these is a government payer run by a private company?
    options:
      - Original Medicare
      - Medicare Advantage
      - A self-pay patient
      - A workers' compensation carrier
    answer: 1
    why: Medicare Advantage plans are offered by private insurers under contract with CMS. They replace Original Medicare as the payer.
  - q: What is a rental (or leased) network?
    options:
      - A network of rented equipment suppliers
      - A PPO network that a payer or TPA leases to give its members discounted rates with the network's providers
      - A Medicare program
      - A clearinghouse
    answer: 1
    why: Small plans and TPAs lease networks such as MultiPlan to access discounts. The network logo on the card tells you which contract and rates apply.
---

## Payer families

| Family | Examples | Key traits |
|---|---|---|
| Government (federal) | Original Medicare, TRICARE, VA, Federal Employees Health Benefits (FEHB, run through private plans) | Rules set by law and regulation; public manuals |
| Government (state-federal) | Medicaid, CHIP | Each state has its own rules, IDs and limits |
| Managed government | Medicare Advantage, Medicaid managed care, Medicare Part D | Private companies, government rules |
| Commercial | UnitedHealthcare, Aetna (CVS Health), Cigna, Elevance (Anthem), Humana, Blue Cross Blue Shield plans, regional plans | Contract-driven; medical policies; prompt pay laws |
| Self-funded employer plans | Large employers using an insurer or TPA | ERISA rules; administrator is not the risk-bearer |
| Liability and casualty | Workers' compensation carriers, auto insurers, general liability, homeowners | Accident-based; claim numbers and adjusters; state rules |
| Self-pay | Uninsured patients | Good faith estimates; discounts; financial assistance |

## Government payers

### Original Medicare
Federal health insurance for people 65 and older, and some younger people with disabilities or ESRD. Claims go to regional **Medicare Administrative Contractors (MACs)**. Rules are public in CMS manuals, NCDs and LCDs. See [Medicare](/insurance/medicare/).

### Medicaid and CHIP
Joint federal-state programs for people with limited income and resources. **CHIP** covers children in families that earn too much for Medicaid but can't afford private coverage. Medicaid is generally the **payer of last resort**. See [Medicaid, QMB and spend-down](/insurance/medicaid-qmb-spend-down/).

### Military and veterans
TRICARE for service members, retirees and families; VA Community Care for veterans referred by the VA. See [TRICARE and VA CCN](/insurance/tricare-and-va-ccn/).

## Managed government plans

### Medicare Advantage (Part C)
Private plans approved by CMS that provide Part A and Part B benefits (and usually Part D). Once enrolled, the **Medicare Advantage plan is the payer**, not Original Medicare. Expect more prior authorization, network rules and plan-specific policies.

### Medicaid managed care organizations (MCOs)
Most states contract with private MCOs to run Medicaid. The state portal shows which MCO the member belongs to on the date of service. Billing the state's fee-for-service program for an MCO member gets a denial pointing you to the right payer.

## Commercial payers

Private insurers sell plans to employers and individuals. What matters for RCM:

- **Contracts** set rates, timely filing, appeal limits and policies.
- **Medical policies** decide coverage and medical necessity.
- **Portals** (Availity and payer-specific sites) are the fastest way to check eligibility, status and denials.
- **State prompt pay laws** apply to fully insured plans.

### Blue Cross Blue Shield (BCBS)
BCBS is a federation of independent companies, each covering a state or region (for example, Anthem in several states, Highmark, Florida Blue, BCBS of Texas). Two terms you must know:

- **Home plan:** the Blue plan the member belongs to.
- **Host plan:** the local Blue plan where the provider is located.

Under the **BlueCard** program, the provider files claims with **its local (host) plan**, which uses the member ID **prefix** (the first three characters) to send the claim to the home plan. Eligibility and benefits come from the home plan; payment and network rules come through the host plan. The **Federal Employee Program (FEP)** is a separate Blue program for federal employees, with its own rules.

## TPAs and rental networks

- **Third-party administrator (TPA):** processes claims for self-funded employer plans, unions and trusts. The TPA pays with the employer's money. Examples include UMR (a UnitedHealthcare company), Meritain Health and many regional TPAs.
- **Rental or leased networks:** PPO networks, such as MultiPlan or First Health, that TPAs and small plans lease to get discounted rates. The network logo on the card determines which contract and rate applies, and **repricing** by the network happens before payment.

!!! tip "Who do I call?"
    For a TPA plan, eligibility and claim status come from the **TPA**, but pricing questions may need the **network** that repriced the claim. Notes should say which one you contacted.

## Liability and casualty payers

These pay because of **who is responsible for an injury**, not because the patient bought health insurance:

- **Workers' compensation** for work-related injuries and illnesses
- **Auto insurance**, including **PIP** and **MedPay** coverage
- **General liability**, for example a slip and fall in a store
- **Homeowners' liability**

They use a **claim number**, **date of injury** and **adjuster**, and the health plan will usually deny if it believes one of these should pay first (CO-19, CO-20, CO-21). See [workers' compensation, auto and PIP](/insurance/workers-comp-auto-pip/).

## Self-pay

Patients with no insurance, or who choose not to use it. RCM steps:

1. Give a **good faith estimate** for scheduled services (No Surprises Act).
2. Apply the provider's **self-pay discount** policy.
3. Screen for **Medicaid** or **financial assistance** eligibility.
4. Offer payment plans.

!!! mistake "Auditor's red flag"
    Medicare Advantage and Medicaid managed care members billed to Original Medicare or state fee-for-service Medicaid. The government name on the card isn't always the payer.

!!! interview "If an interviewer asks “What are the types of payers?”"
    “Government payers like Medicare, Medicaid, TRICARE and the VA; managed government plans like Medicare Advantage and Medicaid MCOs, which are run by private companies; commercial payers like UnitedHealthcare, Aetna, Cigna and BCBS plans, including self-funded employer plans run through TPAs; liability payers like workers' compensation and auto insurance; and self-pay patients.”
