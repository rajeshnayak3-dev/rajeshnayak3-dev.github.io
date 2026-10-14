---
title: Hospital billing versus professional billing
short: Hospital vs professional
description: The two sides of US medical billing compared. Who bills what, forms, code sets, payment methods, the three-day window, observation versus inpatient, and how AR work differs.
order: 3
level: Intermediate
keywords: hospital billing professional billing institutional billing physician billing UB-04 vs CMS-1500 DRG APC MPFS 72 hour rule three day window observation two midnight rule split billing modifier 26 TC
quiz:
  - q: A radiologist reads a hospital CT scan. Which modifier does the radiologist's claim use?
    options:
      - TC
      - "26"
      - "25"
      - "59"
    answer: 1
    why: The radiologist bills the professional component with modifier 26. The hospital bills the technical component (equipment and staff) on its facility claim.
  - q: Under Medicare's three-day payment window, outpatient diagnostic services a hospital provides to a patient in the 3 days before an inpatient admission are...
    options:
      - Billed separately on an outpatient claim
      - Bundled into the inpatient claim
      - Not billable at all
      - Billed to the patient
    answer: 1
    why: Diagnostic services and related non-diagnostic services in the 3 days before admission (1 day for certain hospitals) are bundled into the inpatient claim.
  - q: A patient is kept in the hospital overnight under observation. How is the hospital stay billed?
    options:
      - As an inpatient claim, TOB 0111
      - As an outpatient claim (TOB 013x) with observation revenue code 0762
      - On a CMS-1500
      - Not billed
    answer: 1
    why: Observation is an outpatient service even though the patient is in a bed. It's billed on an outpatient TOB with observation hours.
---

## Two sides of one visit

When a patient is treated in a hospital, at least two kinds of providers bill for the same visit:

- The **hospital (facility)** bills for the room, nursing, equipment, supplies, drugs, operating room time and other overhead. This is **hospital** or **institutional** billing.
- The **physicians and other practitioners** bill for their own work: examining, operating, reading images. This is **professional** billing.

Each sends its own claim to the same payer, and each gets its own ERA.

## Side by side

| | Hospital (institutional) billing | Professional billing |
|---|---|---|
| Who bills | Hospitals, SNFs, home health, hospice, ASCs (for Medicare, ASCs bill on 837P), dialysis facilities | Physicians, NPs, PAs, therapists, labs, ambulance, DME suppliers |
| Claim form | **UB-04 / 837I** | **CMS-1500 / 837P** |
| Diagnosis codes | ICD-10-CM with POA indicators (inpatient) | ICD-10-CM |
| Procedure codes | **ICD-10-PCS** (inpatient), CPT/HCPCS (outpatient) | CPT/HCPCS |
| Other key codes | **Revenue codes**, type of bill, condition, occurrence and value codes, discharge status | **Place of service**, modifiers |
| Medicare payment (inpatient) | **MS-DRG** per stay (IPPS) | Physician fee schedule per service |
| Medicare payment (outpatient) | **APCs** under OPPS | Physician fee schedule at the **facility rate** |
| Typical claim size | Large; many lines; thousands to hundreds of thousands of dollars | Smaller; a few lines |
| Coders | Facility coders (often CCS-certified); DRG validation | Professional coders (often CPC-certified) |
| AR focus | Fewer, higher-value accounts; DRG and level-of-care disputes; medical records reviews | Many lower-value claims; volume work; coding and modifier denials |

## Professional and technical components

Many diagnostic services have two parts:

- **Professional component (PC):** the physician's interpretation and report. Billed with modifier **26**.
- **Technical component (TC):** the equipment, supplies and technician. Billed with modifier **TC**.
- **Global:** both parts, billed with no modifier, when one provider owns the equipment and does the interpretation (for example, an imaging center that employs the radiologist).

In a hospital, the radiologist bills **-26** on a CMS-1500 and the hospital bills the technical part on a UB-04 (no TC modifier needed on the facility claim).

## Medicare payment rules that only make sense together

### Three-day payment window (the “72-hour rule”)
For Medicare, outpatient **diagnostic** services and related **non-diagnostic** services that the admitting hospital (or a hospital it owns) provides in the **three days before** an inpatient admission are **bundled into the inpatient claim**. For certain hospitals (for example psychiatric hospitals and units), the window is one day. Professional services aren't bundled, but physicians in hospital-owned practices may need modifier **PD** on related services in the window.

### Inpatient versus observation
- **Inpatient:** the doctor writes an inpatient admission order. Under Medicare's **two-midnight rule**, inpatient admission is generally appropriate when the doctor expects the patient to need hospital care crossing at least two midnights.
- **Observation:** an **outpatient** service to decide whether the patient needs admission. Billed on an outpatient TOB (013x) with revenue code **0762** and HCPCS for observation hours.
- Medicare patients in observation for more than 24 hours must receive the **Medicare Outpatient Observation Notice (MOON)**.
- Observation status affects the patient's costs and their eligibility for Medicare SNF coverage, which needs a **three-day qualifying inpatient stay**.

### Facility versus non-facility physician rates
A doctor's office visit in a hospital outpatient department (POS 22 or 19) is paid at the **facility rate**, which is lower than the office rate, because the hospital also bills a facility fee.

### Provider-based (hospital outpatient) clinics
When a hospital owns a clinic as an outpatient department, the patient may receive **two bills** for one clinic visit: a professional claim and a facility claim. This often surprises patients and generates billing calls.

## Example: one surgery, many claims

!!! example "Outpatient knee arthroscopy at a hospital"
    | Who | Claim | Codes |
    |---|---|---|
    | Hospital | UB-04, TOB 0131 | Revenue 0360 (OR) with 29881, 0370 (anesthesia), 0710 (recovery), 0250 (pharmacy), 0272 (supplies) |
    | Orthopedic surgeon | CMS-1500, POS 22 | 29881-RT |
    | Anesthesiologist | CMS-1500, POS 22 | 01400-AA with time |
    | Pathologist (if tissue sent) | CMS-1500 | 88304 or 88305 with -26 if the hospital lab bills the technical part |

    A denial on one claim doesn't affect the others, but an authorization issue often hits all of them.

## How AR work differs

| | Hospital AR | Professional AR |
|---|---|---|
| Typical worklist | Fewer accounts, higher balances | Thousands of small claims |
| Common denials | Authorization for inpatient days, level of care (inpatient vs observation), DRG downgrades, medical records requests, itemized bill reviews, readmissions | Coding and modifier denials, eligibility, credentialing, frequency limits, bundling |
| Payer contacts | Often clinical review teams, case management | Claims representatives |
| Documents | Itemized bill, full medical record, discharge summary | Office note, procedure note |
| Underpayment checks | Complex (DRG, outlier, carve-outs, per diems) | Fee schedule lookups per code |

!!! mistake "Auditor's red flag"
    Outpatient services within the 3-day payment window billed separately instead of on the inpatient claim. Medicare recovers them in post-payment reviews.

!!! interview "If an interviewer asks “What's the difference between hospital and professional billing?”"
    “Hospital billing covers the facility's charges, such as room, nursing, supplies and equipment, on the UB-04 or 837I, using revenue codes, type of bill and, for inpatients, ICD-10-PCS, and Medicare pays inpatients by DRG and outpatients by APC. Professional billing covers the physician's or practitioner's services on the CMS-1500 or 837P using CPT and HCPCS with place of service and modifiers, paid under the physician fee schedule. One hospital visit usually produces both claims.”
