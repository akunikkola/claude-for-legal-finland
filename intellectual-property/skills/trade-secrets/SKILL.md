---
name: trade-secrets
description: >
  Protection of trade secrets under Finnish law (liikesalaisuuslaki 595/2018). Use
  this skill when the user is protecting a company's confidential information
  (customer data, pricing, recipes, algorithms, processes), assesses whether the
  definition of a trade secret is met, plans protective measures or NDA practices,
  suspects the unlawful acquisition, use or disclosure of a trade secret (for
  example a departing employee or a partner), or is comparing secrecy with
  patenting. Triggers on: trade secret, liikesalaisuus, confidentiality, NDA,
  confidential information, data leak, a departing employee took the data,
  know-how, a competitor obtained the information.
---

# Trade secrets — protection, infringement and remedies

This skill structures the protection of a trade secret and infringement situations
under the Trade Secrets Act (liikesalaisuuslaki 595/2018). Fundamentals:
`../trademarks-and-trade-names/references/ip-fundamentals.md`.

> **Disclaimer:** assessments and drafts are for review — not
> legal advice. See `intellectual-property/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law at source

Look up the definitions, the infringement provisions and the remedies of the Trade
Secrets Act with the **`legal-core:legal-research` skill**; for the employee
dimension, also the loyalty and non-competition provisions of the Employment
Contracts Act, and the provisions of the Criminal Code on industrial espionage and
violation of a business secret (check at source).

## Is the information a trade secret? — three conditions

Work through and document each of them:

1. **Secrecy** — the information is not, as a body or in the precise configuration
   of its components, generally known among those in the field or readily
   accessible.
2. **Commercial value** — precisely because it is secret.
3. **Reasonable protective measures** — the holder has actually protected the
   information. **This is what most often fails:** without documented measures
   there is no protection.

The precise wordings from source. Note: an employee's **skill and experience** are
not trade secrets — this boundary is central in infringement disputes and open to
interpretation `[confirm — requires an IP lawyer's assessment]`.

## A protection programme — reasonable measures in practice

Produce a checklist and a documentation template for the organisation:

- **Identify and classify** — which information is a trade secret; its owner and
  where it is held.
- **Restrict access** — need to know, access rights, logs, markings
  ("confidential").
- **Agreements** — NDAs (partners, negotiations, due diligence), confidentiality
  clauses in employment contracts (their duration after the employment ends too —
  reasonableness), the subcontracting chain. The mechanics of the clauses:
  `contracts:contract-drafting`.
- **Processes** — induction, an exit checklist (devices, access rights, a reminder
  of the obligations), information security.
- **The strategic choice** — trade secret versus patenting: a patent discloses the
  invention in return for a time-limited exclusive right; a trade secret can last
  for ever but gives no protection against independent creation or reverse
  engineering (a permitted means of acquisition — check its limits at source).
  Before any disclosure: see AGENTS.md, *Confidentiality before filing*.

## An infringement situation

1. **Characterise the act** — unlawful **acquisition**, **use** or **disclosure**;
   also the manufacture and sale of infringing goods. The permitted means of
   acquisition (independent development, reverse engineering, employees' access to
   information within the limits laid down by law) from source.
2. **Secure the evidence** — logs, documents, devices; act fast but lawfully
   (examining an employee's email has data protection limits →
   `data-protection`).
3. **Remedies** — an injunction and corrective measures, **a user fee and
   damages**, interim measures; the Market Court in civil disputes (jurisdiction
   and time limits from source); a criminal report in serious cases.
4. **The whistleblower exception** — disclosing a trade secret may be permitted in
   order to reveal misconduct — check the conditions at source before you assess
   the liability of the person reporting (see also the whistleblower protection
   rules).

## The departing-employee situation

The most common case in practice — work through it from both points of view:

- **The employer**: what information the person had, which contractual terms bind
  them (confidentiality, non-competition → `employment-law:employment-contract`),
  was an exit check carried out?, evidence before making accusations.
- **The employee or the new employer**: the boundary between skill and a trade
  secret, what may be used, minimising the risks in the new role (no material
  belonging to the former employer in the systems).

## What this skill does NOT do

- **It does not confirm that information is a trade secret** — the conditions are
  ultimately assessed by a court; the skill documents the basis of the assessment.
- **It does not assist in acquiring or using someone else's trade secret** —
  gathering competitor information must stay within lawful sources.
- **It does not investigate an employee's communications** and does not bypass data
  protection limits when gathering evidence.
- **It does not confirm time limits or levels of compensation from memory** — from
  source, or `[check]`.
- **It does not replace criminal proceedings** — serious acts go to the police; the
  skill structures the civil remedies.

## Continue from here

- Drafting an NDA or a confidentiality clause → /contracts:contract-drafting
- Non-competition and the terms of employment → /employment-law:employment-contract
- Checking a provision or case law → /legal-core:legal-research
- A patentable invention → /intellectual-property:trademarks-and-trade-names (the table of forms of protection) and a patent attorney
- Personal data in an investigation → /data-protection:data-protection-assessment
