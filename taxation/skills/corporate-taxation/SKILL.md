---
name: corporate-taxation
description: >
  Yritysverotus Suomessa (laki elinkeinotulon verottamisesta 360/1968).
  Käytä tätä skilliä, kun käyttäjä arvioi yrityksen tulon veronalaisuutta
  tai menon vähennyskelpoisuutta, suunnittelee konserniavustusta,
  osingonjaon verotusta tai yritysjärjestelyn (sulautuminen, jakautuminen,
  liiketoimintasiirto, osakevaihto) verokohtelua, arvioi peitellyn osingon
  tai veron kiertämisen riskiä, käsittelee siirtohinnoittelua tai
  tappioiden vähentämistä, tai valmistelee sukupolvenvaihdosta. Triggeröi
  sanoista: elinkeinoverotus, EVL, vähennyskelpoisuus, konserniavustus,
  osinkoverotus, yritysjärjestelyn verotus, veroneutraali, peitelty osinko,
  siirtohinnoittelu, tappioiden vähentäminen, sukupolvenvaihdos,
  osakaslaina, korkovähennys.
---

# Yritysverotus — EVL, järjestelyt ja riskisäännökset

Tämä skill jäsentää yritysverotuksen kysymykset elinkeinoverolain
(360/1968) ja verotusmenettelylain riskisäännösten valossa. Perusteet:
`../tax-procedure-and-appeals/references/tax-fundamentals.md`.

> **Vastuuvapaus:** analyysit ovat tarkistettavia — ei veroneuvontaa.
> Verokannat ja euromäärät aina lähteestä. Merkittävässä järjestelyssä
> oikea väline on ennakkoratkaisu. Katso `taxation/AGENTS.md`.

## Tarkista laki lähteestä

Hae EVL:n, TVL:n ja VML:n sovellettavat säännökset
**`legal-core:legal-research`-skillillä** ja KHO:n käytäntö lähteestä.
Yritysverotuksessa KHO:n vuosikirjaratkaisut ja Verohallinnon syventävät
ohjeet täsmentävät lähes jokaista rajanvetoa — erottele laki, KHO ja
Verohallinnon kanta toisistaan.

## Perusjäsennys: tulo, meno, jaksotus

1. **Tulolähde ja laki** — sovelletaanko EVL:ää (elinkeinotoiminta) vai
   TVL:ää; yhteisöjen tulolähdejako on muuttunut — tarkista nykytila
   lähteestä.
2. **Tulon veronalaisuus** — pääsääntö laaja; poikkeukset (mm.
   käyttöomaisuusosakkeiden verovapaa luovutus EVL 6 b §:n
   edellytyksin — edellytykset tiukat, hae lähteestä).
3. **Menon vähennyskelpoisuus** — tulon hankkimisesta tai
   säilyttämisestä johtuneet menot; rajoitukset (mm. edustusmenot,
   sakot, korkovähennysrajoitus EVL 18 a §) lähteestä.
4. **Jaksotus** — suoriteperiaate, poistot, varaukset; poistoprosentit
   lähteestä.

## Konserni

- **Konserniavustus (825/1986)** — tuloksentasaus kotimaisessa
  konsernissa: omistus-, aika- ja kirjausedellytykset tarkistetaan
  lähteestä; avustus on antajalleen vähennyskelpoinen ja saajalleen
  veronalainen vain edellytysten täyttyessä.
- **Siirtohinnoittelu (VML 31 §, otsikko vahvistettu:
  siirtohinnoitteluoikaisu)** — etuyhteystoimet markkinaehtoperiaatteella;
  dokumentointivelvollisuuden rajat ja sisältö lähteestä. Rajat ylittävissä
  tilanteissa verosopimukset ja EU-oikeus rinnalle.
- **Tappiot** — vähentämisjärjestys ja -ajat sekä omistajanvaihdoksen
  vaikutus (ja poikkeuslupa) lähteestä.

## Yritysjärjestelyt (EVL 52–52 a §, olemassaolo vahvistettu)

EVL:n jatkuvuussäännökset koskevat sulautumista, jakautumista,
liiketoimintasiirtoa ja osakevaihtoa:

- **Veroneutraalisuus edellyttää säännösten täsmällistä noudattamista** —
  vastikkeen laatu ja määrä, siirtyvä toimintakokonaisuus,
  jatkuvuusperiaate. Yksikin poikkeama voi kaataa neutraalisuuden;
  edellytykset aina lähteestä.
- **Veron kiertämistä koskeva erityissäännös** yritysjärjestelyissä:
  jos järjestelyn yksinomaisena tai pääasiallisena tarkoituksena on
  veroedun saaminen, edut voidaan evätä — dokumentoi liiketaloudelliset
  perusteet ennen toteutusta.
- Yhtiöoikeudellinen menettely (OYL 16–17 luku) kulkee rinnalla →
  `company-law:corporate-transactions`; varainsiirtoverokysymykset (931/1996)
  tarkistetaan erikseen.
- Suosi **ennakkoratkaisua** ennen merkittävää järjestelyä.

## Osakas ja yhtiö — riskisäännökset

- **Peitelty osinko (VML 29 §, otsikko vahvistettu)** — osakkaan saama
  etu poikkeavan hinnoittelun muodossa: alihintaiset luovutukset
  osakkaalle, ylihintaiset ostot osakkaalta, perusteettomat edut.
  Seuraamukset ja arvostus lähteestä.
- **Osakaslainat** — verokohtelu tarkistetaan lähteestä (TVL).
- **Veron kiertäminen (VML 28 §, otsikko vahvistettu)** — kokonaisarvio
  järjestelyn liiketaloudellisista perusteista; sarjatoimet arvioidaan
  kokonaisuutena.
- **Osingonjako** — yhtiöoikeudellinen laillisuus ensin
  (`company-law:corporate-governance`), sitten verokohtelu (listaamaton/
  listattu, matemaattinen arvo — laskentaparametrit vero.fi:stä).

## Sukupolvenvaihdos

Jäsennä kolme kerrosta: kauppa/lahja/perintö-rakenne, **huojennukset**
(perintö- ja lahjaverolain 378/1940 sukupolvenvaihdoshuojennus ja TVL:n
luovutusvoittohuojennus — edellytykset tiukat, lähteestä) ja
yhtiöjärjestelyt ennen vaihdosta. Ennakkoratkaisu on
sukupolvenvaihdoksissa vakiotyökalu — ehdota sitä.

## Mitä tämä skill EI tee

- **Ei laske veroa sitovasti** eikä korvaa tilitoimistoa tai
  tilintarkastajaa — laskelmat `[mallin laskelma — tarkista]`.
- **Ei vahvista verokantoja, poistoprosentteja tai euromääriä
  muistista** — lähteestä tai `[tarkista verovuoden arvo — vero.fi]`.
- **Ei lupaa veroneutraalisuutta** — sen varmistaa vain säännösten
  täsmällinen noudattaminen ja tarvittaessa ennakkoratkaisu.
- **Ei suunnittele järjestelyjä, joiden ainoa sisältö on veroetu** —
  VML 28 §:n riski nostetaan esiin, ei piiloteta.
- **Ei kata kansainvälisen verotuksen erityiskysymyksiä syvällisesti**
  (kiinteä toimipaikka, lähdeverot, verosopimusverkosto) — niissä
  veroasiantuntijalle.

## Jatka tästä

- Muutoksenhaku tai ennakkoratkaisuhakemus → /verotus:verotusmenettely-ja-muutoksenhaku
- ALV-näkökulma samaan järjestelyyn → /verotus:arvonlisaverotus
- Järjestelyn yhtiöoikeudellinen toteutus → /yhtiooikeus:yritysjarjestelyt
- Varojenjaon laillisuus ennen verokohtelua → /yhtiooikeus:yhtion-hallinto
- Säännöksen tai KHO-ratkaisun tarkistus → /juristi:oikeustutkimus
