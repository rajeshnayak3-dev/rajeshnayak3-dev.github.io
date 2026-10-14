---
title: The chargemaster and utilization review in hospitals
short: Chargemaster and UR
description: How a hospital's charge description master turns every service into a priced claim line, and how utilization review protects inpatient stays from denials.
order: 9
level: Intermediate
keywords: charge description master CDM chargemaster revenue code CPT HCPCS charge code utilization review UR admission review continued stay review length of stay level of care discharge planning case management
quiz:
  - q: A hospital's CDM maps a drug to revenue code 0250 but the payer requires 0636 with HCPCS. Every claim for that drug denies. Where is the fix?
    options:
      - Write a new appeal for each claim
      - Correct the CDM line so future claims are right, then correct the affected claims
      - Ask the patient
      - Change the diagnosis
    answer: 1
    why: A CDM error repeats on every claim. Fixing the master record stops the denials; affected claims still need correcting.
  - q: What does a continued stay review check?
    options:
      - Whether the patient's insurance card is valid
      - Whether the patient still needs inpatient care at the current level, so more days can be approved
      - Whether the claim has the right modifier
      - Whether the patient paid their copay
    answer: 1
    why: Continued stay (concurrent) review checks ongoing medical necessity for each additional day and the level of care.
---

## Part 1: the charge description master (CDM)

### What it is
The **charge description master**, or **chargemaster**, is a hospital's master list of everything it can bill: room types, lab tests, imaging, drugs, supplies, implants and procedures. A large hospital's CDM can have tens of thousands of lines.

When a nurse scans a supply or a lab result is filed, the system looks up the item in the CDM and creates a charge automatically. That's why CDM accuracy matters more than almost anything else in hospital billing: one wrong line repeats on every claim.

### What a CDM line contains

| Field | Example | Used on the UB-04 |
|---|---|---|
| Charge code (internal ID) | 30012345 | Not on the claim |
| Description | CBC with automated differential | FL 43 |
| Revenue code | 0300 (laboratory) | FL 42 |
| CPT or HCPCS code | 85025 | FL 44 |
| Modifier (if fixed) | 91, or none | FL 44 |
| Gross charge | $85.00 | FL 47 |
| Department | Lab | Internal reporting |
| Status (active or inactive) | Active | Inactive codes shouldn't generate charges |

Some lines (such as room and board, or many supplies) have a revenue code but no CPT/HCPCS code; others are “hard coded” with a CPT so no coder has to assign one. Surgical and E/M charges are usually “soft coded”: coders assign the CPT from documentation.

### Price transparency
Federal rules require hospitals to publish their standard charges, including payer-specific negotiated rates and discounted cash prices, in a machine-readable file, plus a consumer-friendly list or estimator for common shoppable services. CDM prices feed these files.

### Common CDM problems
| Problem | Result |
|---|---|
| CPT deleted in the January update but still on the CDM line | CO-181 on every claim |
| Revenue code doesn't match the HCPCS | CO-199 |
| Drug line missing HCPCS or NDC | CO-16 |
| Supply mapped to a billable line when it's routine (included in room charge) | Line denials in itemized bill reviews |
| Charge set too low (below what payers allow) | Lost revenue: percentage-of-charge contracts can never pay more than the charge |

Hospitals keep a **CDM coordinator** or revenue integrity team who reviews code updates every quarter and every January.

## Part 2: utilization review (UR)

### What it is
**Utilization review** checks that a patient's hospital care is medically necessary, at the right level and for the right length of time. Hospitals do it themselves (through a UR committee and case managers) and payers do it too. Medicare requires hospitals to have a UR plan as a condition of participation.

### The four checks

| Review | When | What it checks |
|---|---|---|
| **Admission (pre-admission) review** | Before or at admission | Is inpatient admission necessary, or would observation or outpatient care do? Is authorization or notification complete? |
| **Continued stay (concurrent) review** | During the stay, often daily | Does the patient still need inpatient care? Are extra days approved? Is the **length of stay (LOS)** in line with the diagnosis? |
| **Level of care review** | During the stay | Is the patient in the right level: ICU, step-down, medical-surgical, or observation? |
| **Discharge planning** | From admission onward | Where will the patient go next (home, home health, SNF, rehab), and what must be arranged so they aren't kept in hospital unnecessarily? |

A **retrospective review** happens after discharge, usually by the payer during claim review or an audit.

### Who does the work
- **Case managers** (usually nurses) apply criteria such as InterQual or MCG, talk to the payer's reviewers, and send clinical updates.
- **Physician advisors** review borderline cases and hold **peer-to-peer** discussions with payer medical directors.
- **The UR committee** oversees the process and handles cases where the hospital itself thinks a stay isn't necessary.

### How UR connects to RCM
- Days the payer doesn't approve during concurrent review show up later as denied days (CO-198) or level-of-care denials.
- Medicare **condition code 44** is used when UR changes an inpatient order to outpatient (observation) before discharge, so the stay is billed as outpatient.
- Patients kept in hospital only while waiting for a SNF bed may have those days paid at a lower level or denied.

!!! mistake "Auditor's red flag"
    An inpatient claim billed with all days as covered when the payer's authorization record shows fewer approved days. Always match the billed covered and non-covered days (value codes 80 and 81) to the authorization before release.

!!! interview "If an interviewer asks “What is a chargemaster?”"
    “The chargemaster, or CDM, is a hospital's master list of billable items and services. Each line holds a charge code, description, revenue code, CPT or HCPCS code and gross price, and it generates charges automatically when services are documented. Because errors repeat on every claim, the CDM is reviewed at every code update.”
