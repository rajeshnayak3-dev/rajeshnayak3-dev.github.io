---
title: "RCM quality audits: purpose, scope and standards"
short: Audit purpose and scope
description: What an RCM quality audit is for, the difference between process, outcome and productivity measures, how to write an audit scope, and why the standard you audit against must be written and version-controlled.
order: 1
level: Advanced
reviewed: 2026-10-14
keywords: RCM quality audit QA audit scope audit universe process adherence outcome quality productivity audit standard SOP version control pre-bill post-bill audit
objectives:
  - Explain why RCM teams audit work and what an audit can and can't prove
  - Separate process adherence, outcome quality and productivity
  - Write a clear audit scope with population, period, standard and checkpoints
  - Keep the audit standard version-controlled so results stay comparable
quiz:
  - q: An AR associate wrote a complete note and followed the SOP, but the claim still denied because the payer changed its policy that week. How should the audit score the associate's work?
    options:
      - Fail, because the claim wasn't paid
      - Pass on process adherence; record the denial as an outcome issue with a payer root cause
      - Skip the account
      - Fail, and retrain the associate
    answer: 1
    why: Process adherence measures whether the person did the work correctly against the standard. The outcome (a denial) had a cause outside their control. Mixing the two punishes people for payer behaviour and hides the real root cause.
  - q: Which is the best audit scope statement?
    options:
      - Audit some AR notes this month
      - Audit 10% of everything
      - "Medicare Part B denial follow-up accounts worked by the AR team from 1 to 31 October, against AR SOP v3.2, checking status, action, note and follow-up date"
      - Audit whatever looks wrong
    answer: 2
    why: A usable scope names the population, period, standard (with version) and the checkpoints. Without them, results can't be repeated or compared.
  - q: Why should the audit standard carry a version number and effective date?
    options:
      - It looks professional
      - So every finding can be traced to the rule that was in force when the work was done
      - Payers require it
      - It isn't needed
    answer: 1
    why: Work done under SOP v3.1 shouldn't be failed against a rule added in v3.2. Versioning keeps audits fair and makes trend comparisons honest.
---

## Why RCM teams audit

An audit checks a sample of completed work against a written standard. In RCM, it answers questions such as:

- Are associates following the SOP and payer rules?
- Are claims, postings and notes accurate enough to protect revenue and compliance?
- Where are errors coming from, and are they getting better or worse?
- Is a new associate ready to work without 100% review?

An audit **can** show how often errors occur in the sample and what kinds they are. It **can't**, on its own, prove the error rate for all work (that depends on how the sample was drawn, covered in [sampling](/quality/sampling/)), and it can't tell you *why* errors happen until you do [root cause analysis](/quality/root-cause-and-pareto/).

## Three things that get confused

| Measure | Question | Example |
|---|---|---|
| **Process adherence** | Did the person do the work the way the standard says? | Checked status, chose the right action, wrote a complete note, set the follow-up date |
| **Outcome quality** | Did the account end up right? | Claim paid correctly, balance posted to the right bucket, no duplicate submission |
| **Productivity** | How much work was done in the time? | Accounts worked per hour, claims posted per day |

Keep them separate. An associate can follow every step and the claim can still deny because of a payer change; an associate can get a payment by luck while skipping required steps. If one score mixes all three, nobody can tell what to fix. Most teams report a **quality score** (process and outcome checkpoints) next to **productivity**, and review both together, because pushing productivity alone usually lowers quality.

## Types of RCM audit

- **Pre-bill (prospective):** claims are checked before release. Catches errors before they reach the payer, but slows cash.
- **Post-bill or post-work (retrospective):** completed work is sampled afterwards. The usual model for AR, posting and denial work.
- **New-hire or 100% review:** every account a trainee works is checked until they meet the release criteria.
- **Focused (targeted) review:** a deliberate look at a known risk, such as all corrected claims, all QMB patient statements, or one associate after an error spike. It isn't a random sample, so don't report it as an accuracy rate for the whole team.

## Writing the scope

A scope statement should let someone else repeat the audit and get comparable results.

| Element | Example |
|---|---|
| Population | Denial follow-up accounts for Medicare Part B worked by the AR team |
| Period | Work completed 1 to 31 October |
| Standard | AR SOP v3.2 (effective 1 September) and the client's payer playbook v12 |
| Sample | 5% of accounts per associate, minimum 20, randomly selected |
| Checkpoints | Status confirmed, correct action, complete note, follow-up date, correct claim edits |
| Scoring | Critical and non-critical errors as defined in the rubric (see [scoring](/quality/error-definitions-and-scoring/)) |
| Output | Accuracy by associate and checkpoint, error log, root-cause summary |

## The standard must be written and controlled

You can only fail someone against a rule they could have read. Good practice:

1. **Write the standard down:** SOP, payer playbook, client instructions, and the audit rubric itself.
2. **Version it:** a version number, effective date and change log for every update.
3. **Audit against the version in force** on the date the work was done.
4. **Tell people about changes** before they're audited on them, and record that they were told.
5. **Separate client rules from general rules.** "This client wants notes in this format" is a client standard; "don't bill QMB patients for Medicare cost-sharing" is a regulatory one. Both can be audit points, but the second is never optional.

!!! mistake "Auditor's red flag"
    Audit findings that say "incorrect action" with no reference to which rule was broken. Every finding should cite the standard (document, version and section) so the associate can see exactly what was expected.

## Documentation an audit should leave behind

- The sample list and how it was selected
- Each account reviewed, the checkpoints, and pass or fail per checkpoint
- For each error: what was wrong, the rule it broke, its severity, and the correct action
- Reviewer name and date, and any rebuttal and its outcome
- No more PHI than the review needs, kept in the approved system (see [HIPAA and compliance](/start-here/hipaa-and-compliance/))

!!! interview "If an interviewer asks “How do you set up an RCM audit?”"
    “I agree the scope first: which work, which period, and which standard and version we're auditing against. Then I pick a sample that fits the purpose, random for an accuracy rate or targeted for a known risk, and use a rubric with defined checkpoints and critical and non-critical errors. I keep process adherence separate from outcome and productivity, log every error against the rule it broke, calibrate with other auditors, and finish with root causes and corrective actions, not just a score.”
