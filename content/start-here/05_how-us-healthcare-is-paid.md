---
title: How US healthcare gets paid
short: How payment works
description: Fee-for-service, fee schedules, RVUs, DRGs, APCs, capitation and value-based care, plus the HIPAA rules that govern every RCM job.
order: 5
level: Beginner
keywords: fee for service capitation value based care RVU MPFS DRG APC OPPS HIPAA PHI fee schedule chargemaster
quiz:
  - q: Medicare pays most physician services using what?
    options:
      - Diagnosis-related groups (DRGs)
      - The Medicare Physician Fee Schedule, based on RVUs
      - Capitation only
      - Whatever the provider charges
    answer: 1
    why: Physician (professional) services are paid under the MPFS, which multiplies relative value units by a geographic adjustment and a conversion factor.
  - q: A hospital inpatient stay under Medicare is generally paid how?
    options:
      - One payment per stay based on the MS-DRG
      - Per day of the stay
      - Per line item on the UB-04
      - By the physician fee schedule
    answer: 0
    why: Under the Inpatient Prospective Payment System, Medicare pays a set amount per stay based on the MS-DRG, with some outlier adjustments.
  - q: Under capitation, how is a provider paid?
    options:
      - Per service, after each claim
      - A fixed amount per member per month, whether or not the member is seen
      - Only when the patient is admitted
      - By the patient directly
    answer: 1
    why: Capitation pays a fixed per-member-per-month amount. Claims may still be submitted as encounter data, often adjusted with CO-24.
  - q: Under HIPAA's minimum necessary standard, an AR caller should...
    options:
      - Share full medical records on every call
      - Use and disclose only the PHI needed to resolve the claim
      - Never mention the patient's name
      - Email PHI to personal accounts for convenience
    answer: 1
    why: Minimum necessary means using or sharing only the PHI needed for the specific task.
---

## Why US healthcare costs so much

The US spends more per person on healthcare than any other country. Analysts usually point to a few drivers, and several of them explain why RCM jobs exist at all:

| Driver | What it means |
|---|---|
| **Higher prices** | Hospital services, physician fees and especially drugs cost more per unit than in other wealthy countries |
| **Administrative complexity** | Thousands of payers, each with its own rules, forms and contracts. Billing and insurance work is a large share of spending, and it's the work RCM teams do |
| **Technology, drugs and research** | New devices, imaging and specialty drugs are adopted quickly and priced high to recover development costs |
| **Defensive medicine and malpractice** | Fear of lawsuits leads to extra tests and procedures, and malpractice insurance is expensive |
| **Chronic disease** | Conditions like diabetes, heart disease and obesity drive long-term spending |

## Who sets the price?

Every provider keeps a **chargemaster** (in hospitals) or **fee schedule** (in practices): a list of its standard charges for every service. That's the amount on the claim.

But the provider rarely gets that amount. What it actually receives depends on the **payment method** in its contract with each payer.

## Fee-for-service

The provider is paid for **each service** it bills. Most US claims are still paid this way. The payer calculates an **allowed amount** per line using a fee schedule.

### Medicare Physician Fee Schedule (MPFS)

Medicare pays professional services using **relative value units (RVUs)**. Each CPT code has three RVU parts:

1. **Work RVU:** the doctor's time, skill and effort.
2. **Practice expense RVU:** staff, equipment and office costs.
3. **Malpractice RVU:** liability insurance cost.

Each part is adjusted by a **geographic practice cost index (GPCI)** for the locality, added together, and multiplied by a national **conversion factor** that CMS publishes every year.

!!! note "Facility versus non-facility rates"
    Medicare pays a doctor a **lower** rate when the service happens in a facility (hospital, ASC, SNF), because the facility bills its own claim for overhead. That's why the **place of service** code on a professional claim changes the payment.

Commercial payers often pay a percentage of Medicare rates (for example 120% of MPFS) or use their own fee schedules.

## Hospital payment systems

Hospitals are paid differently from doctors.

| Setting | Medicare system | How it works |
|---|---|---|
| Inpatient acute care | IPPS, using **MS-DRGs** | One payment per stay, based on principal diagnosis, procedures, complications (CC and MCC) and discharge status |
| Hospital outpatient | OPPS, using **APCs** | Services grouped into ambulatory payment classifications with set rates; some items packaged into others |
| Skilled nursing facility | SNF PPS, using **PDPM** | Daily rate driven by patient characteristics |
| Home health | HH PPS, using **PDGM** | Payment per 30-day period |
| Critical access hospitals | Cost-based | Paid based on reasonable costs |

Commercial payers may pay hospitals by DRG, per diem (a fixed rate per day), percentage of charges, or case rates.

## Capitation

Under **capitation**, a payer (usually an HMO or Medicare Advantage plan) pays the provider a fixed amount **per member per month (PMPM)** for a defined set of services, whether the patient visits or not.

- The provider still submits claims as **encounter data**, so the payer can track care and quality.
- Those claims often come back paid at zero with **CO-24** (charges covered under a capitation agreement). That's not a denial to appeal; it's expected.
- Services outside the capitation agreement (carve-outs) are billed and paid fee-for-service.

## Value-based care

Payers increasingly reward **outcomes and quality** rather than volume:

- **Pay-for-performance bonuses** for meeting quality measures.
- **Shared savings** in accountable care organisations (ACOs).
- **Bundled payments**, one payment for an episode such as a knee replacement and 90 days of follow-up.
- **Medicare's Quality Payment Program (MIPS)**, which adjusts doctors' Medicare payments up or down based on reported quality, cost and other measures.

For RCM teams, value-based care means quality codes (such as CPT Category II codes and certain HCPCS G-codes) and accurate diagnosis coding matter more, because they affect risk scores and bonuses.

## Patient cost-sharing

Within any of these systems, the patient pays part of the allowed amount:

- **Deductible:** the amount the patient pays each plan year before the plan starts paying for most services.
- **Copay:** a fixed amount per visit, such as $30 for a specialist.
- **Coinsurance:** a percentage of the allowed amount, such as 20%.
- **Out-of-pocket maximum:** the most the patient pays in a year; after that, the plan pays 100% of covered services.

On an ERA, these appear with group code **PR** and reason codes **1** (deductible), **2** (coinsurance) and **3** (copay).

## HIPAA: the rules behind every RCM job

The **Health Insurance Portability and Accountability Act (HIPAA)** of 1996 affects RCM in two big ways.

### 1. Administrative simplification
HIPAA requires standard electronic transactions and code sets. That's why every payer accepts the **837** claim, sends the **835** remittance and uses **ICD-10-CM, CPT and HCPCS**. It also created the **NPI**.

### 2. Privacy and security
**Protected health information (PHI)** is any health information that can identify a person: name, date of birth, member ID, address, diagnosis, dates of service and more.

- **Minimum necessary:** use and share only the PHI needed for the task.
- **Verify before you share:** on payer calls, confirm you're speaking to the right party; when patients call, verify identity.
- **Secure systems only:** no PHI in personal email, chat apps, phone photos or printouts that leave the office.
- **Report incidents:** a misdirected fax or email is a possible breach and must be reported to your compliance team.

!!! warning "Offshore RCM and HIPAA"
    RCM companies sign **business associate agreements (BAAs)** with US providers, which makes them legally responsible for protecting PHI. Breaking HIPAA rules can lead to termination and legal penalties, so treat every claim as confidential.

For the full set of HIPAA rules and daily compliance habits, see [HIPAA and compliance for RCM teams](/start-here/hipaa-and-compliance/).

!!! interview "If an interviewer asks “What is the difference between fee-for-service and capitation?”"
    “In fee-for-service, the provider is paid for each service billed, based on the payer's fee schedule. In capitation, the provider gets a fixed amount per member per month to cover a set of services, whether or not the patient is seen. Capitated claims are still sent as encounter data, and they often come back with CO-24, which we don't appeal.”
