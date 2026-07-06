---
name: oikeustapaus-referointi
description: >
  Tuomioistuinratkaisun jäsentäminen ja referointi: ennakkopäätöksen tai
  muun ratkaisun olennaisen sisällön poiminta rakenteiseen muotoon
  (tunnistetiedot, oikeuskysymys, faktat, lopputulos, perustelujen ydin
  eli ratio, merkitys). Käytä tätä skilliä, kun KKO:n, KHO:n,
  hovioikeuden, markkinaoikeuden tai muun tuomioistuimen ratkaisu pitää
  tiivistää, kun arvioidaan ratkaisun soveltuvuutta omaan tapaukseen, tai
  kun kootaan ratkaisukäytäntöä aiheesta. Triggeröi sanoista: referoi
  ratkaisu, tiivistä tuomio, ennakkopäätös, KKO, KHO, ratio decidendi,
  oikeusohje, ratkaisun merkitys, prejudikaatti, oikeustapaus,
  ratkaisukäytäntö, mitä KKO linjasi.
---

# Oikeustapauksen referointi — ratkaisun ydin rakenteiseen muotoon

Tämä skill jäsentää tuomioistuinratkaisun olennaisen sisällön niin, että
sitä voi käyttää ja arvioida luotettavasti. **Referointi perustuu vain
ratkaisun varsinaiseen tekstiin**, ei muistiin eikä otsikkotietoon yksin.

> **Vastuuvapaus:** referaatti on tarkistettava luonnos — ei
> oikeudellista neuvontaa. Ratkaisun sisältöä ei esitetä muistista.
> Katso `juristi/CLAUDE.md`.

## Hae ratkaisu lähteestä ensin

Hae ratkaisun **varsinainen teksti** `juristi:oikeustutkimus`-skillillä
(oik.ai/Finlex, `get_decision`/`search_decisions`) tai lue käyttäjän
toimittama ratkaisu. **Älä referoi ratkaisua pelkän tunnuksen tai
muistikuvan perusteella** — ratkaisuselosteen otsikko (headnote) ei ole
sama kuin perustelut. Jos et saa ratkaisua lähteestä, sano se äläkä
keksi sisältöä.

## Vaihe 1: Tunnistetiedot

- **Ratkaisutunnus** oikeassa muodossa (KKO:VVVV:NN, KHO:VVVV:NN), antopäivä,
  tuomioistuin ja kokoonpano (esim. täysistunto, jaosto) sekä mahdollinen
  äänestys (äänestysratkaisu).

## Vaihe 2: Oikeuskysymys

- Mihin **oikeudelliseen kysymykseen** ratkaisu vastaa? Muotoile se
  täsmällisesti — tämä ohjaa koko referaatin.

## Vaihe 3: Faktat ja prosessihistoria

- Olennaiset tosiseikat tiivistettyinä (vain ratkaisun kannalta
  merkitykselliset) ja alempien asteiden ratkaisut pääpiirteittäin
  (käräjäoikeus → hovioikeus → KKO; tai hallinto-oikeus → KHO).

## Vaihe 4: Lopputulos

- Mitä tuomioistuin **päätti** (esim. valitus hyväksyttiin/hylättiin,
  alempi ratkaisu pysytettiin/kumottiin). Erota lopputulos perusteluista.

## Vaihe 5: Perustelujen ydin (ratio decidendi)

- **Oikeusohje**, jonka tuomioistuin ratkaisun perustaksi asetti — se,
  mikä tekee ratkaisusta merkityksellisen.
- **Erota ratio ja obiter**: kaikki perusteluissa lausuttu ei ole
  kantava oikeusohje. Merkitse, mikä on ratkaisun ydin ja mikä
  sivuhuomautus.
- Viittaa perustelukohtiin, jos ne ovat numeroidut; lainaa täsmällisesti
  ja erota suora lainaus omasta tiivistyksestä.
- **Äänestysratkaisussa** erota enemmistön perustelut ja eri mieltä
  olleiden kannat.

## Vaihe 6: Merkitys ja soveltuvuus

- **Prejudikaattiarvo**: mihin oikeusohje yleistyy ja mihin ei.
- **Soveltuvuus omaan tapaukseen**: mitkä faktat ovat samanlaiset, mitkä
  erottavat (distinguishing). Älä ylitulkitse — yhden ratkaisun ohje on
  sidoksissa sen kysymyksenasetteluun.
- **Onko ratkaisu yhä ajantasainen?** Lainsäädäntö on voinut muuttua
  ratkaisun jälkeen — tarkista, ettei oikeusohje perustu kumottuun
  säännökseen (`oikeustutkimus`).

## Vaihe 7: Koottu referaatti

Tuota jäsennelty referaatti yllä olevin otsikoin. Pidä se täsmällisenä
ja merkitse, mikä on suoraa ratkaisutekstiä ja mikä omaa tulkintaa
soveltuvuudesta. Kun kokoat useita ratkaisuja, esitä ne samalla
rakenteella ja nosta esiin linja sekä mahdolliset poikkeamat.

## Mitä tämä skill EI tee

- **Ei referoi ratkaisua muistista tai pelkän otsikon perusteella** —
  varsinaisesta tekstistä lähteestä.
- **Ei sekoita ratiota ja obiteria** eikä esitä sivuhuomautusta kantavana
  oikeusohjeena.
- **Ei väitä ratkaisun sisältöä tarkistamatta** lähteestä.
- **Ei ylitulkitse prejudikaattiarvoa** yli ratkaisun kysymyksenasettelun.

## Jatka tästä

- Ratkaisun ja voimassa olevan säännöksen haku → /juristi:oikeustutkimus
- Ratkaisun selittäminen asiakkaalle yleiskielellä → /juristi:selkokielistaja
- Viittausmuotojen ja kirjelmän tarkistus → /juristi:asiakirjan-tarkistus
- Argumentaation testaus vastapuolen näkökulmasta → /riidanratkaisu:vastapuoli
