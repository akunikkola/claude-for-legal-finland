---
name: anti-money-laundering
description: >
  Rahanpesun ja terrorismin rahoittamisen estäminen Suomessa (laki
  444/2017). Käytä tätä skilliä, kun organisaatio arvioi, onko se
  ilmoitusvelvollinen, rakentaa tai päivittää AML-compliance-ohjelmaa
  (riskiarvio, asiakkaan tunteminen, monitorointi), selvittää
  tosiasiallisia edunsaajia, käsittelee epäilyttävää liiketoimea tai
  ilmoitusta selvittelykeskukselle, tai valmistautuu valvojan
  (Finanssivalvonta, aluehallinnon AML-valvoja) tarkastukseen. Triggeröi
  sanoista: rahanpesu, AML, KYC, asiakkaan tunteminen, tosiasiallinen
  edunsaaja, PEP, poliittisesti vaikutusvaltainen, epäilyttävä liiketoimi,
  selvittelykeskus, goAML, tehostettu tuntemisvelvollisuus, pakotteet.
---

# Rahanpesun estäminen — velvoitteet ja compliance

Tämä skill jäsentää rahanpesulain (444/2017) velvoitteet ja rakentaa
ilmoitusvelvollisen compliance-ohjelman. Perusteet:
`../financing-and-collateral/references/finance-fundamentals.md`.

> **Vastuuvapaus:** ohjelma- ja prosessiluonnokset ovat tarkistettavia —
> ei oikeudellista neuvontaa. **Rahanpesun toteuttamista ei avusteta
> missään muodossa** — ja huomaa, että myös oikeudelliset
> palveluntarjoajat ovat eräissä toimeksiannoissa itse
> ilmoitusvelvollisia. Katso `banking-and-finance/AGENTS.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki ja EU-paketti lähteestä

Hae 444/2017:n säännökset **`legal-core:legal-research`-skillillä**. EU:n
AML-sääntely on uudistumassa asetuspohjaiseksi (AML-paketti, AMLA) —
**tarkista voimassa oleva kerros lähteestä** ennen kuin kuvaat
velvoitteen; kansallinen laki muuttuu paketin myötä.

## Vaihe 1: Soveltamisala — onko organisaatio ilmoitusvelvollinen?

Käy lain soveltamisalaluettelo läpi lähteestä: luotto- ja
rahoituslaitokset, maksupalvelut, virtuaalivaluuttatoimijat,
tilintarkastajat, kirjanpitäjät, veroneuvojat, **oikeudellisia
palveluja tarjoavat** (tietyt toimeksiannot: kiinteistö- ja
liiketoimintakaupat, varojen hoito, yhtiöiden perustaminen),
kiinteistönvälittäjät, taidekauppa ym. — rajaukset ja kynnykset
lähteestä. Kirjaa, **miltä osin** toiminta kuuluu soveltamisalaan.

## Vaihe 2: Riskiarvio

Lakisääteinen **oma riskiarvio** on ohjelman perusta:

- Asiakasriskit (PEP, ulkomaiset kytkennät, käteisvaltaisuus,
  monimutkaiset rakenteet), tuote- ja palveluriskit, maantieteelliset
  riskit (korkean riskin valtiot — luettelo lähteestä), jakelukanavat.
- Dokumentoi metodologia ja päivitysrytmi; johda toimenpiteet
  riskeistä (riskiperusteinen lähestymistapa).

## Vaihe 3: Asiakkaan tunteminen (KYC/CDD)

1. **Tunnistaminen ja todentaminen** — luonnollinen henkilö ja yhteisö;
   etätunnistamisen vaatimukset lähteestä.
2. **Tosiasialliset edunsaajat** — omistus- ja määräysvaltaketju;
   edunsaajarekisterin tiedot (PRH) eivät yksin riitä — velvollisuus
   omaan selvitykseen; ristiriidoista ilmoitusvelvollisuus
   rekisteriin.
3. **PEP-asema** — poliittisesti vaikutusvaltaiset henkilöt,
   perheenjäsenet ja yhtiökumppanit → tehostettu menettely.
4. **Tehostettu vs. yksinkertaistettu tunteminen** — milloin kumpikin
   sallittu/pakollinen (lähteestä); kirjeenvaihtajasuhteet,
   korkean riskin valtiot.
5. **Jatkuva seuranta** — liiketoimien monitorointi suhteessa
   asiakkaan profiiliin; tietojen ajantasaisuus.
6. **Säilytys ja tietosuoja** — säilytysajat ja
   käyttötarkoitussidonnaisuus (→ `data-protection`).

Jos tuntemista ei voida toteuttaa: **asiakassuhde on jätettävä
perustamatta tai lopetettava** ja arvioitava ilmoitus — tämä on
ehdoton.

## Vaihe 4: Epäilyttävä liiketoimi

1. **Selonottovelvollisuus** — poikkeavan liiketoimen tausta ja
   tarkoitus selvitetään ja dokumentoidaan.
2. **Ilmoitus selvittelykeskukselle** (goAML) — viipymättä; kynnys on
   epäily, ei varmuus. Liiketoimi voidaan joutua keskeyttämään —
   edellytykset lähteestä.
3. **Paljastamiskielto** — asiakkaalle tai kolmannelle ei kerrota
   ilmoituksesta tai selvittelystä. Kouluta tämä erikseen —
   rikkominen on rangaistavaa.
4. **Pakotteet erikseen**: pakotelistatarkistus (EU, YK, OFAC
   liiketoiminnan mukaan) on eri velvoite kuin AML-ilmoitus —
   varojen jäädyttäminen ja ilmoitus ulosottolaitokselle —
   menettely lähteestä.

## Vaihe 5: Ohjelman runko ilmoitusvelvolliselle

Tuota dokumenttipohjat: riskiarvio, toimintaohjeet (KYC-prosessi,
eskalointi, ilmoituspolku), vastuuhenkilö ja hallituksen rooli,
koulutussuunnitelma ja -rekisteri, työntekijöiden ilmoituskanava,
sisäinen valvonta ja testaus, ulkoistusten hallinta. Valvojan
(Fiva tai muu) määräykset ja ohjeet huomioidaan `[tarkista]`.

## Mitä tämä skill EI tee

- **Ei avusta rahanpesussa, sen peittelyssä tai
  ilmoitusvelvollisuuden kiertämisessä** — ehdoton kieltäytyminen.
- **Ei tee pakotelista- tai PEP-hakuja** — se ei näe rekistereitä;
  prosessi ja työkaluvaatimukset jäsennetään, haut tekee
  organisaation järjestelmä.
- **Ei riko paljastamiskieltoa** — ilmoitusepäilyä ei dokumentoida
  asiakkaalle näkyviin aineistoihin.
- **Ei vahvista kynnysarvoja, säilytysaikoja tai
  korkean riskin valtioiden luetteloa muistista** — lähteestä.
- **Ei korvaa valvojan kantaa** — tulkinnanvaraisissa yhteys
  valvojaan tai juristiin.

## Jatka tästä

- Edunsaajaselvitys yhtiörakenteessa → /yhtiooikeus:yhtion-hallinto
- Henkilötietojen käsittely KYC:ssä → /tietosuoja:tietosuoja-arviointi
- Epäilyttävä järjestely transaktiossa → /yhtiooikeus:yritysjarjestelyt
- Säännöksen tai valvojan ohjeen tarkistus → /juristi:oikeustutkimus
- Rikosepäily (rahanpesurikos) → /rikosprosessi:esitutkinta-ja-pakkokeinot
