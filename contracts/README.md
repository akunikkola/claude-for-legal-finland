# Sopimukset

Sopimusten laatiminen ja tarkistus Suomen oikeuden mukaan.

> **Sopimusluonnos ja riskiarvio ovat tarkistettavia luonnoksia – ei oikeudellista
> neuvontaa.** Suuririskinen tai 🔴 PUNAINEN sopimus kuuluu juristin arvioitavaksi.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **sopimuksen-laatiminen** | Laatii sopimuksen Suomen oikeuden mukaan: rakenne, kommentoitu lausekekirjasto ja sopimusoikeuden perusteet (sopimusvapaus, pakottava sääntely, kohtuullistaminen, vastuu). |
| **sopimuksen-tarkistus** | Lausekekohtainen riskiarvio ja luokittelu (🟢 VIHREÄ / 🟡 KELTAINEN / 🔴 PUNAINEN), kohtuullistamis- ja pakottavan lain lippuineen. |

## Agentit

| Agentti | Mitä tekee |
|---|---|
| **poikkeamatarkastaja** | Vertaa sopimusluonnoksen talon riskilinjauksiin ja vakiolausekkeisiin (käytäntöprofiili tai annettu playbook) ja palauttaa lausekekohtaisen poikkeamataulukon (✅/🟡/🔴/⚪) eskalointiehdotuksineen. Pysähtyy, jos mittatikkua ei ole. Vain luku. |

## Perustana varmistetut säädökset

Sisältö nojaa lähteestä (oik.ai/Finlex) varmistettuihin säädöksiin: oikeustoimilaki
(228/1929, mm. 36 §:n kohtuullistaminen), kauppalaki (355/1987) ja kuluttajansuojalaki
(38/1978). Muut säädösviittaukset on tarkistettava `legal-core:legal-research`-skillillä.

## Liittyy

- **`legal-core`-plugari** – `legal-research` (lakiviittausten tarkistus lähteestä) ja `document-review` (perusteellinen monivaiheinen läpikäynti).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install sopimukset@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
