---
title: Provider, payer and patient
short: Provider, payer, patient
description: The three parties in every claim, what each one wants, the identifiers they use, and how money and information move between them.
order: 2
level: Beginner
keywords: provider payer patient guarantor subscriber NPI tax ID member ID insured dependent clearinghouse
quiz:
  - q: A 10-year-old is covered under her father's employer plan. Who is the subscriber?
    options:
      - The child
      - The father
      - The employer
      - The insurance company
    answer: 1
    why: The subscriber (also called the insured, member or policyholder) is the person who holds the policy, here the father. The child is a dependent.
  - q: Which identifier is unique to a healthcare provider and used on every US claim?
    options:
      - Member ID
      - Group number
      - National Provider Identifier (NPI)
      - Medicare Beneficiary Identifier (MBI)
    answer: 2
    why: The NPI is a 10-digit number issued by CMS to every provider. Member ID, group number and MBI identify the patient or plan.
  - q: What is a guarantor?
    options:
      - The person financially responsible for the patient's bill
      - The doctor who referred the patient
      - The clearinghouse that forwards claims
      - The payer's medical director
    answer: 0
    why: The guarantor receives the patient statement and owes the patient balance. For an adult, the guarantor is usually the patient; for a child, usually a parent.
  - q: A provider that has signed a contract with a payer is called what?
    options:
      - Out-of-network
      - Participating or in-network
      - Non-par
      - A third-party administrator
    answer: 1
    why: Participating (par) or in-network providers have agreed to the payer's rates and rules. Non-par or out-of-network providers have no contract with that payer.
---

## Three parties, one claim

Every healthcare claim in the US involves three main parties.

- The **provider** gives the care and sends the bill.
- The **payer** pays part or all of the bill under an insurance plan.
- The **patient** receives the care and pays whatever the plan doesn't cover.

Around them sit helpers: clearinghouses, billing companies (where most RCM jobs are), employers who buy plans, and government agencies that set rules.

## The provider

A **provider** is any person or organization that delivers healthcare services and bills for them.

| Type | Examples | Usual claim form |
|---|---|---|
| Individual (professional) | Physicians, nurse practitioners, physician assistants, physical therapists, psychologists | CMS-1500 / 837P |
| Group practice | A cardiology group with 12 doctors | CMS-1500 / 837P |
| Facility (institutional) | Hospitals, skilled nursing facilities, home health agencies, hospices | UB-04 / 837I |
| Suppliers | Durable medical equipment (DME) companies, labs, ambulance services | Usually CMS-1500 / 837P |

### Provider identifiers you'll see daily

- **NPI (National Provider Identifier).** A 10-digit number from CMS. **Type 1** NPIs belong to individuals; **Type 2** NPIs belong to organizations such as a group or hospital.
- **Tax ID (TIN or EIN).** The federal tax number the payer pays against. A mismatch between NPI and tax ID is a common reason claims fail.
- **Taxonomy code.** A 10-character code describing specialty, such as 207R00000X for internal medicine.
- **PTAN.** The Medicare billing number assigned by the Medicare Administrative Contractor (MAC) after enrollment.

### Rendering, billing, referring

One claim can name several providers:

- **Billing provider:** who gets paid (often the group, with a Type 2 NPI).
- **Rendering provider:** who actually performed the service (Type 1 NPI).
- **Referring or ordering provider:** who sent the patient or ordered the test.
- **Service facility:** where the service happened, if different from the billing address.

!!! warning "Watch the credentialing gap"
    A newly hired doctor can see patients before a payer finishes credentialing them. Claims for those visits deny as the rendering provider isn't eligible (for example CO-B7 or CO-185). RCM teams track credentialing dates so these claims are held or billed correctly.

## The payer

A **payer** is the organization that pays for covered care. Payers fall into a few families, covered in [types of payers](/insurance/types-of-payers/).

- **Government payers:** Medicare, Medicaid, TRICARE, VA.
- **Commercial payers:** private insurers such as UnitedHealthcare, Aetna, Cigna, Elevance (Anthem) and Blue Cross Blue Shield plans.
- **Other liability payers:** workers' compensation carriers, auto insurers, liability insurers.
- **Self-pay:** the patient, when there's no insurance.

### What the payer cares about

A payer checks four things before paying:

1. Is the patient covered on the date of service?
2. Is this service a covered benefit under the plan?
3. Was it medically necessary, and authorized if the plan requires it?
4. Was it billed correctly, on time, by an eligible provider?

Almost every denial you'll ever work fails one of these four checks.

### Network status

- **Participating (par) / in-network:** the provider has a contract. It must accept the contracted rate and can't bill the patient for the difference (no balance billing).
- **Non-participating (non-par) / out-of-network:** no contract. Depending on the plan and law, the payer may pay less or nothing, and the patient may owe more. The federal No Surprises Act limits balance billing for emergency care and some services at in-network facilities.

## The patient

The **patient** is the person who received care. On a claim, the patient is linked to a **subscriber**.

- **Subscriber (insured, member, policyholder):** the person who holds the insurance policy, often through their employer.
- **Dependent:** a spouse or child covered under the subscriber's policy.
- **Guarantor:** the person financially responsible for the patient's balance. Usually the patient (adult) or a parent (minor).

### Patient identifiers

- **Member ID** from the insurance card, sometimes with a prefix (for Blue Cross Blue Shield plans, the three-character prefix routes the claim to the right plan).
- **Group number:** identifies the employer or plan group.
- **MBI (Medicare Beneficiary Identifier):** the 11-character Medicare ID that replaced the Social Security–based HICN.
- **Medicaid ID:** issued by the state.
- **Patient account number:** the provider's own internal number for the patient or visit.

## How money and information move

1. The patient gives demographics and insurance details to the provider.
2. The provider checks eligibility with the payer (EDI 270 request, 271 response).
3. The provider sends a claim (837) to a **clearinghouse**, which checks format and forwards it to the payer.
4. The payer adjudicates and sends payment by EFT, with an electronic remittance advice (835 ERA) explaining each line.
5. The payer sends the patient an **explanation of benefits (EOB)** showing what they owe.
6. The provider bills the patient for their share.

!!! tip "Remember the direction of documents"
    The provider receives an **ERA or remittance advice**. The patient receives an **EOB**. In everyday speech, people call both “the EOB”, so ask which one someone means.

## Common mix-ups to avoid

- **Patient is not always the subscriber.** Entering the child as the subscriber is one of the most common registration errors and leads to “patient not found” denials.
- **Payer is not always the plan on the card.** Many employer plans are self-funded and only *administered* by an insurer, and Medicare Advantage plans replace Original Medicare as the payer.
- **Billing NPI is not always the rendering NPI.** Put the group NPI in the wrong place and the claim rejects.

!!! interview "If an interviewer asks “Who are the three parties in a claim?”"
    “The provider, who renders the service and bills for it; the payer, who adjudicates and pays according to the plan and contract; and the patient, who receives care and pays their share, such as deductible, copay or coinsurance. The patient is linked to a subscriber who owns the policy, and a guarantor who is responsible for the patient balance.”
