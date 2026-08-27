# Real property and housing

Finnish real property and housing law: conveyance of real property and registration matters, sale of
housing-company shares with its defect liability, maintenance and governance in a housing company,
and residential and commercial leases.

> **Drafts are for review – not legal advice.**
> A sale of real property is subject to a prescribed form, the periods for giving notice of a defect
> are unforgiving, and the line between real property and housing-company shares decides which act
> applies – all of this is baked into the guardrails. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **real-property-conveyance** | The Code of Real Estate (maakaari 540/1995): the prescribed form of the sale and confirmation by a public purchase witness (including electronic conveyancing at Maanmittauslaitos), the terms of the deed of sale, registration of title and mortgages, types of defect (quality, dominion and legal defect), notice of defect and remedies. Includes the fundamentals reference for the field. |
| **residential-property-sale** | The Housing Transactions Act (asuntokauppalaki 843/1994): new-build and the RS system, sale of a used dwelling, the seller's duty to disclose and the buyer's duty to inspect, assessment of a defect and notice of defect, and the link to housing-company information. |
| **housing-company** | The Limited Liability Housing Companies Act (asunto-osakeyhtiölaki 1599/2009): the division of maintenance liability, alterations by a shareholder, the general meeting and governance, the company charge, redemption clauses and shareholder disputes. |
| **lease-agreements** | Residential leases (481/1995) and commercial leases (482/1995): drafting the agreement, rent increases, security, termination with notice and summary termination – from both parties' perspective, taking the differences in mandatory rules into account. |

## The verified statutes it rests on

Confirmed from the source (Finlex): the **Code of Real Estate (maakaari 540/1995)** – including the
terms public purchase witness (kaupanvahvistaja), electronic conveyancing system, registration of
title (lainhuuto) and mortgage, and the types of defect quality, dominion and legal defect – the
**Housing Transactions Act (asuntokauppalaki 843/1994)**, the **Limited Liability Housing Companies
Act (asunto-osakeyhtiölaki 1599/2009)**, the **Act on Residential Leases (laki asuinhuoneiston
vuokrauksesta 481/1995)**, the **Act on Commercial Leases (laki liikehuoneiston vuokrauksesta
482/1995)**, the **Act on the Brokerage of Real Estate and Rental Apartments (laki kiinteistöjen ja
vuokrahuoneistojen välityksestä 1074/2000)** and the **Real Estate Formation Act
(kiinteistönmuodostamislaki 554/1995)**. Section-level content and time limits are checked in use
with the `legal-core:legal-research` skill.

## Related

- **The `legal-core` domain** – `legal-research` (KKO case law on defects and notices of defect),
  `engagement-intake` (scanning the periods for giving notice of a defect) and `document-review`.
- **The `contracts` domain** – general contract mechanics underlying the deed of sale and the
  lease.
- **The `environment-and-planning` domain** – the planning situation, building permits and
  contaminated soil in a sale of real property.
- **The `dispute-resolution` domain** – taking a defect dispute to court.
- **The `insolvency` domain** – collection of rent arrears and eviction as enforcement.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install real-estate-and-housing@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the repository root.
