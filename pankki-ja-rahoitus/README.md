# Pankki ja rahoitus

Suomen pankki- ja rahoitusoikeus yritysten ja niiden neuvonantajien työhön:
rahoitussopimukset ja vakuudet, rahanpesun estäminen sekä
arvopaperimarkkinasääntely.

> **Luonnokset ovat tarkistettavia – ei oikeudellista neuvontaa, ei
> sijoitusneuvontaa.** Rahoitussääntely on EU-vetoista ja muuttuu nopeasti –
> säännökset, korkokatot ja kynnysarvot haetaan aina lähteestä. Sisäpiiritiedon
> väärinkäyttöä tai rahanpesua ei avusteta missään muodossa.
> Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **rahoitus-ja-vakuudet** | Rahoitussopimusten ja vakuuksien jäsennys: velkakirja (622/1947) ja lainaehdot (kovenantit, eräännyttäminen), korko ja viivästyskorko (633/1982), takaus ja vierasvelkapanttaus (361/1999, yksityistakaajan pakottava suoja), pantti-, yrityskiinnitys- ja muut vakuudet sekä vakuuspaketin kokonaisuus. Sisältää rahoitusoikeuden perusteiden referenssin. |
| **rahanpesun-estaminen** | Rahanpesulaki (444/2017): soveltamisala (ml. oikeudelliset palvelut), asiakkaan tuntemis- ja selonottovelvollisuus, tosiasialliset edunsaajat, riskiarvio, epäilyttävän liiketoimen ilmoittaminen ja paljastamiskielto – compliance-ohjelman rakentaminen ilmoitusvelvolliselle. |
| **arvopaperimarkkinat** | Arvopaperimarkkinalaki (746/2012) ja MAR: listayhtiön tiedonantovelvollisuus, sisäpiiritiedon hallinta (julkistaminen, lykkäys, luettelot), johdon liiketoimet, liputus sekä esitesääntelyn ja ostotarjousten perusteet. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **velkakirjalaki (622/1947)**, **laki takauksesta
ja vierasvelkapanttauksesta (361/1999)**, **korkolaki (633/1982)**, **laki
rahanpesun ja terrorismin rahoittamisen estämisestä (444/2017)**,
**arvopaperimarkkinalaki (746/2012)** ja **laki luottolaitostoiminnasta
(610/2014)**. EU-taso (MAR, MiFID II, esiteasetus, AML-paketti) tarkistetaan
käytössä EUR-Lexistä ja Finanssivalvonnan ohjeista.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` ja `toimeksianto`.
- **`sopimukset`-plugari** – rahoitussopimus on sopimus: yleinen mekaniikka ja
  kohtuullistaminen.
- **`yhtiooikeus`-plugari** – rahoituskierrokset, pääomalaina (OYL 12 luku),
  varojenjaon rajat ja yritysjärjestelyjen rahoitus.
- **`insolvenssi`-plugari** – vakuuksien asema konkurssissa ja
  takaisinsaantiriskit.
- **`kiinteistot-ja-asuminen`-plugari** – kiinteistövakuudet (kiinnitys,
  panttikirja).

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install pankki-ja-rahoitus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
