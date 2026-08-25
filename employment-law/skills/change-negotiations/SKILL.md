---
name: change-negotiations
description: >
  Yhteistoiminta ja muutosneuvottelut Suomen yhteistoimintalain (1333/2021) mukaan:
  jatkuva vuoropuhelu, muutosneuvottelujen edellytykset ja kulku, neuvotteluesitys,
  määräajat ja soveltamisala. Käytä tätä skilliä, kun käyttäjä suunnittelee tai arvioi
  muutosneuvotteluja, henkilöstövaikutuksia, lomautuksia tai kollektiiviperusteisia
  irtisanomisia, kysyy YT-velvoitteista, neuvotteluvelvollisuudesta tai
  yhteistoimintamenettelystä. Triggeröi kun mainitaan yhteistoiminta, YT-neuvottelut,
  muutosneuvottelut, jatkuva vuoropuhelu tai neuvotteluesitys.
---

# Yhteistoiminta ja muutosneuvottelut (yhteistoimintalaki 1333/2021)

Tämä skill auttaa hahmottamaan yhteistoimintalain (1333/2021) velvoitteet. Laki **korvasi
vanhan yhteistoimintalain (334/2007)** ja toi mm. **jatkuvan vuoropuhelun** sekä uudisti
muutosneuvottelut. Älä viittaa kumottuun lakiin (334/2007) voimassa olevana.

> **Vastuuvapaus:** tämä on tarkistettava arvio — ei oikeudellista neuvontaa. Menettelyn
> oikeellisuus ja määräajat on vahvistettava lähteestä ja tarvittaessa työoikeusjuristilta.
> Katso `employment-law/AGENTS.md`. Perusteet: `../employment-contract/references/employment-law-fundamentals.md`.

## Output language

Drafts are produced in **English by default**. If the user asks for Finnish, produce Finnish.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

## Tarkista laki lähteestä — määräajat ja kokorajat ovat kiinteitä
Hae yhteistoimintalain (1333/2021) voimassa olevat säännökset **`legal-core:legal-research`-
skillillä** (soveltamisala/kokoraja, neuvotteluesityksen sisältö ja antoaika,
neuvotteluajat, henkilöstön edustus). **Älä esitä kokorajaa, määräaikoja tai neuvotteluaikoja
muistista** — hae ne ja merkitse lähde. Jos et voi tarkistaa, merkitse `[tarkista
yhteistoimintalaista]`.

## Kaksi pääkokonaisuutta

### 1. Jatkuva vuoropuhelu
Säännöllinen työnantajan ja henkilöstön välinen vuoropuhelu yrityksen tilasta, henkilöstön
tilanteesta, osaamistarpeista ja työhyvinvoinnista sekä työyhteisön kehittämisestä. Selvitä
käyttäjältä, onko vuoropuhelu järjestetty laissa edellytetyllä tavalla ja onko
**työyhteisön kehittämissuunnitelma** ajan tasalla.

### 2. Muutosneuvottelut
Käytävä ennen kuin työnantaja päättää toimenpiteistä, jotka voivat johtaa
- **työvoiman vähentämiseen** (kollektiiviperusteinen irtisanominen, lomautus, osa-aikaistaminen), tai
- olennaisiin **muutoksiin** työtehtävissä, työajoissa tai muissa olennaisissa ehdoissa.

Keskeiset vaiheet (tarkista täsmälliset sisällöt ja määräajat lähteestä):
1. **Neuvotteluesitys** kirjallisesti ennen neuvottelujen alkua, laissa säädetyssä ajassa, sisältäen vaaditut tiedot (peruste, kohde, henkilöstömäärät, neuvotteluaika).
2. **Tietojen antaminen** henkilöstön edustajille.
3. **Neuvottelut** laissa säädetyn vähimmäisajan ja -sisällön mukaisesti; käsiteltävä myös vaihtoehtoja vähentämiselle.
4. **Selvitys** neuvottelujen tuloksista ja päätöksistä.
Vasta tämän jälkeen työnantaja voi tehdä päätöksen vähentämisestä → ks. `termination-of-employment`-skill.

## Työnkulku
1. Selvitä: yrityksen henkilöstömäärä (soveltuuko laki?), suunniteltu toimenpide ja sen henkilöstövaikutukset, aikataulu, henkilöstön edustus.
2. Hae sovellettavat säännökset ja määräajat `legal-research`-skillillä.
3. Tuota **menettelytarkistuslista** ja aikajana (neuvotteluesitys → tiedot → neuvottelut → selvitys → päätös), merkiten kunkin vaiheen lakiperusteen.
4. Nosta riskit: liian aikainen päätös (ennen neuvotteluja) = olennainen virhe → korvausvastuu; puuttuva tai myöhässä annettu neuvotteluesitys; riittämätön neuvotteluaika. Merkitse `[varmista — työoikeusjuristin arvioitava]`.

## Raportoi
Tuota tarkistuslista ja aikajana lähdemerkinnöin. Korosta, että muutosneuvottelut on
**aidosti käytävä ennen päätöstä** — neuvottelu ei ole muodollisuus. Liitä viittaus
`termination-of-employment`-skilliin, kun neuvottelut johtavat irtisanomisiin.

## Mitä tämä skill EI tee
- **Ei korvaa työnantajan päätöstä eikä työoikeusjuristin arviota.** Tuottaa tarkistettavan menettelyarvion ja aikajanan, ei lopullista kantaa menettelyn laillisuudesta.
- **Ei vahvista soveltamisalan kokorajaa, neuvotteluesityksen antoaikaa, neuvotteluaikoja eikä muita määräaikoja muistista** — ne haetaan voimassa olevasta yhteistoimintalaista (1333/2021). Älä viittaa kumottuun lakiin (334/2007) voimassa olevana.
- **Ei tee päätöstä työvoiman vähentämisestä eikä laadi itse irtisanomisia, lomautuksia tai osa-aikaistamisia** — vain neuvotteluvelvoitteen menettelyn.
- **Ei arvioi yksittäisen työntekijän irtisanomisperustetta** (kollektiivi- tai henkilöperuste) — se kuuluu päättämisskilliin.
- **Ei laadi työsopimuksia eikä niiden ehtoja.**
- **Vain Suomen työoikeus ja yhteistoimintalaki** — ei muiden maiden YT- tai informaatio-/konsultaatiovelvoitteita.

## Jatka tästä
- Kun neuvottelut johtavat kollektiiviperusteiseen irtisanomiseen, lomautukseen tai osa-aikaistamiseen → /tyooikeus:tyosuhteen-paattaminen
- Henkilöstövaikutus kohdistuu työsopimusten ehtoihin (olennainen muutos) → /tyooikeus:tyosopimus
- Yhteistoimintalain säännösten, määräaikojen tai oikeuskäytännön tarkistus lähteestä → /juristi:oikeustutkimus
- Neuvotteluesityksen tai selvityksen laaduntarkistus ennen lähettämistä → /juristi:asiakirjan-tarkistus
