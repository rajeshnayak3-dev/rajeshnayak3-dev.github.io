---
title: Root cause analysis and Pareto analysis
short: Root cause and Pareto
description: Tell a symptom from a root cause, use 5 whys and a cause-category checklist on RCM errors and denials, and use Pareto analysis to decide which problems to fix first.
order: 5
level: Advanced
reviewed: 2026-10-14
keywords: root cause analysis RCA 5 whys fishbone Ishikawa Pareto analysis 80/20 denial trends symptom vs root cause RCM process improvement
objectives:
  - Separate the symptom (the denial or error) from the root cause
  - Use 5 whys and a cause-category checklist without stopping at "human error"
  - Build a Pareto table and pick the few causes worth fixing first
  - Check that a root cause is supported by data, not assumption
quiz:
  - q: "CO-197 denials rose on MRIs for one plan. Which is the root cause, not a symptom?"
    options:
      - CO-197 denials increased
      - Claims were billed without an authorization number
      - The plan added MRIs to its authorization list on 1 July and the scheduling team's list wasn't updated
      - The associates didn't notice
    answer: 2
    why: "The denial and the missing auth number are symptoms. The root cause is the process gap that let it happen: no step to update the authorization list when the plan changed."
  - q: Denied dollars by category are $42k eligibility, $31k authorization, $9k coding, $6k timely filing, $4k duplicate, $3k other. Which two categories make up about three quarters of the total?
    options:
      - Coding and timely filing
      - Eligibility and authorization
      - Duplicate and other
      - Authorization and coding
    answer: 1
    why: "Total is $95k. Eligibility ($42k) + authorization ($31k) = $73k, about 77%. Those are the first two to fix."
  - q: An error was traced to "associate made a mistake". What should you do next?
    options:
      - Close the RCA; human error is the root cause
      - Keep asking why; look at training, the SOP, the system and the workload
      - Remove the associate's access
      - Change the scoring rubric
    answer: 1
    why: People make mistakes inside a process. Asking why the mistake was possible (unclear SOP, no system edit, no training on a new rule, unrealistic targets) finds a fix that protects everyone.
---

## Symptom versus root cause

- **Symptom:** what you see. A denial code, an audit error, a rising AR over 90 days.
- **Direct cause:** what went wrong on the claim. Missing auth number, wrong modifier, wrong payer.
- **Root cause:** why the process allowed it. No step to update the auth list, no system edit for the modifier, registration screen that defaults to the old payer.

If you fix only the claim, the next claim fails the same way. Root cause analysis (RCA) is about fixing the process.

## 5 whys

Ask "why?" until the answer is something you can change in the process, usually 3 to 5 times.

!!! example "5 whys on a denial trend"
    1. **Why did echo claims deny?** CO-197, no authorization.
    2. **Why was there no authorization?** The scheduler didn't request one.
    3. **Why not?** The plan wasn't on the scheduler's authorization list for echo.
    4. **Why not?** The plan added echo to its list on 1 July and nobody updated ours.
    5. **Why not?** There's no owner or routine for reviewing payer authorization updates.

    **Root cause:** no process to track payer authorization list changes. **Fix:** assign an owner, review payer bulletins monthly, update the list and the scheduling edit, and tell the team.

Don't stop at "human error" or "associate didn't follow the SOP". Ask why it was possible: was the SOP clear and current, was the person trained on it, does the system make the right step easy, are targets pushing people to skip steps?

## A cause-category checklist (fishbone)

A fishbone (Ishikawa) diagram sorts possible causes into categories so you don't fixate on one. For RCM, useful categories are:

| Category | Questions |
|---|---|
| **People** | Trained on this? New to the work? Workload realistic? |
| **Process / SOP** | Is there a written step? Is it current? Does it conflict with another rule? |
| **System** | Is there an edit, a required field, a default value that misleads? |
| **Data** | Wrong or missing data from registration, charge capture or the payer? |
| **Payer** | Policy change, processing error, portal or contract issue? |
| **Communication** | Did a change reach the people who needed it? |

## Prove it with data

A root cause is a hypothesis until data supports it. Before you act:

- Check the cause appears across the affected accounts, not just the one that prompted the review.
- Check accounts *without* the problem don't share the same cause.
- Check the timing: did the problem start when the suspected cause started?

## Pareto analysis: fix the big few first

In many processes, a few causes produce most of the problems. Pareto analysis ranks causes by impact so you work on those first.

1. Pick the measure: denied dollars, denied claims, audit errors, or hours of rework.
2. Group by category (denial category, root cause, payer, checkpoint).
3. Sort from largest to smallest and add a cumulative percentage.
4. Focus on the categories that make up most of the total.

!!! example "Denied dollars for one month (fictional)"
    | Category | Denied $ | % of total | Cumulative % |
    |---|---|---|---|
    | Eligibility | $42,000 | 44.2% | 44.2% |
    | Authorization | $31,000 | 32.6% | 76.8% |
    | Coding | $9,000 | 9.5% | 86.3% |
    | Timely filing | $6,000 | 6.3% | 92.6% |
    | Duplicate | $4,000 | 4.2% | 96.8% |
    | Other | $3,000 | 3.2% | 100.0% |
    | **Total** | **$95,000** | | |

    Eligibility and authorization make up about 77% of denied dollars. Start there, then run root cause analysis *within* each (by payer, location and service) to find the specific process gaps.

Look at dollars **and** counts. A category with few, high-dollar denials and one with many small ones need different fixes. And remember that the "80/20" split is a tendency, not a law; use your own data.

!!! mistake "Auditor's red flag"
    Root cause fields filled with "payer issue" or "staff error" for most denials. Those aren't root causes; they're where the analysis stopped.

!!! interview "If an interviewer asks “How do you do root cause analysis on denials?”"
    “I group denials by category and run a Pareto by dollars and counts to pick the biggest problems. Within each, I break it down by payer, location and service and use 5 whys until I reach a process cause, not just 'human error'. I check the data supports it, then agree a corrective action with an owner and date, and track the denial rate afterwards to confirm it worked.”
