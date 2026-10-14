---
title: Place of service and revenue code reference
short: POS and revenue codes
description: The place of service codes for professional claims and the revenue codes for facility claims that you'll see every day, with how each one affects payment.
order: 10
level: Beginner
keywords: place of service codes POS 11 21 22 23 24 02 10 19 31 32 81 revenue codes 0450 0300 0250 0636 0360 0120 0762 type of bill reference
---

## Which code goes where

- **Place of service (POS)** codes go on **professional** claims (CMS-1500 box 24B, 837P). They say where the patient was when the service was given.
- **Revenue codes** go on **facility** claims (UB-04 FL 42, 837I). They say which hospital department or type of charge each line is.
- Facility claims show the setting through the **type of bill** (FL 4) instead of a POS code. See the [UB-04 guide](/forms-billing/ub-04/).

## Place of service codes

| POS | Setting | Payment effect for physicians (Medicare) |
|---|---|---|
| 02 | Telehealth provided other than in the patient's home | Facility rate in most cases |
| 03 | School | Non-facility |
| 04 | Homeless shelter | Non-facility |
| 10 | Telehealth provided in the patient's home | Non-facility rate in most cases |
| 11 | Office | Non-facility (higher) rate |
| 12 | Home | Non-facility |
| 13 | Assisted living facility | Non-facility |
| 15 | Mobile unit | Non-facility |
| 17 | Walk-in retail health clinic | Non-facility |
| 19 | Off-campus outpatient hospital | Facility (lower) rate |
| 20 | Urgent care facility | Non-facility |
| 21 | Inpatient hospital | Facility |
| 22 | On-campus outpatient hospital | Facility |
| 23 | Emergency room, hospital | Facility |
| 24 | Ambulatory surgical center | Facility |
| 31 | Skilled nursing facility | Facility |
| 32 | Nursing facility | Non-facility |
| 34 | Hospice | Facility |
| 41 / 42 | Ambulance, land / air or water | Ambulance fee schedule |
| 49 | Independent clinic | Non-facility |
| 50 | Federally qualified health center | FQHC rules |
| 51 | Inpatient psychiatric facility | Facility |
| 53 | Community mental health center | Facility |
| 61 | Comprehensive inpatient rehabilitation facility | Facility |
| 65 | End-stage renal disease treatment facility | Non-facility |
| 71 / 72 | Public health clinic / rural health clinic | Non-facility / RHC rules |
| 81 | Independent laboratory | Lab fee schedule |
| 99 | Other place of service | Varies |

Telehealth POS and payment rules have changed often since 2020. Confirm the current rule for each payer.

## Revenue codes

Revenue codes are four digits with a leading zero. The first three digits are the category; the last digit gives detail (0 is usually “general”).

| Code | Department or charge | Needs HCPCS on outpatient claims? |
|---|---|---|
| 0001 | Total charges (last line) | No |
| 011x | Room and board, private | No |
| 012x | Room and board, semi-private (2 beds) | No |
| 020x | Intensive care | No |
| 021x | Coronary care | No |
| 025x | Pharmacy (general) | Usually no |
| 0270 / 0272 / 0278 | Supplies / sterile supplies / other implants | Payer-specific; implants often yes |
| 030x / 031x | Laboratory / pathology lab | Yes |
| 032x | Radiology, diagnostic | Yes |
| 033x | Radiology, therapeutic and chemotherapy administration | Yes |
| 035x | CT scan | Yes |
| 036x | Operating room services | Yes |
| 037x | Anaesthesia | Yes |
| 038x / 039x | Blood and blood components / blood storage and processing | Yes |
| 040x | Other imaging (mammography, ultrasound) | Yes |
| 042x / 043x / 044x | Physical / occupational / speech therapy | Yes, with GP/GO/GN |
| 045x | Emergency room | Yes (ED visit level) |
| 046x | Pulmonary function | Yes |
| 048x | Cardiology (including cath lab 0481) | Yes |
| 049x | Ambulatory surgical care | Yes |
| 051x | Clinic | Yes |
| 061x | MRI | Yes |
| 0636 | Drugs requiring detailed coding | Yes, with NDC |
| 071x | Recovery room | Yes, payer-specific |
| 073x | EKG/ECG | Yes |
| 0762 | Observation room | Yes (hours) |
| 082x–088x | Dialysis | Yes |
| 096x–098x | Professional fees (when the facility bills them) | Yes |

!!! mistake "Auditor's red flag"
    POS 11 on a claim for a doctor who saw the patient in a hospital outpatient department. The office rate is higher, so this is an overpayment that payers recover in audits. Match POS to where the patient was, not where the doctor's office is.
