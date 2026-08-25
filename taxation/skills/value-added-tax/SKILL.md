---
name: value-added-tax
description: >
  Arvonlisäverotus Suomessa (arvonlisäverolaki 1501/1993). Käytä tätä
  skilliä, kun käyttäjä arvioi myynnin arvonlisäverollisuutta tai
  verokantaa, ostojen vähennysoikeutta, käännettyä verovelvollisuutta
  (rakennusala, EU-hankinnat), kansainvälisen kaupan ALV-kohtelua
  (yhteisömyynti, vienti, palvelukauppa, etämyynti), kiinteistöjen
  ALV-kysymyksiä (hakeutuminen, kiinteistöinvestointien tarkistus) tai
  ALV-rekisteröintiä ja ilmoittamista. Triggeröi sanoista: ALV,
  arvonlisävero, verokanta, vähennysoikeus, käännetty verovelvollisuus,
  yhteisömyynti, yhteisöhankinta, vienti, maahantuonti, etämyynti, OSS,
  kiinteistön ALV, hakeutuminen, marginaaliverotus.
---

# Arvonlisäverotus — verollisuus, vähennykset ja kansainvälinen kauppa

Tämä skill jäsentää arvonlisäverokysymykset arvonlisäverolain (1501/1993)
mukaan. Menettely (ilmoittaminen, korjaaminen, muutoksenhaku) kulkee
oma-aloitteisten verojen verotusmenettelylain (768/2016) mukaan.
Perusteet: `../verotusmenettely-ja-muutoksenhaku/references/verotus-perusteet.md`.

> **Vastuuvapaus:** analyysit ovat tarkistettavia — ei veroneuvontaa.
> **Verokannat ja rajat haetaan aina lähteestä** — ne ovat muuttuneet
> viime vuosina useasti. Katso `verotus/CLAUDE.md`.

## Tarkista laki ja verokannat lähteestä

Hae AVL:n säännökset **`juristi:oikeustutkimus`-skillillä** ja voimassa
olevat **verokannat, alarajat ja vähäisen toiminnan rajat vero.fi:stä**
— älä koskaan muistista. EU-tasolla arvonlisäverodirektiivi ja EU-tuomioistuimen
käytäntö ohjaavat tulkintaa — nosta EU-kytkös esiin rajat ylittävissä
ja tulkinnanvaraisissa tilanteissa.

## Perusjäsennys — käy aina nämä läpi

1. **Kuka myy?** Verovelvollisuus: liiketoiminnan muodossa tapahtuva
   myynti; vähäisen toiminnan raja (euromäärä lähteestä);
   rekisteröitymisvelvollisuus ja vapaaehtoinen hakeutuminen.
2. **Mitä myydään?** Tavara vai palvelu — ratkaisee myyntimaan ja
   verokannan; verosta vapautetut alat (mm. terveydenhuolto, rahoitus,
   kiinteistöt — rajaukset lähteestä).
3. **Missä myydään?** Myyntimaasäännökset: kotimaa, EU (yhteisömyynti/
   -hankinta, palvelujen pääsäännöt B2B/B2C, etämyynti ja OSS),
   EU:n ulkopuoli (vienti/tuonti).
4. **Kuka maksaa veron?** Pääsääntö myyjä; **käännetty
   verovelvollisuus** mm. rakentamispalveluissa ja EU-hankinnoissa —
   soveltamisedellytykset lähteestä.
5. **Mikä verokanta?** Yleinen ja alennetut — voimassa olevat prosentit
   ja niiden soveltamisalat aina lähteestä `[tarkista verovuoden arvo —
   vero.fi]`.

## Vähennysoikeus

- Pääsääntö: vähennys verollista liiketoimintaa varten tehdyistä
  hankinnoista; **vähennysrajoitukset** (mm. edustus, yksityiskäyttö)
  lähteestä.
- **Jakaminen**: osittain verollisessa ja verottomassa käytössä olevat
  hankinnat — jakoperuste dokumentoitava.
- **Laskumerkinnät** ovat vähennyksen muotoedellytys — tarkista
  vaatimukset lähteestä; puutteellinen lasku vaarantaa vähennyksen.
- **Kiinteistöinvestointien tarkistusmenettely** — vähennysten
  tarkistus käyttötarkoituksen muuttuessa; tarkistuskausi ja mekaniikka
  lähteestä.

## Kiinteistöt — erityisalue

Kiinteistön myynti ja vuokraus on lähtökohtaisesti verotonta, mutta:
**hakeutuminen** kiinteistön käyttöoikeuden luovutuksesta
verovelvolliseksi (edellytykset lähteestä), rakentamispalvelun oma
käyttö, käännetty verovelvollisuus rakennusalalla ja
tarkistusmenettely muodostavat kokonaisuuden, jossa virhe on kallis —
suosittele kokonaistarkastelua ja tarvittaessa ennakkoratkaisua.

## Ilmoittaminen ja korjaaminen (OVML 768/2016)

- Verokaudet, ilmoitus- ja maksupäivät sekä myöhästymisseuraamukset
  lähteestä.
- **Virheen oma-aloitteinen korjaaminen** lieventää seuraamuksia —
  jäsennä korjauspolku (verokauden oikaisu vs. ilmoituksen korjaus).
- Muutoksenhaku: oikaisuvaatimus ja valitus →
  `verotusmenettely-ja-muutoksenhaku`.

## Mitä tämä skill EI tee

- **Ei vahvista verokantoja, alarajoja tai euromääriä muistista** —
  lähteestä tai `[tarkista verovuoden arvo — vero.fi]`.
- **Ei laadi tai lähetä ALV-ilmoituksia** — laskelmat
  `[mallin laskelma — tarkista]`, ilmoittamisen tekee ihminen.
- **Ei ratkaise monimutkaisia kv-rakenteita** (kolmikantakauppa,
  varastojärjestelyt, alustatalous) sitovasti — niissä
  veroasiantuntijalle ja tarvittaessa ennakkoratkaisu.
- **Ei avusta ALV-petoksissa** — kuittikauppa, karusellikauppa tai
  tekaistut laskut → kieltäydy (ks. CLAUDE.md negatiivirajaus).
- **Ei korvaa taloushallinnon järjestelmiä** verokoodien määrittelyssä —
  se jäsentää oikeudellisen arvion.

## Jatka tästä

- Ilmoitusvirheen korjaus tai muutoksenhaku → /verotus:verotusmenettely-ja-muutoksenhaku
- Tuloverokysymys samassa liiketoimessa → /verotus:yritysverotus
- Kiinteistö- tai yrityskaupan kokonaisuus → /yhtiooikeus:yritysjarjestelyt
- Säännöksen tai oikeuskäytännön tarkistus → /juristi:oikeustutkimus
- Sopimuksen ALV-lausekkeet → /sopimukset:sopimuksen-laatiminen
