---
title: Blue Cross Blue Shield billing guide
short: Blue Cross Blue Shield
description: How the 33 independent Blue companies work together. Member ID prefixes, BlueCard home and host plans, the suitcase logo, Federal Employee Program IDs and the denials that come from billing the wrong Blue.
order: 9
level: Intermediate
keywords: BCBS Blue Cross Blue Shield BlueCard home plan host plan prefix alpha prefix suitcase logo FEP Federal Employee Program R ID Anthem Highmark Florida Blue national accounts
quiz:
  - q: A patient with a BCBS of Texas card is treated by a provider in Georgia. Where does the provider file the claim?
    options:
      - BCBS of Texas directly
      - The provider's local Blue plan in Georgia, which routes it to Texas through BlueCard
      - Medicare
      - Any Blue plan
    answer: 1
    why: Under BlueCard, providers file with their local (host) plan, which sends the claim to the member's home plan using the prefix.
  - q: A Blue member ID starts with R followed by 8 digits. What program is it?
    options:
      - Medicare Advantage
      - Federal Employee Program (FEP)
      - Medicaid
      - BlueCard Worldwide
    answer: 1
    why: FEP member IDs start with R and 8 digits. FEP has its own rules and claims processing.
  - q: What does the prefix on a Blue card identify?
    options:
      - The patient's date of birth
      - The member's home Blue plan (and sometimes the account)
      - The provider's specialty
      - The deductible
    answer: 1
    why: The prefix (the first three characters) routes the claim to the right home plan or national account.
---

## One brand, many companies

**Blue Cross Blue Shield** isn't one insurer. It's a federation of **33 independent companies** (the number changes with mergers) licensed by the Blue Cross Blue Shield Association. Each covers its own state or region. Examples include Anthem (Elevance Health) in several states, Highmark, Florida Blue, Blue Shield of California, Regence, Premera, Wellmark and BCBS of Texas, Illinois, New Mexico, Oklahoma and Montana (part of HCSC).

Together they cover more than 100 million people, so almost every RCM team works Blue claims every day.

## The member ID prefix

Most Blue member IDs start with a **three-character prefix** (letters, or letters and numbers), followed by the member's number.

- The prefix identifies the member's **home plan** and, for large employers, the **national account**.
- It's how the local Blue plan routes a claim to the right company.
- **Always include the prefix** exactly as printed. A missing or wrong prefix is the most common Blue rejection.

If a patient's card is missing, the provider can't safely guess the prefix. Get the card or call the patient; never build an ID from other numbers.

## BlueCard: home plan and host plan

The **BlueCard program** lets members get care from Blue network providers anywhere in the US.

| Term | Meaning |
|---|---|
| **Home plan** | The Blue company the member belongs to (it issued the card and holds the benefits) |
| **Host plan** | The Blue company where the provider is located and contracted |

### How a BlueCard claim flows
1. The provider files the claim with its **local (host) plan**.
2. The host plan uses the prefix to send it to the **home plan**.
3. The home plan applies the member's benefits and eligibility.
4. The host plan prices the claim using the provider's local contract and pays the provider.

So for **eligibility and benefits**, the home plan's rules apply; for **pricing, network status and payment**, the host plan's contract applies. Provider questions go to the host plan, which contacts the home plan when needed.

### The suitcase logo
Blue cards show a **suitcase** symbol for BlueCard members. A suitcase with **PPO** inside means BlueCard PPO benefits. An empty suitcase usually means a traditional, HMO-type or other BlueCard product. Some products (such as many HMO and Medicaid plans) don't participate in BlueCard at all, and those claims follow the home plan's own rules.

## National accounts

Large employers with workers in many states often contract with one Blue plan (the control plan) but use BlueCard for members elsewhere. The prefix identifies the account. Treat these like BlueCard claims: file with your local plan.

## Federal Employee Program (FEP)

The **Blue Cross and Blue Shield Service Benefit Plan**, known as **FEP**, covers federal employees, retirees and their families.

- FEP member IDs start with the letter **R** followed by **8 digits**.
- FEP has its own benefit rules and its own appeal process through the US Office of Personnel Management (OPM) after Blue's internal review.
- Providers usually file FEP claims with their local Blue plan, which processes them under FEP rules.

## Medicare Advantage and Medicaid Blue plans

Many Blue companies sell Medicare Advantage and Medicaid managed care plans. These follow Medicare or Medicaid rules on top of the Blue company's policies, and they may not be part of BlueCard. Check the card and the eligibility response for the product name.

## Common Blue denials and rejections

| Problem | What you'll see | Fix |
|---|---|---|
| Missing or wrong prefix | Rejection: member not found | Use the prefix exactly as on the card |
| Claim sent to the home plan directly when the provider is out of that state | Rejection or misroute | File with the local (host) plan |
| Product not in BlueCard | Denial or misroute (CO-109) | Follow the home plan's instructions |
| Network status confusion | Out-of-network processing | Check the host plan's contract and the member's product (PPO vs HMO) |
| Medical records requested by the home plan | Pended claim | Send records through the host plan's process |
| FEP claim worked like a regular Blue claim | Wrong appeal path | Follow FEP and OPM appeal rules |

!!! mistake "Auditor's red flag"
    Notes that say only “called BCBS”. Always record **which** Blue plan you called (host or home, and the company name), because the next analyst needs to know who gave the information.

!!! interview "If an interviewer asks “How does BlueCard work?”"
    “BlueCard lets Blue members use Blue network providers in other states. The provider files the claim with its local host plan, which uses the three-character prefix on the member ID to route it to the member's home plan. The home plan applies eligibility and benefits; the host plan prices it under the provider's local contract and pays. FEP is separate, with IDs starting with R and 8 digits.”
