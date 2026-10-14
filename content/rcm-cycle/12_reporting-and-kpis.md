---
title: Reporting and RCM KPIs
short: Reporting and KPIs
description: The metrics every RCM team reports, with formulas, worked examples and typical benchmarks, so you can read a dashboard and explain it in an interview.
order: 12
level: Intermediate
keywords: KPI days in AR net collection rate gross collection rate clean claim rate first pass resolution denial rate AR over 90 cost to collect charge lag
quiz:
  - q: Total AR is $600,000 and average daily charges are $20,000. What are days in AR?
    options:
      - 20
      - 30
      - 60
      - 12
    answer: 1
    why: Days in AR = total AR ÷ average daily charges = $600,000 ÷ $20,000 = 30 days.
  - q: Payments $90,000; charges $200,000; contractual adjustments $100,000. What is the net collection rate?
    options:
      - 45%
      - 90%
      - 100%
      - 50%
    answer: 1
    why: NCR = payments ÷ (charges − contractual adjustments) = $90,000 ÷ $100,000 = 90%.
  - q: Why is gross collection rate a weak measure of RCM performance?
    options:
      - It is illegal to report
      - It depends on how high the provider sets its charges, not on how well the team collects
      - It ignores patient payments
      - It's only used by Medicare
    answer: 1
    why: Gross collection rate divides payments by billed charges, which are set by the provider. Net collection rate removes contractual adjustments, so it reflects collection effectiveness.
---

## Why numbers matter

RCM leaders and clients judge teams by a handful of key performance indicators (KPIs). Knowing the formulas, what moves them and what “good” looks like is expected of senior analysts, auditors and anyone in an interview for a lead role.

Benchmarks below are typical ranges quoted by industry groups such as HFMA and MGMA. Real targets depend on specialty, payer mix and the client's contract.

## Days in AR

**How long, on average, it takes to collect.**

> Days in AR = Total AR ÷ Average daily charges
>
> Average daily charges = Gross charges for the last 3 months (or 90 days) ÷ number of days in that period

!!! example "Example"
    Charges over the last 90 days: $1,800,000 → average daily charges $20,000. Current AR: $640,000. Days in AR = 640,000 ÷ 20,000 = **32 days**.

**Typical target:** under 35–45 days for physician practices; hospitals often run higher.

**Moves it:** charge lag, clean claim rate, denial rate, how fast AR is worked, and credit balances (which reduce AR artificially, so many teams report AR without credits).

## AR over 90 (or 120) days

**How much AR is old and at risk.**

> AR > 90 % = AR older than 90 days ÷ Total AR × 100

**Typical target:** under 15–20%.

## Net collection rate (NCR)

**How much of what could be collected was collected.**

> NCR = Payments ÷ (Charges − Contractual adjustments) × 100

Use payments and charges for the same period, ideally lagged so payments match the charges they belong to.

**Typical target:** 95–99%.

**Why it falls:** write-offs for timely filing, uncollected patient balances, unworked denials, small-balance write-offs.

## Gross collection rate

> Gross collection rate = Payments ÷ Charges × 100

Easy to calculate, but it reflects the provider's fee schedule more than team performance. A practice charging 300% of Medicare will always look worse than one charging 150%.

## Clean claim rate

**Share of claims accepted with no edits or rejections on first submission.**

> Clean claim rate = Claims accepted without errors ÷ Total claims submitted × 100

**Typical target:** 95% or higher.

## First-pass resolution rate (FPRR)

**Share of claims paid on first submission without any rework.**

> FPRR = Claims paid on first submission ÷ Total claims adjudicated × 100

**Typical target:** 90% or higher.

## Denial rate

> Denial rate = Claims (or dollars) denied ÷ Claims (or dollars) adjudicated × 100

Report both **count** and **dollar** versions, and break it down by payer, denial category and root cause. **Typical target:** under 5–10%.

## Denial overturn rate

> Overturn rate = Denials paid after appeal or rework ÷ Denials worked × 100

High overturn rates are good for cash but can signal the payer is denying unfairly, or that preventable denials aren't being prevented.

## Charge lag

> Charge lag = Date charge entered − Date of service (average days)

**Typical target:** under 3–5 days for professional services.

## Cost to collect

> Cost to collect = Total revenue cycle cost ÷ Total cash collected × 100

**Typical range:** 2–4% for hospitals; varies widely for practices.

## Point-of-service (POS) collection rate

> POS collection rate = Patient payments collected at the visit ÷ Patient payments due at the visit × 100

## Team-level metrics

| Metric | Measures |
|---|---|
| Productivity | Accounts or claims worked per hour or day |
| Quality / accuracy | Audit score on sampled work |
| Touches per claim | Number of times a claim is worked before resolution |
| Resolution rate | Share of claims worked that end in payment or valid closure |
| Backlog | Claims past their follow-up date |

## Reading a dashboard

When a client asks why cash dropped, check in this order:

1. **Charges:** did volume fall? (Fewer visits means less cash later.)
2. **Charge lag:** are charges stuck before billing?
3. **Rejections:** is a clearinghouse or payer rejecting a batch?
4. **Denials:** has one payer or code started denying?
5. **Payer delays:** is a payer pending claims or changing systems?
6. **Posting backlog:** is money in the bank but not posted?

!!! tip "Auditor's habit"
    Always ask which dates a report uses: date of service, date billed, or date posted. Two reports that disagree are often just using different dates.

!!! mistake "Auditor's red flag"
    Reports that mix dates (date of service versus date posted) or include credit balances in AR. Always state the date basis and whether credits are included, or two teams will report different numbers for the same month.

!!! interview "If an interviewer asks “What KPIs do you track?”"
    “Days in AR, AR over 90 days, net collection rate, clean claim rate, first-pass resolution rate and denial rate by payer and root cause, plus charge lag. At team level, productivity, quality score and touches per claim. For example, net collection rate is payments divided by charges minus contractual adjustments, and a healthy target is about 95% or more.”
