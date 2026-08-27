---
name: anti-money-laundering
description: >
  Preventing money laundering and terrorist financing in Finland (Act
  444/2017). Use this skill when an organisation is assessing whether it
  is an obliged entity, is building or updating an AML compliance
  programme (risk assessment, customer due diligence, monitoring), is
  establishing beneficial owners, is handling a suspicious transaction or
  a report to the Financial Intelligence Unit, or is preparing for an
  inspection by a supervisor (Finanssivalvonta, the regional AML
  supervisor). Triggers on: money laundering, AML, KYC, customer due
  diligence, beneficial owner, PEP, politically exposed person,
  suspicious transaction, Financial Intelligence Unit, goAML, enhanced
  due diligence, sanctions, rahanpesu, tosiasiallinen edunsaaja,
  selvittelykeskus.
---

# Preventing money laundering — obligations and compliance

This skill structures the obligations under the Anti-Money Laundering Act
(rahanpesulaki 444/2017) and builds an obliged entity's compliance
programme. Fundamentals:
`../financing-and-collateral/references/finance-fundamentals.md`.

> **Disclaimer:** draft programmes and processes are for review — not
> legal advice. **No assistance is given with carrying out money
> laundering in any form** — and note that legal service providers are
> themselves obliged entities in certain engagements. See
> `banking-and-finance/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the Act and the EU package from the source

Fetch the provisions of 444/2017 with the **`legal-core:legal-research`
skill**. The EU's AML regulation is being reformed onto a
regulation-based footing (the AML package, AMLA) — **check which layer is
in force, from the source** before describing an obligation; national law
changes with the package.

## Step 1: Scope — is the organisation an obliged entity?

Work through the Act's list of scope from the source: credit and
financial institutions, payment services, virtual currency providers,
auditors, accountants, tax advisers, **providers of legal services**
(certain engagements: real property and business transactions, managing
assets, forming companies), estate agents, art dealers and others — the
boundaries and thresholds from the source. Record **in what respect** the
activity falls within the scope.

## Step 2: Risk assessment

The statutory **own risk assessment** is the foundation of the programme:

- Customer risks (PEPs, foreign connections, cash intensity, complex
  structures), product and service risks, geographic risks (high-risk
  countries — the list from the source), delivery channels.
- Document the methodology and the update cycle; derive the measures from
  the risks (a risk-based approach).

## Step 3: Customer due diligence (KYC/CDD)

1. **Identification and verification** — natural persons and legal
   entities; the requirements for remote identification from the source.
2. **Beneficial owners** — the ownership and control chain; the data in
   the beneficial ownership register (PRH) is not sufficient on its own —
   there is a duty to make your own enquiries; discrepancies must be
   reported to the register.
3. **PEP status** — politically exposed persons, their family members and
   close associates → enhanced procedure.
4. **Enhanced vs. simplified due diligence** — when each is permitted or
   mandatory (from the source); correspondent relationships, high-risk
   countries.
5. **Ongoing monitoring** — monitoring transactions against the
   customer's profile; keeping the information up to date.
6. **Retention and data protection** — retention periods and purpose
   limitation (→ `data-protection`).

If due diligence cannot be carried out: **the customer relationship must
not be established, or must be terminated**, and a report must be
considered — this is absolute.

## Step 4: A suspicious transaction

1. **The obligation to obtain information** — the background and purpose
   of an unusual transaction are established and documented.
2. **A report to the Financial Intelligence Unit** (goAML) — without
   delay; the threshold is suspicion, not certainty. The transaction may
   have to be suspended — the conditions from the source.
3. **The prohibition on disclosure** — the customer or a third party is
   not told about the report or the investigation. Train this
   separately — a breach is a criminal offence.
4. **Sanctions separately**: checking sanctions lists (EU, UN, OFAC
   depending on the business) is a different obligation from an AML
   report — freezing assets and reporting to the enforcement authority —
   the procedure from the source.

## Step 5: The framework of an obliged entity's programme

Produce document templates: the risk assessment, operating instructions
(the KYC process, escalation, the reporting route), the responsible
person and the board's role, the training plan and register, the
employees' reporting channel, internal control and testing, and the
management of outsourcing. The supervisor's (Fiva's or another's)
regulations and guidelines are taken into account `[check]`.

## What this skill does NOT do

- **Does not assist with money laundering, with concealing it or with
  evading the reporting obligation** — an absolute refusal.
- **Does not run sanctions-list or PEP searches** — it cannot see the
  registers; the process and the tool requirements are structured, the
  searches are run by the organisation's own systems.
- **Does not breach the prohibition on disclosure** — a suspicion that a
  report may be made is not documented in material visible to the
  customer.
- **Does not confirm thresholds, retention periods or the list of
  high-risk countries from memory** — from the source.
- **Does not replace the supervisor's position** — where a matter is open
  to interpretation, contact the supervisor or a lawyer.

## Continue from here

- Establishing beneficial owners in a corporate structure → /company-law:corporate-governance
- Processing personal data in KYC → /data-protection:data-protection-assessment
- A suspicious arrangement in a transaction → /company-law:corporate-transactions
- Checking a provision or supervisory guidance → /legal-core:legal-research
- A criminal suspicion (a money laundering offence) → /criminal-procedure:pre-trial-investigation-and-coercive-measures
