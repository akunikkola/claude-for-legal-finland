---
name: trademarks-and-trade-names
description: >
  Tavaramerkin ja toiminimen suoja Suomen oikeuden mukaan (tavaramerkkilaki
  544/2019, toiminimilaki 128/1979). Käytä tätä skilliä, kun käyttäjä
  suunnittelee tuotteen, palvelun tai yrityksen nimeä tai logoa, valmistelee
  tavaramerkin rekisteröintiä (PRH, EUIPO, Madrid), arvioi erottamiskykyä
  tai sekaannusvaaraa, käsittelee väite- tai mitätöintiasiaa, epäilee
  merkkinsä tai nimensä loukkausta tai saa varoituskirjeen. Triggeröi
  sanoista: tavaramerkki, brändi, logo, tuotenimi, toiminimi, yrityksen
  nimi, rekisteröinti, sekaannusvaara, erottamiskyky, väite, loukkaus,
  varoituskirje, EUIPO, PRH, verkkotunnus, domain.
---

# Tavaramerkki ja toiminimi — suoja, rekisteröinti ja loukkaukset

Tämä skill auttaa nimen ja merkin suojastrategiassa, rekisteröinnin
valmistelussa ja loukkaustilanteissa. Perusteet ja keinovalikoima:
`references/ip-fundamentals.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** arviot ja luonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. **Skill ei näe rekistereitä** eikä koskaan
> vahvista, että nimi tai merkki on vapaa — se tuottaa hakustrategian
> ihmiselle. Katso `intellectual-property/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae tavaramerkkilain (544/2019) ja toiminimilain (128/1979) sovellettavat
säännökset, määräajat ja menettelyt **`legal-core:legal-research`-skillillä**.
Älä viittaa vanhaan tavaramerkkilakiin (7/1964) voimassa olevana.
Oikeuskäytäntö: markkinaoikeus (MAO), KKO ja EU-tavaramerkissä EUIPO:n
valituslautakunnat ja EU-tuomioistuin.

## Suojan suunnittelu (uusi nimi tai merkki)

1. **Kolmoistarkistus** — sama nimi voi törmätä kolmeen eri oikeuteen:
   toiminimi (kaupparekisteri), tavaramerkki (PRH/EUIPO) ja verkkotunnus
   (Traficom/muut). Käy kaikki läpi.
2. **Erottamiskyky** — kuvaileva ilmaus ei lähtökohtaisesti kelpaa
   tavaramerkiksi; arvioi suhteessa tavaroihin/palveluihin. Ehdota
   tarvittaessa erottamiskykyisempiä vaihtoehtoja.
3. **Estehakustrategia** — laadi ihmiselle lista: mistä haetaan (PRH:n
   tavaramerkkitietokanta, EUIPO/TMview, kaupparekisteri, verkkotunnukset,
   yleinen verkkohaku), millä hakusanoilla ja missä **Nizzan luokituksen**
   luokissa. Älä esitä hakutulosta itse.
4. **Alue ja reitti** — Suomi (PRH) / EU (EUIPO, yksi rekisteröinti koko
   EU:hun) / kansainvälinen (Madrid). Valinta liiketoiminnan alueen
   mukaan; kustannukset ja määräajat viranomaislähteistä.
5. **Luokitus** — määritä tavarat ja palvelut täsmällisesti; liian suppea
   ei suojaa, liian laaja altistuu käyttämättömyysväitteille
   (käyttöpakko — edellytykset lähteestä).

## Sekaannusvaara-arvio

Jäsennä arvio kolmella akselilla ja perustele jokainen:

- **Merkkien samankaltaisuus** — ulkoasu, lausuntatapa, merkityssisältö.
- **Tavaroiden/palvelujen samankaltaisuus** — luokat ohjaavat mutta eivät
  ratkaise.
- **Kohdeyleisö ja kokonaisvaikutelma** — huomioi merkin tunnettuus
  (laajalti tunnetun merkin laajempi suoja — edellytykset lähteestä).

Anna lopputulos kolmiportaisesti (sekaannusvaara todennäköinen /
mahdollinen / epätodennäköinen) ja merkitse `[varmista — IPR-juristin
arvioitava]` — sekaannusvaara on viime kädessä tuomioistuimen
kokonaisharkintaa.

## Loukkaustilanne

**Oma oikeus loukattu:** dokumentoi loukkaus → varmista oman oikeuden
voimassaolo ja kattavuus → keinot järjestyksessä
(`references/ip-fundamentals.md`): varoituskirje → neuvottelu/lisenssi →
kanne markkinaoikeudessa (kielto, hyvitys, vahingonkorvaus,
turvaamistoimi). Varoituskirjeluonnos: yksilöi oikeus, loukkaus, vaatimus
ja määräaika — vältä liioiteltuja uhkauksia.

**Varoituskirje saatu:** älä hätiköi — tarkista vastapuolen oikeuden
voimassaolo ja kattavuus, oman käytön aloitusajankohta ja mahdolliset
vastaperusteet (erottamiskyvyttömyys, käyttämättömyys, oma aiempi oikeus,
vakiintuminen). Vastausluonnos ihmisen tarkistettavaksi.

## Väite ja mitätöinti

Rekisteröintiä vastaan voi tehdä **väitteen** (määräaika rekisteröinnin
julkaisusta — tarkista lähteestä) ja myöhemmin vaatia **mitätöintiä tai
menettämistä** (mm. käyttämättömyys). Hallinnollinen menettely PRH:ssa /
EUIPO:ssa vs. kanne markkinaoikeudessa — vertaile reitit käyttäjän
tilanteeseen.

## Mitä tämä skill EI tee

- **Ei tee este- tai saatavuushakuja** eikä vahvista nimen tai merkin
  olevan vapaa — se laatii hakustrategian ihmiselle.
- **Ei jätä hakemuksia, väitteitä tai kanteita** eikä lähetä
  varoituskirjeitä — luonnokset menevät ihmiselle.
- **Ei vahvista määräaikoja tai maksuja muistista** — PRH:n/EUIPO:n
  lähteistä tai `[tarkista]`.
- **Ei anna sitovaa sekaannusvaara-arviota** — lopullinen arvio on
  tuomioistuimen/viranomaisen.
- **Ei kata patentteja, hyödyllisyysmalleja eikä mallioikeutta
  syvällisesti** — niissä patenttiasiamiehelle; perustaulukko
  referenssissä.

## Jatka tästä

- Säännöksen tai MAO/KKO-käytännön tarkistus → /juristi:oikeustutkimus
- Lisenssi- tai rinnakkaiselosopimus (coexistence) → /sopimukset:sopimuksen-laatiminen
- Tekijänoikeudellinen suoja samalle aineistolle → /immateriaalioikeus:tekijanoikeus
- Salassa pidettävä tieto nimen takana → /immateriaalioikeus:liikesalaisuudet
- Varoituskirjeen kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
