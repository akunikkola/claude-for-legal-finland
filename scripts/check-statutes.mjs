#!/usr/bin/env node
// Statute watch: compares the Finlex page title of every statute in the
// tracking/statutes.json registry against the expected name. A changed name
// (for example MRL → alueidenkäyttölaki) is an ERROR (exit 1); being unable to
// reach the page is a WARNING, because Finlex is intermittently flaky. Runs
// monthly in CI.
//
// The `name` values in the registry stay Finnish on purpose — they are matched
// against Finlex page titles, so translating them would break this check, and
// break it silently.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "tracking/statutes.json"), "utf8"));

const norm = (s) => s.toLowerCase().normalize("NFC");
const docIdOf = (e) => {
  if (e.docId) return e.docId;
  const [number, year] = e.number.split("/");
  return year + number.padStart(4, "0");
};

async function titleAt(url) {
  try {
    const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20000) });
    if (!r.ok) return null;
    const m = (await r.text()).match(/<title>([^<]*)<\/title>/);
    return m ? m[1].trim() : null;
  } catch { return null; }
}

let errors = 0, warnings = 0, ok = 0;
console.log(`statute watch — ${reg.statutes.length} statutes\n`);

for (const e of reg.statutes) {
  const [, year] = e.number.split("/");
  const id = docIdOf(e);
  let title = null, source = "";
  for (const path of ["ajantasa", "alkup"]) {
    const t = await titleAt(`https://www.finlex.fi/fi/laki/${path}/${year}/${id}`);
    // A bare "Finlex" title is an empty shell → try the next path
    if (t && norm(t) !== "finlex") { title = t; source = path; break; }
    await new Promise((r) => setTimeout(r, 200));
  }
  if (!title) {
    warnings++;
    console.log(`  ⚠️  ${e.number} ${e.name} — not reached (check by hand)`);
    continue;
  }
  const nameMatches = norm(title).includes(norm(e.name));
  const numberMatches = title.includes(e.number);
  if (nameMatches && numberMatches) {
    ok++;
  } else {
    errors++;
    console.log(`  ❌ ${e.number} — expected "${e.name}", Finlex (${source}): "${title}"`);
    console.log(`     → the statute may have changed or been replaced; update the domains and the registry.`);
  }
  await new Promise((r) => setTimeout(r, 150));
}

console.log(`\n✓ ${ok} match · ⚠️ ${warnings} not reached · ❌ ${errors} name changed`);
if (errors > 0) {
  console.error("\n✗ A statute name does not match the registry — references in this repository may be out of date.");
  process.exit(1);
}
