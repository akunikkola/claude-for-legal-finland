---
name: procurement-planning
description: >
  Julkisen hankinnan suunnittelu ja menettelyn valinta hankintalain
  (1397/2016) mukaan. Käytä tätä skilliä, kun hankintayksikkö suunnittelee
  kilpailutusta: soveltuuko hankintalaki, mikä on ennakoitu arvo ja
  ylittyykö kansallinen tai EU-kynnysarvo, mikä menettely valitaan (avoin,
  rajoitettu, neuvottelumenettely, puitejärjestely, dynaaminen järjestelmä),
  onko suorahankinnalle perustetta, miten markkinakartoitus ja
  hankintailmoitus Hilmassa tehdään. Käytä myös kun tarjoaja arvioi, onko
  hankinta kilpailutettu oikein. Triggeröi sanoista: kilpailutus,
  hankintalaki, kynnysarvo, ennakoitu arvo, hankintamenettely,
  suorahankinta, puitejärjestely, markkinakartoitus, Hilma,
  hankintailmoitus, pienhankinta, pilkkominen.
---

# Hankinnan suunnittelu — soveltamisala, arvo ja menettely

Tämä skill jäsentää hankinnan suunnitteluvaiheen päätökset hankintalain
(1397/2016) mukaan. Perusteet, menettelykartta ja periaatteet:
`references/procurement-fundamentals.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** suunnitelmat ja luonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. Hankintapäätökset tekee toimivaltainen
> viranomainen. Katso `public-procurement/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki ja kynnysarvot lähteestä

Hae hankintalain säännökset **`legal-core:legal-research`-skillillä** ja
**voimassa olevat kynnysarvot lähteestä** (Finlex, Hilma, TEM) — EU-arvot
tarkistetaan kahden vuoden välein. Erityisaloilla (vesi, energia,
liikenne, posti) tarkista ensin, sovelletaanko erityisalojen
hankintalakia (1398/2016).

## Vaihe 1: Soveltuuko hankintalaki?

- **Onko hankkija hankintayksikkö?** Rajatapaukset (julkisoikeudellinen
  laitos, tuettu hankinta, sidosyksikkö/in-house ja
  horisontaaliyhteistyö) tarkistetaan lähteestä — sidosyksikköaseman
  edellytykset ja ulosmyyntirajat ovat muuttuneet.
- **Onko kyse hankintasopimuksesta?** Vastikkeellinen tavara-, palvelu-
  tai rakennusurakkasopimus vs. avustus, vuokra tai oma tuotanto.
- **Poikkeukset** soveltamisalasta (mm. tietyt palvelut) lähteestä.

## Vaihe 2: Ennakoitu arvo ja kynnysarvot

1. Laske **ennakoitu arvo**: koko sopimuskausi optioineen ja
   jatkomahdollisuuksineen, ilman arvonlisäveroa; puitejärjestelyssä
   kaikkien suunniteltujen hankintojen arvo.
2. Vertaa **kansalliseen ja EU-kynnysarvoon** `[tarkista voimassa olevat
   arvot — Hilma/TEM]` — taso ratkaisee sovellettavat menettelysäännöt.
3. **Pilkkomiskielto**: erien jakaminen tai laskentatavan valinta lain
   välttämiseksi on kielletty. Erillisten hankintojen vs. yhden
   kokonaisuuden rajanveto perustellaan ja dokumentoidaan.
4. Kynnysarvon alittuessa kyse on **pienhankinnasta**: lain
   menettelysäännöt eivät sovellu, mutta periaatteet ja organisaation
   hankintaohje kyllä.

## Vaihe 3: Markkinakartoitus

Ennen kilpailutusta saa — ja usein kannattaa — kartoittaa markkinaa ja
käydä teknistä vuoropuhelua. Rajat: vuoropuheluun osallistuminen ei saa
antaa toimittajalle etua kilpailutuksessa (tasapuolisuus), ja saadun
tiedon käyttö dokumentoidaan. Tuota kartoitussuunnitelma: kysymykset,
osallistujat, tietopyyntö (RFI) ja sen julkaisu Hilmassa.

## Vaihe 4: Menettelyn valinta

Käy menettelykartta (`references/procurement-fundamentals.md`) läpi hankinnan
luonteen mukaan ja perustele valinta:

- **Avoin tai rajoitettu** — selkeät, määriteltävissä olevat hankinnat.
- **Neuvottelumenettelyt** — käyttöedellytykset (räätälöinti,
  suunnittelu, aiempi tulokseton kilpailutus ym.) tarkistetaan
  lähteestä ja dokumentoidaan.
- **Puitejärjestely tai dynaaminen järjestelmä** — toistuvat hankinnat;
  kesto- ja käyttörajat lähteestä.
- **Suorahankinta** — perusteet ovat suppeita ja tyhjentäviä (mm. vain
  yksi mahdollinen toimittaja, äärimmäinen kiire, jota hankintayksikkö
  ei ole itse aiheuttanut). Käy peruste läpi lähteestä, dokumentoi se ja
  kerro seuraamusriski; harkitse vapaaehtoista
  suorahankintailmoitusta, joka käynnistää valitusajan.

## Vaihe 5: Aikataulu ja ilmoittaminen

- **Hankintailmoitus Hilmaan** (EU-hankinnoissa TED) — ilmoittamatta
  jättäminen on vakavimpia hankintavirheitä.
- Vähimmäismääräajat tarjouksille ja osallistumishakemuksille
  menettelyittäin `[tarkista lähteestä]`; varaa todellinen aika
  kysymyksille ja vastauksille.
- Suunnittele koko polku taaksepäin sopimuksen tavoiteajankohdasta:
  vertailu, päätös, odotusaika, mahdollinen muutoksenhaku.

## Mitä tämä skill EI tee

- **Ei vahvista kynnysarvoja, määräaikoja tai prosentteja muistista** —
  lähteestä tai `[tarkista]`.
- **Ei tee hankintapäätöstä eikä julkaise ilmoituksia** — luonnokset
  menevät toimivaltaiselle.
- **Ei räätälöi hankintaa yhdelle toimittajalle** eikä auta
  pilkkomaan hankintaa lain välttämiseksi — kieltäydy ja kerro riski.
- **Ei arvioi tarjousten sisältöä** — se kuuluu vertailuvaiheeseen
  (→ tarjouspyyntö-skill).
- **Ei korvaa organisaation hankintaohjetta ja toimivaltasääntöjä** —
  tarkista ne käytäntöprofiilista tai kysy.

## Jatka tästä

- Tarjouspyynnön laatiminen valitulle menettelylle → /julkiset-hankinnat:tarjouspyynto-ja-tarjous
- Päätös, odotusaika ja muutoksenhakuriski → /julkiset-hankinnat:hankintapaatos-ja-muutoksenhaku
- Säännöksen tai MAO-käytännön tarkistus → /juristi:oikeustutkimus
- Hankintasopimuksen lausekkeet → /sopimukset:sopimuksen-laatiminen
- Tekoälyjärjestelmän hankinnan erityisvaatimukset → /tekoalysaantely:tekoaly-velvoitteet
