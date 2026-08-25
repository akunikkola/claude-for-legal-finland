---
name: environmental-liability
description: >
  Ympäristövastuiden arviointi Suomessa: pilaantuneen maaperän ja
  pohjaveden puhdistusvastuu (YSL 527/2014), ympäristövahinkojen
  korvaaminen (737/1994), ympäristörikosvastuu sekä ympäristö-due
  diligence yrityskaupassa ja kiinteistökaupassa. Käytä tätä skilliä, kun
  käyttäjä arvioi vastuuta pilaantuneesta maaperästä, naapurin tai
  kolmannen kärsimää ympäristöhaittaa, ympäristövahingon korvausvastuuta,
  ympäristörikosepäilyä, vakuuksia ja varauksia ympäristövelvoitteisiin
  tai ympäristöriskejä transaktiossa. Triggeröi sanoista: pilaantunut
  maaperä, PIMA, puhdistusvastuu, ympäristövahinko, immissio, naapuruus,
  ympäristörikos, ympäristö-DD, saastunut tontti, öljyvahinko,
  jätevastuu, ennallistaminen.
---

# Ympäristövastuut — pilaantuminen, korvaukset ja transaktiot

Tämä skill jäsentää ympäristövastuiden kolme kerrosta — julkisoikeudellinen
puhdistus-/ennallistamisvastuu, yksityisoikeudellinen korvausvastuu ja
rikosvastuu — sekä niiden hallinnan transaktioissa. Perusteet:
`../environmental-permits-and-supervision/references/environmental-law-fundamentals.md`.

> **Vastuuvapaus:** analyysit ovat tarkistettavia — ei oikeudellista
> neuvontaa. Pilaantuneisuuden toteaa tekninen tutkimus, ei tämä skill.
> Katso `environment-and-planning/AGENTS.md` (mm. negatiivirajaus:
> pilaantumistiedon panttaamista kaupassa ei avusteta).

## Tarkista laki lähteestä

Hae YSL:n (527/2014) pilaantuneen maaperän vastuusäännökset,
ympäristövahinkolain (737/1994) korvausperusteet ja rikoslain
ympäristörikossäännökset **`legal-core:legal-research`-skillillä**.
Toimivaltainen viranomainen PIMA-asioissa tarkistetaan lähteestä
(LVV 2026 — ei ELY).

## Kerros 1: Julkisoikeudellinen puhdistusvastuu (PIMA)

Jäsennä **vastuuketju** YSL:n mukaan (järjestys ja edellytykset
lähteestä):

1. **Aiheuttaja** — ensisijainen vastuu pilaantumisesta.
2. **Alueen haltija** — toissijainen vastuu edellytyksin (tiesi tai
   olisi pitänyt tietää; kohtuullisuus).
3. **Kunta** — viimesijainen.

Käytännön kysymykset: vanhat pilaantumiset ja sovellettava laki
(siirtymäsäännökset — lähteestä), vastuun kohtuullistaminen,
puhdistustarpeen arviointi ja PIMA-ilmoitusmenettely, kunnostuksen
tavoitetasot. **Maaperän ja pohjaveden pilaamiskiellot ovat ehdottomia**
— uusi pilaaminen ei ole "lupa-asia".

## Kerros 2: Yksityisoikeudellinen korvausvastuu

- **Ympäristövahinkolaki (737/1994)**: **ankara vastuu** (ei edellytä
  tuottamusta) toiminnasta aiheutuneesta ympäristövahingosta;
  soveltamisala, sietämisvelvollisuus ja syy-yhteyden
  todennäköisyyskynnys lähteestä. Korvattavina mm. henkilö- ja
  esinevahinko, taloudellinen vahinko ja torjuntakustannukset.
- **Naapuruussuhteet**: rasituksen kohtuuttomuus (immissiot — melu,
  pöly, haju) erillisenä perusteena; suhde lupaan (lupa ei poista
  korvausvastuuta — tarkista lähteestä).
- Vakuutukset ja ympäristövahinkorahastojärjestelmä toissijaisena —
  tarkista voimassa oleva järjestelmä lähteestä.

## Kerros 3: Rikosvastuu

Ympäristörikokset (rikoslain ympäristörikossäännökset — tunnusmerkistöt
lähteestä): ympäristön turmeleminen törkeysasteineen,
ympäristörikkomus. Erityispiirteet: **yhteisösakko** yhteisölle,
vastuun kohdentuminen organisaatiossa (tosiasiallinen päätösvalta),
**menettämisseuraamus** (rikoshyöty = säästetyt kustannukset) ja
valvontatulosten vääristelyn itsenäinen riski. Epäilytilanteessa →
`criminal-procedure:pre-trial-investigation-and-coercive-measures`.

## Transaktiot: ympäristö-DD ja riskinjako

Yrityskaupan tai kiinteistökaupan ympäristöosio (kytkös
`company-law:corporate-transactions`-DD-runkoon):

1. **Selvitä**: toimintahistoria (myös aiemmat toiminnot tontilla!),
   luvat ja niiden ehdot, tarkkailutulokset ja poikkeamat,
   PIMA-tutkimukset, vireillä olevat valvonta-asiat, jätevastuut,
   kemikaalit ja säiliöt, vakuudet.
2. **Arvioi**: puhdistusvastuun siirtymäriski haltijalle (osakekauppa:
   vastuut jäävät yhtiöön; kiinteistökauppa: haltijavastuun edellytykset
   — tiedonantovelvollisuus!), lupaehtojen kiristymisriski,
   investointitarpeet.
3. **Allokoi kauppakirjassa**: myyjän vakuutukset ympäristöasioista,
   erityisvastuulausekkeet (indemnity) tunnetuista riskeistä,
   vastuunrajaukset ja niiden suhde julkisoikeudelliseen vastuuseen —
   **viranomaisvastuuta ei voi sopia pois**, vain osapuolten välisen
   taloudellisen jaon. → `contracts:contract-drafting`.
4. **Myyjän tiedonantovelvollisuus**: tunnetun pilaantumisen
   salaaminen on virheperuste ja voi siirtää vastuun takaisin —
   älä avusta salaamisessa.

## Mitä tämä skill EI tee

- **Ei totea pilaantuneisuutta eikä mitoita kunnostusta** — ne tekee
  tekninen tutkimus ja konsultti.
- **Ei vahvista vastuuketjun yksityiskohtia, raja-arvoja tai
  vanhentumista muistista** — lähteestä tai `[tarkista]`.
- **Ei arvioi kunnostuskustannuksia euroina** — kustannusarvio
  konsultilta; skill jäsentää vastuun ja riskinjaon.
- **Ei avusta pilaantumistiedon salaamisessa** kaupassa tai
  valvonnassa — kieltäydy ja kerro virhe- ja rikosvastuuriski.
- **Ei korvaa vakuutus- tai rahoitusneuvontaa** vakuuksien
  mitoituksessa.

## Jatka tästä

- Lupa- ja valvonta-asiat saman kohteen osalta → /ymparisto-ja-kaavoitus:ymparistolupa-ja-valvonta
- Kaavatilanne ja rakennettavuus → /ymparisto-ja-kaavoitus:kaavoitus-ja-rakentaminen
- Yrityskaupan DD-kokonaisuus → /yhtiooikeus:yritysjarjestelyt
- Kauppakirjan vastuulausekkeet → /sopimukset:sopimuksen-laatiminen
- Ympäristörikosepäily → /rikosprosessi:esitutkinta-ja-pakkokeinot
- Säännöksen tai KHO-käytännön tarkistus → /juristi:oikeustutkimus
