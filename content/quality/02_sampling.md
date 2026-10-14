---
title: Audit sampling and its limits
short: Sampling
description: Random, stratified and targeted samples, how sample size affects how far you can trust an accuracy score, and how to report results without overstating them.
order: 2
level: Advanced
reviewed: 2026-10-14
keywords: audit sampling random sample stratified sample targeted review sample size margin of error confidence interval accuracy rate RAT-STATS OIG statistical sampling
objectives:
  - Choose a random, stratified or targeted sample to match the audit's purpose
  - Explain why a small sample gives a wide range around an accuracy score
  - Calculate an approximate margin of error for an accuracy rate
  - Report sample results honestly, without claiming more than they show
quiz:
  - q: You reviewed 50 randomly selected accounts and found 45 correct (90%). Roughly how precise is that 90%, at about 95% confidence?
    options:
      - Exactly 90%, no uncertainty
      - About plus or minus 1 point
      - About plus or minus 8 points
      - About plus or minus 40 points
    answer: 2
    why: "Margin ≈ 1.96 × √(0.9 × 0.1 ÷ 50) ≈ 1.96 × 0.042 ≈ 0.083, so roughly 82% to 98%. With 50 accounts, a single score can't separate a 90% performer from an 85% one."
  - q: You pulled every corrected claim one associate sent last week because you suspected a problem. Can you report the error rate as the associate's overall accuracy?
    options:
      - Yes
      - No; a targeted sample shows what happened in that group, not overall accuracy
      - Only if the error rate is low
      - Only if the client agrees
    answer: 1
    why: A targeted (judgmental) sample is chosen because it's likely to contain errors, so its error rate is biased upward for the person's work as a whole. Report it as a focused review finding.
  - q: A team has three payers with very different volumes. You want each payer represented. Which sample design fits?
    options:
      - Simple random sample of all accounts
      - Stratified sample, drawing randomly within each payer
      - Pick the first 20 accounts in the queue
      - Audit only the largest payer
    answer: 1
    why: Stratifying by payer guarantees each payer is represented, while still selecting randomly inside each group. Taking the first accounts in a queue isn't random.
---

## Why sampling matters

You almost never audit every account, so you audit a sample and use it to judge the rest. How the sample is chosen decides what the result can honestly be used for.

## Three kinds of sample

| Sample | How it's chosen | Good for | Don't use it for |
|---|---|---|---|
| **Simple random** | Every account in the population has an equal chance (for example, a random number column in Excel, sorted) | An accuracy rate for the whole population | Small, rare risks (they may not appear) |
| **Stratified random** | Split the population into groups (payer, associate, work type), then pick randomly within each | Making sure every group is represented and comparing groups | Ignoring the groups' different sizes when you combine results |
| **Targeted (judgmental)** | Chosen on purpose because they look risky: high dollars, new codes, a known error pattern | Finding and confirming problems quickly | Reporting as an overall accuracy rate |

"The first 20 accounts in the queue", "accounts I happened to open" and "accounts the associate picked" aren't random. They're convenient, and they can be badly biased.

## How precise is a score from a sample?

A score from a sample is an estimate. The smaller the sample, the wider the range the true rate could fall in. A common approximation for an accuracy rate *p* from a random sample of *n* accounts, at about 95% confidence:

> Margin of error ≈ 1.96 × √( p × (1 − p) ÷ n )

| Accounts sampled | Observed accuracy | Approximate range |
|---|---|---|
| 20 | 90% | about 77% to 100% |
| 50 | 90% | about 82% to 98% |
| 200 | 90% | about 86% to 94% |
| 400 | 90% | about 87% to 93% |

The approximation gets rough for very small samples or scores close to 0% or 100%, so treat it as a sense check, not a formal statistical method.

What this means in practice:

- With 20 or 50 accounts per person per month, a 2-point change from last month is usually **noise**, not a real improvement or decline. Look at trends over several months, or pool samples.
- Don't rank people on tiny differences. An associate at 92% and one at 95% on 30 accounts each may perform the same.
- If a decision is serious (release from 100% review, a performance plan), use a larger sample or combine periods.

!!! note "Statistical sampling for overpayment reviews"
    Government reviewers who extrapolate overpayments from a sample, such as the HHS Office of Inspector General, use formal statistical methods and tools such as the OIG's RAT-STATS software. Internal QA sampling is usually much simpler. If a compliance review might be extrapolated, involve the compliance team; don't improvise.

## Setting sample sizes in practice

Most RCM teams set sample sizes by policy, for example "5% of each associate's work, minimum 20 accounts" or "100% for new hires until they score above the release threshold for two consecutive periods". That's reasonable, as long as you:

1. write the rule down and apply it the same way to everyone,
2. select randomly within it,
3. raise the sample for high-risk work (refunds, write-offs above a threshold, compliance-sensitive accounts), and
4. report the sample size next to every score.

!!! example "Reporting honestly"
    **Weak:** "Priya's accuracy dropped from 96% to 93%."

    **Better:** "Priya scored 93% on 40 randomly selected accounts in October (96% on 40 in September). The change is within normal sample variation. Two of the three errors were missed follow-up dates, which we'll watch in November."

!!! mistake "Auditor's red flag"
    A team-level accuracy rate built from targeted reviews. It overstates errors, and it gets used to compare people who were sampled in different ways.

Source: [HHS OIG, RAT-STATS statistical software](https://www.oig.hhs.gov/compliance/rat-stats/) (reviewed October 2026). The margin-of-error formula is the standard normal approximation for a proportion.
