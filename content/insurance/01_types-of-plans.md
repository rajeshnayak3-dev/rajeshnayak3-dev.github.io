---
title: Types of health plans (HMO, PPO, EPO, POS, HDHP)
short: Types of plans
description: How each plan type works, what it means for referrals, networks and authorizations, and how to spot self-funded and marketplace plans on an insurance card.
order: 1
level: Beginner
keywords: HMO PPO EPO POS HDHP HSA FSA HRA indemnity self funded ERISA fully insured ACA marketplace metal tiers plan types
takeaways:
  - "The plan type decides networks, referrals and how much the patient pays."
  - "HMOs usually need referrals and in-network care; PPOs allow more choice at a higher cost."
  - "Self-funded employer plans follow federal ERISA rules; fully insured plans also follow state insurance law."
quiz:
  - q: Which plan type typically requires a PCP referral and covers no out-of-network care except emergencies?
    options:
      - PPO
      - HMO
      - Indemnity
      - HDHP with no network
    answer: 1
    why: HMOs use a primary care provider as gatekeeper, require referrals to specialists and generally cover only in-network care, except emergencies.
  - q: An EPO is most similar to which plan, and why?
    options:
      - A PPO, because there are no referrals, but unlike a PPO it doesn't cover out-of-network care
      - Medicare, because it's government run
      - An HMO, because it always requires referrals
      - Indemnity, because there's no network
    answer: 0
    why: EPOs usually don't need referrals (like PPOs) but only cover in-network care except emergencies (like HMOs).
  - q: A card says “Administered by Aetna” for ABC Manufacturing's plan. What does that usually mean?
    options:
      - Aetna insures the plan
      - The plan is self-funded by the employer; Aetna is the administrator and network
      - It's a Medicare plan
      - The patient has no coverage
    answer: 1
    why: Self-funded (ERISA) plans are paid by the employer, with an insurer or TPA processing claims. Plan rules and appeal rights follow ERISA, not state insurance law.
---

## Why plan type matters to RCM

The plan type tells you, before you even check benefits:

- whether the patient needs a **referral** to see a specialist,
- whether **out-of-network** care is covered,
- how much the patient is likely to owe, and
- who to send the appeal to.

## The main plan types

| | HMO | PPO | EPO | POS |
|---|---|---|---|---|
| Full name | Health maintenance organization | Preferred provider organization | Exclusive provider organization | Point of service |
| PCP required | Yes | No | Usually no | Yes |
| Referrals to specialists | Yes | No | Usually no | Yes, for in-network benefits |
| Out-of-network covered | No, except emergencies | Yes, at higher cost | No, except emergencies | Yes, at higher cost |
| Premium | Lower | Higher | Middle | Middle |
| RCM watch-outs | Referral denials, wrong PCP on file, capitation | Out-of-network cost-sharing, prior auth for some services | Network status of every provider | Referral on file for in-network level |

### HMO
The member chooses a **primary care provider (PCP)** who manages their care. Specialist visits need a **referral**. Out-of-network care isn't covered unless it's an emergency or approved. Many HMOs pay primary care providers by **capitation**. Common denials: no referral, provider not the assigned PCP, out-of-network.

### PPO
The member can see any provider. In-network providers cost less; out-of-network care is covered at a lower level, with higher deductibles and coinsurance, and the member may be balance-billed. No referrals needed, but prior authorization still applies to many services.

### EPO
Like a PPO without out-of-network benefits. A provider who isn't in the EPO network will be denied, except for emergencies.

### POS
A hybrid: a PCP and referrals for in-network benefits, with the option to go out of network at higher cost.

## High-deductible health plans (HDHP)

An **HDHP** has a higher deductible than traditional plans, and in return a lower premium. HDHPs that meet IRS rules can be paired with a **health savings account (HSA)**, where the member saves pre-tax money for medical expenses.

For RCM, HDHPs mean:

- The patient pays most early-year visits in full until the deductible is met.
- Collecting at the time of service and giving estimates matters more.
- Claims come back with **PR-1** (deductible) and $0 paid; that's normal.

Related accounts you'll hear about: **FSA** (flexible spending account, employer-owned, use-it-or-lose-it rules) and **HRA** (health reimbursement arrangement, funded only by the employer). Some HRAs and FSAs pay claims as a secondary payer.

## Indemnity (traditional fee-for-service)

The member can see any provider, with no network. The plan pays a percentage of “usual, customary and reasonable” (UCR) charges after the deductible. Rare today.

## Fully insured versus self-funded plans

This difference isn't on most cards, but it changes rules and appeals.

| | Fully insured | Self-funded (self-insured) |
|---|---|---|
| Who pays claims | The insurance company, from premiums | The employer, from its own funds |
| Who processes claims | The insurer | An insurer acting as administrator (ASO) or a third-party administrator (TPA) |
| Law that governs | State insurance law (and federal) | Federal **ERISA**, which overrides most state insurance mandates |
| Card clues | Insurer name only | “Administered by…”, employer's name prominent, TPA name |
| Appeals | State external review often available | ERISA plan appeal process; federal external review |

Most large US employers self-fund. When a state law (like a prompt-pay law or a coverage mandate) doesn't seem to apply to a payer's decision, a self-funded plan is often why.

## Government-sponsored plans

Covered in detail in their own lessons:

- [Medicare](/insurance/medicare/) (including Medicare Advantage HMOs and PPOs)
- [Medicaid, QMB and spend-down](/insurance/medicaid-qmb-spend-down/)
- [TRICARE and VA Community Care](/insurance/tricare-and-va-ccn/)

## ACA marketplace plans

Under the Affordable Care Act, individuals can buy plans on **HealthCare.gov** or a state exchange. Plans are grouped into **metal tiers** by how costs are shared:

| Tier | Plan pays on average | Patient pays on average |
|---|---|---|
| Bronze | 60% | 40% |
| Silver | 70% | 30% |
| Gold | 80% | 20% |
| Platinum | 90% | 10% |

Marketplace plans are often HMOs or EPOs with narrow networks. Members receiving premium tax credits have a **three-month grace period** for unpaid premiums: claims in the second and third months may be **pended**, and if the member doesn't pay, coverage ends retroactively to the end of the first month and those claims deny. AR teams see this as claims pending, then denying with CO-27.

## Medicare Advantage and Medicaid managed care

These are government programs run by private companies, and they carry the private plan's type (HMO, PPO, PFFS or special needs plan). Treat them like the plan type on the card for referrals and networks, with government rules layered on top.

!!! tip "Read the card for the plan type"
    The plan type is usually printed on the front (“HMO”, “PPO”, “Open Access”, “Choice Plus”). If it isn't, the eligibility response or portal will show it. Always record it during verification.

!!! mistake "Auditor's red flag"
    HMO claims billed to a specialist without checking the referral, because the card “looks like a PPO”. Read the plan type on the card or eligibility response every time.

!!! interview "If an interviewer asks “What's the difference between an HMO and a PPO?”"
    “An HMO requires the member to choose a primary care provider and get referrals for specialists, and it doesn't cover out-of-network care except emergencies. A PPO doesn't require a PCP or referrals and covers out-of-network care at a higher cost to the patient. HMO premiums are usually lower; PPOs give more flexibility. For RCM, HMOs mean more referral denials, PPOs more out-of-network cost-sharing questions.”
