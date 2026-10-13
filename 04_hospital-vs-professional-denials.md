---
title: Hospital versus professional denials
short: Hospital vs professional denials
description: How denials differ on facility and physician claims. DRG downgrades, level of care, observation, readmissions, itemized bill reviews and outlier audits, compared with professional coding, modifier and credentialing denials.
order: 4
level: Advanced
keywords: hospital denials inpatient denials DRG downgrade clinical validation level of care observation two midnight readmission itemized bill review professional denials facility denials
quiz:
  - q: A payer approves only observation for a patient admitted as inpatient. What kind of denial is this?
    options:
      - Coding denial
      - Level of care (medical necessity of inpatient status) denial
      - Timely filing
      - Duplicate
    answer: 1
    why: Level-of-care denials dispute whether the stay met inpatient criteria. The fix usually involves physician advisor review, peer-to-peer and appeal with clinical documentation.
  - q: A payer changes a sepsis DRG to a lower DRG after record review, saying sepsis wasn't clinically supported. This is called what?
    options:
      - Clinical validation denial (DRG downgrade)
      - Timely filing denial
      - Credentialing denial
      - Bundling denial
    answer: 0
    why: Clinical validation reviews question whether a documented diagnosis is supported by clinical indicators, often lowering the DRG.
  - q: Which denial is more typical of professional claims than hospital claims?
    options:
      - DRG downgrade
      - Missing modifier 25 or 26
      - Inpatient readmission denial
      - Itemized bill audit
    answer: 1
    why: Modifier-driven denials (25, 26, TC, 59, RT/LT) are a professional billing staple. DRG and readmission issues are facility issues.
---

## Same categories, different weight

Both sides see eligibility, authorization and timely filing denials. What differs is **which denials hurt most** and **how they're worked**.

| | Hospital (facility) | Professional |
|---|---|---|
| Dollar value per denial | High; one inpatient denial can be tens of thousands of dollars | Usually low to moderate |
| Volume | Lower | Very high |
| Top denial drivers | Authorization (days, level of care), medical necessity of admission, clinical validation, DRG coding, medical records requests | Eligibility, coding and modifiers, bundling, credentialing, frequency |
| Who works them | Denial specialists, clinical appeal nurses, physician advisors, coders | AR analysts, coders |
| Appeal evidence | Full medical record, clinical criteria (such as InterQual or MCG), physician letters | Office or procedure note, policy, corrected claim |

## Hospital-specific denials

### Level of care (inpatient versus observation)
The payer agrees the patient needed care but says it should have been **observation** (outpatient) rather than inpatient, paying a much lower rate or denying the inpatient claim. Payers use criteria tools such as **InterQual** or **MCG**; Medicare uses the **two-midnight rule**.

**Work it:** check the admission order and physician documentation of expected length and risk; request a **peer-to-peer** discussion between the attending physician and the payer's medical director; appeal with clinical evidence. Some contracts allow rebilling as outpatient.

### Concurrent review and denied days
For inpatient stays, payers authorize a set number of days and review the stay as it continues. Days beyond what's approved may deny (**CO-198**), or days waiting for a discharge placement may be paid at a lower level.

### Clinical validation and DRG downgrades
After reviewing records, the payer decides a diagnosis that drove a higher DRG (for example **sepsis**, **acute respiratory failure**, **malnutrition** or **encephalopathy**) isn't clinically supported, and reprocesses at a lower DRG.

**Work it:** coding and clinical documentation integrity (CDI) teams compare the record with accepted clinical definitions; appeal with specific clinical indicators from the chart.

### DRG coding validation
The payer disagrees with the **principal diagnosis** or a secondary diagnosis coded as a complication (CC or MCC), lowering the DRG. This is a coding dispute, worked by facility coders with official coding guidelines.

### Readmission denials
If a patient is readmitted within a set period (often 30 days) for a related condition, the payer may combine the two stays into one payment or deny the second.

### Itemized bill and line-item reviews
For high-dollar claims, payers request an **itemized bill** and deny charges they consider **routine supplies** or **nursing services** already included in room charges, or charges they say weren't documented.

### Outlier and implant audits
High-cost cases paid with **outlier** payments, or claims with expensive implants, get extra review of charges and invoices.

### Three-day window and bundling
Outpatient services billed separately within the payment window before an admission deny or are recouped because they should have been on the inpatient claim.

### Revenue code and HCPCS mismatches
Outpatient lines with revenue codes that require a HCPCS code, or with mismatched pairs, deny (**CO-199**) or are paid at zero.

## Professional-specific denials

| Denial | Typical code | Notes |
|---|---|---|
| Missing or wrong modifier (25, 26, TC, 59/X, RT/LT, 50) | CO-4, CO-97, CO-236 | The biggest professional category |
| Global surgery period | CO-97 with M144 or similar | E/M or procedure during a post-op period without 24, 58, 78 or 79 |
| New versus established patient | CO-B16 | Seen by the same specialty in the same group within 3 years |
| Credentialing | CO-B7, CO-185 | New providers, locums, group changes |
| Place of service | CO-5, CO-58 | Office POS billed for a hospital service |
| Incident-to and supervision | CO-170, CO-185 | NP/PA services billed under a physician who didn't meet the rules |
| Frequency (screenings, therapy visits) | CO-119, CO-151 | Preventive service intervals; therapy caps |
| Assistant surgeon not allowed | CO-54 | Payer doesn't pay assistants for that procedure |
| Consultation codes | CO-96 or CO-150 | Medicare doesn't pay consultation codes (99242–99245, 99252–99255); bill the matching E/M visit instead |

## Denials that hit both claims

Some front-end failures deny every claim from one visit:

- No eligibility or coverage terminated
- Authorization missing for a surgery (the facility, surgeon, anesthesiologist and pathologist may all be denied)
- Wrong payer (Medicare Advantage member billed to Medicare)

When you work one, check the related claims from the same encounter. Fixing the authorization for the facility often fixes the professional claims too.

!!! example "One authorization, four denials"
    An outpatient spinal injection at a hospital was performed without authorization. The hospital's UB-04, the pain physician's CMS-1500 and the anaesthesia claim all denied CO-197. The hospital's authorization team obtained a retro-authorization (the plan allowed it within 14 days for the provider's documented scheduling error). The hospital AR analyst shared the auth number with the physician billing teams so all three claims were reprocessed.

!!! interview "If an interviewer asks “How are hospital denials different from professional denials?”"
    “Hospital denials are fewer but higher value, and many are clinical: level of care, denied inpatient days, DRG downgrades from clinical validation, readmissions and itemized bill reviews, worked with coders, CDI and physician advisors. Professional denials are high-volume and more often about coding and modifiers, bundling, credentialing, frequency limits and eligibility. Front-end issues like missing authorization can deny both the facility and professional claims for the same visit.”
