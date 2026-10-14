---
title: Secondary claims and failed crossovers
short: Secondary and crossover
description: Why balances get stuck after the primary pays. Secondary claims never sent, crossover failures, missing primary EOB data, and how to move the balance to the right payer or patient.
order: 5
level: Intermediate
keywords: secondary claim crossover MA18 N89 Medigap crossover failed secondary not billed tertiary claim primary EOB patient balance stuck
quiz:
  - q: The Medicare ERA shows remark MA18. What does it mean?
    options:
      - The claim was denied
      - Medicare forwarded the claim to the supplemental insurer (crossover)
      - The patient is QMB
      - The claim needs records
    answer: 1
    why: MA18 says the claim information was forwarded to the supplemental insurer. Don't bill the secondary separately unless the crossover fails.
  - q: Medicare paid 45 days ago with MA18, but the Medigap plan has no claim on file. What do you do?
    options:
      - Wait another 6 months
      - Bill the Medigap plan directly with the Medicare ERA information
      - Bill the patient
      - Appeal to Medicare
    answer: 1
    why: The crossover failed. Bill the secondary directly with the primary's adjudication.
---

## The stuck balance

After the primary payer pays, the remaining balance (usually deductible and coinsurance) should go to the **secondary** payer. If nothing happens next, the balance sits in AR, often under the primary payer's name, so no one notices it.

## Crossover claims

**Crossover** means the primary payer forwards the claim to the secondary automatically. Medicare does this through the **Coordination of Benefits Contractor** for:

- Medigap (Medicare Supplement) plans
- Medicaid (including QMB) programs
- Many retiree and employer supplemental plans
- TRICARE For Life

Signs on the Medicare ERA:

| Remark | Meaning |
|---|---|
| **MA18** | Claim forwarded to the supplemental insurer |
| **N89** | Payment information forwarded to more than one other payer |
| **MA07** | Claim forwarded to Medicaid |

Claim status **19** on the 835 also shows the claim was processed as primary and forwarded.

## When to bill the secondary yourself

- **No crossover remark** on the primary ERA.
- Crossover remark shown, but the secondary has **no claim on file** after about 30 days.
- The secondary isn't a crossover partner (most commercial secondaries).
- The primary is a commercial plan (commercial plans rarely cross over).

When you bill directly, include the primary's adjudication: paid amount and each adjustment with group and reason codes at line level (837 loops 2320 and 2430), or attach the primary EOB on paper.

!!! warning "Don't double-bill crossovers"
    If the ERA says MA18 and you also bill the Medigap plan the same day, the secondary may deny one as a duplicate (remark **N522**) or pay twice and later recoup. Wait for the crossover unless it has clearly failed.

## Common secondary problems

| Problem | Fix |
|---|---|
| Secondary never billed after primary payment | Bill now; check the secondary's timely filing (often counted from the primary's EOB date) |
| Secondary denies MA04 or N4 (primary information missing) | Resend with the primary adjudication data or EOB |
| Secondary denies as primary should pay (CO-22) when the order is right | Confirm COB with the patient; ask the secondary to update its records |
| Secondary pays $0 with OA-23 | Primary already paid more than the secondary allows; move any PR amount to the patient |
| Tertiary payer never billed | Bill after the secondary pays, with both prior adjudications |
| Medicaid secondary pays $0 for a QMB patient | Write off Medicare cost-sharing; don't bill the patient |

## Moving balances correctly

After each payer finalizes:

1. Post its payment and adjustments.
2. Transfer the remaining **patient responsibility** to the next payer in order.
3. Only after the last payer has processed, transfer what remains to the patient (respecting QMB, Medicaid and contract rules).

Billing systems use **financial class** or **responsible party** fields to show who owes the balance now. A balance sitting under “Medicare” after Medicare paid is a red flag on any aging report.

!!! example "Scenario"
    Medicare paid $96.00 on 06/12, with $24.00 PR-2 and remark MA18. On 08/01 the balance is still $24.00 under Medicare. The Medigap plan (Plan G) has no claim on file: the crossover failed because the member ID on Medicare's crossover file was outdated. The analyst bills the Medigap plan directly with the Medicare adjudication. It pays $24.00 within 3 weeks.

!!! mistake "Auditor's red flag"
    Balances left under the primary payer's name after it paid. Move patient responsibility to the next payer the same day the primary is posted.

!!! interview "If an interviewer asks “What is a crossover claim?”"
    “A crossover is when the primary payer, usually Medicare, automatically forwards the claim and its payment information to the secondary, such as a Medigap plan or Medicaid. The Medicare ERA shows remark MA18 or N89. We wait for the secondary to process, and if it has no claim on file after about 30 days, we bill the secondary directly with the primary's adjudication.”
