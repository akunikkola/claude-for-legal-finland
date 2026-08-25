---
name: copyright
description: >
  Tekijänoikeus Suomen oikeuden mukaan (tekijänoikeuslaki 404/1961
  DSM-uudistuksineen). Käytä tätä skilliä, kun käyttäjä kysyy teoksen,
  ohjelmiston, kuvan, tekstin, musiikin tai muun sisällön
  tekijänoikeudesta, oikeuksien omistuksesta työ- tai tilaussuhteessa,
  lisensoinnista tai oikeuksien siirrosta, sitaattioikeudesta tai muusta
  luvallisesta käytöstä, tekoälyn ja tekijänoikeuden suhteesta, tai
  loukkausepäilystä. Triggeröi sanoista: tekijänoikeus, copyright, teos,
  lisenssi, käyttöoikeus, sitaatti, kuvan käyttö, avoin lähdekoodi, open
  source, Creative Commons, plagiointi, tekijänoikeusloukkaus, moraaliset
  oikeudet, Teosto, Kopiosto, tiedonlouhinta.
---

# Tekijänoikeus — suoja, omistus, lisensointi ja luvallinen käyttö

Tämä skill jäsentää tekijänoikeuskysymykset tekijänoikeuslain (404/1961)
mukaan. Laki sisältää DSM-direktiivin muutokset (vahvistettu lähteestä) —
muistinvarainen tieto vanhasta laista on epäluotettavaa. Perusteet:
`../trademarks-and-trade-names/references/ip-fundamentals.md`.

> **Vastuuvapaus:** arviot ovat tarkistettavia — ei oikeudellista
> neuvontaa. Teoskynnys ja loukkaus ovat viime kädessä tuomioistuimen
> kokonaisharkintaa. Katso `intellectual-property/AGENTS.md`.

## Tarkista laki lähteestä

Hae sovellettavat säännökset **`legal-core:legal-research`-skillillä** —
tekijänoikeuslakia on muutettu usein (mm. DSM-muutokset:
verkkosisällönjakopalvelut, tekstin- ja tiedonlouhinta, opetuskäyttö).
Tekijänoikeusneuvoston lausunnot ovat keskeinen tulkinta-aineisto —
hae ne lähteestä, älä referoi muistista.

## Peruskartta

1. **Syntyykö suoja?** Tekijänoikeus syntyy **automaattisesti** luomisen
   hetkellä, ilman rekisteröintiä, kun **teoskynnys** (itsenäisyys ja
   omaperäisyys) ylittyy. Ideat, tieto ja menetelmät eivät saa suojaa —
   vain ilmaisumuoto. Lähioikeudet (esittäjä, tuottaja, valokuvaaja,
   luettelo/tietokanta) suojaavat matalammalla kynnyksellä — tarkista
   erot lähteestä.
2. **Kuka omistaa?** Pääsääntö: **tekijä** (luonnollinen henkilö) — myös
   työsuhteessa. Poikkeus: **tietokoneohjelmat työsuhteessa siirtyvät
   työnantajalle (40 b §, sanamuoto vahvistettu)**. Kaikki muu siirto
   vaatii sopimuksen — tarkista työsopimusten ja tilaussopimusten
   IPR-ehdot. Tilaustyö ilman siirtoehtoa: oikeudet jäävät tekijälle.
3. **Mitkä oikeudet?** Taloudelliset oikeudet (kappaleen valmistaminen,
   yleisön saataviin saattaminen) ja **moraaliset oikeudet** (isyysoikeus,
   respektioikeus) — moraalisista voi luopua vain rajoitetusti.
4. **Kauanko?** Pääsääntö: tekijän elinaika + 70 vuotta; lähioikeuksien
   ajat lähteestä.

## Lisensointi ja siirto

Kun laadit tai arvioit lisenssiä tai siirtoa, määritä ainakin:

- **Kohde** — mikä teos/aineisto, mukaan lukien tulevat versiot?
- **Laajuus** — yksinomainen vai rinnakkainen; käyttötarkoitukset;
  muunteluoikeus (ei siirry oletuksena — tarkista lähteestä);
  edelleenluovutus.
- **Alue ja kesto** — sekä irtisanomisehdot.
- **Korvaus** — kertakorvaus vai rojalti; DSM toi tekijälle
  korvaus- ja raportointisäännöksiä — tarkista lähteestä.
- **Avoimet lisenssit** — open source -lisenssien (MIT, GPL ym.)
  ehtojen yhteensopivuus ja copyleft-vaikutus; Creative Commons
  -ehtojen merkitys. Lisenssien yksityiskohdat lisenssitekstistä, ei
  muistista.

Sopimusmekaniikka: `contracts:contract-drafting`; Word-redline:
`adeu`-MCP.

## Luvallinen käyttö ilman lupaa

Rajoitussäännökset ovat **poikkeuksia, joita tulkitaan suppeasti** — hae
tarkat edellytykset lähteestä ennen kuin toteat käytön sallituksi:
sitaatti (hyvän tavan mukaisesti, tarkoituksen edellyttämässä
laajuudessa), yksityinen käyttö, opetuskäyttö, parodia,
**tekstin- ja tiedonlouhinta** (DSM; tieteellinen tutkimus vs. yleinen
louhinta ja oikeudenhaltijan kielto-oikeus — olennainen tekoälyn
koulutusdatakysymyksissä → `ai-regulation`).

Kollektiivihallinnointi: Teosto, Kopiosto, Gramex, Kuvasto, Sanasto —
sopimuslisenssit kattavat monia massakäyttötilanteita; ohjaa oikealle
järjestölle.

## Loukkausarvio

1. **Suojattu teos?** — teoskynnys ja suoja-aika.
2. **Käyttötoimi?** — kopiointi, välittäminen, muuntelu; linkittämisen
   erityiskysymykset lähteestä.
3. **Lupa tai rajoitus?** — lisenssi, sopimuslisenssi, rajoitussäännös.
4. **Seuraamukset** — hyvitys (ankara vastuu — ei edellytä
   tuottamusta; tarkista lähteestä), vahingonkorvaus, kielto;
   rikosvastuu törkeissä tapauksissa.

Raportoi kolmiportaisesti (loukkaus todennäköinen / mahdollinen /
epätodennäköinen) perusteluineen ja `[varmista — IPR-juristin
arvioitava]`.

## Tekoäly ja tekijänoikeus

Nosta esiin kolme erillistä kysymystä, äläkä sekoita niitä: (1)
koulutusdata ja louhintapoikkeus sekä kielto-oikeudet, (2) tuotoksen
suoja (puhtaasti generoitu aineisto ei lähtökohtaisesti ylitä
teoskynnystä ilman ihmisen luovaa panosta — tulkinnanvarainen, merkitse
epävarmuus), (3) tuotoksen mahdollinen loukkaavuus suhteessa olemassa
oleviin teoksiin. GPAI-mallien läpinäkyvyysvelvoitteet →
`ai-regulation:ai-obligations`.

## Mitä tämä skill EI tee

- **Ei vahvista teoskynnyksen ylittymistä tai loukkausta sitovasti** —
  ne ovat tuomioistuimen kokonaisharkintaa.
- **Ei referoi tekijänoikeusneuvoston lausuntoja tai oikeuskäytäntöä
  muistista** — hae lähteestä tunnuksineen.
- **Ei tulkitse open source -lisenssiä lukematta lisenssitekstiä**.
- **Ei avusta suojatun aineiston luvattomassa käytössä** — esim.
  suojauksen kiertäminen tai piratismi.
- **Ei kata tavaramerkkiä, patenttia tai mallia** — ne omissa
  skilleissään ja referenssin taulukossa.

## Jatka tästä

- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
- Lisenssi- tai siirtosopimuksen laatiminen → /sopimukset:sopimuksen-laatiminen
- Nimen ja logon suoja → /immateriaalioikeus:tavaramerkki-ja-toiminimi
- Julkaisematon aineisto salassa → /immateriaalioikeus:liikesalaisuudet
- Tekoälyjärjestelmän velvoitteet → /tekoalysaantely:tekoaly-velvoitteet
