---
name: securities-markets
description: >
  Arvopaperimarkkinasääntely Suomessa (arvopaperimarkkinalaki 746/2012,
  EU:n markkinoiden väärinkäyttöasetus MAR). Käytä tätä skilliä, kun
  listayhtiö tai sen neuvonantaja käsittelee tiedonantovelvollisuutta
  (pörssitiedote, sisäpiiritiedon julkistaminen tai lykkääminen),
  sisäpiiriluetteloita ja kaupankäyntirajoituksia, johdon liiketoimia,
  liputusvelvollisuutta, esitesääntelyä, listautumista tai julkista
  ostotarjousta – tai kun arvioidaan markkinoiden väärinkäytön riskiä.
  Triggeröi sanoista: pörssitiedote, sisäpiiritieto, sisäpiiriluettelo,
  julkistamisen lykkääminen, MAR, johdon liiketoimet, suljettu ikkuna,
  liputus, esite, listautuminen, IPO, ostotarjous, markkinoiden
  väärinkäyttö, kurssimanipulaatio.
---

# Arvopaperimarkkinat — tiedonanto, sisäpiiri ja transaktiot

Tämä skill jäsentää listayhtiön ja sen neuvonantajien
arvopaperimarkkinaoikeudelliset velvoitteet. Sääntelypohja:
arvopaperimarkkinalaki (746/2012) + suoraan sovellettava EU-sääntely
(MAR, esiteasetus) + Fivan määräykset ja Nasdaq Helsingin säännöt.
Perusteet: `../rahoitus-ja-vakuudet/references/rahoitus-perusteet.md`.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa eikä sijoitusneuvontaa. **Sisäpiiritiedon väärinkäyttöä ei
> avusteta** — ehdoton negatiivirajaus (CLAUDE.md). Seuraamukset ovat
> ankaria: hallinnolliset seuraamusmaksut ja rikosvastuu.

## Tarkista sääntelykerrokset lähteestä

Kolme kerrosta, tarkista kaikki: **AML 746/2012** (Finlex), **EU-asetukset**
(MAR, esiteasetus — EUR-Lex, ml. ESMA:n ohjeet) ja **Fivan määräykset ja
ohjeet sekä pörssin säännöt** `[tarkista]`. Käytä
`juristi:oikeustutkimus`-skilliä kansalliseen lakiin; EU-tekstit ja
kynnysarvot lähteestä.

## Sisäpiiritiedon hallinta (MAR)

1. **Onko tieto sisäpiiritietoa?** Täsmällistä, julkistamatonta,
   olennaisesti hintaan vaikuttavaa — arvio dokumentoidaan jokaisessa
   hankkeessa (järkevän sijoittajan testi). Epävarmassa tilanteessa
   käsittele sisäpiiritietona.
2. **Julkistaminen mahdollisimman pian** — pääsääntö; pörssitiedotteen
   sisältövaatimukset (olennaisuus, johdonmukaisuus aiempaan
   viestintään).
3. **Lykkääminen** — edellytykset (oikeutettu etu, ei
   harhaanjohtavuutta, luottamuksellisuus turvattu) ja menettely
   (lykkäyspäätöksen dokumentointi, ilmoitus Fivalle julkistettaessa)
   — yksityiskohdat lähteestä.
4. **Sisäpiiriluettelot** — hankekohtaiset; ajantasaisuus,
   tietoisuusvahvistukset; pysyvät sisäpiiriläiset eri asia.
5. **Tiedon vuotaminen** → välitön julkistaminen; huhujen
   kommentointipolitiikka valmiiksi.

## Johdon liiketoimet ja kaupankäyntirajoitukset

- Johtohenkilöiden ja lähipiirin **liiketoimi-ilmoitukset**
  (määräajat ja kynnys lähteestä) yhtiölle ja Fivalle + julkistaminen.
- **Suljettu ikkuna** ennen tulosjulkistuksia (pituus lähteestä) —
  yhtiön sisäinen kaupankäyntiohje usein laajempi; laadi ohjeluonnos.

## Säännöllinen ja muu tiedonantovelvollisuus

- Tilinpäätös, puolivuotiskatsaus ja mahdolliset osavuosikatsaukset —
  vaatimukset AML:stä ja pörssin säännöistä `[tarkista]`.
- Johdonmukaisuus: tulosvaroitus, kun ohjeistus ei enää pidä —
  kynnyksen arviointi ja tiedotteen rakenne.
- **Liputus** (AML): huomattavien omistusosuuksien ilmoittaminen —
  rajat ja laskenta (ml. rahoitusvälineet) lähteestä; sekä
  liputtajan että yhtiön velvoitteet.

## Transaktiot

- **Esite** — milloin vaaditaan ja poikkeukset (esiteasetus,
  kynnysarvot lähteestä); kansallinen perustietoasiakirja pienissä
  anneissa `[tarkista]`. Listautumisen due diligence →
  `yhtiooikeus:yritysjarjestelyt`-runko + markkinaspesifit.
- **Julkinen ostotarjous** (AML + ostotarjouskoodi):
  tarjousvelvollisuusraja, tarjousvastike ja -asiakirja,
  tasapuolinen kohtelu — yksityiskohdat lähteestä;
  arvopaperimarkkinayhdistyksen ostotarjouskoodi comply or explain
  -pohjana.
- **Markkinatunnustelut** (MAR) — sallittu menettely ennen
  transaktiota: suostumukset, dokumentointi, cleansing.

## Mitä tämä skill EI tee

- **Ei avusta sisäpiirikaupoissa, tiedon ilmaisemisessa tai
  manipulaatiossa** — ehdoton kieltäytyminen; epäilyttävä pyyntö →
  compliance-eskalointi.
- **Ei arvioi tiedon hintavaikutusta sitovasti** — olennaisuusarvio
  on yhtiön ja sen neuvonantajien `[varmista]`.
- **Ei vahvista määräaikoja, liputusrajoja tai esitekynnyksiä
  muistista** — lähteestä tai `[tarkista]`.
- **Ei laadi tai julkaise pörssitiedotteita** — luonnos menee yhtiön
  prosessiin (hallitus/tiedotekomitea).
- **Ei anna sijoitussuosituksia**.

## Jatka tästä

- Yhtiökokous- ja hallituskysymykset → /yhtiooikeus:yhtion-hallinto
- Yrityskaupan kokonaisuus ja DD → /yhtiooikeus:yritysjarjestelyt
- Yrityskauppavalvonta → /kilpailuoikeus:yrityskauppavalvonta
- Tiedotteen kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
- Säännöksen tai Fiva-ohjeen tarkistus → /juristi:oikeustutkimus
