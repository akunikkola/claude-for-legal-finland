---
name: privacy-notice
description: >
  Tietosuojaselosteen (informointi rekisteröidylle, GDPR 13–14 art) ja käsittelytoimien
  selosteen (GDPR 30 art) laatiminen EU:n tietosuoja-asetuksen ja tietosuojalain
  (1050/2018) mukaan. Käytä tätä skilliä, kun käyttäjä laatii tai päivittää
  tietosuojaselostetta, privacy policya, informointiasiakirjaa tai seloste
  käsittelytoimista -dokumenttia, tai kysyy mitä rekisteröidylle on kerrottava
  henkilötietojen käsittelystä.
---

# Tietosuojaseloste ja seloste käsittelytoimista

Tämä skill laatii kaksi eri asiakirjaa, jotka usein sekoitetaan:
- **Tietosuojaseloste / informointi (13–14 art)** — rekisteröidylle annettava, julkinen,
  selkokielinen kuvaus siitä, miten hänen tietojaan käsitellään.
- **Seloste käsittelytoimista (30 art)** — rekisterinpitäjän sisäinen dokumentaatio
  käsittelytoiminnoista (osoitusvelvollisuus); ei julkaistava, esitetään valvontaviranomaiselle pyydettäessä.

Selvitä ensin **kumpaa asiakirjaa** käyttäjä tarvitsee (tai molempia).

> **Vastuuvapaus:** luonnos tarkistettavaksi — ei oikeudellista neuvontaa. Lakiviittaukset
> tarkistetaan lähteestä. Perusteet: `../tietosuoja-arviointi/references/tietosuoja-perusteet.md`.

---

## A. Tietosuojaseloste (informointi, 13–14 art)

Kerää käsittelyn tiedot (hyödynnä tarvittaessa `tietosuoja-arviointi`-skilliä) ja laadi
seloste, joka sisältää vähintään:

1. **Rekisterinpitäjä** ja yhteystiedot (sekä tietosuojavastaavan yhteystiedot, jos nimetty).
2. **Käsittelyn tarkoitukset** ja **oikeusperuste** (6 art; arkaluonteisilla myös 9 art). Jos peruste on oikeutettu etu, mainitse mikä etu.
3. **Henkilötietoryhmät** (erityisesti jos tietoja ei saatu rekisteröidyltä itseltään, 14 art) ja **tietolähteet**.
4. **Vastaanottajat** tai vastaanottajaryhmät (ml. käsittelijät).
5. **Siirrot EU/ETA:n ulkopuolelle** ja suojatoimet, jos siirretään.
6. **Säilytysaika** tai sen määräytymisperuste.
7. **Rekisteröidyn oikeudet** (tarkastus, oikaisu, poisto, rajoittaminen, siirto, vastustaminen) ja **oikeus peruuttaa suostumus**, jos käsittely perustuu suostumukseen.
8. **Oikeus tehdä valitus** valvontaviranomaiselle (tietosuojavaltuutetun toimisto).
9. Onko tietojen antaminen **lakisääteinen/sopimukseen perustuva vaatimus** ja antamatta jättämisen seuraukset.
10. **Automaattinen päätöksenteko / profilointi** (22 art) ja sen logiikka, jos sellaista on.

**Kirjoita selkokielellä** — informoinnin on oltava tiivis, läpinäkyvä, ymmärrettävä ja
helposti saatavilla (12 art). Käytä `legal-core`-plugarin `suomen-kieli`-skilliä kielen
selkeyteen. Vältä juridista jargonia; selitä käsittely konkreettisesti.

## B. Seloste käsittelytoimista (30 art)

Laadi sisäinen seloste, joka sisältää kustakin käsittelytoiminnosta:
- Rekisterinpitäjän (ja mahd. yhteisrekisterinpitäjän, edustajan, tietosuojavastaavan) tiedot.
- Käsittelyn **tarkoitukset**.
- **Rekisteröityjen ryhmät** ja **henkilötietoryhmät**.
- **Vastaanottajaryhmät** (ml. kolmansiin maihin).
- **Kolmansiin maihin siirrot** ja suojatoimet.
- **Säilytysaikojen** määräytyminen mahdollisuuksien mukaan.
- **Teknisten ja organisatoristen turvatoimien** yleinen kuvaus.

Käsittelijän seloste on suppeampi (30(2) art). Pienen organisaation poikkeus (30(5) art) on
kapea — älä oleta sen soveltuvan ilman tarkistusta.

## Tulostemuoto

Tuota **uusi** asiakirja muokattavana (Markdown tai `docx`-skillillä .docx). Jos **päivität
olemassa olevaa** selostetta Word-tiedostona, käytä `adeu`-MCP:tä, joka tekee muutokset
natiiveina Word-jälkimuutoksina (Track Changes) muotoilua rikkomatta. Merkitse täydennettävät
kohdat hakasulkein. Erota selvästi julkinen tietosuojaseloste ja sisäinen käsittelytoimien
seloste. Lisää: *"Luonnos — tarkistettava ennen julkaisua/käyttöä."*

## Mitä tämä skill EI tee

- **Ei korvaa tietosuojavastaavan tai juristin arviota.** Selosteen oikeudellinen riittävyys ja julkaisukelpoisuus on tarkistettava asiantuntijalla.
- **Ei vahvista GDPR-artikloja (12–14, 30 art) tai tietosuojalain pykäliä muistista.** Lakiviittaukset ja kansalliset täsmennykset tarkistetaan lähteestä.
- **Ei määritä käsittelyperustetta eikä arvioi DPIA-tarvetta** — seloste edellyttää, että nämä on jo selvitetty (`tietosuoja-arviointi`).
- **Ei korvaa tietoturvan tai säilytysaikojen tosiasiallista määrittelyä.** Kirjaa selosteeseen vain ne tiedot, jotka käyttäjä antaa; ei keksi säilytysaikoja eikä turvatoimia.
- **Ei tee ilmoitusta valvontaviranomaiselle puolestasi.** Seloste käsittelytoimista esitetään tietosuojavaltuutetun toimistolle vain pyydettäessä — tämä skill ei toimita sitä.
- **Ei arvioi pienen organisaation 30(5) art -poikkeuksen soveltumista** ilman erillistä tarkistusta — poikkeus on kapea.

## Jatka tästä

- Käsittelyperusteen ja DPIA-tarpeen selvitys ennen selostetta → /tietosuoja:tietosuoja-arviointi
- Rekisteröidyn oikeuksien toteuttaminen käytännössä → /tietosuoja:rekisteroidyn-pyynnot
- Selosteen selkokielisyyden ja informoinnin ymmärrettävyyden viimeistely → /juristi:suomen-kieli
- Lakiviittausten ja kansallisten pykälien tarkistus → /juristi:oikeustutkimus
