# Rikosprosessi

Suomen rikosprosessi oikeudellisen avustajan työhön: esitutkinta ja pakkokeinot,
syyte ja puolustus sekä asianomistajan asema yksityisoikeudellisine vaatimuksineen.

> **Tuotokset ovat avustajan työn tukea – ei oikeudellista neuvontaa eikä
> puolustautumisohjeita ilman avustajaa.** Syyttömyysolettama ja
> itsekriminointisuoja ohjaavat kaikkea; todisteiden hävittämistä tai todistajiin
> vaikuttamista ei avusteta missään muodossa. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **esitutkinta-ja-pakkokeinot** | Esitutkinta (805/2011): epäillyn ja asianomistajan asema, kuulusteluvalmistautuminen, esitutkinnan rajoittaminen, loppulausunto. Pakkokeinot (806/2011): kiinniotto, pidätys ja vangitseminen, etsinnät ja takavarikko, salaiset pakkokeinot – edellytysten arviointi ja oikeusturvakeinot. Sisältää rikosprosessin perusteiden referenssin. |
| **syyte-ja-vastaus** | Syyteharkinta ja haastehakemus (ROL 689/1997), vastaajan vastauksen ja puolustusstrategian jäsennys, todistelu (OK 17 luku), tuomioesitysmenettely (ROL 5 b luku), pääkäsittely ja muutoksenhaku. |
| **asianomistajan-asema** | Asianomistajan oikeudet: yksityisoikeudelliset vaatimukset rikosprosessissa, vahingonkorvaus (412/1974) ja rikosvahinkolain korvaus (1204/2005), toissijainen syyteoikeus, avustaja ja tukihenkilö sekä lähestymiskielto (898/1998). |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **laki oikeudenkäynnistä rikosasioissa
(689/1997, "ROL")** ml. 5 b luvun tuomioesitysmenettely, **esitutkintalaki
(805/2011)**, **pakkokeinolaki (806/2011)**, **rikoslaki (39/1889)**,
**oikeusapulaki (257/2002)**, **vahingonkorvauslaki (412/1974)**,
**rikosvahinkolaki (1204/2005)** ja **laki lähestymiskiellosta (898/1998)**.
Tunnusmerkistöt, rangaistusasteikot, vanhentumisajat ja pakkokeinojen
edellytykset tarkistetaan aina käytössä `legal-core:legal-research`-skillillä.

## Liittyy

- **`legal-core`-plugari** – `legal-research` (KKO:n ennakkopäätökset),
  `engagement-intake` (esteellisyys, määräaikaskannaus) ja `document-review`.
- **`dispute-resolution`-plugari** – todistelun yleiset opit (OK 17 luku) ja
  tuomion muutoksenhaun mekaniikka.
- **`data-protection`-plugari** – rikostuomioihin ja rikkomuksiin liittyvien
  henkilötietojen käsittely ja anonymisointi.
- **`insolvency`-plugari** – velallisen rikokset talousrikosasioissa.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install rikosprosessi@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
