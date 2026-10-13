---
title: Claim scrubbing, submission and clearinghouses
short: Claim submission
description: How a claim is checked, sent through a clearinghouse and accepted or rejected, the acknowledgments to watch, and why a rejection is not a denial.
order: 7
level: Beginner
keywords: claim scrubber clearinghouse 837P 837I 999 277CA rejection vs denial payer ID paper claim timely filing proof
quiz:
  - q: What is the key difference between a rejection and a denial?
    options:
      - There is none
      - A rejected claim never entered the payer's adjudication system; a denied claim was processed and refused payment
      - A denial is always the patient's fault
      - Rejections only happen on paper claims
    answer: 1
    why: Rejections fail format or front-end checks and must be corrected and resubmitted as new claims. Denials were adjudicated and appear on the ERA; they need correction, reconsideration or appeal.
  - q: Which transaction confirms the payer accepted the claim into its system?
    options:
      - 999
      - 277CA
      - 835
      - 270
    answer: 1
    why: The 999 confirms the file's syntax was accepted. The 277CA (claim acknowledgment) reports whether each claim was accepted or rejected by the payer or clearinghouse.
  - q: Why keep clearinghouse acceptance reports?
    options:
      - They're required by HIPAA to be printed
      - They prove timely filing if the payer says it never received the claim
      - They replace the ERA
      - They are used for patient statements
    answer: 1
    why: An acceptance report showing the payer received the claim within the limit is the standard proof of timely filing.
---

## Step 1: scrubbing

Before a claim leaves, a **claim scrubber** (built into the billing system or clearinghouse) checks it against thousands of rules:

- Required fields present (NPI, tax ID, member ID, DOB, diagnosis)
- Valid codes for the date of service
- Diagnosis pointer present on every line
- Age and sex consistent with codes
- NCCI pairs and MUE unit limits
- Payer-specific rules (for example, a payer that requires the NDC with drug codes)

Claims with errors go to an **edit work queue**. The billing team fixes them before release. A high **clean claim rate** means most claims pass first time.

## Step 2: the clearinghouse

A **clearinghouse** is a middleman that takes claims from many providers, checks them, converts them into each payer's required format, and routes them. Common clearinghouses include Availity, Waystar, Change Healthcare (Optum), Trizetto and Office Ally.

Why providers use them:

- One connection reaches thousands of payers.
- Extra edits catch errors before the payer sees them.
- Reports show what was accepted, rejected and paid.
- They also handle eligibility (270/271), claim status (276/277) and remittances (835).

Some payers, including Medicare MACs, also accept claims directly.

## The claim formats

| Claim | Paper form | Electronic format |
|---|---|---|
| Professional | CMS-1500 | 837P |
| Institutional (facility) | UB-04 (CMS-1450) | 837I |
| Dental | ADA claim form | 837D |

Medicare requires electronic claims from most providers. Paper is still used for some small payers, secondary claims that need a primary EOB attached, and some workers' compensation and auto claims.

## Step 3: acknowledgments

After submission, watch for these responses:

1. **999 Implementation Acknowledgment.** Did the file have valid structure? A rejected 999 means the whole batch failed, usually a technical problem.
2. **Clearinghouse report.** Claims rejected by clearinghouse edits.
3. **277CA Claim Acknowledgment.** For each claim, whether the **payer** accepted it into its system or rejected it, with a reason (category and status codes).

Once a claim is accepted on the 277CA, it's in the payer's adjudication system and will eventually appear on an ERA as paid, denied or pended.

## Rejection versus denial

This is the single most common fresher interview question.

| | Rejection | Denial |
|---|---|---|
| When | Before adjudication | After adjudication |
| Why | Format errors, missing or invalid data, patient not found, wrong payer ID | Payer rules: eligibility, authorization, coverage, medical necessity, coding, timely filing |
| Where you see it | Clearinghouse report, 277CA | ERA (835) or EOB with CARC/RARC codes |
| Is it in the payer's system? | No | Yes |
| Appeal rights? | No; nothing to appeal | Yes |
| How to fix | Correct and resubmit as a **new** claim | Correct and send a **corrected claim**, request reconsideration, or appeal |
| Timely filing | Clock keeps running; the claim was never received | Payer has the original receipt date |

!!! warning "Rejections can quietly kill claims"
    Because a rejected claim never reached the payer, nothing appears on the ERA. If no one works the rejection report, the claim sits until timely filing passes. Rejection queues should be cleared daily.

## Common rejections

- Subscriber or patient not found (name, DOB or ID mismatch)
- Invalid or missing NPI, or NPI not matching the tax ID
- Invalid payer ID, or payer not enrolled for electronic claims from this provider
- Invalid diagnosis or procedure code for the date
- Missing referring or ordering provider
- Billing provider address is a P.O. box (not allowed in the billing address on 837)
- Service date in the future, or after the claim date

## Timely filing

Every payer sets a **timely filing limit**: the time from the date of service (or discharge) within which the claim must be received.

| Payer | Typical limit (always confirm) |
|---|---|
| Medicare (Original) | 12 months from date of service |
| Medicaid | Varies by state, often 90 days to 12 months |
| Commercial plans | Often 90 or 180 days, set by contract |
| Medicare Advantage | Often 90 days to 12 months, by contract |
| VA Community Care | 180 days from date of service |
| TRICARE | 1 year from date of service |

Claims received after the limit deny with **CO-29**. To appeal one, you need **proof of timely filing**: a clearinghouse acceptance report or 277CA showing the payer received the original claim on time, or a payer letter or reference number.

## Secondary and tertiary claims

After the primary payer processes, the claim goes to the secondary payer with the primary's payment information:

- **Electronically:** the 837 carries the primary payer's adjudication (paid amount, adjustments with CARC codes) at line level.
- **Crossover:** Medicare automatically forwards many claims to Medigap and Medicaid plans (the ERA shows remark **MA18** or **N89**).
- **On paper:** the primary EOB is attached.

!!! interview "If an interviewer asks “What is a clearinghouse?”"
    “A clearinghouse is an intermediary between providers and payers. It receives claims from the billing system, runs edits, converts them to each payer's format and forwards them. It returns acknowledgment and rejection reports, and often handles eligibility, claim status and ERAs. Its acceptance report is also our proof of timely filing.”
