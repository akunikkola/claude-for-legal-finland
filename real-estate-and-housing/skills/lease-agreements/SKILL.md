---
name: lease-agreements
description: >
  Asuin- ja liikehuoneiston vuokrasuhteet Suomessa (laki asuinhuoneiston
  vuokrauksesta 481/1995 ja laki liikehuoneiston vuokrauksesta 482/1995).
  Käytä tätä skilliä, kun käyttäjä laatii tai tarkistaa vuokrasopimusta,
  arvioi vuokrankorotuksen, vakuuden, irtisanomisen tai purkamisen
  edellytyksiä, käsittelee vuokrarästejä, häiriötilannetta tai häätöä,
  tai vertaa asuin- ja liikehuoneiston vuokrauksen eroja. Triggeröi
  sanoista: vuokrasopimus, vuokralainen, vuokranantaja, vuokrankorotus,
  vuokravakuus, irtisanomisaika, vuokrasopimuksen purku, häätö,
  vuokrarästi, määräaikainen vuokrasopimus, liiketilan vuokra,
  alivuokraus, jälleenvuokraus.
---

# Vuokrasopimukset — asuin- ja liikehuoneistot

Tämä skill jäsentää vuokrasuhteen elinkaaren molemmista näkökulmista
(vuokranantaja ja vuokralainen). **Ensimmäinen rajanveto:
asuinhuoneisto (AHVL 481/1995) vai liikehuoneisto (LHVL 482/1995)** —
käyttötarkoitus ratkaisee, ja lakien pakottavuus eroaa olennaisesti.
Perusteet: `../kiinteistokauppa/references/kiinteisto-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. AHVL sisältää pakottavia säännöksiä vuokralaisen suojaksi —
> niiden vastainen ehto on tehoton. Katso
> `kiinteistot-ja-asuminen/CLAUDE.md`.

## Tarkista laki lähteestä

Hae AHVL:n/LHVL:n säännökset (irtisanomisajat, vakuuden enimmäismäärä,
purkuperusteet, korotusmenettely) **`juristi:oikeustutkimus`-skillillä**
— älä muistista. Tarkista kummasta laista on kyse ja mikä on
pakottavaa: AHVL suojaa vuokralaista laajasti, LHVL on pitkälti
tahdonvaltainen.

## Sopimuksen laatiminen

Käy ainakin nämä läpi (molemmissa sopimustyypeissä):

1. **Osapuolet ja kohde** — huoneisto, kunto sovittuna
   (alkukatselmus + valokuvat suositeltava), avaimet, autopaikat ja
   varastot erikseen.
2. **Sopimuksen kesto** — toistaiseksi voimassa oleva vai
   määräaikainen. Määräaikainen sitoo molempia koko kauden —
   ennenaikaisen päättämisen seuraamukset ja poikkeukset lähteestä.
   Ketjutetut lyhyet määräaikaiset asumisessa: peruste tarkistettava.
3. **Vuokra ja korotusehto** — korotusmekanismi sovittava
   täsmällisesti (indeksi, prosentti, tasokorotus + ilmoitusmenettely);
   ilman ehtoa korotus vaatii sopimista tai lain menettelyn —
   lähteestä. Indeksiehdon sallittavuus tarkistetaan.
4. **Vakuus** — AHVL:ssä enimmäismäärä `[tarkista lähteestä]`;
   vakuuden kohdistus (kaikki sopimusvelvoitteet vs. vain vuokra) ja
   palautusaika kirjataan.
5. **Kunnossapito ja muutostyöt** — AHVL:n olettama vs. sovittu;
   liiketiloissa vastuunjako ja kuntoluokitus sovitaan vapaammin.
6. **Liikehuoneiston erityisehdot** — käyttötarkoitus ja
   kilpailusuoja, ALV-status (hakeutuminen → `verotus:arvonlisaverotus`),
   ylläpitovuokran erittely, ali- ja jälleenvuokrausoikeus,
   lunastus-/jatko-optiot, sopimussakko.

## Vuokrasuhteen aikana

- **Korotukset**: noudata sovittua mekanismia ja ilmoitusaikoja;
  yksipuolinen korotus ilman ehtoa ei sido.
- **Huoneiston kunto ja korjaukset**: ilmoitusvelvollisuus,
  vuokranalennus käyttöhaitasta (edellytykset lähteestä),
  vuokranantajan pääsy huoneistoon.
- **Häiriöt ja laiminlyönnit**: dokumentointi (varoitus!) ennen
  järeämpiä keinoja.

## Päättäminen — valitse oikea keino

| Keino | Milloin | Huomio |
|---|---|---|
| **Irtisanominen** | toistaiseksi voimassa oleva | irtisanomisajat lähteestä (AHVL: pituus riippuu osapuolesta ja kestosta); asuinhuoneistossa vuokranantajan irtisanomiselle hyvän tavan vaatimukset ja vuokralaisen suoja — lähteestä |
| **Purkaminen** | olennainen sopimusrikkomus (rästit, häiriö, käyttötarkoituksen vastaisuus) | purkuperusteet lähteestä; **varoitus yleensä ensin** — ilman sitä purku kaatuu |
| **Määräajan päättyminen** | määräaikainen | ei jatkamisvelvollisuutta; hiljainen jatkuminen sovittava/estettävä |
| **Häätö** | vuokralainen ei poistu | tuomio + ulosotto → `insolvenssi:saatavien-perinta` ja `riidanratkaisu:haastehakemus`; omatoiminen häätö on kielletty |

Rästitilanteessa jäsennä kokonaisuus: maksusuunnitelma vs. purku,
vakuuden käyttö, perintä — ja asumisneuvonnan mahdollisuus
asuinvuokrissa.

## Mitä tämä skill EI tee

- **Ei laadi AHVL:n pakottavien säännösten vastaisia ehtoja** —
  tehoton ehto kerrotaan, ei piiloteta sopimukseen.
- **Ei vahvista irtisanomisaikoja, vakuusrajoja tai indeksiehtojen
  sallittavuutta muistista** — lähteestä tai `[tarkista]`.
- **Ei toteuta häätöä eikä omatoimisia keinoja** (lukkojen vaihto,
  irtaimiston pidätys) — täytäntöönpano kuuluu ulosotolle.
- **Ei ota kantaa vuokratasoon** — markkinavuokra ei ole
  oikeuskysymys.
- **Ei käsittele maanvuokraa** (maanvuokralaki) — eri laki; nosta
  esiin jos kohde on maapohja.

## Jatka tästä

- Vuokrarästien perintä ja häädön täytäntöönpano → /insolvenssi:saatavien-perinta
- Purku- tai häätöriita tuomioistuimessa → /riidanratkaisu:haastehakemus
- Taloyhtiön ja osakkaan suhde vuokrakohteessa → /kiinteistot-ja-asuminen:asunto-osakeyhtio
- Liiketilan ALV-hakeutuminen → /verotus:arvonlisaverotus
- Säännöksen tarkistus lähteestä → /juristi:oikeustutkimus
- Sopimusluonnoksen kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
