---
name: housing-company
description: >
  Asunto-osakeyhtiön hallinto ja osakkaan asema Suomessa
  asunto-osakeyhtiölain (1599/2009) mukaan. Käytä tätä skilliä, kun
  käyttäjä selvittää kunnossapitovastuun jakoa yhtiön ja osakkaan
  välillä, suunnittelee tai arvioi osakkaan muutostyötä, valmistelee
  yhtiökokousta tai moittii sen päätöstä, arvioi vastikeperusteita tai
  -rästejä, hallituksen tai isännöitsijän vastuuta, lunastuslauseketta
  tai huoneiston ottamista yhtiön hallintaan. Triggeröi sanoista:
  taloyhtiö, asunto-osakeyhtiö, kunnossapitovastuu, vastuunjakotaulukko,
  muutostyöilmoitus, yhtiökokous, yhtiövastike, hoitovastike,
  pääomavastike, putkiremontti, yhtiöjärjestys, lunastuslauseke,
  hallintaanotto, isännöitsijä, päätöksen moite.
---

# Asunto-osakeyhtiö — kunnossapito, muutostyöt ja hallinto

Tämä skill jäsentää taloyhtiön ja osakkaan suhteen
asunto-osakeyhtiölain (1599/2009) mukaan. Perusteet:
`../real-property-conveyance/references/real-property-fundamentals.md`. Yhtiöoikeuden
yleiset opit (johdon vastuu, kokousmenettely) ovat sukua
osakeyhtiölle → `company-law:corporate-governance`, mutta AOYL on oma
lakinsa — älä sovella OYL:ää suoraan.

> **Vastuuvapaus:** arviot ja luonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. Yhtiön päätökset tekevät sen toimielimet.
> Katso `real-estate-and-housing/AGENTS.md`.

## Tarkista laki JA yhtiöjärjestys

Hae AOYL:n säännökset **`legal-core:legal-research`-skillillä** — ja
muista, että **yhtiöjärjestys voi poiketa lain olettamasäännöksistä**
(mm. kunnossapitovastuu, vastikeperusteet, lunastuslauseke). Analyysi
ilman yhtiöjärjestystä on puolivalmis: pyydä se käyttäjältä äläkä
oleta sisältöä.

## Kunnossapitovastuun jako

1. **Lähtökohta (AOYL, olettama)**: yhtiö vastaa rakenteista,
   eristeistä ja perusjärjestelmistä (lämmitys, sähkö, vesi, ilmanvaihto);
   osakas huoneiston sisäosista — tarkka jako ja rajatapaukset
   (märkätilat, ikkunat, parvekkeet) lähteestä ja yhtiöjärjestyksestä.
2. **Yhtiöjärjestyspoikkeamat** ensin; Kiinteistöliiton
   vastuunjakotaulukko on vakiintunut apuväline muttei laki — erottele.
3. **Ilmoitusvelvollisuus**: osakkaan ilmoitettava viasta yhtiölle;
   yhtiön ilmoitukset osakkaalle töistä.
4. **Kustannusriidat**: yhtiön teettämä työ osakkaan vastuualueella ja
   päinvastoin; osakkaan oikeus teettää yhtiön viivyttelemä työ —
   edellytykset lähteestä. Tasoparannukset vs. perustaso.

## Osakkaan muutostyöt

- **Ilmoitus etukäteen** yhtiölle töistä, jotka voivat vaikuttaa
  yhtiön tai toisen osakkaan vastuulla oleviin osiin; yhtiön oikeus
  asettaa ehtoja ja valvoa (kustannukset osakkaan) — menettely
  lähteestä.
- Kielto-/ehtoperusteet: vahinko tai haitta yhtiölle/osakkaille;
  luvanvaraisuus (rakentamislupa → `environment-and-planning`).
- Dokumentointi: muutostyörekisteri ja merkitys tulevassa kaupassa
  (isännöitsijäntodistus).

## Yhtiökokous ja päätöksenteko

- **Toimivalta**: yhtiökokous päättää laajakantoisista (remontit,
  vastikkeet, yhtiöjärjestysmuutokset — enemmistövaatimukset
  lähteestä); hallitus juoksevista.
- **Yhdenvertaisuus** on AOYL:n ydinperiaate: päätös ei saa tuottaa
  epäoikeutettua etua osakkaalle toisen kustannuksella — tyypilliset
  kipupisteet: hissin jälkiasennuksen kustannustenjako,
  vastikeperusteen muutos, vain osaa palveleva remontti.
- **Päätöksen moite**: virheellinen menettely tai sisältö →
  moitekanne määräajassa `[tarkista lähteestä]`; mitättömyys erikseen.
- Kokouskutsut, etäosallistuminen ja pöytäkirjat — vaatimukset
  lähteestä.

## Vastikkeet ja maksuvaikeudet

- Vastikeperusteet yhtiöjärjestyksestä (hoito- ja pääomavastike;
  käyttökorvaukset erikseen).
- **Hallintaanotto**: huoneiston ottaminen yhtiön hallintaan
  (vastikerästit, häiriö) — varoitusmenettely, määräajat ja kesto
  lähteestä; vuokraus yhtiön lukuun. Raskain keino — käy kevyemmät
  ensin.
- Rästien perintä → `insolvency:debt-collection`.

## Hallituksen ja isännöitsijän vastuu

Huolellisuusvelvollisuus ja vahingonkorvausvastuu (AOYL:n omat
säännökset — lähteestä); tyypilliset riskit: kunnossapidon laiminlyönti,
yhdenvertaisuuden loukkaus, puutteellinen valmistelu. Dokumentoitu
päätöksenteko on paras suoja — sama oppi kuin
`company-law:corporate-governance`-skillissä.

## Mitä tämä skill EI tee

- **Ei tulkitse yhtiöjärjestystä näkemättä sitä** — pyytää sen aina.
- **Ei vahvista vastuunjakoa sitovasti** rajatapauksissa —
  `[varmista — juristin arvioitava]`; viime kädessä tuomioistuin.
- **Ei tee rakennusteknistä arviota** vaurioista tai korjaustavoista.
- **Ei vahvista enemmistövaatimuksia, moiteaikoja tai
  hallintaanoton määräaikoja muistista** — lähteestä.
- **Ei laadi näennäisperusteluja** yhdenvertaisuutta loukkaavalle
  päätökselle — riski kerrotaan, ei piiloteta.

## Jatka tästä

- Asunnon kauppaan liittyvä yhtiötieto → /kiinteistot-ja-asuminen:asuntokauppa
- Huoneiston vuokraus → /kiinteistot-ja-asuminen:vuokrasopimukset
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
- Vastikerästien perintä → /insolvenssi:saatavien-perinta
- Moitekanteen vieminen tuomioistuimeen → /riidanratkaisu:haastehakemus
