---
name: lease-agreements
description: >
  Residential and commercial leases in Finland (the Act on Residential Leases,
  laki asuinhuoneiston vuokrauksesta 481/1995, and the Act on Commercial
  Leases, laki liikehuoneiston vuokrauksesta 482/1995). Use this skill when the
  user is drafting or reviewing a lease, assessing the conditions for a rent
  increase, a security deposit, termination with notice or summary termination,
  dealing with rent arrears, a nuisance situation or an eviction, or comparing
  the differences between residential and commercial leases. Triggers on:
  lease, tenancy agreement, tenant, landlord, rent increase, rent security
  deposit, notice period, termination of lease, eviction, rent arrears,
  fixed-term lease, commercial premises rent, subletting, vuokrasopimus,
  vuokralainen, häätö.
---

# Leases — residential and commercial premises

This skill sets out the life cycle of a tenancy from both perspectives (landlord and tenant). **The
first distinction: is it a residential unit (AHVL 481/1995) or business premises (LHVL 482/1995)?**
— the purpose of use decides, and the extent to which the two acts are mandatory differs
substantially. Fundamentals: `../real-property-conveyance/references/real-property-fundamentals.md`.

> **Disclaimer:** the drafts are for review — not legal advice. The Act on Residential Leases
> contains mandatory provisions protecting the tenant — a term contrary to them is ineffective. See
> `real-estate-and-housing/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Check the law from the source

Retrieve the provisions of AHVL and LHVL (notice periods, the maximum amount of the security
deposit, grounds for summary termination, the procedure for a rent increase) **with the
`legal-core:legal-research` skill** — not from memory. Check which of the two acts applies and what
is mandatory: AHVL protects the tenant extensively, LHVL is largely non-mandatory.

## Drafting the agreement

Work through at least these (in both types of agreement):

1. **Parties and the object** — the unit, its condition as agreed (an initial inspection plus
   photographs is recommended), keys, and parking spaces and storage separately.
2. **Term of the agreement** — valid until further notice or fixed-term. A fixed term binds both
   parties for the whole period — the consequences of early termination and the exceptions from the
   source. Chained short fixed terms in housing: the basis needs checking.
3. **Rent and the increase clause** — the increase mechanism must be agreed precisely (index,
   percentage, step increase plus the notification procedure); without a clause an increase
   requires agreement or the statutory procedure — from the source. Whether an index clause is
   permissible is checked.
4. **Security deposit** — AHVL has a maximum amount `[check from the source]`; what the security
   covers (all contractual obligations versus rent only) and the time for its return are recorded.
5. **Maintenance and alterations** — the AHVL default rule versus what has been agreed; in business
   premises the division of responsibility and the condition classification are agreed more freely.
6. **Special terms for business premises** — the purpose of use and protection against competing
   uses, VAT status (registration → `taxation:value-added-tax`), an itemisation of the maintenance
   rent, the right to sublet and to assign, redemption and extension options, and contractual
   penalties.

## During the tenancy

- **Increases**: follow the agreed mechanism and the notification periods; a unilateral increase
  without a clause is not binding.
- **Condition of the unit and repairs**: the duty to notify, a rent reduction for loss of amenity
  (the conditions from the source), and the landlord's access to the unit.
- **Nuisance and defaults**: documentation (a warning!) before heavier measures.

## Ending the tenancy — choose the right remedy

| Remedy | When | Note |
|---|---|---|
| **Termination with notice** | valid until further notice | notice periods (irtisanomisaika) from the source (AHVL: the length depends on the party and on the duration); for a residential unit there are good-practice requirements for the landlord's notice and protection for the tenant — from the source |
| **Summary termination** | a material breach of contract (arrears, nuisance, use contrary to the agreed purpose) | grounds for summary termination from the source; **a warning is usually required first** — without one the summary termination fails |
| **Expiry of the fixed term** | fixed-term | no obligation to renew; tacit continuation must be agreed or prevented |
| **Eviction** | the tenant does not leave | a judgment plus enforcement → `insolvency:debt-collection` and `dispute-resolution:statement-of-claim`; self-help eviction is prohibited |

In an arrears situation, set out the whole picture: a payment plan versus summary termination, use
of the security, collection — and the possibility of housing advice in residential tenancies.

## What this skill does NOT do

- **It does not draft terms contrary to the mandatory provisions of AHVL** — an ineffective term is
  pointed out, not hidden in the agreement.
- **It does not confirm notice periods, security deposit limits or the permissibility of index
  clauses from memory** — from the source or `[check]`.
- **It does not carry out an eviction and does not use self-help remedies** (changing the locks,
  retaining the tenant's property) — enforcement belongs to the enforcement authority.
- **It does not take a view on the level of rent** — the market rent is not a legal question.
- **It does not deal with land leases** (maanvuokralaki) — a different act; raise the point if the
  object is land.

## Continue from here

- Collection of rent arrears and enforcement of an eviction → /insolvency:debt-collection
- A summary termination or eviction dispute in court → /dispute-resolution:statement-of-claim
- The relationship between the housing company and the shareholder in a let unit → /real-estate-and-housing:housing-company
- VAT registration for business premises → /taxation:value-added-tax
- Checking a provision from the source → /legal-core:legal-research
- The language and structure of a draft agreement → /legal-core:document-review
