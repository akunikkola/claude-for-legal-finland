---
name: contract-drafting
description: >
  Sopimuksen laatiminen Suomen oikeuden mukaan: rakenne, keskeiset lausekkeet ja
  sopimusoikeuden perusteet. Käytä tätä skilliä, kun käyttäjä laatii, luonnostelee
  tai täydentää sopimusta – toimitus-, palvelu-, salassapito-, työ-, vuokra-,
  toimeksianto-, lisenssi- tai muuta sopimusta – tai kysyy sopimuslausekkeen
  muotoilusta, sopimuksen osista, vastuunrajoituksesta, sopimussakosta,
  irtisanomisesta, sovellettavasta laista tai riidanratkaisusta. Triggeröi kun
  käyttäjä mainitsee sopimuksen, sopimusehdon, lausekkeen, osapuolet, velvoitteet
  tai haluaa sopimuspohjan.
---

# Sopimuksen laatiminen Suomen oikeuden mukaan

Tämä skill auttaa laatimaan selkeän, tasapainoisen ja Suomen sopimusoikeuden mukaisen
sopimuksen. Lähtökohtana on **sopimusvapaus**: osapuolet voivat pääsääntöisesti sopia
sisällöstä vapaasti, mutta pakottava lainsäädäntö (erityisesti kuluttaja- ja
työsuhteissa) ja kohtuullistamissäännöt asettavat rajat.

> **Vastuuvapaus:** sopimusluonnos on tarkistettava ennen allekirjoitusta — ei
> oikeudellista neuvontaa. Merkittävissä tai suuririskisissä sopimuksissa juristin
> tarkistus on tarpeen. Katso `contracts/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista sovellettava laki lähteestä

Kun sopimus nojaa lakiin (kauppalaki, kuluttajansuojalaki, työsopimuslaki, korkolaki
jne.) tai viittaat pykälään, **käytä `legal-core`-plugarin `legal-research`-skilliä** ja
varmista voimassa oleva sanamuoto oik.ai/Finlex-MCP:stä. Älä vahvista lakiviittausta
muistista. Sopimusoikeuden perusteet ja keskeiset lait: lue `references/contract-law.md`.

---

## Vaihe 1: Selvitä sopimuksen perusta

Kysy käyttäjältä, ellei tieto käy ilmi:
1. **Sopimustyyppi ja tarkoitus** (mitä sovitaan, mikä on kaupan/palvelun kohde).
2. **Osapuolet** — viralliset nimet ja y-tunnukset; onko jompikumpi kuluttaja? (Kuluttajasopimuksessa pakottava kuluttajansuoja rajoittaa ehtoja.)
3. **Keskeiset kaupalliset ehdot** — hinta, maksuehdot, aikataulu, kesto.
4. **Riskit ja painopisteet** — mikä osapuolta erityisesti huolettaa (vastuu, IPR, salassapito, exit).
5. **Onko valmista pohjaa tai aiempaa sopimusta** mallina.

Jos jompikumpi osapuoli on kuluttaja tai kyse on työsuhteesta, nosta pakottavan
lainsäädännön rajat esiin ennen ehtojen laatimista.

## Vaihe 2: Rakenne

Käytä vakiintunutta rakennetta (sovita sopimustyyppiin):

1. **Otsikko ja osapuolet** — viralliset nimet, y-tunnukset, lyhennetyt nimet ("jäljempänä *Toimittaja*").
2. **Tausta ja tarkoitus** (tarvittaessa) — mitä sopimuksella tavoitellaan.
3. **Määritelmät** — keskeiset termit, isolla alkukirjaimella merkityt.
4. **Sopimuksen kohde** — mitä toimitetaan/tehdään, laajuus, laatuvaatimukset.
5. **Hinta ja maksuehdot** — hinta, alv, laskutus, maksuaika, viivästyskorko (korkolaki).
6. **Osapuolten velvollisuudet** — kummankin suoritukset selkeästi eroteltuina.
7. **Immateriaalioikeudet** (jos relevanttia) — kenelle oikeudet syntyvät/siirtyvät.
8. **Salassapito** — laajuus, kesto, poikkeukset.
9. **Vastuu ja vastuunrajoitus** — vahingonkorvaus, vastuun yläraja, välilliset vahingot, force majeure.
10. **Sopimusrikkomus ja seuraamukset** — sopimussakko, purku, korjaaminen.
11. **Voimassaolo ja päättäminen** — kesto, irtisanominen, purkuperusteet, päättymisen vaikutukset.
12. **Sovellettava laki ja riidanratkaisu** — Suomen laki; yleinen tuomioistuin (yksilöi käräjäoikeus) vai välimiesmenettely.
13. **Muut ehdot** — muutokset kirjallisesti, siirtäminen, ilmoitukset, sopimuksen liitteet ja pätevyysjärjestys.
14. **Allekirjoitukset** — päiväys, kappalemäärä/sähköinen allekirjoitus.

Valmiit, kommentoidut esimerkkilausekkeet: lue `references/contract-clauses.md`.

## Vaihe 3: Laadinnan periaatteet

- **Yksilöi osapuolet tarkasti** (viralliset nimet, y-tunnukset) ja käytä lyhennettyä nimeä johdonmukaisesti läpi sopimuksen.
- **Yksiselitteisyys:** vältä tulkinnanvaraa. "Kohtuullinen aika" → määrittele päivinä. "Viipymättä" → täsmennä.
- **Johdonmukainen termistö:** samasta asiasta sama termi (käytä `legal-core`-skilliä kielen tarkistukseen).
- **Tasapaino:** yksipuoliset ehdot voivat altistua kohtuullistamiselle (oikeustoimilain 228/1929 36 §) — erityisesti heikomman osapuolen vahingoksi. Kuluttajasopimuksessa kuluttajan vahingoksi poikkeavat ehdot voivat olla pätemättömiä.
- **Vastuunrajoitus:** erota välitön ja välillinen vahinko, aseta vastuun yläraja selkeästi; huomaa, ettei vastuuta voi rajoittaa tahallisuuden tai törkeän huolimattomuuden osalta.
- **Pykäläviittaukset:** käytä säädöskielen viittausmuotoja (`legal-core`-skill); tarkista numerot `legal-research`-skillillä.

## Vaihe 4: Tulostemuoto

Tuota **uusi** sopimus muokattavana Word-dokumenttina (.docx) `docx`-skillillä (lue sen SKILL.md ensin), tai pyydettäessä Markdown-/tekstimuodossa. Jos kyse on **olemassa olevan sopimuksen muokkaamisesta**, käytä `adeu`-MCP:tä: se kirjoittaa muutokset natiiveina Word-jälkimuutoksina (Track Changes) rikkomatta muotoilua — älä luo dokumenttia uusiksi. Merkitse täydennettävät kohdat selkeästi hakasulkein: `[osapuolen nimi]`, `[hinta]`, `[päivämäärä]`. Lisää loppuun huomautus: *"Luonnos — tarkistettava ennen allekirjoitusta."*

## Vaihe 5: Suosittele tarkistusta

Ehdota laajan tai suuririskisen sopimuksen kohdalla `contract-review`-skilliä
(lausekekohtainen riskiarvio) ja perusteelliseen läpikäyntiin `legal-core`-plugarin
`document-review`-skilliä.

## Mitä tämä skill EI tee

- **Ei korvaa juristin tarkistusta eikä kanna vastuuta luonnoksesta.** Tuottaa tarkistettavan luonnoksen; merkittävä tai suuririskinen sopimus kuuluu juristin arvioitavaksi ennen allekirjoitusta.
- **Ei vahvista sovellettavan lain pykäliä muistista.** Kauppalain, kuluttajansuojalain, työsopimuslain, korkolain ym. säädösnumero ja sanamuoto tarkistetaan lähteestä; tarkistamaton viittaus merkitään `[muistinvarainen — tarkista]`.
- **Ei päätä, voiko valmiin sopimuksen allekirjoittaa.** Laatii ja muotoilee ehdot; lausekekohtainen riskiluokitus ja 🔴 PUNAINEN kuuluvat tarkistus-skillille ja juristille.
- **Ei laadi pakottavan lain vastaista ehtoa** vain siksi, että osapuolet niin "sopivat" — kuluttajan tai työntekijän vahingoksi poikkeava ehto nostetaan esiin, ei piiloteta sopimukseen.
- **Ei korvaa työsuhteen erityissääntelyä.** Työsopimuksen yksityiskohdat (koeaika, irtisanomissuoja, työehtosopimus) kuuluvat työoikeuden materiaaliin.
- **Ei luo olemassa olevaa dokumenttia uusiksi.** Voimassa olevan sopimuksen muokkaus tehdään jälkimuutoksina (`adeu`-MCP), ei korvaavana versiona.

## Jatka tästä

- Valmiin luonnoksen lausekekohtainen riskiarvio (🟢/🟡/🔴) → /sopimukset:sopimuksen-tarkistus
- Sovellettavan lain pykälien ja säädösnumeroiden tarkistus → /juristi:oikeustutkimus
- Työsopimuksen laatiminen Suomen työoikeuden mukaan → /tyooikeus:tyosopimus
- Henkilötietojen käsittely sopimuksessa (käsittelysopimus, tietosuojaehdot) → /tietosuoja:tietosuoja-arviointi
- Valmiin sopimustekstin perusteellinen laadun- ja kielentarkistus → /juristi:asiakirjan-tarkistus
- Osakassopimus tai yhtiöoikeudellinen kytkös → /yhtiooikeus:osakassopimus
- NDA tai liikesalaisuuksien suojaehdot → /immateriaalioikeus:liikesalaisuudet
