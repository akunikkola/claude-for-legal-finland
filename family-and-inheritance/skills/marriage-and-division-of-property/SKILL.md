---
name: marriage-and-division-of-property
description: >
  Avioliiton varallisuussuhteet ja niiden purkautuminen Suomessa
  (avioliittolaki 234/1929). Käytä tätä skilliä, kun laaditaan tai
  arvioidaan avioehtosopimusta, valmistaudutaan ositukseen tai
  omaisuuden erotteluun avioeron tai kuoleman johdosta, lasketaan
  avio-osaa ja tasinkoa, tai puretaan avopuolisoiden yhteistaloutta
  (laki avopuolisoiden yhteistalouden purkamisesta 26/2011).
  Triggeröi sanoista: avioehto, avioehtosopimus, ositus, tasinko,
  avio-oikeus, avio-osa, omaisuuden erottelu, osituksen sovittelu,
  avoero, avopuoliso, hyvitys, ositussopimus, avioero.
---

# Avioliitto ja ositus — avioehto, ositus ja avopuolison asema

Tämä skill jäsentää avioliiton varallisuussuhteet ja niiden
purkautumisen. Perheoikeuden kartta, käsitteet ja sudenkuopat:
`references/perhe-ja-perinto-perusteet.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ja laskelmat ovat tarkistettavia — ei
> oikeudellista neuvontaa. Muotovaatimukset, määräajat ja verot
> tarkistetaan lähteestä. Katso `perhe-ja-perinto/CLAUDE.md`.

## Tarkista laki ja oikeuskäytäntö lähteestä

Hae avioliittolain (234/1929) ja avoliittolain (26/2011) säännökset
**`juristi:oikeustutkimus`-skillillä** (oik.ai/Finlex). Osituksen
sovittelua, avio-oikeuden ulkopuolista omaisuutta ja avopuolison
hyvitystä koskeva KKO-käytäntö lähteestä. Muotovaatimukset
(avioehdon ja ositussopimuksen pätevyys) aina laista.

## Vaihe 1: Tunnista tilanne ja sovellettava laki

1. **Avioliitto vai avoliitto?** Avioliitossa sovelletaan
   avioliittolakia (avio-oikeus, ositus); avoliitossa ei ole
   avio-oikeutta, vaan yhteistalouden purku ja mahdollinen hyvitys
   (26/2011) sekä yleinen varallisuusoikeus (omistus, yhteisomistus).
   Älä sekoita näitä — peruskäsitteet ovat eri.
2. **Mikä purkaa varallisuussuhteen?** Avioero vai toisen puolison
   kuolema? Kuolintapauksessa ositus ja perintö kytkeytyvät
   (lesken asema, tasinkoprivilegi) → `perinto-ja-testamentti`.
3. **Onko avioehtoa tai muita sopimuksia?** Avioehdon sisältö ja
   pätevyys (muoto, rekisteröinti) ratkaisevat avio-oikeuden laajuuden.

## Vaihe 2: Avioehtosopimus

- **Tarkoitus**: avio-oikeuden poissulkeminen kokonaan tai osittain,
  yksipuolisesti tai molemminpuolisesti, määräomaisuuteen tai
  kaikkeen. Selvitä, mitä asiakas todella tavoittelee.
- **Muoto ja voimaantulo**: avioehto on määrämuotoinen ja se on
  rekisteröitävä tullakseen voimaan — **tarkista muoto-,
  todistamis- ja rekisteröintivaatimukset laista** `[tarkista]`.
  Allekirjoitusta edeltävä avioehto vs. avioliiton aikana tehty.
- **Laadinta**: yksilöi omaisuus selkeästi; ota kantaa tuottoon,
  sijaan tulleeseen omaisuuteen ja velkoihin; vältä tulkinnanvaraa.
- **Riskit**: liian yksipuolinen ehto voi johtaa osituksen
  sovitteluun; kuoleman ja eron tilanteet voi haluta erottaa.

## Vaihe 3: Ositus tai omaisuuden erottelu

1. **Omaisuuden ja velkojen kartoitus** ositusperusteen päivältä
   (avioeron vireilletulo tai kuolinpäivä — `[tarkista]`).
2. **Avio-oikeuden alainen vs. ulkopuolinen omaisuus** (avioehto,
   saanto vastikkeetta ehdoin, henkilökohtainen omaisuus).
3. **Avio-osien laskenta**: kummankin avio-oikeuden alaisen
   netto-omaisuuden yhteismäärä jaetaan — varakkaampi maksaa
   **tasinkoa**. Esitä laskelma välivaiheineen ja merkitse oletukset.
4. **Vastikkeet ja erityiskysymykset**: yhteisen omaisuuden purku,
   asunnon kohtalo, velkojen kohdentuminen, elinkeino-omaisuus.
5. **Osituksen sovittelu**: kohtuuttoman lopputuloksen oikaisu —
   edellytykset ja harkinta lähteestä; ei automaattinen.
6. **Ositussopimus tai toimitusositus**: sopimusosituksen muoto
   (todistajat) tai pesänjakajan toimittama ositus riitatilanteessa.

## Vaihe 4: Avopuolisoiden yhteistalouden purku

- Sovellettavuus: laki koskee laissa määriteltyjä avopuolisoita
  (yhteinen talous ja asuminen, kesto tai yhteinen lapsi) —
  `[tarkista määritelmä]`.
- **Omaisuuden erottelu** omistuksen perusteella; yhteisomistus
  puretaan. **Hyvitys** panoksesta yhteistalouteen erityisedellytyksin.
- Pesänjakaja voidaan määrätä myös avoliiton purkuun.

## Vaihe 5: Verot ja jatkotoimet

- **Varainsiirtovero, perintö- ja lahjavero** voivat tulla
  kysymykseen omaisuuden siirroissa — älä laske veroja muistista →
  `taxation`-plugari ja Verohallinto.
- Rekisteröinnit ja kirjaukset (avioehto, kiinteistön lainhuuto,
  asunto-osakkeen siirto) → tarvittaessa `real-estate-and-housing`.

## Mitä tämä skill EI tee

- **Ei vahvista muotovaatimuksia, määräaikoja tai veroja muistista**
  — laista, Verohallinnosta tai `[tarkista]`.
- **Ei edusta molempia puolisoita ristiriidassa** — esteellisyys;
  riitaisessa tilanteessa luonnos vain yhden osapuolen näkökulmasta.
- **Ei tee perintöveron tai varainsiirtoveron laskelmaa** →
  `taxation`.
- **Ei korvaa pesänjakajaa eikä tuomioistuinta** — toimitusositus ja
  riidat ratkaistaan siellä.

## Jatka tästä

- Perintö, lesken asema ja jäämistöositus → /perhe-ja-perinto:perinto-ja-testamentti
- Lapsen huolto, asuminen ja elatus erotilanteessa → /perhe-ja-perinto:lapsen-asema-ja-elatus
- Perintö-, lahja- ja varainsiirtovero → /verotus:verotusmenettely-ja-muutoksenhaku
- Asunnon tai kiinteistön siirto → /kiinteistot-ja-asuminen:asuntokauppa
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
