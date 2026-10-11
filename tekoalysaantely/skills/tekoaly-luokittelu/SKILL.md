---
name: tekoaly-luokittelu
description: >
  Tekoälyjärjestelmän riskiluokittelu EU:n tekoälyasetuksen (asetus (EU) 2024/1689,
  "AI Act") mukaan: kielletty, suuririskinen (korkea riski), rajoitettu riski
  (avoimuusvelvoitteet) vai minimaalinen riski, sekä järjestelmää Suomessa valvova
  viranomainen. Käytä tätä skilliä, kun käyttäjä haluaa selvittää, kuuluuko
  tekoälyjärjestelmä tekoälyasetuksen soveltamisalaan, mikä sen riskiluokka on, onko
  se liitteen III (Annex III) suuririskinen järjestelmä, koskeeko sitä kielto (5 art)
  tai avoimuusvelvoite (50 art), kuka sitä valvoo, tai mainitsee tekoälyasetuksen,
  AI Actin, GPAI:n, tekoälyn riskiluokituksen, biometriikan tai profiloinnin.
---

# Tekoälyjärjestelmän riskiluokittelu (EU AI Act)

Tämä skill luokittelee tekoälyjärjestelmän EU:n tekoälyasetuksen (asetus (EU) 2024/1689,
sellaisena kuin se on muutettuna asetuksella (EU) 2026/1744) riskiperusteisen kehyksen
mukaan ja tunnistaa sovellettavan liitteen III kategorian, roolin (tarjoaja/käyttöönottaja),
relevantit artiklat sekä Suomessa valvovan viranomaisen (laki 1377/2025).

> **Vastuuvapaus:** tämä on ensiarvio tarkistettavaksi — ei oikeudellista neuvontaa.
> Lopullinen luokittelu ja vaatimustenmukaisuuspäätökset kuuluvat asiantuntijalle.
> Katso `tekoalysaantely/CLAUDE.md`.

## Käytä EU AI Act -MCP:tä

Tämä skill nojaa **`eu-ai-act`-MCP:hen** (lexbeam ≥ 1.7, deterministinen, EUR-Lex-pohjainen,
seuraa koontiasetuksella muutettua tekstiä). Älä luokittele muistinvaraisesti, kun MCP on
käytettävissä.

- **`euaiact_classify_system`** — anna järjestelmän kuvaus (`description`/`use_case`) ja
  mahdollisuuksien mukaan **rakenteiset `signals`** (esim. `domain`, `uses_biometrics`,
  `biometric_realtime`, `is_safety_component_of_regulated_product`,
  `generates_synthetic_content`, `targets_children_or_vulnerable`). Rakenteiset signaalit
  menevät tekstihaun edelle ja antavat deterministisen vastauksen. Palauttaa riskiluokan,
  liitteen III kategorian, roolin, osuneet ja puuttuvat signaalit sekä jatkokysymykset.
- **`euaiact_assess_system`** — kun järjestelmästä on koottu jäsennelty profiili (rooli,
  käyttötarkoitus, ala, signaalit), tämä antaa rajatun kokonaisarvion: oikeudellisen
  luokituksen erillään velvoitteista ja puuttuvista tiedoista. Käytä luokittelun
  ristiintarkistukseen.
- **`euaiact_get_article`** — hae artiklan operatiivinen tiivistelmä ja **EUR-Lex-linkki**
  sitaatin pohjaksi.
- **`euaiact_assess_art6_3_exception`** — käytä ennen kuin nojaat 6(3) "ei merkittävää
  riskiä" -poikkeukseen (huom: ei sovellu profilointia tekeviin järjestelmiin).
- Resurssit `euaiact://annex/iii` ja `euaiact://risk-levels` antavat täydet kategoriat.
- `euaiact_answer_question` on FAQ-haku suuntaa antamaan — älä perusta luokitusta siihen.

Jos MCP ei ole käytettävissä, kerro se. Voit jäsentää signaalit ja kysymykset, mutta **älä
esitä riskiluokkaa johtopäätöksenä** ennen kuin se on tarkistettu artiklatekstistä (EUR-Lex).
Perusteet ja Suomi-kerros: lue `references/ai-act-perusteet.md`.

---

## Työnkulku

### 1. Kerää signaalit
Selvitä käyttäjältä: mitä järjestelmä tekee, missä kontekstissa, kuka on **tarjoaja**
(provider) ja kuka **käyttöönottaja** (deployer), käsitelläänkö biometriikkaa, tehdäänkö
profilointia tai automaattisia päätöksiä, kohdistuuko se haavoittuviin ryhmiin, onko se
säännellyn tuotteen turvakomponentti (huom: koontiasetus kavensi turvakomponentin
määritelmää, 3 art 14 alakohta ja 6 art 1 a–1 c kohta), ja tuottaako se synteettistä
sisältöä. Kysy myös toimiala, koska se ratkaisee valvovan viranomaisen.

### 2. Luokittele
Kutsu `euaiact_classify_system` rakenteisin signaalein. Lue palautuksen `matched_signals`,
`missing_signals` ja `next_questions` — esitä puuttuvat kysymykset käyttäjälle, jos
luokittelu jää epävarmaksi.

### 3. Tulkitse luokka
- **🚫 Kielletty (5 art)** — esim. tietyt manipuloivat, sosiaalisen pisteytyksen tai
  kielletyn biometrisen tunnistuksen käytöt. Koontiasetuksen uudet kiellot (luvattomat
  intiimikuvat, lasten seksuaalinen hyväksikäyttöaineisto) sovelletaan 2.12.2026 alkaen;
  vahvista päivä `euaiact_check_deadlines`-työkalulla. → Järjestelmää ei saa tarjota eikä
  ottaa käyttöön.
- **⚠️ Suuririskinen (6 art + liite III tai liite I)** — laajat velvoitteet (9–17 art,
  käyttöönottajalle 26–27 art). Soveltaminen alkaa liitteen III järjestelmille myöhemmin
  kuin alkuperäisessä asetuksessa — hae päivä MCP:stä. → Ohjaa `tekoaly-velvoitteet`-skilliin.
- **ℹ️ Rajoitettu riski (50 art)** — avoimuusvelvoitteet (esim. chatbotista on
  kerrottava käyttäjälle, synteettinen sisältö merkittävä). Sovelletaan jo; koontiasetus
  ei siirtänyt niitä yleisesti. Traficom valvoo ja on julkaissut suomenkielisen ohjeen.
- **✅ Minimaalinen riski** — ei erityisvelvoitteita; vapaaehtoiset käytännesäännöt.
- **GPAI (51–56 art)** — yleiskäyttöiset tekoälymallit: tarkista systeeminen riski
  `euaiact_check_gpai_systemic_risk`-työkalulla (`tekoaly-vaatimustenmukaisuus`-skill).

Huomaa **yleinen tekoälylukutaitovelvoite (4 art)**, joka koskee kaikkia tarjoajia ja
käyttöönottajia riskiluokasta riippumatta. Koontiasetuksen jälkeen velvoite on toteuttaa
toimenpiteitä, joilla tuetaan henkilöstön tekoälylukutaidon kehittämistä; tiettyä tasoa ei
tarvitse taata.

### 4. Raportoi
Tuota: riskiluokka + perustelu, liitteen III kategoria (jos suuririskinen), rooli
(tarjoaja/käyttöönottaja), relevantit artiklat **EUR-Lex-linkein** (`euaiact_get_article`),
**valvova markkinavalvontaviranomainen** lain 1377/2025 mukaan (pykälä mainiten, ks.
`references/ai-act-perusteet.md`), ja seuraavat askeleet. Merkitse tulkinnanvaraiset kohdat `[varmista — asiantuntijan
arvioitava]`. Jos kyse on 6(3)-poikkeuksesta, perusta kanta `euaiact_assess_art6_3_exception`
-työkaluun, älä oletukseen.

### 5. Kytkennät
- **Tietosuoja:** jos järjestelmä käsittelee henkilötietoja tai tekee profilointia/
  automaattisia päätöksiä, ohjaa myös `tietosuoja`-plugariin (GDPR 22 art, DPIA).
- **Kansallinen kerros:** laki eräiden tekoälyjärjestelmien valvonnasta (1377/2025)
  nimeää valvojat → `references/ai-act-perusteet.md`; tarkista pykälä Finlexistä
  `juristi:oikeustutkimus`-skillillä ennen kuin esität sen varmistettuna.

## Mitä tämä skill EI tee

- **Ei tee lopullista riskiluokittelua.** Antaa ensiarvion sovellettavasta luokasta, liitteen III kategoriasta ja roolista; sitova luokittelu kuuluu asiantuntijalle.
- **Ei laske määräpäiviä eikä sakkoja muistista.** Soveltamisen siirtymäajat ja seuraamusten enimmäismäärät haetaan eu-ai-act-MCP:n työkaluilla (`euaiact_check_deadlines`, `euaiact_calculate_penalty`) → `tekoaly-vaatimustenmukaisuus`.
- **Ei nimeä valvovaa viranomaista arvaamalla.** Valvoja määräytyy lain 1377/2025 3–5 §:n mukaan liitteen III kohdan ja toimialan perusteella (esim. Fivan valvottavat). Jos kohta tai toimiala on epäselvä, merkitse `[varmista — valvova viranomainen, 1377/2025 3 §]`.
- **Ei ratkaise 6(3)-poikkeusta oletuksella.** "Ei merkittävää riskiä" -poikkeus kuuluu käydä läpi `euaiact_assess_art6_3_exception`-työkalulla; profilointia tekeviin järjestelmiin se ei sovellu.
- **Ei kokoa velvoitelistoja eikä Annex IV -dokumentaatiota.** Luokka selvitetään tässä; velvoitteet roolin mukaan kuuluvat erilliseen skilliin.
- **Ei arvioi henkilötietojen käsittelyä, profilointia tai DPIA-tarvetta.** Tekoälyasetus ei korvaa tietosuoja-asetusta — GDPR-arvio tehdään tietosuoja-plugarissa.

## Jatka tästä

- Kun riskiluokka ja rooli ovat selvillä, velvoitteet roolin mukaan → /tekoalysaantely:tekoaly-velvoitteet
- Soveltamisen määräajat, sakkojen enimmäismäärät, GPAI-kynnys ja FRIA-tarve → /tekoalysaantely:tekoaly-vaatimustenmukaisuus
- Rinnakkainen henkilötietojen käsittelyn, profiloinnin tai DPIA:n arvio → /tietosuoja:tietosuoja-arviointi
- Kansallisen sääntelytilanteen ja viranomaisnimeämisten tarkistus → /juristi:oikeustutkimus
