---
title: AR prioritisation, work queues and inventory
short: AR prioritisation
description: How AR inventory is organised into work queues, how to prioritise accounts by deadline risk, balance and recovery potential, and why follow-up intervals should come from payer rules rather than one universal number.
order: 7
level: Intermediate
reviewed: 2026-10-14
keywords: AR prioritization AR work queue aging buckets inventory backlog follow-up interval timely filing risk appeal deadline high dollar AR productivity touches per account
objectives:
  - Describe how AR inventory is split into work queues
  - Prioritise accounts using deadline risk, balance and recovery potential together
  - Set follow-up dates from payer processing times and deadlines, not a single rule
  - Read inventory, backlog and touches as signals of process health
quiz:
  - q: Which account should usually be worked first?
    options:
      - A $2,400 claim, 40 days old, payer processes in 30 days, no deadline close
      - A $180 claim whose appeal deadline is in 6 days
      - A $35 claim at 200 days with no recovery options left
      - A $900 claim submitted yesterday
    answer: 1
    why: A workable account with a deadline about to pass loses all recovery if it's missed. Deadline risk usually comes first; balance and recovery potential break ties.
  - q: The payer's portal says clean electronic claims normally process within 30 days. A claim was accepted 18 days ago. What's a sensible follow-up?
    options:
      - Call today
      - Set follow-up for shortly after the 30-day processing window, and check the 277CA acceptance is on file
      - Wait 120 days
      - Resubmit the claim now
    answer: 1
    why: Calling inside the normal processing window wastes a touch. Confirming acceptance now, then following up after the window, uses the payer's own timing. Resubmitting early risks a duplicate denial.
  - q: Average touches per resolved account rose from 1.8 to 2.9. What does it most likely signal?
    options:
      - The team got more productive
      - "More rework: unclear notes, wrong first actions, or payer delays"
      - Fewer claims were billed
      - Nothing
    answer: 1
    why: More touches per resolution means accounts aren't being resolved on the first effective action. Look at audit errors, note quality and payer turnaround to find out why.
---

## How AR inventory is organised

AR inventory is every open claim or account with a balance. Teams split it into **work queues** so each person works the right accounts in the right order. Common splits:

- **By payer or payer group:** Medicare, Medicaid, a large commercial payer, small payers
- **By status:** no response, denied, underpaid, pending information, credit balance
- **By denial category:** eligibility, authorization, coding, timely filing
- **By age or balance:** 0–30, 31–60, 61–90, 91–120, 120+ days; high-dollar queues
- **By skill:** appeals, Medicare reopenings, workers' compensation

The billing system or a work-queue tool usually assigns accounts by rules and a priority score. Understand the rules your tool uses, because a badly designed queue hides urgent accounts.

## Prioritising: three factors together

| Factor | Why it matters | How to judge it |
|---|---|---|
| **Deadline risk** | A missed timely filing or appeal deadline usually ends recovery | Days left to the payer's filing, correction or appeal deadline |
| **Balance** | Larger balances matter more to cash | Expected payment (not just billed charge) |
| **Recovery potential** | Some accounts are much more likely to pay | Denial type, payer behaviour, documentation available, prior outcomes |

A simple approach many teams use:

1. Anything with a filing or appeal deadline inside your action window (for example 15 to 30 days), first.
2. Then high expected value accounts, oldest first.
3. Then everything else by age.
4. Accounts with no recovery options go to review for adjustment under the client's policy, not to the bottom of the queue forever.

Use **expected** value: a $5,000 charge with a $400 contracted rate isn't a $5,000 account.

## Follow-up intervals: use the payer's clock

There's no universal "follow up every 30 days" rule. Set the next follow-up from:

- **The payer's normal processing time** for that claim type (from the provider manual, portal or prompt-pay rules that apply). Following up inside that window wastes a touch.
- **Deadlines:** follow up early enough that you can still act before a filing, correction or appeal deadline.
- **What you're waiting for:** a reprocess the payer said takes 30 days, a records request with its own deadline, an appeal with a stated decision window.
- **Your client's SOP**, which may set maximum intervals.

Record the reason for the follow-up date in the note ("F/U 11/20, after 30-day reprocess window per rep") so the next person understands it.

## Reading inventory health

| Measure | What it tells you |
|---|---|
| **Inventory** (open accounts and dollars) | Total workload; watch the trend |
| **Backlog** (accounts past their follow-up date) | Work isn't keeping pace; deadlines at risk |
| **Aging distribution** | Share of dollars over 90 or 120 days; see [KPIs](/rcm-cycle/reporting-and-kpis/) |
| **Touches per resolved account** | Rework: wrong first actions, weak notes, payer delays |
| **Productivity** (accounts worked per hour) | Throughput; read it next to quality, never alone |
| **Resolution rate** | Share of worked accounts that reached a final outcome |

Productivity and quality pull against each other. A team that raises accounts per hour while touches per resolution climb and audit accuracy falls isn't improving; it's moving work around.

!!! mistake "Auditor's red flag"
    Follow-up dates set to a default (for example, always +30 days) regardless of the payer's processing time or the deadline. Accounts get touched too early, then miss deadlines.

!!! interview "If an interviewer asks “How do you prioritise your AR?”"
    “Deadline risk first: anything close to a timely filing or appeal deadline. Then expected value, oldest first, then the rest by age. I set follow-up dates from the payer's processing time and the deadlines, not a fixed interval, and I note the reason. As a lead I'd watch backlog, aging and touches per resolution next to productivity and quality.”
