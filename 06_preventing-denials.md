---
title: Preventing denials with root cause analysis
short: Preventing denials
description: How RCM teams cut denial rates. Tagging root causes, building a denial dashboard, the fixes that work at each stage, and how QA audits feed prevention.
order: 6
level: Advanced
keywords: denial prevention root cause analysis denial dashboard pareto front end fixes scrubber rules payer trends QA audit feedback loop
quiz:
  - q: Which approach reduces denial rates most over time?
    options:
      - Hiring more AR callers
      - Tracking root causes and fixing the upstream process that creates each denial type
      - Appealing every denial
      - Ignoring small denials
    answer: 1
    why: Working denials recovers money; preventing them stops the work from existing. Root-cause fixes are what move the denial rate.
  - q: A Pareto view of denials usually shows what?
    options:
      - Every denial code is equally common
      - A few denial reasons cause most of the denied dollars
      - Denials are random
      - Only Medicare denies
    answer: 1
    why: Typically a handful of causes (often eligibility, authorization and a few coding issues) drive most denials, so fixing them first gives the biggest gain.
---

## Working denials versus preventing them

Every denial worked is cost: analyst time, calls, letters, delayed cash. The goal isn't to work denials faster forever, it's to **stop creating them**. That needs data about *why* each denial happened, not just *what* code it carried.

## Step 1: tag every denial with a root cause

A CARC tells you the payer's reason. A **root cause** tells you where in your own process it went wrong. Two CO-16 denials can have completely different causes (a missing referring NPI from charge entry, or a missing NDC from the pharmacy set-up).

A practical root cause list:

| Area | Root cause examples |
|---|---|
| Registration | Wrong member ID, wrong subscriber, insurance not updated, COB order wrong |
| Eligibility | Not verified, verified too early, benefits misread |
| Authorization | Not obtained, expired, wrong code or units, not updated when procedure changed |
| Documentation | Unsigned note, missing time, medical necessity not documented |
| Coding | Wrong code, unspecified diagnosis, missing modifier, NCCI conflict |
| Charge entry | Wrong provider, POS, units, DOS |
| Credentialing | Provider not enrolled or not linked to group |
| Billing | Late filing, wrong payer, missing primary EOB, rejection not worked |
| Payer | Processing error, policy change, system issue |
| Patient | Didn't respond to COB or accident questionnaire |

Each denial worked gets one root cause tag, plus **preventable: yes or no**.

## Step 2: build the denial dashboard

Report monthly (or weekly for big clients):

- Denial rate by **count** and by **dollars**
- Top 10 denial reasons by dollars (a **Pareto** chart: usually a few causes drive most of the money)
- Denials by **payer**, by **root cause** and by **provider or location**
- **Trend** over time for each top cause
- **Overturn rate** and **write-offs** from denials
- **Days to resolve** a denial

## Step 3: fix upstream, one cause at a time

| Root cause | Prevention that works |
|---|---|
| Eligibility | Automated 270/271 checks 2–3 days before visits and again on the day; required card scans |
| COB | MSP questionnaire for every Medicare visit; “other insurance?” question at every check-in |
| Authorization | Payer auth lists built into scheduling; auth hold before claim release; auth matching edit (code, units, dates) |
| Coding | Coder education on top denial codes; specificity prompts in the EHR |
| Modifiers | Scrubber rules for payer-specific modifier requirements |
| NCCI | Up-to-date NCCI edits in the scrubber; quarterly refresh |
| Credentialing | New-provider checklist; claims held until effective dates; payer enrollment tracker |
| Timely filing | Daily rejection queue clean-up; no-response follow-up at 30 days |
| Missing NDC or referring provider | Charge entry required fields |
| Payer errors | Escalate to the payer's provider representative with a list of claims; ask for a project reprocessing |

## Step 4: close the loop with QA

Quality auditors are part of prevention:

- They spot **error patterns** in analyst work (wrong action for a denial type, missed root cause tags, incomplete notes).
- They check that **actions match SOPs** (for example, that analysts don't appeal denials that need a corrected claim).
- They share findings with **trainers**, who update training and job aids.
- They verify **fixes** worked by re-sampling after a process change.

## Step 5: talk to payers

Some denials are the payer's problem. Keep a log of payer errors (claim numbers, dates, what went wrong) and send it to the payer's **provider relations** contact. Many payers will reprocess claims in bulk (a “project”) once they confirm a system error, which saves calling claim by claim.

!!! example "A prevention win"
    A cardiology client's denials rose from 7% to 11%. The Pareto showed CO-197 on echocardiograms (93306) for one Medicare Advantage plan made up 40% of denied dollars. Root cause: the plan had added echo to its prior authorization list on July 1, and the scheduling team's list hadn't been updated. The fix: an updated auth list, a scheduling hard-stop for that plan and code, and retro-auth requests for recent claims where the plan allowed. Denials returned to 6.5% within two months.

!!! interview "If an interviewer asks “How would you reduce denials?”"
    “By finding and fixing root causes rather than just working denials. I'd tag each denial with the root cause and whether it was preventable, build a Pareto of denials by dollars, payer and cause, and take the top causes to the teams that create them, for example adding eligibility checks closer to the visit, auth lists at scheduling, scrubber edits for modifier rules, or credentialing holds. Then I'd track the trend to confirm the fix worked.”
