---
title: Revenue cycle in general business vs in healthcare
short: RCM in business vs healthcare
description: What “revenue cycle” means in any business, how order-to-cash works in retail, SaaS and manufacturing, and why the healthcare version is so much more complex.
order: 1.5
slug: rcm-general-vs-healthcare
level: Beginner
keywords: revenue cycle meaning general business order to cash O2C revenue management hotel airline healthcare RCM difference third party payer
quiz:
  - q: In most businesses, the revenue cycle is usually called what?
    options:
      - Prior authorization
      - Order-to-cash (O2C)
      - Coordination of benefits
      - Adjudication
    answer: 1
    why: Outside healthcare, the process from customer order to collected cash is called order-to-cash.
  - q: What is the biggest structural difference between healthcare RCM and a retail sale?
    options:
      - Healthcare uses invoices
      - In healthcare, a third party (the payer) usually decides how much is paid, after the service, under its own rules
      - Retail has no accounts receivable
      - Healthcare never collects from customers
    answer: 1
    why: A retailer sets the price and the customer pays it. In healthcare, the payer decides coverage and the allowed amount after the service, and the patient pays only part.
  - q: A hotel adjusts room prices daily based on demand. What is this called, and is it the same as RCM?
    options:
      - Revenue management; it's a pricing discipline, not a billing and collection process
      - Revenue cycle management; it's the same thing
      - Coordination of benefits
      - Accounts payable
    answer: 0
    why: Revenue management (or yield management) sets prices to maximise income. Revenue cycle management is about billing and collecting what's earned.
---

## The general idea

Every business that sells something has a **revenue cycle**: the steps between winning a customer and having the money in the bank. The goal is always the same: get paid the right amount, as fast as possible, with as little effort as possible.

In most industries this is called **order-to-cash (O2C)**, and it's usually run by a finance team.

## Order-to-cash in a typical business

| Step | What happens | Example (an office supplies company) |
|---|---|---|
| 1. Customer and credit check | Confirm who the customer is and whether they can pay | New corporate client approved for 30-day credit |
| 2. Order | Customer orders at a known price | 200 chairs at $80 each |
| 3. Fulfilment | Product delivered or service performed | Chairs delivered |
| 4. Invoice | A bill for the agreed amount is sent | Invoice for $16,000, due in 30 days |
| 5. Accounts receivable | The unpaid invoice is tracked by age | Invoice sits in the 0–30 bucket |
| 6. Collections | Reminders and calls for overdue invoices | Reminder on day 31 |
| 7. Cash application | Payment matched to the invoice | $16,000 received and applied |
| 8. Reporting | Days sales outstanding (DSO), bad debt | DSO reported monthly |

You'll notice familiar ideas from healthcare: accounts receivable, aging buckets, collections, cash posting and a days-outstanding metric. Healthcare's **days in AR** is the same idea as business **DSO**.

### How it varies by industry
- **Retail and e-commerce:** payment usually happens at the time of sale (card, wallet), so the cycle is short. The main issues are refunds, chargebacks and fraud.
- **SaaS and subscriptions:** recurring billing, renewals, failed card payments and revenue recognised over time.
- **Manufacturing and wholesale (B2B):** invoices on credit terms (30, 60 or 90 days), purchase order matching and disputes over quantity or price.
- **Utilities and telecom:** metered usage billed monthly, large volumes of small balances, disconnection policies.

### A term that sounds similar: revenue management
Hotels and airlines use **revenue management** (also called yield management): changing prices by demand to fill rooms or seats at the best price. It's a pricing strategy, not billing and collection. If an interviewer mixes the two up, gently clarify.

## What makes healthcare different

Healthcare follows the same basic shape, but almost every step is harder.

| | Typical business (O2C) | US healthcare (RCM) |
|---|---|---|
| Who pays | The customer | Mostly a **third party** (the payer), plus the patient for their share |
| When the price is known | Before the sale | Usually **after** the service, when the payer applies the contract and benefits |
| Who sets the price | The seller | The **payer's contract or fee schedule** decides the allowed amount; the provider's charge is rarely what's paid |
| What's bought | A defined product or service | Care decided during the visit, which may change as the doctor finds problems |
| What's on the bill | Item and price | Standard **codes** (ICD-10-CM, CPT, HCPCS) that must match documentation |
| Customer approval | The customer agrees to buy | The payer may need to **pre-approve** the service (authorization) |
| Proof required | Delivery receipt | **Medical necessity** and clinical documentation |
| Disputes | Occasional | **Denials** are routine, with codes, appeals and deadlines |
| Number of “customers” paying | One per invoice | Often two or three payers per visit (primary, secondary, patient) |
| Rules | Contract and commercial law | Federal and state law (HIPAA, Medicare and Medicaid rules, No Surprises Act) plus each payer's policies |
| Deadlines | Payment terms | **Timely filing** and appeal limits; miss them and the money is lost |
| Data privacy | Customer data | Protected health information under HIPAA |

### The same visit, seen two ways

!!! example "A $200 office visit vs a $200 order"
    **Office supplies:** the company invoices $200 and, barring a dispute, receives $200 within 30 days.

    **Doctor's visit:** the practice bills $200. The payer allows $120 under its contract, applies $50 to the deductible, and pays 80% of the remaining $70 ($56). The patient owes $64 ($50 deductible + $14 coinsurance). The other $80 is a contractual write-off. If the claim had a wrong member ID, it would have been rejected and the clock on timely filing would keep ticking.

    The practice collects $120 in total from two sources, weeks apart, after correctly coding, billing and posting every step.

## Why this matters for your career

- **Transferable skills:** AR follow-up, aging, cash posting and collections exist in every industry, so RCM experience can lead into finance and order-to-cash roles.
- **Healthcare-specific skills** (coding, payer rules, denials, compliance) are what make RCM analysts valuable, and why healthcare RCM is a specialised industry with its own outsourcing market.
- In interviews, being able to explain the difference shows you understand RCM as a business process, not just a set of tasks.

!!! interview "If an interviewer asks “Is RCM only in healthcare?”"
    “The idea of a revenue cycle exists in every business. Most industries call it order-to-cash: order, delivery, invoice, accounts receivable, collections and cash application. Healthcare RCM is more complex because a third-party payer decides the payment after the service based on contracts, codes, authorizations and medical necessity, the patient pays only part, and every step is regulated. That's why it needs coding, eligibility, denial management and appeals that other industries don't.”
