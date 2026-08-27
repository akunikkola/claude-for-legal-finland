# Legislative drafting

An assistant for statutory preparation in Finnish legislative work: writing statutory text
and a government bill (hallituksen esitys), structure, legal language and the preparation
process. The skills are based on the official guides.

> **Every output is a preparatory draft for the body responsible for the preparation to
> check – not an official statute and not a legal position.** See [`AGENTS.md`](AGENTS.md).

## Skills

| Skill | Source | What it does |
|---|---|---|
| **legislative-drafting-manual** | Lainkirjoittajan opas | Drafting statutes: types of statute, structure, legal language, cross-referencing and the enacting formula (johtolause). |
| **government-bill-guidelines** | HELO | Writing a government bill: the basic structure, model structures, EU-derived bills, treaty-derived bills and supplementary bills. |
| **legislative-process-guide** | Lainvalmistelun prosessiopas | The preparation process from initiative to entry into force: preliminary preparation, basic preparation, the consultation round, further preparation, decision-making and Parliament, and implementation. |
| **legal-language-guide** | – | Symbols and inflected forms in statutory language: the section symbol, numbers, percentages, units of measurement and monetary units, punctuation and abbreviations in statutory text. |

## Data sources (`mcp.json`)

- **oik.ai** (`https://oik.ai/mcp`) – for checking the wording in force of the statute being
  amended and its consequential amendments during drafting, and for retrieving the relevant
  case law. Requires an oik.ai account (OAuth when connecting).

## Installation

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install legislative-drafting@agent-skills-for-finnish-law
```

Recommended: also install the `legal-core` domain, which provides cross-cutting legal
research (`legal-research`) and document review.