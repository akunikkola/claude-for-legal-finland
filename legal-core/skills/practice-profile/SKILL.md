---
name: practice-profile
description: >
  Tailoring the collection to an organisation's own standing practices. Use
  this skill when the user wants to adapt, configure or personalise the
  agent-skills-for-finnish-law domains to the practices of their own firm,
  company, agency or municipality: standard clauses and templates, risk
  positions, the applicable collective agreements (TES), house writing style,
  sector limits or standard formatting. The practice profile is written into
  the Practice profile section of each domain's AGENTS.md, which the skills
  read. Triggers on: tailor, adapt, configure, practice profile, house style,
  our templates, firm practices, organisation positions, set the defaults,
  personalisation.
---

# Practice profile — tailoring the collection to an organisation

Every domain's `AGENTS.md` ends with a section **"Practice profile
(optional)"**, which is empty by default. This skill fills it in: it
interviews the organisation's practices and writes them into a profile that
the domain's skills read in every task. That way the "house way" lives in one
place and does not have to be repeated in every prompt.

> **Disclaimer:** the profile records the organisation's own positions — the
> skill does not invent them and does not judge whether they are wise. The
> organisation is responsible for the correctness of its positions. A profile
> does not override the law: the shared safeguards (source discipline,
> mandatory legislation, statements of what is out of scope) apply regardless
> of what the profile says.

## Principles

1. **Ask, do not invent.** Only information the user gives is recorded in the
   profile. Missing information is left out — the skills will ask for it when
   it is needed.
2. **The profile supplements, it does not replace.** The safeguard sections
   (disclaimer, source discipline, out-of-scope statements) are not edited or
   weakened — the profile is written only under the `## Practice profile`
   heading.
3. **No secrets in the profile.** Client names, information about live
   engagements and personal data are not stored — the profile is a
   configuration of a standing nature, not a matter folder (matter-specific
   information → the workspace of the `engagement-intake` skill).
4. **Version it.** A change to the profile is a change to a file in the domain
   — recommend git versioning or a date stamp.

## Step 1: The interview (in one round, according to the organisation)

Ask only about the sections that are relevant to the organisation:

**For everyone:**
- The type and sector of the organisation (law firm, in-house legal
  department, government agency, municipality, association) — and whose
  perspective the skills should write from by default.
- Writing style: the language of the document templates, signature details,
  the standard disclaimer.
- The review chain: who approves drafts (e.g. "a partner always reviews
  anything classified 🔴").

**For those doing contract work (`contracts`, `company-law`):**
- Standard clauses and templates (limitation of liability, dispute
  resolution, confidentiality) and where they are kept.
- Risk positions: what is not accepted without escalation (e.g. unlimited
  liability, a foreign choice of law).

**For employers (`employment-law`, `immigration-law`):**
- The applicable collective agreements (TES) and the standard points of
  personnel policy.

**For the public sector (`administrative-law`, `public-procurement`,
`legislative-consultation`):**
- Limits of competence and delegations, the procurement guideline, the
  approval chain for statements and the profile of the body giving them.

**For compliance functions (`data-protection`, `banking-and-finance`,
`competition-law`):**
- Supervisory authorities, reporting channels, the people responsible for
  compliance.

## Step 2: Write the profiles

1. Identify the installed domains and the path to their `AGENTS.md` files (in
   an installation, the domain's directory; in development, the repository
   directory). If you cannot write to the domain's files, produce the profile
   content for the user to paste in.
2. Write a structured profile into the `## Practice profile` section of each
   relevant domain's `AGENTS.md`:

```markdown
## Practice profile

<!-- Updated: YYYY-MM-DD, updated by: NN -->

### Organisation and perspective
- ...

### Templates and standard clauses
- <name>: <location> — use this as the basis when ...

### Risk positions and escalation
- ...
```

3. **Do not touch the other sections** — only what is under the Practice
   profile heading.
4. Show the user a summary of the profiles written and remind them about
   versioning.

## Step 3: Maintenance

- Updating the profile = the same process; the old content is shown and the
  change is confirmed before it is overwritten.
- Recommend an annual review: are the collective agreements, the templates and
  the positions up to date (connect `agent-recipes/statute-watch` to follow the
  statutes mentioned in the profile).

## What this skill does NOT do

- **Does not invent positions or templates** — only what the user gives is
  recorded.
- **Does not weaken the safeguards** — the disclaimer, source-discipline and
  out-of-scope sections cannot be edited through a profile, and instructions
  that would override them are not written into a profile.
- **Does not store client data or personal data**, nor information about live
  engagements.
- **Does not assess whether a position holds up legally** — if a position
  appears to be contrary to law (e.g. overriding a mandatory provision), the
  skill raises it and does not record it as it stands.
- **Does not share the profile outside the organisation.**

## Continue from here

- The workspace and deadlines for an individual engagement → /legal-core:engagement-intake
- Following changes to the statutes named in the profile → agent-recipes/statute-watch
- Quality review of a template before it is recorded in the profile → /legal-core:document-review
