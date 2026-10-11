# Tekoälysääntely — jaetut suojaukset ja toimintaperiaatteet

Tämän tiedoston ohjeet koskevat **jokaista** tämän plugarin skilliä. SKILL.md kertoo,
*mitä* tehdään; tämä tiedosto on **varaverkko**.

> **Suunnitteluperiaate:** AI Act -doktriini kuuluu SKILL.md:hen ja referensseihin. Nämä suojaukset ovat henkivakuutus.

---

## Luonnos, jonka ihminen tarkistaa

Riskiluokittelu, velvoitelistat, sakkolaskelmat ja FRIA-luonnokset ovat **tarkistettavia ensiarvioita** — ei oikeudellista neuvontaa. Lopullinen luokittelu ja vaatimustenmukaisuuspäätökset kuuluvat asiantuntijalle. Itse MCP toistaa tämän varauksen ("General guidance, not legal advice"). Merkitse tulkinnanvaraiset kohdat `[varmista — asiantuntijan arvioitava]`.

## Lähteestä, ei muistista

Tämä plugari nojaa **`eu-ai-act`-MCP:hen** (deterministinen, EUR-Lex-pohjainen, versio ≥ 1.7, joka seuraa koontiasetuksella (EU) 2026/1744 muutettua tekstiä). Kun se on käytettävissä:
- **Älä luokittele, listaa velvoitteita, laske sakkoja tai esitä määräpäiviä muistista** — kutsu vastaava työkalu (`euaiact_classify_system`, `euaiact_assess_system`, `euaiact_get_obligations`, `euaiact_calculate_penalty`, `euaiact_check_deadlines`, `euaiact_check_gpai_systemic_risk`, `euaiact_annex_iv_checklist`, `euaiact_assess_art6_3_exception`).
- Pohjaa artiklaviittaukset `euaiact_get_article`-työkalun EUR-Lex-linkkeihin. `euaiact_answer_question` on FAQ-haku: hyvä suunnannäyttäjä, ei artiklan korvike.
- Jos MCP ei ole käytettävissä, sano se. **Älä esitä määräpäivää, sakon enimmäismäärää tai riskiluokkaa lainkaan** — edes varauksella — ennen kuin se on haettu lähteestä (MCP, EUR-Lex tai Finlex). Merkintä `[ei voitu tarkistaa lähteestä]` kuvaa puutetta; se ei oikeuta esittämään muistinvaraista lukua.

## Määräajat ja luvut ovat kiinteitä — ei arvioita

Soveltamisen siirtymäajat ja seuraamusten enimmäismäärät tulevat asetuksesta. Hae ne työkaluilla äläkä pyöristä muistista.

**Koontiasetus on voimassa olevaa lakia.** Tekoälyä koskeva digitaalialan koontiasetus (Digital Omnibus on AI), *asetus (EU) 2026/1744*, julkaistiin EUVL:ssä 24.7.2026 ja tuli voimaan 27.7.2026. Se muutti mm. suuririskisten järjestelmien soveltamisen alkamispäiviä (113 art), tekoälylukutaitoa (4 art), kiellettyjä käytäntöjä (5 art), FRIA:n ja DPIA:n suhdetta (27 art) ja pk-kevennyksiä. **Älä kohtele sitä ehdotuksena** äläkä esitä alkuperäisen asetuksen päiviä voimassa olevina. Jos lähde, ohje tai oma tietosi on peräisin ajalta ennen 27.7.2026, oleta se vanhentuneeksi kunnes tarkistat. Tulevat muutokset (uudet koontiasetukset, delegoidut säädökset) ovat ehdotuksia, kunnes ne on julkaistu EUVL:ssä.

## Kielletyt käytännöt ensin

Jos luokittelu osuu 5 artiklan kiellettyihin käytäntöihin, nosta se heti esiin: järjestelmää ei saa tarjota eikä ottaa käyttöön. Älä etene velvoitelistaan kuin kyse olisi sallitusta suuririskisestä järjestelmästä. Koontiasetus lisäsi kiellot luvattomista intiimikuvista ja lapsiin kohdistuvasta seksuaalisesta hyväksikäyttöaineistosta (5 art 1 kohdan b a ja b b alakohta), joita sovelletaan 2.12.2026 alkaen.

## Usein ohitetut kohdat

- **Työntekijöihin kohdistuva tekoäly** (suorituksen seuranta, tehtävien jakaminen, rekrytointi): tarkista tekoälyasetuksen lisäksi yhteistoimintavelvoitteet — muutosneuvottelut uuden teknologian käyttöönotosta (yhteistoimintalaki 1333/2021, 16 § 2 mom 2 k) ja teknisen valvonnan käsittely (759/2004, 21 §). Suuririskisen järjestelmän käyttöönotosta on ilmoitettava työntekijöiden edustajille ennen käyttöönottoa (26 art 7 kohta), ja laiminlyönti on seuraamusmaksuperuste (1377/2025, 18 § 5 k). → `tyooikeus:yhteistoiminta`.
- **Rooli:** oma brändi toimittajan mallin päällä tekee organisaatiosta *todennäköisesti* tarjoajan, mutta ei varmasti. Esitä rooli tarkistettavana, ei toteamuksena.
- **Yleistä etua koskeva teksti (50 art 4 kohta):** pelkkä oikeinkirjoituksen tarkistus ei ole ihmisen arviointia eikä toimituksellista vastuuta. Jos tekstejä julkaistaan näin, ne on merkittävä jo nyt.
- **Kokoluokka:** pk-yritysarviossa huomioi myös vuokratyö ja omistussuhteet; merkitse arvio tarkistettavaksi.

## Termit

Käytä tekoälyasetuksen suomenkielisen tekstin ja lain 1377/2025 termejä: **suuririskinen tekoälyjärjestelmä** (ei "korkean riskin"), tarjoaja, käyttöönottaja, maahantuoja, jakelija, valtuutettu edustaja, yleiskäyttöinen tekoälymalli, tekoälytoimisto, perusoikeuksia koskeva vaikutustenarviointi (FRIA), avoimuusvelvoite, syväväärennös, pieni midcap-yritys. Käyttäjän puhekieliset termit ("korkean riskin", "AI Act") ovat kysymyksessä sallittuja; vastaa virallisella termillä.

## Rinnakkainen GDPR

Tekoälyasetus **ei korvaa** tietosuoja-asetusta. Profilointi, automaattinen päätöksenteko (GDPR 22 art), DPIA (35 art) ja arkaluonteiset tiedot tulevat usein samaan aikaan arvioitaviksi. Ohjaa tarvittaessa `tietosuoja`-plugariin.

## Kansallinen kerros on säädetty — käytä sitä

Tekoälyasetus on Suomessa suoraan sovellettava. Sitä täydentää **laki eräiden tekoälyjärjestelmien valvonnasta (1377/2025)**, voimassa 1.1.2026 alkaen (HE 46/2025 vp). Laki nimeää valvontaviranomaiset ja säätää seuraamusmaksumenettelystä. **Älä väitä kansallista kerrosta keskeneräiseksi.** Valvontakartta lyhyesti (tarkista pykälä Finlexistä ennen kuin nojaat siihen):

| Mitä valvotaan | Kuka | 1377/2025 |
|---|---|---|
| Kielletyt käytännöt (5 art) | tietosuojavaltuutettu | 4 § |
| Avoimuusvelvoitteet (50 art) | Liikenne- ja viestintävirasto Traficom | 5 § |
| Keskitetty yhteyspiste (70 art) | Traficom | 6 § |
| Liite III: kohdat 1, 3, 4 ja 6–8 sekä 5 b (luottokelpoisuus) | tietosuojavaltuutettu | 3 § 2 mom 4 k |
| Liite III 5 a ja d (julkiset etuudet, hätäpuhelut) | Lupa- ja valvontavirasto | 3 § 2 mom 5 k |
| Liite III 5 c (henki- ja sairausvakuutus), Fivan valvottavat 5 a ja 5 b | Finanssivalvonta | 3 § 2 mom 6 k |
| Liite III 2 (kriittinen infrastruktuuri) | Energiavirasto, Tukes tai Traficom alan mukaan | 3 § 2 mom 1–3 k |
| Liite I (tuoteturvallisuus) | Tukes, Tulli, Traficom, Lupa- ja valvontavirasto, Fimea säädöksen mukaan | 3 § 1 mom |

Muuta: seuraamusmaksun määrää **tekoälyjärjestelmien valvonnan seuraamusmaksulautakunta** Traficomin yhteydessä markkinavalvontaviranomaisen esityksestä (13 §). Valtion ja kunnan viranomaisille, hyvinvointialueille ja muille 24 §:n 3 momentissa luetelluille ei voida määrätä seuraamusmaksua. Seuraamusmaksu vanhentuu viidessä vuodessa (24 §). Suuririskisen järjestelmän käyttöönottajan laiminlyönti ilmoittaa työntekijöiden edustajille ennen käyttöönottoa on seuraamusmaksuperuste (18 § 5 k).

**Tarkista erityisesti:** koontiasetus siirsi konedirektiivin pois liitteen I A-jaksosta. Lain 3 §:n 1 momentin viittaukset liitteen I A-jakson kohtaan 1 on siksi tulkittava muutetun liitteen valossa — merkitse `[varmista — liitteen I numerointi muuttunut asetuksella (EU) 2026/1744]`.

Toimialakohtainen sääntely (rahoitus, terveydenhuolto, työsuojelu) ja viranomaisten ohjeet (Traficom, tietosuojavaltuutettu) täydentävät tätä. Tarkista ajantasaisuus `juristi:oikeustutkimus`-skillillä.

## Jaetut standardit

Säädös-, oikeuskäytäntö- ja esityöviittauksissa noudata markkinapaikan jaettua lähdestandardia [`references/viittaustyyli.md`](../references/viittaustyyli.md): kolmiportainen varmuusmerkintä (Varmistettu / Tarkistettava / Älä käytä), lähdehierarkia ja ratkaisutunnusten oikeat muodot. Lyhyesti: kiinnitä lähde numeroon, älä esitä tarkistamatonta varmistettuna, äläkä koskaan väitä ratkaisun sisältöä ilman että olet tarkistanut ratkaisun lähteestä.

Vastuusta, ammattietiikasta (salassapito, esteellisyys, kuka saa edustaa) ja tietojenkäsittelystä (GDPR 28 art käsittelysopimus, anonymisointi ennen analyysiä): [`references/vastuu-ja-tietoturva.md`](../references/vastuu-ja-tietoturva.md). **Pelkkä disclaimer ei ole suoja** — suojan tuottavat lähteen varmistus, varmuusmerkintä, premissien tarkistus, negatiivirajaus ja ihmisen tarkistusportti.

## Käytäntöprofiili (valinnainen)

Organisaation tekoälyjärjestelmien rekisteri (järjestelmä, rooli, riskiluokka, valvova viranomainen), roolit ja vakiokäytännöt voi tallentaa tähän otsikon `## Käytäntöprofiili` alle. Oletuksena tyhjä — älä keksi, vaan kysy käyttäjältä.
