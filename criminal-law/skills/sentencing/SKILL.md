---
name: sentencing
description: >
  Rangaistuksen ja muiden seuraamusten määrääminen Suomen
  rikosoikeudessa (rikoslaki 39/1889). Käytä tätä skilliä, kun
  arvioidaan rangaistuslajia ja -asteikkoa, rangaistuksen mittaamista
  koventamis- ja lieventämisperusteineen, ehdollisen ja ehdottoman
  vankeuden sekä yhdyskuntaseuraamusten edellytyksiä, yhteistä
  rangaistusta, menettämisseuraamusta tai syyteoikeuden ja rangaistuksen
  vanhentumista. Triggeröi sanoista: rangaistuksen mittaaminen,
  rangaistusasteikko, koventamisperuste, lieventämisperuste, ehdollinen
  vankeus, ehdoton vankeus, yhdyskuntapalvelu, sakko, päiväsakko,
  menettämisseuraamus, konfiskaatio, vanhentuminen, yhteinen rangaistus.
---

# Rangaistuksen määrääminen — laji, mittaaminen ja seuraamukset

Tämä skill jäsentää, mikä seuraamus teosta voi seurata ja miten se
mitataan. Rikosoikeuden kartta:
`../criminal-liability-basics/references/criminal-law-fundamentals.md`.

> **Vastuuvapaus:** arvio on tarkistettava luonnos — ei oikeudellista
> neuvontaa eikä ennustetta tuomiosta. **Asteikot, päiväsakon määrä ja
> vanhentumisajat aina lähteestä**, ei muistista. Katso
> `criminal-law/AGENTS.md`.

## Tarkista laki ja oikeuskäytäntö lähteestä

Hae rikoslain rangaistuksen määräämistä (mm. 6 luku), seuraamuksia,
menettämisseuraamusta (mm. 10 luku) ja vanhentumista (mm. 8 luku)
koskevat säännökset **`legal-core:legal-research`-skillillä** sekä nimikkeen
oma asteikko erityisosasta. Rangaistuskäytäntöä koskeva KKO-linja
lähteestä. Sakon ja rikesakon määräämisestä on oma lakinsa (754/2010).

## Vaihe 1: Asteikko ja rangaistuslaji

1. **Nimikkeen rangaistusasteikko** erityisosasta (perus-, törkeä- ja
   lievä tekomuoto eri asteikoin) — `[tarkista lähteestä]`.
2. **Rangaistuslajit**: sakko, ehdollinen tai ehdoton vankeus,
   yhdyskuntaseuraamukset (yhdyskuntapalvelu, valvontarangaistus),
   nuorisorangaistus; rikesakko ja rangaistusmääräys vähäisissä.
3. Lajinvalintaan vaikuttavat asteikko, teon vakavuus ja tekijän
   olosuhteet — kriteerit lähteestä.

## Vaihe 2: Rangaistuksen mittaaminen

- **Mittaamisen lähtökohta**: rangaistus mitataan niin, että se on
  oikeudenmukaisessa suhteessa teon vahingollisuuteen ja vaarallisuuteen,
  teon vaikuttimiin ja tekijän syyllisyyteen.
- **Koventamisperusteet** (esim. suunnitelmallisuus, rikoksen
  tekeminen osana järjestäytynyttä toimintaa, rasistinen tms. vaikutin,
  aiempi rikollisuus laissa määritellysti) — luettelo lähteestä.
- **Lieventämisperusteet** (esim. painostus, sovinto, tekijän pyrkimys
  estää tai poistaa vaikutuksia) ja **kohtuullistamisperusteet**.
- **Lievennetty asteikko** (esim. avunanto, yritys, alentunut
  syyntakeisuus, nuori ikä).

## Vaihe 3: Sakko ja päiväsakko

- **Päiväsakkojärjestelmä**: sakon kokonaismäärä riippuu päiväsakkojen
  lukumäärästä (teon moitittavuus) ja päiväsakon rahamäärästä
  (maksukyky, tulot). **Älä laske päiväsakon rahamäärää tai sakon
  euromäärää muistista** — laskentaperuste ja luvut lähteestä.

## Vaihe 4: Ehdollinen vai ehdoton vankeus

- **Ehdollisen** edellytykset (mm. rangaistuksen pituus ja aiempi
  rikollisuus) ja koeaika; mahdollinen oheissakko tai
  yhdyskuntapalvelu ehdollisen ohessa.
- **Ehdoton vankeus** ja sen suorittaminen; **yhdyskuntapalvelu** ehdottoman
  sijaan edellytyksin. Tarkista kynnykset lähteestä.

## Vaihe 5: Useita rikoksia — yhteinen rangaistus

- Kun samalla kertaa tuomitaan useasta rikoksesta, määrätään **yhteinen
  rangaistus** (ankarimman asteikon pohjalta korotettuna) — periaatteet
  lähteestä; ei rangaistusten suora yhteenlasku.

## Vaihe 6: Menettämisseuraamus ja muut seuraamukset

- **Menettämisseuraamus (konfiskaatio)**: rikoksen tuottaman hyödyn ja
  rikoksentekovälineiden menettäminen valtiolle — edellytykset
  (mm. laajennettu hyödyn menettäminen) lähteestä.
- **Liitännäisseuraamukset**: esim. liiketoimintakielto, ajokielto,
  vahingonkorvaus (siviilivaade rikosasiassa →
  `dispute-resolution:damages`).

## Vaihe 7: Vanhentuminen

- **Syyteoikeuden vanhentuminen** (riippuu rangaistusasteikosta) ja
  **rangaistuksen vanhentuminen** — **ajat aina lähteestä**, ne ovat
  nimike- ja asteikkokohtaisia.

## Mitä tämä skill EI tee

- **Ei esitä asteikkoja, päiväsakon määrää tai vanhentumisaikoja
  muistista** — lähteestä tai `[tarkista]`.
- **Ei ennusta tuomiota varmana** — mittaaminen on tuomioistuimen
  harkintaa.
- **Ei avusta seuraamuksen kiertämisessä** (esim. omaisuuden
  kätkeminen konfiskaatiolta) — kieltäydy ja kerro syy.
- **Ei korvaa avustajaa** rangaistusvaatimukseen vastaamisessa.

## Jatka tästä

- Tunnusmerkistö ja syyksiluettavuus → /rikosoikeus:rikosvastuun-perusteet
- Rikosnimikkeen valinta ja tekomuoto → /rikosoikeus:keskeiset-rikostyypit
- Syyteneuvottelu, syyte ja vastaus → /rikosprosessi:syyte-ja-vastaus
- Asianomistajan korvausvaatimus → /riidanratkaisu:vahingonkorvaus
- Asteikon tai vanhentumisajan tarkistus → /juristi:oikeustutkimus
