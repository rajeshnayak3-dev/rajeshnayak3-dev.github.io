---
title: How an ICD-10-CM code is built
short: ICD-10-CM structure
description: The seven characters of an ICD-10-CM code, the placeholder X, seventh-character extensions, Z codes and external cause codes, with the structure errors that cause denials.
order: 7
level: Intermediate
keywords: ICD-10-CM structure 7 characters placeholder X seventh character A D S Z codes external cause codes V W X Y codes laterality category etiology
quiz:
  - q: What does the seventh character “A” mean on an injury code such as S52.501A?
    options:
      - Admitted patient
      - Initial encounter (active treatment)
      - Subsequent encounter
      - Sequela
    answer: 1
    why: A is initial encounter (active treatment), D is subsequent encounter (routine healing care) and S is sequela (a late effect).
  - q: Why does W19.XXXA contain the letters XXX?
    options:
      - They're optional and can be removed
      - They're placeholders that fill empty positions so the seventh character sits in position 7
      - They mean the diagnosis is unknown
      - They mark an external cause as non-billable
    answer: 1
    why: When a code needs a seventh character but has fewer than six characters, the placeholder X fills the gaps. Dropping it makes the code invalid.
  - q: A claim for a fracture follow-up visit uses S52.501A. What's the likely problem?
    options:
      - Nothing
      - The seventh character should be D for routine follow-up care while healing
      - The code needs an X
      - Fractures can't be coded
    answer: 1
    why: Follow-up visits during healing use D. Using A suggests active treatment, which auditors and payers flag.
---

## Seven characters, three parts

Every ICD-10-CM code has three to seven characters. The first is always a letter. A decimal point sits after the third character.

| Position | Name | What it tells you | Example: S52.501A |
|---|---|---|---|
| 1–3 | **Category** | The general condition or injury | **S52**: fracture of forearm |
| 4–6 | **Etiology, anatomic site, severity, laterality** | More detail: cause, exact site, type, side | **.501**: unspecified fracture of the lower end of the right radius |
| 7 | **Extension** | Episode of care, mainly for injuries, poisonings and pregnancy | **A**: initial encounter for closed fracture |

A code is billable only when it's reported to its full length. **S52.5** is a category heading, not a valid billing code, and a claim using it denies (**CO-146** or **CO-16** with remark **M76**).

## The seventh character

| Character | Meaning | Typical use |
|---|---|---|
| **A** | Initial encounter | Active treatment: ED visit, surgery, evaluation by a new physician |
| **D** | Subsequent encounter | Routine care during healing: cast change, follow-up visit, removal of hardware |
| **S** | Sequela | Treating a late effect of an injury (for example, a scar from an old burn) |

Fracture codes have extra letters for open fractures and healing problems (for example **G** delayed healing, **K** nonunion, **P** malunion).

## The placeholder X

Some codes need a seventh character but have fewer than six characters. The letter **X** fills the empty positions so the seventh character lands in position 7.

| Code | Meaning |
|---|---|
| **W19.XXXA** | Unspecified fall, initial encounter |
| **T63.441A** | Toxic effect of bee venom, accidental, initial encounter (no placeholder needed) |
| **V43.52XA** | Car driver injured in collision with another car in a traffic accident, initial encounter |

Dropping the X (for example writing W19A) makes the code invalid.

## Laterality

Many codes show the side: in most chapters **1** is right, **2** is left, **3** is bilateral, and **0** or **9** is unspecified. Example: **M17.11** primary osteoarthritis, right knee; **M17.12**, left knee. Payers increasingly deny unspecified laterality when the record shows the side.

## The chapters you'll see most

| Range | Chapter |
|---|---|
| A00–B99 | Infectious diseases |
| C00–D49 | Neoplasms |
| E00–E89 | Endocrine and metabolic (diabetes E08–E13) |
| F01–F99 | Mental and behavioral disorders |
| I00–I99 | Circulatory system |
| J00–J99 | Respiratory system |
| M00–M99 | Musculoskeletal system |
| O00–O9A | Pregnancy and childbirth |
| R00–R99 | Symptoms and abnormal findings |
| S00–T88 | Injury and poisoning |
| V00–Y99 | **External causes**: how and where an injury happened |
| Z00–Z99 | **Factors influencing health status**: screenings, routine exams, history, aftercare |

### Z codes
Used when the reason for the visit isn't a current illness: **Z00.00** routine adult exam, **Z12.11** colon cancer screening, **Z23** immunisation, **Z79.4** long-term insulin use. Some Z codes can only be first-listed and some never can, so check the guidelines.

### External cause codes (V00–Y99)
Describe the cause, activity and place of an injury. They're never the first-listed diagnosis, and payers don't require them unless a state or payer mandates it, but they matter for workers' comp, auto and liability claims because they show how the injury happened.

## Structure errors that cause denials

| Error | Result |
|---|---|
| Category or subcategory code without its full characters | CO-146, or CO-16 with M76 |
| Missing seventh character on an injury code | Invalid code denial |
| Missing placeholder X | Invalid code denial |
| A used for routine follow-up care | Audit finding; possible medical necessity questions |
| Unspecified laterality when the side is documented | Medical necessity or payer-specific specificity denial |
| External cause code listed first | Rejection or denial |
| Code deleted in the October 1 update but still in the system | CO-146 |

!!! mistake "Auditor's red flag"
    Injury claims coded with the seventh character **A** for every visit. Only the active treatment encounters get A; the cast checks and follow-ups that follow are D.

!!! interview "If an interviewer asks “Explain the structure of an ICD-10-CM code.”"
    “An ICD-10-CM code has three to seven characters. The first three are the category, characters four to six add etiology, site, severity and laterality, and the seventh is an extension such as A for initial encounter, D for subsequent and S for sequela. When a seventh character is needed but the code is shorter, the placeholder X fills the gaps, as in W19.XXXA. Codes must be reported to their full length to be valid.”
