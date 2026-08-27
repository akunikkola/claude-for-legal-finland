# Skillit

> Autogeneroitu `scripts/generate-skills-md.mjs`-skriptillä `.claude-plugin/marketplace.json`:sta
> ja kunkin `SKILL.md`:n frontmatterista. Älä muokkaa käsin – aja skripti uudelleen.

Markkinapaikalla on **24 plugaria** ja **78 skilliä**. Asennus: ks. [QUICKSTART.md](QUICKSTART.md).

## Legal core

`/plugin install legal-core@agent-skills-for-finnish-law` – [`./legal-core/`](./legal-core/)

The cross-cutting foundation for Finnish legal work: legal language and section references, Finnish spelling, legal research into the law in force and into case law (Finlex/oik.ai MCP), and the multi-stage review of a legal document. The base that the other practice-area domains rely on.

| Skill | Kuvaus |
|---|---|
| [`case-summarization`](legal-core/skills/case-summarization/SKILL.md) | Case summarization for Finnish court decisions: extracting the essential content of a precedent or other decision into a structured form (identifying details, legal question, facts, outcome, the core of the reasoning or ratio, significance… |
| [`document-review`](legal-core/skills/document-review/SKILL.md) | Systematic multi-stage quality review of a legal document in the Finnish context. Use this skill when a legal document has to be reviewed before it is used: a contract, a statement, an appeal, an administrative decision, a memorandum, a dr… |
| [`engagement-intake`](legal-core/skills/engagement-intake/SKILL.md) | Engagement intake for Finnish legal work: opening a new engagement or matter and taking control of the material. Use this skill ALWAYS when the user starts a new engagement, brings a document or a bundle of documents to be dealt with, asks… |
| [`finnish-language`](legal-core/skills/finnish-language/SKILL.md) | Finnish spelling, grammar and style guidance for producing and checking Finnish-language content. Use this skill ALWAYS when you write or produce text in Finnish, check Finnish content, translate text into Finnish, create website content i… |
| [`legal-research`](legal-core/skills/legal-research/SKILL.md) | Legal research into Finnish law: retrieving, reading and correctly citing the legislation in force and the case law through the oik.ai, laki.ai or Finlex MCP. Use this skill when you need up-to-date statutory text, the content of a section… |
| [`legal-writing`](legal-core/skills/legal-writing/SKILL.md) | General assistant for Finnish law and legal writing. Use this skill ALWAYS when the user works with acts, sections, statutes, contracts or other legal documents — whether or not the user is a lawyer. It triggers when the user mentions a se… |
| [`plain-language`](legal-core/skills/plain-language/SKILL.md) | Explaining Finnish legal text in clear plain language to a lay reader — a client, a principal or another non-lawyer. Use this skill when a section, a contract term, a decision, a statement or a written submission has to be opened up into a… |
| [`practice-profile`](legal-core/skills/practice-profile/SKILL.md) | Tailoring the collection to an organisation's own standing practices. Use this skill when the user wants to adapt, configure or personalise the agent-skills-for-finnish-law domains to the practices of their own firm, company, agency or mun… |
| [`tabular-review`](legal-core/skills/tabular-review/SKILL.md) | Tabular review of legal documents: side-by-side comparison of several documents or structured tabulation of a single document, so that every cell is sourced to a place in the document. Use this skill when documents of the same type have to… |

## Legislative drafting

`/plugin install legislative-drafting@agent-skills-for-finnish-law` – [`./legislative-drafting/`](./legislative-drafting/)

An aid for drafting statutes: the Legislative Drafter’s Guide (the structure of statutes, language, cross-referencing, the enacting formula), the instructions for drafting government bills (HELO), the guide to the legislative process, and the symbols and inflected forms of statutory language. Based on the official guides.

| Skill | Kuvaus |
|---|---|
| [`government-bill-guidelines`](legislative-drafting/skills/government-bill-guidelines/SKILL.md) | Guidance for writing a Finnish government bill (hallituksen esitys) under the official drafting instructions HELO. Covers the standard reasoning structure from background and preparation through current state and objectives and proposals a… |
| [`legal-language-guide`](legislative-drafting/skills/legal-language-guide/SKILL.md) | Guide to the symbols and inflected forms used in Finnish statutory and legal language (lakikieli), based on Lainkirjoittajan opas chapter 24.4. Covers the section symbol § and its Finnish inflection (2 §:ssä), ordinal numbers and dates, nu… |
| [`legislative-drafting-manual`](legislative-drafting/skills/legislative-drafting-manual/SKILL.md) | Manual for drafting Finnish legislation, based on Lainkirjoittajan opas. Covers the hierarchy of norms under perustuslaki 731/1999, the types of statute (laki, asetus, määräys), statute structure (luku, pykälä, momentti), statutory languag… |
| [`legislative-process-guide`](legislative-drafting/skills/legislative-process-guide/SKILL.md) | Guide to the Finnish legislative preparation process from initiative to entry into force, following Lainvalmistelun prosessiopas. Covers preliminary preparation (esivalmistelu), basic preparation (perusvalmistelu), the consultation round (… |

## Consultation statements

`/plugin install legislative-consultation@agent-skills-for-finnish-law` – [`./legislative-consultation/`](./legislative-consultation/)

Drafting a statement on legislative reforms and draft acts: analysis of the proposal, impact assessment from the point of view of the body giving the statement, summarising other statements, and writing a reasoned statement. Suitable for municipalities, joint municipal authorities, agencies, organisations and companies.

| Skill | Kuvaus |
|---|---|
| [`consultation-statement-assistant`](legislative-consultation/skills/consultation-statement-assistant/SKILL.md) | Drafting a consultation statement (lausunto) on a legislative reform or a draft act from any respondent's point of view: municipality, city, joint municipal authority, government agency, association or company. Helps analyse the bill, comp… |

## Contracts

`/plugin install contracts@agent-skills-for-finnish-law` – [`./contracts/`](./contracts/)

Drafting and reviewing contracts under Finnish law: the structure of a contract and an annotated clause library, the fundamentals of contract law, and a clause-by-clause risk assessment (GREEN/YELLOW/RED) with flags for adjustment and for mandatory law.

| Skill | Kuvaus |
|---|---|
| [`contract-drafting`](contracts/skills/contract-drafting/SKILL.md) | Drafting a contract under Finnish law: structure, the key clauses and the fundamentals of contract law. Use this skill when the user is drafting, outlining or completing a contract – supply, services, non-disclosure, employment, lease, eng… |
| [`contract-review`](contracts/skills/contract-review/SKILL.md) | A clause-by-clause risk assessment of a contract under Finnish law, with a classification (GREEN / YELLOW / RED). Use this skill when the user wants to review, assess or comment on a contract they have received or drafted, to look for risk… |

## Data protection

`/plugin install data-protection@agent-skills-for-finnish-law` – [`./data-protection/`](./data-protection/)

Data protection in the processing of personal data under the EU General Data Protection Regulation (2016/679) and the Data Protection Act (1050/2018): assessing the processing and the need for a DPIA, the privacy notice and the record of processing activities, and responding to requests from data subjects.

| Skill | Kuvaus |
|---|---|
| [`data-protection-assessment`](data-protection/skills/data-protection-assessment/SKILL.md) | A data protection assessment of the processing of personal data: the legal basis for processing, the principles of processing and whether a data protection impact assessment (DPIA) is needed under the EU General Data Protection Regulation… |
| [`data-subject-requests`](data-protection/skills/data-subject-requests/SKILL.md) | Giving effect to the rights of the data subject and responding to their requests under the EU General Data Protection Regulation (Articles 15 to 22) and the Data Protection Act (tietosuojalaki 1050/2018): the right of access, rectification… |
| [`privacy-notice`](data-protection/skills/privacy-notice/SKILL.md) | Drafting a privacy notice (tietosuojaseloste — the information given to the data subject, GDPR Articles 13 and 14) and a record of processing activities (GDPR Article 30) under the EU General Data Protection Regulation and the Data Protect… |

## AI regulation

`/plugin install ai-regulation@agent-skills-for-finnish-law` – [`./ai-regulation/`](./ai-regulation/)

Compliance with the EU AI Act (Regulation (EU) 2024/1689): risk classification of an AI system, the obligations by role and risk tier, and the deadlines, the penalties, the GPAI threshold and the fundamental rights impact assessment (FRIA). Built on the open deterministic EU AI Act MCP.

| Skill | Kuvaus |
|---|---|
| [`ai-classification`](ai-regulation/skills/ai-classification/SKILL.md) | Risk classification of an AI system under the EU Artificial Intelligence Act (Regulation (EU) 2024/1689, the "AI Act"): prohibited, high risk, limited risk (transparency obligations) or minimal risk. Use this skill when the user wants to e… |
| [`ai-compliance`](ai-regulation/skills/ai-compliance/SKILL.md) | Supporting tasks for compliance with the AI Act (EU 2024/1689): the deadlines and transitional periods for application, the size of the penalties (fines), the threshold for systemic risk in a GPAI model (10^25 FLOPs) and the fundamental ri… |
| [`ai-obligations`](ai-regulation/skills/ai-obligations/SKILL.md) | Establishing the obligations under the AI Act (EU 2024/1689) by role (provider/deployer) and risk class, and compiling the technical documentation for a high-risk system (Annex IV). Use this skill when the risk class of an AI system is kno… |

## Employment law

`/plugin install employment-law@agent-skills-for-finnish-law` – [`./employment-law/`](./employment-law/)

Finnish employment law: drafting and reviewing an employment contract (työsopimuslaki 55/2001), assessing the grounds and the procedure for terminating employment, and co-operation and change negotiations (yhteistoimintalaki 1333/2021). On the terms of mandatory legislation and collective agreements.

| Skill | Kuvaus |
|---|---|
| [`change-negotiations`](employment-law/skills/change-negotiations/SKILL.md) | Co-operation and change negotiations under the Finnish Act on Co-operation within Undertakings (yhteistoimintalaki 1333/2021): continuous dialogue, the conditions for and course of change negotiations, the negotiation proposal, time limits… |
| [`employment-contract`](employment-law/skills/employment-contract/SKILL.md) | Drafting and reviewing an employment contract under Finnish employment law (Employment Contracts Act, työsopimuslaki 55/2001). Use this skill when the user is drafting or reviewing an employment contract, or asks about the terms of an empl… |
| [`termination-of-employment`](employment-law/skills/termination-of-employment/SKILL.md) | Assessment of the ending of an employment relationship under Finnish employment law (Employment Contracts Act, työsopimuslaki 55/2001): termination with notice (irtisanominen, on grounds relating to the person and on financial and producti… |

## Administrative law

`/plugin install administrative-law@agent-skills-for-finnish-law` – [`./administrative-law/`](./administrative-law/)

Finnish administrative law and public administration: drafting and reviewing an administrative decision (hallintolaki 434/2003), appeals – request for rectification and appeal (laki oikeudenkäynnistä hallintoasioissa 808/2019) – and public access to documents and information requests (julkisuuslaki 621/1999).

| Skill | Kuvaus |
|---|---|
| [`administrative-appeal`](administrative-law/skills/administrative-appeal/SKILL.md) | Appealing against a Finnish administrative decision: request for rectification (oikaisuvaatimus), administrative appeal to the administrative court and appeal to the Supreme Administrative Court (KHO) under the Act on Judicial Procedure in… |
| [`administrative-decision`](administrative-law/skills/administrative-decision/SKILL.md) | Drafting and reviewing a Finnish administrative decision under the Administrative Procedure Act (hallintolaki 434/2003): the requirements of good administration, handling of the matter, hearing a party, disqualification, the duty to give r… |
| [`public-access-and-information-requests`](administrative-law/skills/public-access-and-information-requests/SKILL.md) | Public access to official documents and responding to information requests under the Act on the Openness of Government Activities (laki viranomaisten toiminnan julkisuudesta 621/1999): the principle of openness, the grounds for confidentia… |

## Dispute resolution

`/plugin install dispute-resolution@agent-skills-for-finnish-law` – [`./dispute-resolution/`](./dispute-resolution/)

Resolving a civil dispute in the general courts (oikeudenkäymiskaari 4/1734): drafting the application for a summons, planning and assessing the evidence, and appealing against a judgment (the court of appeal and leave for continued consideration, the Supreme Court and leave to appeal).

| Skill | Kuvaus |
|---|---|
| [`appeal-against-judgment`](dispute-resolution/skills/appeal-against-judgment/SKILL.md) | Appealing against a judgment of a general court under the Code of Judicial Procedure (oikeudenkäymiskaari 4/1734): an appeal from a judgment of the käräjäoikeus to the hovioikeus and leave for continued consideration, an appeal to the Supr… |
| [`damages`](dispute-resolution/skills/damages/SKILL.md) | Assessing liability in damages under Finnish law (vahingonkorvauslaki 412/1974). Use this skill when the user is assessing whether liability in damages has arisen or is defending against a claim for damages: negligence, causation, the head… |
| [`evidence`](dispute-resolution/skills/evidence/SKILL.md) | Planning and assessing the evidence in a civil case under chapter 17 of the Code of Judicial Procedure (oikeudenkäymiskaari 4/1734): the burden of proof, the means of proof (documents, witnesses, experts, inspection, hearing a party), the… |
| [`statement-of-claim`](dispute-resolution/skills/statement-of-claim/SKILL.md) | Drafting and checking an application for a summons (haastehakemus) in a civil case under the Code of Judicial Procedure (oikeudenkäymiskaari 4/1734): the plaintiff's claims, their grounds, the evidence, the costs of the proceedings, jurisd… |

## Company law

`/plugin install company-law@agent-skills-for-finnish-law` – [`./company-law/`](./company-law/)

Finnish company law (osakeyhtiölaki 624/2006): incorporation and governance, the general meeting and board work, the liability of management, the two-part test for distributing assets, drafting and risk-checking shareholders’ agreements, and corporate transactions with their due diligence lists.

| Skill | Kuvaus |
|---|---|
| [`corporate-governance`](company-law/skills/corporate-governance/SKILL.md) | Corporate governance of a Finnish limited liability company: incorporation, governing bodies and the liability of management under the Limited Liability Companies Act (osakeyhtiölaki 624/2006). Use this skill when the user is forming a lim… |
| [`corporate-transactions`](company-law/skills/corporate-transactions/SKILL.md) | Structuring corporate transactions under Finnish law: share deal, business deal, merger, demerger and legal due diligence under the Limited Liability Companies Act (osakeyhtiölaki 624/2006) and the Competition Act (kilpailulaki 948/2011).… |
| [`shareholders-agreement`](company-law/skills/shareholders-agreement/SKILL.md) | Drafting a shareholders' agreement and reviewing its risks under Finnish law. Use this skill when the user is drafting, negotiating, reviewing or interpreting a shareholders' agreement (osakassopimus) or its clauses: decision-making and bo… |

## Insolvency

`/plugin install insolvency@agent-skills-for-finnish-law` – [`./insolvency/`](./insolvency/)

Finnish insolvency law: assessing a situation of insolvency and choosing the procedure (bankruptcy 120/2004, restructuring of enterprises 47/1993, adjustment of debts 57/1993), bankruptcy proceedings from the creditor’s and the debtor’s point of view, and debt collection, limitation and enforcement.

| Skill | Kuvaus |
|---|---|
| [`bankruptcy-proceedings`](insolvency/skills/bankruptcy-proceedings/SKILL.md) | The course of bankruptcy proceedings under the Finnish Bankruptcy Act (konkurssilaki 120/2004), from the creditor's and the debtor's point of view. Use this skill when the user is preparing or assessing a bankruptcy petition, has learned t… |
| [`debt-collection`](insolvency/skills/debt-collection/SKILL.md) | The life cycle of collecting a claim under Finnish law: voluntary collection and good collection practice (perintälaki 513/1999), managing and interrupting the limitation of a debt (728/2003), judicial collection and enforcement (ulosottok… |
| [`insolvency-assessment`](insolvency/skills/insolvency-assessment/SKILL.md) | Framing a situation of insolvency and choosing the procedure under Finnish insolvency law. Use this skill when a company's or a private individual's ability to pay is failing or a debt cannot be paid and the alternatives have to be weighed… |

## Intellectual property

`/plugin install intellectual-property@agent-skills-for-finnish-law` – [`./intellectual-property/`](./intellectual-property/)

Finnish intellectual property law: protection strategy and likelihood-of-confusion assessment for trade marks and trade names (544/2019 and 128/1979), copyright with the DSM reforms and licensing (404/1961), and the trade-secret protection programme and infringement situations (595/2018). Links to the Market Court, PRH and EUIPO.

| Skill | Kuvaus |
|---|---|
| [`copyright`](intellectual-property/skills/copyright/SKILL.md) | Copyright under Finnish law (tekijänoikeuslaki 404/1961 with the DSM reforms). Use this skill when the user asks about copyright in a work, software, an image, a text, music or other content, about the ownership of rights in an employment… |
| [`trade-secrets`](intellectual-property/skills/trade-secrets/SKILL.md) | Protection of trade secrets under Finnish law (liikesalaisuuslaki 595/2018). Use this skill when the user is protecting a company's confidential information (customer data, pricing, recipes, algorithms, processes), assesses whether the def… |
| [`trademarks-and-trade-names`](intellectual-property/skills/trademarks-and-trade-names/SKILL.md) | Protection of trademarks and trade names under Finnish law (tavaramerkkilaki 544/2019, toiminimilaki 128/1979). Use this skill when the user is planning a name or a logo for a product, a service or a company, is preparing a trade mark regi… |

## Taxation

`/plugin install taxation@agent-skills-for-finnish-law` – [`./taxation/`](./taxation/)

Finnish taxation for professionals: tax procedure and appeals from a request for rectification to KHO (VML 1558/1995), corporate taxation with group contributions and corporate restructurings (EVL 360/1968), and value added tax (AVL 1501/1993). Tax rates and euro amounts always from the source; an advance ruling where the matter is open to interpretation.

| Skill | Kuvaus |
|---|---|
| [`corporate-taxation`](taxation/skills/corporate-taxation/SKILL.md) | Corporate taxation in Finland (the Business Income Tax Act, laki elinkeinotulon verottamisesta 360/1968). Use this skill when the user is assessing whether a company's income is taxable or an expense deductible, is planning a group contrib… |
| [`tax-procedure-and-appeals`](taxation/skills/tax-procedure-and-appeals/SKILL.md) | Tax procedure and appeals against taxation in Finland (the Act on Assessment Procedure, laki verotusmenettelystä 1558/1995). Use this skill when the user has received an assessment decision, a reassessment or punitive tax increase decision… |
| [`value-added-tax`](taxation/skills/value-added-tax/SKILL.md) | Value added tax in Finland (the Value Added Tax Act, arvonlisäverolaki 1501/1993). Use this skill when the user is assessing whether a sale is subject to VAT or which rate applies, the right to deduct input VAT, the reverse charge (constru… |

## Public procurement

`/plugin install public-procurement@agent-skills-for-finnish-law` – [`./public-procurement/`](./public-procurement/)

Public procurement under the Public Procurement Act (1397/2016) from the point of view of both the contracting authority and the tenderer: planning and the choice of procedure with the thresholds, the invitation to tender and a compliant tender, and the award decision, procurement rectification and appeal to the Market Court with its sanctions.

| Skill | Kuvaus |
|---|---|
| [`award-decision-and-remedies`](public-procurement/skills/award-decision-and-remedies/SKILL.md) | The award decision, procurement rectification and appeal to the Market Court in public procurement (hankintalaki 1397/2016). Use this skill when a contracting authority is drafting the award decision with its reasons, applying the standsti… |
| [`procurement-planning`](public-procurement/skills/procurement-planning/SKILL.md) | Planning a public procurement and choosing the procedure under the Public Procurement Act (hankintalaki 1397/2016). Use this skill when a contracting authority is planning a call for tenders: does the Act apply, what is the estimated value… |
| [`tender-documents-and-bids`](public-procurement/skills/tender-documents-and-bids/SKILL.md) | Drafting the invitation to tender and making a tender in a public procurement (hankintalaki 1397/2016). Use this skill when a contracting authority is drafting an invitation to tender, defining suitability requirements or award criteria, o… |

## Criminal procedure

`/plugin install criminal-procedure@agent-skills-for-finnish-law` – [`./criminal-procedure/`](./criminal-procedure/)

Finnish criminal procedure for the work of counsel: pre-trial investigation and coercive measures (805/2011 and 806/2011) with preparation for questioning and the closing statement, the charge and the response with the judgment-proposal procedure (ROL 689/1997), and the injured party’s claims and criminal-injuries compensation. On the terms of the presumption of innocence and the use of counsel.

| Skill | Kuvaus |
|---|---|
| [`charges-and-response`](criminal-procedure/skills/charges-and-response/SKILL.md) | The court stage of a criminal matter in Finland (laki oikeudenkäynnistä rikosasioissa 689/1997): consideration of charges, the application for a summons, the defendant's response and the structure of the defence, evidence, the judgment-pro… |
| [`injured-party-rights`](criminal-procedure/skills/injured-party-rights/SKILL.md) | The position and rights of the injured party (the victim of an offence) in Finnish criminal procedure: civil claims, damages (vahingonkorvauslaki 412/1974) and state compensation (rikosvahinkolaki 1204/2005), the secondary right to prosecu… |
| [`pre-trial-investigation-and-coercive-measures`](criminal-procedure/skills/pre-trial-investigation-and-coercive-measures/SKILL.md) | Pre-trial investigation and coercive measures in Finnish criminal procedure (esitutkintalaki 805/2011, pakkokeinolaki 806/2011) from counsel's point of view. Use this skill when a client has been summoned to questioning or told of a suspic… |

## Environment and planning

`/plugin install environment-and-planning@agent-skills-for-finnish-law` – [`./environment-and-planning/`](./environment-and-planning/)

Finnish environmental and planning law under the reformed legislation: environmental permits and supervision (YSL 527/2014), land use planning and building (the Land Use Act and the Building Act 751/2023 with their new permits), and environmental liabilities and environmental due diligence in transactions. Takes account of the 2026 authority reform (the Finnish Licensing and Supervision Agency).

| Skill | Kuvaus |
|---|---|
| [`environmental-liability`](environment-and-planning/skills/environmental-liability/SKILL.md) | Assessing environmental liabilities in Finland: liability to clean up contaminated soil and groundwater (ympäristönsuojelulaki 527/2014), compensation for environmental damage (737/1994), criminal environmental liability, and environmental… |
| [`environmental-permits-and-supervision`](environment-and-planning/skills/environmental-permits-and-supervision/SKILL.md) | Environmental permits, notifications and supervision under the Finnish Environmental Protection Act (ympäristönsuojelulaki 527/2014). Use this skill when the user is assessing whether an activity needs a permit or whether a permit has to b… |
| [`land-use-planning-and-construction`](environment-and-planning/skills/land-use-planning-and-construction/SKILL.md) | Land use planning and construction in Finland under the Land Use Act (alueidenkäyttölaki 132/1999, formerly maankäyttö- ja rakennuslaki) and the new Building Act (rakentamislaki 751/2023). Use this skill when the user is establishing the p… |

## Real estate and housing

`/plugin install real-estate-and-housing@agent-skills-for-finnish-law` – [`./real-estate-and-housing/`](./real-estate-and-housing/)

Finnish real estate and housing law: the prescribed form of a conveyance of real property, the registrations and liability for defects (maakaari 540/1995), the sale of a dwelling with the RS system and notices of defect (843/1994), the maintenance liability and governance of a housing company (1599/2009), and leases of residential and business premises with their differences in mandatory force.

| Skill | Kuvaus |
|---|---|
| [`housing-company`](real-estate-and-housing/skills/housing-company/SKILL.md) | Governance of a Finnish housing company and the position of a shareholder under the Limited Liability Housing Companies Act (asunto-osakeyhtiölaki 1599/2009). Use this skill when the user is working out the division of maintenance liabilit… |
| [`lease-agreements`](real-estate-and-housing/skills/lease-agreements/SKILL.md) | Residential and commercial leases in Finland (the Act on Residential Leases, laki asuinhuoneiston vuokrauksesta 481/1995, and the Act on Commercial Leases, laki liikehuoneiston vuokrauksesta 482/1995). Use this skill when the user is draft… |
| [`real-property-conveyance`](real-estate-and-housing/skills/real-property-conveyance/SKILL.md) | Sale of real property in Finland under the Code of Real Estate (maakaari 540/1995). Use this skill when the user is preparing or reviewing a sale or a pre-contract for real property, a parcel or an undivided share, drafting a deed of sale… |
| [`residential-property-sale`](real-estate-and-housing/skills/residential-property-sale/SKILL.md) | Sale of housing-company shares in Finland under the Housing Transactions Act (asuntokauppalaki 843/1994). Use this skill when the user is preparing or reviewing the purchase or sale of a dwelling, assessing the purchase of a new-build (an… |

## Competition law

`/plugin install competition-law@agent-skills-for-finnish-law` – [`./competition-law/`](./competition-law/)

Finnish and EU competition law: prohibited restrictions of competition and abuse of a dominant position with a self-assessment framework (kilpailulaki 948/2011, Articles 101 and 102 TFEU), merger control with the prohibition on implementation, and compliance programmes, the rules for exchanging information and readiness for a dawn raid.

| Skill | Kuvaus |
|---|---|
| [`competition-compliance`](competition-law/skills/competition-compliance/SKILL.md) | Competition-law compliance and preparing for an authority inspection in Finland. Use this skill when an organisation is building or updating a competition compliance programme, drawing up ground rules for competitor contacts, trade-associa… |
| [`merger-control`](competition-law/skills/merger-control/SKILL.md) | Merger control in Finland and the EU (Chapter 4 of the Competition Act kilpailulaki 948/2011; the EU Merger Regulation). Use this skill when the user is assessing whether a concentration must be notified to KKV or to the Commission, prepar… |
| [`restrictive-practices`](competition-law/skills/restrictive-practices/SKILL.md) | Assessment of prohibited restrictive practices and abuse of a dominant market position under Finnish and EU competition law (kilpailulaki 948/2011; SEUT Article 101 and Article 102). Use this skill when the user is assessing whether an agr… |

## Banking and finance

`/plugin install banking-and-finance@agent-skills-for-finnish-law` – [`./banking-and-finance/`](./banking-and-finance/)

Finnish banking and finance law: finance agreements with their covenants and collateral packages with their perfection (velkakirjalaki 622/1947, takauslaki 361/1999), anti-money-laundering compliance (444/2017), and the disclosure obligation and insider administration of a listed company (AML 746/2012, MAR).

| Skill | Kuvaus |
|---|---|
| [`anti-money-laundering`](banking-and-finance/skills/anti-money-laundering/SKILL.md) | Preventing money laundering and terrorist financing in Finland (Act 444/2017). Use this skill when an organisation is assessing whether it is an obliged entity, is building or updating an AML compliance programme (risk assessment, customer… |
| [`financing-and-collateral`](banking-and-finance/skills/financing-and-collateral/SKILL.md) | Finance agreements and collateral under Finnish law (velkakirjalaki 622/1947; takauslaki 361/1999; korkolaki 633/1982). Use this skill when the user is drafting or reviewing a promissory note, a loan agreement or a finance agreement with c… |
| [`securities-markets`](banking-and-finance/skills/securities-markets/SKILL.md) | Securities markets regulation in Finland (the Securities Markets Act, arvopaperimarkkinalaki 746/2012; the EU Market Abuse Regulation MAR). Use this skill when a listed company or its adviser is dealing with the disclosure obligation (a st… |

## Immigration law

`/plugin install immigration-law@agent-skills-for-finnish-law` – [`./immigration-law/`](./immigration-law/)

Finnish immigration law from the point of view of the employer and of counsel: work-based residence permits with the labour market test (ulkomaalaislaki 301/2004), the employer’s verification duties and the sanctions, posted workers (447/2016), and EU residence, family reunification, a permanent permit and citizenship (359/2003).

| Skill | Kuvaus |
|---|---|
| [`employer-obligations`](immigration-law/skills/employer-obligations/SKILL.md) | An employer's obligations when using foreign labour in Finland (Aliens Act, ulkomaalaislaki 301/2004; laki työntekijöiden lähettämisestä 447/2016). Use this skill when an employer is confirming an employee's right to work, building a compl… |
| [`eu-and-family-based-residence`](immigration-law/skills/eu-and-family-based-residence/SKILL.md) | An EU citizen's right of residence, family-based residence, a permanent residence permit and Finnish citizenship (Aliens Act, ulkomaalaislaki 301/2004; Nationality Act, kansalaisuuslaki 359/2003). Use this skill when dealing with the regis… |
| [`work-based-residence-permits`](immigration-law/skills/work-based-residence-permits/SKILL.md) | Work-based residence permits in Finland (Aliens Act, ulkomaalaislaki 301/2004). Use this skill when an employer recruits a foreign employee from outside the EU/EEA area or a permit is being applied for on an employee's behalf: choosing the… |

## Family and inheritance law

`/plugin install family-and-inheritance@agent-skills-for-finnish-law` – [`./family-and-inheritance/`](./family-and-inheritance/)

Finnish family and inheritance law for everyday situations: the property relations of marriage and the division of matrimonial property (avioliittolaki 234/1929), the position of a cohabiting partner (26/2011), the custody of a child, contact and maintenance (361/1983 and 704/1975), succession, wills and the compulsory share (perintökaari 40/1965), and guardianship and continuing powers of attorney (442/1999 and 648/2007). The best interests and the safety of the child come first; taxes from the source.

| Skill | Kuvaus |
|---|---|
| [`child-status-and-maintenance`](family-and-inheritance/skills/child-status-and-maintenance/SKILL.md) | Custody, residence, contact and maintenance of a child in Finland (laki lapsen huollosta ja tapaamisoikeudesta 361/1983 and laki lapsen elatuksesta 704/1975) together with the establishment of parenthood (vanhemmuuslaki 775/2022). Use this… |
| [`guardianship-and-powers-of-attorney`](family-and-inheritance/skills/guardianship-and-powers-of-attorney/SKILL.md) | Guardianship and planning ahead for it in Finland (laki holhoustoimesta 442/1999 and laki edunvalvontavaltuutuksesta 648/2007). Use this skill when assessing whether an adult or a minor needs a guardian, drafting or reviewing a continuing… |
| [`inheritance-and-wills`](family-and-inheritance/skills/inheritance-and-wills/SKILL.md) | Succession, wills and the administration of a deceased person's estate in Finland (perintökaari 40/1965). Use this skill when working out the order of succession, drafting or interpreting a will, assessing the compulsory share of a direct… |
| [`marriage-and-division-of-property`](family-and-inheritance/skills/marriage-and-division-of-property/SKILL.md) | The property relations of marriage and their dissolution in Finland (avioliittolaki 234/1929). Use this skill when drafting or reviewing a prenuptial agreement, preparing for a division of matrimonial property or a separation of assets on… |

## Consumer law

`/plugin install consumer-law@agent-skills-for-finnish-law` – [`./consumer-law/`](./consumer-law/)

Finnish consumer law in sales between a trader and a consumer (kuluttajansuojalaki 38/1978): liability for defects in goods and services and the remedies, the right of withdrawal and the information duties in distance and off-premises selling, unfair marketing, and the resolution of consumer disputes (the Consumer Disputes Board 8/2007 and KKV 661/2012) and good collection practice for a consumer debt (513/1999). Mandatory in the consumer’s favour.

| Skill | Kuvaus |
|---|---|
| [`consumer-disputes-and-collection`](consumer-law/skills/consumer-disputes-and-collection/SKILL.md) | The channels for resolving a consumer dispute and good collection practice for a consumer debt (laki kuluttajariitalautakunnasta 8/2007, laki Kilpailu- ja kuluttajavirastosta 661/2012 and laki saatavien perinnästä 513/1999). Use this skill… |
| [`consumer-sales-liability`](consumer-law/skills/consumer-sales-liability/SKILL.md) | The consumer's rights where goods or a service are defective (kuluttajansuojalaki 38/1978). Use this skill when a consumer gives notice of a defective product or service, when it is being assessed whether there is a defect, when a remedy i… |
| [`distance-selling-and-withdrawal`](consumer-law/skills/distance-selling-and-withdrawal/SKILL.md) | Information duties in distance and off-premises selling and the consumer's right of withdrawal (kuluttajansuojalaki 38/1978), together with unfair and misleading marketing. Use this skill when assessing the pre-contractual information of a… |

## Criminal law (substantive)

`/plugin install criminal-law@agent-skills-for-finnish-law` – [`./criminal-law/`](./criminal-law/)

Finnish substantive criminal law (rikoslaki 39/1889): the general conditions of criminal liability (the principle of legality, intent and negligence, grounds excluding liability, complicity, attempt), the elements and forms of the principal offences, and the determination of the sentence, forfeiture and limitation. Complements the criminal-procedure domain. It serves the defence, the injured party and compliance; it does not assist in committing or concealing an offence.

| Skill | Kuvaus |
|---|---|
| [`criminal-liability-basics`](criminal-law/skills/criminal-liability-basics/SKILL.md) | The general conditions of criminal liability in Finnish criminal law (Criminal Code, rikoslaki 39/1889, general part). Use this skill when assessing whether the statutory definition of an offence (tunnusmerkistö) is satisfied, whether an a… |
| [`principal-offences`](criminal-law/skills/principal-offences/SKILL.md) | The statutory definitions of the principal offence types in Finnish criminal law and the lines between them (Criminal Code, rikoslaki 39/1889, special part). Use this skill when working out which offence label an act might fall under, dist… |
| [`sentencing`](criminal-law/skills/sentencing/SKILL.md) | Imposing a penalty and other sanctions in Finnish criminal law (Criminal Code, rikoslaki 39/1889). Use this skill when assessing the type of penalty and the sentencing range, the measurement of the sentence with its aggravating and mitigat… |

## Bilingual legal language (FI/SV)

`/plugin install bilingual-legal-language@agent-skills-for-finnish-law` – [`./bilingual-legal-language/`](./bilingual-legal-language/)

Support for Finnish–Swedish bilingualism in legal work: translating legal language and the established terminology FI↔SV from official sources (the parallel texts in Finlex, the Government Term Bank), and linguistic rights and the language obligations of an authority (kielilaki 423/2003, perustuslaki 731/1999 section 17, the Act on the Knowledge of Languages Required of Personnel in Public Bodies 424/2003 and the Sámi Language Act 1086/2003). A term is never invented; an official translation comes from an authorised translator.

| Skill | Kuvaus |
|---|---|
| [`language-rights-and-obligations`](bilingual-legal-language/skills/language-rights-and-obligations/SKILL.md) | Language rights and an authority's language obligations in Finland (kielilaki 423/2003 and perustuslaki 731/1999 17 §). Use this skill when assessing in which language a person may deal with an authority, what obligations to translate, to… |
| [`legal-translation`](bilingual-legal-language/skills/legal-translation/SKILL.md) | Translating legal text between Finnish and Swedish (FI↔SV) using established legal terminology and official sources. Use this skill when translating or checking a contract, decision, written submission or statutory reference from Finnish i… |

---

*Päivitä tämä tiedosto ajamalla `node scripts/generate-skills-md.mjs`.*
