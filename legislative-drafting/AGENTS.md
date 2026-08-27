# Legislative drafting — shared safeguards and operating principles

The instructions in this file apply to **every** skill in this domain. An individual skill (`skills/<name>/SKILL.md`) says *what* to do; this file is the **safety net** that prevents the typical mistakes regardless of which skill is running.

> **Design principle:** correct behaviour belongs in SKILL.md, not here. If a skill's correct outcome depends on a safeguard in this file rescuing an error, move the knowledge into SKILL.md. These safeguards are life insurance, not the primary mechanism.

---

## What this domain does — and what it does not

This domain assists with **legislative drafting**: writing statutory text and a government bill (hallituksen esitys), its structure, legal language, and mapping out the preparation process. The instructions are based on official sources (Lainkirjoittajan opas, the government bill drafting instructions HELO, and Lainvalmistelun prosessiopas).

**Does not replace official preparation.** The outputs are preparatory drafts that the official responsible for the preparation and the ministry check and are answerable for. Do not present a draft as a finished statute or as an official position.

---

## The currency requirement — check the statute being amended against the source

When drafting an amendment to a statute you must know the **wording in force** exactly. The model's memory goes stale and confuses sections.

- When the **oik.ai or Finlex MCP** is available, retrieve the text in force of the statute being amended from there before drafting the amendment. Check the exact wording and numbering of the section, subsection and paragraph.
- Establish the **consequential amendments**: which other provisions the change affects (cross-references, definitions). Retrieve them from the source.
- Check whether the statute has already been amended in ways that affect numbering or content (for example inserted a-sections).
- If the source cannot be checked, mark the wording being amended `[from memory — verify in Finlex]` and do not present it as verified.

---

## Source attribution and precision of references

- Attach a provenance note to every statutory reference: `(kuntalaki 410/2015, 7 §, Finlex)`.
- Draw a clear distinction between a **rule from the official guidance** (Lainkirjoittajan opas / HELO) and **your own application or proposal**.
- Do not invent statute numbers, section numbers or HE numbers. If you do not know and cannot check, say so.

---

## Legal language and the requirements of statutory language

Statutory language is precise and consistent. Follow Lainkirjoittajan opas and the legal-language instructions (skills `legislative-drafting-manual` and `legal-language-guide`):

- Standard language, precision, consistency, clarity.
- Always the same term for the same thing — no synonyms.
- The § symbol and the number always together; inflected with a colon (§:n, §:ssä).
- Numbers, percentages, monetary units and units of measurement per the statutory-language guidance.
- A sentence never begins with a numeral.

More detailed rules: the `references/` files of those skills.

---

## Impact assessment and reasoning

In a government bill the reasoning and the impact assessment are essential (HELO). When you draft the reasoning:

- Separate the **description of the law in force**, the **proposed change** and the **justification for the change**.
- Do not present estimated impacts (economic, administrative, environmental, equality and so on) as verified figures when they are estimates — mark them `[estimate — must be confirmed]`.
- Bring out the constitutional and EU-law connections where they are relevant, and do not treat the matter as purely national when an EU background bears on it.

---

## Shared standards

For statutory, case-law and preparatory-works references, follow the marketplace's shared source standard [`references/citation-style.md`](../references/citation-style.md): three-tier certainty marking (Verified / Needs checking / Do not use), the source hierarchy and the correct forms of case identifiers. In brief: attach the source to the number, never present something unchecked as verified, and never assert the content of a decision without having checked the decision against the source.

On liability, professional ethics (confidentiality, disqualification, who may represent) and data handling (GDPR Article 28 processing agreement, anonymisation before analysis): [`references/liability-and-security.md`](../references/liability-and-security.md). **A disclaimer alone is not protection** — protection comes from source verification, certainty marking, checking the premises, stating the negative scope and the human review gate.

## Practice profile (optional)

If the preparing body (a ministry or an agency) has its own standard practices or templates, they can be recorded in this file under the heading `## Practice profile`, and the skills will read them. By default this is empty — do not invent practices; ask the user when one is needed.