---
name: taulukkokatsaus
description: >
  Monen asiakirjan rinnakkaisvertailu tai yhden asiakirjan rakenteinen
  taulukointi niin, että jokainen solu on lähteistetty asiakirjan kohtaan.
  Käytä tätä skilliä, kun samantyyppisiä asiakirjoja pitää verrata taulukkona
  (rivi per asiakirja, sarake per vertailukohta) — esimerkiksi sopimussalkku,
  vuokrasopimusten ehdot, työsopimusten kilpailukiellot, due diligence
  -aineisto, hallintopäätösten erä — tai kun yhdestä asiakirjasta poimitaan
  rakenteinen taulukko (maksuaikataulu, omistustaulukko, vuokra-abstrakti,
  liiteluettelo). Jokainen solu saa lähdeviittauksen ja luottamustason; puuttuva
  tieto merkitään "ei mainittu", ei tyhjäksi. Triggeröi sanoista: taulukoi,
  taulukkokatsaus, vertaile sopimukset, monta sopimusta, rivi per asiakirja,
  sopimussalkku, sopimusvertailu, vuokra-abstrakti, maksuaikataulu, abstrakti,
  due diligence, vertaileva katsaus, poimi taulukko, asiakirjaerä, .xlsx.
---

# Taulukkokatsaus — monidokumenttivertailu ja rakenteinen poiminta, solu kerrallaan lähteistettynä

Tämä skill muuttaa joukon asiakirjoja taulukoksi, jota voi tarkistaa: **jokainen solu kertoo, mistä asiakirjan kohdasta se on otettu, ja kuinka varma poiminta on**. Lopputuote ei ole muistio vaan taulukko (tai useita) — kuten kokenut juristi tai notaari tekee sopimussalkun yhteenvedon, vuokra-abstraktin tai due diligence -matriisin.

> **Vastuuvapaus:** taulukko on tarkistettava luonnos — ei oikeudellista neuvontaa. Se kertoo *mitä asiakirjoissa lukee*; sen, mitä siitä seuraa ja ovatko ehdot päteviä, arvioi pätevä ihminen. Katso `juristi/CLAUDE.md` → *Vastuuvapaus*.

## Periaate: joka solu on lähteistetty

Taulukon koko arvo on **jäljitettävyys**. Jokainen solu saa kolme asiaa:

1. **Arvo** — sanatarkka, kun solu on tekstiä; numero numerona; päivämäärä muodossa VVVV-KK-PP; rahamäärä summana ja valuuttana.
2. **Lähde** — asiakirjan kohta, josta arvo on: `5.2 §`, `liite 1 kohta 3`, `s. 4 toinen kappale`. Jos arvo on päätelty, lähde on `johdettu kohdasta 9.1` — **ei koskaan tyhjä**.
3. **Luottamus** — luku 0.0–1.0. Alle 0.7 nostetaan ihmisen tarkistukseen.

**Puuttuva tieto merkitään `ei mainittu`** — ei tyhjäksi soluksi. Tyhjä solu peittää sen, että asiakirjasta puuttuu jotain, mitä siellä pitäisi olla; "ei mainittu" tekee aukosta löydöksen.

Lähdekuri on koko markkinapaikan ydin: ks. `references/viittaustyyli.md` (kolmiportainen varmuusmerkintä). Tässä se viedään solutasolle.

---

## Referenssitiedostot

| Referenssi | Tiedosto | Käytä kun |
|---|---|---|
| Sarakemallit asiakirjatyypeittäin | `references/sarakemallit.md` | Suunnittelet sarakkeita tunnetulle asiakirjatyypille (vuokra-, työ-, toimittaja-, osakassopimus, kiinteistökauppa, hallintopäätös). Sisältää suomalaiset vertailukohdat ja lainkohtaviitteet. |

**Ohje:** kun vertailtava asiakirjatyyppi on tunnettu, lue `references/sarakemallit.md` ja räätälöi sieltä lähtevä sarakejoukko. Tuntemattomalle tyypille johda sarakkeet asiakirjasta itsestään (Vaihe 1).

---

## Kaksi käyttötapaa

**Tila A — monidokumenttivertailu (yksi taulukko, rivi per asiakirja).** Samantyyppiset asiakirjat rinnakkain: sarakkeet ovat vertailukohtia (irtisanomisaika, vastuunrajoitus, sovellettava laki…), rivit ovat asiakirjoja. Taulukon teho on **poikkeaman näkeminen** — se yksi sopimus, jossa ehto on muista poikkeava tai puuttuu.

**Tila B — yhden asiakirjan rakenteinen poiminta (useita taulukoita).** Yhdestä asiakirjasta poimitaan sen taulukkomaiset rakenteet: maksuaikataulu, omistus- tai lunastustaulukko, vuokra-abstrakti, liite- ja rasiteluettelo. **Useita taulukoita, ei yhtä** — jos asiakirjassa on viisi erillistä liitettä, tee viisi taulukkoa.

---

## Vaihe 1 — Skeeman löytäminen ja sarakkeiden suunnittelu

- **Tila A:** määritä vertailtava asiakirjatyyppi ja valitse sarakkeet. Lue `references/sarakemallit.md`, jos tyyppi on siellä; muuten johda vertailukohdat siitä, mikä tässä asiakirjatyypissä on olennaista (osapuolet, kohde, kesto, irtisanominen, vastuut, sovellettava laki, riidanratkaisu).
- **Tila B:** käy asiakirja läpi ja tunnista **jokainen** taulukkomainen rakenne: numeroidut liitteet, jäsennellyt luettelot, lausekkeisiin sidotut mekaniikat (maksuerät, korotuskaavat). Ehdota kaikki tuotettavat taulukot ennen täyttöä.
- **Uskolliset sarakeotsikot:** jos asiakirja käyttää termiä "vastike", älä nimeä saraketta "vuokraksi". Käytä asiakirjan termiä ja lisää määritelmärivi tarvittaessa.

**Pysäytysehto:** jos asiakirjatyyppiä tai vertailtavaa joukkoa ei voi määrittää, kysy ennen jatkamista.

---

## Vaihe 2 — Täyttö per-solu-provenienssilla

Täytä taulukko solu kerrallaan ja anna jokaiselle solulle arvo, lähde ja luottamus (ks. *Periaate*).

- **Sanatarkkuus:** kun solu on tekstiä (esim. ehdon sanamuoto), lainaa asiakirjaa, älä parafrasoi.
- **Ei rivien paisuttelua:** jos asiakirjassa on kolme osapuolta, taulukossa on kolme riviä — ei "muu / TBD" -täyterivejä.
- **Määritellyt termit:** jos asiakirja käyttää lyhennettä tai määriteltyä termiä, lisää määritelmätaulukko (`termi → merkitys → lähde`), jotta lukija osaa purkaa sen.
- **Rahamäärät ja päivämäärät:** valuutta aina mukana, vaikka asiakirja sanoisi vain "€"; epäselvässä tapauksessa laske luottamusta. Määräajat yksikköineen (päivää / kuukautta / vuotta / arkipäivää).

---

## Vaihe 3 — Kaksi oikeellisuuden tasoa

Erota selvästi se, mitä voidaan luotettavasti todeta asiakirjasta, siitä, mitä on tarkistettava lähteestä.

- **Taso 1 — mitä asiakirja sanoo (korkea luottamus).** Solun arvo on poimittu asiakirjasta. Tämä on skillin ydinalue.
- **Taso 2 — onko ehto pätevä tai lainmukainen (vaatii lähteen).** Jos taulukkoon halutaan sarake "lainmukainen?" tai "pätevä?", **älä arvioi sitä muistista.** Käytä `oikeustutkimus`-skilliä (oik.ai/Finlex) ja merkitse solu `luottamus: matala` ja lähteeksi tarkistus, tai jätä arvio erilliseen löydökseen. Esim. työsopimusten kilpailukieltosarakkeessa "kestää lain" on tason 2 kysymys (työsopimuslaki 55/2001, 3 luvun 5 §; korvausvelvollisuus lisätty lailla 1018/2021) — taulukoi ehdon *sisältö* tasolla 1, mutta pätevyysarvio tasolla 2.

---

## Vaihe 4 — Poikkeamien ja aukkojen nosto

Taulukon teho on vertailussa. Tuota lyhyt poikkeamalista taulukon jälkeen:

- **Poikkeava rivi:** se asiakirja, jonka ehto eroaa olennaisesti muista (esim. yksi sopimus 12 kuukauden irtisanomisajalla muiden ollessa 3 kuukautta).
- **Puuttuva pakollinen sarake:** rivi, jonka kohdalla lukee `ei mainittu` kohdassa, jonka tämän asiakirjatyypin pitäisi kattaa (esim. sovellettava laki tai riidanratkaisu puuttuu).
- **Sisäinen ristiriita:** solu, joka on ristiriidassa saman asiakirjan toisen solun kanssa.

Poikkeama on **riskisignaali**, ei johtopäätös — se kertoo, mitä ihmisen kannattaa katsoa ensin.

---

## Ulostulo

- **Markdown-taulukko** vastauksessa on oletus; pidä lähde- ja luottamustieto mukana (joko omina sarakkeina tai solun perässä).
- **`.xlsx`** monisivuisena, kun aineisto on iso tai se halutaan jatkokäyttöön: yksi välilehti per taulukko ja **erillinen lähde-sarake jokaiselle arvolle** (tai oma "Lähteet"-välilehti). Käytä taulukkolaskenta-työkalua, jos saatavilla; muuten tuota `.csv`.
- Älä toista samaa taulukkoa sekä markdownina että tiedostona ilman syytä — valitse esitysmuoto käyttötarpeen mukaan.

---

## Loppuyhteenveto

```
========================================
TAULUKKOKATSAUS
========================================
Aineisto: [asiakirjat / tyyppi]   Tila: [A monidokumenttivertailu / B poiminta]
Päivämäärä: [pvm]

TAULUKOT: [otsikot]
RIVEJÄ / SOLUJA: [määrä]   ·   LÄHTEISTÄMÄTTÖMIÄ SOLUJA: 0

POIKKEAMAT JA AUKOT:
- [poikkeava rivi / puuttuva kohta / ristiriita]

TARKISTETTAVAT (luottamus alle 0.7 tai tason 2 pätevyysarvio):
- [solu + miksi]

VASTUUVAPAUS: Taulukon poiminnan teki tekoäly ja se täydentää, ei korvaa,
ihmisen tarkistusta. Arvot tarkistettava asiakirjasta; pätevyys lähteestä.
========================================
```

---

## Word- ja taulukkotiedostot

Jos lähdeasiakirjat ovat Word-muodossa, käytä `adeu`-MCP:tä (kun saatavilla) niiden lukemiseen rakenteineen (`read_docx`, `mode: "appendix"` paljastaa määritellyt termit ja ankkurit, jotka helpottavat sarakkeiden ja lähdeviittausten tunnistamista). Taulukkotuotos viedään tarvittaessa `.xlsx`- tai `.csv`-muotoon.

---

## Mitä tämä skill EI tee

- **Ei jätä solua ilman lähdettä.** Joka solu viittaa asiakirjan kohtaan; puuttuva tieto on `ei mainittu`, ei tyhjä.
- **Ei arvioi pätevyyttä tai lainmukaisuutta muistista.** Tason 2 sarakkeet tarkistetaan `oikeustutkimus`-skillillä tai merkitään tarkistettaviksi.
- **Ei paisuta rivejä eikä keksi sarakkeita**, joita asiakirjat eivät tue.
- **Ei tee lopullisia oikeudellisia johtopäätöksiä.** Poikkeamat ovat riskisignaaleja ihmisen arvioitaviksi.
- **Ei korvaa yksittäisen asiakirjan syvätarkistusta** → /juristi:asiakirjan-tarkistus.
- **Ei kata muiden maiden oikeutta.** Vain Suomen oikeus (ja relevantti EU-oikeus erikseen).

## Jatka tästä

- Yksittäinen asiakirja vaatii syvätarkistuksen taulukoinnin lisäksi → /juristi:asiakirjan-tarkistus
- Sarake "pätevä?" tai "lainmukainen?" pitää tarkistaa lähteestä → /juristi:oikeustutkimus
- Vertailtava aineisto on sopimuksia, joiden ehtoja arvioidaan riskeittäin → /sopimukset:sopimuksen-tarkistus
- Vertailtava aineisto on kuluttajasopimuksia → /kuluttajaoikeus:kuluttajakaupan-virhevastuu
- Taulukosta nousee riita- tai prosessiaineistoa → /riidanratkaisu:todistelu
