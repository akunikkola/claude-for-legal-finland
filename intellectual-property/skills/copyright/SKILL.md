---
name: copyright
description: >
  Copyright under Finnish law (tekijänoikeuslaki 404/1961 with the DSM reforms).
  Use this skill when the user asks about copyright in a work, software, an image,
  a text, music or other content, about the ownership of rights in an employment or
  commissioning relationship, about licensing or the transfer of rights, about the
  right of quotation or other permitted use, about the relationship between AI and
  copyright, or about a suspected infringement. Triggers on: copyright,
  tekijänoikeus, work, licence, right of use, quotation, use of an image, open
  source, Creative Commons, plagiarism, copyright infringement, moral rights,
  Teosto, Kopiosto, text and data mining.
---

# Copyright — protection, ownership, licensing and permitted use

This skill structures copyright questions under the Copyright Act (404/1961). The
act contains the amendments implementing the DSM Directive (verified at source) —
remembered knowledge of the old act is unreliable. Fundamentals:
`../trademarks-and-trade-names/references/ip-fundamentals.md`.

> **Disclaimer:** assessments are for review — not legal
> advice. The threshold of originality and infringement are ultimately matters for
> the overall assessment of a court. See `intellectual-property/AGENTS.md`.

## Check the law at source

Look up the applicable provisions with the **`legal-core:legal-research` skill** —
the Copyright Act has been amended often (among other things the DSM amendments:
online content-sharing services, text and data mining, use in teaching). The
opinions of the Copyright Council (tekijänoikeusneuvosto) are a central source of
interpretation — look them up at source, do not summarise them from memory.

## The basic map

1. **Does protection arise?** Copyright arises **automatically** at the moment of
   creation, without registration, once the **threshold of originality**
   (independence and originality) is crossed. Ideas, information and methods are
   not protected — only the form of expression. Related rights (performer,
   producer, photographer, catalogue or database) protect at a lower threshold —
   check the differences at source.
2. **Who owns it?** Main rule: **the author** (a natural person) — including in an
   employment relationship. Exception: **computer programs created in employment
   pass to the employer (40 b §, wording verified)**. Every other transfer requires
   an agreement — check the IP terms of employment contracts and commissioning
   agreements. Commissioned work without a transfer clause: the rights stay with
   the author.
3. **Which rights?** Economic rights (making copies, making available to the
   public) and **moral rights** (the right of attribution, the right to respect) —
   moral rights can be waived only to a limited extent.
4. **For how long?** Main rule: the author's life plus 70 years; the terms of
   related rights from source.

## Licensing and transfer

When you draft or assess a licence or a transfer, define at least:

- **The subject matter** — which work or material, including future versions?
- **The scope** — exclusive or non-exclusive; the purposes of use; the right to
  modify (it does not pass by default — check at source); the right to sub-assign.
- **Territory and term** — together with the termination terms.
- **Consideration** — a lump sum or a royalty; the DSM introduced provisions on
  remuneration and reporting for authors — check them at source.
- **Open licences** — the compatibility of the terms of open source licences (MIT,
  GPL and others) and the copyleft effect; the significance of Creative Commons
  terms. The details of a licence come from the licence text, not from memory.

The mechanics of the agreement: `contracts:contract-drafting`; a Word redline:
the `adeu` MCP.

## Permitted use without a licence

The limitation provisions are **exceptions that are construed narrowly** — look up
the precise conditions at source before you conclude that a use is permitted:
quotation (in accordance with proper usage, to the extent required by the purpose),
private use, use in teaching, parody, **text and data mining** (DSM; scientific
research versus general mining and the rightholder's right to reserve — central to
questions about AI training data → `ai-regulation`).

Collective management: Teosto, Kopiosto, Gramex, Kuvasto, Sanasto — extended
collective licences cover many mass-use situations; direct the user to the right
organisation.

## Infringement assessment

1. **A protected work?** — the threshold of originality and the term of protection.
2. **An act of use?** — copying, communication, modification; the particular
   questions of linking from source.
3. **A licence or a limitation?** — a licence, an extended collective licence, a
   limitation provision.
4. **Consequences** — reasonable compensation (strict liability — it does not
   require fault; check at source), damages, an injunction; criminal liability in
   serious cases.

Report on a three-step scale (infringement likely / possible / unlikely) with
reasons and `[confirm — requires an IP lawyer's assessment]`.

## AI and copyright

Raise three separate questions, and do not conflate them: (1) training data, the
mining exception and the rights to reserve, (2) protection of the output (purely
generated material does not in principle cross the threshold of originality without
a human creative contribution — this is open to interpretation, so mark the
uncertainty), (3) whether the output may itself infringe existing works. The
transparency obligations of GPAI models →
`ai-regulation:ai-obligations`.

## What this skill does NOT do

- **It does not confirm bindingly that the threshold of originality is crossed or
  that there is an infringement** — these are matters for the overall assessment of
  a court.
- **It does not summarise the opinions of the Copyright Council or case law from
  memory** — look them up at source with their identifiers.
- **It does not interpret an open source licence without reading the licence text**.
- **It does not assist in the unauthorised use of protected material** — for
  example circumventing protection measures, or piracy.
- **It does not cover trade marks, patents or designs** — those have their own
  skills and appear in the table in the reference.

## Continue from here

- Checking a provision or decision practice → /legal-core:legal-research
- Drafting a licence or transfer agreement → /contracts:contract-drafting
- Protection of a name and a logo → /intellectual-property:trademarks-and-trade-names
- Unpublished material to be kept secret → /intellectual-property:trade-secrets
- The obligations of an AI system → /ai-regulation:ai-obligations
