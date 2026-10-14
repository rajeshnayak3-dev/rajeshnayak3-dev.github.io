---
title: Auditor calibration and inter-rater agreement
short: Calibration
description: How to run a calibration session, measure whether auditors agree using percent agreement and Cohen's kappa, and fix the causes of disagreement.
order: 4
level: Advanced
reviewed: 2026-10-14
keywords: calibration session inter-rater reliability inter-rater agreement Cohen's kappa percent agreement QA auditors consistency RCM audit calibration
objectives:
  - Run a calibration session that produces decisions, not just discussion
  - Calculate percent agreement and Cohen's kappa for two auditors
  - Explain why percent agreement alone can look better than it is
  - Turn disagreements into clearer rules
quiz:
  - q: Why can percent agreement look misleadingly high?
    options:
      - It's always calculated wrongly
      - When most accounts pass, two auditors will agree often just by chance
      - It ignores the number of accounts
      - It only works for two auditors
    answer: 1
    why: If 90% of accounts pass, two auditors who both say "pass" most of the time will agree a lot even if they judge carelessly. Kappa adjusts for that chance agreement.
  - q: "Two auditors agree on 43 of 50 accounts. Expected chance agreement is 0.6456. What is kappa?"
    options:
      - About 0.86
      - About 0.60
      - About 0.35
      - About 0.21
    answer: 1
    why: "Kappa = (observed − expected) ÷ (1 − expected) = (0.86 − 0.6456) ÷ (1 − 0.6456) ≈ 0.2144 ÷ 0.3544 ≈ 0.60."
  - q: In a calibration session, the auditors split 3–2 on whether a follow-up date was acceptable. What's the best outcome of the session?
    options:
      - Majority wins and nothing else changes
      - Agree the ruling, write it into the rubric with the example, and tell the team
      - Skip the account
      - Ask the associate
    answer: 1
    why: Calibration exists to make the standard clearer. A ruling that isn't written down will be argued again next month.
---

## Why calibrate

If two auditors score the same account differently, an associate's score depends on who audited them. That's unfair and it makes trends meaningless. Calibration checks that auditors (and often team leads and trainers) apply the same standard the same way.

## Running a calibration session

1. **Pick the accounts.** 5 to 10 completed accounts, including a few borderline or tricky ones. Use de-identified copies or review inside the approved system.
2. **Score independently.** Every participant scores each account against the rubric without discussion.
3. **Compare.** List where scores differ, checkpoint by checkpoint.
4. **Discuss the differences only.** For each one, find the rule that applies. If the rule is clear, someone misapplied it. If it isn't, the rule needs work.
5. **Decide and write it down.** Record the ruling, update the rubric or SOP if needed (with a new version), and add the account as a worked example.
6. **Measure agreement** (below) and track it over time.

Hold sessions regularly (many teams do it monthly) and whenever the SOP, a payer rule or the rubric changes.

## Measuring agreement

### Percent agreement

> Percent agreement = Accounts where both auditors gave the same result ÷ Accounts reviewed

Easy, but it ignores agreement that would happen by chance.

### Cohen's kappa (two auditors, pass or fail)

Kappa adjusts for chance:

> κ = (Pₒ − Pₑ) ÷ (1 − Pₑ)

where Pₒ is the observed agreement and Pₑ is the agreement expected by chance from each auditor's pass rate.

!!! example "Worked example"
    Two auditors review the same 50 accounts.

    | | B: pass | B: fail | Total |
    |---|---|---|---|
    | **A: pass** | 35 | 4 | 39 |
    | **A: fail** | 3 | 8 | 11 |
    | **Total** | 38 | 12 | 50 |

    - Observed agreement Pₒ = (35 + 8) ÷ 50 = **0.86**
    - A passes 39 ÷ 50 = 0.78; B passes 38 ÷ 50 = 0.76
    - Chance agreement Pₑ = (0.78 × 0.76) + (0.22 × 0.24) = 0.5928 + 0.0528 = **0.6456**
    - κ = (0.86 − 0.6456) ÷ (1 − 0.6456) = 0.2144 ÷ 0.3544 ≈ **0.60**

    86% agreement sounds strong, but kappa of about 0.60 shows a fair share of it was chance. A commonly cited scale (Landis and Koch) calls 0.41–0.60 "moderate" and 0.61–0.80 "substantial". These labels are conventions, not rules; set your own target with the client and look at the trend.

For more than two auditors or more than two categories there are other measures (such as Fleiss' kappa). For most RCM teams, pairwise kappa on pass or fail per account, plus a list of disputed checkpoints, is enough.

## Common causes of disagreement and the fix

| Cause | Fix |
|---|---|
| Vague checkpoint ("note is adequate") | Rewrite as required elements |
| Rule exists but isn't in the rubric | Add it, with the source |
| Auditors use different versions of the SOP | Version control; audit against the version in force |
| Payer-specific exceptions known to some auditors only | Payer playbook with exceptions, shared with everyone |
| Severity unclear | Define critical by impact, with examples |

!!! mistake "Auditor's red flag"
    Calibration sessions that end in "we'll keep that in mind". If the decision isn't written into the rubric with an example, the same disagreement comes back.

!!! interview "If an interviewer asks “How do you make sure auditors are consistent?”"
    “Regular calibration: everyone scores the same accounts independently, we compare, discuss only the differences, and write each ruling into the rubric with an example. I track agreement over time; percent agreement is a start, but I also look at kappa because it corrects for chance when most accounts pass.”

Reference: Landis JR, Koch GG. *The measurement of observer agreement for categorical data.* Biometrics, 1977, 33(1):159–174.
