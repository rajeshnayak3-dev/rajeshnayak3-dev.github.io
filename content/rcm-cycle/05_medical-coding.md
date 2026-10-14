---
title: Medical coding
short: Medical coding
description: ICD-10-CM, CPT, HCPCS, ICD-10-PCS and revenue codes explained for beginners, with how they link on a claim, NCCI edits, and the coding errors that cause denials.
order: 5
level: Beginner
keywords: ICD-10-CM CPT HCPCS Level II ICD-10-PCS revenue codes NDC code sets diagnosis pointer NCCI MUE unbundling upcoding
quiz:
  - q: Which code set describes WHY a service was performed?
    options:
      - CPT
      - ICD-10-CM
      - HCPCS Level II
      - Revenue codes
    answer: 1
    why: ICD-10-CM diagnosis codes explain the reason for the service. CPT and HCPCS describe what was done.
  - q: J-codes, such as those for injected drugs, belong to which code set?
    options:
      - CPT Category I
      - HCPCS Level II
      - ICD-10-PCS
      - ICD-10-CM
    answer: 1
    why: HCPCS Level II codes cover drugs (J-codes), supplies, DME, ambulance and other items not in CPT.
  - q: Billing two procedures separately when one code covers both is called what?
    options:
      - Upcoding
      - Unbundling
      - Downcoding
      - Crosswalking
    answer: 1
    why: Unbundling splits a comprehensive service into its parts. NCCI edits catch many of these and deny the component code, often with CO-97 or CO-236.
  - q: What do ICD-10-PCS codes describe?
    options:
      - Outpatient physician procedures
      - Inpatient hospital procedures, reported on the facility claim
      - Diagnoses
      - Supplies
    answer: 1
    why: ICD-10-PCS is used for inpatient hospital procedures on the UB-04. Physicians and outpatient settings use CPT and HCPCS.
---

## Coding is translation

Coders translate the medical record into standard codes that every payer understands. HIPAA requires these code sets on electronic claims.

| Code set | Describes | Used by | Format |
|---|---|---|---|
| **ICD-10-CM** | Diagnoses, symptoms, reasons for encounter | Everyone | 3–7 characters, starts with a letter (E11.9, S82.101A) |
| **CPT** (HCPCS Level I) | Procedures and services by providers | Professional and outpatient claims | 5 digits (99213), or 4 digits plus a letter for Category II and III (3074F, 0042T) |
| **HCPCS Level II** | Drugs, supplies, DME, ambulance, some services | Professional and outpatient | Letter plus 4 digits (J1100, E0601, A0427, G0439) |
| **ICD-10-PCS** | Inpatient hospital procedures | Inpatient facility claims only | 7 alphanumeric characters (0SR9019) |
| **Revenue codes** | Department or type of facility charge | UB-04 facility claims | 4 digits (0450 emergency room) |
| **NDC** | The exact drug product and package | Drug lines, often required with J-codes | 11 digits in 5-4-2 format |

## ICD-10-CM: the “why”

ICD-10-CM codes are updated every **October 1** (new fiscal year), with occasional April updates. A claim with a code that was deleted or not yet valid on the date of service denies as invalid (for example **CO-146**).

Key rules beginners should know:

- **Code to the highest specificity.** E11.9 (type 2 diabetes without complications) is acceptable only when no complication is documented.
- **Seventh characters** matter for injuries: **A** initial encounter (active treatment), **D** subsequent encounter (healing), **S** sequela.
- **Laterality:** many codes specify right, left or bilateral.
- **First-listed diagnosis** on an outpatient claim is the main reason for the visit. On an inpatient claim, the **principal diagnosis** is the condition established after study to be chiefly responsible for the admission.
- **Z codes** describe encounters for reasons other than illness, such as screenings (Z12.11 screening for colon cancer) or routine exams (Z00.00).
- **Don't code “rule out” or “probable” diagnoses on outpatient claims.** Code the symptoms instead.

## CPT: the “what”

CPT is owned by the **American Medical Association** and updated every **January 1**.

- **Category I:** the main procedure and service codes, grouped into sections: Evaluation and Management (99202–99499), Anesthesia (00100–01999), Surgery (10004–69990), Radiology (70010–79999), Pathology and Laboratory (80047–89398), and Medicine (90281–99607).
- **Category II:** performance measure tracking codes, ending in F. They're usually billed at $0 or a nominal charge.
- **Category III:** temporary codes for emerging technology, ending in T. Many payers consider these investigational.

!!! note "Units"
    Some codes are reported per unit of time or quantity (for example, physical therapy 97110 per 15 minutes). The **units** field must match the documentation and the code's definition.

## HCPCS Level II: the rest

Maintained by CMS and updated quarterly. Common sections:

- **A codes:** ambulance and medical supplies (A0427 ALS emergency transport)
- **E codes:** durable medical equipment (E0601 CPAP device)
- **G codes:** temporary procedures and Medicare-specific services (G0439 annual wellness visit, subsequent)
- **J codes:** drugs given by methods other than oral (J1885 ketorolac injection)
- **K and L codes:** DME and orthotics or prosthetics
- **Q codes:** temporary codes, including some drugs and casting supplies

## Modifiers

**Modifiers** are two-character codes added to CPT or HCPCS to tell the payer something changed: which side of the body, that a service was distinct, that only the professional part was done. They're covered fully in [modifiers](/forms-billing/modifiers/). Wrong or missing modifiers cause **CO-4**.

## How codes link on the claim

On the CMS-1500, up to 12 diagnosis codes go in **box 21 (A to L)**. Each service line in **box 24E** has a **diagnosis pointer** (up to four letters) linking that procedure to the diagnoses that justify it.

!!! example "Linking example"
    - Diagnosis A: M17.11 (primary osteoarthritis, right knee)
    - Diagnosis B: E11.9 (type 2 diabetes)
    - Line 1: 99214-25, pointer A, B (visit addressing both problems)
    - Line 2: 20610-RT, pointer A (knee joint injection, right)

    Pointing the knee injection to diabetes alone would fail medical necessity edits.

## NCCI edits and MUEs

The **National Correct Coding Initiative (NCCI)**, run by CMS and used by many commercial payers, has two main edit types:

1. **Procedure-to-procedure (PTP) edits:** pairs of codes that shouldn't be billed together for the same patient, same provider, same day. The column 2 code is denied unless a modifier is allowed and appropriate (for example 59 or XS when the services were truly distinct).
2. **Medically Unlikely Edits (MUEs):** the maximum units of a code one provider would normally report for one patient on one day. Units above the MUE deny.

NCCI denials often appear as **CO-97** (included in another service), **CO-236** (not compatible with another procedure under NCCI) or **CO-151/CO-119** for unit or frequency issues.

## Coding errors that become denials

| Error | Effect |
|---|---|
| Invalid or deleted code for the date | CO-146 (diagnosis) or CO-181 (procedure) |
| Diagnosis doesn't support procedure | CO-11 or CO-50 |
| Missing or wrong modifier | CO-4 |
| Unbundling | CO-97, CO-236 |
| Wrong age or sex for the code | CO-6, CO-7 |
| Unspecified code when payer requires specificity | CO-16 with a remark, or medical necessity denial |
| Upcoding (higher level than documented) | Paid now, recovered in audit |
| Undercoding | Lost revenue; still a compliance problem |

!!! tip "AR analysts don't change codes"
    If a denial needs a coding change, an AR analyst sends it to the coding team (or the provider) for review with the denial reason. Changing codes without documentation support is a compliance violation, even when it would get the claim paid.

!!! mistake "Auditor's red flag"
    Unspecified diagnosis codes (laterality 0 or 9, “unspecified type”) when the note clearly documents the detail. They invite medical necessity denials and show weak coding review.

!!! interview "If an interviewer asks “What is the difference between CPT and ICD-10?”"
    “ICD-10-CM codes describe the diagnosis, the reason for the visit. CPT codes describe the procedure or service performed. Payers check that the CPT is supported by the ICD-10 code for medical necessity. HCPCS Level II covers items not in CPT, such as drugs, supplies and DME, and hospitals use ICD-10-PCS for inpatient procedures.”
