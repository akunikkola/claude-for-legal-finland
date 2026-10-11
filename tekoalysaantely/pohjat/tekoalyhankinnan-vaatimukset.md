# Pohja: tekoälyhankinnan vaatimukset toimittajalle

Rakenteellinen luuranko vaatimuksille ja tietopyynnöille, kun organisaatio hankkii
tekoälyjärjestelmän tai tekoälyä sisältävän palvelun. Soveltuu sekä yksityisiin
hankintoihin että julkisen hankinnan tarjouspyynnön liitteeksi. Käyttävä skill:
[`tekoaly-hallintamalli`](../skills/tekoaly-hallintamalli/SKILL.md); julkisissa hankinnoissa
lisäksi `julkiset-hankinnat`-plugari.
Konventiot: [`references/mallipohjat-standardi.md`](../../references/mallipohjat-standardi.md).

<!-- ohje: osa 2 on tarpeen vain, jos järjestelmä on suuririskinen. Luokittele ensin
     (tekoaly-luokittelu); älä vaadi suuririskisen järjestelmän todistuksia
     järjestelmältä, joka ei ole suuririskinen, äläkä jätä niitä pois
     suuririskiseltä. Artiklaviittaukset tarkistetaan lähteestä (euaiact_get_article).
     Julkisessa hankinnassa vaatimusten on oltava hankinnan kohteeseen liittyviä,
     oikeasuhtaisia ja syrjimättömiä — tarkista julkiset-hankinnat-plugarilla.
     DVV:n VAHTI-materiaaleissa on "Hankinnan tekoälyvaatimukset ja tsekkilista"
     vertailukohdaksi (kehittajille.suomi.fi) — älä kopioi. -->

---

## TEKOÄLYHANKINNAN VAATIMUKSET

### 0. Hankinta ja ennakkoluokitus (pakollinen)

- Hankinnan kohde ja käyttötarkoitus: [ ]
- Ennakoitu riskiluokka ja peruste: [MCP-luokitus — tarkistettava]
- Organisaation rooli: [käyttöönottaja / tarjoaja]
  <!-- ohje: jos järjestelmä otetaan käyttöön organisaation omalla nimellä tai
       tavaramerkillä tai sitä muokataan olennaisesti, organisaatiosta voi tulla
       tarjoaja (3 art 3 alakohta, 25 art). Silloin tarvitaan 25 art 4 kohdan
       kirjallinen sopimus toimittajan kanssa. -->

### 1. Kaikki tekoälyjärjestelmät (pakollinen)

- [ ] Toimittajan vakuutus, ettei järjestelmä sen käyttötarkoituksessa toteuta
      tekoälyasetuksen 5 artiklan kiellettyjä käytäntöjä.
- [ ] Kuvaus järjestelmän toiminnasta, käyttötarkoituksesta ja tunnetuista
      rajoituksista ymmärrettävällä kielellä.
- [ ] Taustalla käytettävät yleiskäyttöiset tekoälymallit ja niiden tarjoajat.
- [ ] Avoimuus: miten järjestelmä tukee 50 artiklan velvoitteita (vuorovaikutusilmoitus,
      tuotosten koneellisesti luettava merkintä).
- [ ] Materiaalit henkilöstön tekoälylukutaidon tueksi (4 art).

### 2. Suuririskiset järjestelmät *(valinnainen — pakollinen, jos suuririskinen)*

| Vaatimus | Peruste | Toimittajan vastaus |
|---|---|---|
| EU-vaatimustenmukaisuusvakuutus ja CE-merkintä | 47 ja 48 art | [ ] |
| Rekisteröinti EU:n tietokantaan | 49 art | [ ] |
| Käyttöohjeet ja niiden kieli | 13 art | [ ] |
| Ihmisen valvonnan toteutus ja tarvittava pätevyys | 14 art; 26 art 2 kohta | [ ] |
| Lokit ja niiden saatavuus käyttöönottajalle säilytysajan | 12 art; 26 art 6 kohta | [ ] |
| Tarkkuus, vakaus ja kyberturvallisuus, ilmoitetut tarkkuustasot | 15 art | [ ] |
| Tiedot DPIA:n ja FRIA:n tueksi | 13 art; 26 art 9 kohta; 27 art | [ ] |
| Vaaratilanteiden ja vaatimustenvastaisuuksien ilmoitusmenettely ja yhteyspiste | 26 art 5 kohta; 73 art | [ ] |
| Olennaisista muutoksista ja versioista ilmoittaminen | 25 art; 43 art | [ ] |
| Valtuutettu edustaja EU:ssa, jos toimittaja on EU:n ulkopuolelta | 22 art | [ ] |

### 3. Tietosuoja ja tietoturva (pakollinen, jos henkilötietoja)

- [ ] Henkilötietojen käsittelysopimus (GDPR 28 art) ja käsittelijän rooli.
- [ ] Käytetäänkö asiakkaan tietoja mallin koulutukseen tai parantamiseen; kielto- tai
      valintamahdollisuus.
- [ ] Tietojen sijainti, siirrot EU:n ulkopuolelle ja niiden peruste.
- [ ] Säilytys ja poisto sopimuksen päättyessä.
- [ ] Tekoälyyn liittyvät tietoturvauhat ja niiden hallinta (esim. kehoteinjektio,
      tietovuoto tuotoksissa).
- [ ] Tiedot DPIA:n tueksi (`tietosuoja`-plugarin DPIA:n tekoälylisäosa).

### 4. Sopimusehdot (pakollinen)

- [ ] Toimittajan velvollisuus pitää järjestelmä tekoälyasetuksen mukaisena koko
      sopimuskauden ja ilmoittaa sääntelymuutosten vaikutuksista.
- [ ] Yhteistyö viranomaisten kanssa ja tietojen toimittaminen pyynnöstä.
- [ ] Auditointi- ja tarkastusoikeus.
- [ ] Vastuu ja korvaukset vaatimustenvastaisuudesta.
- [ ] Oikeus keskeyttää käyttö tai päättää sopimus, jos järjestelmä osoittautuu
      vaatimustenvastaiseksi tai kielletyksi.

### 5. Julkinen hankinta *(valinnainen)*

- Mitkä yllä olevista ovat **vähimmäisvaatimuksia** ja mitkä **vertailuperusteita**:
  [ ]
- Oikeasuhtaisuuden ja syrjimättömyyden perustelu: [julkiset-hankinnat-plugari]

---

*Luonnos. Tarkistettava ennen käyttöä; ei oikeudellista neuvontaa.*
