---
name: tekoaly-vaatimustenmukaisuus
description: >
  Tekoälyasetuksen (EU 2024/1689) vaatimustenmukaisuuden tukitehtävät: soveltamisen
  määräajat ja siirtymäajat koontiasetuksen (Digital Omnibus) jälkeen, seuraamusten
  (sakkojen, seuraamusmaksun) suuruus, GPAI-mallin systeemisen riskin kynnys (10^25 FLOPs)
  ja perusoikeusvaikutusten arviointi (FRIA, 27 art). Käytä tätä skilliä, kun käyttäjä
  kysyy milloin velvoitteet tulevat voimaan, siirtyikö jokin määräaika, mikä on
  rikkomuksen sakko, ylittääkö tekoälymalli systeemisen riskin kynnyksen, tarvitaanko FRIA,
  tai mainitsee määräajat, siirtymäajat, sanktiot, GPAI:n tai perusoikeusvaikutusten
  arvioinnin.
---

# Tekoälyasetuksen vaatimustenmukaisuus — määräajat, sakot, GPAI, FRIA

Tämä skill tukee vaatimustenmukaisuuden ajoitusta ja riskien arviointia EU:n
tekoälyasetuksen mukaan sellaisena kuin se on muutettuna koontiasetuksella
(asetus (EU) 2026/1744, voimassa 27.7.2026) ja Suomessa lain eräiden tekoälyjärjestelmien
valvonnasta (1377/2025) mukaan.

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

Jos MCP ei ole käytettävissä, kerro se. **Älä esitä lukuja tai päiviä lainkaan** ennen kuin
olet tarkistanut ne EUR-Lexin konsolidoidusta tekstistä tai Finlexistä — varausmerkintä ei
tee muistinvaraisesta luvusta käyttökelpoista. `../tekoaly-luokittelu/references/ai-act-perusteet.md`
sisältää lähteestä tarkistetun ajoitustaulukon tarkistuspisteeksi.

---

## Tehtävät

### Määräajat ja siirtymäajat
Kutsu `euaiact_check_deadlines`. Esitä käyttäjän tilanteeseen osuvat virstanpylväät ja
seuraava määräpäivä. **Koontiasetus (EU) 2026/1744 on voimassa olevaa lakia**: se siirsi
liitteen III ja liitteen I suuririskisten järjestelmien soveltamisen alkamista, antoi
ennen 2.8.2026 markkinoille saatetuille generatiivisille järjestelmille lisäaikaa 50 artiklan
2 kohdan merkintään ja lisäsi uusia kieltoja. Se **ei** siirtänyt muita 50 artiklan
avoimuusvelvoitteita. Jos käyttäjä viittaa alkuperäisiin päiviin (esim. "elokuu 2026
suuririskisille"), korjaa ne. Huomioi 111 artiklan 2 kohta: jo markkinoilla olevaan
suuririskiseen järjestelmään sovelletaan asetusta vain, jos sen rakenne muuttuu merkittävästi,
mutta viranomaiskäytön järjestelmien on oltava vaatimusten mukaisia viimeistään
siirtymäkauden lopussa (hae päivä MCP:stä). Uudet ehdotukset, joita ei ole julkaistu
EUVL:ssä, eivät muuta päiviä.

### Seuraamukset
Kutsu `euaiact_calculate_penalty` rikkomustyypillä, liikevaihdolla ja pk-statuksella.
Esitä enimmäissakko ja pk-kevennys vertailuna. Koontiasetuksen jälkeen myös **pienet
midcap-yritykset** saavat alemman vaihtoehdon (99 art 6 a kohta) — tarkista, osaako MCP
tämän, ja jos ei, kerro se. Korosta, että kyseessä on **enimmäismäärä**, ei ennuste
todellisesta seuraamuksesta.

**Suomen menettely (1377/2025):** seuraamusmaksun määrää tekoälyjärjestelmien valvonnan
seuraamusmaksulautakunta Traficomin yhteydessä markkinavalvontaviranomaisen esityksestä
(13 §). Seuraamusmaksuperusteet on lueteltu rooleittain (14–22 §) ja enimmäismäärät 23 §:ssä.
Maksua ei määrätä vähäisestä rikkomisesta tai jos se olisi ilmeisen kohtuuton, eikä valtion
tai kunnan viranomaisille, hyvinvointialueille ja muille 24 §:n 3 momentissa luetelluille.
Seuraamusmaksu vanhentuu viidessä vuodessa (24 §). Täytäntöönpanosta säädetään sakon
täytäntöönpanolaissa (25 §). Tarkista pykälät Finlexistä.

### GPAI:n systeeminen riski
Kutsu `euaiact_check_gpai_systemic_risk` mallin laskentamäärällä/tiedoilla. Raportoi, ylittääkö
malli kynnyksen, ja siitä seuraavat 53/55 art velvoitteet sekä 52 art ilmoitus.

### FRIA — perusoikeusvaikutusten arviointi (27 art)
Selvitä, onko käyttöönottaja FRIA-velvollinen: julkisoikeudelliset käyttöönottajat ja
julkisia palveluja tuottavat yksityiset suuririskisten liitteen III järjestelmien osalta
sekä liitteen III kohdan 5 b (luottokelpoisuus ja luottoluokitus) ja 5 c (henki- ja
sairausvakuutuksen riskinarviointi ja hinnoittelu) käyttöönottajat. Liitteen III kohta 2
(kriittinen infrastruktuuri) on vapautettu. Velvoite alkaa, kun liitteen III järjestelmiin
aletaan soveltaa III lukua (hae päivä MCP:stä).

> **Pohja:** [`pohjat/fria.md`](../../pohjat/fria.md) — FRIA:n luuranko 27 artiklan
> 1 kohdan a–f alakohdan mukaan, DPIA-ristiviittaus ja ilmoitus markkinavalvontaviranomaiselle.

Jos FRIA tarvitaan, käy sen sisältö läpi pohjan avulla: käyttöprosessin kuvaus, käytön kesto ja tiheys,
vaikutuksen kohteena olevat henkilöryhmät, riskit perusoikeuksille, ihmisen valvonta ja
toimenpiteet riskien toteutuessa. **Koontiasetuksen myötä FRIA:ssa voi ristiinviitata
GDPR:n DPIA:n asiaankuuluviin jaksoihin tai sisällyttää niitä** (27 art 4 kohta), ja
tekoälytoimiston kyselylomakemalli tukee tätä (27 art 5 kohta). Tuloksista on
ilmoitettava markkinavalvontaviranomaiselle (27 art 3 kohta); Suomessa viranomainen
määräytyy lain 1377/2025 3 §:n mukaan. Tee DPIA ja FRIA siis
mieluummin yhdessä → `tietosuoja`-plugari. DVV:n VAHTI-materiaaleissa on FRIA-työkalu ja
DPIA:n tekoälylisäkysymykset, joita voi käyttää rakenteen pohjana (kehittajille.suomi.fi).

### Raportointi
Tuota selkeä yhteenveto haetuista luvuista ja päivistä **lähdemerkinnöin** (MCP / EUR-Lex),
ja merkitse tulkinnanvaraiset kohdat `[varmista — asiantuntijan arvioitava]`. Mainitse
valvova viranomainen ja kansallinen seuraamusmaksupykälä lain 1377/2025 mukaan.

## Mitä tämä skill EI tee

- **Ei tee lopullista vaatimustenmukaisuus- tai luokittelupäätöstä.** Tukee ajoitusta ja riskien arviointia tarkistettavin ensiarvioin; sitova arvio kuuluu asiantuntijalle.
- **Ei esitä määräpäiviä eikä sakkoja muistista.** Soveltamisen siirtymäajat ja seuraamusten enimmäismäärät haetaan aina eu-ai-act-MCP:n työkaluilla (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) suoraan asetuksesta.
- **Ei ennusta todellista seuraamusta.** `euaiact_calculate_penalty` antaa 99 art mukaisen **enimmäismäärän**, ei arviota viranomaisen tosiasiassa määräämästä sakosta.
- **Ei arvaa kansallista menettelyä.** Valvojat ja seuraamusmaksun perusteet ovat laissa 1377/2025; jos pykälää ei ole tarkistettu Finlexistä tässä istunnossa, merkitse se `[muistinvarainen — tarkista Finlexistä]`.
- **Ei kohtele ehdotuksia voimassa olevana lakina eikä voimassa olevaa lakia ehdotuksena.** Koontiasetus (EU) 2026/1744 on voimassa 27.7.2026 alkaen. Myöhemmät muutosehdotukset ovat suuntaa-antavia, kunnes ne on julkaistu EU:n virallisessa lehdessä.
- **Ei kirjoita FRIA- tai DPIA-asiakirjaa valmiiksi.** Tunnistaa FRIA-velvollisuuden (27 art) ja täyttää pohjaa käyttäjän antamilla tiedoilla, mutta riskien arviointi ja hyväksyntä jäävät organisaatiolle.

## Jatka tästä

- Jos riskiluokka on vielä auki, aloita luokittelusta → /tekoalysaantely:tekoaly-luokittelu
- Koko organisaation tekoälyrekisteri ja priorisointi → /tekoalysaantely:tekoaly-kartoitus
- Velvoitteiden täsmäkokoaminen roolin ja luokan mukaan sekä liite IV → /tekoalysaantely:tekoaly-velvoitteet
- FRIA:n ja DPIA:n limittäisyys, profilointi ja automaattinen päätöksenteko → /tietosuoja:tietosuoja-arviointi
- Kansallisten määräaikojen, viranomaisten ja täytäntöönpanon tarkistus → /juristi:oikeustutkimus
