---
name: competition-compliance
description: >
  Kilpailuoikeudellinen compliance ja viranomaistarkastuksiin
  varautuminen Suomessa. Käytä tätä skilliä, kun organisaatio rakentaa
  tai päivittää kilpailu-compliance-ohjelmaa, laatii pelisääntöjä
  kilpailijakontakteille, toimialajärjestötoiminnalle tai
  tietojenvaihdolle, varautuu KKV:n tai komission yllätystarkastukseen
  (dawn raid) tai on tarkastuksen kohteena, kouluttaa henkilöstöä
  kilpailusäännöistä tai arvioi julkisyhteisön elinkeinotoiminnan
  kilpailuneutraliteettia. Triggeröi sanoista: kilpailu-compliance,
  compliance-ohjelma, dawn raid, yllätystarkastus, KKV:n tarkastus,
  toimialajärjestö, kilpailijatapaaminen, tietojenvaihto-ohje,
  kilpailuneutraliteetti, kuntayhtiö, sisäinen tutkinta.
---

# Kilpailu-compliance ja tarkastusvalmius

Tämä skill rakentaa ennaltaehkäisyn: compliance-ohjelman,
pelisäännöt ja tarkastusvalmiuden. Perusteet ja rikkomustyypit:
`../restrictive-practices/references/competition-law-fundamentals.md`.

> **Vastuuvapaus:** ohjeluonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. Compliance-ohjelma ei suojaa, ellei sitä
> noudateta ja valvota. Katso `competition-law/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista lähteet

Hae kilpailulain menettelysäännökset (tarkastusvaltuudet 5 luvusta)
**`legal-core:legal-research`-skillillä** ja KKV:n ohjeet
(tarkastukset, leniency) `[tarkista]`. Komission tarkastuskäytäntö
EU-asioissa erikseen.

## Compliance-ohjelman rakentaminen

Mitoita riskiin — kartellialttiit toiminnot (myynti, hankinta,
hinnoittelu, järjestötoiminta) ensin:

1. **Riskikartoitus**: missä kilpailijakontaktit syntyvät
   (järjestöt, messut, ex-kollegat, yhteishankkeet, benchmarkkaus);
   markkina-asema (määräävän aseman lisäriskit); julkisomisteisilla
   kilpailuneutraliteetti (4 a luku, otsikko vahvistettu).
2. **Pelisäännöt** (laadi konkreettiset ohjeet):
   - **Kilpailijakontaktit**: sallitut ja kielletyt aiheet; "nouse ja
     poistu, kirjaa pöytäkirjaan" -ohje kielletyn aiheen noustessa.
   - **Toimialajärjestöt**: esityslistat etukäteen, juristi tarvittaessa
     mukaan, tilastot vain aggregoituina ja historiallisina —
     kriteerit suuntaviivoista lähteestä.
   - **Tietojenvaihto**: mitä ei jaeta koskaan (tulevat hinnat,
     kapasiteetti, strategia); clean team -mallit yrityskauppojen ja
     yhteistarjousten valmisteluun.
   - **Dokumentaatiokuri**: sisäisten dokumenttien kieli ("tapetaan
     kilpailu" -retoriikka päätyy tarkastuksessa näytöksi).
3. **Koulutus ja sitouttaminen**: riskiroolit ensin; tapauspohjainen
   koulutus tehoaa parhaiten — laadi esimerkkitilanteet organisaation
   arjesta.
4. **Valvonta ja reagointi**: ilmoituskanava (huom.
   ilmoittajansuojelu), sisäisen tutkinnan polku, leniency-valmius
   (kuka päättää, kuinka nopeasti — ensimmäisen paljastajan etu).

## Dawn raid -valmius

Laadi organisaatiolle tarkastusohje (yksi sivu vastaanottoon, laajempi
juristeille):

1. **Tarkastuksen alkaessa**: tarkasta valtuutus ja kohde, kutsu
   juristi heti (tarkastus ei odota juristia — yhteistyö alkaa silti),
   nimeä saattajat jokaiselle tarkastajalle, informoi johto.
2. **Velvollisuudet ja oikeudet**: tarkastuksen estäminen tai
   aineiston hävittäminen on itsenäinen rikkomus (seuraamusmaksu) —
   **älä koskaan ohjeista hävittämään mitään**; oikeus
   asianajajasalaisuuden piiriin kuuluvan aineiston suojaan
   (legal privilege — laajuus EU/kansallinen eroaa, tarkista) ja
   itsekriminointisuojan rajat lähteestä.
3. **Käytännöt**: kopiot siitä mitä viedään, tarkastuskertomus,
   sinetöidyt tilat (sinetin rikkominen = ankara seuraamus),
   jatkotoimet ja viestintä (sisäinen ja tarvittaessa pörssitiedote).
4. **Harjoittele**: pöytäharjoitus vuosittain; vastaanoton ja IT:n
   roolit (sähköisen aineiston kopiointi, etädata).

## Kilpailuneutraliteetti (4 a luku)

Julkisyhteisön (kunta, hyvinvointialue, valtio) elinkeinotoiminnassa:
markkinaperusteinen hinnoittelu, kirjanpidon eriyttäminen ja
yhtiöittämisvelvollisuus kilpailutilanteessa markkinoilla —
edellytykset lähteestä. KKV:n ensisijainen keino on neuvottelu,
viime kädessä kielto. Kytkös kuntayhtiöihin →
`company-law:corporate-governance`.

## Mitä tämä skill EI tee

- **Ei anna ohjelmalle "hyväksyntää"** — compliance-ohjelma ei sido
  viranomaista eikä automaattisesti alenna seuraamuksia.
- **Ei avusta todisteiden hävittämisessä tai tarkastuksen
  vaikeuttamisessa** — ehdoton kieltäytyminen; ohje on päinvastainen.
- **Ei tee sisäistä tutkintaa käyttäjän puolesta** — se jäsentää
  tutkinnan vaiheet ja leniency-punninnan `[varmista —
  kilpailujuristin arvioitava]`.
- **Ei vahvista privilege-suojan laajuutta tai määräaikoja
  muistista** — lähteestä tai `[tarkista]`.
- **Ei korvaa tietosuoja-arviota** sisäisessä tutkinnassa
  (työntekijöiden viestit) → `data-protection`.

## Jatka tästä

- Epäilyttävän järjestelyn aineellinen arvio → /kilpailuoikeus:kilpailunrajoitukset
- Yrityskaupan valmistelun pelisäännöt → /kilpailuoikeus:yrityskauppavalvonta
- Tarjousyhteistyö hankinnoissa → /julkiset-hankinnat:tarjouspyynto-ja-tarjous
- Sisäisen tutkinnan tietosuoja → /tietosuoja:tietosuoja-arviointi
- Säännöksen tai KKV-ohjeen tarkistus → /juristi:oikeustutkimus
