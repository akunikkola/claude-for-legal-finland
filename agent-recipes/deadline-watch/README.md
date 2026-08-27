# deadline-watch — time-limit monitoring agent

Watches a defined document or calendar source for legal **time limits** and raises approaching
deadlines as alerts. Typical ones: the appeal period (administrative and general courts), the period
for a request for rectification, limitation of an action, the period for leave to appeal or for
continued consideration, the negotiation periods under the Act on Co-operation within Undertakings,
and the response time for a data subject request (GDPR).

> **This is a cookbook, not a finished product.** See [`../README.md`](../README.md) for the
> security model (reader/analyser/writer) and the scope of liability.

## Control event (example)

`Check the time limits in <path/source> up to <YYYY-MM-DD>, threshold: <days before>`

## Tiers

| Tier | Task | Permissions |
|---|---|---|
| `material-reader` | Reads the documents and calendar entries, extracts dates, dates of service and case numbers. Returns JSON. | `Read`, `Grep` |
| `deadline-calculator` | Calculates the time limits from the extracted dates; checks the time-limit rules in oik.ai/Finlex (read access). | MCP read |
| `alert-writer` | Writes the alert list and the follow-up entries. The only `Write` tier. | `Write` |

## What this does NOT do

- **It does not calculate binding deadlines.** The calculated dates are leads that a human must
  confirm from the document and from the provision. The date of service, a public-holiday shift and
  an exception in a special act can all change the result.
- **It makes no legal assessment** of the conditions for an appeal or its prospects of success.
- **It does not replace the firm's time-limit system** or the lawyer's responsibility for monitoring
  time limits.
- **It sends nothing out** without human approval.

## Adoption

1. Adapt the connectors (DMS and calendar) to your own systems.
2. Set the review rhythm and the threshold (how many days ahead to warn).
3. Run your own evaluation on test material before production use.
4. Confirm the lawfulness of processing client data
   ([`../../references/liability-and-security.md`](../../references/liability-and-security.md)).
