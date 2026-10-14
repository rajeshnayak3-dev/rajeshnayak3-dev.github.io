---
title: HIPAA and compliance for RCM teams
short: HIPAA and compliance
description: The HIPAA rules that shape every RCM job, what a business associate agreement means for offshore teams, and the everyday habits that keep PHI safe.
order: 6
level: Beginner
keywords: HIPAA privacy rule security rule breach notification rule transactions and code sets unique identifiers business associate agreement BAA PHI minimum necessary compliance offshore RCM
quiz:
  - q: Which HIPAA rule requires every payer to accept the 837 claim and use ICD-10-CM and CPT?
    options:
      - Privacy Rule
      - Transactions and Code Sets Rule
      - Breach Notification Rule
      - Enforcement Rule
    answer: 1
    why: The Transactions and Code Sets Rule standardises electronic transactions (837, 835, 270/271 and others) and the code sets used in them.
  - q: An offshore RCM company works on a US provider's claims. What makes it legally responsible for protecting PHI?
    options:
      - Nothing; HIPAA only applies in the US
      - A business associate agreement (BAA) with the provider
      - The patient's consent form
      - The clearinghouse contract
    answer: 1
    why: Vendors that handle PHI for a covered entity are business associates. The BAA binds them to HIPAA's privacy and security requirements.
  - q: An analyst emails a claim list with patient names to a personal Gmail account to work from home. What is this?
    options:
      - Acceptable if the analyst deletes it later
      - A potential breach that must be reported to the compliance team
      - Allowed under minimum necessary
      - Only a problem if the patient complains
    answer: 1
    why: PHI sent outside approved, secured systems is a potential breach. It must be reported so the organisation can assess it and notify if required.
---

## Who HIPAA applies to

The **Health Insurance Portability and Accountability Act (HIPAA)** of 1996 applies to two groups:

- **Covered entities:** health plans, healthcare clearinghouses, and healthcare providers that send standard electronic transactions (almost every provider that bills insurance).
- **Business associates:** anyone who handles protected health information (PHI) on a covered entity's behalf, such as billing companies, coding vendors, offshore RCM firms, IT and cloud vendors.

If you work in an RCM company in India or the Philippines, your employer is a business associate, and so HIPAA rules apply to your daily work.

## The rules under HIPAA

| Rule | What it covers | What it means for you |
|---|---|---|
| **Privacy Rule** | Who may use and disclose PHI, and patients' rights to their records | Use PHI only for the job (treatment, payment, operations); follow **minimum necessary** |
| **Security Rule** | Administrative, physical and technical safeguards for electronic PHI | Strong passwords, locked screens, no USB drives or personal devices, secure systems only |
| **Breach Notification Rule** | What to do when unsecured PHI is exposed | Report anything suspicious at once; the organisation decides whether patients and HHS must be notified |
| **Transactions and Code Sets Rule** | Standard electronic formats and code sets | Why every payer uses the 837, 835, 270/271, 276/277 and 278, and ICD-10-CM, CPT and HCPCS |
| **Unique Identifiers Rule** | Standard identifiers | Why every provider has an **NPI** and employers have an EIN |
| **Enforcement Rule** | Investigations and penalties | Civil fines that scale with negligence; criminal penalties for knowingly misusing PHI |

The Privacy and Security Rules are enforced by the HHS Office for Civil Rights (OCR). The 2009 HITECH Act strengthened them, made business associates directly liable, and raised penalties.

## What counts as PHI

Any health information linked to a person, in any form (spoken, paper or electronic). On a claim, almost everything is PHI:

- name, address, phone, email
- date of birth and dates of service
- member ID, Medicare MBI, Medicaid ID, account number
- diagnosis and procedure codes when linked to the patient
- images, records and payment details

## Business associate agreements (BAAs)

A **BAA** is the contract between the provider and its vendor. It says the vendor will:

- use PHI only for the contracted services,
- protect it with HIPAA safeguards,
- report breaches to the provider, and
- make its subcontractors sign the same terms.

Offshore RCM companies usually pass these obligations to employees through confidentiality agreements, annual HIPAA training and clean-desk policies.

## Daily habits that keep you compliant

1. **Minimum necessary:** on a payer call, share only what's needed to identify the claim.
2. **Verify before you disclose:** confirm you're speaking to the payer or the patient (or their authorised representative) before discussing a claim.
3. **Approved systems only:** no PHI in personal email, WhatsApp, personal cloud storage or phone photos.
4. **Lock your screen** whenever you step away.
5. **No printing** unless the process requires it, and shred afterwards.
6. **Report mistakes immediately:** a misdirected fax, an email to the wrong person, or a lost device. Early reporting limits harm.

!!! mistake "Auditor's red flag"
    Notes that copy full patient details into free-text comments, or screenshots saved to shared folders, are among the most common compliance findings in RCM audits. Keep notes factual and limited to what the next person needs.

## Other laws you'll hear about

- **False Claims Act:** penalties for knowingly submitting false claims to government programs, including keeping known overpayments (the 60-day rule).
- **Anti-Kickback Statute and Stark Law:** prohibit payments for referrals in federal programs. Mostly handled by compliance and legal teams, but you should recognise the names.
- **No Surprises Act:** protects patients from surprise out-of-network bills and requires good faith estimates for self-pay patients.

!!! interview "If an interviewer asks “What is HIPAA?”"
    “HIPAA is the US law that protects patients' health information and standardises healthcare transactions. Its Privacy Rule controls how PHI is used and shared, the Security Rule requires safeguards for electronic PHI, the Breach Notification Rule covers reporting exposures, and the Transactions and Code Sets Rule standardises formats like the 837 and 835 and code sets like ICD-10 and CPT. As an offshore team we're business associates under a BAA, so we follow minimum necessary and use only approved systems.”
