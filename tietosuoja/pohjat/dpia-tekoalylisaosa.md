# Pohja: DPIA:n tekoälylisäosa

Rakenteellinen luuranko lisäosalle, joka liitetään tietosuojaa koskevaan
vaikutustenarviointiin (DPIA, GDPR 35 art), kun käsittelyssä käytetään
tekoälyjärjestelmää. Käyttävä skill:
[`tietosuoja-arviointi`](../skills/tietosuoja-arviointi/SKILL.md).
Konventiot: [`references/mallipohjat-standardi.md`](../../references/mallipohjat-standardi.md).

<!-- ohje: lisäosa ei korvaa DPIA:n perusosia (GDPR 35 art 7 kohta: kuvaus,
     tarpeellisuus ja oikeasuhtaisuus, riskit, toimenpiteet). Se kokoaa
     tekoälyyn liittyvät erityiskysymykset ja kytkennät tekoälyasetukseen.
     Artiklat tarkistetaan lähteestä; tekoälyasetuksen kysymykset
     tekoalysaantely-plugarin kautta. DVV:n VAHTI-materiaaleissa on DPIA:n
     tekoälylisäkysymykset vertailukohdaksi (kehittajille.suomi.fi) — älä kopioi. -->

---

## DPIA — TEKOÄLYLISÄOSA

### 1. Järjestelmä ja rooli (pakollinen)

- Järjestelmä, versio ja tarjoaja: [ ]
- Organisaation rooli tekoälyasetuksessa: [tarjoaja / käyttöönottaja]
- Organisaation rooli GDPR:ssä: [rekisterinpitäjä / käsittelijä]; tarjoajan rooli:
  [käsittelijä / itsenäinen rekisterinpitäjä — selvitä sopimuksesta]
- Tekoälyasetuksen riskiluokka: [tekoalysaantely:tekoaly-luokittelu — tulos]

### 2. Tarjoajan tiedot (pakollinen, jos suuririskinen)

<!-- ohje: suuririskisen järjestelmän käyttöönottajan on tarvittaessa käytettävä
     tarjoajan 13 artiklan mukaisia tietoja DPIA:ssa (tekoälyasetus 26 art 9 kohta). -->

- Käyttöohjeet ja muut 13 artiklan tiedot saatu: [kyllä / ei; mitä puuttuu]
- Tunnetut rajoitukset, tarkkuus ja virhetyypit: [ ]

### 3. Henkilötiedot tekoälyn elinkaaressa (pakollinen)

- Syöttötiedot (kehotteet, asiakirjat, tallenteet): [ ]
- Käytetäänkö organisaation tietoja mallin koulutukseen tai parantamiseen: [kyllä / ei —
  sopimusehto]
- Tuotokset, jotka sisältävät tai tuottavat henkilötietoja: [ ]
- Erityiset henkilötietoryhmät (GDPR 9 art): [ ]
  <!-- ohje: tekoälyasetuksen 4 a artikla (koontiasetus) sallii suuririskisen
       järjestelmän tarjoajalle erityisten henkilötietoryhmien käsittelyn vinoutumien
       havaitsemiseksi tiukoin ehdoin. Koskee tarjoajaa, ei käyttöönottajaa. -->

### 4. Automaattinen päätöksenteko ja ihmisen valvonta (pakollinen)

- Tekeekö järjestelmä päätöksiä, joilla on oikeusvaikutuksia tai vastaavia merkittäviä
  vaikutuksia (GDPR 22 art): [ei / avustaa / tekee]
- Ihmisen osallistumisen todellisuus (ei pelkkä muodollinen hyväksyntä): [ ]

### 5. Virheet, vinoumat ja syrjintä (pakollinen)

- Riskit eri ryhmille: [ ]
- Seuranta ja testaus: [ ]

### 6. Avoimuus (pakollinen)

- GDPR-informointi (13–14 art), myös automaattisen päätöksenteon logiikka: [ ]
- Tekoälyasetuksen avoimuus: 50 art [tekoalysaantely:tekoaly-avoimuus] ja suuririskisissä
  26 art 11 kohta: [ ]

### 7. Tietoturva (pakollinen)

- Tekoälyyn liittyvät uhat (esim. kehoteinjektio, tietovuoto tuotoksissa, mallin
  väärinkäyttö): [ ]
- Pääsynhallinta ja lokit: [ ]

### 8. Säilytys ja siirrot (pakollinen)

- Lokien ja kehotteiden säilytys: [aika ja peruste]
  <!-- ohje: suuririskisen järjestelmän käyttöönottajan lokien vähimmäissäilytysaika
       (26 art 6 kohta) ja GDPR:n säilytyksen rajoittaminen on sovitettava yhteen. -->
- Tietojen sijainti ja siirrot EU:n ulkopuolelle: [ ]

### 9. Suhde FRIA:han *(valinnainen)*

- Tehdäänkö perusoikeuksia koskeva vaikutustenarviointi (tekoälyasetus 27 art): [kyllä / ei]
- Mitkä tämän DPIA:n osat FRIA voi ristiinviitata (27 art 4 kohta): [ ]

---

*Luonnos. Tarkistettava ennen käyttöä; ei oikeudellista neuvontaa.*
