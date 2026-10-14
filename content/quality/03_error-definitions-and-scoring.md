---
title: Error definitions and scoring rubrics
short: Errors and scoring
description: Critical versus non-critical errors, opportunity-based versus account-based scoring, how to write error definitions people can apply the same way, and why the scoring method changes the number.
order: 3
level: Advanced
reviewed: 2026-10-14
keywords: QA scoring rubric critical error non-critical error fatal error weighted scoring opportunity based accuracy account level accuracy error definitions audit checklist RCM quality score
objectives:
  - Tell a critical error from a non-critical one using impact, not opinion
  - Write error definitions that two auditors would apply the same way
  - Calculate opportunity-based and account-based accuracy and explain the difference
  - Decide when a single error should fail an account
quiz:
  - q: "An auditor reviews 40 accounts with 5 checkpoints each (200 opportunities) and finds 12 errors spread across 9 accounts. What are the opportunity-based and account-based accuracy?"
    options:
      - 94% and 77.5%
      - 77.5% and 94%
      - 94% and 94%
      - 70% and 77.5%
    answer: 0
    why: "Opportunity-based: (200 − 12) ÷ 200 = 94%. Account-based: 31 of 40 accounts had no error, so 31 ÷ 40 = 77.5%. The same work gives very different numbers, so always state the method."
  - q: Which is a critical error in most RCM audit rubrics?
    options:
      - A note uses an abbreviation that isn't on the approved list
      - A patient statement sent for Medicare coinsurance on a QMB patient
      - The follow-up date is one day later than the SOP suggests, with no impact
      - Extra spaces in a note
    answer: 1
    why: Billing a QMB patient for Medicare cost-sharing breaks a federal billing prohibition and harms the patient. Critical errors are defined by financial, compliance or patient impact.
  - q: Two auditors keep disagreeing on whether a note is "incomplete". What fixes this best?
    options:
      - Let the senior auditor decide every time
      - Rewrite the definition as required elements (date, source, reference number, status, action, follow-up date) and calibrate on examples
      - Remove the checkpoint
      - Average their scores
    answer: 1
    why: Vague definitions cause disagreement. Listing required elements makes the check objective, and calibration on shared examples confirms everyone applies it the same way.
---

## What an error definition needs

Every checkpoint in a rubric should say exactly what "correct" means. A good definition has:

- **The requirement:** what must be true, in observable terms
- **The source:** which SOP, payer rule or regulation it comes from, with version
- **The severity:** critical or non-critical, and why
- **Examples:** one pass, one fail, and a borderline case with the ruling

| Weak definition | Strong definition |
|---|---|
| "Note is complete" | "Note contains: date, payer or portal, reference number (if a call), claim status, action taken, next action and follow-up date. Missing any one = fail." |
| "Correct action taken" | "Action matches the payer playbook v12 for the denial code and claim type, or deviation is explained in the note and approved by the lead." |
| "Posted correctly" | "Every ERA line posted with matching paid, contractual, patient-responsibility and denial amounts; account balance equals the ERA's patient responsibility after posting." |

## Critical and non-critical errors

Decide severity by **impact**, not by how annoying the error is.

| Severity | Typical meaning | RCM examples |
|---|---|---|
| **Critical** | Causes or risks lost revenue, a compliance breach, an incorrect patient bill, or a privacy incident | Billing a QMB patient for Medicare cost-sharing; writing off a collectible balance; posting a payment to the wrong patient; missing a timely filing or appeal deadline that was workable; sending PHI to the wrong party |
| **Non-critical** | A standard wasn't followed, but there's no financial, compliance or patient impact on this account | A note missing the rep's name when the reference number is present; non-standard abbreviation; follow-up date slightly outside the SOP range with no deadline risk |

Many teams make one critical error **fail the whole account** (sometimes called an auto-fail or fatal error), while non-critical errors only reduce the score. Whatever you choose, write it in the rubric and apply it to everyone.

## Two ways to score, two different numbers

**Opportunity-based accuracy** counts every checkpoint as an opportunity.

> Opportunity accuracy = (Opportunities − Errors) ÷ Opportunities × 100

**Account-based accuracy** asks whether each account was completely right.

> Account accuracy = Accounts with no errors ÷ Accounts reviewed × 100

!!! example "Same audit, two scores"
    40 accounts, 5 checkpoints each = 200 opportunities. 12 errors, found in 9 accounts.

    - Opportunity accuracy: (200 − 12) ÷ 200 = **94%**
    - Account accuracy: 31 ÷ 40 = **77.5%**

    Neither is wrong. Opportunity-based scores show *how much* of the work was right; account-based scores show how often a whole account was right, which is closer to what the payer and patient experience. Report which one you use, and don't compare across teams that use different methods.

**Weighted scoring** gives checkpoints different points (for example, correct action 40, note 20, follow-up date 20, claim edits 20). It reflects importance better, but the weights are a judgment call; agree them with the client or operations lead and keep them stable so trends mean something.

## Rebuttals

Associates should be able to dispute a finding. A fair rebuttal process:

1. The associate cites the rule or evidence that supports their action, within a set time.
2. A second reviewer (not the original auditor) decides.
3. The decision, and the reason, is recorded.
4. If the rebuttal exposes an unclear rule, the rule is fixed and the change is communicated.

A high rebuttal success rate usually points to vague definitions or auditors applying rules differently, which is what [calibration](/quality/calibration/) is for.

!!! mistake "Auditor's red flag"
    Rubrics where most checkpoints are about format and very few are about whether the account will actually be paid correctly. The score looks high while revenue leaks.

!!! interview "If an interviewer asks “How do you decide if an error is critical?”"
    “By impact. If it causes or risks lost revenue, a compliance breach, an incorrect patient bill or a privacy issue, it's critical, and in our rubric a critical error fails the account. If a standard wasn't followed but there's no financial, compliance or patient impact, it's non-critical and reduces the score. Each checkpoint has a written definition, a source rule and pass and fail examples, so auditors apply it the same way.”
