---
name: principal-offences
description: >
  Keskeisten rikostyyppien tunnusmerkistöt ja rajanvedot Suomen
  rikosoikeudessa (rikoslaki 39/1889, erityisosa). Käytä tätä skilliä,
  kun jäsennetään mihin rikosnimikkeeseen teko mahdollisesti sopii,
  erotetaan perus-, törkeä- ja lievä tekomuoto, vedetään rajaa
  lähirikosten välillä (esim. varkaus–kavallus–petos) tai arvioidaan
  talous-, väkivalta-, omaisuus- tai seksuaalirikoksen tunnusmerkistöä
  puolustuksen, asianomistajan tai compliancen näkökulmasta. Triggeröi
  sanoista: rikosnimike, varkaus, petos, kavallus, pahoinpitely,
  talousrikos, kirjanpitorikos, veropetos, velallisen rikos,
  seksuaalirikos, huumausainerikos, törkeä tekomuoto, rikostyyppi.
---

# Keskeiset rikostyypit — nimike, tekomuoto ja rajanveto

Tämä skill auttaa tunnistamaan, mihin rikosnimikkeeseen teko mahdollisesti
sopii, ja erottamaan tekomuodot ja lähirikokset. Rikosoikeuden kartta:
`../rikosvastuun-perusteet/references/rikosoikeus-perusteet.md`.

> **Vastuuvapaus:** analyysi on tarkistettava luonnos — ei oikeudellista
> neuvontaa. Tunnusmerkistöt ja asteikot tarkistetaan lähteestä;
> rikoslaki muuttuu jatkuvasti. Tämä plugari **ei avusta rikoksen
> tekemisessä eikä peittelyssä.** Katso `rikosoikeus/CLAUDE.md`.

## Tarkista tunnusmerkistö lähteestä — aina

Tämä skill antaa **jäsennyksen**, ei tunnusmerkistön sanamuotoa. Hae
kunkin nimikkeen voimassa oleva tunnusmerkistö, tekomuodot ja asteikko
rikoslain oikeasta luvusta **`juristi:oikeustutkimus`-skillillä** ja
rajanvetoa koskeva KKO-käytäntö lähteestä. **Seksuaalirikosten luku
uudistettiin kokonaan 2023 (suostumusperusteiseksi)** — älä käytä
vanhentunutta jäsennystä.

## Vaihe 1: Mihin nimikkeeseen teko sopii?

Hahmota teon ydin ja kohde, ja kartoita mahdolliset nimikkeet
**ryhmittäin** (tarkista kunkin tunnusmerkistö lähteestä):

- **Omaisuusrikokset** — esim. varkaus, näpistys, kavallus, petos,
  luvaton käyttö, vahingonteko, kiskonta, ryöstö (väkivalta + anastus).
- **Henkeen ja terveyteen kohdistuvat** — esim. pahoinpitely
  (lievä/perus/törkeä), vammantuottamus, henkirikokset, heitteillepano.
- **Talousrikokset** — esim. kirjanpitorikos, verorikokset (veropetos),
  velallisen rikokset, rahanpesu, lahjusrikokset, arvopaperimarkkina-
  rikokset (kytkös: `banking-and-finance`, `taxation`, `company-law`).
- **Seksuaalirikokset** — uudistettu luku (2023), suostumuksen
  keskeisyys; arvioi voimassa olevan tunnusmerkistön mukaan.
- **Huumausainerikokset** — käyttö, hallussapito, levittäminen,
  tekomuodot.
- **Viranomais- ja oikeudenkäyttörikokset** — esim. väärä ilmianto,
  perätön lausuma, virkarikokset.
- **Liikennerikokset** — esim. rattijuopumus, liikenneturvallisuuden
  vaarantaminen (osin oma sääntelynsä).

## Vaihe 2: Tunnusmerkistön erittely

Valitulle nimikkeelle: käy objektiiviset tunnusmerkit ja vaadittu
syyksiluettavuus läpi (→ `rikosvastuun-perusteet`). Tarkista, täyttyykö
jokainen tekijä vai jääkö jokin näytön tai tulkinnan varaan.

## Vaihe 3: Tekomuoto — lievä, perus vai törkeä

- **Kvalifiointiperusteet** (törkeä tekomuoto) ja **privilegiointi**
  (lievä) muuttavat asteikkoa olennaisesti. Ne edellyttävät yleensä sekä
  laissa lueteltua ankaroittavaa/lieventävää seikkaa **että**
  kokonaisarviota törkeydestä/vähäisyydestä.
- Tarkista perusteet ja kokonaisarvion kriteerit lähteestä; älä oleta
  törkeää tekomuotoa pelkän vahingon suuruuden perusteella.

## Vaihe 4: Rajanveto lähirikoksiin

Tyypilliset rajanvedot (arvioi tunnusmerkistöjen erojen kautta,
lähteestä):

- **Varkaus vs. kavallus vs. petos** — hallinnan ja erehdyttämisen ero.
- **Petos vs. sopimusrikkomus / siviiliriita** — erehdyttäminen ja
  tahallisuus; kaikki maksamaton velka ei ole petos.
- **Pahoinpitely vs. hätävarjelu** — oikeudettoman hyökkäyksen torjunta.
- **Yksi vai useampi teko** — yhden teon eri nimikkeet (konkurrenssi)
  ja niiden vaikutus.

## Vaihe 5: Kokoava jäsennys

Esitä: todennäköiset nimikkeet, kunkin tunnusmerkistön täyttymisen
arvio, tekomuoto sekä keskeiset näyttö- ja rajanvetokysymykset.
Merkitse selvästi tulkinnanvaraiset kohdat ja tarkistustarpeet. **Älä
esitä lopputulosta varmana** — syyttömyysolettama; asteikot lähteestä.

## Mitä tämä skill EI tee

- **Ei avusta minkään rikoksen tekemisessä eikä tunnusmerkistön
  kiertämisessä** — kieltäydy ja kerro syy.
- **Ei anna tunnusmerkistön sanamuotoa tai asteikkoa muistista** —
  lähteestä.
- **Ei käytä vanhentunutta seksuaalirikosjäsennystä** (luku uudistettu
  2023).
- **Ei ratkaise syyllisyyttä eikä rikosnimikettä sitovasti** — se
  kuuluu syyttäjälle ja tuomioistuimelle.

## Jatka tästä

- Tunnusmerkistön, tahallisuuden ja osallisuuden arviointi → /rikosoikeus:rikosvastuun-perusteet
- Rangaistuksen määrääminen, menettämisseuraamus ja vanhentuminen → /rikosoikeus:rangaistuksen-maaraaminen
- Talousrikosten siviili- ja sääntelykytkennät → /yhtiooikeus:yhtion-hallinto · /verotus:verotusmenettely-ja-muutoksenhaku
- Esitutkinta, syyte ja asianomistajan asema → /rikosprosessi:syyte-ja-vastaus
- Tunnusmerkistön tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
