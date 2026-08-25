---
name: work-based-residence-permits
description: >
  Työperusteiset oleskeluluvat Suomessa (ulkomaalaislaki 301/2004).
  Käytä tätä skilliä, kun työnantaja rekrytoi ulkomaalaisen työntekijän
  EU/ETA-alueen ulkopuolelta tai työntekijälle haetaan lupaa: lupatyypin
  valinta (työntekijän oleskelulupa, erityisasiantuntija, EU:n sininen
  kortti, kasvuyrittäjä, kausityö), hakemuksen ja liitteiden jäsennys,
  jatkolupa, työnteko-oikeuden laajuus tai kielteiseen päätökseen
  vastaaminen. Triggeröi sanoista: työlupa, oleskelulupa, työntekijän
  oleskelulupa, erityisasiantuntija, sininen kortti, specialist,
  saatavuusharkinta, osapäätös, jatkolupa, työnteko-oikeus, Migri,
  EnterFinland, kansainvälinen rekrytointi.
---

# Työperusteiset oleskeluluvat — lupatyyppi, hakemus ja jatkuvuus

Tämä skill jäsentää työperusteisen luvan polun rekrytoinnista
jatkolupaan. Lupakartta, prosessi ja riskipisteet:
`references/immigration-law-fundamentals.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** jäsennykset ovat tarkistettavia — ei oikeudellista
> neuvontaa. **Tulorajat, käsittelyajat ja edellytykset muuttuvat
> tiheään ja lain kokonaisuudistus on valmisteilla** — kaikki luvut
> `[tarkista — migri.fi/Finlex]`. Katso `immigration-law/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki ja Migrin ohjeet lähteestä

Hae UlkL:n (301/2004) säännökset **`legal-core:legal-research`-skillillä**
ja lupakohtaiset edellytykset, tulorajat ja käsittelyajat migri.fi:stä.
KHO:n käytäntö (mm. toimeentuloedellytys, työnteko-oikeuden tulkinta)
lähteestä.

## Vaihe 1: Lupatyypin valinta

Käy lupakartta (referenssi) läpi tehtävän ja henkilön mukaan:

1. **Työn luonne ja palkkataso** — erityisasiantuntija tai sininen
   kortti (ei saatavuusharkintaa, nopeampi) vs. työntekijän
   oleskelulupa (työvoimaviranomaisen **osapäätös** ja
   saatavuusharkinta alueellisine linjauksineen).
2. **Kesto ja tarkoitus** — kausityö, harjoittelu, tutkija/opiskelija
   omine lakeineen; yrittäjäpolut erikseen (kasvuyrittäjä vaatii
   Business Finlandin puollon).
3. **Perhe mukana?** — perheenjäsenten luvat ja toimeentuloedellytys
   koko perheelle → `eu-and-family-based-residence`.
4. **EU-kansalainen?** — ei oleskelulupaa vaan rekisteröinti → sama
   skill kuin yllä.

Tuota vertailu: edellytykset, käsittelyaika-arvio `[tarkista]`,
työnteko-oikeuden laajuus ja jatkopolku (pysyvä lupa).

## Vaihe 2: Hakemuksen jäsennys

- **Työsuhteen ehdot kuntoon ensin**: palkka vähintään sovellettavan
  TES:n tai lupatyypin tulorajan mukainen, ehdot lain mukaiset →
  `employment-law:employment-contract`. Ehtojen alimitoitus on yleisin
  hylkäysperuste ja työnantajariski.
- **Liitelista** lupatyypeittäin (työsopimus/tarjous, työnantajan
  selvitykset, tutkinto- ja palkkatodistukset) — Migrin ajantasainen
  lista `[tarkista]`; käännösvaatimukset.
- **Työnantajan osuus**: TTOL-osapäätöstä varten selvitykset
  (rekrytointiyritykset EU/ETA-alueella saatavuusharkinnassa);
  sertifioidun työnantajan kevennetty menettely — edellytykset
  lähteestä.
- **Vireillepano ja tunnistautuminen**: EnterFinland + edustusto tai
  Migrin palvelupiste; biometriikka.

## Vaihe 3: Työnteko-oikeus ja sen jatkuvuus

1. **Laajuus**: tarkista päätöksestä — ala- tai työnantajakohtainen vai
   rajoittamaton; toisen työn aloittaminen voi vaatia uuden luvan.
2. **Aloitusajankohta**: milloin työn saa aloittaa (lupatyypistä ja
   tilanteesta riippuu — lähteestä).
3. **Jatkolupa**: hae ennen edellisen päättymistä — hakuvaiheen
   suojattu työnteko-oikeus edellytyksineen lähteestä; kalenteroi
   määräpäivä `[mallin laskelma — tarkista]` →
   `legal-core:engagement-intake`.
4. **Olosuhdemuutokset**: työnantajan vaihdos, palkanmuutos,
   lomautus/irtisanominen — vaikutus lupaan arvioitava heti
   (irtisanotun työnhakuaika — lähteestä).
5. **Polku pysyvään**: pysyvän luvan asumisaika- ja muut edellytykset
   → `eu-and-family-based-residence`.

## Vaihe 4: Kielteinen päätös

Pura päätös: mikä edellytys katsottiin täyttymättömäksi
(toimeentulo, ehdot, saatavuusharkinta, maahantulosäännösten
kiertämisepäily) → korjattavissa uudella hakemuksella vai
valitettava? Valitus hallinto-oikeuteen määräajassa `[tarkista]` →
`administrative-law:administrative-appeal`; uusi hakemus ei estä valitusta.

## Mitä tämä skill EI tee

- **Ei vahvista tulorajoja, käsittelyaikoja tai määräaikoja
  muistista** — migri.fi/Finlex tai `[tarkista]`.
- **Ei jätä hakemuksia eikä asioi Migrissä** — luonnokset ja listat
  menevät hakijalle/työnantajalle.
- **Ei kata kansainvälistä suojelua** — ohjaa erikoistuneelle
  avustajalle tai oikeusaputoimistoon.
- **Ei avusta maahantulosäännösten kiertämisessä** (näennäinen
  työsuhde, väärät tiedot) — kieltäydy ja kerro seuraamukset.
- **Ei takaa lupaa** — harkinta on viranomaisen.

## Jatka tästä

- Työnantajan varmistusvelvollisuus ja seuraamukset → /ulkomaalaisoikeus:tyonantajan-velvollisuudet
- Perheenjäsenet, pysyvä lupa ja kansalaisuus → /ulkomaalaisoikeus:eu-ja-perheperusteinen-oleskelu
- Työsopimuksen ehdot ja TES → /tyooikeus:tyosopimus
- Kielteisen päätöksen valitus → /hallinto-oikeus:muutoksenhaku
- Säännöksen tai KHO-käytännön tarkistus → /juristi:oikeustutkimus
