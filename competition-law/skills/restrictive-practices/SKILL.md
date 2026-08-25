---
name: restrictive-practices
description: >
  Kiellettyjen kilpailunrajoitusten ja määräävän markkina-aseman
  väärinkäytön arviointi Suomen ja EU:n kilpailuoikeuden mukaan
  (kilpailulaki 948/2011, SEUT 101 ja 102 artikla). Käytä tätä skilliä,
  kun käyttäjä arvioi sopimuksen, yhteistyön tai menettelytavan
  kilpailuoikeudellista sallittavuutta: jakelusopimus, hinnoitteluehto,
  kilpailijayhteistyö, tietojenvaihto, toimialajärjestön toiminta,
  yksinoikeudet, alennusjärjestelmät tai määräävän aseman kysymykset –
  tai kun epäillään kartellia tai harkitaan leniencyä tai
  vahingonkorvauskannetta. Triggeröi sanoista: kartelli,
  kilpailunrajoitus, määrähinnoittelu, RPM, tietojenvaihto, määräävä
  markkina-asema, ryhmäpoikkeus, leniency, seuraamusmaksu, KKV,
  kilpailuoikeudellinen vahingonkorvaus.
---

# Kilpailunrajoitukset — kiellot, itsearviointi ja seuraamukset

Tämä skill jäsentää kilpailunrajoitusten arvioinnin kilpailulain
(948/2011) 2 luvun ja SEUT 101–102 artiklan mukaan. Perusteet,
rikkomustyypit ja seuraamuskartta:
`references/kilpailuoikeus-perusteet.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** arviot ovat tarkistettavia — ei oikeudellista
> neuvontaa. Katso `kilpailuoikeus/CLAUDE.md` — erityisesti ehdoton
> negatiivirajaus: kartelliavustusta ei anneta, laillinen polku on
> lopettaminen ja leniency.

## Tarkista laki ja ryhmäpoikkeukset lähteestä

Hae kilpailulain säännökset **`juristi:oikeustutkimus`-skillillä** ja
**voimassa olevat ryhmäpoikkeusasetukset raja-arvoineen EUR-Lexistä**
— ne uudistuvat määräajoin. Ratkaisukäytäntö (MAO, KHO,
EU-tuomioistuin, komissio) lähteestä tunnuksineen.

## Vaihe 1: Jäsennä järjestely

1. **Suhde**: kilpailijoiden välinen (horisontaalinen), eri
   portaiden välinen (vertikaalinen) vai yksipuolinen menettely?
2. **Kauppavaikutus**: rajoittuuko Suomeen vai onko EU-kauppavaikutus
   (→ SEUT rinnalle)?
3. **Markkinat alustavasti**: tuote- ja maantieteelliset markkinat,
   osapuolten asema — tarkka markkinamäärittely vasta jos tarpeen.

## Vaihe 2: Horisontaaliset järjestelyt

- **Paljaat rajoitukset** (hinnat, jako, tarjouskartelli,
  tuotannonrajoitus) ovat kiellettyjä tarkoituksensa perusteella —
  ei tehokkuuspuolustusta käytännössä. Jos tällainen paljastuu:
  ohjaa lopettamiseen ja leniency-harkintaan, älä jatkamiseen.
- **Tietojenvaihto**: arvioi tiedon luonne (hinnat ja aikeet vs.
  historiallinen aggregoitu tilasto), tuoreus, yksilöitävyys ja
  vaihtotapa (suora, järjestö, hub-and-spoke) — rajat suuntaviivoista
  lähteestä.
- **Sallittu yhteistyö**: T&K, erikoistuminen, yhteishankinnat,
  standardointi — ryhmäpoikkeusten ja suuntaviivojen edellytyksin
  (markkinaosuusrajat lähteestä). Yhteistarjoukset →
  `julkiset-hankinnat:tarjouspyynto-ja-tarjous`.

## Vaihe 3: Vertikaaliset järjestelyt

- **Kovat rajoitukset**: jälleenmyyntihinnan määrääminen (RPM),
  absoluuttinen aluesuoja, verkkomyynnin tosiasiallinen esto —
  vievät ryhmäpoikkeuksen ja ovat lähtökohtaisesti kiellettyjä.
  Enimmäis- ja suositushinnat eri asia — rajat lähteestä.
- **Ryhmäpoikkeuksen itsearviointi**: markkinaosuusrajat ja
  poissuljetut ehdot voimassa olevasta vertikaaliasetuksesta
  `[tarkista]`; dokumentoi arvio.
- Tyypilliset lausekkeet: yksinmyynti, valikoiva jakelu,
  kilpailukielto (kesto!), pariteettilausekkeet — käy lauseke
  kerrallaan (kytkös `sopimukset:sopimuksen-tarkistus`-metodiin).

## Vaihe 4: Määräävä markkina-asema

1. **Onko asema määräävä?** Markkinamäärittely + osuudet + muut
   tekijät; Suomessa huomioi myös kilpailulain erityissäännökset
   (mm. päivittäistavarakauppa — tarkista lähteestä).
2. **Onko menettely väärinkäyttöä?** Saalistushinnoittelu,
   uskollisuusalennukset, sitominen, toimituskielto,
   marginaalipuristus — arviointikehikot oikeuskäytännöstä lähteestä.
3. Määräävässä asemassa olevan **erityinen vastuu**: myös tavallinen
   kaupallinen ehto voi olla kielletty — riskimerkintä matalammalle.

## Vaihe 5: Seuraamukset ja yksityisoikeudellinen täytäntöönpano

- Seuraamuskartta referenssissä: seuraamusmaksu, pätemättömyys,
  korjaustoimenpiteet, liitännäisseuraukset.
- **Leniency**: vapautuminen/alentaminen (laissa vahvistettu) —
  ensimmäisen paljastajan etu, nopeus ratkaisee; menettely KKV:n
  ohjeista `[tarkista]`.
- **Vahingonkorvaus (1077/2016)**: kantajan ja vastaajan asetelmat —
  rikkomuspäätöksen sitovuus, ylihinnan arviointi ja siirtäminen,
  vanhentumisajat lähteestä. Kanne yleisessä tuomioistuimessa →
  `riidanratkaisu:haastehakemus`.

## Mitä tämä skill EI tee

- **Ei avusta kartellissa tai sen peittelyssä** — ehdoton
  kieltäytyminen; laillinen polku kerrotaan (CLAUDE.md).
- **Ei vahvista markkinaosuusrajoja, seuraamusprosentteja tai
  vanhentumisaikoja muistista** — lähteestä tai `[tarkista]`.
- **Ei tee ekonometristä markkina- tai vahinkoanalyysiä** — se
  jäsentää oikeudellisen kehikon; kvantifiointi ekonomisteille.
- **Ei anna "clearancea"** — itsearvio ei sido viranomaista; aidosti
  epävarmoissa keskustelu KKV:n kanssa.
- **Ei korvaa yrityskauppa-arviota** — se on oma menettelynsä →
  `yrityskauppavalvonta`.

## Jatka tästä

- Yrityskaupan ilmoitusvelvollisuus → /kilpailuoikeus:yrityskauppavalvonta
- Compliance-ohjelma ja tarkastusvalmius → /kilpailuoikeus:kilpailu-compliance
- Jakelusopimuksen lausekkeiden muotoilu → /sopimukset:sopimuksen-laatiminen
- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
- Vahingonkorvauskanne tuomioistuimessa → /riidanratkaisu:haastehakemus
