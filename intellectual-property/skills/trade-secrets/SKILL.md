---
name: trade-secrets
description: >
  Liikesalaisuuksien suoja Suomen oikeuden mukaan (liikesalaisuuslaki
  595/2018). Käytä tätä skilliä, kun käyttäjä suojaa yrityksen
  luottamuksellista tietoa (asiakastiedot, hinnoittelu, reseptit,
  algoritmit, prosessit), arvioi täyttyykö liikesalaisuuden määritelmä,
  suunnittelee suojatoimenpiteitä tai NDA-käytäntöjä, epäilee
  liikesalaisuuden oikeudetonta hankkimista, käyttöä tai ilmaisemista
  (esim. lähtevä työntekijä, kumppani), tai vertailee salassapitoa ja
  patentointia. Triggeröi sanoista: liikesalaisuus, yrityssalaisuus,
  salassapito, NDA, luottamuksellinen tieto, tietovuoto, lähtevä
  työntekijä vei tiedot, know-how, kilpailija sai tiedot.
---

# Liikesalaisuudet — suoja, loukkaukset ja oikeuskeinot

Tämä skill jäsentää liikesalaisuuden suojan ja loukkaustilanteet
liikesalaisuuslain (595/2018) mukaan. Perusteet:
`../trademarks-and-trade-names/references/ip-fundamentals.md`.

> **Vastuuvapaus:** arviot ja luonnokset ovat tarkistettavia — ei
> oikeudellista neuvontaa. Katso `intellectual-property/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä

Hae liikesalaisuuslain määritelmät, loukkaussäännökset ja oikeuskeinot
**`legal-core:legal-research`-skillillä**; työntekijäulottuvuudessa myös
työsopimuslain lojaliteetti- ja kilpailusäännökset sekä rikoslain
yritysvakoilua ja yrityssalaisuuden rikkomista koskevat säännökset
(tarkista lähteestä).

## Onko tieto liikesalaisuus? — kolme edellytystä

Käy läpi ja dokumentoi jokainen:

1. **Salaisuus** — tieto ei ole kokonaisuutena tai osiensa täsmällisenä
   kokoonpanona alalla yleisesti tunnettua tai helposti selville
   saatavissa.
2. **Taloudellinen arvo** — juuri salaisuuden vuoksi.
3. **Kohtuulliset suojatoimenpiteet** — haltija on tosiasiallisesti
   suojannut tietoa. **Tämä kaatuu useimmin:** ilman dokumentoituja
   toimia suojaa ei ole.

Tarkat sanamuodot lähteestä. Huomaa: työntekijän **ammattitaito ja
kokemus** eivät ole liikesalaisuuksia — rajanveto on
loukkausriidoissa keskeinen ja tulkinnanvarainen `[varmista —
IPR-juristin arvioitava]`.

## Suojaohjelma — kohtuulliset toimenpiteet käytäntöön

Tuota organisaatiolle tarkistuslista ja dokumentaatiopohja:

- **Tunnista ja luokittele** — mitkä tiedot ovat liikesalaisuuksia;
  omistaja ja säilytyspaikka.
- **Rajaa pääsy** — need to know, käyttöoikeudet, lokit, merkinnät
  ("luottamuksellinen").
- **Sopimukset** — NDA:t (kumppanit, neuvottelut, DD), työsopimusten
  salassapitoehdot (kesto myös työsuhteen jälkeen — kohtuullisuus),
  alihankkijaketju. Lausekemekaniikka:
  `contracts:contract-drafting`.
- **Prosessit** — perehdytys, lähtötarkistuslista (laitteet, pääsyt,
  muistutus velvoitteista), tietoturva.
- **Strategiavalinta** — liikesalaisuus vs. patentointi: patentti
  julkistaa keksinnön määräaikaista yksinoikeutta vastaan;
  liikesalaisuus voi olla ikuinen mutta ei suojaa itsenäiseltä
  keksimiseltä eikä käänteismallinnukselta (sallittu hankintatapa —
  tarkista rajat lähteestä). Ennen julkistamista: ks. AGENTS.md
  *Salassapito ennen hakemista*.

## Loukkaustilanne

1. **Jäsennä teko** — oikeudeton **hankkiminen**, **käyttäminen** vai
   **ilmaiseminen**; myös loukkaavien tuotteiden valmistus ja myynti.
   Sallitut hankintatavat (itsenäinen kehitys, käänteismallinnus,
   työntekijöiden tiedonsaanti laissa säädetyissä rajoissa) lähteestä.
2. **Turvaa todisteet** — lokit, asiakirjat, laitteet; toimi nopeasti
   mutta laillisesti (työntekijän sähköpostin tutkimisella on
   tietosuojarajat → `data-protection`).
3. **Keinot** — kielto ja korjaavat toimenpiteet, **käyttökorvaus ja
   vahingonkorvaus**, turvaamistoimet; markkinaoikeus
   riita-asioissa (toimivalta ja määräajat lähteestä); rikosilmoitus
   vakavissa tapauksissa.
4. **Whistleblower-poikkeus** — liikesalaisuuden ilmaiseminen voi olla
   sallittua väärinkäytöksen paljastamiseksi — tarkista edellytykset
   lähteestä ennen kuin arvioit ilmoittajan vastuuta (ks. myös
   ilmoittajansuojelusääntely).

## Lähtevä työntekijä -tilanne

Yleisin käytännön tapaus — käy läpi molemmista näkökulmista:

- **Työnantaja**: mitä tietoa henkilöllä oli, mitkä sopimusehdot
  sitovat (salassapito, kilpailukielto → `employment-law:employment-contract`),
  lähtötarkistus tehty?, todisteet ennen syytöksiä.
- **Työntekijä/uusi työnantaja**: ammattitaito vs. liikesalaisuus
  -rajanveto, mitä saa käyttää, riskien minimointi uudessa roolissa
  (ei vanhan työnantajan aineistoa järjestelmiin).

## Mitä tämä skill EI tee

- **Ei vahvista, että tieto on liikesalaisuus** — edellytykset arvioi
  viime kädessä tuomioistuin; skill dokumentoi arvion perusteet.
- **Ei avusta toisen liikesalaisuuden hankkimisessa tai käytössä** —
  kilpailijatiedon hankinnan on pysyttävä laillisissa lähteissä.
- **Ei tutki työntekijän viestintää** eikä ohita tietosuojarajoja
  todisteiden hankinnassa.
- **Ei vahvista määräaikoja tai korvaustasoja muistista** — lähteestä
  tai `[tarkista]`.
- **Ei korvaa rikosprosessia** — vakavat teot poliisille; skill
  jäsentää siviilioikeudelliset keinot.

## Jatka tästä

- NDA:n tai salassapitoehdon laatiminen → /sopimukset:sopimuksen-laatiminen
- Kilpailukielto ja työsuhteen ehdot → /tyooikeus:tyosopimus
- Säännöksen tai oikeuskäytännön tarkistus → /juristi:oikeustutkimus
- Patentoitavissa oleva keksintö → /immateriaalioikeus:tavaramerkki-ja-toiminimi (suojamuototaulukko) ja patenttiasiamies
- Henkilötiedot tutkinnassa → /tietosuoja:tietosuoja-arviointi
