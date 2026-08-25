---
name: merger-control
description: >
  Yrityskauppavalvonta Suomessa ja EU:ssa (kilpailulaki 948/2011 4 luku,
  EU:n sulautuma-asetus). Käytä tätä skilliä, kun käyttäjä arvioi,
  pitääkö yrityskauppa ilmoittaa KKV:lle tai komissiolle, valmistelee
  yrityskauppailmoitusta, suunnittelee kaupan aikataulua
  täytäntöönpanokiellon kanssa, arvioi sitoumusten tarvetta tai
  gun jumping -riskiä, tai vastaa viranomaisen tietopyyntöihin
  yrityskauppatutkinnassa. Triggeröi sanoista: yrityskauppailmoitus,
  liikevaihtorajat, KKV-ilmoitus, täytäntöönpanokielto, gun jumping,
  ensi vaihe, toinen vaihe, sitoumukset, yrityskaupan kielto,
  sulautuma-asetus, EUMR, liitännäisrajoitukset.
---

# Yrityskauppavalvonta — ilmoitus, menettely ja täytäntöönpanokielto

Tämä skill jäsentää yrityskauppavalvonnan kilpailulain (948/2011)
4 luvun (otsikko vahvistettu) ja EU:n sulautuma-asetuksen mukaan.
Perusteet: `../restrictive-practices/references/competition-law-fundamentals.md`.
Transaktion kokonaisuus (DD, kauppakirja, closing) →
`company-law:corporate-transactions`; tämä skill kattaa kilpailuosion.

> **Vastuuvapaus:** arviot ja luonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. **Liikevaihtorajat muuttuivat viimeksi 2023 —
> älä käytä muistinvaraisia rajoja.** Katso `competition-law/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista rajat ja menettely lähteestä

Hae kilpailulain 4 luvun säännökset ja **voimassa olevat
liikevaihtorajat** **`legal-core:legal-research`-skillillä** ja KKV:n
ohjeista `[tarkista]`. EU-tason rajat sulautuma-asetuksesta
(EUR-Lex). KKV:n ratkaisukäytäntö ja MAO/KHO-linjaukset lähteestä.

## Vaihe 1: Ilmoitusvelvollisuuden arviointi

1. **Onko kyse yrityskaupasta?** Määräysvallan hankinta, liiketoiminnan
   hankinta, yhteisyritys (täyden toiminnan kriteeri) — määritelmät
   lähteestä; myös vähemmistöosuus voi tuoda tosiasiallisen
   määräysvallan.
2. **Liikevaihtorajat**: osapuolten liikevaihdot lasketaan
   konsernitasolla; laskentasäännöt (mihin liikevaihto kohdistetaan,
   ostajan ryhmä, myyjän osalta vain kohde) lähteestä. **Jos rajoja ei
   ole haettu lähteestä tässä istunnossa, älä kirjoita tuotokseen
   mitään euromääräistä rajalukua — ei edes `[tarkista]`-varauksella.**
   Muistinvarainen luku on todennäköisesti vanhentunut (rajat muuttuivat
   2023 olennaisesti alaspäin), ja varauksellakin esitetty vanha luku
   ohjaa lukijan väärään johtopäätökseen. Kirjoita sen sijaan:
   "voimassa olevat rajat: kilpailulain 22 § — hae lähteestä ennen
   johtopäätöstä". Älä esitä johtopäätöstä "ilmoitusvelvollisuus
   täyttyy / ei täyty" ennen kuin rajat on tarkistettu.
3. **EU vai KKV?** Sulautuma-asetuksen rajat ylittävä kauppa
   komissiolle (one stop shop); siirtomekanismit molempiin suuntiin —
   tarkista myös komission nykyinen siirtokäytäntö raja-arvot
   alittavissa kaupoissa lähteestä.
4. **Rajat alittuvat?** Dokumentoi arvio. Huomaa, että muu
   kilpailuoikeus (mm. tietojenvaihto valmistelussa) soveltuu silti.

## Vaihe 2: Ilmoituksen valmistelu

- **Sisältö**: osapuolet ja ryhmät, kaupan rakenne, relevantit
  markkinat ja osuudet, päällekkäisyydet (horisontaaliset) ja
  kytkennät (vertikaaliset/konglomeraatti), tehokkuusperustelut —
  ilmoituskaavan vaatimukset KKV:n ohjeista.
- **Esivaiheen yhteydenpito** KKV:hen ennen muodollista ilmoitusta —
  suositeltava isoissa tai ongelmallisissa kaupoissa.
- Markkinatietojen kokoaminen: sisäiset dokumentit (huom. ne voidaan
  pyytää — strategiapaperien kieli!), asiakas- ja kilpailijalistat.

## Vaihe 3: Menettely ja aikataulu

- **Käsittelyvaiheet**: ensi vaihe ja jatkokäsittely (toinen vaihe) —
  määräajat ja niiden pidennysperusteet lähteestä `[tarkista]`;
  kello pysähtyy puutteellisilla tiedoilla.
- **Täytäntöönpanokielto**: kauppaa ei saa panna täytäntöön ennen
  hyväksyntää — **gun jumping** -riski kattaa myös ennenaikaisen
  määräysvallan käytön ja kilpailijatiedon vaihdon ennen clearancea.
  Laadi clean team -järjestelyt ja integraation valmistelun
  pelisäännöt (mitä saa / ei saa tehdä ennen closingia).
- **Sitoumukset**: jos kauppa estää kilpailua, sitoumusneuvottelut
  (divestoinnit ensisijaisia) — ajoitus ja menettely lähteestä.
- **Kielto**: MAO voi KKV:n esityksestä kieltää kaupan — harvinaista
  mutta mahdollista; muutoksenhaku KHO:hon.
- Kauppakirjan ehdollisuus: clearance closing-ehtona →
  `company-law:corporate-transactions`.

## Liitännäisrajoitukset

Kauppaan liittyvät kilpailukiellot ja muut liitännäisrajoitukset
(myyjän kilpailukielto, rekrytointikiellot, toimitussopimukset)
arvioidaan suoraan liitännäisrajoitusperiaatteiden mukaan — kestot ja
laajuudet komission tiedonannosta `[tarkista]`; ylimenevä osa on
tavallista kilpailunrajoitusarviointia → `restrictive-practices`.

## Mitä tämä skill EI tee

- **Ei vahvista liikevaihtorajoja tai käsittelyaikoja muistista** —
  lähteestä tai `[tarkista]`.
- **Ei jätä ilmoitusta** — luonnokset menevät ihmiselle ja
  asiamiehelle.
- **Ei ennusta clearancea** — markkinavaikutusarvio on
  `[varmista — kilpailujuristin arvioitava]`; ekonometria
  ekonomisteille.
- **Ei avusta täytäntöönpanokiellon kiertämisessä** — gun jumping
  -riski kerrotaan, ei kierretä.
- **Ei kata ulkomaisten investointien seurantaa** (FDI) eikä
  ulkomaisia tukia koskevaa asetusta (FSR) syvällisesti — nosta
  tarve esiin ja ohjaa asiantuntijalle.

## Jatka tästä

- Sopimusten ja yhteistyön kilpailuarvio → /kilpailuoikeus:kilpailunrajoitukset
- Integraation valmistelun pelisäännöt → /kilpailuoikeus:kilpailu-compliance
- Transaktion kokonaisuus ja kauppakirja → /yhtiooikeus:yritysjarjestelyt
- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
