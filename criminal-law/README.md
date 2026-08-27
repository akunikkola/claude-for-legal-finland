# Criminal law (substantive)

Finnish substantive criminal law (Criminal Code, rikoslaki 39/1889): when an act is an offence, who
is liable for it and what can follow from it. Complements the `criminal-procedure` domain, which
covers procedure (pre-trial investigation, coercive measures, charges, the injured party's position).

> **Analyses are drafts for review – not legal advice and not a final finding on
> guilt or sentence.** This domain serves the understanding of criminal law, the defence,
> the position of the injured party and compliance.
> **It does not assist in planning, committing or concealing an offence** (evidence,
> influencing a witness). The legality principle and the presumption of innocence are the
> starting points; sentencing ranges and limitation periods are always taken from the source. In a serious
> criminal suspicion, refer the person to a qualified counsel. See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | What it does |
|---|---|
| **criminal-liability-basics** | The general conditions of criminal liability (rikoslaki 39/1889, general part): the legality principle, breaking down the statutory definition, intent and negligence, criminal capacity, grounds excluding liability (self-defence, necessity), and complicity and attempt. Includes the criminal-law fundamentals reference. |
| **principal-offences** | Identifying the offence label and breaking down the statutory definition by group (property, violent, economic, sexual, narcotics and offences against the authorities), assessing the degree of the offence (petty/basic/aggravated) and drawing the line against neighbouring offences. The reformed sexual offences chapter (2023) is taken into account. |
| **sentencing** | The type of penalty and the sentencing range, measurement of the sentence with aggravating and mitigating grounds, conditional and unconditional imprisonment, community sanctions, day fines, a joint sentence, confiscation, and the limitation of the right to bring charges and of the sentence. |

## Statutes verified as the basis

Verified from the source (Finlex): **the Criminal Code (rikoslaki 39/1889)** — document identifier
of the consolidated version 18890039001 — and **laki sakon ja rikesakon määräämisestä
(754/2010)**, on the imposition of fines and summary penal fees. Statutory definitions, sentencing
ranges and limitation periods are checked in use with the `legal-core:legal-research` skill; the
Criminal Code is amended constantly.

## Related

- **`criminal-procedure` domain** – procedure: pre-trial investigation and coercive measures, charges and
  response, the injured party's position. This domain is its substantive counterpart.
- **`dispute-resolution` domain** – damages arising from an offence.
- **`taxation`, `company-law` and `banking-and-finance` domains** – the civil and regulatory
  connections of economic offences.
- **`legal-core` domain** – `legal-research` (KKO case law) and `engagement-intake`.

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install criminal-law@agent-skills-for-finnish-law
```

oik.ai connector: see [QUICKSTART.md](../QUICKSTART.md) at the root.
