---
name: ai-compliance
description: >
  Tekoälyasetuksen (EU 2024/1689) vaatimustenmukaisuuden tukitehtävät: soveltamisen
  määräajat ja siirtymäajat, seuraamusten (sakkojen) suuruus, GPAI-mallin systeemisen
  riskin kynnys (10^25 FLOPs) ja perusoikeusvaikutusten arviointi (FRIA, 27 art). Käytä
  tätä skilliä, kun käyttäjä kysyy milloin velvoitteet tulevat voimaan, mikä on rikkomuksen
  sakko, ylittääkö tekoälymalli systeemisen riskin kynnyksen, tarvitaanko FRIA, tai
  mainitsee määräajat, siirtymäajat, sanktiot, GPAI:n tai perusoikeusvaikutusten arvioinnin.
---

# Tekoälyasetuksen vaatimustenmukaisuus — määräajat, sakot, GPAI, FRIA

Tämä skill tukee vaatimustenmukaisuuden ajoitusta ja riskien arviointia EU:n
tekoälyasetuksen mukaan.

> **Vastuuvapaus:** tarkistettavaa ensiarviota — ei oikeudellista neuvontaa. Sakkojen ja
> luokittelun lopullinen arvio kuuluu asiantuntijalle. Katso `tekoalysaantely/CLAUDE.md`.
> Perusteet: `../tekoaly-luokittelu/references/ai-act-perusteet.md`.

## Käytä EU AI Act -MCP:tä — älä arvaa lukuja äläkä päiviä

- **`euaiact_check_deadlines`** — soveltamisen virstanpylväät, jäljellä olevat päivät,
  `next_milestone`-pikatieto ja `only_upcoming`-suodatin. **Hae päivämäärät aina tästä**,
  älä esitä niitä muistista; asetuksen soveltaminen on vaiheittaista ja tilanne muuttuu.
- **`euaiact_calculate_penalty`** — enimmäissakko rikkomustyypin, liikevaihdon ja pk-statuksen
  mukaan (99 art), pk-/startup-kevennys (99(6)) ja vertailu pk vs. ei-pk.
- **`euaiact_check_gpai_systemic_risk`** — ylittääkö GPAI-malli 10²⁵ FLOPs -kynnyksen;
  palauttaa 53 art perustason + 55 art systeemisen riskin velvoitteet ja 52 art
  ilmoitusvelvollisuuden.
- **`euaiact_assess_art6_3_exception`** — 6(3) "ei merkittävää riskiä" -poikkeuksen läpikäynti
  (profilointivaroitus + 6(4)/49(2) muistutukset).

Jos MCP ei ole käytettävissä, kerro se äläkä esitä lukuja tai päiviä varmistettuina.

---

## Tehtävät

### Määräajat ja siirtymäajat
Kutsu `euaiact_check_deadlines`. Esitä käyttäjän tilanteeseen osuvat virstanpylväät ja
seuraava määräpäivä. Jos jokin tilan muutos (esim. Digital Omnibus) on vasta ehdotus eikä
voimassa olevaa lakia, sano se selvästi — voimassa olevat päivät ovat ratkaisevia
neuvonnassa, kunnes muutos on hyväksytty ja julkaistu virallisessa lehdessä.

### Seuraamukset
Kutsu `euaiact_calculate_penalty` rikkomustyypillä, liikevaihdolla ja pk-statuksella.
Esitä enimmäissakko ja pk-kevennys vertailuna. Korosta, että kyseessä on **enimmäismäärä**,
ei ennuste todellisesta seuraamuksesta.

### GPAI:n systeeminen riski
Kutsu `euaiact_check_gpai_systemic_risk` mallin laskentamäärällä/tiedoilla. Raportoi, ylittääkö
malli kynnyksen, ja siitä seuraavat 53/55 art velvoitteet sekä 52 art ilmoitus.

### FRIA — perusoikeusvaikutusten arviointi (27 art)
Selvitä, onko käyttöönottaja FRIA-velvollinen (mm. Annex III(5)(b) luottokelpoisuus/
luottoluokitus ja (5)(c) henki-/sairausvakuutuksen riskinarviointi ja hinnoittelu; Annex
III(2) kriittinen infrastruktuuri on vapautettu). Jos FRIA tarvitaan, ohjaa sen sisältöön:
käyttöprosessin kuvaus, vaikutukset perusoikeuksiin, riskit ja lieventävät toimet. FRIA ja
GDPR:n DPIA limittyvät — ohjaa tarvittaessa `data-protection`-plugariin.

### Raportointi
Tuota selkeä yhteenveto haetuista luvuista ja päivistä **lähdemerkinnöin** (MCP / EUR-Lex),
ja merkitse tulkinnanvaraiset kohdat `[varmista — asiantuntijan arvioitava]`. Muistuta
kansallisen kerroksen tarkistuksesta (toimivaltaiset viranomaiset, kansallinen täytäntöönpano).

## Mitä tämä skill EI tee

- **Ei tee lopullista vaatimustenmukaisuus- tai luokittelupäätöstä.** Tukee ajoitusta ja riskien arviointia tarkistettavin ensiarvioin; sitova arvio kuuluu asiantuntijalle.
- **Ei esitä määräpäiviä eikä sakkoja muistista.** Soveltamisen siirtymäajat ja seuraamusten enimmäismäärät haetaan aina eu-ai-act-MCP:n työkaluilla (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) suoraan asetuksesta.
- **Ei ennusta todellista seuraamusta.** `euaiact_calculate_penalty` antaa 99 art mukaisen **enimmäismäärän**, ei arviota viranomaisen tosiasiassa määräämästä sakosta.
- **Ei vahvista kansallisia viranomaisnimeämisiä eikä täytäntöönpanon yksityiskohtia.** Suomen toimivaltaiset viranomaiset ja menettelyt ovat muotoutumassa — merkitse `[varmista — kansallinen sääntely muotoutumassa]`.
- **Ei kohtele ehdotuksia voimassa olevana lakina.** Esimerkiksi Digital Omnibus -tyyppiset muutokset ovat suuntaa-antavia, kunnes ne on hyväksytty ja julkaistu EU:n virallisessa lehdessä — voimassa olevat päivät ovat ratkaisevia.
- **Ei kirjoita FRIA- tai DPIA-asiakirjaa valmiiksi.** Tunnistaa FRIA-velvollisuuden (27 art) ja ohjaa sen rakenteeseen, mutta varsinaisen arvioinnin laatiminen jää organisaatiolle.

## Jatka tästä

- Jos riskiluokka on vielä auki, aloita luokittelusta → /tekoalysaantely:tekoaly-luokittelu
- Velvoitteiden täsmäkokoaminen roolin ja luokan mukaan sekä Annex IV → /tekoalysaantely:tekoaly-velvoitteet
- FRIA:n ja DPIA:n limittäisyys, profilointi ja automaattinen päätöksenteko → /tietosuoja:tietosuoja-arviointi
- Kansallisten määräaikojen, viranomaisten ja täytäntöönpanon tarkistus → /juristi:oikeustutkimus
