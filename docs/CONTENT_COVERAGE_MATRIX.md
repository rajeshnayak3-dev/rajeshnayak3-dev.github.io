# Content coverage matrix

Maps the required curriculum (brief section 5) to what exists on REVEX. Reviewed 14 October 2026.

Status key: **Verified** = present and its policy-sensitive statements reviewed against sources on 2026-10-14 · **Present** = present, not yet re-reviewed under the source policy · **Revise** = present but needs revision · **Partial** · **Missing** · **N/A**.

## Module 1 — RCM foundations
| Topic | Where | Status |
|---|---|---|
| Full revenue cycle, scheduling → resolution | `rcm-cycle/*` (12 stages), `start-here/what-is-rcm` | Verified (what-is-rcm), Present (stages) |
| Front-end, mid-cycle, back-end | `rcm-cycle/_index`, `start-here/what-is-rcm` | Present |
| Provider, payer, clearinghouse, patient, vendor roles | `start-here/provider-payer-patient`, `rcm-team-roles` | Present |
| Professional vs institutional | `forms-billing/hospital-vs-professional-billing`, `denials/hospital-vs-professional-denials` | Present |
| Financial terms and KPIs | `start-here/ar-and-ap`, `rcm-cycle/reporting-and-kpis` | Verified (KPIs) |
| Rejection vs denial vs pending vs underpayment vs no-response | `non-denials/*`, `denials/what-is-a-denial`, KPI distinction table | Present / Verified (table) |

## Module 2 — Insurance and eligibility
| Topic | Where | Status |
|---|---|---|
| Commercial, Medicare, Medicaid, MA, TRICARE, WC, others | `insurance/*` | Present |
| Member/subscriber/dependent, dates, network | `rcm-cycle/eligibility-and-benefits`, `insurance/types-of-plans` | Verified (eligibility) |
| Deductible, copay, coinsurance, OOP, allowed | `rcm-cycle/eligibility-and-benefits`, payment calculator | Verified |
| COB and MSP basics | `insurance/coordination-of-benefits` | Present |
| Referrals, prior auth, medical necessity, limits | `rcm-cycle/prior-authorization-and-referrals`, `encounter-and-documentation` | Present / Verified (ABN section) |
| Verification checklist and template | eligibility lesson ("What to record", "What to verify for this service") | Verified |
| Eligibility is not a guarantee of payment | eligibility lesson warning box | Verified |

## Module 3 — Registration, coding, claim creation
| Topic | Where | Status |
|---|---|---|
| Demographics and insurance data | `rcm-cycle/scheduling-and-registration` | Present |
| NPI, taxonomy, TIN, POS | `forms-billing/provider-identifiers`, `pos-and-revenue-codes` | Present |
| ICD-10-CM, CPT/HCPCS, modifiers, units, NCCI | `rcm-cycle/medical-coding`, `forms-billing/icd-10-cm-structure`, `modifiers`, bundling codes | Present |
| Billing vs coding vs documentation boundaries | `medical-coding`, `encounter-and-documentation`; SC-17 (route code changes through a coder) | Partial: add an explicit "who may change codes" section |
| CMS-1500/837P and UB-04/837I mapping | `forms-billing/cms-1500`, `ub-04`, `edi-transactions` | Present |
| Edits, validation, attachments, timely filing | `rcm-cycle/claim-submission`, timely filing tool | Present / Verified (tool) |

## Module 4 — Claim submission and acknowledgments
| Topic | Where | Status |
|---|---|---|
| Clearinghouse and payer routing; 837 | `claim-submission`, `edi-transactions` | Present |
| 999 and 277CA | `edi-transactions`, `non-denials/rejections` | Present |
| Rejection vs denial vs adjudication; where it stopped | `rejections`, `adjudication`, KPI distinction table | Present / Verified (table) |
| Corrected, replacement, void, resubmission with caveats | `forms-billing/corrected-claims` | Verified |
| Tracking and proof of timely filing | `no-response-claims`, timely filing tool | Present / Verified (tool) |

## Module 5 — Payment posting and ERA/EOB
| Topic | Where | Status |
|---|---|---|
| 835 ERA and EOB; group codes, CARCs, RARCs | `denials/read-an-era`, `rcm-cycle/payment-posting` | Verified (ERA) / Present |
| Contractual vs patient responsibility | `read-an-era`, payment calculator | Verified |
| Secondary claims and crossover | `non-denials/secondary-and-crossover` | Present |
| Reversals, recoupments, PLB, credit balances | `recoupments-and-offsets`, `credit-balances-and-refunds`, SC-18 | Present; PLB covered in SC-18 only — add a PLB section to posting |
| Reconciliation and balancing | `payment-posting` | Present |
| Escalation for ambiguous remittances | SC-19 | Present (new) |

## Module 6 — AR follow-up
| Topic | Where | Status |
|---|---|---|
| Work queues and prioritisation | `quality/ar-prioritization-and-work-queues`, SC-20 | Verified (new) |
| Aging buckets and days in AR | `start-here/ar-and-ap`, KPIs | Present / Verified |
| No-response and pending | `non-denials/no-response-claims`, SC-10 | Present |
| Portal and phone research; call reference; notes | `payer-call-workflows`, `mock-payer-calls`, AR note tool | Present / Verified (tool) |
| Next action, follow-up date, owner, escalation | AR note tool, AR prioritisation lesson | Verified |
| No arbitrary universal follow-up intervals | AR prioritisation lesson | Verified |

## Module 7 — Denial management
| Topic | Where | Status |
|---|---|---|
| Root cause vs symptom | `denials/preventing-denials`, `quality/root-cause-and-pareto` | Present / Verified |
| Category coverage (eligibility, auth, necessity, coding, duplicate, TF, COB, bundling, demographics, enrollment, documentation) | `denials/denial-categories`, code library (71) | Present (library summaries labelled) |
| Corrected claim vs appeal vs reconsideration vs reprocessing vs escalation | `corrected-claims`, `appeals`, SC-17 | Verified / Present |
| Appeal letter and evidence | `denials/appeals` | Present |
| Deadlines | timely filing tool, filing limits reference | Verified (Medicare) / Needs verification (other programs) |
| Prevention and feedback loops | `preventing-denials`, CAPA lesson | Present / Verified |
| Patient liability safeguards | ERA lesson ABN box, QMB lesson, code-page "what not to assume" | Verified |

## Module 8 — Medicare, Medicaid, compliance
| Topic | Where | Status |
|---|---|---|
| Original Medicare vs MA | `insurance/medicare` | Present (ABN row verified) |
| MSP/COB | `insurance/coordination-of-benefits` | Present |
| QMB protections | `insurance/medicaid-qmb-spend-down`, SC-11 | Verified |
| ABN applicability and limits | `encounter-and-documentation`, `read-an-era` | Verified |
| Medicaid variation by state | `medicaid-qmb-spend-down` | Present |
| HIPAA minimum necessary, PHI handling | `start-here/hipaa-and-compliance` | Present |
| Fraud, waste and abuse | `hipaa-and-compliance` | Partial: add a dedicated FWA section with OIG sources |
| Documentation integrity and audit trails | `encounter-and-documentation`, QA lessons | Present |
| Education vs legal advice | About disclaimer, footer, review boxes | Verified |

## Module 9 — Quality assurance
| Topic | Where | Status |
|---|---|---|
| Audit purpose and scope | `quality/audit-purpose-and-scope` | Verified (new) |
| Sampling and limits | `quality/sampling` | Verified (new) |
| Critical vs non-critical; rubrics | `quality/error-definitions-and-scoring` | Verified (new) |
| Calibration and inter-rater agreement | `quality/calibration` | Verified (new) |
| RCA and Pareto | `quality/root-cause-and-pareto` | Verified (new) |
| CAPA, feedback, coaching, re-audit | `quality/capa-feedback-and-coaching` | Verified (new) |
| Standards and version control | `audit-purpose-and-scope` | Verified (new) |
| Process vs outcome vs productivity | `audit-purpose-and-scope`, AR prioritisation | Verified (new) |

## Module 10 — Analytics and operations
| Topic | Where | Status |
|---|---|---|
| Denial rate definition choices; FPR/FPP | `reporting-and-kpis` | Verified |
| Days in AR, aging distribution | KPIs, KPI tool | Verified |
| NCR, GCR, clean claim rate, overturn rate | KPIs, KPI tool | Verified |
| Productivity, backlog, inventory, rework | AR prioritisation lesson | Verified (new) |
| Cohort/payer/provider/specialty breakdowns | RCA lesson, preventing denials | Partial |
| Excel/SQL/BI exercises with fictional data | — | **Missing** |
| KPI formula, denominator, period, exclusions, source shown | KPI tool definitions table | Verified |

## Module 11 — Specialty workflows
| Topic | Where | Status |
|---|---|---|
| Claim types, services, auth considerations, denial patterns, code caveats | 32 specialty pages | Present |
| Documentation considerations | specialty "prerequisites"/"tips" fields | Partial |
| Practical case per specialty | — | **Missing** |
| Sources and review date | Scope box says not yet re-reviewed | **Missing** (labelled) |
| "Varies by payer…" statement | Scope box on every specialty page | Verified |

## Module 12 — Career readiness
| Topic | Where | Status |
|---|---|---|
| Roles (AR, denial, posting, eligibility, QA, senior, lead, analyst) | `/career/` roles, `start-here/rcm-team-roles` | Present (new hub) |
| Role competencies | `data/roles.yaml` checklists | Present (new) |
| Interview scenarios with rationale | `interview-prep/*`, practice cases | Present |
| Audit and root-cause exercises | SC-21, QA lessons | Present (new) |
| Communication and escalation notes | AR note tool, cases' debriefs | Present |
| Capstone and rubric | Practice lab "Planned" | **Missing** (labelled planned) |
| CV/interview guidance without guarantees | `interview-prep/how-to-prepare`, career hub wording | Present |

## Practice case checklist (brief section 6)

| Required case | Case |
|---|---|
| Rejection from missing/invalid data | SC-04 A rejection nobody worked |
| No-response claim | SC-10 Sixty days, no response |
| Medical-necessity denial | SC-13 The vitamin D test; SC-17 |
| COB issue | SC-02 Two parents, two plans |
| Timely-filing risk | SC-04; SC-20 |
| Corrected claim vs appeal | SC-17 (new) |
| Underpayment | SC-11 Paid, but not enough |
| Reversal/recoupment | SC-18 (new) |
| QMB patient billing | SC-06 The QMB balance |
| Authorization | SC-03 The MRI with an authorization nobody could find |
| Duplicate denial | SC-12 Sent twice, denied once |
| Ambiguous: research/escalate | SC-19 (new) |

Case IDs follow file order (`SC-01`…`SC-16` in `data/scenarios.yaml`, `SC-17`…`SC-21` in `data/scenarios-2.yaml`); the site shows each case's ID.
