---
name: data-subject-requests
description: >
  Rekisteröidyn oikeuksien toteuttaminen ja tietopyyntöihin vastaaminen EU:n
  tietosuoja-asetuksen (15–22 art) mukaan: tarkastusoikeus, oikaisu, poisto, käsittelyn
  rajoittaminen, siirto-oikeus, vastustaminen ja automatisoidut päätökset. Käytä tätä
  skilliä, kun käyttäjä on saanut rekisteröidyltä tietopyynnön tai vaatimuksen, haluaa
  vastata siihen, arvioida onko se hyväksyttävä, tai mainitsee tarkastuspyynnön,
  tietojen poistopyynnön, "oikeuden tulla unohdetuksi", omien tietojen pyytämisen tai
  rekisteröidyn oikeudet.
---

# Rekisteröidyn pyynnöt — oikeuksien toteuttaminen

Tämä skill auttaa käsittelemään rekisteröidyn esittämän pyynnön ja laatimaan vastauksen
EU:n tietosuoja-asetuksen mukaisesti. Oikeudet eivät ole ehdottomia — useimmilla on
edellytyksiä ja poikkeuksia.

> **Vastuuvapaus:** vastausluonnos tarkistettavaksi — ei oikeudellista neuvontaa.
> Kielteinen päätös ja monitulkintainen poikkeus kuuluvat tietosuojavastaavan/juristin
> arvioon. Perusteet: `../data-protection-assessment/references/data-protection-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

---

## Vaihe 1: Tunnista pyyntö ja pyytäjä

- **Mikä oikeus** on kyseessä (alla)? Pyyntö voi olla muodoton — tulkitse sisältö, ei otsikkoa.
- **Tunnista pyytäjä** luotettavasti, jotta tietoja ei luovuteta väärälle (mutta älä vaadi kohtuuttomia lisätietoja).
- **Kirjaa vastaanottopäivä** — määräaika alkaa siitä.

## Vaihe 2: Määräaika

Vastaa **ilman aiheetonta viivytystä ja viimeistään kuukauden kuluessa** pyynnön
vastaanottamisesta (12(3) art). Määräaikaa voi jatkaa enintään **kahdella kuukaudella**,
jos pyynnöt ovat monimutkaisia tai useita — tällöin rekisteröidylle on ilmoitettava
viivästyksestä ja syystä kuukauden kuluessa. Toimenpiteet ovat lähtökohtaisesti maksuttomia.

## Vaihe 3: Arvioi oikeus ja edellytykset

| Oikeus | Artikla | Keskeiset edellytykset / poikkeukset |
|---|---|---|
| **Tarkastusoikeus** | 15 | Oikeus saada jäljennös käsitellyistä tiedoista ja käsittelyn tiedot. Ei saa loukata muiden oikeuksia. |
| **Oikaisu** | 16 | Virheellisten tietojen korjaaminen, puutteellisten täydentäminen. |
| **Poisto ("unohdetuksi")** | 17 | Esim. tietoja ei enää tarvita, suostumus peruttu, käsittely lainvastaista. **Ei sovellu**, jos käsittely on tarpeen mm. lakisääteisen velvoitteen tai oikeusvaateen vuoksi. |
| **Käsittelyn rajoittaminen** | 18 | Esim. tietojen oikeellisuus riitautettu — käsittely jäädytetään selvittelyn ajaksi. |
| **Siirto-oikeus** | 20 | Vain kun käsittely perustuu **suostumukseen tai sopimukseen** ja tehdään automaattisesti. Jäsennelty, yleisesti käytetty, koneluettava muoto. |
| **Vastustamisoikeus** | 21 | Erityisesti oikeutettuun etuun tai yleiseen etuun perustuva käsittely; **suoramarkkinointia saa aina vastustaa**. |
| **Automatisoidut päätökset** | 22 | Oikeus olla joutumatta pelkkään automaattiseen käsittelyyn perustuvan, oikeusvaikutuksia aiheuttavan päätöksen kohteeksi (poikkeuksin). |

Tarkista kansalliset täsmennykset ja mahdolliset erityislain poikkeukset (tietosuojalaki
1050/2018; toimialakohtainen laki) `legal-core`-plugarin `legal-research`-skillillä.

## Vaihe 4: Laadi vastaus

- **Myönteinen:** toteuta toimenpide ja kuvaa, mitä tehtiin. Tarkastuspyyntöön: kokoa tiedot ja käsittelyn 15 art mukaiset tiedot; varmista, ettei jäljennös paljasta sivullisten tietoja.
- **Kielteinen tai osittainen:** perustele, mihin poikkeukseen päätös perustuu, ja kerro rekisteröidylle **oikeus tehdä valitus tietosuojavaltuutetun toimistolle** sekä oikeussuojakeinot. Älä kieltäydy ilman perustetta.
- **Ilmeisen perusteeton tai kohtuuton (etenkin toistuva) pyyntö:** voidaan periä kohtuullinen maksu tai kieltäytyä (12(5) art) — mutta tämä on poikkeus, jota on käytettävä varoen ja perustellen.

Kirjoita vastaus asiallisesti ja selkokielisesti (`legal-core:finnish-language`). Tuota
vastausluonnos ja tarvittaessa toimenpidelistaus. Merkitse `[varmista — tietosuojavastaavan
arvioitava]` kohtiin, joissa poikkeuksen soveltuminen on tulkinnanvaraista.

## Muista

Jos pyyntö paljastaa laajemman ongelman (esim. tietoja säilytetty liian kauan, peruste
puuttuu), nosta se esiin — yksittäinen pyyntö voi olla oire käsittelyn puutteesta, jonka
korjaaminen kuuluu `data-protection-assessment`-skillille.

## Mitä tämä skill EI tee

- **Ei korvaa tietosuojavastaavan tai juristin arviota.** Kielteinen tai osittainen päätös ja tulkinnanvaraisen poikkeuksen soveltaminen kuuluvat asiantuntijalle.
- **Ei vahvista GDPR-artikloja (15–22 art) tai tietosuojalain pykäliä muistista.** Oikeuksien edellytykset, poikkeukset ja erityislain rajaukset tarkistetaan lähteestä.
- **Ei tee päätöstä siitä, kieltäydytäänkö pyynnöstä, eikä tunnista pyytäjää puolestasi.** Tuottaa vastausluonnoksen; toimenpiteet ja tunnistus jäävät rekisterinpitäjälle.
- **Ei kokoa tarkastuspyynnön tietoja eikä tarkista, paljastuuko jäljennöksessä sivullisten tietoja** — tämä on tehtävä järjestelmissä manuaalisesti.
- **Ei käsittele viranomaisen julkisuuslakiin perustuvaa tietopyyntöä.** Se on eri asia kuin rekisteröidyn GDPR-pyyntö → /hallinto-oikeus:julkisuus-ja-tietopyynnot.
- **Ei tee ilmoitusta valvontaviranomaiselle puolestasi.** Kertoo rekisteröidylle valitusoikeudesta tietosuojavaltuutetun toimistolle, mutta ei asioi viranomaisen kanssa.

## Jatka tästä

- Pyynnön paljastama käsittelyn puute (peruste, säilytysaika) → /tietosuoja:tietosuoja-arviointi
- Informoinnin tai selosteen päivitys pyynnön johdosta → /tietosuoja:tietosuojaseloste
- Viranomaisen julkisuuslakiin perustuva tietopyyntö (ei GDPR-pyyntö) → /hallinto-oikeus:julkisuus-ja-tietopyynnot
- Vastauksen asiallisuus ja selkokielisyys → /juristi:suomen-kieli
- Oikeuksien pykälien ja erityislain poikkeusten tarkistus → /juristi:oikeustutkimus
