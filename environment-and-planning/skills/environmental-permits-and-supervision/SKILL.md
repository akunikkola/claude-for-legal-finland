---
name: environmental-permits-and-supervision
description: >
  Environmental permits, notifications and supervision under the Finnish
  Environmental Protection Act (ympäristönsuojelulaki 527/2014). Use this
  skill when the user is assessing whether an activity needs a permit or
  whether a permit has to be amended, is preparing or framing an
  environmental permit application or a water permit, is assessing the need
  for an EIA procedure, is drafting an objection or a statement on a permit
  project, is appealing against a permit decision, or is responding to a
  request for information or to administrative enforcement by the supervisory
  authority (Lupa- ja valvontavirasto or the municipal environmental
  protection authority). Triggers on: environmental permit, ympäristölupa,
  water permit, vesilupa, permit obligation, luvanvaraisuus, EIA, YVA, Natura
  assessment, permit condition, lupamääräys, BAT, objection, muistutus,
  public notice, kuulutus, administrative enforcement, hallintopakko,
  conditional fine, uhkasakko, Lupa- ja valvontavirasto, LVV, emission limit.
---

# Environmental permits and supervision

This skill frames situations involving environmental permits and supervision.
Fundamentals, the map of permits and the set of authorities in 2026:
`references/environmental-law-fundamentals.md` — read it at the start of the task.

> **Disclaimer:** the drafts are to be checked — not legal advice. The technical and
> scientific studies (emissions, noise, nature) are made by a consultant in the field.
> See `environment-and-planning/AGENTS.md` — in particular the reformed statute names
> and authorities (LVV 2026).

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law and the authority in the source

Fetch the provisions of the Environmental Protection Act (527/2014) and the **list of
installations subject to a permit** with the **`legal-core:legal-research` skill** — the
thresholds change. Competence (LVV versus the municipal environmental protection
authority) and the transitional provisions for matters already pending are checked from
the source — do not direct the user to AVI or to an ELY centre, they ceased at the end of
2025.

## Stage 1: Does the activity need a permit?

1. **Permit obligation** — the list of installations in the Environmental Protection Act
   and the general grounds (a groundwater area, nuisance in neighbouring relations and
   others) from the source; the lighter procedures (the general notification procedure,
   registration) as alternatives.
2. **Parallel procedures** — a water permit (587/2011), an EIA (252/2017: the project
   list or a case-by-case decision), a Natura assessment (9/2023), chemical and other
   special permits. Draw up a **map of permits on a timeline**: EIA before the permit,
   permits in parallel or in sequence.
3. **Change of activity** — a material change in the activity may require the permit to be
   amended; assess the threshold from the source, and do not split the activity so as to
   fall below the permit threshold (negative scope limit in `AGENTS.md`).

## Stage 2: Framing the permit application (for the operator)

- **Prior consultation** with the authority in large projects — propose it.
- The core parts of the application: description of the activity, emissions and effects
  with the supporting studies, the BAT assessment, the monitoring plan, securities (waste
  treatment) — the content requirements from the source.
- **Gaps in the studies** are the most common cause of delay: list the missing studies and
  assign responsibility for them (consultant, applicant).
- Be ready for the permit conditions: emission limits, monitoring, reporting — comment at
  the draft stage, not first on appeal.

## Stage 3: Participation (for a person suffering harm, an association, a municipality)

- **Public notice stage**: an objection (a party) or an opinion (anyone else) — the
  deadline into the calendar `[model calculation — check]`. A missed window materially
  weakens the position.
- Structure of an objection: who and in what capacity, which part of the application, the
  concrete harm or defect, and the demand (rejection, a permit condition, further
  investigation).
- **Appeal against a permit decision**: the right of appeal (parties, associations,
  authorities — from the source), the concentrated route for appeals (the Vaasa
  Administrative Court in environmental and water matters — the route and the periods from
  the source). General doctrine: `administrative-law:administrative-appeal`.

## Stage 4: Supervision and administrative enforcement

When the supervisory authority intervenes:

1. **Identify the stage**: inspection, exhortation, request for information, administrative
   enforcement proceedings (an order plus a conditional fine or a threat of performance by
   a third party), suspension of the activity, a request for a criminal investigation.
2. **Framing the response**: keep the facts and the technical account separate from the
   legal assessment; corrective measures and their timetable; do not flatter the monitoring
   results — that is an independent criminal risk (→ `environmental-liability`).
3. **Legal protection**: appeal against an administrative enforcement decision, the right
   to be heard, proportionality.

## What this skill does NOT do

- **It does not carry out emission, noise or nature studies** and does not assess their
  technical correctness — those belong to specialists in the field.
- **It does not confirm permit thresholds, time limits or the limits of competence from
  memory** — from the source or `[check]`.
- **It does not file applications, objections or appeals** — a human signs and is
  responsible for the time limits.
- **It does not assist in circumventing permit obligations** — splitting an activity,
  concealing emissions or flattering results → refuse.
- **It does not direct the user to authorities that have been abolished** (AVI, ELY) — the
  authority in force is always checked.

## Continue from here

- A planning or building permit question in the same project → /environment-and-planning:land-use-planning-and-construction
- Contaminated soil or compensation for damage → /environment-and-planning:environmental-liability
- Checking a provision or the case law of KHO or the Vaasa Administrative Court → /legal-core:legal-research
- Scanning the time limits for an appeal or an objection → /legal-core:engagement-intake
- General doctrine of administrative decisions and procedure → /administrative-law:administrative-appeal
