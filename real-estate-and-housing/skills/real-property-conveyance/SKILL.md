---
name: real-property-conveyance
description: >
  Kiinteistön kauppa Suomessa maakaaren (540/1995) mukaan. Käytä tätä
  skilliä, kun käyttäjä valmistelee tai tarkistaa kiinteistön, määräalan
  tai määräosan kauppaa tai esisopimusta, laatii kauppakirjaa, selvittää
  lainhuutoa, kiinnityksiä tai rasituksia, arvioi kaupan jälkeen
  ilmennyttä virhettä (kosteusvaurio, kaavapoikkeama, rasitus) tai laatii
  reklamaatiota tai vaatimuskirjettä. Triggeröi sanoista: kiinteistökauppa,
  kauppakirja, määräala, kaupanvahvistaja, lainhuuto, kiinnitys,
  panttikirja, rasitustodistus, esisopimus, käsiraha, salainen virhe,
  hinnanalennus, kaupan purku, kuntotarkastus, omakotitalo.
---

# Kiinteistökauppa — määrämuoto, kirjaukset ja virhevastuu

Tämä skill jäsentää kiinteistökaupan valmistelun, toteutuksen ja
virhetilanteet maakaaren (540/1995) mukaan. Perusteet ja
kiinteistö/asunto-osake-rajanveto: `references/kiinteisto-perusteet.md` —
lue se tehtävän alussa. Jos kohde onkin asunto-osake →
`asuntokauppa`-skill.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Kaupanvahvistus, allekirjoitukset ja kirjaamishakemukset
> ovat ihmisen vastuulla. Katso `kiinteistot-ja-asuminen/CLAUDE.md`.

## Tarkista laki lähteestä

Hae maakaaren säännökset (muotovaatimus, virheet, määräajat,
kirjaamisvelvollisuudet) **`juristi:oikeustutkimus`-skillillä** ja KKO:n
virhe- ja reklamaatiokäytäntö lähteestä. Varainsiirtoveron prosentti ja
ilmoitusvelvollisuus → `taxation` ja vero.fi `[tarkista]`.

## Vaihe 1: Kohteen ja taustojen selvitys

1. **Mikä myydään?** Koko kiinteistö, määräala vai määräosa;
   vuokraoikeus rakennuksineen on eri instrumentti (kirjattava
   erityinen oikeus). Sekamuodot esiin.
2. **Asiakirjojen hankintalista** (referenssissä): lainhuuto- ja
   rasitustodistus, kiinteistörekisteriote, kaavaote,
   rakennusluvat — skill ei näe rekistereitä, ihminen hankkii MML:stä
   ja kunnasta.
3. **Rasitukset ja oikeudet**: kiinnitykset ja panttikirjat (kenen
   hallussa?), kirjatut erityiset oikeudet, rasitteet,
   yhteisalueosuudet, tieoikeudet.
4. **Kaava ja luvat**: käyttötarkoitus, rakennusoikeus, luvattomat
   rakennelmat → `ymparisto-ja-kaavoitus:kaavoitus-ja-rakentaminen`;
   pilaantuneen maaperän riski → `ymparisto-ja-kaavoitus:ymparistovastuut`.

## Vaihe 2: Kauppakirjan laatiminen

- **Määrämuoto on ehdoton**: kirjallinen kauppakirja, jonka
  kaupanvahvistaja vahvistaa kaikkien allekirjoittajien läsnä ollessa —
  tai kauppa MML:n **sähköisessä kaupankäyntijärjestelmässä**
  (molemmat vahvistettu laista). Vähimmäissisältö (luovutustarkoitus,
  kiinteistö, osapuolet, kauppahinta) lähteestä — puute kaataa kaupan.
- **Esisopimus** on myös määrämuotoinen; vapaamuotoinen "varaus" ei
  sido — käsirahan ja sopimussakon vaikutukset lähteestä.
- **Keskeiset ehdot**: omistus- ja hallintaoikeuden siirtyminen,
  kauppahinnan maksu ja vakuusjärjestelyt (panttikirjojen luovutus),
  vaaranvastuun siirtyminen, kohteen kunto ja tehdyt selvitykset
  (kuntotarkastusraportti yksilöitynä), vastuunjako tiedossa olevista
  vioista, irtaimiston erittely (verovaikutus), viivästysseuraamukset.
- **Vastuunrajoitusehto**: yksilöimätön "siinä kunnossa kuin se on"
  -ehto ei riitä rajaamaan myyjän virhevastuuta — rajoituksen on
  oltava yksilöity (tarkista edellytykset lähteestä). Älä laadi
  näennäisrajoitusta.

## Vaihe 3: Kaupan jälkeen — kirjaukset

- **Lainhuoto** haettava määräajassa kaupasta `[aika — tarkista
  lähteestä]`; sähköisessä kaupassa vireilletulo automaattinen.
- Panttikirjojen siirto ja uudet kiinnitykset; varainsiirtoveron
  suorittaminen lainhuudon edellytyksenä.
- Laadi kirjausten tarkistuslista päivämäärineen →
  `juristi:toimeksianto` (määräaikataulukko).

## Vaihe 4: Virhetilanne

1. **Tunnista virhetyyppi** (käsitteet vahvistettu laista):
   **laatuvirhe** (kunto; myös salainen virhe — kynnys ja
   merkittävyysvaatimus lähteestä), **vallintavirhe** (kaava/luvat),
   **oikeudellinen virhe** (omistus/rasitukset).
2. **Vastuuanalyysi**: myyjän tiedonantovelvollisuus vs. ostajan
   ennakkotarkastusvelvollisuus; kuntotarkastuksen
   lisätutkimuskehotusten merkitys; välittäjän vastuu (1074/2000)
   erikseen.
3. **Reklamaatio heti**: kohtuullinen aika + ehdoton takaraja
   `[tarkista lähteestä]`. Sisältö: virhe yksilöitynä, havainnot ja
   selvitykset, vaatimus (alustavanakin) ja varauma täydentämisestä.
4. **Seuraamukset**: hinnanalennus (laskentatapa lähteestä),
   vahingonkorvaus (tuottamus; salaisessa virheessä ei korvausta —
   tarkista), purku (olennaisuuskynnys korkea). Riitautus →
   `riidanratkaisu:haastehakemus`.

## Mitä tämä skill EI tee

- **Ei vahvista kauppaa eikä korvaa kaupanvahvistajaa** — määrämuoto
  täyttyy vain laissa säädetyllä tavalla.
- **Ei näe rekistereitä** (lainhuuto, rasitukset, kaava) — se laatii
  hankintalistan, ihminen hankkii otteet.
- **Ei arvioi rakennusteknistä kuntoa** — kuntotarkastus kuuluu
  asiantuntijalle; skill jäsentää raportin oikeudellisen merkityksen.
- **Ei vahvista määräaikoja tai veroprosentteja muistista** —
  lähteestä tai `[tarkista]`.
- **Ei avusta vikojen salaamisessa** — kieltäydy ja kerro virhe- ja
  petosvastuuriski.

## Jatka tästä

- Kohde onkin asunto-osake → /kiinteistot-ja-asuminen:asuntokauppa
- Kaava-, lupa- tai pilaantumiskysymys → /ymparisto-ja-kaavoitus:kaavoitus-ja-rakentaminen
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
- Virheriidan vieminen tuomioistuimeen → /riidanratkaisu:haastehakemus
- Varainsiirtovero ja luovutusvoitto → /verotus:verotusmenettely-ja-muutoksenhaku
- Kauppakirjan kieliasu ja rakenne → /juristi:asiakirjan-tarkistus
