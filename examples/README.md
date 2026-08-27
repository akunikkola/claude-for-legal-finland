# Example fixtures

Realistic, **messy** practice material for trying out and evaluating the domains. These are not
textbook cases with a tidy draft answer, but working material that looks like a real engagement:
contradictory, incomplete, and useful precisely for that reason.

## Quality standard

- **No ready-made answer, no hidden model solution.** The material may raise questions, but it does
  not resolve them.
- **No visible placeholders** in the material itself. People, dates and figures are invented but
  plausible.
- **Contradictions where real engagements have them:** dates, recollection, service of documents,
  method of calculation, competence.
- The material is **fictional.** Any resemblance to real people or organisations is coincidental.
  Statutory and case references inside the material may be inaccurate — that is part of the
  exercise (check against the source).

## The fixtures

| Fixture | What it exercises | Relevant domains |
|---|---|---|
| [`fixed-term-employment-ending`](fixed-term-employment-ending/) | the ground for a fixed term, summary termination during the trial period, notice period, procedure | `employment-law`, `legal-core` |
| [`residential-sale-defect`](residential-sale-defect/) | notice of defect, types of defect, the buyer's duty to inspect, the housing company's liability, the agent's role | `real-estate-and-housing`, `legal-core` |
| [`ma-due-diligence`](ma-due-diligence/) | DD prioritisation, minority shareholder, change of control, environmental risk, KKV assessment | `company-law`, `competition-law`, `environment-and-planning` |

## Assessment criteria

Each fixture includes an `assessment-criteria.md` file – **a behaviour checklist, not a model
answer**. It describes what a good output *does* (surfaces the contradictions, marks calculations as
needing checking, does not confirm statutory provisions from memory), not the substantive outcome.
Use it for two things:

1. **Piloting an adoption**: run the fixture through a skill and compare the output against the
   criteria before you put real material into the tool
   (see [`../references/firm-adoption.md`](../references/firm-adoption.md)).
2. **Regression-testing changes**: after editing a skill, the same run tells you whether the
   behaviour survived.

Do not give the criteria file to the model in the same session as the material — it is the
assessor's tool, not the assessed's.

## Use

Open a fixture folder, give the files to the agent and ask for example:

- "Assess the grounds and the procedure for this summary termination during the trial period" →
  `employment-law:termination-of-employment`
- "Is this fixed term valid?" → `employment-law:employment-contract`
- "Review this employment contract extract for risks"

Note the contradictions in the material — a good output surfaces them instead of quietly picking
one interpretation.
