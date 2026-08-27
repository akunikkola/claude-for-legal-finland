---
name: plain-language
description: >
  Explaining Finnish legal text in clear plain language to a lay reader — a
  client, a principal or another non-lawyer. Use this skill when a section, a
  contract term, a decision, a statement or a written submission has to be
  opened up into an understandable form, when a summary is being prepared for
  a client of what a document means and what it requires of them, or when
  legal text retrieved from Finlex or oik.ai has to be made generally
  intelligible without distorting its meaning. The output is plain Finnish,
  because the reader is the Finnish-speaking client. Triggers on: plain
  language, explain to the client, make this understandable, for a lay
  reader, what does this mean, summarise for the client, and on the Finnish
  terms selkokieli, selkokielistä, yleiskielistä, avaa pykälä.
---

# Plain language — legal text into everyday Finnish

This skill turns legal text into clear everyday language in such a way that
**the meaning survives**: the client understands what the matter is and what it
requires of them, without any material reservation being lost.

> **Disclaimer:** a plain-language rendering is a draft that needs checking —
> not legal advice. Simplification must not turn into incorrect advice. See
> `legal-core/AGENTS.md`.

## Output language

The reader is the Finnish-speaking client, so **the plain-language rendering is
written in Finnish**, like the source document. This skill changes the register
of the text, not its language: it moves Finnish legal prose into plain Finnish.

## The principle: clearer, not wrong

The aim is **intelligibility without distortion of meaning**. Do not remove a
material term, a reservation or a deadline merely because it complicates the
text. If something is uncertain or open to interpretation, that is said in
plain language too — simplified certainty is misleading.

> **A note on the term:** "selkokieli" is also an official register of its own,
> aimed at accessibility and with its own criteria (Selkokeskus). If **official
> selkokieli** is needed (e.g. accessible communication by an authority), say
> that it is a standard of its own and follow its criteria; this skill produces,
> as a starting point, *clear general Finnish* (selkeä yleiskieli) for a lay
> reader.

## Step 1: For whom and for what?

- **Target audience**: a client, a principal, a consumer, an employee, a person
  dealing with an authority? Their background affects what has to be explained.
- **Purpose**: to understand their own situation, to make a decision, to act
  within a time limit, to grasp a risk? The explanation is aimed at the purpose.

## Step 2: Extract the core from the source text

1. **What the document does** (obliges, entitles, decides, requires).
2. **What it requires of the reader** and **by when** (actions, deadlines) —
   deadlines are kept exact, not rounded away.
3. **The consequences** of not acting.
4. **The open points and those open to interpretation.**

Preserve the distinctions that are decisive in law. In Finnish these turn on
the exact modal wording — keep `saa` distinct from `on velvollinen`, and
`voidaan` distinct from `on`. If a section or a term is retrieved from the
source, use the `legal-research` skill — do not explain content recalled from
memory as though it were certain.

## Step 3: Write clearly

- **Short sentences and everyday words**; avoid legal terms, or explain them in
  brackets on first use.
- **Active voice and direct address** (`sinun on toimitettava…`) instead of the
  passive, where that fits.
- **Structure it**: a short summary first, then the sections `mitä sinun pitää
  tehdä`, `mihin mennessä` and `mitä jos et toimi`.
- Follow Finnish spelling conventions → `legal-core:finnish-language`.
- Keep the original reference to the section or term in brackets where needed,
  so the reader can find the source.

## Step 4: Check that the meaning has not changed

Compare the plain-language version against the source text: has an obligation,
a term, a deadline or a reservation been lost or altered? Put it back.
**Clarity must not come at the cost of correctness.**

## Step 5: Keep it separate from advice

- Explain **what the document says** — do not slide into **what the client
  would be well advised to do**, unless that is the task and a lawyer takes
  responsibility for it. A recommendation to act is a different thing from an
  explanation.
- Add a short note at the end: *"Tämä on selkokielinen tiivistelmä — ei
  oikeudellista neuvontaa. Tarkista alkuperäinen asiakirja."* ("This is a
  plain-language summary — not legal advice. Check the original document.")

## What this skill does NOT do

- **Does not remove material terms, reservations or deadlines** in the name of
  clarity.
- **Does not turn an explanation into advice** without a lawyer taking
  responsibility.
- **Does not explain the content of the law from memory as though it were
  certain** → `legal-research`.
- **Does not produce official accessible selkokieli** without following its
  criteria.

## Continue from here

- Checking a statute or a section in the source → /legal-core:legal-research
- Finnish spelling and style → /legal-core:finnish-language
- A Swedish-language version for the client → /bilingual-legal-language:legal-translation
- A quality review of the whole document → /legal-core:document-review
