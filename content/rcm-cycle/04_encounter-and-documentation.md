---
title: The patient encounter and clinical documentation
short: Encounter and documentation
description: Why “if it isn't documented, it didn't happen” drives payment, what a complete note contains, how E/M levels are chosen, and what an ABN is.
order: 4
reviewed: 2026-10-14
level: Beginner
keywords: clinical documentation SOAP note medical necessity E/M level MDM time ABN superbill encounter form signature
takeaways:
  - "The provider's note is the evidence for the bill: if it isn't documented, it didn't happen."
  - "Medical necessity means the diagnosis supports the service under the payer's policy."
  - "An ABN applies only to Original Medicare and must be given before the service to shift liability to the patient."
quiz:
  - q: An auditor finds a 99214 billed, but the note supports only 99213. What is the risk?
    options:
      - No risk, because the doctor decides
      - Overpayment, which the payer can recover and which may be a compliance issue
      - Underpayment
      - A timely filing denial
    answer: 1
    why: Billing a higher level than documented (upcoding) causes overpayments that payers recover in audits. Repeated upcoding can be treated as fraud.
  - q: Since 2021, office E/M visits (99202–99215) are selected based on what?
    options:
      - History and exam only
      - Medical decision making (MDM) or total time on the date of the encounter
      - The number of diagnoses alone
      - The patient's age
    answer: 1
    why: The 2021 E/M changes removed history and exam as level drivers for office visits. The level is chosen by MDM or total time.
  - q: When should an ABN be given to an Original Medicare patient?
    options:
      - Before every visit
      - Before a service Medicare may deny as not medically necessary, so the patient can choose and accept liability
      - After Medicare denies the claim
      - Only for hospital stays
    answer: 1
    why: The Advance Beneficiary Notice must be given before the service, when the provider expects Medicare may not pay. Without a valid ABN, the provider generally can't bill the patient for a medical necessity denial.
---

## The note is the bill's evidence

The claim tells the payer **what** was done. The medical record proves it. Every code billed must be supported by documentation that is:

- **Complete:** shows what was done, why, by whom and for how long where time matters.
- **Specific:** enough detail to code to the highest specificity (laterality, type, stage, episode).
- **Timely:** written at or soon after the visit.
- **Authenticated:** signed by the rendering provider with credentials. An unsigned note can't support a claim.
- **Medically necessary:** the diagnosis and findings justify the service.

The rule auditors repeat: **“If it isn't documented, it didn't happen.”**

## What a typical office note contains

Many notes follow the **SOAP** structure:

| Part | Contents |
|---|---|
| **Subjective** | Chief complaint, history of present illness, review of systems, past history, medications, allergies |
| **Objective** | Vital signs, physical exam findings, test results |
| **Assessment** | Diagnoses or problems addressed, and their status |
| **Plan** | Tests ordered, prescriptions, procedures, referrals, follow-up |

Procedure notes add the indication, technique, findings, specimens, complications and the provider's signature.

## Medical necessity

Payers pay only for services that are **reasonable and necessary** to diagnose or treat an illness or injury. Medical necessity is shown by linking each procedure to a diagnosis that justifies it.

- Medicare publishes **National Coverage Determinations (NCDs)** and its contractors publish **Local Coverage Determinations (LCDs)**. These list covered diagnoses, frequency limits and documentation requirements for many services.
- Commercial payers publish **medical policies** or **clinical policy bulletins** that work the same way.

When the diagnosis doesn't support the procedure, expect **CO-50** (not medically necessary), **CO-11** (diagnosis inconsistent with procedure) or **CO-167** (diagnosis not covered).

## E/M levels in brief

**Evaluation and management (E/M)** codes describe visits: office, hospital, emergency department, nursing facility and others.

For office and outpatient visits (**99202–99205** new, **99211–99215** established), the provider picks the level using **either**:

### 1. Medical decision making (MDM)
MDM has three elements; two of three must meet the level:

1. **Number and complexity of problems addressed** (for example, one stable chronic illness versus a chronic illness with severe progression).
2. **Amount and complexity of data** reviewed and analyzed (tests ordered or reviewed, external notes, independent historian, discussion with another provider).
3. **Risk of complications** of patient management (for example, prescription drug management is moderate risk; decision about emergency major surgery is high risk).

| Level | MDM | New patient | Established patient |
|---|---|---|---|
| Straightforward | Minimal | 99202 | 99212 |
| Low | Low | 99203 | 99213 |
| Moderate | Moderate | 99204 | 99214 |
| High | High | 99205 | 99215 |

99211 is a minimal visit that may not need a physician (often a nurse visit).

### 2. Total time on the date of the encounter
Includes face-to-face and non-face-to-face time the provider personally spends that day (reviewing records, documenting, ordering). Each code has a time threshold in the CPT book, and the note must state the total time.

!!! tip "Prolonged services"
    When time goes beyond the highest level, prolonged service codes may apply. Medicare and CPT use different codes and thresholds for office visits (Medicare uses G2212; CPT uses 99417), so check each payer's rule.

## Superbills and encounter forms

Many practices still use a **superbill** (encounter form): a checklist of the practice's common CPT and ICD-10 codes that the provider marks after the visit. Electronic health records now generate charges automatically, but the principle is the same: the charge must match the note.

Errors here create problems later:

- A procedure performed but not marked on the superbill is **missed charge** (lost revenue).
- A code marked but not documented is **unsupported billing** (compliance risk).

## Advance Beneficiary Notice (ABN)

For **Original Medicare** patients, if the provider expects Medicare may deny a service as not medically necessary or too frequent, it must give the patient an **ABN (form CMS-R-131)** before the service. The patient picks an option: receive the service and accept financial responsibility, or decline it.

- With a valid ABN, bill with modifier **GA**. If Medicare denies, the denial usually comes as **PR-50** (patient responsibility) and the patient can generally be billed, provided the ABN really is valid and the patient isn't protected (for example, QMB).
- Without a valid ABN, the denial is usually **CO** (provider liability) and the patient can't be billed.
- An ABN is **not** a blanket waiver. It must be given before the service, name the specific service, give a real reason Medicare may not pay and a good-faith cost estimate, and the patient must choose an option themselves. ABNs given routinely to every patient, signed after the service, or with an option pre-selected by staff aren't valid. ABNs shouldn't be used in emergency or urgent care situations.
- For services that are never covered by Medicare (statutorily excluded), an ABN isn't required, but modifier **GY** tells Medicare you know it's excluded so it denies quickly and the secondary can process.
- Modifier **GZ** says you expected a denial but didn't get an ABN.

Commercial and Medicare Advantage plans use their own waiver rules; an ABN only applies to Original Medicare.

Sources: [CMS FFS ABN](https://www.cms.gov/medicare/forms-notices/beneficiary-notices-initiative/ffs-abn); [Medicare Claims Processing Manual, Chapter 30](https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c30.pdf); [Noridian ABN form instructions](https://med.noridianmedicare.com/web/jeb/topics/abn/abn-instructions). Original Medicare scope; reviewed October 2026.

## Documentation errors auditors find most

- Missing or late provider signature
- Cloned (copied-forward) notes that don't reflect today's visit
- E/M level higher than MDM or time supports
- Procedure performed but no procedure note
- Time-based codes without documented time (therapy, psychotherapy, anesthesia, critical care)
- Orders for tests without a documented reason
- Laterality (right or left) missing

!!! mistake "Auditor's red flag"
    Claims released before the provider signed the note. An unsigned note can't support a claim, and payers recover payments for unsigned documentation in audits.

!!! interview "If an interviewer asks “What is medical necessity?”"
    “Medical necessity means the service is reasonable and needed to diagnose or treat the patient's condition according to accepted standards of care. On a claim we show it by linking each procedure to a diagnosis that supports it, and the documentation must back it up. Medicare defines it through NCDs and LCDs; commercial payers through medical policies. If it isn't met, we see denials like CO-50.”
