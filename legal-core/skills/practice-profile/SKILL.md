---
name: practice-profile
description: >
  Plugarikokoelman räätälöinti organisaation omiin käytäntöihin. Käytä
  tätä skilliä, kun käyttäjä haluaa mukauttaa, konfiguroida tai
  personoida agent-skills-for-finnish-law-plugarit oman toimiston,
  yrityksen, viraston tai kunnan käytäntöihin: vakiolausekkeet ja
  mallipohjat, riskilinjaukset, sovellettavat työehtosopimukset, talon
  kirjoitustyyli, toimialarajaukset tai vakiomuotoilut. Triggeröi
  sanoista: räätälöi, mukauta, konfiguroi, käytäntöprofiili, talon tapa,
  meidän pohjat, toimiston käytännöt, organisaation linjaukset, aseta
  oletukset, personointi.
---

# Käytäntöprofiili — kokoelman räätälöinti organisaatiolle

Jokaisen plugarin `CLAUDE.md` päättyy osioon **"Käytäntöprofiili
(valinnainen)"**, joka on oletuksena tyhjä. Tämä skill täyttää sen:
haastattelee organisaation käytännöt ja kirjoittaa ne profiiliksi, jonka
plugarin skillit lukevat jokaisessa tehtävässä. Näin "talon tapa" elää
yhdessä paikassa eikä sitä tarvitse toistaa joka kehotteessa.

> **Vastuuvapaus:** profiili tallentaa organisaation omia linjauksia —
> skill ei keksi niitä eikä arvioi niiden viisautta. Linjausten
> oikeellisuudesta vastaa organisaatio. Profiili ei ohita lakia: jaetut
> suojaukset (lähdekuri, pakottava lainsäädäntö, negatiivirajaukset)
> pätevät aina profiilin sisällöstä riippumatta.

## Periaatteet

1. **Kysy, älä keksi.** Profiiliin kirjataan vain käyttäjän antamia
   tietoja. Puuttuva tieto jätetään pois — skillit kysyvät sen
   tarvittaessa käyttöhetkellä.
2. **Profiili täydentää, ei korvaa.** Suojausosioita (vastuuvapaus,
   lähdekuri, negatiivirajaukset) ei muokata eikä heikennetä — profiili
   kirjoitetaan vain `## Käytäntöprofiili` -otsikon alle.
3. **Ei salaisuuksia profiiliin.** Asiakasnimiä, käynnissä olevien
   toimeksiantojen tietoja tai henkilötietoja ei tallenneta —
   profiili on pysyväisluonteinen konfiguraatio, ei juttukansio
   (juttukohtaiset tiedot → `engagement-intake`-skillin työtila).
4. **Versioi.** Profiilimuutos on muutos plugarin tiedostoon —
   suosittele git-versiointia tai päivämäärämerkintää.

## Vaihe 1: Haastattelu (yhdessä erässä, organisaation mukaan)

Kysy vain ne osiot, jotka ovat organisaatiolle relevantteja:

**Kaikille:**
- Organisaation tyyppi ja toimiala (asianajotoimisto, yrityksen
  lakiosasto, virasto, kunta, järjestö) — ja kenen näkökulmasta
  skillien tulee oletuksena kirjoittaa.
- Kirjoitustyyli: asiakirjapohjien kieli, allekirjoitustiedot,
  vakiodisclaimer.
- Tarkistusketju: kuka hyväksyy luonnokset (esim. "osakas tarkistaa
  aina 🔴-luokitellut").

**Sopimustyötä tekeville (`contracts`, `company-law`):**
- Vakiolausekkeet ja mallipohjat (vastuunrajaus, riidanratkaisu,
  salassapito) ja missä ne sijaitsevat.
- Riskilinjaukset: mitä ei hyväksytä ilman eskalointia
  (esim. rajoittamaton vastuu, vieras lainvalinta).

**Työnantajille (`employment-law`, `immigration-law`):**
- Sovellettavat työehtosopimukset ja henkilöstöpolitiikan vakiokohdat.

**Julkiselle sektorille (`administrative-law`, `public-procurement`,
`legislative-consultation`):**
- Toimivaltarajat ja delegoinnit, hankintaohje, lausuntojen
  hyväksymisketju ja lausunnonantajaprofiili.

**Compliance-toiminnoille (`data-protection`, `banking-and-finance`,
`competition-law`):**
- Valvojat, ilmoituskanavat, compliance-vastuuhenkilöt.

## Vaihe 2: Kirjoita profiilit

1. Tunnista asennetut plugarit ja niiden `CLAUDE.md`-tiedostojen polku
   (asennuksessa plugarin hakemisto; kehityksessä repon hakemisto).
   Jos et voi kirjoittaa plugarin tiedostoihin, tuota profiilisisältö
   käyttäjälle liitettäväksi.
2. Kirjoita kunkin relevantin plugarin `CLAUDE.md`:n
   `## Käytäntöprofiili` -osioon jäsennelty profiili:

```markdown
## Käytäntöprofiili

<!-- Päivitetty: VVVV-KK-PP, päivittäjä: NN -->

### Organisaatio ja näkökulma
- ...

### Mallipohjat ja vakiolausekkeet
- <nimi>: <sijainti> — käytä tätä pohjana, kun ...

### Riskilinjaukset ja eskalointi
- ...
```

3. **Älä koske muihin osioihin** — vain Käytäntöprofiili-otsikon alle.
4. Näytä käyttäjälle yhteenveto kirjoitetuista profiileista ja muistuta
   versioinnista.

## Vaihe 3: Ylläpito

- Profiilin päivitys = sama prosessi; vanha sisältö näytetään ja
  muutos vahvistetaan ennen ylikirjoitusta.
- Suosittele vuosikatselmusta: ovatko TES:t, pohjat ja linjaukset
  ajan tasalla (kytke `agent-recipes/statute-watch` seuraamaan
  profiilissa mainittuja säädöksiä).

## Mitä tämä skill EI tee

- **Ei keksi linjauksia tai pohjia** — vain käyttäjän antamat tiedot
  tallennetaan.
- **Ei heikennä suojauksia** — vastuuvapaus-, lähdekuri- ja
  negatiivirajausosiot eivät ole muokattavissa profiililla, eikä
  profiiliin kirjata ohjeita, jotka ohittaisivat ne.
- **Ei tallenna asiakas- tai henkilötietoja** eikä käynnissä olevien
  toimeksiantojen tietoja.
- **Ei arvioi linjausten oikeudellista kestävyyttä** — jos linjaus
  vaikuttaa lain vastaiselta (esim. pakottavan säännöksen ohitus),
  skill nostaa sen esiin eikä tallenna sellaisenaan.
- **Ei jaa profiilia organisaation ulkopuolelle.**

## Jatka tästä

- Yksittäisen toimeksiannon työtila ja määräajat → /juristi:toimeksianto
- Profiilissa mainittujen säädösten muutosseuranta → agent-recipes/statute-watch
- Mallipohjan laaduntarkistus ennen profiiliin kirjaamista → /juristi:asiakirjan-tarkistus
