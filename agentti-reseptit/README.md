# Agenttireseptit – taustalla ajettavat agentit suomalaiseen oikeustyöhön

Nämä ovat **keittokirjoja, eivät valmiita tuotteita.** Jokainen resepti on
lähtökohta taustalla ajettavalle (headless/scheduled) agentille, joka nojaa
samaan lähdekuriin ja samoihin suojauksiin kuin tämän repon plugarit. Sovita
resepti omaan dokumenttienhallintaasi, kalenteriisi, ilmoituskanavaasi ja
tarkistusrytmiisi – ilman tätä sovitusta reseptit eivät toimi, ja se on
tarkoitus.

| Agentti | Mitä valvoo | Leaf-agentit |
|---|---|---|
| [`maaraaika-vahti`](maaraaika-vahti/) | Asiakirja-/kalenterilähde määräajoista (valitusaika, kanteen vanhentuminen, YT-ajat, GDPR-vastausaika) | aineisto-lukija · maaraaika-laskija · **varoitus-kirjoittaja** |
| [`ennakkopaatos-vahti`](ennakkopaatos-vahti/) | Uudet KKO/KHO/MAO/TT/VakO-ratkaisut määritellyistä aiheista (oik.ai/Finlex-MCP) | ratkaisu-hakija · relevanssi-arvioija · **kooste-kirjoittaja** |
| [`saados-vahti`](saados-vahti/) | Nimettyjen säädösten muutokset, voimaantulot ja vireillä olevat HE:t | saados-tarkkailija · vaikutus-analysoija · **raportti-kirjoittaja** |
| [`viittausauditointi`](viittausauditointi/) | Tämän repon omat säädös- ja ratkaisuviittaukset (kumoutumiset, tunnuskollisiot, paikkamerkkikuri) — neljännesvuosittain | inventaarioskripti · lahdetarkastaja-erät · ihminen korjaa |

**Lihavoidulla** leaf-agentilla on ainoana `Write`-oikeus.

## Tietoturvamalli – oikeudelliset asiakirjat ovat epäluotettavaa syötettä

Asiakirja voi sisältää tekstiä, joka yrittää ohjata mallia ("ohita aiemmat
ohjeet…"). Siksi jokainen resepti jakaa työn **kolmeen tasoon**, joilla on
erilliset oikeudet:

1. **Lukija (reader)** koskee epäluotettavia asiakirjoja, ja sillä on vain
   `Read`/`Grep` – ei MCP:tä, ei `Write`-oikeutta, ei verkkoa. Se palauttaa
   pituusrajoitettua, jäsenneltyä JSONia. Asiakirjaan upotettu ohje on **dataa,
   ei käskyä.**
2. **Analysoija (analyzer)** saa lukijan JSONin, soveltaa käyttäjän
   konfiguraation sääntöjä ja sillä voi olla MCP-**lukuoikeus** tarkistukseen
   (oik.ai/Finlex). Ei `Write`-oikeutta.
3. **Kirjoittaja (writer)** tuottaa lopullisen tulosteen ja on **ainoa**
   taso, jolla on `Write`. Se ei koskaan näe raakoja asiakirjoja.

Orkestroija ei kirjoita eikä lue raakoja asiakirjoja – se vain välittää
viestejä tasojen välillä. Nimetyt agentit eivät kutsu toisiaan suoraan, vaan
lähettävät `handoff`-pyynnön, jonka tapahtumaväylä reitittää.

## Vastuu ja salassapito

Kaikki näiden agenttien tuottama on **tarkistettava luonnos** – ei
oikeudellista neuvontaa. Agentti valvoo, poimii ja luonnostelee; **ihminen
tarkistaa, varmistaa ja päättää.** Määräaikalaskelmat ovat johtolankoja, eivät
sitovia päivämääriä – ks. kunkin reseptin "Mitä tämä EI tee".

Mandanttitietojen käsittelyssä noudata
[`../references/vastuu-ja-tietoturva.md`](../references/vastuu-ja-tietoturva.md):
henkilötietojen käsittelysopimus (GDPR 28 art), anonymisointi ennen analyysiä
ja salassapidon arviointi ennen kuin aineistoa viedään mihinkään työkaluun.

## Mitä saat ja mitä et

- **Saat:** toimivan manifestirakenteen, järkevät tietoturvatasot, lähdekuriin
  nojaavat ohjeet ja esimerkin ohjaustapahtumista – sovitettuna suomalaisiin
  lähteisiin (Finlex, oik.ai, KKO/KHO) ja suomalaiseen prosessioikeuteen.
- **Et saa:** tuotantovalmista agenttia. Liitä konnektorit omiin järjestelmiisi,
  määritä rytmi, konfiguroi ilmoitukset ja tee oma evaluaatio ennen kuin luotat
  tulosteeseen.
- **Et missään tapauksessa saa:** juristin korvaajaa.
