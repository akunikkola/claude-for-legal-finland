# Output-language matrix

Every skill and template in this repository, classified by what it produces and therefore what
language that output must be in. This file is the **declared expectation** that
`scripts/check-output-language.mjs` checks against, and it is what a human audits instead of
rereading 78 skills.

Read [`glossary.md`](glossary.md) §1 for the contract itself and the required wording.

## Why this file exists

Before translation, no skill stated an output language. That was safe **by accident** — the
instructions were Finnish, so the model produced Finnish. Translating the instructions to English
removes that signal with no error surface: an agent reading an English
`employment-contract/SKILL.md` will produce an English employment contract and nothing will look
wrong.

## Categories

| Category | Output language rule |
|---|---|
| `filing` | Draft may be English for review, but **the filed version must be Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court documents). An English filing is not admissible. The skill must say so and offer the Finnish version. |
| `document` | **English by default**, Finnish on request. Legally operative terms keep the Finnish term on first use. |
| `analysis` | **English by default.** No filed or signed artifact, so no admissibility risk. |
| `language-exempt` | Instructions become English; the Finnish or Swedish rules, examples and word lists **stay in their original language**. |

When torn between `document` and `analysis`, the entry is `document`. Over-declaring the output
language is harmless; under-declaring is not.

---

## legal-core

| Skill | Category | Basis |
|---|---|---|
| `case-summarization` | analysis | Summarises a decision; no artifact |
| `document-review` | analysis | Findings list against an existing document |
| `engagement-intake` | analysis | Maps deadlines and scope |
| `finnish-language` | language-exempt | Subject is Finnish spelling and grammar |
| `legal-research` | analysis | Research answer with sources |
| `legal-writing` | language-exempt | **Override.** Subject is Finnish legal language and citation form; the Finnish rules and examples must survive translation |
| `plain-language` | language-exempt | **Override.** Rewrites Finnish legal text into plain Finnish; the register rules are Finnish-specific |
| `practice-profile` | analysis | Configuration, not a deliverable |
| `tabular-review` | document | Produces a structured comparison table |

## legislative-drafting

| Skill | Category | Basis |
|---|---|---|
| `government-bill-guidelines` | filing | **Override.** A hallituksen esitys is submitted to Eduskunta; statutory language is Finnish and Swedish. An English bill is meaningless |
| `legislative-drafting-manual` | filing | **Override.** Produces säädösteksti — a Finnish statute must be in Finnish or Swedish |
| `legislative-process-guide` | analysis | Describes procedure and stages |
| `legal-language-guide` | language-exempt | Subject is Finnish legal orthography, symbols and inflection |

## legislative-consultation

| Skill | Category | Basis |
|---|---|---|
| `consultation-statement-assistant` | filing | **Override.** The lausunto is submitted to a ministry via lausuntopalvelu.fi |

## contracts

| Skill | Category | Basis |
|---|---|---|
| `contract-drafting` | document | Contract signed by the parties; English is legally fine |
| `contract-review` | analysis | Clause-level risk assessment |

## data-protection

| Skill | Category | Basis |
|---|---|---|
| `data-protection-assessment` | analysis | Assesses lawful basis and DPIA need |
| `data-subject-requests` | document | Response letter to the data subject |
| `privacy-notice` | document | Tietosuojaseloste is published, not filed |

## ai-regulation

| Skill | Category | Basis |
|---|---|---|
| `ai-classification` | analysis | Risk-tier assessment |
| `ai-compliance` | analysis | Deadlines, penalties, FRIA need |
| `ai-obligations` | document | Obligation register and Annex IV checklist |

## employment-law

| Skill | Category | Basis |
|---|---|---|
| `change-negotiations` | document | Procedural checklist and timeline for the employer |
| `employment-contract` | document | Employment contract; English is common and lawful |
| `termination-of-employment` | analysis | Grounds and procedure assessment |

## administrative-law

| Skill | Category | Basis |
|---|---|---|
| `administrative-appeal` | filing | Oikaisuvaatimus and valitus to an authority or court |
| `administrative-decision` | filing | Hallintopäätös issued by a viranomainen |
| `public-access-and-information-requests` | document | Response to a request; the authority answers in the language of the request |

## dispute-resolution

| Skill | Category | Basis |
|---|---|---|
| `appeal-against-judgment` | filing | Valitus to hovioikeus or KKO |
| `damages` | analysis | Liability and quantum assessment |
| `evidence` | analysis | Evidence strategy |
| `statement-of-claim` | filing | Haastehakemus to käräjäoikeus |

## company-law

| Skill | Category | Basis |
|---|---|---|
| `corporate-governance` | filing | **Override.** Produces yhtiöjärjestys and kaupparekisteri filings to PRH, which are registered in Finnish |
| `corporate-transactions` | document | Due diligence and transaction documents |
| `shareholders-agreement` | document | Private agreement between shareholders |

## insolvency

| Skill | Category | Basis |
|---|---|---|
| `bankruptcy-proceedings` | filing | **Override.** Konkurssihakemus and valvontakirjelmä go to käräjäoikeus |
| `debt-collection` | document | Payment demand to the debtor |
| `insolvency-assessment` | analysis | Procedure-choice assessment |

## intellectual-property

| Skill | Category | Basis |
|---|---|---|
| `copyright` | analysis | Subsistence, ownership and infringement assessment |
| `trade-secrets` | document | NDA drafts and protection programme |
| `trademarks-and-trade-names` | filing | **Override.** Produces PRH and EUIPO application material; a Finnish national application is filed in Finnish |

## taxation

| Skill | Category | Basis |
|---|---|---|
| `corporate-taxation` | analysis | Tax treatment and structuring |
| `tax-procedure-and-appeals` | filing | Oikaisuvaatimus and valitus to Verohallinto and the courts |
| `value-added-tax` | analysis | VAT treatment |

## public-procurement

| Skill | Category | Basis |
|---|---|---|
| `award-decision-and-remedies` | filing | Hankintapäätös and valitus to markkinaoikeus |
| `procurement-planning` | filing | **Override.** Hankintailmoitus is published by the authority in HILMA and TED |
| `tender-documents-and-bids` | filing | **Override.** Tarjouspyyntö is an official contracting-authority document and the tarjous is submitted to it; the procedure language binds both |

## criminal-procedure

| Skill | Category | Basis |
|---|---|---|
| `charges-and-response` | filing | Vastaus syytteeseen to the court |
| `injured-party-rights` | filing | **Override.** Asianomistajan vaatimukset are submitted to the court |
| `pre-trial-investigation-and-coercive-measures` | filing | **Override.** Loppulausunto and tutkintapyyntö go to the esitutkintaviranomainen |

## criminal-law

| Skill | Category | Basis |
|---|---|---|
| `criminal-liability-basics` | analysis | Doctrinal assessment |
| `principal-offences` | analysis | Offence-element analysis |
| `sentencing` | analysis | Sentencing-range analysis |

## environment-and-planning

| Skill | Category | Basis |
|---|---|---|
| `environmental-liability` | analysis | Liability-chain assessment |
| `environmental-permits-and-supervision` | filing | Lupahakemus to the permit authority |
| `land-use-planning-and-construction` | filing | Muistutus and valitus to the municipality and hallinto-oikeus |

## real-estate-and-housing

| Skill | Category | Basis |
|---|---|---|
| `housing-company` | analysis | Maintenance-liability and governance assessment |
| `lease-agreements` | document | Lease between the parties |
| `real-property-conveyance` | filing | **Override.** Kauppakirja is määrämuotoinen, confirmed by a kaupanvahvistaja and used for lainhuuto at Maanmittauslaitos |
| `residential-property-sale` | document | Sale documents and reklamaatio to the counterparty |

## competition-law

| Skill | Category | Basis |
|---|---|---|
| `competition-compliance` | document | Compliance programme and training material |
| `merger-control` | filing | **Override.** Yrityskauppailmoitus is filed with KKV |
| `restrictive-practices` | analysis | Self-assessment of a restriction |

## banking-and-finance

| Skill | Category | Basis |
|---|---|---|
| `anti-money-laundering` | document | Compliance programme and templates |
| `financing-and-collateral` | analysis | Finance-document and collateral analysis |
| `securities-markets` | analysis | Disclosure-obligation analysis |

## immigration-law

| Skill | Category | Basis |
|---|---|---|
| `employer-obligations` | analysis | Employer compliance process |
| `eu-and-family-based-residence` | filing | Application to Migri |
| `work-based-residence-permits` | filing | Application to Migri |

## family-and-inheritance

| Skill | Category | Basis |
|---|---|---|
| `child-status-and-maintenance` | filing | **Override.** Custody and maintenance agreements are confirmed by the sosiaalilautakunta to be enforceable |
| `guardianship-and-powers-of-attorney` | filing | **Override.** Edunvalvontavaltuutus is confirmed by the Digital and Population Data Services Agency |
| `inheritance-and-wills` | filing | **Override.** Perukirja is filed with Verohallinto |
| `marriage-and-division-of-property` | filing | **Override.** Avioehtosopimus is registered with the Digital and Population Data Services Agency to take effect |

## consumer-law

| Skill | Category | Basis |
|---|---|---|
| `consumer-disputes-and-collection` | filing | **Override.** Produces a valitus to kuluttajariitalautakunta |
| `consumer-sales-liability` | document | Reklamaatio to the trader, not to an authority |
| `distance-selling-and-withdrawal` | document | Withdrawal notice to the trader |

## bilingual-legal-language

| Skill | Category | Basis |
|---|---|---|
| `language-rights-and-obligations` | language-exempt | Subject is Finnish and Swedish language rights |
| `legal-translation` | language-exempt | Subject is FI↔SV legal translation |

---

## Templates

| Template | Category | Basis |
|---|---|---|
| `administrative-law/templates/request-for-rectification.md` | filing | Oikaisuvaatimus to an authority |
| `consumer-law/templates/complaint-notice.md` | document | Reklamaatio to the trader |
| `consumer-law/templates/withdrawal-notice.md` | document | Withdrawal notice to the trader |
| `dispute-resolution/templates/statement-of-claim.md` | filing | Haastehakemus to käräjäoikeus |
| `family-and-inheritance/templates/will.md` | document | A will has no language requirement, but it is executed and interpreted in Finland — keep the Finnish original authoritative |

---

## Totals

| Category | Skills | Templates |
|---|---|---|
| `filing` | 26 | 2 |
| `document` | 20 | 3 |
| `analysis` | 27 | 0 |
| `language-exempt` | 5 | 0 |
| **Total** | **78** | **5** |

## Overrides

13 entries are marked **Override** above. Each was classified more conservatively than a
first reading of the skill suggests, because the deliverable is filed with, registered by, or
confirmed by a Finnish authority even though the skill text does not lead with that. They are
called out individually so a reviewer can challenge any one of them without rereading the skill.

The recurring pattern behind them: a document that is *drafted* privately but only becomes
*legally effective* through registration or confirmation by an authority — avioehtosopimus,
edunvalvontavaltuutus, yhtiöjärjestys, kauppakirja. Those must be Finnish or Swedish to reach that
step, so treating them as ordinary commercial documents would be wrong.
