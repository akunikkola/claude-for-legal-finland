# viittausauditointi — repon viittausten adversariaalinen määräaikaistarkistus

Tarkistaa **tämän repon** kaikki säädösnumero- ja ratkaisutunnusviittaukset
lähteestä: vastaako numero väitettyä lakia, onko laki yhä voimassa, ovatko
esimerkkien tunnukset paikkamerkkejä vai aitoja — ja jos aitoja, väittävätkö
ne ratkaisusta jotain, mitä ei ole tarkistettu.

> **Tämä on keittokirja, ei valmis tuote.** Ks. [`../README.md`](../README.md).
> Toisin kuin muut reseptit, tämä auditoi repon omaa sisältöä (luotettua
> aineistoa), joten kolmitasoista lukija-jakoa ei tarvita — mutta
> tarkastaja-agenttien adversariaalinen oletus on sama: **viittaus on väärin,
> kunnes lähde osoittaa toisin.**

## Miksi säädösvahti ei riitä

[`saados-vahti`](../saados-vahti/) ja CI:n kuukausiajo
(`.github/workflows/saadosvahti.yml`) vertaavat rekisterin säädösten
**nimiä** Finlexiin. Se huomaa nimenmuutoksen (MRL → alueidenkäyttölaki),
mutta **ei kumoamista**: kumotun lain nimi ei muutu Finlexissä. Heinäkuun
2026 auditointi löysi juuri tällaisen — isyyslaki (11/2015) ja äitiyslaki
(253/2018) esitettiin voimassa olevina, vaikka vanhemmuuslaki (775/2022)
kumosi ne 1.1.2023, eikä nimivahti ollut hälyttänyt. Lisäksi löytyi
kaksi aidon HE-tunnuksen käyttöä väärällä aiheella esimerkkiteksteissä ja
väärä muutossäädösnumero — mitään näistä ei voi havaita nimivertailulla.

## Prosessi

1. **Inventaario** (deterministinen skripti, ei mallia):

   ```sh
   node scripts/viittausinventaario.mjs 7 /tmp/audit
   ```

   Poimii kaikki `NNN/VVVV`-viittaukset konteksteineen ja jakaa ne
   erätiedostoihin. Ratkaisutunnukset (KKO:VVVV:NN ym.) inventoidaan
   erikseen: `grep -rnoE '(KKO|KHO|MAO|TT|VakO)[: ][0-9]{4}[:-][0-9]+' --include='*.md' .`

2. **Tarkastus** — yksi [`lahdetarkastaja`](../../juristi/agents/lahdetarkastaja.md)-agentti
   erää kohden, rinnakkain. Jokaiselle numerolle: (a) päättele konteksteista,
   miksi laiksi numeroa väitetään; (b) hae Finlexistä ja vertaa; (c) tarkista
   kumoamis-/korvaustilanne; (d) palauta verdikti: `OK` / `VAARA_NIMI` /
   `KUMOTTU` / `EI_LOYDY` / `EPAVARMA` perusteluineen. Agentti ei saa
   hyväksyä viittausta muistinvaraisesti — jokainen numero haetaan.

3. **Ratkaisutunnukset** — oma tarkastaja, joka luokittelee jokaisen
   esiintymän: muotoesimerkki vai sisältöväite; onko paikkamerkkisääntöä
   ([`references/viittaustyyli.md`](../../references/viittaustyyli.md),
   jakso 4) noudatettu; jos tunnus on aito ja siihen liitetään sisältöväite,
   väite tarkistetaan ratkaisusta.

4. **Korjaukset** — `EPAVARMA` ei ole korjausperuste yksinään: verifioi
   epävarmat toisella riippumattomalla haulla tai ihmisellä ennen muutosta.
   Muista regeneroida SKILLS.md ja Codex-manifestit, jos frontmatter-kuvaus
   muuttuu (`bash scripts/check-generated.sh`), ja päivittää
   `seuranta/saadokset.json`, jos varmistettujen säädösten joukko muuttuu.

## Rytmi

- **Neljännesvuosittain** sekä ennen isoa julkaisua/markkinointia.
- Aina kun säädösvahti hälyttää nimenmuutoksesta (kertoo laajemmasta
  uudistuksesta, jonka yhteydessä muutakin on voinut muuttua).
- Uuden plugarin lisäyksen jälkeen ennen mergeä.

## Tunnetut rajoitteet

- Finlexin uusi käyttöliittymä renderöityy JavaScriptillä — otsikkotiedot
  näkyvät hauille, mutta kumoamissäännösten sanamuoto ei aina. Kun
  oik.ai-/laki.ai-MCP on käytettävissä, käytä sitä ensisijaisena lähteenä;
  ilman sitä osa verdikteistä jää tasolle `EPAVARMA` ja vaatii ihmisen.
- Pykäläkohtaisia sisältöväitteitä (mitä 7 § sanoo) auditointi ei kata
  numerotasolla — ne kuuluvat skillien omaan lähdekuriin.

## Vertailukohta

Saksalaisen sisarprojektin auditointi 3 228 ratkaisutunnuksesta: ~58 %
väärään asiaan viittaavia, löytymättömiä tai varmistamattomia. Tämän repon
heinäkuun 2026 auditointi (137 säädösnumeroa + 6 ratkaisutunnusta):
4 korjattavaa, 0 keksittyä tunnusta — ero syntyy lähdekurista, ja tämä
resepti pitää sen yllä.
