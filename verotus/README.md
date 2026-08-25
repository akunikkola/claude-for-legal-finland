# Verotus

Suomen verotus oikeudellisen ja taloushallinnon ammattilaisen työhön:
verotusmenettely ja muutoksenhaku, yritysverotus yritysjärjestelyineen sekä
arvonlisäverotus.

> **Analyysit ja luonnokset ovat tarkistettavia – ei veroneuvontaa.**
> Verokannat, euromäärät ja määräajat muuttuvat vuosittain, joten ne haetaan aina
> lähteestä eikä muistista. Aidosti tulkinnanvaraisessa asiassa oikea väline on
> sitova ennakkoratkaisu. Katso [`AGENTS.md`](AGENTS.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **verotusmenettely-ja-muutoksenhaku** | Verotusmenettely (VML 1558/1995): ilmoittamisvelvollisuus, veronkorotus, oikaisuvaatimus verotuksen oikaisulautakunnalle, valitus hallinto-oikeuteen ja KHO:hon sekä ennakkoratkaisut (Verohallinto/KVL). Sisältää verotuksen perusteiden referenssin. |
| **yritysverotus** | Elinkeinoverotus (EVL 360/1968): tulon veronalaisuus ja menon vähennyskelpoisuus, konserniavustus (825/1986), yritysjärjestelyjen veroneutraalisuus (EVL 52–52 a §), peitelty osinko (VML 29 §), siirtohinnoittelu (VML 31 §) ja veron kiertämisen riskiarvio (VML 28 §). |
| **arvonlisaverotus** | Arvonlisäverotus (AVL 1501/1993): verovelvollisuus, vähennysoikeus, käännetty verovelvollisuus, kansainvälisen kaupan perustilanteet ja kiinteistöjen erityiskysymykset – verokannat aina lähteestä. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **laki verotusmenettelystä (1558/1995)** –
pykäläotsikot 28 § veron kiertäminen, 29 § peitelty osinko, 31 §
siirtohinnoitteluoikaisu, 32 § veronkorotus, 64 § oikaisuvaatimuksen määräaika –
**laki elinkeinotulon verottamisesta (360/1968)** ml. yritysjärjestelysäännökset
(52–52 a §), **arvonlisäverolaki (1501/1993)**, **tuloverolaki (1535/1992)**,
**laki oma-aloitteisten verojen verotusmenettelystä (768/2016)**,
**varainsiirtoverolaki (931/1996)**, **perintö- ja lahjaverolaki (378/1940)**,
**ennakkoperintälaki (1118/1996)**, **laki konserniavustuksesta verotuksessa
(825/1986)** ja **laki Verohallinnosta (503/2010)**. Pykälätason sisällöt ja
vuosittaiset arvot tarkistetaan käytössä `juristi:oikeustutkimus`-skillillä ja
vero.fi:stä.

## Liittyy

- **`juristi`-plugari** – `oikeustutkimus` (KHO:n vero-oikeuskäytäntö) ja
  `asiakirjan-tarkistus`.
- **`yhtiooikeus`-plugari** – varojenjaon yhtiöoikeudellinen laillisuus ja
  yritysjärjestelyjen yhtiöoikeudellinen menettely.
- **`hallinto-oikeus`-plugari** – verovalitus on hallintoprosessia (808/2019).
- **`insolvenssi`-plugari** – verovelat maksukyvyttömyydessä.

## Asennus

```
/plugin marketplace add ragmha/agent-skills-for-finnish-law
/plugin install verotus@agent-skills-for-finnish-law
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
