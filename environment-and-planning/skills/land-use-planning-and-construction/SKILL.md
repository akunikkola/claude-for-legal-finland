---
name: land-use-planning-and-construction
description: >
  Land use planning and construction in Finland under the Land Use Act
  (alueidenkäyttölaki 132/1999, formerly maankäyttö- ja rakennuslaki) and the
  new Building Act (rakentamislaki 751/2023). Use this skill when the user is
  establishing the planning situation or the interpretation of planning
  regulations, is taking part in a planning process (opinion, objection,
  appeal), is assessing the need for or the conditions of a building permit,
  is applying for a derogation, is appealing against a planning or permit
  decision, or is assessing whether a project can be carried out on a plot.
  Triggers on: local plan, kaava, asemakaava, yleiskaava, planning
  regulation, kaavamääräys, plan amendment, kaavamuutos, participation and
  assessment scheme, building permit, rakentamislupa, rakennuslupa,
  derogation, poikkeaminen, poikkeamislupa, suunnittelutarveratkaisu,
  building control, rakennusvalvonta, demolition permit, purkamislupa, plot,
  tontti, building right, rakennusoikeus.
---

# Land use planning and construction

This skill frames questions of planning and of building permits.
**Note that the legislation has been reformed:** the Building Act (rakentamislaki
751/2023) replaced the old MRL as regards building, and the Act that remains is now called
the **Land Use Act** (alueidenkäyttölaki 132/1999) — both confirmed from the source.
Fundamentals:
`../environmental-permits-and-supervision/references/environmental-law-fundamentals.md`.

> **Disclaimer:** the drafts and assessments are to be checked — not legal advice. The
> technical design of a building project belongs to the designers; the interpretation of a
> plan is confirmed in the last resort by building control or by a court. See
> `environment-and-planning/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law in the source

Fetch the provisions of the Land Use Act and the Building Act with the
**`legal-core:legal-research` skill**: the threshold for a building permit, the conditions
for a permit inside and outside a planned area, the conditions for derogation and the
appeal periods. **Do not use the old concepts** (rakennuslupa, toimenpidelupa) as if they
were in force — the new system is **rakentamislupa, purkamislupa, maisematyölupa,
sijoittamislupa** (confirmed).

## The planning system and establishing the planning situation

1. **Hierarchy**: the national land use objectives → the regional plan (maakuntakaava) →
   the local master plan (yleiskaava) → the local detailed plan (asemakaava). The higher
   guides the lower; the most detailed governs building.
2. **Establishing the planning situation for a plot**: the plans and regulations in force
   (permitted use, building right, number of storeys, protection markings), plan amendments
   pending, building prohibitions. The sources are the municipality's map service and its
   planning review — the skill cannot see them, so draw up a list of what a human has to
   establish.
3. **Interpreting planning regulations**: the wording, plus the plan report, plus the case
   law (KHO from the source). Where the matter is open to interpretation, propose a prior
   discussion with building control.

## Influencing the planning process

- **Stages**: initiation (the participation and assessment scheme) → preparation and draft
  (opinion) → proposal (objection) → approval (the council) → appeal to the administrative
  court. Take part early — by the approval stage the scope for influence is already narrow.
- **Framing an objection**: which part of the plan proposal, what concrete effect, what
  demand; tie it to the studies (gaps in the plan's impact assessments are the most
  effective ground of appeal).
- **Appeal against a plan**: the right of appeal and the grounds (review of legality — not
  of expediency), the appeal period running from the public notice
  `[check the source]`. Equal treatment of landowners, the adequacy of the studies and
  procedural errors are the typical grounds.
- General doctrine of municipal decision-making: Local Government Act (kuntalaki 410/2015)
  → `administrative-law`.

## The building permit (751/2023)

1. **Is a permit needed?** The threshold for a building permit from the source — the new Act
   raised the threshold and not everything that used to require a permit still does; the
   need for a demolition permit and a landscape work permit is also checked.
2. **Conditions**: in a detailed plan area, conformity with the plan; outside a planned
   area, the conditions on the need for planning and the other conditions from the source.
   **The conditions for siting and for implementation** may be assessed separately (the
   siting permit — its scope of application from the source).
3. **Climate report**: the carbon footprint and carbon handprint are reported for the
   purposes of the building permit (confirmed from the Act) — the scope of application and
   the limit values from the source.
4. **Neighbours**: hearing and neighbours' consents; the neighbour's right of appeal against
   the permit decision.
5. **Responsibilities**: the responsibilities of the party undertaking the project and of
   the designers under the new Act — check the roles from the source when drawing up
   contracts (→ `contracts`).

## Derogation

Where a project does not fit the plan or the provisions: a **derogation decision** or a
minor derogation in connection with the permit — the competence, the conditions (it must
not cause harm to planning; a special reason) and the limits from the source. Frame it:
what is being derogated from, why, and why the conditions are met; have the neighbours'
positions ready.

## What this skill does NOT do

- **It does not see plans, map services or registers** — it draws up the list of what has to
  be established; the planning data are fetched by a human from the municipality.
- **It does not confirm permit thresholds, calculations of building right or appeal periods
  from memory** — from the source or `[check]`.
- **It does not do building design** and does not assess the technical requirements
  (structures, fire, accessibility) — those are for the designers.
- **It does not use outdated concepts** (MRL, rakennuslupa, toimenpidelupa) as if they were
  in force.
- **It does not promise that a permit will be granted** — an assessment of the conditions is
  always `[confirm — building control or a lawyer]`.

## Continue from here

- Environmental permits and EIA for the project → /environment-and-planning:environmental-permits-and-supervision
- Contaminated soil on the plot → /environment-and-planning:environmental-liability
- Checking a provision or the case law of KHO → /legal-core:legal-research
- The process of a planning or permit appeal → /administrative-law:administrative-appeal
- Construction and design contracts → /contracts:contract-drafting
