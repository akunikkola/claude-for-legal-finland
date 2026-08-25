---
name: ai-obligations
description: >
  Tekoälyasetuksen (EU 2024/1689) velvoitteiden selvittäminen roolin (tarjoaja/
  käyttöönottaja) ja riskiluokan mukaan sekä korkean riskin järjestelmän teknisen
  dokumentaation (Annex IV) kokoaminen. Käytä tätä skilliä, kun tekoälyjärjestelmän
  riskiluokka on tiedossa ja käyttäjä haluaa tietää, mitä velvoitteita siihen kohdistuu,
  mitä dokumentaatiota tarvitaan, mitä tarjoajan tai käyttöönottajan on tehtävä, tai
  mainitsee Annex IV:n, teknisen dokumentaation, laadunhallinnan tai GPAI-velvoitteet.
---

# Tekoälyasetuksen velvoitteet roolin ja riskiluokan mukaan

Tämä skill kokoaa tekoälyjärjestelmään kohdistuvat velvoitteet, kun riskiluokka on tiedossa
(jos ei ole, käytä ensin `tekoaly-luokittelu`-skilliä).

> **Vastuuvapaus:** velvoitelistat ovat tarkistettavia luonnoksia — ei oikeudellista
> neuvontaa. Katso `tekoalysaantely/CLAUDE.md`. Perusteet: `../tekoaly-luokittelu/references/ai-act-perusteet.md`.

## Käytä EU AI Act -MCP:tä

- **`euaiact_get_obligations`** — anna **rooli** (provider/deployer) ja **riskiluokka**;
  palauttaa konkreettiset velvoitteet, mukaan lukien GPAI (51–56 art) ja yleinen
  tekoälylukutaito (4 art).
- **`euaiact_annex_iv_checklist`** — palauttaa korkean riskin järjestelmän teknisen
  dokumentaation yhdeksän kohtaa, halutessa markdown-tarkistuslistana, pk-yrityksen
  kevennysmaininnalla.
- **`euaiact_get_article`** — artiklan tiivistelmä ja EUR-Lex-linkki sitaattiin.

Älä luettele velvoitteita muistinvaraisesti, kun MCP on käytettävissä.

---

## Työnkulku

### 1. Varmista rooli ja riskiluokka
- **Tarjoaja (provider)** kehittää järjestelmän tai saattaa sen markkinoille omalla nimellään.
- **Käyttöönottaja (deployer)** käyttää järjestelmää ammattitoiminnassaan.
- Sama organisaatio voi olla molempia eri järjestelmissä. Korkean riskin järjestelmän
  olennainen muuttaminen voi tehdä käyttöönottajasta tarjoajan (25 art) — nosta tämä esiin.

### 2. Hae velvoitteet
Kutsu `euaiact_get_obligations` roolilla ja riskiluokalla. Tyypilliset korkean riskin
velvoitteet:
- **Tarjoaja:** riskienhallintajärjestelmä (9 art), datanhallinta (10 art), tekninen
  dokumentaatio (11 art + Annex IV), lokitus (12 art), läpinäkyvyys ja ohjeet (13 art),
  ihmisen valvonta (14 art), tarkkuus/robustius/kyberturva (15 art), laadunhallinta (17 art),
  vaatimustenmukaisuuden arviointi (43 art) ja rekisteröinti (49 art).
- **Käyttöönottaja:** käyttö ohjeiden mukaan ja ihmisen valvonta (26 art), tietyissä
  tapauksissa **perusoikeusvaikutusten arviointi FRIA (27 art)**.

### 3. Kokoa tekninen dokumentaatio (korkea riski)
Käytä `euaiact_annex_iv_checklist`. Käy yhdeksän kohtaa läpi ja tunnista, mitä
organisaatiolla on jo ja mitä puuttuu. Tuota tarkistuslista.

### 4. GPAI-velvoitteet
Yleiskäyttöisille malleille hae velvoitteet roolilla "provider" ja huomioi systeemisen
riskin lisävelvoitteet (55 art) — tarkista kynnys `tekoaly-vaatimustenmukaisuus`-skillin
`euaiact_check_gpai_systemic_risk`-työkalulla.

### 5. Raportoi
Tuota velvoitelista ryhmiteltynä (tarjoaja / käyttöönottaja), artiklaviittaukset EUR-Lex-
linkein, ja Annex IV -tarkistuslista korkean riskin tapauksessa. Erota **mitä on jo
olemassa** ja **mitä puuttuu**. Merkitse tulkinnanvaraiset `[varmista — asiantuntijan
arvioitava]`. Muistuta tarvittaessa GDPR-rinnakkaisuudesta (`data-protection`-plugari) ja
kansallisen kerroksen tarkistuksesta.

## Mitä tämä skill EI tee

- **Ei tee lopullista vaatimustenmukaisuuspäätöstä.** Kokoaa tarkistettavan velvoiteluonnoksen roolin ja riskiluokan mukaan; sitova arvio velvoitteiden täyttymisestä kuuluu asiantuntijalle.
- **Ei määritä riskiluokkaa.** Edellyttää, että luokka ja rooli (tarjoaja/käyttöönottaja) ovat jo tiedossa — luokittelu tehdään erillisessä skillissä.
- **Ei laske määräpäiviä eikä sakkoja muistista.** Velvoitteiden voimaantulon siirtymäajat ja rikkomusten enimmäisseuraamukset haetaan eu-ai-act-MCP:n työkaluilla (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) → `tekoaly-vaatimustenmukaisuus`.
- **Ei ratkaise GPAI-mallin systeemisen riskin kynnystä.** 10²⁵ FLOPs -kynnys ja 55 art lisävelvoitteet tarkistetaan `euaiact_check_gpai_systemic_risk`-työkalulla.
- **Ei vahvista kansallisia viranomaisnimeämisiä eikä rekisteröinnin yksityiskohtia.** Suomen toimivaltaiset viranomaiset ja menettelyt ovat muotoutumassa — merkitse `[varmista — kansallinen sääntely muotoutumassa]`.
- **Ei laadi teknistä dokumentaatiota puolestasi.** Tuottaa Annex IV -tarkistuslistan ja tunnistaa puuttuvat osat, mutta sisällön kirjoittaminen jää organisaatiolle.

## Jatka tästä

- Jos riskiluokka tai rooli on vielä auki, palaa luokitteluun → /tekoalysaantely:tekoaly-luokittelu
- Voimaantulon määräajat, sakkojen enimmäismäärät, GPAI-kynnys ja FRIA-tarve → /tekoalysaantely:tekoaly-vaatimustenmukaisuus
- Rinnakkainen henkilötietojen käsittelyn, profiloinnin tai DPIA:n arvio → /tietosuoja:tietosuoja-arviointi
- Kansallisen sääntelytilanteen ja viranomaisnimeämisten tarkistus → /juristi:oikeustutkimus
