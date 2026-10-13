---
title: Interview questions for experienced analysts and QA
short: Experienced questions
description: Questions for senior AR, denial management, team lead and QA auditor interviews, focused on judgement, root cause, KPIs and audit practice.
order: 2
level: Advanced
keywords: senior AR analyst interview denial management interview QA auditor interview team lead RCM interview questions
---

## Denials and AR judgement

<details class="qa" markdown="1">
<summary>How do you prioritise an AR inventory of 5,000 claims?</summary>

By risk and value. First, claims near timely filing or appeal deadlines; then high-dollar claims; then older aging buckets. I group by payer and denial type so one call or fix covers many claims, and I look for patterns (one payer, one code) that can be fixed in bulk with the payer rather than claim by claim.
</details>

<details class="qa" markdown="1">
<summary>When do you send a corrected claim versus an appeal?</summary>

A corrected claim when our billing data was wrong: code, modifier, units, provider, diagnosis. An appeal when the claim was right but we disagree with the payer's decision, or the payer needs clinical justification, for example medical necessity. If the payer clearly made a processing error, I ask for reprocessing on the call first.
</details>

<details class="qa" markdown="1">
<summary>A payer suddenly starts denying one CPT code across many claims. What do you do?</summary>

Confirm the pattern with a report (payer, code, denial reason, date range). Check whether the payer changed a policy, for example a new authorization requirement or a new edit. If it's a payer error, send a claim list to the provider representative for bulk reprocessing. If it's a policy change, inform the client and front-end teams, update scrubber rules and authorization lists, and work the existing denials with the right action.
</details>

<details class="qa" markdown="1">
<summary>How do you handle a timely filing denial?</summary>

Look for proof the claim reached the payer in time: clearinghouse acceptance report, 277CA acceptance, payer acknowledgment, or another payer's timely denial if we billed the wrong payer first. Appeal with that proof. If none exists, it's a provider write-off, never patient responsibility, and I tag the root cause, often an unworked rejection.
</details>

<details class="qa" markdown="1">
<summary>Explain the Medicare appeal levels.</summary>

Redetermination by the MAC within 120 days, reconsideration by a QIC within 180 days, an ALJ hearing within 60 days if the amount in controversy is met, Medicare Appeals Council review within 60 days, and federal district court within 60 days with a higher threshold. Clerical errors are often fixed faster with a reopening.
</details>

<details class="qa" markdown="1">
<summary>How do you identify underpayments?</summary>

Compare expected reimbursement from the contract or fee schedule with the actual allowed amount on the ERA. Look at variance by payer and code, check contract terms and amendments, then dispute individually or in bulk.
</details>

<details class="qa" markdown="1">
<summary>What is the 60-day overpayment rule?</summary>

Medicare and Medicaid overpayments must be reported and returned within 60 days after they're identified. We review credit balances regularly so we meet that requirement.
</details>

## Metrics and leadership

<details class="qa" markdown="1">
<summary>Which KPIs would you report to a client?</summary>

Days in AR, AR over 90 days, net collection rate, clean claim rate, first-pass resolution, denial rate by payer and root cause, charge lag, and at team level productivity, quality score and touches per claim. I'd show trends, not just snapshots, and pair each issue with an action.
</details>

<details class="qa" markdown="1">
<summary>Days in AR jumped from 38 to 47 in two months. How do you investigate?</summary>

Check charges (a volume spike raises AR temporarily), charge lag, rejection backlogs, denial trends by payer, any payer that slowed or stopped paying (system changes, credentialing), posting backlog and unapplied cash, and whether credits are distorting the number. Then fix the biggest driver first.
</details>

<details class="qa" markdown="1">
<summary>How do you reduce the denial rate?</summary>

Tag every denial with a root cause and preventability, build a Pareto by dollars, and take the top causes to the teams that create them, such as eligibility checks closer to the visit, authorization lists in scheduling, scrubber edits for modifiers, credentialing holds. Then measure whether the fix worked.
</details>

## Quality audit

<details class="qa" markdown="1">
<summary>What do you check when auditing an AR analyst's work?</summary>

Whether the action was correct for the denial or status, its financial impact (wrong write-off, missed payment), compliance with the client SOP and payer rules, quality of notes (status, reference number, action, follow-up date), and whether the root cause was captured. Each error is classified by type and severity.
</details>

<details class="qa" markdown="1">
<summary>How do you classify audit errors?</summary>

Commonly as financial errors (affecting payment, such as an incorrect write-off or adjustment), non-financial or procedural errors (wrong process steps that didn't change money yet), documentation errors (incomplete or unclear notes), and compliance errors (HIPAA or regulatory breaches). Weighting follows the client's audit scorecard, with financial and compliance errors weighted most heavily.
</details>

<details class="qa" markdown="1">
<summary>How do you decide sample size for an audit?</summary>

Based on the client's agreement and risk: a fixed percentage or count per analyst per period, higher for new hires or analysts below target, and targeted samples for high-risk actions such as write-offs, refunds and high-dollar claims.
</details>

<details class="qa" markdown="1">
<summary>An analyst disputes your audit finding. What do you do?</summary>

Review it together against the SOP and source documents. If the analyst is right, correct the score and update the audit guideline if it was unclear. If not, explain with the reference so they learn. Track disputes, because frequent disputes can mean the SOP needs clarity.
</details>

<details class="qa" markdown="1">
<summary>How do you turn audit findings into improvement?</summary>

Group errors by type, analyst and process, share trends with leads and trainers, run focused refreshers, update job aids and checklists, and re-audit to confirm the improvement. Some errors point to system or process fixes rather than individual coaching.
</details>

## Situational

<details class="qa" markdown="1">
<summary>A client asks you to write off a large batch of old claims. What do you do?</summary>

Review the batch first: are any still within appeal or timely filing windows, any with proof of timely filing, credit balances mixed in, or patient balances? Confirm approval levels, use the correct adjustment codes, and report the root causes so the backlog doesn't recur.
</details>

<details class="qa" markdown="1">
<summary>You notice a colleague billing patients for QMB coinsurance. What do you do?</summary>

Raise it immediately with the lead, because it's a regulatory violation. Help correct the affected accounts, refund any patient payments collected, and push for a system flag so QMB statements are suppressed.
</details>
