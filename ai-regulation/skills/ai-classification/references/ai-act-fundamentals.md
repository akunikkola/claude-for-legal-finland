# EU:n tekoälyasetus — perusteet ja Suomi-kerros

Tiivistelmä luokittelun ja velvoitteiden kannalta keskeisistä asioista. **Tarkista
artiklat `eu-ai-act`-MCP:n työkalulla `euaiact_get_article` (EUR-Lex-linkit) ja kansallinen
sääntely `juristi:oikeustutkimus`-skillillä ennen kuin nojaat niihin.**

## Sovellettava sääntely
- **EU:n tekoälyasetus, asetus (EU) 2024/1689 ("AI Act")** — suoraan sovellettava EU-asetus.
  Ei tarvitse kansallista täytäntöönpanoa ollakseen voimassa, mutta jäsenvaltiot nimeävät
  kansalliset viranomaiset ja täydentävät menettelyjä.
- Soveltaminen on **vaiheittaista** (2025–2027). Tarkista voimassa olevat määräpäivät
  `euaiact_check_deadlines`-työkalulla — älä esitä päivämääriä muistista.

## Riskiperusteinen kehys
- **Kielletyt käytännöt (5 art)** — esim. haitallinen manipulointi, sosiaalinen pisteytys,
  tietyt biometrisen tunnistuksen käytöt.
- **Korkea riski (6 art)** — kaksi reittiä: Annex I (säännellyn tuotteen turvakomponentti)
  ja **Annex III** (luettelo aloista: biometriikka, kriittinen infrastruktuuri, koulutus,
  työllistäminen, olennaiset palvelut, lainvalvonta, muuttoliike/raja, oikeudenkäyttö).
  Laajat velvoitteet (9–17 art tarjoajalle, 26–27 art käyttöönottajalle).
- **Rajoitettu riski (50 art)** — läpinäkyvyysvelvoitteet (chatbot-ilmoitus, synteettisen
  sisällön merkintä).
- **Minimaalinen riski** — ei erityisvelvoitteita.
- **GPAI (51–56 art)** — yleiskäyttöiset mallit; systeemisen riskin kynnys 10²⁵ FLOPs
  (`euaiact_check_gpai_systemic_risk`).
- **Tekoälylukutaito (4 art)** — yleisvelvoite kaikille tarjoajille ja käyttöönottajille.

## Keskeiset velvoitevälineet
- **Annex IV** — korkean riskin järjestelmän tekninen dokumentaatio (`euaiact_annex_iv_checklist`).
- **FRIA, perusoikeusvaikutusten arviointi (27 art)** — tietyt käyttöönottajat; Annex III(5)(b)
  (luottokelpoisuus/luottoluokitus) ja (5)(c) (henki-/sairausvakuutuksen riskinarviointi ja
  hinnoittelu) laukaisevat sen. Annex III(2) (kriittinen infrastruktuuri) on ainoa Annex III
  -kategoria, joka on vapautettu FRIA:sta.
- **Vaatimustenmukaisuuden arviointi (43 art)** — pääosin sisäinen valvonta (Annex VI);
  ilmoitetun laitoksen osallistuminen mm. Annex III(1) biometriikkareitillä.
- **Seuraamukset (99 art)** — hallinnolliset sakot; pk-yrityksille/startupeille kevennys
  (99(6)). Laske `euaiact_calculate_penalty`-työkalulla.

## Suhde GDPR:ään
Tekoälyasetus ja tietosuoja-asetus ovat **rinnakkaisia** — AI Act -vaatimukset eivät korvaa
GDPR-velvoitteita. Profilointi ja automaattinen päätöksenteko (GDPR 22 art), DPIA (35 art) ja
arkaluonteiset tiedot (9 art) tulevat usein samaan aikaan arvioitaviksi. → `data-protection`-plugari.

## Suomi-kerros (tarkistettava)
EU-asetuksena tekoälyasetus on Suomessa suoraan sovellettava. **Kansallinen täytäntöönpano
(toimivaltaiset valvontaviranomaiset, menettelyt, mahdolliset täydentävät säännökset) on
muotoutumassa — älä esitä viranomaisnimeämisiä tai kansallisia säännöksiä varmistettuina.**
Tarkista voimassa oleva tilanne `juristi:oikeustutkimus`-skillillä (oik.ai/Finlex) ja
viranomaisten virallisilta sivuilta, ja merkitse epävarmat kohdat `[varmista — kansallinen
sääntely muotoutumassa]`. Huomioi myös toimialakohtainen valvonta (esim. rahoitusala,
terveydenhuolto, tietosuoja).
