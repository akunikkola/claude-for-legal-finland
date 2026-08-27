---
name: consultation-statement-assistant
description: >
  Drafting a consultation statement (lausunto) on a legislative reform or a draft act from
  any respondent's point of view: municipality, city, joint municipal authority, government
  agency, association or company. Helps analyse the bill, compare it with the law in force,
  identify the impacts, summarise other respondents' views and write a reasoned statement.
  Use this skill when the user mentions a consultation statement, a consultation round
  (lausuntokierros), a request for statements (lausuntopyyntö), a legislative reform, a
  government bill (hallituksen esitys / HE), lausuntopalvelu or a position paper, or wants
  to analyse a bill from their own organisation's point of view or to assess the impact of
  a legislative change.
---

# Consultation statement assistant — a strong statement on a legislative reform

This skill helps produce a reasoned and effective statement on a bill. It combines analysis
of the bill, an impact assessment from the respondent's point of view and the structured
writing of the statement itself. The skill suits every kind of respondent; municipalities and
other public bodies get particular value from it, because they implement much of the
legislation in practice.

> **Disclaimer:** a statement is a draft that the respondent's responsible officer reviews
> and approves. Value-laden and political positions are left for the decision-makers to
> complete if there is disagreement about them. Legislative references are checked against
> the source.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

---

## The respondent's profile

Read `references/respondent-profile.md`. If the profile has not been filled in, ask the user
for the key details (type of organisation, size, sector, resources, distinctive features)
before assessing impacts — an impact assessment is only as good as the background information
behind it. The profile can be stored permanently in the domain's practice profile
(`legislative-consultation/AGENTS.md`).

## Checking the law in force and case law

Whenever the statement compares the proposal with the law in force or cites a section,
**use the `legal-research` skill in the `legal-core` domain** and retrieve the wording in force
from the oik.ai/Finlex MCP. Do not confirm a legislative reference from memory. This is essential
to the credibility of the statement.

---

## Stages of the work

Drafting a statement proceeds in seven stages. Each stage produces a concrete result that the
next one builds on.

### Stage 0: Scoping
Establish from the user: which legislative reform (HE number or lausuntopalvelu link), what
material is already available (draft bill, request for statements, earlier statements), the
**deadline** for the statement, any particular priorities and concerns, the **responsible
officer** for the statement, and whether there are earlier statements on the same subject. If
there is disagreement within the organisation, write in a neutral, expert register and leave the
value judgements to be completed by others.

### Stage 1: Gathering source material
If the material is not to hand, find it (`WebSearch`/`WebFetch`; detailed guidance in
`references/information-sources.md` and `references/lausuntopalvelu-guide.md`):
1. **Draft bill / text of the proposed act** — primarily Lausuntopalvelu.fi, alternatively valtioneuvosto.fi or eduskunta.fi.
2. **The law in force** — the `legal-research` skill (oik.ai/Finlex).
3. **The statement of Kuntaliitto or the relevant umbrella organisation** — the sector's common view.
4. **Statements by comparable respondents** — a basis for comparison.
5. **The specific questions in the request for statements** — what the ministry wants answered.

### Stage 2: Analysing the bill
Analyse systematically (tools: `references/analysis-tools.md`) and produce a summary before you
start writing.
- **Overview:** which act is being amended and why, the key changes, the objectives according to the HE.
- **Identifying the impacts** (full framework: `references/impact-assessment.md`): financial, administrative, service, staffing, timetable, information-system and target-group impacts. Prioritise those most material to this particular reform.
- **The respondent's distinctive features:** relate the impacts to the profile.

### Stage 3: Analysing other statements
Find and summarise the key views (umbrella organisation, peer organisations, regional actors,
experts). Identify: where there is broad agreement, where there is disagreement, what concerns
the respondent's own peer group raises, and whether anything has been overlooked. Produce a
summary for the user.

### Stage 4: Drafting the statement
Draft the statement (structure guide: `references/statement-structure.md`, examples:
`references/statement-structure-examples.md`):
1. **General** — thanks for the opportunity to comment, a brief overall assessment.
2. **General observations** — assessment of the objectives, the overall effect, the peer group's point of view.
3. **Detailed observations** — comments by section or chapter: what is proposed → how it affects → what to put in its place.
4. **Financial impacts** — in euros wherever possible, funding questions, transitional period.
5. **Implementation challenges** — practical feasibility, timetable, resources.
6. **Summary and key proposals** — 3–7 positions and concrete proposed amendments to the text of the act.

Writing style (in more detail in `references/writing-guidelines.md`): factual and constructive,
every position supported concretely (with examples and figures), precise section references,
always an alternative alongside any opposition, and direct, clearly headed answers to the
specific questions in the request for statements.

### Stage 5: Checking and finishing
- **Content:** do the comments answer the questions in the request for statements? Are the section references and the names and numbers of the acts correct (checked with the `legal-research` skill)? Are the euro estimates realistic? Have the key impacts been covered?
- **Structure:** a coherent structure; the summary consistent with the detail; the financial estimates supporting the positions taken.
- **Tone:** factual and constructive; proposed amendments clear and workable.
- **Practicalities:** the respondent's official name correct; the reference details (case number, identifier of the request for statements) correct; the length appropriate (3–15 pages).

Use the `document-review` skill in the `legal-core` domain for a thorough check where needed.

### Stage 6: Submission and follow-up
Guide the user (details in `references/lausuntopalvelu-guide.md`): statements are as a rule
submitted through Lausuntopalvelu.fi or to the address given in the request for statements;
check whether a signature is required and in what form. Follow the progress of the reform on
eduskunta.fi — the committee reports show whether the positions in the statement were taken into
account.

---

## Output format

Create a **new** statement as a Word document (.docx) so the user can edit it before submission
(use the `docx` skill; read its SKILL.md first). If you are editing or commenting on an
**existing** draft statement, use the `adeu` MCP, which makes the edits as native Word tracked
changes and comments (Track Changes) without breaking the formatting. Produce in addition:
1. **A summary page** (1 page) — the key messages for decision-makers.
2. **The statement itself** (3–15 pages) with the structure described above.
3. **An analysis annex** (optional) — the detailed analysis, if the user wants it.

## Special situations

- **A broad request for statements:** concentrate on the parts with the greatest effect, and say where you have no observations.
- **Little time:** concentrate on the most important sections, use the umbrella organisation's statement as a base, raise the 3–5 most important observations and mention the constraint imposed by the timetable.
- **EU-derived regulation:** separate what follows directly from the EU instrument (mandatory) from national discretion; aim the proposed amendments at the national implementation.
- **Several ministries:** make sure nothing goes uncommented on the ground that it "belongs to another ministry".
- **A position that differs from the umbrella organisation's:** the respondent's statement is independent; give concrete reasons for the difference.

## Reference files

| File | Content | When to read it |
|---|---|---|
| `references/respondent-profile.md` | The respondent's background details (template) | When assessing impacts (stage 2) |
| `references/analysis-tools.md` | Tools for analysing a bill | During the analysis (stage 2) |
| `references/impact-assessment.md` | Framework for assessing impacts | When assessing impacts (stage 2) |
| `references/information-sources.md` | Online sources and search guidance | When gathering material (stage 1) |
| `references/lausuntopalvelu-guide.md` | Using Lausuntopalvelu.fi and submitting | When gathering material and submitting (stages 1 and 6) |
| `references/statement-structure.md` | Guide to the structure of a statement | When writing (stage 4) |
| `references/statement-structure-examples.md` | Examples of parts of a statement | When writing (stage 4) |
| `references/writing-guidelines.md` | Legal register and the style of a statement | When finishing (stage 5) |

---

## What this skill does NOT do

- **It does not decide the organisation's position.** It produces a draft statement that the respondent's responsible officer reviews and approves before submission.
- **It does not confirm legislative references or impact figures from memory.** The sections in force are checked against the source (the `legal-research` skill) and euro and other estimates are clearly marked as estimates (`[estimate — confirm with the organisation's finance function]`).
- **It does not present a political position as settled.** Value-laden lines are left for the decision-makers to complete; where there is disagreement, the text is written in a neutral, expert register.
- **It does not propose amendments to binding EU regulation.** It separates mandatory EU-derived rules from national discretion and aims proposals only at the national implementation.
- **It does not submit the statement.** It gives guidance on submission (Lausuntopalvelu.fi or the address given), but the user makes the actual filing and signs it.

## Continue from here

- Comparing the proposal with the law in force, against the source → /legal-core:legal-research
- Polishing the language of the statement → /legal-core:finnish-language
- A thorough quality check of the finished draft → /legal-core:document-review
- If the statement concerns legislative drafting technique → /legislative-drafting:legislative-drafting-manual
- If the statement addresses the structure or reasoning of a government bill → /legislative-drafting:government-bill-guidelines
