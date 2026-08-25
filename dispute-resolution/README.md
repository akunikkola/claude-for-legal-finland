# Riidanratkaisu

Riita-asian ratkaiseminen yleisissä tuomioistuimissa (oikeudenkäymiskaari 4/1734):
vireillepano, todistelu ja muutoksenhaku.

> **Luonnokset ja arviot ovat tarkistettavia – ei oikeudellista neuvontaa eikä arvio
> menestymisestä.** Toimeksiannon hoitava asianajaja vastaa lopputuloksesta. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **haastehakemus** | Riita-asian haastehakemuksen laatiminen ja tarkistus (OK 5:2 §): vaatimukset, perusteet, todisteet, kulut, toimivalta, prosessiosoite. Sisältää riidanratkaisun perusteiden referenssin. |
| **todistelu** | Todistelun suunnittelu ja arviointi (OK 17 luku): näyttötaakka, todistuskeinot, todistusteemat, rajoitukset, todistelusuunnitelma. |
| **muutoksenhaku-tuomioon** | Valitus hovioikeuteen (jatkokäsittelylupa, OK 25/25 a luku) ja korkeimpaan oikeuteen (valituslupa, OK 30 luku): tyytymättömyyden ilmoitus, määräajat, kirjelmät. |
| **vahingonkorvaus** | Korvausvastuun yleiset opit (vahingonkorvauslaki 412/1974): vastuuperusteen rajanveto (sopimus/delikti/ankara vastuu), tuottamus, syy-yhteys, vahinkolajit ml. puhdas varallisuusvahinko, isännänvastuu, sovittelu ja vaatimuksen jäsennys. |

## Agentit

| Agentti | Mitä tekee |
|---|---|
| **vastapuoli** | Vastapuolen avustajan simulaattori: hyökkää kirjelmäluonnosta vastaan tosissaan (prosessiväitteet, näytön aukot, vaihtoehtoiset tapahtumainkulut, määräargumentit) ja palauttaa heikkoustaulukon + top 3 -korjaukset ennen jättämistä. Vain luku. |

## Perustana varmistetut säädökset

Lähteestä (oik.ai/Finlex) varmistettu: **oikeudenkäymiskaari (4/1734)** – mm. haastehakemuksen
sisältö (5:2 §) haettu sanatarkasti – ja **tuomioistuinlaki (673/2016)**. Aineellinen laki ja
muut säädökset (mm. laki välimiesmenettelystä 967/1992) tarkistetaan `legal-core:legal-research`-skillillä.

## Liittyy

- **`legal-core`-plugari** – `legal-research` (prosessisäännökset, aineellinen laki ja KKO/hovioikeus-käytäntö) ja `document-review`.
- **`contracts`-plugari** – sopimusriitojen aineellinen pohja.
- **`data-protection`-plugari** – aineiston anonymisointi (PII Shield) ennen käsittelyä.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install riidanratkaisu@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
