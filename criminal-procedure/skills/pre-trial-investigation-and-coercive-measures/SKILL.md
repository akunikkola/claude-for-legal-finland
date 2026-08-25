---
name: pre-trial-investigation-and-coercive-measures
description: >
  Esitutkinta ja pakkokeinot Suomen rikosprosessissa (esitutkintalaki
  805/2011, pakkokeinolaki 806/2011) avustajan näkökulmasta. Käytä tätä
  skilliä, kun päämies on saanut kutsun kuulusteluun tai tiedon
  rikosepäilystä, valmistaudutaan kuulusteluun, arvioidaan pidätyksen tai
  vangitsemisvaatimuksen edellytyksiä, kotietsinnän tai takavarikon
  laillisuutta, laaditaan loppulausuntoa tai pyydetään tutkintatoimia tai
  esitutkinnan rajoittamista. Käytä myös asianomistajan avustamiseen
  esitutkinnassa. Triggeröi sanoista: esitutkinta, kuulustelu, rikosepäily,
  epäilty, kiinniotto, pidätys, vangitseminen, kotietsintä, takavarikko,
  matkustuskielto, salainen pakkokeino, loppulausunto, tutkinnanjohtaja.
---

# Esitutkinta ja pakkokeinot — avustajan työkalu

Tämä skill jäsentää esitutkintavaiheen ja pakkokeinotilanteet avustajan
näkökulmasta. Perusteet, prosessikaari ja pakkokeinokartta:
`references/criminal-procedure-fundamentals.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** tuotokset ovat avustajan työn tukea — ei
> puolustautumisohjeita ilman avustajaa. Jos käyttäjä on itse epäiltynä
> ilman avustajaa: **ensimmäinen neuvo on hankkia avustaja ennen
> kuulustelua** (oikeusapu 257/2002; puolustajan määrääminen ROL:n
> mukaan). Katso `criminal-procedure/AGENTS.md` — erityisesti negatiivirajaus
> ja itsekriminointisuoja.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae ETL:n ja PKL:n säännökset (kuulustelun menettely, pakkokeinojen
edellytykset, määräajat) **`legal-core:legal-research`-skillillä**. Epäillyn
rikoksen tunnusmerkistö ja asteikko haetaan rikoslaista (39/1889)
lähteestä — asteikko vaikuttaa pakkokeinojen käytettävyyteen.

## Vaihe 1: Tilannekuva heti

- **Mikä epäily?** Rikosnimike, tekoaika ja -kuvaus; epäillyn asema
  (epäilty / todistaja / asianomistaja — asema voi muuttua, ja
  todistajana kuultavalla ei ole samoja oikeuksia).
- **Missä vaiheessa tutkinta on?** Vapaudenmenetys käynnissä?
  Vangitsemiskäsittely tulossa `[ajat — tarkista lähteestä]`?
- **Määräajat ja kiireellisyys** → `legal-core:engagement-intake`
  (määräaikaskannaus, esteellisyysmuistilista — useamman epäillyn
  edustaminen vaatii eturistiriita-arvion).

## Vaihe 2: Kuulusteluvalmistautuminen

Jäsennä avustajalle (älä rakenna kertomusta päämiehen puolesta):

- **Oikeudet kirkkaiksi**: avustaja kuulustelussa, itsekriminointisuoja
  ja vaikenemisoikeus, oikeus saada tieto epäilyn sisällöstä, tulkkaus.
- **Linjavalinta on päämiehen ja avustajan** — kertomus, vaikeneminen
  tai osittainen lausuma; skill listaa kunkin oikeudelliset seuraukset
  (mm. tunnustuksen vaikutus, ks. tuomioesitys →
  `charges-and-response`).
- **Mitä EI tehdä**: kertomusten sovittaminen muiden kanssa, todisteisiin
  koskeminen, yhteydenotot todistajiin — kieltäydy avustamasta näissä ja
  kerro rikosoikeudellinen riski.
- Kuulustelupöytäkirjan tarkastaminen ja korjaukset ennen
  allekirjoitusta.

## Vaihe 3: Pakkokeinotilanteet

Kun pakkokeino on käytetty tai uhkaa:

1. **Tunnista keino ja päättäjä** (pakkokeinokartta referenssissä).
2. **Edellytysten arviointi**: rikosepäilyn vahvuus, asteikkokynnys
   `[tarkista lähteestä]`, erityiset edellytykset (sotkemis-, pako-,
   jatkamisvaara), **suhteellisuus ja vähimmän haitan periaate**.
3. **Oikeusturvakeinot**: vangitsemisasian käsittely ja
   uudelleenkäsittely, kantelu, etsinnän saattaminen tuomioistuimen
   tutkittavaksi, takavarikon kumoamisvaatimus — keinot ja määräajat
   lähteestä.
4. **Vangitsemiskäsittelyyn valmistautuminen**: vaihtoehtojen
   esittäminen (matkustuskielto), epäilyn ja erityisten edellytysten
   riitauttaminen, kohtuullisuus.

## Vaihe 4: Aktiivinen puolustus esitutkinnassa

- **Tutkintapyynnöt**: epäillyllä on oikeus pyytää tutkintatoimia, jotka
  voivat puhua hänen puolestaan (ETL:n tasapuolisuusperiaate) — laadi
  yksilöity pyyntö.
- **Esitutkinnan rajoittaminen tai päättäminen**: jäsennä perusteet
  (ei rikosta, ei näyttöä, kustannusperuste — edellytykset lähteestä)
  esitykseksi tutkinnanjohtajalle/syyttäjälle.
- **Loppulausunto**: tehokkain kirjallinen vaikutuspaikka ennen
  syyteharkintaa — jäsennä: näytön aukot, vaihtoehtoiset
  tapahtumainkulut, tunnusmerkistön täyttymättömyys, menettelyvirheet
  ja niiden vaikutus hyödynnettävyyteen, syyteharkintaan vaikuttavat
  seikat. Sido jokainen väite esitutkinta-aineiston kohtaan.

## Asianomistajan avustaminen esitutkinnassa

- Rikosilmoituksen täydentäminen ja yksilöinti; asianomistajan
  kuulusteluun valmistautuminen.
- **Vaatimusten varhainen kirjaaminen**: korvausvaatimusten perusteet ja
  pyyntö syyttäjälle vaatimuksen ajamisesta → `injured-party-rights`.
- Avustajan ja tukihenkilön määräämisen edellytykset lähteestä.

## Mitä tämä skill EI tee

- **Ei korvaa puolustajaa eikä anna puolustautumisohjeita ilman
  avustajaa** — se tukee avustajan työtä.
- **Ei rakenna kertomuksia, selityksiä tai alibeja** — se jäsentää
  oikeudet, menettelyn ja aineiston.
- **Ei avusta todisteiden hävittämisessä, todistajiin vaikuttamisessa
  tai pakoilussa** — ehdoton kieltäytyminen (CLAUDE.md).
- **Ei vahvista asteikkoja, kynnyksiä tai määräaikoja muistista** —
  lähteestä tai `[tarkista]`.
- **Ei arvioi syyllisyyttä** — se arvioi näyttöä, menettelyä ja
  edellytyksiä syyttömyysolettaman pohjalta.

## Jatka tästä

- Syyteharkinnan jälkeen: vastaus ja pääkäsittely → /rikosprosessi:syyte-ja-vastaus
- Asianomistajan vaatimukset → /rikosprosessi:asianomistajan-asema
- Tunnusmerkistön tai pakkokeinosäännöksen tarkistus → /juristi:oikeustutkimus
- Toimeksiannon aloitus ja esteellisyys → /juristi:toimeksianto
- Loppulausunnon kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
