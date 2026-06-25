---
name: oikeustutkimus
description: >
  Suomalaisen voimassa olevan lainsäädännön ja oikeuskäytännön haku, lukeminen ja
  oikea viittaaminen oik.ai-, laki.ai- tai Finlex-MCP:n avulla. Käytä tätä skilliä AINA kun
  tarvitaan ajantasaista lakitekstiä, pykälän sisältö, KKO:n tai KHO:n ennakkopäätös,
  hovioikeuden, markkinaoikeuden, työtuomioistuimen tai vakuutusoikeuden ratkaisu,
  hallituksen esityksen perusteluja, tai kun käyttäjä kysyy "mitä laki sanoo",
  "onko tästä oikeuskäytäntöä", "mikä on voimassa oleva pykälä", viittaa
  säädösnumeroon (esim. 410/2015) tai ratkaisutunnukseen (KKO:2024:15). Triggeröi
  myös aina ennen kuin lainaat pykälää tai oikeustapausta muistista – tarkista se
  ensin lähteestä.
---

# Oikeustutkimus — voimassa oleva laki ja oikeuskäytäntö lähteestä

Tämä skill varmistaa, että juridiset väitteet perustuvat **todelliseen, voimassa olevaan** lakitekstiin ja **oikeisiin** tuomioistuinratkaisuihin — ei mallin muistiin. Suomen lainsäädäntö muuttuu jatkuvasti, ja muistinvaraiset pykälät ja ratkaisutunnukset menevät usein pieleen. Hae lähde aina kun voit.

> **Perusperiaate:** ennen kuin lainaat pykälän, säädösnumeron tai oikeustapauksen, hae se lähteestä. Jos lähdettä ei ole saatavilla, merkitse väite muistinvaraiseksi äläkä esitä sitä varmistettuna. Katso `juristi/CLAUDE.md` → *Ajantasaisuuden pakko*.

---

## Käytettävät työkalut

Tämä skill käyttää **oik.ai-MCP:tä** tai vaihtoehtoisesti **laki.ai-MCP:tä** (tai muuta vastaavaa Finlex-MCP:tä). Molemmat tuovat saman: ajantasaisen lain, oikeuskäytännön ja esityöt lähteestä — vain työkalujen nimet eroavat. Käytä sitä konnektoria, joka on liitettynä. Tarkemmat hakustrategiat, työkalut ja laki.ai-vastineet: lue `references/tyokalut.md`. Asennus: juuren `QUICKSTART.md`.

| Työkalu | Käyttö |
|---|---|
| `get_legislation` | Hae ajantasainen säädös tai sen osa. Parametrit: `year` + `number` (esim. 2015 / 410), valinnaiset `part` / `chapter` / `section`, `language` (`fin`/`swe`). Jätä osat pois → koko laki; pelkkä `chapter` → koko luku. Tukee kirjainpäätteitä (esim. `226b`). |
| `search_decisions` | Hae oikeustapauksia hakusanoilla. Parametrit: `query`, valinnainen `court` (Korkein oikeus, Korkein hallinto-oikeus, Hallinto-oikeudet, Hovioikeudet, Markkinaoikeus, Työtuomioistuin, Vakuutusoikeus), `limit`, `offset`. Palauttaa tekstikatkelmia ja `document_path`-arvon. |
| `get_decision` | Hae ratkaisun koko teksti `document_path`-arvolla, joka saatiin `search_decisions`-haun tuloksesta. |

**Jos MCP ei ole käytettävissä:** kerro käyttäjälle, ettei lähdettä voitu tarkistaa, ja että vastaus perustuu muistiin. Merkitse jokainen lainkohta `[muistinvarainen — tarkista Finlexistä/oik.ai:sta]`. Älä esitä muistinvaraista pykälää varmistettuna.

---

## Työnkulku

### 1. Tunnista, mitä haetaan
- **Tietty pykälä tai laki** → `get_legislation` säädösnumerolla. Jos käyttäjä antaa vain lain nimen, päättele säädösnumero (tarkista hakemalla, älä arvaa numeroa).
- **Oikeudellinen kysymys ilman tunnettua pykälää** → `search_decisions` kuvaavilla hakusanoilla, tarvittaessa `court`-rajauksella; tunnista relevantti laki ratkaisuista ja hae sitten pykälä `get_legislation`-työkalulla.
- **Tietty ennakkopäätös** (esim. KKO:2024:15) → `search_decisions` tunnuksella, sitten `get_decision`.

### 2. Hae ja lue
- Hae **ajantasainen** versio, ei alkuperäistä säädöstä. Tarkista, ettei pykälää ole kumottu tai muutettu.
- Lue varsinainen pykäläteksti — älä tyydy hakukatkelmaan, jos sisältö on olennainen.
- Oikeustapauksissa lue ratkaisun **lopputulos ja perustelut** koko tekstistä (`get_decision`), älä pelkkää otsikkoa tai hakukatkelmaa. Hakukatkelma voi olla harhaanjohtava ilman kontekstia.

### 3. Varmista ajantasaisuus
- Onko laki voimassa? Onko pykälää muutettu äskettäin? Onko siirtymäsäännöksiä?
- Onko ennakkopäätöksen jälkeen tullut uudempaa, tulkintaa muuttavaa käytäntöä?
- Huomioi: Finlexin/oik.ai:n ajantasainen versio voi olla muutaman viikon jäljessä uusimmista muutoksista. Jos asia on tuore, mainitse tämä varaus.

### 4. Viittaa oikein
Käytä vakiintuneita suomalaisia viittausmuotoja (täydet ohjeet: `../juristi/references/viittaukset.md` ja `../juristi/references/lahteet.md`):

- **Säädös**, ensimaininnalla nimi + numero: *kuntalain (410/2015) 7 §:n 1 momentin mukaan…*
- **Ennakkopäätös**: *Korkein oikeus on ratkaisussaan KKO:2024:15 katsonut, että…* / *KHO:2023:42*
- **Alempi tuomioistuin** (ei prejudikaatti): *Helsingin hovioikeuden tuomio 15.3.2024 nro 312 (S 23/1234)*
- **Hallituksen esitys**: *HE 268/2014 vp, s. 145*

### 5. Merkitse lähde
Liitä jokaiseen lainattuun pykälään ja ratkaisuun lähdemerkintä: `(oik.ai)`, `(laki.ai)` tai `(Finlex, ajantasainen)`. Erota selvästi:
- mikä on **suora sisältö lähteestä**,
- mikä on **sinun tulkintasi/yhteenvetosi**, ja
- mikä vaatii **asiantuntijan vahvistuksen** (`[varmista — juristin arvioitava]`).

---

## Mitä EI tehdä

- **Älä keksi** pykälää, säädösnumeroa, momenttia tai ratkaisutunnusta. Jos et löydä, sano se.
- **Älä lainaa** hakukatkelmaa kuin se olisi koko pykälä tai ratkaisun lopputulos.
- **Älä esitä** kumottua tai muutettua säännöstä voimassa olevana.
- **Älä tee** lopullista oikeudellista johtopäätöstä — tuotos on tarkistettava luonnos (`CLAUDE.md` → *Vastuuvapaus*).

---

## Esimerkki

> **Käyttäjä:** Mitä kuntalaki sanoo kunnan toiminta-ajatuksesta ja saako valtuusto delegoida toimivaltaansa?

1. `get_legislation` (year 2015, number 410) → hae relevantit luvut (esim. kunnan tehtävät, toimielimet ja toimivallan siirto).
2. Lue varsinaiset pykälät; poimi toimivallan siirtoa koskeva säännös täsmällisesti.
3. `search_decisions` (query "kunnan toimivallan siirtäminen delegointi", court "Korkein hallinto-oikeus") → tunnista relevantti KHO-käytäntö; `get_decision` koko tekstille.
4. Vastaa: lainaa pykälä lähdemerkinnällä, tiivistä KHO-linja, ja merkitse selvästi tulkinnanvaraiset kohdat tarkistettaviksi.

---

## Mitä tämä skill EI tee

- **Ei korvaa juristin oikeudellista arviota eikä kanna vastuuta lopputuloksesta.** Skill tuo lähteen pöytään; sen soveltaminen tapaukseen ja lopullinen vastuu kuuluvat pätevälle ihmiselle.
- **Ei vahvista pykälää eikä ratkaisutunnusta muistista.** Jos MCP:tä ei ole saatavilla, jokainen lainkohta merkitään `[muistinvarainen — tarkista Finlexistä/oik.ai:sta]` — sitä ei esitetä varmistettuna.
- **Ei takaa ehdotonta ajantasaisuutta.** Finlexin/oik.ai:n ajantasainen versio voi olla viikkoja jäljessä tuoreimmista muutoksista; tuoreissa muutoksissa tästä on mainittava varaus.
- **Ei tee lopullista oikeudellista johtopäätöstä lähteen pohjalta.** Tuotos erottaa suoran lähdesisällön, oman tiivistyksen ja asiantuntijan vahvistusta vaativan tulkinnan toisistaan.
- **Ei tulkitse hakukatkelmaa koko pykäläksi tai ratkaisun lopputulokseksi.** Olennainen sisältö luetaan varsinaisesta pykälä- tai ratkaisutekstistä.
- **Ei kata muiden maiden lainsäädäntöä eikä yleistä oikeuskirjallisuutta.** Vain Suomen voimassa oleva laki ja oikeuskäytäntö (sekä relevantti EU-oikeus) MCP-lähteistä.

## Jatka tästä

- Viittausten muoto, taivutus tai lakikielen säännöt kaipaavat tarkistusta → /juristi:juristi
- Tarkistetut lähteet pitää koota asiakirjan laaduntarkistukseen → /juristi:asiakirjan-tarkistus
- Lähdehausta jatketaan sopimusehdon laatimiseen tai tarkistukseen → /sopimukset:sopimuksen-laatiminen tai /sopimukset:sopimuksen-tarkistus
- Haettu oikeuskäytäntö liittyy työsuhteen päättämiseen tai riita-asiaan → /tyooikeus:tyosuhteen-paattaminen tai /riidanratkaisu:todistelu
- Lähde koskee hallintopäätöstä tai muutoksenhakua → /hallinto-oikeus:hallintopaatos tai /hallinto-oikeus:muutoksenhaku
