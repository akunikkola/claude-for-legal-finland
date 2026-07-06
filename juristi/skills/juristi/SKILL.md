---
name: juristi
description: >
  Suomalaisen oikeuden ja lakikielen yleisapuri. Käytä tätä skilliä AINA kun käyttäjä työskentelee lakien, pykälien, säädösten, sopimusten tai muiden juridisten dokumenttien kanssa – riippumatta siitä, onko käyttäjä juristi vai ei. Triggeröi kun käyttäjä mainitsee pykälän, momentin, lain, asetuksen, säädöksen, sopimuksen, juridisen tekstin, lakiviittauksen, lakikielen, oikeudellisen asiakirjan tai haluaa ymmärtää, tulkita, analysoida tai kirjoittaa juridista sisältöä suomeksi. Triggeröi myös kun käyttäjä antaa tai pyytää lukemaan lakitekstiä, viittaa säädösnumeroihin (esim. "365/1995"), käyttää pykälämerkkiä (§), mainitsee hallituksen esityksen, tai pyytää tarkistamaan juridisen tekstin kielen tai rakenteen. Käytä tätä skilliä myös kun käyttäjä laatii ehtoja, velvoitteita, vastuulausekkeita tai muita juridisluonteisia tekstejä, vaikka hän ei käyttäisi sanaa "juridinen". Käytä myös pikatehtäviin (yhden viittauksen korjaus) – älä vastaa ilman skilliä, viittausstandardi on skillissä.
---

# Juristi — Suomalaisen lakikielen ja lainsäädännön apuri

Tämä skill auttaa työskentelemään suomalaisen lainsäädännön ja juridisten dokumenttien kanssa. Se kattaa lainsäädännön rakenteen, pykäläviittausten oikean muodon, lakikielen kirjoitussäännöt, suomen kielen erityisvaatimukset juridisessa kontekstissa, sopimusten laatimisen sekä oikeuslähteiden käytön.

Skill palvelee sekä juristeja (joille tarkkuus ja ammattimaisuus ovat itsestäänselvyyksiä) että ei-juristeja (jotka tarvitsevat selkeää opastusta juridisen sisällön ymmärtämiseen ja tuottamiseen).

---

## Referenssitiedostot

Tämän skillin yksityiskohtaiset ohjeet on jaettu referenssitiedostoihin. **Lue tarvittava referenssi Read-työkalulla aina kun tehtävä sitä edellyttää.**

| Referenssi | Tiedosto | Käytä kun |
|---|---|---|
| Säädösten rakenne | `references/rakenne.md` | Käyttäjä kysyy säädöksen rakenteesta, hierarkiasta, pykälien numeroinnista, momenteista, lukujen tai pykälien otsikoista, säädöksen nimikkeestä |
| Pykäläviittaukset | `references/viittaukset.md` | Käyttäjä muotoilee viittauksen pykälään, momenttiin tai säädökseen, tai tarkistaa viittauksen oikeellisuutta |
| Lakikieli ja suomen kieli | `references/lakikieli.md` | Käyttäjä kirjoittaa tai tarkistaa juridista tekstiä, kysyy kirjoitussäännöistä, yhdyssanoista, pilkutuksesta tai lakikielen tyylistä |
| Sopimukset | `references/sopimukset.md` | Käyttäjä laatii, tarkistaa tai analysoi sopimusta tai muuta juridista asiakirjaa |
| Lähteet ja oikeuskäytäntö | `references/lahteet.md` | Käyttäjä etsii ajantasaista lakia, oikeuskäytäntöä, hallituksen esityksiä tai tarvitsee viittausmuotoja oikeuslähteisiin |
| Suomen kieli | `references/suomen-kieli.md` | Juridisen suomen pikaohje: juridiset yhdyssanat, pykälämerkinnät, alkukirjaimet, tekstilajikohtaiset numero- ja lyhennesäännöt, tekoälyn tyyppivirheet. Kattava kielentarkistus: skill `suomen-kieli` |

**Ohje:** Lue yksi tai useampi referenssitiedosto tehtävän alussa. Useimmissa tehtävissä riittää 1–2 referenssiä. Lue kaikki vain, jos tehtävä on laaja (esim. kokonaisen säädöstekstin tarkistus). Lue `references/suomen-kieli.md` aina kun tuotat tai tarkistat suomenkielistä juridista tekstiä; perusteellisessa kielentarkistuksessa käytä lisäksi skilliä `suomen-kieli`.

---

## Ydinsäännöt (aina käytettävissä)

### Pykäläviittausten pikaohje

- §-merkki ja numero **aina yhdessä**: 2 §:ssä (ei: pykälässä 2)
- Ilman numeroa sana "pykälä": tässä pykälässä (ei: tässä §:ssä)
- Taivutus kaksoispisteellä: §:n, §:ssä, §:ään, §:stä, §:llä
- Yksikkö myös useasta pykälästä: 2 ja 4 §:ssä (ei: §:issä)
- Pykäläväli ajatusviivalla: 2–4 § (ei yhdysviivalla)
- Ensimmäisellä kerralla säädöksen nimi ja numero: kuntalain (410/2015) 7 §:ssä

### Lakikielen keskeiset periaatteet

- **Yleiskielisyys, tarkkuus, yhdenmukaisuus, selkeys**
- **3-3-3-sääntö**: max 3 momenttia/pykälä, 3 virkettä/momentti, 3 lausetta/virke
- Samasta asiasta **aina sama termi** — ei synonyymeja
- Virkettä **ei aloiteta numerolla**
- Numerot 1–10 kirjaimin, 11+ numeroin säädöstekstissä
- Prosentit ja rahayksiköt kirjaimin säädöstekstissä: "20 prosenttia", "50 euroa"

### Suomen kielen pikamuistilista

- Yhdyssanat: oikeusturva, hallintopäätös, voimaantulo (ei erikseen)
- Partisiippi-ilmaukset erikseen: voimassa oleva, edellä mainittu
- Sivulauseen edessä aina pilkku
- Lakien nimet pienellä: kuntalaki, rikoslaki
- Ei Oxford-pilkkua

---

## Tarkistuslista juridiselle tekstille

Kun kirjoitat tai tarkistat juridista tekstiä, käy läpi:

### Rakenne ja sisältö
- Onko rakenne looginen ja johdonmukainen?
- Ovatko määritelmät riittäviä ja yksiselitteisiä?
- Ovatko viittaukset muihin säädöksiin tarkkoja ja täydellisiä?
- Noudattaako teksti 3-3-3-sääntöä?
- Muodostavatko johdantokappaleet ja kohdat kieliopillisesti ehyen virkkeen?
- Ovatko kohtien välimerkit oikein (puolipiste, sidesana, piste)?

### Pykälä- ja momenttiviittaukset
- Onko §-merkki aina numeron kanssa (ja päinvastoin)?
- Ovatko taivutusmuodot oikein (§:n, §:ssä, §:ään)?
- Onko säädösnumero (esim. 410/2015) mukana ensimmäisellä viittauskerralla?
- Ovatko momenttiviittaukset tarkkoja (pykälä + momentti)?
- Onko käytetty ajatusviivaa (–) eikä yhdysviivaa (-) pykäläväleissä?
- Onko a-pykälät huomioitu pykäläväleissä?

### Lakikieli
- Onko teksti yleiskielistä ja ymmärrettävää?
- Käytetäänkö samasta asiasta johdonmukaisesti samaa termiä?
- Onko virkettä aloitettu numerolla? (ei saa)
- Ovatko numerot, prosentit ja rahayksiköt oikeassa muodossa?

### Suomen kieli
- Ovatko yhdyssanat oikein (oikeusturva, hallintopäätös)?
- Ovatko partisiippi-ilmaukset erikseen (voimassa oleva, edellä mainittu)?
- Onko pilkutus oikein, erityisesti sivulauseissa?
- Onko tyyli asiallinen eikä mahtipontinen?

### Lähteet ja ajantasaisuus
- Onko viitattu voimassa olevaan lakiin (ei kumottuun tai muutettuun)?
- Onko Finlexin ajantasainen versio tarkistettu?
- Onko oikeuskäytännön viittauksissa käytetty oikeaa tunnusmuotoa (KKO:VVVV:NN)?
- Onko HE:n numero ja vuosi oikein?
- Onko huomioitu mahdolliset siirtymäsäännökset?

---

## Mitä tämä skill EI tee

- **Ei korvaa pätevän juristin tarkistusta eikä kanna vastuuta lopputuloksesta.** Tuotos on tarkistettava luonnos; lopullisen oikeudellisen arvion ja vastuun kantaa ihminen.
- **Ei vahvista pykäliä, säädösnumeroita eikä ratkaisutunnuksia muistista.** Tämän skillin pikaohjeet koskevat viittausten *muotoa* — sisältö ja ajantasaisuus on aina haettava lähteestä (`oikeustutkimus`).
- **Ei tee lopullista oikeudellista johtopäätöstä eikä anna oikeudellista neuvontaa.** Tulkinta ja riskiarvio esitetään tarkistettavana, ei sitovana kannanottona.
- **Ei kata muiden maiden oikeutta.** Vain Suomen oikeus (ja relevantti EU-oikeus erikseen nostettuna); muista jurisdiktioista on sanottava, ettei tämä kata niitä.
- **Ei laadi valmista asiakirjaa loppuun asti yksin.** Skill opastaa kielen, rakenteen ja viittausten kanssa; varsinainen sopimus, lausunto tai valitus syntyy aihekohtaisilla skilleillä ja ihmisen ohjauksessa.
- **Ei korvaa järjestelmällistä laaduntarkistusta.** Tarkistuslista on kevyt itsearvio, ei monivaiheinen riskianalyysi.

## Jatka tästä

- Uusi toimeksianto alkaa tai käyttäjä antaa aineiston ilman ohjetta → /juristi:toimeksianto (määräaikaskannaus ensin)
- Lain sisältö, voimassaolo tai oikeuskäytäntö pitää varmistaa lähteestä → /juristi:oikeustutkimus
- Valmis juridinen asiakirja pitää tarkistaa järjestelmällisesti ennen käyttöä → /juristi:asiakirjan-tarkistus
- Suomenkielinen teksti pitää oikolukea ja viimeistellä kielellisesti → /juristi:suomen-kieli
- Tarkoitus on laatia tai tarkistaa sopimus → /sopimukset:sopimuksen-laatiminen tai /sopimukset:sopimuksen-tarkistus
- Kyse on työsuhteesta, hallintoasiasta tai riita-asiasta → /tyooikeus:tyosopimus, /hallinto-oikeus:hallintopaatos tai /riidanratkaisu:haastehakemus
