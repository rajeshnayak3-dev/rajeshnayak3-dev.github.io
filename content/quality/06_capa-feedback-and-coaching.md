---
title: Corrective and preventive action, feedback and re-audit
short: CAPA and coaching
description: The difference between correction, corrective action and preventive action, what a CAPA record contains, how to give audit feedback that changes behavior, and how to check the fix worked.
order: 6
level: Advanced
reviewed: 2026-10-14
keywords: CAPA corrective action preventive action correction effectiveness check audit feedback coaching re-audit RCM quality improvement action plan
objectives:
  - Distinguish correction, corrective action and preventive action
  - Write a CAPA record with owner, due date and effectiveness check
  - Give audit feedback that is specific, fair and tied to the standard
  - Plan a re-audit that shows whether the fix worked
quiz:
  - q: An audit finds three QMB patients were sent statements for Medicare coinsurance. Which is the corrective action?
    options:
      - Recall the three statements and refund any payments
      - Fix the registration screen so QMB status sets a statement-suppression flag, and retrain registration staff
      - Audit QMB accounts at a new clinic before it goes live
      - Tell the associate to be careful
    answer: 1
    why: Recalling and refunding is the correction (fixing these accounts). Changing the process so it can't recur is corrective action. Applying the lesson to a new clinic before it has the problem is preventive action.
  - q: What makes a CAPA effective?
    options:
      - It was completed on time
      - It has an owner
      - Data after the change shows the problem stopped or dropped to the target
      - The client approved it
    answer: 2
    why: Completing the task doesn't prove it worked. An effectiveness check compares the measure before and after.
  - q: Which feedback is most useful?
    options:
      - "Your notes need improvement."
      - "Account 1182: note missing the reference number and follow-up date (AR SOP v3.2, section 4.1). Here's a complete example. Let's look at five of your notes together on Thursday."
      - "You scored 88%."
      - "Please follow the SOP."
    answer: 1
    why: Specific, tied to the rule, with an example and a next step. The person knows exactly what to change.
---

## Three levels of fix

```flow
type: steps
title: From fixing accounts to fixing the process
steps:
  - t: Correction
    d: Fix the accounts that went wrong
    c: pink
    a: then
  - t: Corrective action
    d: Remove the cause
    c: yellow
    a: then
  - t: Preventive action
    d: Stop it happening elsewhere
    c: blue
    a: prove it
  - t: Effectiveness check
    d: Re-audit; close only on data
    c: green
```

| Term | What it does | Example |
|---|---|---|
| **Correction** | Fixes the specific accounts that went wrong | Recall statements sent to QMB patients and refund payments |
| **Corrective action** | Removes the cause so the same problem doesn't recur | Registration screen sets a statement-suppression flag for QMB; posters trained to spot QMB remark codes |
| **Preventive action** | Stops a *potential* problem before it happens elsewhere | Apply the same flag and training at a new clinic before it starts billing |

Together these are often called **CAPA** (corrective and preventive action). Every serious finding needs a correction; repeated or high-impact findings need corrective action; lessons that apply elsewhere deserve preventive action.

## What a CAPA record contains

| Field | Example |
|---|---|
| ID and date opened | CAPA-2026-014, 14 October |
| Problem statement | 3 QMB patients received statements for Medicare coinsurance in September |
| Impact | Compliance breach (federal QMB billing prohibition); patient harm; refund of $64 |
| Root cause | No QMB flag in registration; statement job doesn't check Medicaid eligibility |
| Correction | Statements recalled, $64 refunded, accounts adjusted per client policy |
| Corrective action | QMB field added to registration with statement suppression; posting SOP updated to check QMB remark codes |
| Preventive action | Same change applied to the two clinics going live next quarter |
| Owner and due date | Billing systems lead, 31 October; posting lead, 7 November |
| Effectiveness check | Audit 100% of patient statements for Medicare primary + Medicaid patients for 60 days; target zero QMB statements |
| Status and closure | Open / closed with evidence |

## Feedback that changes behavior

Audit feedback works when it's:

- **Specific:** the account, the checkpoint, what was wrong and what right looks like
- **Tied to the standard:** cite the SOP, version and section
- **Timely:** within days, while the work is fresh
- **Balanced:** mention what was done well, especially on hard accounts
- **Two-way:** ask what made the error likely; the associate often knows the process gap
- **Followed up:** agree a next step and check it

Keep feedback about the work, in private, and in the approved system. Patterns across several people point to a process or training gap, not to individuals.

## Re-audit and effectiveness checks

After a correction or coaching:

1. **Re-audit** the person or process after enough time for the change to show (often the next audit period), with a sample big enough to see a real difference (see [sampling](/quality/sampling/)).
2. **Compare** the same measure before and after: error rate on the checkpoint, denial rate for the category, rework hours.
3. **Close** the CAPA only when the data shows the target was met, and record the evidence.
4. **Reopen** or escalate if it didn't work, and revisit the root cause.

!!! mistake "Auditor's red flag"
    CAPAs closed because the task was done ("training delivered") with no data showing the error stopped. Training is an action, not proof of effectiveness.

!!! interview "If an interviewer asks “What do you do after an audit finds a pattern of errors?”"
    “First the correction: fix the affected accounts. Then root cause, so the corrective action targets the process, such as an SOP update, a system edit or training on a specific rule. I log it as a CAPA with an owner, a due date and an effectiveness check, give individual feedback that's specific and tied to the standard, and re-audit to prove the error rate actually dropped before closing it.”

Source for QMB facts used in the example: [CMS MLN7936176, Prohibition on billing Qualified Medicare Beneficiaries](https://www.cms.gov/files/document/mln7936176-prohibition-billing-qualified-medicare-beneficiaries.pdf).
