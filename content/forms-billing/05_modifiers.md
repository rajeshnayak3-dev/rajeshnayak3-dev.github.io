---
title: Modifiers every biller must know
short: Modifiers
description: The most-used CPT and HCPCS modifiers, when each one applies, the payment effect, and the modifier mistakes that cause denials and audit findings.
order: 5
level: Intermediate
keywords: modifiers modifier 25 59 XE XS XP XU 26 TC 50 51 76 77 78 79 24 57 58 91 RT LT GA GY GZ KX 95 22 52 53 80 82 AS QK QX QZ JW JZ
quiz:
  - q: A patient comes for a scheduled knee injection and the doctor also evaluates new chest pain. Which modifier goes on the E/M code?
    options:
      - "59"
      - "25"
      - "57"
      - "24"
    answer: 1
    why: Modifier 25 marks a significant, separately identifiable E/M service on the same day as a procedure.
  - q: A surgeon sees a post-op patient for an unrelated problem during the 90-day global period. Which modifier applies to the E/M?
    options:
      - "24"
      - "25"
      - "58"
      - "78"
    answer: 0
    why: Modifier 24 is for an unrelated E/M service by the same physician during a postoperative period.
  - q: What does modifier GA tell Medicare?
    options:
      - The service is statutorily excluded
      - A valid ABN is on file
      - No ABN was obtained
      - The service is a telehealth visit
    answer: 1
    why: GA means a waiver of liability statement (ABN) was issued as required. GY means statutorily excluded; GZ means expected denial with no ABN.
  - q: When is it appropriate to use modifier 59 or an X modifier?
    options:
      - Whenever a claim denies for bundling
      - Only when documentation shows the services were distinct (separate site, session, incision or encounter)
      - On every surgical claim
      - When the payer asks on the phone
    answer: 1
    why: 59 and XE/XS/XP/XU bypass NCCI edits only when services are truly distinct. Using them just to get paid is a common audit finding.
---

## What modifiers do

A **modifier** is a two-character code added to a CPT or HCPCS code to give extra information without changing the code's definition. It can:

- explain that a service was **distinct** from another,
- say **which side** of the body or which finger,
- split a service into **professional and technical** parts,
- show that a service was **reduced**, **repeated** or **performed during a global period**,
- report **liability notices** (ABNs) or **coverage** situations,
- and change **payment**.

A line can carry up to **four modifiers**. Put payment-affecting modifiers (such as 26, TC, 50, 51, 22) first and informational ones (such as RT, LT) after, unless a payer instructs otherwise.

## Evaluation and management modifiers

| Modifier | Meaning | Example |
|---|---|---|
| **25** | Significant, separately identifiable E/M by the same physician on the same day as a procedure or other service | Visit for new symptoms plus a joint injection |
| **57** | Decision for surgery, on an E/M the day before or day of a **major** surgery (90-day global) | ER consult that leads to an appendectomy the same day |
| **24** | Unrelated E/M by the same physician during a post-op period | Surgeon treats a rash during a knee surgery global period |

!!! warning "25 is the most audited modifier"
    Modifier 25 needs documentation showing a problem beyond the usual pre-procedure assessment. A note that only says “patient here for injection” doesn't support 25. Payers often reduce or deny E/M lines with 25 when the same diagnosis is used for both without extra work documented.

## Distinct procedural service modifiers

| Modifier | Meaning |
|---|---|
| **59** | Distinct procedural service: different session, procedure, site, organ system, incision or injury |
| **XE** | Separate encounter |
| **XS** | Separate structure or organ |
| **XP** | Separate practitioner |
| **XU** | Unusual non-overlapping service |

Medicare prefers the more specific **X modifiers** where they apply. Use these only when the documentation supports a truly distinct service; they bypass NCCI edits, so misuse is treated as unbundling.

### NCCI modifier indicators

Every NCCI procedure-to-procedure pair carries a **modifier indicator** that tells you whether a modifier can ever separate the two codes:

| Indicator | Meaning |
|---|---|
| **0** | Never allowed. No modifier will make the column 2 code payable with the column 1 code. |
| **1** | Allowed. A modifier such as 59, XE, XS, XP, XU, 25 or an anatomic modifier can bypass the edit when documentation supports it. |
| **9** | Not applicable. The edit was deleted, so the indicator no longer matters. |

Check the indicator before adding a modifier. Appending 59 to a pair with indicator 0 is a coding error, and the line will still deny.

## Surgical and global period modifiers

| Modifier | Meaning |
|---|---|
| **22** | Increased procedural services (substantially more work); needs documentation and often a report |
| **50** | Bilateral procedure, same session |
| **51** | Multiple procedures, same session (payer may apply it automatically) |
| **52** | Reduced services |
| **53** | Discontinued procedure (patient's safety) |
| **58** | Staged or related procedure by the same physician during the post-op period (planned, more extensive, or therapy following a diagnostic procedure) |
| **76** | Repeat procedure by the same physician |
| **77** | Repeat procedure by another physician |
| **78** | Unplanned return to the operating room for a related procedure during the post-op period |
| **79** | Unrelated procedure by the same physician during the post-op period |
| **54 / 55 / 56** | Surgical care only / post-op management only / pre-op management only |
| **62** | Two surgeons (co-surgery) |
| **66** | Surgical team |
| **80 / 81 / 82** | Assistant surgeon / minimum assistant / assistant when a qualified resident isn't available |
| **AS** | Non-physician assistant at surgery (PA, NP, CNS) |

### How these modifiers change Medicare payment

| Modifier | Typical Medicare payment effect |
|---|---|
| **50** | 150% of the fee schedule amount for the procedure, billed on one line with 1 unit |
| **51** | Highest-valued procedure at 100%, each additional procedure at 50% |
| **62** | Each co-surgeon receives 62.5% of the global surgical fee |
| **80 / 82** | Assistant surgeon paid 16% of the surgeon's fee schedule amount |
| **AS** | Non-physician assistant paid 85% of the 16% assistant amount (13.6%) |
| **54** | Surgeon paid only the intra-operative portion of the global fee |

Payment applies only when the code's indicators in the Medicare fee schedule allow it (for example, some procedures never pay an assistant surgeon). Commercial payers set their own percentages by contract.

## Component and anatomical modifiers

| Modifier | Meaning |
|---|---|
| **26** | Professional component |
| **TC** | Technical component |
| **RT / LT** | Right / left side |
| **E1–E4** | Eyelids (upper left, lower left, upper right, lower right) |
| **FA, F1–F9** | Fingers (left thumb, left 2nd digit… right 5th digit) |
| **TA, T1–T9** | Toes (left great toe… right 5th digit) |
| **LC, LD, RC, LM, RI** | Coronary arteries |

### When to bill 26, TC or global

| Situation | Who bills what |
|---|---|
| Physician owns the equipment, employs the technician and reads the test in their own office | The physician bills the **global** code with **no modifier** |
| Physician only reads a test done on someone else's equipment (for example, a hospital CT) | Physician bills the code with **26**; the hospital bills the technical part on its UB-04 |
| An independent imaging centre performs the test but an outside radiologist reads it | Centre bills with **TC**; radiologist bills with **26** |

## Lab and repeat-test modifiers

| Modifier | Meaning |
|---|---|
| **90** | Reference (outside) laboratory |
| **91** | Repeat clinical diagnostic lab test on the same day to get new results (not for confirming results or equipment failure) |
| **QW** | CLIA-waived test |

## Medicare liability and coverage modifiers

| Modifier | Meaning |
|---|---|
| **GA** | ABN on file (waiver of liability statement issued as required) |
| **GZ** | Expected denial as not reasonable and necessary; no ABN |
| **GY** | Item or service statutorily excluded or doesn't meet the definition of a benefit |
| **GX** | Voluntary ABN given for a non-covered (excluded) service |
| **KX** | Requirements specified in the medical policy are met (for example, therapy above the threshold, certain DME) |
| **Q0 / Q1** | Investigational / routine clinical service in a qualifying clinical trial |
| **PD** | Diagnostic or related non-diagnostic service within the 3-day window of an inpatient admission (hospital-owned practices) |

## Telehealth modifiers

| Modifier | Meaning |
|---|---|
| **95** | Synchronous audio-video telehealth service |
| **93** | Audio-only service |
| **FQ** | Audio-only service (used for RHCs, FQHCs and some behavioral health) |
| **GT** | Interactive audio and video (older, still used by some payers and for critical access hospital method II billing) |

Telehealth rules, especially Medicare's, have changed many times since 2020, so check the current payer policy for which modifier and place of service (02 or 10) to use.

## Anaesthesia modifiers

| Modifier | Meaning |
|---|---|
| **AA** | Anaesthesia personally performed by an anesthesiologist |
| **QK** | Medical direction of 2–4 concurrent procedures by an anesthesiologist |
| **QX** | CRNA service with medical direction |
| **QY** | Medical direction of one CRNA |
| **QZ** | CRNA service without medical direction |
| **QS** | Monitored anaesthesia care (MAC) |
| **G8 / G9** | MAC for deep complex procedures / for a patient with a history of severe cardiopulmonary condition |
| **P1–P6** | Physical status of the patient |

## Drug modifiers

| Modifier | Meaning |
|---|---|
| **JW** | Drug amount discarded (wasted) from a single-dose container, billed on a separate line |
| **JZ** | Zero drug amount discarded from a single-dose container |

## Common modifier mistakes

| What went wrong | Result | Correct approach |
|---|---|---|
| Missing RT/LT on a sided procedure | CO-4, or denial as a duplicate of the other side | Add the side modifier |
| 50 billed with 2 units, or RT and LT on separate lines when the payer wants 50 | Denial, or only one side paid | Follow the payer's bilateral format |
| 25 on an E/M with no separate documentation | Denial on audit, recoupment | Use 25 only for a separately documented problem |
| 59 added to every bundled pair | Unbundling finding | Check the NCCI indicator and documentation first |
| Physician who owns the equipment bills only 26 | Underpayment: the technical part is never billed | Bill the global code with no modifier |
| GA billed without a signed ABN | Patient can't be billed after the denial | Get the ABN signed before the service |
| A different physician repeats a test and 76 is used | Denial | 76 is for the **same** physician; another physician uses **77** |

!!! interview "If an interviewer asks “What's the difference between modifier 25 and 59?”"
    “Modifier 25 goes on an E/M code to show a significant, separately identifiable visit on the same day as a procedure. Modifier 59 goes on a procedure code to show it was distinct from another procedure on the same day, such as a different site or session, so it can bypass an NCCI edit. Medicare prefers the X modifiers, XE, XS, XP and XU, where they fit. Both need documentation support.”
