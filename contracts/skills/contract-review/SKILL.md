---
name: contract-review
description: >
  Sopimuksen lausekekohtainen riskiarvio Suomen oikeuden mukaan ja luokittelu
  (VIHREÄ / KELTAINEN / PUNAINEN). Käytä tätä skilliä, kun käyttäjä haluaa tarkistaa,
  arvioida tai kommentoida saamaansa tai laatimaansa sopimusta, etsiä siitä riskejä,
  yksipuolisia tai kohtuuttomia ehtoja, vastuunrajoituksia, salassapito-, irtisanomis-
  tai immateriaalioikeusehtojen ongelmia, tai päättää voiko sopimuksen allekirjoittaa.
  Triggeröi kun käyttäjä pyytää arvioimaan sopimusehtoja tai kysyy "voiko tämän
  allekirjoittaa" tai "mitä riskejä tässä sopimuksessa on".
---

# Sopimuksen tarkistus — lausekekohtainen riskiarvio

Tämä skill arvioi sopimuksen Suomen sopimusoikeuden näkökulmasta ja luokittelee sen
nopeasti, jotta huomio kohdistuu oikeisiin kohtiin. Skill kantaa sopimusdoktriinin:
mitkä lausekkeet ovat riskialttiita ja miksi.

> **Vastuuvapaus:** tämä on riskiarvio tarkistettavaksi — ei oikeudellista neuvontaa
> eikä lopullinen kanta sopimuksen pätevyydestä. Suuririskinen tai PUNAINEN sopimus
> kuuluu juristin arvioitavaksi ennen allekirjoitusta. Katso `contracts/AGENTS.md`.

## Pohjatieto

- Sopimusoikeuden perusteet ja keskeiset lait: `../contract-drafting/references/contract-law.md`.
- Lakiviittausten tarkistus: `legal-core`-plugarin `legal-research`-skill (oik.ai/Finlex). Tarkista keskeiset säädös- ja pykäläviittaukset lähteestä.
- Perusteellinen rakenteellinen läpikäynti: `legal-core`-plugarin `document-review`-skill (8 vaihetta). Tämä skill keskittyy sopimuskohtaiseen sisältöriskiin.

---

## Vaihe 1: Asemoi sopimus

Selvitä ensin:
- **Sopimustyyppi** (toimitus, palvelu, NDA, lisenssi, vuokra, työ jne.).
- **Kumman osapuolen näkökulmasta** arvioidaan (kuka käyttäjä on)? Riski näyttää erilaiselta toimittajalle ja tilaajalle.
- **Onko osapuolena kuluttaja tai työntekijä?** Jos on, pakottava lainsäädäntö (kuluttajansuojalaki 38/1978, työsopimuslaki) rajoittaa ehtoja, ja kuluttajan/työntekijän vahingoksi poikkeavat ehdot voivat olla pätemättömiä → nosta tämä aina esiin.

## Vaihe 2: Käy lausekkeet läpi

Tarkista vähintään seuraavat ja merkitse kunkin riskitaso. Tyypilliset lippukohdat:

| Lauseke | Tarkasta | Tyypillinen riski |
|---|---|---|
| **Sopimuksen kohde / laajuus** | Onko suoritus määritelty yksiselitteisesti? | Tulkinnanvara → riidat |
| **Hinta ja maksuehdot** | Maksuaika, viivästyskorko, yksipuoliset hinnankorotukset | Avoin hinnankorotusoikeus |
| **Vastuu ja vastuunrajoitus** | Onko vastuu rajattu kohtuuttomasti? Onko tahallisuus/törkeä huolimattomuus jätetty rajoituksen ulkopuolelle? | Vastuun rajaaminen myös törkeästä huolimattomuudesta = pätemätön; toispuolinen rajaus |
| **Vahingonkorvaus** | Välitön vs. välillinen vahinko eroteltu? Yläraja selkeä? | Rajaton vastuu tai epäselvä jako |
| **Sopimussakko** | Onko sakko kohtuullinen? | Kohtuuton sakko → sovittelu (OikTL 36 §) |
| **Immateriaalioikeudet** | Kenelle oikeudet syntyvät/siirtyvät? Käyttöoikeuden laajuus? | Oikeuksien tahaton siirtyminen |
| **Salassapito** | Laajuus, kesto, poikkeukset symmetrisiä? | Toispuolinen tai päättymätön velvoite |
| **Kilpailukielto / rekrytointikielto** | Kesto, maantiet. laajuus, korvaus | Kohtuuton rajoitus → sovittelu/pätemättömyys |
| **Irtisanominen ja purku** | Ovatko oikeudet symmetrisiä? Irtisanomisaika, purkuperusteet, kuluttajan/työntekijän suoja | Toispuolinen exit, lukkiutuminen |
| **Yksipuolinen muutosoikeus** | Saako toinen muuttaa ehtoja/hintaa yksin? | Avoin muutosoikeus heikomman vahingoksi |
| **Sovellettava laki ja riidanratkaisu** | Onko Suomen laki? Käräjäoikeus yksilöity vai välimiesmenettely (kustannus)? | Epäedullinen forum, puuttuva lainvalinta |
| **Liitteet ja pätevyysjärjestys** | Onko ristiriitojen etusija määritelty? | Ristiriitaiset asiakirjat |

Sovittelun yleislippu: räikeän yksipuolinen ehto heikomman osapuolen vahingoksi altistuu kohtuullistamiselle (**oikeustoimilain 228/1929 36 §**; kuluttajasopimuksissa kuluttajansuojalaki).

## Vaihe 3: Luokittele

- **🟢 VIHREÄ — voi edetä allekirjoitukseen.** Ehdot ovat tasapainoisia, vastuunrajoitukset asianmukaisia, ei pakottavan lain ongelmia, ei kohtuuttomia ehtoja arvioivan osapuolen vahingoksi.
- **🟡 KELTAINEN — neuvoteltavaa / juristin silmäys yhteen–kahteen kohtaan.** Yksittäisiä epäedullisia tai epäselviä ehtoja, jotka kannattaa neuvotella tai täsmentää. Nimeä ne ja ehdota muotoilu.
- **🔴 PUNAINEN — älä allekirjoita ilman juristin arviota.** Vakavia ongelmia: rajaton tai kohtuuttomasti toispuolinen vastuu, pakottavan lain vastainen kuluttaja-/työsuhde-ehto, oikeuksien tahaton menettäminen, lukkiutuminen ilman exit-oikeutta, vastuun rajaaminen törkeästä huolimattomuudesta.

## Vaihe 4: Raportoi

Tuota:
1. **Luokitus** (🟢/🟡/🔴) ja yhden lauseen perustelu.
2. **Keskeiset löydökset** taulukkona: lauseke · riski · vakavuus · korjausehdotus.
3. **Konkreettiset muutosehdotukset** kriittisimpiin kohtiin (valmis korvaava muotoilu, ks. `../contract-drafting/references/contract-clauses.md`).
4. **Mitä vaatii juristin arvion** — merkitse `[varmista — juristin arvioitava]`.

Liitä jokaiseen lakiviittaukseen lähde ja merkitse tulkinnanvaraiset kohdat. Älä esitä
pätevyysarviota lopullisena oikeudellisena johtopäätöksenä.

**Redline .docx-sopimukseen:** jos sopimus on Word-tiedostona, voit viedä muutosehdotukset
suoraan dokumenttiin **natiiveina jälkimuutoksina ja kommentteina** `adeu`-MCP:llä
(`read_docx` ensin — myös `appendix`-tila määriteltyjen termien ja ristiviittausten
tarkistukseen — sitten `process_document_batch`). Näin tarkistaja näkee ehdotukset
tutussa Track Changes -muodossa. Aseta `author_name` selkeästi.

## Mitä tämä skill EI tee

- **Ei päätä, voiko sopimuksen allekirjoittaa.** Antaa lausekekohtaisen riskiarvion ja luokituksen; 🔴 PUNAINEN ja lopullinen kanta sopimuksen pätevyydestä kuuluvat juristin arvioon ennen allekirjoitusta.
- **Ei korvaa juristin tarkistusta eikä kanna vastuuta arviosta.** Tämä on tarkistettava riskiarvio, ei oikeudellista neuvontaa.
- **Ei vahvista sovellettavan lain pykäliä muistista.** Oikeustoimilain 36 §:n, kuluttajansuojalain ym. säädösnumero ja sanamuoto tarkistetaan lähteestä; tulkinnanvaraiset kohdat merkitään.
- **Ei tee perusteellista rakenteellista läpikäyntiä.** Keskittyy sopimuskohtaiseen sisältöriskiin; 8-vaiheinen kielen-, rakenteen- ja viittaustarkistus kuuluu `legal-core`-plugarin `document-review`-skillille.
- **Ei laadi sopimusta tai puuttuvia lausekkeita alusta.** Arvioi olemassa olevaa tekstiä ja ehdottaa korvaavia muotoiluja; uuden sopimuksen rakentaminen kuuluu laatimis-skillille.
- **Ei korvaa riidan ratkaisua.** Jos sopimus on jo riitautunut tai rikottu, prosessuaaliset toimet kuuluvat riidanratkaisun materiaaliin.

## Jatka tästä

- Korjattujen tai puuttuvien lausekkeiden laatiminen valmiilla muotoilulla → /sopimukset:sopimuksen-laatiminen
- Säädös- ja pykäläviittausten (esim. oikeustoimilaki 228/1929 36 §) tarkistus lähteestä → /juristi:oikeustutkimus
- Perusteellinen rakenteellinen laadun- ja kielentarkistus (8 vaihetta) → /juristi:asiakirjan-tarkistus
- Sopimuksen henkilötietoehtojen tietosuoja-arviointi → /tietosuoja:tietosuoja-arviointi
- Jos sopimus on riitautunut tai rikottu → /riidanratkaisu:haastehakemus
- Osakassopimuksen erityiskysymykset (drag/tag, vesting, deadlock) → /yhtiooikeus:osakassopimus
- Vastapuolen maksukyky epävarma → /insolvenssi:maksukyvyttomyysarvio
