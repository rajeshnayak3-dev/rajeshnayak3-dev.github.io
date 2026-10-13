---
title: Recoupments, offsets and payer audits
short: Recoupments and offsets
description: When payers take money back. How recoupments appear on the ERA, posting takebacks correctly, reviewing overpayment letters, and the audits (RAC, TPE, commercial) that trigger them.
order: 7
level: Advanced
keywords: recoupment offset takeback PLB WO forward balance overpayment demand letter RAC audit TPE UPIC commercial payment integrity audit reversal
quiz:
  - q: On an 835, where does a recoupment from a different claim usually appear?
    options:
      - In the CAS segment of the current claim
      - As a provider-level adjustment (PLB), often with code WO and a reference to the original claim
      - In the 277CA
      - Nowhere; it's only in a letter
    answer: 1
    why: Recoupments taken from a check for other claims appear as PLB adjustments. Posters must apply them to the original claim.
  - q: A payer letter says it will recoup $4,200 for claims it believes were overpaid. First step?
    options:
      - Let it happen without review
      - Review each claim in the letter against the contract, records and payment history, and dispute errors within the deadline
      - Bill the patients
      - Write off the amount
    answer: 1
    why: Overpayment demands can be wrong. Review promptly, because dispute windows are short and silence usually means agreement.
---

## What recoupment is

A **recoupment** (also **offset** or **takeback**) is the payer recovering money it previously paid, usually by **subtracting it from a future payment** rather than asking for a check.

Reasons include:

- The payer found it paid twice, or paid the wrong amount
- Coverage was terminated retroactively
- Another payer was primary (COB correction)
- A post-payment **audit** found coding or documentation problems
- The provider sent a corrected or void claim
- Credentialing or enrollment problems discovered after payment

## How it looks on the ERA

| Situation | On the 835 |
|---|---|
| Payer reprocesses a claim | A **reversal** (claim status 22, negative amounts) for the original payment, then a new line with the corrected payment |
| Payer recovers money for a claim not on this check | **PLB** provider-level adjustment, often code **WO** (overpayment recovery), with the original claim number |
| Recovery is larger than the check | **FB** (forward balance): the negative amount carries forward to future checks |
| Interest paid | PLB code **L6** (interest owed) |

## Posting takebacks correctly

1. **Find the original claim** using the reference in the reversal or PLB.
2. Post the **negative payment** against the original claim and reverse related adjustments.
3. Post the **new payment**, if any.
4. Re-evaluate the balance: is something now owed by the patient, another payer, or is it a denial to work?
5. Track **forward balances** until fully recovered.

If a PLB recoupment is posted to “unapplied” and never matched, one account shows paid when it isn't, and the bank deposit won't reconcile.

## Overpayment letters

Many recoupments start with a letter (or portal notice) listing claims and amounts, with a deadline to dispute or pay before automatic offset.

When one arrives:

1. **Log it** with the deadline.
2. **Review each claim**: payment history, contract terms, records, COB information.
3. **Agree** to valid items (allow offset or send a refund).
4. **Dispute** invalid items in writing, with evidence, before the deadline.
5. For retro-termination recoupments, **bill the correct payer** quickly (watch their timely filing, often counted from the recoupment date).

## Audits behind recoupments

| Audit | Who | Focus |
|---|---|---|
| **RAC** (Recovery Audit Contractors) | Medicare contractors paid a share of what they recover | Improper payments: coding, medical necessity, DRG validation, documentation |
| **TPE** (Targeted Probe and Educate) | Medicare MACs | Providers with high error rates on specific services; record reviews with education |
| **UPIC** | Medicare program integrity contractors | Potential fraud, waste and abuse |
| **SMRC** | Supplemental Medical Review Contractor | CMS-directed reviews of specific services |
| **Medicaid RAC / state audits** | State Medicaid agencies | Same as Medicare, under state rules |
| **Commercial payment integrity** | Payers or their vendors | Coding, DRG, itemized bill and clinical validation reviews; COB recoveries |

Medicare RAC and similar audit findings follow the normal **Medicare appeal levels**. Appealing at the right time can stop or pause recoupment in some cases (for example, Medicare limits recoupment while a timely level 1 or 2 appeal is pending).

!!! tip "Auditor's eye"
    Repeated recoupments for the same reason (for example, modifier 25 on the same E/M and procedure pairs) point to a documentation or coding pattern. Fixing the pattern prevents a larger audit later.

!!! interview "If an interviewer asks “What is a recoupment?”"
    “A recoupment is when the payer takes back money it previously paid, usually by offsetting it from a future payment. On the ERA it appears as a reversal of the original claim or as a provider-level adjustment, like WO, referencing the original claim. We post it against the original claim, re-evaluate the balance, and if the recoupment is wrong we dispute or appeal within the deadline.”
