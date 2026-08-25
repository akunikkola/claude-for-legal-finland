---
name: environmental-permits-and-supervision
description: >
  Ympäristöluvat, ilmoitukset ja valvonta Suomen ympäristönsuojelulain
  (527/2014) mukaan. Käytä tätä skilliä, kun käyttäjä arvioi toiminnan
  luvanvaraisuutta tai luvan muutostarvetta, valmistelee tai jäsentää
  ympäristölupahakemusta tai vesilupaa, arvioi YVA-menettelyn tarvetta,
  laatii muistutusta tai lausuntoa lupahankkeesta, valittaa
  lupapäätöksestä tai vastaa valvontaviranomaisen (Lupa- ja
  valvontavirasto, kunnan ympäristönsuojeluviranomainen)
  selvityspyyntöön tai hallintopakkoon. Triggeröi sanoista:
  ympäristölupa, vesilupa, luvanvaraisuus, YVA, Natura-arviointi,
  lupamääräys, BAT, muistutus, kuulutus, hallintopakko, uhkasakko,
  Lupa- ja valvontavirasto, LVV, päästöraja.
---

# Ympäristölupa ja valvonta

Tämä skill jäsentää ympäristöllisten lupien ja valvonnan tilanteet.
Perusteet, lupakartta ja viranomaiskenttä 2026:
`references/ymparisto-perusteet.md` — lue se tehtävän alussa.

> **Vastuuvapaus:** luonnokset ovat tarkistettavia — ei oikeudellista
> neuvontaa. Teknis-luonnontieteelliset selvitykset (päästöt, melu,
> luonto) tekee alan konsultti. Katso `ymparisto-ja-kaavoitus/CLAUDE.md`
> — erityisesti uudistuneet säädösnimet ja viranomaiset (LVV 2026).

## Tarkista laki ja viranomainen lähteestä

Hae YSL:n (527/2014) säännökset ja **luvanvaraisuuden laitosluettelo**
**`juristi:oikeustutkimus`-skillillä** — kynnykset muuttuvat. Toimivalta
(LVV vs. kunnan ympäristönsuojeluviranomainen) ja vireillä olevien
asioiden siirtymäsäännökset tarkistetaan lähteestä — älä ohjaa AVI:in
tai ELY-keskukseen, ne lakkasivat 2025 lopussa.

## Vaihe 1: Tarvitseeko toiminta luvan?

1. **Luvanvaraisuus** — YSL:n laitosluettelo ja yleiset perusteet
   (mm. pohjavesialue, naapuruussuhdehaitta) lähteestä; kevyemmät
   menettelyt (yleinen ilmoitusmenettely, rekisteröinti) vaihtoehtoina.
2. **Rinnakkaiset menettelyt** — vesilupa (587/2011), YVA (252/2017:
   hankeluettelo tai tapauskohtainen päätös), Natura-arviointi (9/2023),
   kemikaali- ja muut erityisluvat. Laadi **lupakartta aikajanalle**:
   YVA ennen lupaa, luvat rinnan vai peräkkäin.
3. **Muutostilanne** — toiminnan olennainen muutos voi vaatia luvan
   muuttamisen; arvioi kynnys lähteestä äläkä pilko toimintaa
   lupakynnyksen alle (negatiivirajaus CLAUDE.md:ssä).

## Vaihe 2: Lupahakemuksen jäsennys (toiminnanharjoittajalle)

- **Ennakkoneuvottelu** viranomaisen kanssa isoissa hankkeissa —
  ehdota sitä.
- Hakemuksen ydinosat: toiminnan kuvaus, päästöt ja vaikutukset
  selvityksineen, BAT-tarkastelu, tarkkailusuunnitelma,
  vakuudet (jätteenkäsittely) — sisältövaatimukset lähteestä.
- **Selvitysten aukot** ovat yleisin viivästyssyy: listaa puuttuvat
  selvitykset ja vastuuta ne (konsultti, hakija).
- Varaudu lupamääräyksiin: päästörajat, tarkkailu, raportointi —
  kommentoi luonnosvaiheessa, älä vasta valituksessa.

## Vaihe 3: Osallistuminen (haitankärsijälle, järjestölle, kunnalle)

- **Kuulutusvaihe**: muistutus (asianosainen) tai mielipide (muu) —
  määräpäivä kalenteriin `[mallin laskelma — tarkista]`. Ohitettu
  ikkuna heikentää asemaa olennaisesti.
- Muistutuksen rakenne: kuka ja missä ominaisuudessa, mihin hakemuksen
  kohtaan, konkreettinen haitta tai puute, vaatimus (hylkäys,
  lupamääräys, lisäselvitys).
- **Valitus lupapäätöksestä**: valitusoikeus (asianosaiset, järjestöt,
  viranomaiset — lähteestä), keskitetty muutoksenhaku (Vaasan HaO
  ympäristö- ja vesiasioissa — reitti ja ajat lähteestä). Yleiset opit:
  `hallinto-oikeus:muutoksenhaku`.

## Vaihe 4: Valvonta ja hallintopakko

Kun valvoja puuttuu toimintaan:

1. **Tunnista vaihe**: tarkastus, kehotus, selvityspyyntö,
   hallintopakkomenettely (määräys + uhkasakko/teettämisuhka),
   toiminnan keskeyttäminen, tutkintapyyntö poliisille.
2. **Vastauksen jäsennys**: tosiseikat ja tekninen selvitys erikseen
   oikeudellisesta arviosta; korjaavat toimet ja aikataulu; älä
   kaunistele tarkkailutuloksia — se on itsenäinen rikosriski
   (→ `ymparistovastuut`).
3. **Oikeusturva**: hallintopakkopäätöksen muutoksenhaku, kuuleminen,
   suhteellisuus.

## Mitä tämä skill EI tee

- **Ei tee päästö-, melu- tai luontoselvityksiä** eikä arvioi niiden
  teknistä oikeellisuutta — ne kuuluvat alan asiantuntijoille.
- **Ei vahvista luvanvaraisuuskynnyksiä, määräaikoja tai
  toimivaltarajoja muistista** — lähteestä tai `[tarkista]`.
- **Ei jätä hakemuksia, muistutuksia tai valituksia** — ihminen
  allekirjoittaa ja vastaa määräajoista.
- **Ei avusta lupavelvoitteiden kiertämisessä** — toiminnan pilkkominen,
  päästöjen salaaminen tai tulosten kaunistelu → kieltäydy.
- **Ei ohjaa lakkautettuihin viranomaisiin** (AVI, ELY) — voimassa oleva
  viranomainen tarkistetaan aina.

## Jatka tästä

- Kaava- tai rakentamislupakysymys samassa hankkeessa → /ymparisto-ja-kaavoitus:kaavoitus-ja-rakentaminen
- Pilaantunut maaperä tai vahingonkorvaus → /ymparisto-ja-kaavoitus:ymparistovastuut
- Säännöksen tai KHO/Vaasan HaO -käytännön tarkistus → /juristi:oikeustutkimus
- Valituksen tai muistutuksen määräaikojen skannaus → /juristi:toimeksianto
- Hallintopäätöksen ja -prosessin yleiset opit → /hallinto-oikeus:muutoksenhaku
