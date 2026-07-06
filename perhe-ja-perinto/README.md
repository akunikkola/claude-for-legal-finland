# Perhe- ja perintöoikeus

Suomen perhe- ja perintöoikeus arjen elämäntilanteissa: avioliiton
varallisuussuhteet ja ositus, avopuolison asema, lapsen huolto, asuminen,
tapaaminen ja elatus, perimys ja testamentti sekä edunvalvonta ja siihen
varautuminen.

> **Luonnokset ja laskelmat ovat tarkistettavia – ei oikeudellista neuvontaa.**
> Lapsen etu ratkaisee lasta koskevat asiat, ja turvallisuushuoli käy
> järjestelyjen edelle. Muotovaatimukset, määräajat ja verot haetaan aina
> lähteestä, eikä molempia osapuolia voi edustaa ristiriidassa. Perintö- ja
> lahjavero kuuluvat `verotus`-plugariin. Katso [`CLAUDE.md`](CLAUDE.md).

## Skillit

| Skill | Mitä tekee |
|---|---|
| **avioliitto-ja-ositus** | Avioehtosopimus, ositus ja omaisuuden erottelu avioerossa ja kuolintapauksessa (avioliittolaki 234/1929), avio-osan ja tasingon laskenta, osituksen sovittelu sekä avopuolisoiden yhteistalouden purku ja hyvitys (26/2011). Sisältää perhe- ja perintöoikeuden perusteiden referenssin. |
| **lapsen-asema-ja-elatus** | Lapsen huolto, asuminen, vuoroasuminen ja tapaaminen lapsen edun pohjalta (361/1983), elatusavun arviointi OM:n ohjeella ja elatussopimus (704/1975) sekä vanhemmuuden vahvistaminen (vanhemmuuslaki 775/2022). Turvallisuushuoli käy järjestelyjen edelle. |
| **perinto-ja-testamentti** | Perimysjärjestys, lesken asema, testamentin laatiminen ja tulkinta, rintaperillisen lakiosa, perunkirjoitus, pesänselvitys ja perinnönjako (perintökaari 40/1965). Sisältää perintökaaren perusteiden referenssin. |
| **edunvalvonta-ja-edunvalvontavaltuutus** | Ennakoiva edunvalvontavaltuutus (648/2007) ja käytössä oleva edunvalvonta (holhoustoimilaki 442/1999): tarpeen arviointi, edunvalvojan tehtävät, luvanvaraiset toimet, tilivelvollisuus ja eturistiriidan edellyttämä edunvalvojan sijainen. |

## Perustana varmistetut säädökset

Lähteestä (Finlex) varmistettu: **avioliittolaki (234/1929)**, **laki
avopuolisoiden yhteistalouden purkamisesta (26/2011)**, **laki lapsen huollosta
ja tapaamisoikeudesta (361/1983)**, **laki lapsen elatuksesta (704/1975)**,
**vanhemmuuslaki (775/2022)** — kumosi isyyslain (11/2015) ja äitiyslain
(253/2018) 1.1.2023 alkaen —, **perintökaari (40/1965)**,
**laki holhoustoimesta (442/1999)** ja **laki edunvalvontavaltuutuksesta
(648/2007)**. Pykälien sanamuoto, määräajat ja lakiosan laskenta tarkistetaan
käytössä `juristi:oikeustutkimus`-skillillä.

## Liittyy

- **`verotus`-plugari** – perintö-, lahja- ja varainsiirtovero lasketaan siellä,
  ei tässä.
- **`kiinteistot-ja-asuminen`-plugari** – asunnon ja kiinteistön siirrot
  osituksessa ja perinnönjaossa.
- **`riidanratkaisu`-plugari** – huolto-, elatus-, ositus- ja jakoriidat sekä
  testamentin moite tuomioistuimessa.
- **`juristi`-plugari** – `oikeustutkimus` (KKO:n käytäntö) ja `toimeksianto`.

## Asennus

```
/plugin marketplace add akunikkola/claude-for-legal-finland
/plugin install perhe-ja-perinto@claude-for-legal-finland
```

oik.ai-konnektori: katso juuren [QUICKSTART.md](../QUICKSTART.md).
