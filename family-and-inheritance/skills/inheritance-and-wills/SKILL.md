---
name: inheritance-and-wills
description: >
  Perimys, testamentti ja jäämistön käsittely Suomessa (perintökaari
  40/1965). Käytä tätä skilliä, kun selvitetään perimysjärjestystä,
  laaditaan tai tulkitaan testamenttia, arvioidaan rintaperillisen
  lakiosaa, jäsennetään perunkirjoitusta tai perinnönjakoa, selvitetään
  lesken asemaa, tai arvioidaan testamentin tai jaon moitetta.
  Triggeröi sanoista: perintö, perillinen, rintaperillinen, perimys,
  testamentti, lakiosa, perinnönjako, perunkirjoitus, perukirja,
  pesänselvitys, pesänjakaja, leski, hallintaoikeus, jäämistö,
  testamentin moite, rintaperillisen asema, parenteeli.
---

# Perintö ja testamentti — perimys, lakiosa ja jäämistön käsittely

Tämä skill jäsentää perimyksen, testamentin ja jäämistön käsittelyn.
Perintöoikeuden käsitteet ja rakenne: `references/inheritance-code-fundamentals.md`
— lue se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ja jäsennykset ovat tarkistettavia — ei
> oikeudellista neuvontaa. Testamentin muoto, määräajat ja verot
> tarkistetaan lähteestä; perintövero ei kuulu tähän. Katso
> `family-and-inheritance/AGENTS.md`.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki ja oikeuskäytäntö lähteestä

Hae perintökaaren (40/1965) säännökset **`legal-core:legal-research`-skillillä**.
Testamentin tulkintaa, lakiosaa, lesken asemaa ja jaon moitetta
koskeva KKO-käytäntö lähteestä. **Testamentin muotovaatimukset** (kirjallinen
muoto ja kaksi esteetöntä todistajaa yhtä aikaa läsnä) tarkistetaan aina
laista — muotovirhe voi tehdä testamentin pätemättömäksi.

> **Pohja:** [`pohjat/will.md`](../../templates/will.md) — testamentin luuranko muotomuistilistoineen (määrämuotoinen asiakirja).

## Vaihe 1: Perimysjärjestys ilman testamenttia

1. **Parenteelit** (perintökaaren perimysjärjestys): ensin rintaperilliset
   (lapset, sijaantulo lapsenlapsille), sitten vanhemmat ja sisarukset,
   sitten isovanhemmat. Valtio viimesijaisena.
2. **Lesken asema**: aviopuolison perintöoikeus, kun rintaperillisiä ei
   ole; lesken oikeus pitää jäämistö jakamattomana ja **hallintaoikeus
   yhteiseen kotiin** — tarkista edellytykset lähteestä.
3. **Avopuolisolla ei ole perintöoikeutta** — vain testamentilla.
   Tämä on yleinen väärinkäsitys; nosta se esiin.

## Vaihe 2: Testamentti

- **Tarkoitus ja tyyppi**: yleisjälkisäädös vai erityisjälkisäädös
  (legaatti); täysi omistusoikeus, hallintaoikeus (esim. leskelle) vai
  tuotto-oikeus. Selvitä, mitä testamentintekijä tavoittelee.
- **Muoto**: kirjallinen, päivätty, testamentintekijän allekirjoittama
  ja **kahden esteettömän todistajan** samanaikaisesti oikeaksi
  todistama — `[tarkista muotovaatimukset ja todistajan esteettömyys
  lähteestä]`. Hätätilatestamentti on poikkeus omine edellytyksineen.
- **Lakiosan huomioon ottaminen**: testamentti ei voi sivuuttaa
  rintaperillisen lakiosaa (ks. vaihe 3); huomioi tämä laadinnassa.
- **Pätemättömyys ja moite**: muotovirhe, testamentintekijän
  kelpoisuus, pakko tai erehdys → moiteaika perillisellä `[tarkista]`.

## Vaihe 3: Lakiosa

- **Rintaperillisen lakiosa** on puolet lakimääräisestä perintöosasta —
  pakottava, testamentista riippumaton.
- **Lakiosaa on vaadittava** lakiosailmoituksella testamentin saajalle
  määräajassa kuolemasta/tiedoksisaannista — `[tarkista määräaika]`;
  vaatimatta jättäminen voi johtaa oikeuden menetykseen.
- Lakiosan täydennys ja huomioon otettavat ennakkoperinnöt ja lahjat
  (suosiolahja) — laskenta lähteestä.

## Vaihe 4: Pesänselvitys ja perunkirjoitus

1. **Perunkirjoitus** on toimitettava määräajassa kuolemasta
   (`[tarkista määräaika]`); perukirja luetteloi varat, velat ja
   osakkaat ja toimii mm. veroilmoituksena Verohallinnolle.
2. **Kuolinpesän osakkaat**: perilliset, yleistestamentin saajat ja
   eloonjäänyt puoliso (ennen ositusta). Pesää hallitaan yhdessä,
   ellei pesänselvittäjää määrätä.
3. **Pesänselvitys**: velkojen selvittäminen ja maksu ennen jakoa.

## Vaihe 5: Ositus ja perinnönjako

- **Kuolintapauksessa ensin ositus** eloonjääneen puolison kanssa
  (→ `marriage-and-division-of-property`), **sitten perinnönjako** perillisten
  kesken. Pidä vaiheet erillään.
- Sopimusjako (osakkaiden yksimielisyys, muotovaatimus) tai
  pesänjakajan toimittama jako riitatilanteessa.
- Jaon moite määräajassa `[tarkista]`.

## Vaihe 6: Verot

- **Perintövero** ja mahdollinen lahjavero määräytyvät perukirjan ja
  Verohallinnon mukaan — **älä laske perintöveroa tai esitä
  veroluokkia ja rajoja muistista** → `taxation`-plugari ja Verohallinto.

## Mitä tämä skill EI tee

- **Ei vahvista testamentin muotovaatimuksia tai määräaikoja muistista**
  — laista tai `[tarkista]`.
- **Ei laske perintöveroa** → `taxation`.
- **Ei sivuuta lakiosaa** testamenttia laadittaessa.
- **Ei toimi pesänjakajana eikä ratkaise jakoriitaa** — se kuuluu
  pesänjakajalle ja tuomioistuimelle.
- **Ei oleta avopuolisolle perintöoikeutta** — vain testamentilla.

## Jatka tästä

- Jäämistöositus ja lesken tasinko → /perhe-ja-perinto:avioliitto-ja-ositus
- Ennakoiva varautuminen: edunvalvontavaltuutus → /perhe-ja-perinto:edunvalvonta-ja-edunvalvontavaltuutus
- Perintö- ja lahjavero → /verotus:verotusmenettely-ja-muutoksenhaku
- Jakoriidan tai testamentin moite tuomioistuimessa → /riidanratkaisu:haastehakemus
- Säännöksen tai KKO-käytännön tarkistus → /juristi:oikeustutkimus
