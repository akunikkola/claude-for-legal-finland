# Glossary and translation contract

**Version 1.0.** This file is binding on every translation unit in this repository. It exists
because the English translation is produced by many parallel workers, and without a single written
contract they diverge — on terminology, on certainty marking, and most dangerously on what language
the *work product* comes out in.

Read this before translating anything.

---

## 1. Output language — the contract

> This section is the most important thing in this file. Get it wrong and the repository produces
> documents that are inadmissible.

### Why this matters

Before translation, no skill in this repository stated an output language. That was safe **by
accident**: the instructions were Finnish, so the model produced Finnish. Translating the
instructions to English removes that signal silently — an agent reading an English
`employment-contract/SKILL.md` will produce an English employment contract, and nothing in the
output will indicate that anything went wrong.

So the language must now be **stated explicitly**, not left implicit.

### The rules

| Rule | Detail |
|---|---|
| **English is the default work product** | Every document-producing skill states this explicitly. Do not rely on the reader inferring it. |
| **Finnish on request** | Every document-producing skill states that the user may ask for Finnish, and that the skill complies. |
| **Court and authority filings must be Finnish or Swedish** | Not a preference — an **admissibility** requirement (kielilaki 423/2003; oikeudenkäymiskaari for court documents). An English filing is rejected. The skill must say so and offer to produce the Finnish version. |
| **Commercial documents stay English by default** | Contracts, privacy notices, shareholders' agreements, policies. English is legally fine for these. |
| **Legally operative terms keep the Finnish term on first use** | Even in English output: `notice period (irtisanomisaika)`, `right to a compulsory share (lakiosa)`. This keeps the document traceable to Finnish law. |

Each skill's category is recorded in [`output-language-matrix.md`](output-language-matrix.md).
`scripts/check-output-language.mjs` enforces it, so a missing declaration fails CI rather than
shipping.

### Required wording

**Document-producing skills** — include a block equivalent to:

> **Output language.** Drafts are produced in **English by default**. If the user asks for Finnish,
> produce Finnish. Keep the Finnish term alongside the English one for legally operative concepts
> on first use, e.g. `notice period (irtisanomisaika)`.

**Court and authority filing skills** — include a block equivalent to:

> **Output language — filing requirement.** A draft can be produced in English for review, but the
> version actually filed with the court or authority **must be in Finnish or Swedish**
> (kielilaki 423/2003; oikeudenkäymiskaari for court documents). An English filing is not
> admissible. Always offer to produce the Finnish version, and say plainly that the English text is
> a working translation only.

**Language-exempt skills** (`legal-core/finnish-language`, `legal-core/plain-language`,
`bilingual-legal-language/*`) — the *instructions* are English, but the Finnish grammar rules,
examples, word lists and Swedish equivalents **stay in their original language**. Translating a
Finnish spelling rule into English destroys it.

---

## 2. Never translate these

Translating any of the following breaks traceability to the source and can make a citation
unverifiable.

| Category | Examples | Note |
|---|---|---|
| Statute numbers | `55/2001`, `410/2015`, `2016/679` | Never reformatted either |
| Statute short names on first use | `työsopimuslaki`, `kuntalaki`, `hallintolaki` | Give English + Finnish: `Employment Contracts Act (työsopimuslaki 55/2001)` |
| Court abbreviations | `KKO`, `KHO`, `MAO`, `KVL` | Supreme Court, Supreme Administrative Court, Market Court, Central Tax Board |
| Case identifiers | `KKO:2019:42`, `KHO:2021:7` | Exact form preserved |
| Preparatory works | `HE 268/2014 vp`, `s. 145` | `HE` = government bill; `vp` = parliamentary session |
| Sources and services | `Finlex`, `oik.ai`, `laki.ai`, `lausuntopalvelu.fi` | Proper names |
| Authorities | `Migri`, `PRH`, `KKV`, `Verohallinto`, `Traficom`, `AVI`, `ELY` | May gloss on first use |
| Collective agreements | `TES`, `yleissitova TES` | `TES` = collective agreement |
| Finnish identifiers | `HETU`, `Y-tunnus` | Personal identity code; business ID |

**Section symbol.** `§` stays. Finnish inflects it with a colon (`7 §:ssä`); in English write
`section 7` or `7 §` — never `§7`.

### Never invent one either

Dropping a citation is the obvious failure. Adding one is the dangerous failure: a fabricated
number in the same `NNN/YYYY` shape reads exactly like a real statute, and nobody reviewing English
prose will spot it. `scripts/check-citations.mjs` therefore checks both directions against
[`citation-snapshot.json`](citation-snapshot.json), a per-file record of every citation in the
repository taken before translation.

| What the diff shows | Verdict |
|---|---|
| A citation was dropped, or occurs less often in a file than before | **Error** |
| A number appears that this repository has never cited anywhere | **Error** — the invented-citation case |
| A citation moved to another file, or was reused from elsewhere in the repo | Warning |
| A statute listed in [`tracking/statutes.json`](../tracking/statutes.json) is cited for the first time | Warning |
| A citation the file already had now occurs more often | Not reported |

**Carry citations across; never add one.** If an English sentence seems to need a reference the
Finnish did not give, write `[from memory — verify in Finlex]` and leave the number out. A visible
gap is recoverable. A plausible wrong number is not.

**No made-up example numbers in prose, either.** The gate reads every markdown file in the
repository and cannot tell an illustration from a claim, so an invented statute number written to
demonstrate a point fails CI exactly as an invented one written by mistake. Describe the shape
(`NNN/YYYY`) instead. There is deliberately no way to mark a citation as exempt — an escape hatch
would be used to silence real findings.

---

## 3. Statute name conventions

**First mention in any file:** English name, then the Finnish name and number in parentheses.

> Employment Contracts Act (työsopimuslaki 55/2001)

**Later mentions in the same file:** the English name alone is fine.

**Finnish statute names are lower-case** in Finnish (`työsopimuslaki`, not `Työsopimuslaki`).
Keep that casing inside the parentheses even when the English name is title-case.

Common ones:

| Finnish | English |
|---|---|
| perustuslaki 731/1999 | Constitution of Finland |
| hallintolaki 434/2003 | Administrative Procedure Act |
| kuntalaki 410/2015 | Local Government Act |
| työsopimuslaki 55/2001 | Employment Contracts Act |
| yhteistoimintalaki 1333/2021 | Act on Co-operation within Undertakings |
| osakeyhtiölaki 624/2006 | Limited Liability Companies Act |
| oikeudenkäymiskaari 4/1734 | Code of Judicial Procedure |
| rikoslaki 39/1889 | Criminal Code |
| perintökaari 40/1965 | Code of Inheritance |
| avioliittolaki 234/1929 | Marriage Act |
| maakaari 540/1995 | Code of Real Estate |
| kuluttajansuojalaki 38/1978 | Consumer Protection Act |
| hankintalaki 1397/2016 | Act on Public Procurement and Concession Contracts |
| kilpailulaki 948/2011 | Competition Act |
| tietosuojalaki 1050/2018 | Data Protection Act |
| ulkomaalaislaki 301/2004 | Aliens Act |
| kielilaki 423/2003 | Language Act |
| julkisuuslaki 621/1999 | Act on the Openness of Government Activities |
| laki oikeudenkäynnistä hallintoasioissa 808/2019 | Act on Judicial Procedure in Administrative Matters |

If a statute is not listed, use the official English title from Finlex where one exists. **Do not
invent an English title** — if none exists, keep the Finnish name and gloss it in prose.

---

## 4. Mechanisms that must survive translation

Translate the words; keep the mechanism identical.

### Three-tier certainty marking

| Finnish | English |
|---|---|
| Varmistettu | Verified |
| Tarkistettava | Needs checking |
| Älä käytä | Do not use |

### Risk colour coding

| Finnish | English |
|---|---|
| VIHREÄ | GREEN |
| KELTAINEN | YELLOW |
| PUNAINEN | RED |

Emoji markers (🟢 🟡 🔴) stay as they are.

### Inline flags

These are load-bearing. The reader scans for them.

| Finnish | English |
|---|---|
| `[tarkista]` | `[check]` |
| `[muistinvarainen — tarkista Finlexistä]` | `[from memory — verify in Finlex]` |
| `[mallin laskelma — tarkista]` | `[model calculation — check]` |
| `[varmista — juristin arvioitava]` | `[confirm — requires a lawyer's assessment]` |

**Placement rule, unchanged:** the flag goes next to the line it applies to, not at the end of the
paragraph as a general caveat.

### Disclaimers

`Vastuuvapaus:` → `Disclaimer:`. **Never delete a disclaimer.** Standard form:

> **Disclaimer:** a draft or assessment for review — not legal advice.

### The practice-profile heading — exact spelling required

`legal-core/skills/practice-profile` writes organisation-specific conventions into every domain's
`AGENTS.md` **under one exact heading**. If domains spell it differently, the skill writes under a
heading that does not exist, or fails to find one — silently, in only some domains.

The canonical English heading is, verbatim:

```markdown
## Practice profile (optional)
```

Sentence case. Not "Practice Profile", not "House practice", not "Practice profile" without the
qualifier. `scripts/check-invariants.mjs` enforces that every domain `AGENTS.md` uses this exact
form and that `legal-core/skills/practice-profile/SKILL.md` refers to the same string.

---

## 5. Recurring vocabulary

| Finnish | English | Note |
|---|---|---|
| skilli / plugari | skill / domain | "plugin" only when naming a harness concept |
| toimeksianto | engagement | not "assignment" |
| määräaika | deadline / time limit | `prekluusiivinen` = preclusive |
| oikaisuvaatimus | request for rectification | administrative pre-appeal |
| muutoksenhaku | appeal | |
| valitus | appeal | to a court |
| haastehakemus | application for a summons | initiates civil proceedings |
| kirjelmä | written submission | |
| ennakkopäätös | precedent | KKO/KHO |
| esityö | preparatory works | `HE` etc. |
| lainvoimainen | final and binding | |
| pakottava | mandatory | cannot be derogated from |
| tahdonvaltainen | non-mandatory | parties may agree otherwise |
| kohtuullistaminen | adjustment | of an unfair term |
| vanhentuminen | limitation | not "ageing" |
| salassapito | confidentiality | |
| esteellisyys | disqualification | conflict of interest |
| asianosainen | party | |
| asianomistaja | injured party | criminal procedure |
| hakija / vastaaja | applicant / respondent | |
| kantaja / vastaaja | plaintiff / defendant | civil |
| lausunto | statement | consultation statement on a bill |
| lausuntokierros | consultation round | |
| seloste | notice / record | `tietosuojaseloste` = privacy notice |
| ositus | division of matrimonial property | |
| lakiosa | compulsory share | |
| edunvalvonta | guardianship | |
| yleissitova | generally binding | of a TES |
| irtisanominen / purkaminen | termination with notice / summary termination | distinct concepts — do not merge |

---

## 6. The digit-comma trap

`scripts/validate.mjs` rejects any `description` matching `/\d\s*,\s*\d/`. This is not cosmetic —
the Cowork marketplace validator crashes on it.

English translation reintroduces it constantly:

| Wrong | Right |
|---|---|
| `1,000 euros` | `1 000 euros` |
| `sections 2, 3 and 4` | `sections 2 and 3 and 4`, or `sections 2-4` |
| `Article 6, 1(a)` | `Article 6 paragraph 1(a)` |

**Sweep every `description` for this before committing a domain.**

---

## 7. Style

- **British English**, matching the existing English landing page (`organisation`, `recognise`).
- **Second person, imperative** for instructions: "Check the statute", not "The statute should be
  checked".
- Keep the source's heading structure and list shape. This is reference material that people scan;
  reflowing it into prose makes it worse.
- Keep sentences short. The Finnish originals are deliberately terse.
- Do not add content. If something is wrong or missing in the Finnish, flag it — do not silently
  fix it in the English.
