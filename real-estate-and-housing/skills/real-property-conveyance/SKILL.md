---
name: real-property-conveyance
description: >
  Sale of real property in Finland under the Code of Real Estate (maakaari
  540/1995). Use this skill when the user is preparing or reviewing a sale or a
  pre-contract for real property, a parcel or an undivided share, drafting a
  deed of sale (kauppakirja), sorting out registration of title (lainhuuto),
  mortgages or encumbrances, assessing a defect that emerged after the sale
  (moisture damage, a discrepancy against the town plan, an encumbrance), or
  drafting a notice of defect or a letter of claim. Triggers on: sale of real
  property, conveyance, deed of sale, parcel, public purchase witness,
  registration of title, mortgage, mortgage deed, certificate of encumbrances,
  pre-contract, earnest money, latent defect, price reduction, rescission of
  the sale, condition survey, detached house, kiinteistökauppa, lainhuuto,
  kaupanvahvistaja.
---

# Sale of real property — prescribed form, registrations and defect liability

This skill structures the preparation and execution of a sale of real property, and defect
situations, under the Code of Real Estate (maakaari 540/1995). Fundamentals and the line between
real property and housing-company shares: `references/real-property-fundamentals.md` — read it at
the start of the task. If the object turns out to be housing-company shares →
the `residential-property-sale` skill.

> **Disclaimer:** the drafts are for review — not legal advice. Confirmation of the sale by a
> public purchase witness, signatures and applications for registration are the human's
> responsibility. See `real-estate-and-housing/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law from the source

Retrieve the provisions of the Code of Real Estate (the formal requirement, defects, time limits,
registration obligations) **with the `legal-core:legal-research` skill**, and the KKO case law on
defects and notices of defect from the source. The rate of transfer tax and the obligation to file
→ `taxation` and vero.fi `[check]`.

## Stage 1: Establishing the object and its background

1. **What is being sold?** The whole property, a parcel (määräala) or an undivided share
   (määräosa); a leasehold together with the buildings on it is a different instrument (a special
   right that must be registered). Flag hybrid forms.
2. **List of documents to obtain** (in the reference): certificate of title and certificate of
   encumbrances, extract from the real estate register, extract from the town plan, building
   permits — the skill cannot see the registers; a human obtains them from Maanmittauslaitos and
   the municipality.
3. **Encumbrances and rights**: mortgages and mortgage deeds (who holds them?), registered special
   rights, easements, shares in joint areas, road rights.
4. **Planning and permits**: the purpose of use, the permitted building volume, unauthorised
   structures → `environment-and-planning:land-use-planning-and-construction`; the risk of
   contaminated soil → `environment-and-planning:environmental-liability`.

## Stage 2: Drafting the deed of sale

- **The prescribed form is absolute**: a written deed of sale confirmed by a public purchase
  witness (kaupanvahvistaja) in the presence of all signatories — or a sale in the **electronic
  conveyancing system** of Maanmittauslaitos (both confirmed from the Act). The minimum content
  (the intention to convey, the property, the parties, the purchase price) from the source — an
  omission sinks the sale.
- **A pre-contract** is likewise subject to the prescribed form; an informal "reservation" is not
  binding — the effects of earnest money and of a contractual penalty from the source.
- **Key terms**: the passing of ownership and possession, payment of the purchase price and
  security arrangements (delivery of the mortgage deeds), the passing of risk, the condition of the
  object and the investigations carried out (the condition survey report specifically identified),
  the allocation of responsibility for known defects, an itemisation of movables (tax effect), and
  the consequences of delay.
- **Limitation of liability clause**: an unspecified "as is" term is not enough to limit the
  seller's liability for defects — the limitation must be specific (check the conditions from the
  source). Do not draft a limitation that only appears to be one.

## Stage 3: After the sale — registrations

- **Registration of title (lainhuuto)** must be applied for within the time limit from the sale
  `[time limit — check from the source]`; in an electronic sale the matter becomes pending
  automatically.
- Transfer of the mortgage deeds and new mortgages; payment of transfer tax is a condition for
  registration of title.
- Draw up a checklist of the registrations with their dates → `legal-core:engagement-intake`
  (a table of time limits).

## Stage 4: A defect situation

1. **Identify the type of defect** (the concepts are confirmed from the Act): a **quality defect**
   (condition; including a latent defect — the threshold and the materiality requirement from the
   source), a **defect in dominion** (planning or permits), a **legal defect** (ownership or
   encumbrances).
2. **Liability analysis**: the seller's duty to disclose versus the buyer's duty of pre-purchase
   inspection; the significance of recommendations for further investigation in a condition survey;
   the estate agent's liability (1074/2000) separately.
3. **Give notice of the defect at once**: a reasonable time plus an absolute long-stop period
   `[check from the source]`. Content: the defect specifically identified, the observations and
   investigations, the claim (even in preliminary form) and a reservation as to supplementing it.
4. **Remedies**: price reduction (method of calculation from the source), damages (fault; in the
   case of a latent defect there is no compensation — check), rescission (a high materiality
   threshold). Litigation → `dispute-resolution:statement-of-claim`.

## What this skill does NOT do

- **It does not confirm the sale and does not replace the public purchase witness** — the
  prescribed form is satisfied only in the manner laid down in the Act.
- **It cannot see the registers** (title, encumbrances, town plan) — it draws up the list of
  documents to obtain; a human obtains the extracts.
- **It does not assess the structural condition of a building** — a condition survey belongs to a
  specialist; the skill sets out the legal significance of the report.
- **It does not confirm time limits or tax rates from memory** — from the source or `[check]`.
- **It does not assist in concealing defects** — refuse, and explain the risk of liability for the
  defect and for fraud.

## Continue from here

- The object turns out to be housing-company shares → /real-estate-and-housing:residential-property-sale
- A planning, permit or contamination question → /environment-and-planning:land-use-planning-and-construction
- Checking a provision or KKO case law → /legal-core:legal-research
- Taking a defect dispute to court → /dispute-resolution:statement-of-claim
- Transfer tax and capital gains → /taxation:tax-procedure-and-appeals
- The language and structure of the deed of sale → /legal-core:document-review
