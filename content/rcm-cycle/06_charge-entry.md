---
title: Charge capture and charge entry
short: Charge entry
description: How services become charges in the billing system, the fields that must be right, charge lag, missed charges, and the checks charge entry teams run before release.
order: 6
level: Beginner
keywords: charge entry charge capture charge lag missed charges place of service units fee schedule batch reconciliation
quiz:
  - q: What is charge lag?
    options:
      - The time between the date of service and the date the charge is entered
      - The time a payer takes to pay
      - The difference between billed and allowed amounts
      - A clearinghouse delay
    answer: 0
    why: Charge lag measures how long it takes to get a service into the billing system. Long lag delays cash and risks timely filing.
  - q: A doctor sees a patient in the hospital. Which place of service code fits an inpatient visit?
    options:
      - "11"
      - "21"
      - "22"
      - "23"
    answer: 1
    why: POS 21 is inpatient hospital. 11 is office, 22 is on-campus outpatient hospital, 23 is emergency department.
  - q: How do you detect missed charges?
    options:
      - Wait for patient complaints
      - Reconcile scheduled and completed appointments, procedures and orders against charges entered
      - Check the ERA only
      - Ask the payer
    answer: 1
    why: Charge reconciliation compares what happened (appointments, procedure logs, orders) with what was billed, so nothing is missed.
---

## From service to charge

**Charge capture** is recording every billable service. **Charge entry** is putting those charges, with their codes and details, into the practice management (PM) or hospital billing system so a claim can be created.

In modern EHRs, much of this is automatic: the provider signs the note and selects codes, and charges flow into a **charge review** or **work queue**. Offshore charge entry teams still key charges from superbills, scanned encounter forms or coding sheets, and they review the auto-generated ones before release.

## Fields that must be right

| Field | Why it matters |
|---|---|
| Patient and account | Wrong patient means wrong claim, and a HIPAA issue |
| Date of service | Must match the note; drives eligibility and code validity |
| Rendering provider | Must be credentialed with the payer |
| Billing provider and location | Decides the NPI, tax ID and pay-to address on the claim |
| Referring or ordering provider | Required for referrals, labs, imaging, DME |
| Place of service (POS) | Changes payment and must match where care happened |
| CPT/HCPCS codes and modifiers | Exactly as coded |
| Units | Must match time or quantity documented |
| Diagnosis codes and pointers | Link each line to its diagnosis |
| Charge amount | Pulled from the fee schedule; should never be keyed by hand |
| Authorization number | Must print in box 23 or FL 63 when required |
| Accident indicators and dates | Needed for injury claims |

## Place of service codes you'll see most

| POS | Setting |
|---|---|
| 02 | Telehealth provided other than in the patient's home |
| 10 | Telehealth provided in the patient's home |
| 11 | Office |
| 12 | Home |
| 19 | Off-campus outpatient hospital |
| 20 | Urgent care facility |
| 21 | Inpatient hospital |
| 22 | On-campus outpatient hospital |
| 23 | Emergency room, hospital |
| 24 | Ambulatory surgical center |
| 31 | Skilled nursing facility |
| 32 | Nursing facility |
| 81 | Independent laboratory |

POS is used on professional claims (CMS-1500). Facility claims use the **type of bill** instead.

## Charge lag

**Charge lag** is the number of days between the date of service and the date the charge is entered. Targets are usually **under 3–5 days** for professional charges.

Long charge lag:

- delays cash,
- shortens the time left before **timely filing**, and
- makes errors harder to fix, because the provider no longer remembers the visit.

Common causes: unsigned notes, coding backlogs, missing superbills, and charges held for information (missing referral, missing insurance).

## Missed charges

A service performed but never billed is lost revenue that no one notices, because no claim means no denial. Teams find them through **charge reconciliation**:

- **Appointment reconciliation:** every completed appointment should have a charge (or a documented no-charge reason).
- **Procedure and order logs:** injections, labs, imaging and procedures done in the office should all have charges.
- **Hospital rounding lists:** for doctors seeing inpatients, each day's visit should be billed.
- **Supply and drug logs:** injectables and supplies are commonly missed.

## Pre-release checks

Before releasing a batch, charge entry teams usually check:

1. **Batch totals:** number of encounters and total charges match the source.
2. **Demographics and insurance:** filled in and in the right order.
3. **Code validity:** no deleted codes; modifiers present where needed.
4. **Provider set-up:** rendering provider is credentialed with that payer on that date.
5. **Holds:** missing authorization or referral, missing documentation.

!!! tip "Charge entry and auditing"
    QA auditors in charge entry usually measure accuracy per field (wrong DOS, wrong units, wrong provider, wrong POS). Even a 1% error rate on 10,000 charges a month means 100 claims that will come back as rejections or denials.

## Common charge entry errors and their denials

| Error | Likely result |
|---|---|
| Wrong DOS | Eligibility failure, duplicate denial, or invalid code for date |
| Wrong rendering provider | CO-B7, CO-185, or credentialing denial |
| Wrong POS | CO-5 (POS inconsistent) or wrong payment rate |
| Units too high | CO-151 or MUE denial |
| Missing modifier | CO-4 |
| Missing referring NPI | Rejection, or CO-16 with a remark code |
| Missing auth number | CO-197 even when an auth exists |
| Duplicate entry | CO-18 |

!!! mistake "Auditor's red flag"
    Units keyed from habit rather than from documentation, especially for drugs and timed therapy codes. Unit errors are the most expensive charge entry mistake because they multiply the charge.

!!! interview "If an interviewer asks “What is charge entry?”"
    “Charge entry is entering the services performed into the billing system with the correct patient, date of service, providers, place of service, CPT and modifiers, units, diagnosis pointers and charges, so a clean claim can be created. We monitor charge lag and reconcile appointments and procedures against charges so nothing is missed.”
