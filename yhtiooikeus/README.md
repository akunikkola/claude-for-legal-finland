# Yhtiöoikeus

Suomen yhtiöoikeus yrityksen elinkaaren keskeisiin tilanteisiin: perustaminen ja
hallinto, johdon vastuu ja varojenjako, osakassopimukset sekä yritysjärjestelyt.
Osakeyhtiölain (624/2006) ehdoilla.

> **Luonnokset ja vaiheistukset ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Yhtiöoikeudelliset toimet ja rekisteri-ilmoitukset tekee ihminen; veroseikat
> veroasiantuntijalle. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **yhtion-hallinto** | Osakeyhtiön perustaminen, yhtiökokous, hallituksen ja toimitusjohtajan tehtävät ja vastuu, varojenjaon kaksoistesti (tase + maksukyky) ja vähemmistönsuoja. Sisältää yhtiöoikeuden perusteiden referenssin (OYL:n varmistettu lukukartta). |
| **osakassopimus** | Osakassopimuksen laatiminen ja riskitarkistus: päätöksenteko, luovutusrajoitukset, vesting ja leaver-ehdot, drag/tag, kilpailukielto, deadlock, exit – ja suhde yhtiöjärjestykseen. |
| **yritysjarjestelyt** | Yritysjärjestelyn jäsennys: osakekauppa vs. liiketoimintakauppa, oikeudellinen due diligence, sulautuminen ja jakautuminen (OYL 16–17 luku), suostumukset, yrityskauppavalvonta ja kaupparekisteri-ilmoitukset. |

## Agentit

| Agentti | Mitä tekee |
|---|---|
| **aineistokartoittaja** | Datahuoneen inventoija: luokittelee aineiston DD-alueittain, tuottaa aukkolistan (valmis tietopyyntöpohja) ja punaisten lippujen listan (change of control, riidat, ristiriidat) juristin priorisoitavaksi. Inventaario, ei oikeudellinen arvio. Vain luku. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **osakeyhtiölaki (624/2006)** lukurakenteineen ja
keskeisine periaatteineen (1:5, 1:7, 1:8, 13:2), **kaupparekisterilaki (564/2023)**
(korvasi vanhan 129/1979), **kilpailulaki (948/2011)**, **laki avoimesta yhtiöstä ja
kommandiittiyhtiöstä (389/1988)**, **osuuskuntalaki (421/2013)** ja **tilintarkastuslaki
(1141/2015)**. Pykälätason sisällöt tarkistetaan käytössä `juristi:oikeustutkimus`-skillillä.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (lain ja oikeuskäytännön tarkistus),
  `asiakirjan-tarkistus` ja `toimeksianto`.
- **`sopimukset`-plugari** – yleinen sopimusmekaniikka (osakassopimus ja kauppakirja
  ovat sopimuksia: OikTL 228/1929, kohtuullistaminen 36 §).
- **`tyooikeus`-plugari** – liikkeen luovutus ja henkilöstö yritysjärjestelyissä.
- **`insolvenssi`-plugari** – maksukykytesti ja läheisyys maksukyvyttömyyteen.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install yhtiooikeus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
