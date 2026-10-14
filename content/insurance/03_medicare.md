---
title: Medicare Parts A, B, C and D
short: Medicare
description: Who qualifies, what each part covers, Medigap, Medicare Advantage, MACs, the MBI, crossover claims, and the Medicare rules that cause the most denials.
order: 3
level: Beginner
keywords: Medicare Part A Part B Part C Part D Medicare Advantage Medigap MAC MBI crossover PTAN enrollment ABN eligibility ESRD
quiz:
  - q: Which part of Medicare covers physician office visits?
    options:
      - Part A
      - Part B
      - Part D
      - Medigap only
    answer: 1
    why: Part B covers physician services, outpatient care, preventive services, DME and more. Part A covers inpatient hospital, SNF, hospice and some home health.
  - q: A patient has Original Medicare and a Medigap Plan G. How is the claim usually handled?
    options:
      - Bill the Medigap plan first
      - Bill Medicare; the claim crosses over automatically to the Medigap plan
      - Bill the patient
      - Medigap replaces Medicare
    answer: 1
    why: Medigap supplements Original Medicare. Medicare pays first and, through crossover, forwards the claim to the Medigap insurer.
  - q: A patient is enrolled in a Humana Medicare Advantage plan. The provider bills Original Medicare. What happens?
    options:
      - Medicare pays and Humana pays secondary
      - Medicare denies because the patient is enrolled in a Medicare Advantage plan; the claim must go to Humana
      - Both pay half
      - Medicare forwards it to Humana automatically
    answer: 1
    why: Medicare Advantage replaces Original Medicare for Part A and B services. Original Medicare denies, and the claim must be billed to the MA plan.
  - q: Who can usually enroll in Medicare before age 65?
    options:
      - Anyone who asks
      - People receiving Social Security disability benefits for 24 months, people with ESRD and people with ALS
      - Only veterans
      - Children with Medicaid
    answer: 1
    why: Under-65 eligibility is for people with qualifying disability (after 24 months of SSDI), end-stage renal disease or ALS (no waiting period).
---

## What Medicare is

**Medicare** is the US federal health insurance program, run by the **Centers for Medicare & Medicaid Services (CMS)**. It covers:

- people **65 and older**,
- people under 65 who have received **Social Security disability benefits for 24 months**,
- people with **end-stage renal disease (ESRD)**, needing dialysis or a kidney transplant, and
- people with **ALS** (amyotrophic lateral sclerosis), without the 24-month wait.

Medicare isn't income-based (that's Medicaid). Most people paid Medicare taxes while working.

## The four parts

| Part | Name | Covers | Claim form |
|---|---|---|---|
| **A** | Hospital insurance | Inpatient hospital stays, skilled nursing facility care after a qualifying inpatient stay, hospice, some home health | UB-04 / 837I |
| **B** | Medical insurance | Physician services, outpatient hospital, preventive services, labs, imaging, DME, ambulance, some drugs given in the office, home health in some cases | CMS-1500 / 837P (professional) and UB-04 (outpatient facility) |
| **C** | Medicare Advantage | Private plans that provide Part A and B benefits (usually D too), often with extras like dental and vision | Billed to the MA plan |
| **D** | Prescription drug coverage | Outpatient prescription drugs, through private plans | Pharmacy claims (not usually RCM medical billing) |

**Original Medicare** means Parts A and B, run directly by the government through contractors.

### Cost-sharing in Original Medicare

- **Part A:** a deductible per **benefit period** (not per year) for inpatient stays, then daily coinsurance for long stays.
- **Part B:** an **annual deductible**, then generally **20% coinsurance** of the Medicare-approved amount.
- Many preventive services have **no cost-sharing** when billed correctly (for example, the annual wellness visit).

CMS changes the dollar amounts every calendar year (CY). Always match the amount to the **year of the date of service**, not the year you're working the claim.

| Amount | CY 2024 | CY 2025 | CY 2026 |
|---|---|---|---|
| Part A inpatient deductible (per benefit period) | $1,632 | $1,676 | $1,736 |
| Part B annual deductible | $240 | $257 | $283 |
| Part B standard monthly premium | $174.70 | $185.00 | $202.90 |

Source: CMS annual premium and deductible fact sheets. Check CMS each November for the next year's figures.

!!! tip "Auditor's red flag"
    Estimates and patient statements that use the wrong year's deductible. A visit on December 20, 2025 that Medicare processes in January 2026 still falls under the 2025 Part B deductible ($257), not 2026's ($283). The ERA's PR-1 amount is always the source of truth for what the patient owes.

## Medicare Advantage (Part C)

- Offered by private insurers such as UnitedHealthcare, Humana, Aetna, Elevance and many BCBS plans, under contract with CMS.
- Plan types include HMO, PPO, private fee-for-service (PFFS) and **special needs plans (SNPs)**, including **D-SNPs** for people with both Medicare and Medicaid.
- **The MA plan is the payer.** Original Medicare won't pay Part A and B services for MA members (with a few exceptions such as hospice, which Original Medicare pays even for MA members, and certain clinical trials).
- MA plans use networks, referrals and prior authorization much more than Original Medicare.

!!! warning "Check MA enrollment every visit"
    Patients switch between Original Medicare and Medicare Advantage during the annual enrollment period (October 15 to December 7, effective January 1) and the MA open enrollment period (January 1 to March 31). Claims for January visits are a classic source of wrong-payer denials.

## Medigap (Medicare Supplement)

- Private policies that pay some or all of the **gaps** in Original Medicare: deductibles and coinsurance.
- Standardized plans labeled with letters (for example **Plan G** and **Plan N** are common).
- Work only with **Original Medicare**, not with Medicare Advantage.
- **Crossover:** after Medicare processes, it forwards the claim to the Medigap insurer automatically if set up. The Medicare ERA shows remark **MA18** (claim forwarded to supplemental insurer). Don't bill the Medigap plan separately unless the crossover fails, or you'll get duplicates.

## How Original Medicare is run

- **MACs (Medicare Administrative Contractors)** process Part A and B claims for regions called jurisdictions. Examples include Novitas Solutions, Palmetto GBA, Noridian, CGS, NGS, WPS and First Coast. Each MAC has a provider portal and publishes **LCDs**.
- **DME MACs** process durable medical equipment claims in four jurisdictions.
- Providers must **enroll** with Medicare (through **PECOS** or the CMS-855 forms) and receive a **PTAN** before billing.
- Providers choose to be **participating** (accept assignment on all claims), **non-participating** (may accept assignment claim by claim; slightly lower rates; limiting charge applies), or **opt out** (private contracts with patients; Medicare pays nothing).

## The Medicare Beneficiary Identifier (MBI)

An 11-character ID, randomly generated, for example **1EG4-TE5-MK73** (shown with dashes on the card; entered without them on claims). It replaced the Social Security–based HICN in 2020. Claims with an invalid or old ID reject.

## Medicare rules behind common denials

| Rule | Denial you'll see |
|---|---|
| 12-month timely filing from date of service | CO-29 |
| Medical necessity per NCD and LCD | CO-50, with remark N115 (LCD) or N386 (NCD) |
| Frequency limits (for example, screening colonoscopy intervals) | CO-119 or CO-151 |
| Medicare Secondary Payer rules | CO-22 or OA-23, MSP-related remark codes |
| Patient in a Medicare Advantage plan | CO-109 or CO-24 with remarks pointing to the MA plan |
| Hospice election for related care | CO-B9 or similar |
| Home health episode bundling | Consolidated billing denial |
| NCCI edits | CO-97, CO-236 |
| Provider not enrolled or not eligible | CO-B7, CO-185 |
| ABN rules (GA, GZ, GY modifiers) | Usually PR-50 when GA and a valid ABN; CO-50 when no valid ABN (GZ). Verify the ABN before billing the patient |

## Medicare appeals at a glance

| Level | Who decides | Time limit to file |
|---|---|---|
| 1. Redetermination | The MAC | 120 days from the initial determination |
| 2. Reconsideration | Qualified Independent Contractor (QIC) | 180 days from the redetermination |
| 3. Administrative Law Judge hearing | OMHA | 60 days, with a minimum amount in controversy (set yearly) |
| 4. Medicare Appeals Council | Departmental Appeals Board | 60 days |
| 5. Federal district court | US court | 60 days, with a higher minimum amount in controversy |

Simple clerical errors are often fixed faster through a **reopening** (by phone or portal) rather than a formal appeal. More in [appeals](/denials/appeals/).

!!! interview "If an interviewer asks “Explain the parts of Medicare.”"
    “Part A is hospital insurance: inpatient stays, skilled nursing after a qualifying stay, hospice and some home health. Part B is medical insurance: doctor visits, outpatient services, labs, imaging, DME and preventive care, with an annual deductible and usually 20% coinsurance. Part C is Medicare Advantage, private plans that replace Original Medicare for A and B benefits. Part D is prescription drug coverage. Medigap plans supplement Original Medicare and receive claims by crossover.”
