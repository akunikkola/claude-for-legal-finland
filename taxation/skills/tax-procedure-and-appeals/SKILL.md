---
name: tax-procedure-and-appeals
description: >
  Verotusmenettely ja muutoksenhaku verotukseen Suomessa (laki
  verotusmenettelystä 1558/1995). Käytä tätä skilliä, kun käyttäjä on saanut
  verotuspäätöksen, jälkiverotus- tai veronkorotuspäätöksen tai
  verotarkastuskertomuksen ja harkitsee muutoksenhakua, laatii
  oikaisuvaatimusta verotuksen oikaisulautakunnalle tai valitusta
  hallinto-oikeuteen tai KHO:hon, valmistelee ennakkoratkaisuhakemusta
  (Verohallinto tai keskusverolautakunta), tai vastaa Verohallinnon
  selvityspyyntöön tai kuulemiskirjeeseen. Triggeröi sanoista:
  verotuspäätös, oikaisuvaatimus, verovalitus, jälkiverotus, veronkorotus,
  verotarkastus, selvityspyyntö, ennakkoratkaisu, KVL, veronsaajien
  oikeudenvalvontayksikkö, täytäntöönpanon keskeytys.
---

# Verotusmenettely ja muutoksenhaku

Tämä skill jäsentää verotusmenettelyn vaiheet ja laatii muutoksenhaun
asiakirjaluonnokset. Perusteet ja muutoksenhaun portaat:
`references/tax-fundamentals.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei veroneuvontaa.
> Määräajat ja euromäärät haetaan lähteestä; kalenterivastuu ja
> ilmoitusvastuu ovat ihmisellä. Katso `taxation/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki ja määräajat lähteestä

Hae VML:n (1558/1995) sovellettavat säännökset ja **erityisesti
määräajat** (oikaisuvaatimus VML 64 §, valitusajat, Verohallinnon
muutosvaltuudet) **`legal-core:legal-research`-skillillä**. Verovuosi
ratkaisee sovellettavan version — tarkista, minkä vuoden verotuksesta on
kyse. KHO:n vuosikirjakäytäntö haetaan lähteestä tunnuksineen.

## Vaihe 1: Tilannekuva

Selvitä ennen toimenpiteitä:

- **Mikä päätös ja miltä verovuodelta?** Säännönmukainen verotus,
  verotuksen oikaisu verovelvollisen vahingoksi, veronkorotus,
  ennakkoratkaisu — kullakin oma muutoksenhakupolku.
- **Missä vaiheessa prosessi on?** Selvityspyyntö/kuuleminen (vielä
  vaikutettavissa ennen päätöstä!), päätös annettu, valitusaika
  kulumassa `[mallin laskelma — tarkista]`.
- **Intressi ja näyttö** — riidanalainen euromäärä, käytettävissä oleva
  dokumentaatio, Verohallinnon perustelujen heikot kohdat.
- **Täytäntöönpano** — erääntyykö vero muutoksenhausta huolimatta;
  tarvitaanko täytäntöönpanon kielto/keskeytys (edellytykset lähteestä).

## Vaihe 2: Vastaus selvityspyyntöön tai kuulemiseen

Tehokkain vaikuttamisen paikka on **ennen päätöstä**:

- Vastaa täsmällisesti kysyttyyn; älä avaa uusia rintamia.
- Dokumentoi tosiseikat liitteillä; erottele tosiseikat ja oikeudellinen
  arvio.
- Liiketaloudelliset perusteet näkyviin, jos järjestelyä epäillään
  veron kiertämiseksi (VML 28 §) tai peitellyksi osingoksi (VML 29 §).
- Veronkorotusriski (VML 32 §): oma-aloitteinen virheen korjaaminen ja
  myötävaikutus lieventävät — nosta tämä esiin.

## Vaihe 3: Oikaisuvaatimus

Laadi rakenteella:

1. **Päätös, johon haetaan muutosta** (verovuosi, päätöspäivä, tunnus).
2. **Vaatimukset** — täsmällisesti euroina ja veroperusteina.
3. **Perusteet** — tosiseikat, näyttö, oikeudellinen arviointi
   (säännökset + KHO-käytäntö lähteestä, kolmiportainen varmuusmerkintä).
4. **Liitteet** ja valtuutus.

Muista: oikaisulautakunta on pakollinen ensiaste tuloverotuksessa —
suoraan hallinto-oikeuteen ei pääsääntöisesti voi valittaa. VOVA voi
hakea muutosta myös verovelvollisen eduksi tehtyyn päätökseen —
varaudu vastapuoleen.

## Vaihe 4: Valitus hallinto-oikeuteen ja KHO:hon

- Hallintoprosessin yleiset opit: `administrative-law:administrative-appeal`
  (808/2019). Tämä skill tuo verospesifit osat: vaatimusten
  veroperusteinen yksilöinti, näyttötaakan jako, KHO:n
  valituslupaperusteet verotuksessa.
- KVL:n ennakkoratkaisusta valitetaan suoraan KHO:hon.

## Ennakkoratkaisu — epävarmuuden hallinta etukäteen

Kun verokohtelu on tulkinnanvarainen ja toteutus edessä:

- **Verohallinnon ennakkoratkaisu** — yksittäisen verovelvollisen asia.
- **KVL:n ennakkoratkaisu** — periaatteellisesti merkittävät kysymykset.
- Hakemuksen ydin: **täsmällinen kysymys, täydellinen tosiseikasto ja
  suunniteltu toteutus** — ennakkoratkaisu sitoo vain kuvatuissa
  olosuhteissa. Laadi hakemus niin, ettei olennaista jää kertomatta;
  puutteellinen tosiseikasto vie sitovuuden.

## Mitä tämä skill EI tee

- **Ei laske veron määrää sitovasti** eikä täytä veroilmoituksia —
  laskelmat ovat `[mallin laskelma — tarkista]`.
- **Ei vahvista määräaikoja, korkoja tai euromääriä muistista** —
  lähteestä tai `[tarkista verovuoden arvo — vero.fi]`.
- **Ei takaa lopputulosta** — vain sitova ennakkoratkaisu sitoo
  Verohallintoa.
- **Ei avusta tulojen salaamisessa tai ilmoitusvelvollisuuden
  kiertämisessä** — ks. AGENTS.md negatiivirajaus.
- **Ei jätä hakemuksia tai valituksia** — ihminen allekirjoittaa ja
  vastaa määräajoista.

## Jatka tästä

- Säännöksen tai KHO-ratkaisun tarkistus lähteestä → /juristi:oikeustutkimus
- Aineellinen yritysverokysymys riidan taustalla → /verotus:yritysverotus
- ALV-kysymys riidan taustalla → /verotus:arvonlisaverotus
- Hallintoprosessin yleiset vaatimukset → /hallinto-oikeus:muutoksenhaku
- Oikaisuvaatimuksen kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
