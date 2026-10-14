---
title: What is a claim denial?
short: What is a denial?
description: Denials versus rejections and zero-pays, hard and soft denials, preventable and non-preventable denials, what denials cost, and the five-step way to work any denial.
order: 1
level: Beginner
keywords: claim denial definition hard denial soft denial preventable denial denial rate cost of denials rejection vs denial zero pay
quiz:
  - q: Which of these is NOT a denial?
    options:
      - CO-197, authorization absent
      - PR-1, entire allowed amount applied to deductible
      - CO-29, timely filing expired
      - CO-50, not medically necessary
    answer: 1
    why: PR-1 means the claim processed correctly and the patient owes the deductible. It's a valid zero payment, not a denial.
  - q: What is a soft denial?
    options:
      - A denial that can't be fixed
      - A temporary or correctable denial, such as one waiting for records, that can be paid once fixed
      - A rejection
      - A patient complaint
    answer: 1
    why: Soft denials are usually correctable (missing information, records needed). Hard denials are final unless appealed successfully, and often end in write-offs.
  - q: Why do RCM teams track whether a denial was preventable?
    options:
      - To blame individuals
      - To find process fixes upstream that stop the same denial from happening again
      - Because payers require it
      - It isn't tracked
    answer: 1
    why: Most denials are preventable. Tracking where they start lets teams fix registration, authorization or coding processes.
---

## The definition

A **denial** is a payer's decision, after **adjudicating** a claim, to **refuse payment** for all or part of it. The reason is reported on the ERA or EOB with a **claim adjustment reason code (CARC)**, a **group code**, and often **remark codes (RARCs)**.

- **Claim-level denial:** the whole claim is denied (for example, patient not covered).
- **Line-level denial:** one or more service lines are denied while others pay (for example, a bundled procedure).

## What's not a denial

| Looks like a denial | Actually |
|---|---|
| **Rejection** at the clearinghouse or on the 277CA | The claim never entered adjudication. Fix and send a new claim. |
| **$0 paid, PR-1** (deductible) | Correctly processed; bill the patient or secondary |
| **$0 paid, CO-24** (capitation) | Expected under a capitated contract |
| **$0 paid, OA-23** on a secondary | Primary paid more than the secondary would allow |
| **Reduced payment, CO-45** | Contractual adjustment; check it's the right amount |
| **Pended claim** | Still in process; no decision yet |

## Hard versus soft denials

| | Soft denial | Hard denial |
|---|---|---|
| Meaning | Temporary or correctable | Final decision on the claim as billed |
| Examples | Missing information (CO-16), records requested, COB update needed, wrong member ID | Timely filing (CO-29), non-covered service (CO-96, CO-204), benefit maximum reached (CO-119) |
| Usual outcome | Paid after correction | Appeal if there's a strong case; otherwise write-off or patient responsibility |

## Preventable versus non-preventable

Industry studies regularly find that a large majority of denials are **preventable**: they come from errors or missed steps the provider controls.

- **Preventable:** eligibility not verified, authorization not obtained, wrong code, missing modifier, late filing, missing documentation.
- **Harder to prevent:** payer processing errors, retroactive terminations, changes in payer policy, clinical disagreements on medical necessity.

## Why denials matter so much

- **Delayed cash:** a denied claim takes weeks or months longer to pay.
- **Rework cost:** each denial needs analyst time, calls, letters and sometimes clinical review.
- **Lost revenue:** many denials are never reworked at all, and the money is written off or quietly ages out.
- **Patient experience:** some denials end up as surprise bills.
- **Compliance risk:** repeated coding denials can trigger payer audits.

A denial rate that creeps from 5% to 10% can mean hundreds of thousands of dollars delayed or lost for a mid-sized practice.

## The five-step way to work any denial

```flow
type: steps
title: Work any denial in five steps
numbered: true
steps:
  - t: Read
    d: Group code, CARC, RARC, the line and the payer's claim number
    c: blue
  - t: Investigate
    d: Claim as billed, eligibility, auth, notes, payer policy. Is the payer right?
    c: blue
  - t: Decide
    d: Corrected claim, reprocessing, records, appeal, other payer, patient contact, or approved write-off
    c: yellow
  - t: Act and document
    d: Do it; note the action, reference number and follow-up date
    c: green
  - t: Prevent
    d: Tag the root cause so the upstream team can fix it
    c: purple
```

## Denial categories at a glance

| Category | Typical codes | Root cause usually in |
|---|---|---|
| Eligibility and registration | CO-26, CO-27, CO-31, CO-32, CO-140 | Front desk, eligibility |
| Coordination of benefits | CO-22, CO-109, MA04 | Registration, patient |
| Authorization and referral | CO-197, CO-198, CO-15, CO-242 | Authorization team |
| Coding and billing | CO-4, CO-11, CO-16, CO-146, CO-181, CO-189 | Coding, charge entry |
| Bundling and NCCI | CO-97, CO-236, CO-234 | Coding |
| Medical necessity and coverage | CO-50, CO-167, CO-96, CO-204, CO-55 | Documentation, eligibility, ABN process |
| Frequency and limits | CO-119, CO-151 | Eligibility, scheduling |
| Duplicate | CO-18, B13 | Billing |
| Timely filing | CO-29 | Billing, AR follow-up |
| Provider and credentialing | CO-B7, CO-185, CO-170, CO-206 | Credentialing |
| Injury and liability | CO-19, CO-20, CO-21 | Registration |

Each category is explained in [denial categories](/denials/denial-categories/), and every code has its own page in the [code library](/denials/codes/).

!!! mistake "Auditor's red flag"
    Rejections logged as denials, or denials logged as rejections. They need different actions, and mixing them up sends claims down the wrong path.

!!! interview "If an interviewer asks “What is a denial and how is it different from a rejection?”"
    “A denial is when a payer processes a claim and refuses to pay all or part of it, with a reason shown by CARC and RARC codes on the ERA. A rejection happens before processing, when the claim fails format or data checks at the clearinghouse or payer front end, so it never enters the payer's system. Rejections are fixed and resubmitted as new claims; denials need correction, reconsideration or appeal.”
