---
title: The RCM cycle, end to end
description: Twelve stages that take one patient visit from appointment to final payment. Read them in order; each stage explains who does the work, what can go wrong and how it shows up later as a denial.
---

```flow
type: phases
title: The RCM cycle in three blocks
phases:
  - name: Front end
    d: Before the visit
    c: blue
    steps: [Scheduling and registration, Eligibility and benefits, Authorization and referrals]
  - name: Mid-cycle
    d: Care becomes a claim
    c: green
    start: 4
    steps: [Encounter and documentation, Medical coding, Charge entry, Claim submission]
  - name: Back end
    d: The claim becomes cash
    c: purple
    start: 8
    steps: [Payer adjudication, Payment posting, Denials and AR follow-up, Patient billing, Reporting and KPIs]
loop: Back-end problems are fed back to the front end so they stop happening.
```

The stages fall into three blocks. **Front end** (stages 1–3) happens before the visit, **mid-cycle** (stages 4–7) turns care into a clean claim, and **back end** (stages 8–12) turns the claim into cash and feeds problems back to the start.
