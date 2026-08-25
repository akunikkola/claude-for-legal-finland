---
name: eu-and-family-based-residence
description: >
  EU-kansalaisen oleskeluoikeus, perheperusteinen oleskelu, pysyvä
  oleskelulupa ja Suomen kansalaisuus (ulkomaalaislaki 301/2004,
  kansalaisuuslaki 359/2003). Käytä tätä skilliä, kun käsitellään
  EU/ETA-kansalaisen rekisteröintiä ja perheenjäsenten oleskelukortteja,
  perheenyhdistämistä ja toimeentuloedellytystä, pysyvän oleskeluluvan
  tai pitkään oleskelleen kolmannen maan kansalaisen aseman edellytyksiä,
  tai kansalaisuushakemuksen edellytyksiä. Triggeröi sanoista:
  EU-kansalaisen rekisteröinti, oleskelukortti, perheenyhdistäminen,
  perheside, toimeentuloedellytys, puolison oleskelulupa, pysyvä
  oleskelulupa, P-lupa, pitkään oleskellut, kansalaisuushakemus,
  kielitaitoedellytys, asumisaika.
---

# EU-oleskelu, perheside, pysyvä lupa ja kansalaisuus

Tämä skill jäsentää oleskelun polut työlupien ulkopuolella:
EU-kansalaiset, perheenjäsenet, pysyvä oleskelu ja kansalaisuus.
Perusteet: `../tyoperusteiset-oleskeluluvat/references/ulkomaalaisoikeus-perusteet.md`.

> **Vastuuvapaus:** jäsennykset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Edellytykset (toimeentulorajat, asumisajat) muuttuvat —
> kaikki luvut `[tarkista — migri.fi/Finlex]`. Katso
> `ulkomaalaisoikeus/CLAUDE.md`. Kansainvälinen suojelu ei kuulu tähän
> plugariin.

## Tarkista laki lähteestä

Hae UlkL:n (301/2004) ja kansalaisuuslain (359/2003) säännökset
**`juristi:oikeustutkimus`-skillillä**; toimeentulorajat ja
asumisaikalaskenta Migrin ohjeista `[tarkista]`. KHO:n käytäntö
(perhe-elämän suoja, toimeentulopoikkeukset, asumisajan katkokset)
lähteestä.

## EU/ETA-kansalainen ja perheenjäsenet

- **EU-kansalainen ei tarvitse oleskelulupaa**: oleskeluoikeus
  rekisteröidään Migrissä, kun oleskelu ylittää laissa säädetyn ajan
  — perusteet (työ, opiskelu, riittävät varat) lähteestä.
- **Perheenjäsenet**: EU-kansalaisen perheenjäsenen **oleskelukortti**
  (myös kolmannen maan kansalaiselle); perheenjäsenen määritelmä
  EU-oikeudessa on laajempi kuin kansallinen — tarkista kumpaa
  sovelletaan.
- Pohjoismaiden kansalaisten erityisasema (rekisteröinti DVV:ssä).
- Työnantajalle: EU-kansalaisen työnteko-oikeus on välitön —
  varmistusvelvollisuus silti → `tyonantajan-velvollisuudet`.

## Perheenyhdistäminen (kolmannen maan kansalaiset)

1. **Perheenkokoajan asema** — millä luvalla perheenkokoaja oleskelee;
   vaikutus edellytyksiin.
2. **Persidesuhteen määritelmä** — puoliso (ml. avoliitto
   edellytyksin), alaikäiset lapset; muut omaiset vain poikkeuksin —
   lähteestä.
3. **Toimeentuloedellytys** — euromääräiset rajat perheen koon mukaan
   `[tarkista — migri.fi]`; poikkeamisperusteet (mm. lapsen etu) ja
   KHO:n käytäntö lähteestä.
4. **Menettely** — kuka hakee ja mistä; perhesiteen selvittäminen
   (asiakirjat, DNA-tutkimus viimesijaisena); maahantulosäännösten
   kiertämisen arviointi (lumeavioliitto) — älä avusta kiertämisessä.

## Pysyvä oleskelu

- **Pysyvä oleskelulupa (P)**: yhtäjaksoinen asuminen
  määräaikaisella luvalla — asumisaika, sen laskenta (poissaolojen
  vaikutus) ja luvan peruste-edellytykset lähteestä `[tarkista]`.
- **Pitkään oleskelleen kolmannen maan kansalaisen EU-oleskelulupa**
  (laissa, termi vahvistettu) — rinnakkainen EU-pohjainen status;
  edut liikkuvuudessa.
- Hyöty työnantajalle ja henkilölle: rajoittamaton työnteko-oikeus,
  ei jatkolupasykliä — nosta polku esiin jo ensiluvan suunnittelussa.

## Kansalaisuus (359/2003)

Jäsennä edellytykset hakemusta varten (kaikki lähteestä):

- **Asumisaika** — yhtäjaksoinen tai kerätty; lyhennykset
  (mm. kielitaidon perusteella, avioliitto Suomen kansalaisen kanssa,
  kansalaisuudettomuus) — laskenta Migrin ohjeen mukaan.
- **Kielitaito** — suomi tai ruotsi, hyväksytyt todistukset (YKI-taso)
  `[tarkista]`.
- **Nuhteettomuus** — rikosten ja maksulaiminlyöntien vaikutus,
  odotusajat.
- **Toimeentulo ja selvitetty henkilöllisyys.**
- Kaksoiskansalaisuus sallittu Suomessa — lähtömaan laki tarkistettava
  erikseen.
- Ilmoitusmenettely erikseen (mm. entiset Suomen kansalaiset) —
  lähteestä.

## Mitä tämä skill EI tee

- **Ei vahvista toimeentulorajoja, asumisaikoja tai
  kielitaitovaatimuksia muistista** — lähteestä tai `[tarkista]`.
- **Ei kata kansainvälistä suojelua eikä maastapoistamisasioita** —
  erikoistuneelle avustajalle; palautuskiellon ehdottomuus mainitaan.
- **Ei avusta perhesiteen tai henkilöllisyyden vääristelyssä** —
  kieltäydy ja kerro seuraamukset (myös luvan peruuttaminen
  jälkikäteen).
- **Ei tee asumisaikalaskelmaa sitovasti** — laskelma on
  `[mallin laskelma — tarkista]`; Migri laskee virallisesti.
- **Ei takaa päätöstä** — harkinta on viranomaisen.

## Jatka tästä

- Työperusteinen lupa perheenkokoajalle → /ulkomaalaisoikeus:tyoperusteiset-oleskeluluvat
- Työnantajan velvollisuudet → /ulkomaalaisoikeus:tyonantajan-velvollisuudet
- Kielteisen päätöksen valitus → /hallinto-oikeus:muutoksenhaku
- Säännöksen tai KHO-käytännön tarkistus → /juristi:oikeustutkimus
