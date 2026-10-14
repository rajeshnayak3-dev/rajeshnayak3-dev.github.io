---
title: "Provider identifiers: NPI, TIN, PTAN, taxonomy and CLIA"
short: Provider identifiers
description: Every number that identifies a provider on a claim, what it looks like, who issues it, where it goes on the CMS-1500 and UB-04, and the mismatches that cause rejections.
order: 8
level: Beginner
keywords: NPI Type 1 Type 2 NPPES TIN EIN SSN W-9 PTAN taxonomy code CLIA number UPIN Medicaid provider number provider identifiers
quiz:
  - q: A group practice bills under its organization NPI. What type is it?
    options:
      - Type 1
      - Type 2
      - PTAN
      - Taxonomy
    answer: 1
    why: Type 1 NPIs are for individuals; Type 2 NPIs are for organizations such as groups, hospitals and labs.
  - q: Which identifier must match the billing NPI on a claim, or the payer rejects or pays the wrong entity?
    options:
      - The patient's member ID
      - The tax identification number (TIN/EIN)
      - The CLIA number
      - The diagnosis code
    answer: 1
    why: Payers pay against the TIN. An NPI-TIN pair that doesn't match the payer's enrollment record rejects or denies.
  - q: What is the format of a CLIA number?
    options:
      - 10 characters, such as 05D1234567
      - 11 digits
      - Starts with R and 8 digits
      - 9 digits
    answer: 0
    why: CLIA numbers are 10 characters, with the letter D in the third position.
---

## The identifiers at a glance

| Identifier | Format | Issued by | Identifies | On the CMS-1500 | On the UB-04 |
|---|---|---|---|---|---|
| **NPI, Type 1** | 10 digits | CMS, through NPPES | An individual provider | 24J (rendering), 17b (referring), 33a if billing as an individual | FL 76–79 (attending, operating, other) |
| **NPI, Type 2** | 10 digits | CMS, through NPPES | An organization (group, hospital, lab, DME supplier) | 33a (billing), 32a (service facility) | FL 56 (billing provider) |
| **TIN / EIN** | 9 digits (XX-XXXXXXX) | IRS | The business that gets paid | Box 25 | FL 5 |
| **SSN** (as TIN) | 9 digits | Social Security | A solo provider billing as an individual | Box 25 (SSN checkbox) | Rare |
| **PTAN** | Alphanumeric, varies by MAC | The Medicare contractor | A provider's Medicare enrollment | Not on claims; used on MAC portals and calls | Not on claims |
| **Taxonomy code** | 10 characters, ending in X (e.g. 207R00000X) | NUCC code set | Provider type and specialty | Shaded 24J or 33b with qualifier **PXC**, when required | FL 81 with qualifier **B3** |
| **CLIA number** | 10 characters, D in position 3 (e.g. 05D1234567) | CMS, through state agencies | A certified laboratory location | Box 23 | Required by some payers in the electronic claim; varies |
| **Medicaid provider ID** | Varies by state | State Medicaid | Enrollment with that state | Payer-specific | Payer-specific |

## NPI: the one you'll use most

- Every HIPAA-covered provider must have an **NPI**. It never changes, even if the provider moves or changes specialty.
- Anyone can look up an NPI on the public **NPPES NPI Registry**, which shows name, address, taxonomy and type. It's the quickest way to confirm a provider's details during a call.
- **Type 1** for individuals (physicians, NPs, PAs, therapists). **Type 2** for organizations.

## TIN: who gets paid

The **taxpayer identification number** tells the payer which business receives the money. Groups use an **EIN** from the IRS.

- The provider gives payers a **Form W-9** with its legal name and TIN. Payers ask for a new W-9 when the name, address or TIN changes, and often before reissuing a check.
- Payment problems after a practice is sold or merged are usually TIN problems: claims go out under the new TIN before payers have updated enrollment.

## PTAN: the Medicare enrollment number

After a provider enrolls in Medicare (through **PECOS**), the MAC assigns a **PTAN** (provider transaction access number). It replaced older legacy Medicare numbers (often called PINs or UPINs; the **UPIN** was the old physician ID used before NPIs). You'll need the PTAN, NPI and TIN together to log in to MAC portals or use their phone systems.

## Taxonomy code

A 10-character code from the NUCC list that describes provider type and specialty, such as **207Q00000X** (family medicine) or **2084P0800X** (psychiatry). Some payers, especially Medicaid programs, require it on claims so they can match the provider to the right enrollment.

## CLIA number

Every site that tests human specimens needs a **CLIA certificate**. Physician offices that do simple tests often have a **certificate of waiver** and must bill those tests with modifier **QW** for Medicare. The CLIA number must match the location where the test was done.

## Mismatches that cause rejections and denials

| Mismatch | Result |
|---|---|
| Billing NPI linked to a different TIN at the payer | Rejection, or CO-208 (NPI not matched) |
| Rendering NPI not enrolled with the payer | CO-B7 or CO-185 |
| Taxonomy missing or not matching enrollment (Medicaid) | Rejection or CO-16 |
| CLIA missing, invalid or not covering the test level | CO-16 with MA120, or CO-B7 |
| P.O. box used as the billing address (837P) | Rejection |
| Old TIN still in the billing system after an ownership change | Payments to the wrong entity, or rejections |

!!! mistake "Auditor's red flag"
    Using the individual NPI in box 33 for a group, or the group NPI in box 24J. The billing provider (box 33) is usually the group's Type 2 NPI; the rendering provider (24J) is always the individual's Type 1 NPI.

!!! interview "If an interviewer asks “What is the difference between Type 1 and Type 2 NPI?”"
    “Both are 10-digit National Provider Identifiers from CMS. Type 1 identifies an individual provider, like a physician or nurse practitioner, and goes in the rendering field, box 24J. Type 2 identifies an organization, like a group practice or hospital, and is usually the billing provider in box 33. The billing NPI must match the TIN the payer has on file.”
