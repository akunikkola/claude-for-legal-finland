---
name: kuluttajakaupan-virhevastuu
description: >
  Kuluttajan oikeudet tavaran tai palvelun virhetilanteessa
  (kuluttajansuojalaki 38/1978). Käytä tätä skilliä, kun kuluttaja
  reklamoi viallisesta tuotteesta tai palvelusta, arvioidaan onko
  kyseessä virhe, valitaan oikaisukeino (korjaus, vaihto, hinnanalennus,
  kaupan purku, vahingonkorvaus), laaditaan reklamaatio tai siihen
  vastataan, tai arvioidaan takuun ja virhevastuun suhdetta. Triggeröi
  sanoista: reklamaatio, tavaran virhe, palvelun virhe, viallinen tuote,
  takuu, hinnanalennus, kaupan purku, virhevastuu, oikaisu, kuluttajan
  oikeudet, hyvitys, vaihto, korjaus.
---

# Kuluttajakaupan virhevastuu — virhe, oikaisu ja reklamaatio

Tämä skill jäsentää kuluttajan oikeudet, kun ostettu tavara tai palvelu
on virheellinen. Kuluttajaoikeuden kartta ja käsitteet:
`references/kuluttajaoikeus-perusteet.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. KSL on pakottava kuluttajan hyväksi; määräajat ja takuun
> kesto tarkistetaan lähteestä. Katso `kuluttajaoikeus/CLAUDE.md`.

## Tarkista laki ja ratkaisukäytäntö lähteestä

Hae KSL:n (38/1978) virhe- ja seuraamussäännökset oikeasta luvusta
**`juristi:oikeustutkimus`-skillillä** — lukurakenne on muuttunut
EU-uudistuksissa (tavarankauppa, digitaalinen sisältö ja palvelut),
joten varmista voimassa oleva luku. Kuluttajariitalautakunnan
ratkaisut vastaavista tapauksista lähteestä.

## Vaihe 0: Onko kyseessä kuluttajakauppa?

Tarkista, että myyjä on elinkeinonharjoittaja ja ostaja kuluttaja
(B2C). Jos kyse on yksityishenkilöiden välisestä kaupasta tai B2B:stä,
sovelletaan kauppalakia ja yleistä sopimusoikeutta → `sopimukset`.

> **Pohja:** [`pohjat/reklamaatio.md`](../../pohjat/reklamaatio.md) — reklamaation rakenteellinen luuranko.

## Vaihe 1: Onko virhe?

1. **Virheen käsite**: tavara/palvelu ei vastaa sovittua, lain
   vaatimuksia tai sitä, mitä kuluttaja voi perustellusti odottaa
   (laatu, ominaisuudet, tiedot, soveltuvuus tarkoitukseen).
2. **Tiedot ja markkinointi**: myös puutteelliset tai harhaanjohtavat
   tiedot ja markkinointilupaukset voivat olla virhe.
3. **Asennus ja ohjeet**: virheelliset asennus- tai käyttöohjeet.
4. **Digitaalinen sisältö ja palvelut**: oma sääntelynsä (mm.
   päivitykset, yhteentoimivuus) — tarkista sovellettava luku lähteestä.
5. **Vaaranvastuun siirtyminen** ja virheen olemassaolo luovutushetkellä;
   tietyn ajan kuluessa ilmenevän virheen oletukset — lähteestä.

## Vaihe 2: Reklamaatio ajoissa

- Kuluttajan on ilmoitettava virheestä **kohtuullisessa ajassa** siitä,
  kun hän havaitsi sen tai hänen olisi pitänyt havaita — `[tarkista
  vähimmäisaika ja takaraja lähteestä]`. Liian myöhäinen reklamaatio voi
  menettää oikeudet.
- Laadi reklamaatio: yksilöi tuote/palvelu, kuvaa virhe, vaadittu
  oikaisu, määräaika vastaukselle, liitteet (kuitti, kuvat).

## Vaihe 3: Oikaisukeinot oikeassa järjestyksessä

1. **Ensisijaisesti korjaus tai virheettömän tavaran toimitus** (myyjän
   valinta tietyin rajoin; ei kohtuutonta kustannusta/haittaa kuluttajalle).
2. **Toissijaisesti hinnanalennus tai kaupan purku**, jos oikaisu ei
   onnistu, viivästyy kohtuuttomasti tai virhe on olennainen (purku).
3. **Vahingonkorvaus** virheestä aiheutuneesta vahingosta erikseen
   edellytyksineen.
4. **Oikeus pidättyä maksusta** virhettä vastaavalta osin.

Esitä keinot porrastettuna ja merkitse, mitkä edellytykset vaativat
tarkistuksen lähteestä.

## Vaihe 4: Takuu vs. lakisääteinen virhevastuu

- **Takuu on vapaaehtoinen lisäsitoumus** eikä rajoita lakisääteistä
  virhevastuuta. Lakisääteinen virhevastuu on voimassa takuusta
  riippumatta.
- Takuunantaja vastaa takuun ehtojen mukaan; kuluttaja voi aina vedota
  myös lakiin. Älä esitä takuuta kuluttajan ainoana keinona.

## Vaihe 5: Jos myyjä kiistää

- Ohjaa kuluttaja maksuttomaan neuvontaan (kuluttajaneuvonta/KKV) ja
  tarvittaessa kuluttajariitalautakuntaan → `kuluttajariita-ja-perinta`.
- Elinkeinonharjoittajan vastinetta laadittaessa: arvioi virheväite
  rehellisesti; pakottavia oikeuksia ei voi kiistää sopimusehdolla.

## Mitä tämä skill EI tee

- **Ei vahvista reklamaatioaikoja, takuun kestoa tai muita määräaikoja
  muistista** — laista tai `[tarkista]`.
- **Ei sovella KSL:ää B2B- tai yksityiskauppaan** → `sopimukset`.
- **Ei laadi kuluttajan oikeuksia heikentäviä ehtoja** — ne ovat
  mitättömiä.
- **Ei anna kuluttajariitalautakunnan ratkaisua** — se on lautakunnan
  toimivallassa.

## Jatka tästä

- Etämyynti, kotimyynti ja peruuttamisoikeus → /kuluttajaoikeus:etamyynti-ja-peruuttaminen
- Riidan vieminen lautakuntaan ja perintä → /kuluttajaoikeus:kuluttajariita-ja-perinta
- B2B- tai yksityiskaupan virhe (kauppalaki) → /sopimukset:sopimuksen-tarkistus
- Säännöksen tai ratkaisukäytännön tarkistus → /juristi:oikeustutkimus
