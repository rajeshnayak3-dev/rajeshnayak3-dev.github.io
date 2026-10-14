---
title: EDI transactions every biller should know
short: EDI transactions
description: The HIPAA X12 transactions behind eligibility, claims, status, authorizations and payments, explained in plain language with what each one looks like in daily work.
order: 4
level: Intermediate
keywords: EDI X12 HIPAA transactions 270 271 276 277 277CA 278 275 834 835 837P 837I 999 TA1 EFT ERA enrollment
quiz:
  - q: Which transaction carries the remittance advice?
    options:
      - 837
      - 835
      - 834
      - 820
    answer: 1
    why: The 835 is the electronic remittance advice (ERA), explaining payments and adjustments by claim and line.
  - q: Which pair is used for claim status inquiries?
    options:
      - 270/271
      - 276/277
      - 278
      - 999
    answer: 1
    why: The 276 asks for claim status; the 277 responds.
  - q: Before a provider can receive ERAs from a payer, what is usually needed?
    options:
      - Nothing
      - ERA enrollment with that payer, linking the provider's NPI or tax ID to the clearinghouse
      - A paper claim
      - Patient consent
    answer: 1
    why: Payers require ERA (and EFT) enrollment so they know where to send 835 files and payments.
---

## What EDI is

**Electronic data interchange (EDI)** is the standard way computer systems in US healthcare exchange information. Under HIPAA, payers and providers must use the **ASC X12 version 5010** formats for these transactions. Each one has a three-digit number.

You don't need to read raw X12 to work in RCM, but you'll see the numbers on reports, portals and job descriptions every day.

## The transactions

| Transaction | Name | Direction | Daily use |
|---|---|---|---|
| **270** | Eligibility inquiry | Provider → payer | “Is this member covered, and what are the benefits?” |
| **271** | Eligibility response | Payer → provider | Coverage dates, plan, deductible, copay, other insurance |
| **276** | Claim status inquiry | Provider → payer | “What's happened to this claim?” |
| **277** | Claim status response | Payer → provider | Received, pending, paid or denied, with status codes |
| **277CA** | Claim acknowledgment | Payer or clearinghouse → provider | Accepted or rejected into the payer's system |
| **278** | Health care services review | Both ways | Prior authorization and referral requests and responses |
| **275** | Additional information (attachments) | Provider → payer | Medical records sent electronically |
| **837P** | Professional claim | Provider → payer | CMS-1500 equivalent |
| **837I** | Institutional claim | Provider → payer | UB-04 equivalent |
| **837D** | Dental claim | Provider → payer | ADA form equivalent |
| **835** | Health care claim payment/advice | Payer → provider | The ERA: payments and adjustments |
| **999** | Implementation acknowledgment | Receiver → sender | Was the file's structure valid? |
| **TA1** | Interchange acknowledgment | Receiver → sender | Was the outer envelope valid? |
| **834** | Benefit enrollment | Employer → payer | Adds and removes members (not used by providers) |
| **820** | Premium payment | Employer → payer | Premium payments (not used by providers) |

## The claim's EDI journey

1. Billing system creates an **837** batch.
2. Clearinghouse returns a **999** (file accepted) and its own edit report.
3. Payer returns a **277CA** for each claim (accepted or rejected).
4. Later, the payer sends an **835** with payment details and an **EFT** to the bank.
5. In between, the AR team can send **276** status inquiries and receive **277** responses.

## Inside an 837: loops and segments

X12 files are made of **segments** (lines starting with a code such as NM1 for names, CLM for claim, SV1 for a professional service line) grouped into **loops** (for example 2010BA for the subscriber, 2300 for claim information, 2400 for each service line). When a clearinghouse rejection says “Loop 2310B NM109 invalid”, it means the rendering provider's NPI is wrong.

| Loop | Holds |
|---|---|
| 2010AA | Billing provider |
| 2010BA | Subscriber |
| 2010BB | Payer |
| 2010CA | Patient (if different from subscriber) |
| 2300 | Claim information (diagnoses, dates, authorization) |
| 2310B | Rendering provider |
| 2320 / 2330 | Other payer information (for secondary claims) |
| 2400 | Service line |
| 2430 | Line-level adjudication from a prior payer |

## Inside an 835: what the poster sees

| Segment | Holds |
|---|---|
| BPR | Payment amount, method (EFT or check) and date |
| TRN | **Trace number** (EFT reference or check number) |
| CLP | Claim: patient control number, status, billed, paid, patient responsibility, payer claim number |
| CAS | **Adjustments**: group code, CARC and amount |
| SVC | Service line: code, billed, paid, units |
| LQ | Remark codes (RARCs) |
| PLB | Provider-level adjustments, such as recoupments (WO), interest (L6) and forward balances (FB) |

!!! example "A CAS segment"
    `CAS*CO*45*72.00~CAS*PR*2*24.00~`

    This line had a **$72.00 contractual adjustment** (CO-45) and **$24.00 coinsurance** owed by the patient (PR-2).

## Claim status codes (277)

The 277 and 277CA use **claim status category codes** and **claim status codes**:

- **A1, A2:** acknowledgment, received or accepted into adjudication
- **A3, A6, A7:** rejected, returned as unprocessable, or rejected for invalid information
- **P1–P5:** pending (for example P1 in process, P2 pending review)
- **F1–F4:** finalized (F1 paid, F2 denied, F3 revised, F4 adjudicated with no payment)
- **R codes:** requests for more information

A status of “A7 / 562” for example means the claim was rejected because an entity's NPI is invalid. The analyst fixes the NPI and resubmits.

## Enrollment you'll hear about

- **EDI enrollment:** registering the provider with a payer to send electronic claims through a specific clearinghouse.
- **ERA enrollment:** registering to receive 835s through the clearinghouse.
- **EFT enrollment:** registering the bank account for electronic payments (often through CAQH EnrollHub or the payer's portal).

A new provider or a change of clearinghouse without these steps means claims reject or payments come by paper check.

!!! mistake "Auditor's red flag"
    New providers or locations billed before ERA and EFT enrollment is complete. Payments arrive by paper check or stop altogether, and posting falls behind.

!!! interview "If an interviewer asks “What is an 835?”"
    “The 835 is the HIPAA electronic remittance advice. It tells the provider how each claim and service line was paid: billed, allowed, paid, patient responsibility and every adjustment with group codes, CARCs and RARCs. It also carries the trace number that matches the EFT deposit, and provider-level adjustments like recoupments. Payment posting teams load it to post payments automatically.”
