# Agent Skills for Finnish Law

Open-source [Agent Skills](https://agentskills.io/specification.md) for Finnish legal work: legal
language, section references and legal sources **on the terms of Finnish law**.

**24 domains · 78 skills · 6 subagents · connections to Finlex and oik.ai · [MIT](LICENSE)**

The collection is vendor-neutral. Every domain is a self-contained bundle — copy
`<domain>/skills/*` into any harness that reads the Agent Skills format and it works, with no
plugin system required. Claude Code and Codex are two supported harnesses, not the premise;
adapters for both are generated from the neutral sources. Repository-wide guidance follows the
[AGENTS.md](https://agents.md) convention: see [AGENTS.md](AGENTS.md).

A browsable overview of the whole collection:
**[ragmha.github.io/agent-skills-for-finnish-law](https://ragmha.github.io/agent-skills-for-finnish-law/)**

> [!NOTE]
> **Unofficial translation.** This English text is a translation of Finnish legal material and is
> provided **for comprehension only**. **The Finnish original governs.** Nothing here is legal
> advice. Statute names, statute numbers, court abbreviations and case identifiers are given in
> Finnish (`kuntalaki 410/2015`, `KKO:2019:42`, `HE 268/2014 vp`) because that is what is actually
> citable — do not translate them. Verify anything you rely on against Finlex or oik.ai before
> using it.

> [!IMPORTANT]
> **Every output is a draft that needs checking. This is not legal advice, and neither this
> collection nor any feature in it replaces a lawyer.** Responsibility for the result always rests
> with the user, and use is recommended only for trained legal professionals. The domains are built
> accordingly: statutes and case law are checked against a source rather than recalled from memory,
> every citation carries a source marking, jurisdiction assumptions are kept visible, and before
> anything is sent or signed a human confirms it. The protection comes from the **mechanisms** —
> source verification, three-tier certainty marking, premise checking, negative scoping and the
> human review gate. They are collected in
> [`references/citation-style.md`](references/citation-style.md) and
> [`references/liability-and-security.md`](references/liability-and-security.md).
>
> This is an open community project, not an official, legal or advocacy service, and it does not
> represent any organisation's official legal position. Anyone may contribute their own skill files
> and domains that have proved demonstrably useful in their own work.

## The idea

Finnish legal work differs from the Anglo-American kind: a civil law system, the Finlex statute
database, government bills (HE) as interpretative material, precedents of the Supreme Court (KKO)
and the Supreme Administrative Court (KHO), mandatory legislation and precise legal language. This
collection brings those **genuine sources** in as the basis of the work and connects directly to
**Finlex** and to a legal-source MCP — **oik.ai** or **laki.ai**.

The collection manifest ([`marketplace.json`](marketplace.json)) lists the practice-area domains,
and each domain contains:

- **skills** (`skills/<name>/SKILL.md`) — the actual expertise and workflow,
- **shared guardrails** (`AGENTS.md`) — the safety net that applies even when a skill does not load,
- **data connectors** (`mcp.json`) — connections to a legal-source MCP (oik.ai or laki.ai) and, in
  the document domains, to **Adeu** (redlining Word documents as native tracked changes),
- some domains also have **subagents** (`agents/<name>.md`) — steps you can delegate.

There are six subagents: adversarial checking of references (`source-checker`), scanning material
for time limits (`deadline-scanner`), simulating the opposing party's argument
(`opposing-counsel`), inventorying a data room (`material-mapper`), comparing a contract against
the house position (`deviation-checker`) and preparing a disclosure assessment
(`confidentiality-assessor`).

## How quality is kept up

The collection's core promise is that citations rest on genuine sources. Three mechanisms police
this:

- **Shared standards.** The [`references/`](references/) files at the repository root define the
  common source, liability and security lines that every domain rests on.
- **Validator.** [`scripts/validate.mjs`](scripts/validate.mjs) checks the structure of the
  collection manifest and the skills in CI on every change.
- **Statute watch.** [`scripts/check-statutes.mjs`](scripts/check-statutes.mjs) goes through Finlex
  monthly to confirm that the names of the statutes the collection cites are still current. A
  repealed or renamed act is caught automatically.

## Domains

All 24 domains are complete and can be installed individually.

| Domain | What it covers |
|---|---|
| **[legal-core](legal-core/)** | The cross-cutting foundation: legal language and section references, Finnish usage, legal research (oik.ai/Finlex) and multi-stage review of a legal document. |
| **[legislative-drafting](legislative-drafting/)** | Drafting legislation: Lainkirjoittajan opas, the drafting instructions for government bills (HELO), the legislative process guide, legal language. |
| **[legislative-consultation](legislative-consultation/)** | The consultation procedure: statements on legislative proposals, impact assessment from the consultee's perspective, Lausuntopalvelu.fi. |
| **[contracts](contracts/)** | Drafting contracts (structure, clause library, contract law) and clause-by-clause risk assessment under Finnish law. |
| **[employment-law](employment-law/)** | The employment contract (työsopimuslaki 55/2001), assessing termination, and co-operation and change negotiations (yhteistoimintalaki 1333/2021). |
| **[data-protection](data-protection/)** | The GDPR and the Data Protection Act: assessing processing and DPIAs, the privacy notice, data subject requests. |
| **[ai-regulation](ai-regulation/)** | The EU AI Act: risk classification, obligations, deadlines, penalties, GPAI and FRIA. Open, deterministic EU AI Act MCP. |
| **[administrative-law](administrative-law/)** | The administrative decision (hallintolaki 434/2003), appeals (808/2019) and document publicity and information requests (julkisuuslaki 621/1999). |
| **[dispute-resolution](dispute-resolution/)** | Civil litigation in the general courts (oikeudenkäymiskaari 4/1734): the application for a summons, evidence, appeals. |
| **[company-law](company-law/)** | The Limited Liability Companies Act (osakeyhtiölaki 624/2006): formation and governance, directors' liability, distribution of assets, shareholders' agreements, transactions and DD. |
| **[insolvency](insolvency/)** | Insolvency: choosing the procedure (bankruptcy 120/2004, restructuring 47/1993, debt adjustment 57/1993), bankruptcy proceedings, debt collection and enforcement. |
| **[intellectual-property](intellectual-property/)** | IPR: trade marks and trade names (544/2019 and 128/1979), copyright including the DSM reform (404/1961), trade secrets (595/2018). |
| **[taxation](taxation/)** | Tax procedure and appeals (VML 1558/1995), business taxation (EVL 360/1968), value added tax (AVL 1501/1993). |
| **[public-procurement](public-procurement/)** | Public procurement under the Act on Public Procurement and Concession Contracts (hankintalaki 1397/2016), and appeals to the Market Court. |
| **[criminal-procedure](criminal-procedure/)** | Pre-trial investigation and coercive measures (805/2011 and 806/2011), the charge and the response (ROL 689/1997), the injured party's position and compensation. |
| **[environment-and-planning](environment-and-planning/)** | Environmental permits (YSL 527/2014), planning and construction (rakentamislaki 751/2023), environmental liabilities and environmental DD. The 2026 reform is taken into account. |
| **[real-estate-and-housing](real-estate-and-housing/)** | Sale of real property (maakaari 540/1995), sale of housing (843/1994), housing companies (1599/2009), leases (481–482/1995). |
| **[competition-law](competition-law/)** | Finnish and EU competition law: restrictive practices and dominance (948/2011, TFEU Articles 101 and 102), merger control, compliance and dawn-raid readiness. |
| **[banking-and-finance](banking-and-finance/)** | Finnish banking and finance law: financing agreements and collateral (622/1947 and 361/1999), anti-money laundering (444/2017), securities markets (746/2012, MAR). |
| **[immigration-law](immigration-law/)** | Work-based residence permits (ulkomaalaislaki 301/2004), employer obligations, EU-based and family-based residence, citizenship (359/2003). |
| **[family-and-inheritance](family-and-inheritance/)** | Prenuptial agreements and division of matrimonial property (avioliittolaki 234/1929), the position of a cohabiting partner (26/2011), child custody, contact and maintenance (361/1983 and 704/1975), inheritance, wills and the compulsory share (perintökaari 40/1965), guardianship and continuing powers of attorney (442/1999 and 648/2007). |
| **[consumer-law](consumer-law/)** | Liability for defects in consumer sales and the consumer's remedies (kuluttajansuojalaki 38/1978), the right of withdrawal in distance and off-premises selling, unfair marketing, consumer disputes (8/2007) and good debt-collection practice (513/1999). Mandatory in the consumer's favour. |
| **[criminal-law](criminal-law/)** | Substantive criminal law (rikoslaki 39/1889): the bases of criminal liability (intent, participation, grounds excluding liability), the main offence types with their essential elements, and sentencing. Complements criminal procedure; the perspective of the defence and of the injured party. |
| **[bilingual-legal-language](bilingual-legal-language/)** | Translating legal language FI↔SV using established terms from official sources, plus linguistic rights and an authority's language obligations (kielilaki 423/2003, perustuslaki 731/1999 section 17, saamen kielilaki 1086/2003). |

## Getting started

The shortest path in Claude Code: add the marketplace and install the domain you want.

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install legal-core@agent-skills-for-finnish-law
```

For Codex, and for any other harness implementing the Agent Skills format, see
[AGENTS.md](AGENTS.md). Fuller instructions are in [QUICKSTART.md](QUICKSTART.md).

For organisational use, first take the decisions in the
[`references/firm-adoption.md`](references/firm-adoption.md) guide — the material policy, the
processing agreement, anonymisation and the review chain — and pilot with the
[example fixtures](examples/) before you put real material into the tool.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The main principle: the correct behaviour belongs in
SKILL.md and rests on genuine sources, and the `AGENTS.md` guardrails are the safety net.

## Licence

[MIT](LICENSE) © 2026 Aku Nikkola.
