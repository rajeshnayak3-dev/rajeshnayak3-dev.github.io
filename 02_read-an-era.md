---
title: How to read an ERA and decode CARC and RARC codes
short: Read an ERA
description: Group codes CO, PR, OA and PI, claim adjustment reason codes, remittance advice remark codes, and a step-by-step walk through a real-looking remittance.
order: 2
level: Beginner
keywords: ERA EOB remittance advice group codes CO PR OA PI CARC RARC remark codes MA130 N290 how to read ERA
quiz:
  - q: An ERA line shows PR-2 $40. Who owes the $40?
    options:
      - The provider writes it off
      - The patient (or their secondary payer)
      - The payer will pay it later
      - The clearinghouse
    answer: 1
    why: PR means patient responsibility. CARC 2 is coinsurance.
  - q: A denial is coded CO-50. Can the provider bill the patient?
    options:
      - Yes, always
      - Generally no; CO means contractual obligation, so the provider is liable unless a valid waiver allows otherwise
      - Only if the amount is under $50
      - Yes, after 30 days
    answer: 1
    why: The CO group code tells you the payer considers the amount the provider's liability under the contract or law.
  - q: What is the main job of a RARC?
    options:
      - It replaces the CARC
      - It gives extra explanation for an adjustment, or provides information
      - It sets the payment amount
      - It identifies the patient
    answer: 1
    why: RARCs add detail (for example, which field is missing) or alerts. They don't stand alone as the reason for an adjustment.
---

## The three layers of an adjustment

Every adjustment on an ERA is described by up to three codes:

1. **Group code:** *who* is responsible for the adjusted amount.
2. **Claim adjustment reason code (CARC):** *why* the amount was adjusted.
3. **Remittance advice remark code (RARC):** *more detail* about the reason, or an alert.

Written together like **CO-16 / N290**: contractual obligation, claim lacks information, and the missing item is the rendering provider's identifier.

These codes are national standards maintained by **X12** (CARC and RARC committees), and they're updated three times a year. Payers must use them on 835s.

## Group codes

| Group | Name | Meaning | Can the patient be billed? |
|---|---|---|---|
| **CO** | Contractual obligation | The provider is responsible under the contract or law. | **No** |
| **PR** | Patient responsibility | The patient (or their next payer) owes this amount. | **Yes** |
| **OA** | Other adjustment | Doesn't fit CO or PR. Common with OA-23 (prior payer impact) and some informational adjustments. | Depends; usually no |
| **PI** | Payer initiated reduction | The payer reduced payment for a reason it believes isn't the patient's responsibility, without a contract basis (common with non-contracted providers). | **No** |

!!! warning "The same reason code can carry different groups"
    **CO-50** (not medically necessary, provider liable) and **PR-50** (not medically necessary, but the patient signed a valid ABN or waiver) have the same reason but opposite next steps. Always read the group code first.

## CARC basics

CARCs are short numeric or alphanumeric codes, such as **1, 2, 3, 16, 45, 97, 197, B7**. Some you'll see on almost every ERA:

| CARC | Meaning (short) |
|---|---|
| 1 / 2 / 3 | Deductible / coinsurance / copay |
| 45 | Charge exceeds fee schedule or contracted amount |
| 16 | Claim lacks information or has billing errors (with a RARC) |
| 18 | Exact duplicate |
| 22 | May be covered by another payer (COB) |
| 23 | Impact of prior payer adjudication |
| 27 | Expenses after coverage terminated |
| 29 | Timely filing expired |
| 50 | Not medically necessary |
| 96 | Non-covered charge |
| 97 | Included in payment for another service |
| 197 | Authorization absent |
| 253 | Sequestration reduction (Medicare) |

## RARC basics

RARCs start with **M**, **N** or **MA**. Some explain a CARC; some are alerts.

| RARC | Meaning (short) |
|---|---|
| N290 | Missing or invalid rendering provider identifier |
| M51 | Missing, incomplete or invalid procedure code |
| M76 | Missing, incomplete or invalid diagnosis or condition |
| MA04 | Secondary payment can't be considered without primary payer information |
| MA130 | Incomplete or invalid information; no appeal rights; submit a new claim |
| N130 | Consult plan benefit documents for coverage information |
| N115 | Decision based on a Local Coverage Determination (LCD) |
| N386 | Decision based on a National Coverage Determination (NCD) |
| MA18 | Claim forwarded to the supplemental insurer (crossover) |
| N479 | Missing Explanation of Benefits (coordination of benefits or MSP) |
| M80 | Not covered when performed during the same session or date as a previously processed service |

!!! tip "CO-16 is never the full story"
    CARC 16 just says “information is missing or wrong”. The RARC tells you *what*. Working a CO-16 without reading its RARC is the fastest way to resubmit the claim and get the same denial again.

## Claim status codes on the ERA

Each claim on an 835 also has a **claim status** (CLP02):

| Code | Meaning |
|---|---|
| 1 | Processed as primary |
| 2 | Processed as secondary |
| 3 | Processed as tertiary |
| 4 | Denied |
| 19 | Processed as primary, forwarded to additional payer(s) |
| 20 | Processed as secondary, forwarded to additional payer(s) |
| 22 | Reversal of previous payment |
| 23 | Not our claim, forwarded to additional payer(s) |

Status 22 lines are **takebacks**; status 19 tells you a crossover happened.

## Walk through an example

!!! example "Sample remittance (fictional)"
    **Payer claim # 2226104500871**, Patient: Jordan Avery, DOS 09/12/2026, Claim status 1 (processed as primary)

    | Line | Code | Billed | Allowed | Paid | Adjustments | Remarks |
    |---|---|---|---|---|---|---|
    | 1 | 99214-25 | $210.00 | $128.00 | $102.40 | CO-45 $82.00; PR-2 $25.60 | |
    | 2 | 20610-RT | $260.00 | $0.00 | $0.00 | CO-97 $260.00 | M80 |
    | 3 | J1030 × 1 | $45.00 | $0.00 | $0.00 | CO-16 $45.00 | M119 |

    **How to read it:**

    - **Line 1** paid correctly. $102.40 + $82.00 + $25.60 = $210.00. Post it and transfer $25.60 to the secondary or patient.
    - **Line 2** was denied as included in another service (CO-97), with M80 (not covered when performed with a previously processed service). The injection was bundled. Check whether the E/M or another procedure was billed incorrectly, whether modifier 25 belonged on the E/M, and whether NCCI actually bundles these codes. Here, the E/M has 25 and 20610 normally pays separately, so ask the payer to **reprocess** or send a **reconsideration**.
    - **Line 3** was denied for missing information (CO-16) with **M119** (missing, incomplete or invalid NDC). Add the NDC in the right format and send a **corrected claim**.

## Reading paper EOBs

Paper EOBs show the same information but each payer uses its own layout and sometimes its **own reason codes**, with a legend at the bottom. Always read the legend; never assume a payer's internal code means the same as a CARC with the same number.

!!! interview "If an interviewer asks “What are group codes?”"
    “Group codes show who is responsible for an adjustment on the ERA. CO is contractual obligation, the provider's responsibility, so we can't bill the patient. PR is patient responsibility, such as deductible, coinsurance and copay. OA is other adjustments, like OA-23 for prior payer impact. PI is payer-initiated reductions, also not billable to the patient. The CARC gives the reason and the RARC adds detail.”
