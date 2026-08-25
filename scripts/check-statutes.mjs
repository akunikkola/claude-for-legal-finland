#!/usr/bin/env node
// Säädösvahti: vertaa tracking/statutes.json-rekisterin jokaisen säädöksen
// Finlex-otsikkoa odotettuun nimeen. Nimen muutos (esim. MRL →
// alueidenkäyttölaki) on VIRHE (exit 1); tavoittamattomuus on VAROITUS
// (Finlexin sivut välillä temppuilevat). Ajetaan CI:ssä kuukausittain.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "tracking/statutes.json"), "utf8"));

const norm = (s) => s.toLowerCase().normalize("NFC");
const docIdOf = (e) => {
  if (e.docId) return e.docId;
  const [nro, vuosi] = e.numero.split("/");
  return vuosi + nro.padStart(4, "0");
};

async function titleAt(url) {
  try {
    const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20000) });
    if (!r.ok) return null;
    const m = (await r.text()).match(/<title>([^<]*)<\/title>/);
    return m ? m[1].trim() : null;
  } catch { return null; }
}

let virheet = 0, varoitukset = 0, ok = 0;
console.log(`säädösvahti — ${reg.saadokset.length} säädöstä\n`);

for (const e of reg.saadokset) {
  const [, vuosi] = e.numero.split("/");
  const id = docIdOf(e);
  let title = null, lahde = "";
  for (const polku of ["ajantasa", "alkup"]) {
    const t = await titleAt(`https://www.finlex.fi/fi/laki/${polku}/${vuosi}/${id}`);
    // pelkkä "Finlex" = sisällötön kuori → kokeile seuraavaa polkua
    if (t && norm(t) !== "finlex") { title = t; lahde = polku; break; }
    await new Promise((r) => setTimeout(r, 200));
  }
  if (!title) {
    varoitukset++;
    console.log(`  ⚠️  ${e.numero} ${e.nimi} — ei tavoitettu (tarkista käsin)`);
    continue;
  }
  const nimiOsuu = norm(title).includes(norm(e.nimi));
  const numeroOsuu = title.includes(e.numero);
  if (nimiOsuu && numeroOsuu) {
    ok++;
  } else {
    virheet++;
    console.log(`  ❌ ${e.numero} — odotettu "${e.nimi}", Finlex (${lahde}): "${title}"`);
    console.log(`     → säädös on voinut muuttua tai korvautua; päivitä plugarit ja rekisteri.`);
  }
  await new Promise((r) => setTimeout(r, 150));
}

console.log(`\n✓ ${ok} täsmää · ⚠️ ${varoitukset} ei tavoitettu · ❌ ${virheet} nimi muuttunut`);
if (virheet > 0) {
  console.error("\n✗ Säädösnimi ei vastaa rekisteriä — repon viittaukset voivat olla vanhentuneita.");
  process.exit(1);
}
