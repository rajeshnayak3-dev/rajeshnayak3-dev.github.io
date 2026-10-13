---
title: Denial categories and how to work each one
short: Denial categories
description: Every major denial category, what causes it, the codes you'll see, the questions to ask, the fix, and how to prevent it. The working playbook for AR and denial analysts.
order: 3
level: Intermediate
keywords: denial categories eligibility denials authorization denials coding denials medical necessity denials timely filing COB denials bundling credentialing denials duplicate denials non covered
quiz:
  - q: A claim denied CO-27 (coverage terminated). Eligibility confirms termination before the DOS. What's the best next step?
    options:
      - Appeal to the payer
      - Contact the patient for new insurance, check portals and Medicaid, then bill the right payer or move to patient per policy
      - Write it off immediately
      - Resubmit the same claim
    answer: 1
    why: The denial is correct. The task is finding the right payer, or moving the balance to the patient if there is none and policy allows.
  - q: A medical necessity denial (CO-50) comes back and the diagnosis is supported by the note but wasn't on the claim. What do you do?
    options:
      - Appeal without changes
      - Have coding confirm, then send a corrected claim with the supporting diagnosis
      - Bill the patient
      - Write it off
    answer: 1
    why: If documentation supports a diagnosis that was left off, a coding-reviewed corrected claim fixes the denial. If the claim was right, appeal with records.
  - q: Which category is CO-B7 in?
    options:
      - Coding
      - Provider eligibility and credentialing
      - Coordination of benefits
      - Timely filing
    answer: 1
    why: B7 means the provider wasn't certified or eligible to be paid for the service on that date, typically a credentialing or enrollment gap.
---

## How to use this page

Each category below follows the same pattern: **what it is**, **typical codes**, **ask the payer**, **fix**, **prevent**. Hospital and professional differences are flagged where they matter. Full details for each code are in the [code library](/denials/codes/).

## 1. Eligibility and registration denials

**What:** the payer can't match the patient, or coverage wasn't active on the date of service.

**Codes:** CO-26 (before coverage), CO-27 (after coverage ended), CO-31 (patient not identified as insured), CO-32 (not an eligible dependent), CO-33 (no dependent coverage), CO-140 (name and ID don't match).

**Ask:** effective and termination dates; the member ID and name on file; whether there's other coverage on file; whether retro coverage (COBRA, Medicaid) is pending.

**Fix:** correct demographics and resubmit; find the right insurance (ask the patient, check Medicaid and Medicare portals); bill the patient only per policy when no coverage exists.

**Prevent:** scan cards and verify eligibility every visit, close to the date of service.

## 2. Coordination of benefits denials

**What:** the payer thinks another plan should pay first, or needs the primary's payment information.

**Codes:** CO-22, CO-109, OA-23 issues, remarks MA04, N4, N479.

**Ask:** what other insurance the payer has on file and its dates; whether the member needs to update COB; where to send the primary EOB.

**Fix:** bill in the correct order; send primary EOB data with the secondary claim; ask the patient to update COB with the payer (many payers require the member to do it).

**Prevent:** ask about other insurance at every visit; complete the Medicare MSP questionnaire.

## 3. Authorization and referral denials

**What:** the service needed approval that wasn't obtained, didn't match, expired or was exceeded.

**Codes:** CO-197 (absent), CO-198 (exceeded), CO-15 (invalid or doesn't apply), CO-242 (not provided by network or primary care provider), N54 remark (inconsistent with authorized services).

**Ask:** is there an authorization on file for this provider, code and date? Does the payer allow retro-authorization? What are the appeal options?

**Fix:** add the auth number if it existed but wasn't on the claim; request a retro-auth or auth update if allowed; appeal with clinical documentation for urgent or emergency situations; write off per contract if the provider is at fault and the patient is held harmless.

**Prevent:** auth checks at scheduling; match the auth to code, units, dates and site; update the auth when the procedure changes.

**Hospital note:** inpatient authorizations cover a **number of days and level of care**. Denials often hit extra days (concurrent review) rather than the whole stay.

## 4. Coding and billing error denials

**What:** the claim data is invalid, inconsistent or incomplete.

**Codes:** CO-16 (missing info, with a RARC), CO-4 (modifier), CO-5 (POS), CO-6/CO-7 (age/sex), CO-11 (diagnosis inconsistent with procedure), CO-146 (invalid diagnosis for DOS), CO-181 (invalid procedure for DOS), CO-182 (invalid modifier for DOS), CO-189 (unlisted code when a specific code exists), CO-199 (revenue code and procedure code mismatch).

**Ask:** what exactly is missing or invalid (the RARC usually says); whether a corrected claim is accepted.

**Fix:** coding review where codes change; corrected claim (frequency 7) or Medicare reopening.

**Prevent:** scrubber edits, annual and quarterly code updates, coder and charge entry feedback.

## 5. Bundling and NCCI denials

**What:** a service is considered part of another service paid on the same day, or not separately payable.

**Codes:** CO-97 (included in another service), CO-236 (not compatible with another procedure under NCCI), CO-234 (not paid separately), remark M80, M15.

**Ask:** which service it's bundled into; which edit or policy applied; whether a modifier would be accepted.

**Fix:** if the services were truly distinct and documented, a corrected claim with the right modifier (25, 59, XE/XS/XP/XU, RT/LT); if the edit is correct, adjust off per policy.

**Prevent:** NCCI-aware scrubber; coder education on modifier use.

## 6. Medical necessity and coverage denials

**What:** the payer won't pay because the service isn't medically necessary for the diagnosis, isn't covered by the plan, or is experimental.

**Codes:** CO-50 (not medically necessary), CO-167 (diagnosis not covered), CO-96 (non-covered), CO-204 (not covered under the current benefit plan), CO-55 (experimental or investigational), CO-49 (routine or preventive exam not covered), remarks N115 (LCD), N386 (NCD), N130.

**Ask:** which policy, LCD or NCD was applied; which diagnoses are covered; whether records will be reviewed.

**Fix:** check the claim has the most specific supported diagnosis (corrected claim if not); appeal with records and the payer's own policy criteria; with a valid ABN or waiver, bill the patient (PR group).

**Prevent:** check coverage policies at scheduling; issue ABNs and waivers when needed; document medical necessity clearly.

## 7. Frequency and benefit limit denials

**What:** the service exceeds the allowed number or frequency, or a benefit maximum is reached.

**Codes:** CO-119 (benefit maximum reached), CO-151 (information doesn't support this many or this frequency of services), CO-273 (coverage or program guidelines exceeded), remark N362 (days or units exceed acceptable maximum).

**Fix:** verify the units or dates billed are correct; appeal with documentation if medically necessary; bill the patient if they were informed and agreed (or secondary insurance).

**Prevent:** track visit counts and screening intervals during verification.

## 8. Duplicate denials

**What:** the payer thinks the claim or line was already processed.

**Codes:** CO-18 (exact duplicate), B13 (previously paid), remark N522 (duplicate of a crossover claim).

**Ask:** the original claim number and its status; whether the original was paid, denied or pending.

**Fix:** if the original was paid, no action (post or locate the payment); if the second line was a **different** service (for example, repeat procedure or bilateral), send a corrected claim with the right modifier (76, 77, 91, RT/LT, 50).

**Prevent:** never resubmit an adjudicated claim as an original; check status before resubmitting.

## 9. Timely filing denials

**What:** the payer received the claim after its filing limit.

**Codes:** CO-29.

**Ask:** the date the payer first received the claim; the timely filing limit; whether proof of timely filing is accepted.

**Fix:** appeal with **proof of timely filing**: clearinghouse acceptance report, 277CA, payer acknowledgment or a prior payer's EOB showing the claim was filed with the wrong payer in time. Without proof, write off (it's the provider's liability).

**Prevent:** clear rejection queues daily; track no-response claims; know each payer's limit.

## 10. Provider and credentialing denials

**What:** the payer doesn't recognise the provider as eligible to bill that service on that date.

**Codes:** CO-B7 (provider not certified or eligible on this date), CO-185 (rendering provider not eligible), CO-170 (payment denied when performed by this type of provider), CO-183 (referring provider not eligible to refer), CO-206/207/208 (NPI missing, invalid or not matched).

**Ask:** the provider's enrollment and effective dates with the payer; which NPI or tax ID is on file.

**Fix:** coordinate with credentialing; once effective (sometimes retroactively), resubmit or request reprocessing; correct NPIs and taxonomies.

**Prevent:** don't schedule new providers with a payer until they're effective, or bill under a permitted supervising arrangement where rules allow.

## 11. Injury and liability denials

**What:** the payer believes workers' comp, auto (no-fault) or a liability insurer is responsible.

**Codes:** CO-19 (workers' comp), CO-20 (liability carrier), CO-21 (no-fault carrier), and pended accident questionnaires.

**Fix:** bill the responsible carrier with claim number and details; if that carrier denies, bill the health plan with the denial letter or PIP exhaustion letter; have the patient complete the accident questionnaire.

## 12. Information-request denials

**What:** the payer asked for records or information and didn't receive it in time.

**Codes:** CO-226 (information requested from the provider not provided or insufficient), PR-227 (information requested from the patient not provided), CO-252 (attachment required).

**Fix:** send the records or attachment (often by the payer portal or 275), then request reprocessing; ask the patient to respond to the payer for PR-227.

## Hospital versus professional quick view

See [hospital versus professional denials](/denials/hospital-vs-professional-denials/) for inpatient-specific denials such as DRG downgrades, level of care and readmissions.

!!! interview "If an interviewer asks “What types of denials have you worked?”"
    Name categories, not just codes: “Eligibility denials like CO-27, COB denials like CO-22, authorization denials like CO-197, coding denials like CO-4 and CO-16 with remark codes, bundling denials like CO-97, medical necessity denials like CO-50, timely filing CO-29 and credentialing denials like CO-B7.” Then give one example with what you did and the result.
