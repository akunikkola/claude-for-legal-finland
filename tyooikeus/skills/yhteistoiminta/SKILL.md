---
name: yhteistoiminta
description: >
  Yhteistoiminta ja muutosneuvottelut Suomen yhteistoimintalain (1333/2021) mukaan:
  jatkuva vuoropuhelu, muutosneuvottelujen edellytykset ja kulku, neuvotteluesitys,
  määräajat ja soveltamisala. Käytä tätä skilliä, kun käyttäjä suunnittelee tai arvioi
  muutosneuvotteluja, henkilöstövaikutuksia, lomautuksia tai kollektiiviperusteisia
  irtisanomisia, kysyy YT-velvoitteista, neuvotteluvelvollisuudesta tai
  yhteistoimintamenettelystä, tai suunnittelee tekoälyn tai muun uuden teknologian
  käyttöönottoa, joka vaikuttaa työntekijöihin. Triggeröi kun mainitaan yhteistoiminta,
  YT-neuvottelut, muutosneuvottelut, jatkuva vuoropuhelu, neuvotteluesitys tai
  henkilöstön kuuleminen tekoälyn käyttöönotossa.
---

# Yhteistoiminta ja muutosneuvottelut (yhteistoimintalaki 1333/2021)

Tämä skill auttaa hahmottamaan yhteistoimintalain (1333/2021) velvoitteet. Laki **korvasi
vanhan yhteistoimintalain (334/2007)** ja toi mm. **jatkuvan vuoropuhelun** sekä uudisti
muutosneuvottelut. Älä viittaa kumottuun lakiin (334/2007) voimassa olevana.

> **Vastuuvapaus:** tämä on tarkistettava arvio — ei oikeudellista neuvontaa. Menettelyn
> oikeellisuus ja määräajat on vahvistettava lähteestä ja tarvittaessa työoikeusjuristilta.
> Katso `tyooikeus/CLAUDE.md`. Perusteet: `../tyosopimus/references/tyooikeus-perusteet.md`.

## Tarkista laki lähteestä — määräajat ja kokorajat ovat kiinteitä
Hae yhteistoimintalain (1333/2021) voimassa olevat säännökset **`juristi:oikeustutkimus`-
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
Vasta tämän jälkeen työnantaja voi tehdä päätöksen vähentämisestä → ks. `tyosuhteen-paattaminen`-skill.

### 3. Tekoälyn ja muun uuden teknologian käyttöönotto
Tekoälyn käyttöönotto työpaikalla voi käynnistää useita rinnakkaisia velvoitteita. Käy ne
läpi erikseen, koska niillä on eri perusteet ja seuraamukset (tarkista pykälät lähteestä):

- **Muutosneuvottelut:** uuden teknologian käyttöönotosta johtuvat, työntekijän asemaan
  vaikuttavat olennaiset muutokset työtehtävissä, työmenetelmissä tai töiden
  järjestelyissä kuuluvat muutosneuvotteluvelvoitteen piiriin (yhteistoimintalaki
  1333/2021, 16 § 2 mom 2 k). Arvioi olennaisuus tapauskohtaisesti `[varmista —
  työoikeusjuristin arvioitava]`.
- **Vuoropuhelu ja tekninen valvonta:** jos tekoäly seuraa, mittaa tai analysoi
  työntekijöitä, kyse voi olla teknisin menetelmin toteutetusta valvonnasta. Sen
  tarkoitus, käyttöönotto ja menetelmät käsitellään vuoropuhelussa (1333/2021 12 § 3 k;
  laki yksityisyyden suojasta työelämässä 759/2004, 21 §). Yhteistoimintalain
  ulkopuolisessa yrityksessä työntekijöille on varattava tilaisuus tulla kuulluiksi ennen
  päätöstä. Menettelyn jälkeen työnantajan on määriteltävä valvonnan tarkoitus ja
  menetelmät ja tiedotettava niistä (759/2004, 21 § 2 mom).
- **Kehittämissuunnitelma:** teknologisen kehityksen vaikutukset työyhteisöön ja
  osaamistarpeisiin huomioidaan työyhteisön kehittämissuunnitelmassa (1333/2021, 9 §).
  Tähän sopii myös tekoälylukutaidon kehittäminen (tekoälyasetus 4 art).
- **Tekoälyasetuksen ilmoitus:** suuririskisen tekoälyjärjestelmän (esim. rekrytointi,
  tehtävien jakaminen, suoriutumisen seuranta) käyttöönottajan on ilmoitettava
  työntekijöiden edustajille ja asianomaisille työntekijöille ennen käyttöönottoa
  (tekoälyasetus 26 art 7 kohta). Laiminlyönti on Suomessa seuraamusmaksuperuste
  (laki 1377/2025, 18 § 5 k). Soveltamisen alkamispäivä tarkistetaan
  `tekoalysaantely`-plugarista.
- **Kielletty käytäntö:** tunteiden tunnistus työpaikalla on lähtökohtaisesti kielletty
  (tekoälyasetus 5 art). Jos suunniteltu järjestelmä päättelee työntekijöiden tunteita,
  pysäytä ja ohjaa luokitteluun.

Tuota tällöin yhdistetty aikajana: vuoropuhelu tai kuuleminen → tarvittaessa
muutosneuvottelut → tekoälyasetuksen ilmoitus → valvonnan määrittely ja tiedottaminen →
käyttöönotto. DVV:n VAHTI-materiaaleissa on tukimateriaali tekoälyjärjestelmän
yhteistoimintakäsittelyyn (kehittajille.suomi.fi), jota voi käyttää vertailukohtana.

## Työnkulku
1. Selvitä: yrityksen henkilöstömäärä (soveltuuko laki?), suunniteltu toimenpide ja sen henkilöstövaikutukset, aikataulu, henkilöstön edustus.
2. Hae sovellettavat säännökset ja määräajat `oikeustutkimus`-skillillä.
3. Tuota **menettelytarkistuslista** ja aikajana (neuvotteluesitys → tiedot → neuvottelut → selvitys → päätös), merkiten kunkin vaiheen lakiperusteen.
4. Nosta riskit: liian aikainen päätös (ennen neuvotteluja) = olennainen virhe → korvausvastuu; puuttuva tai myöhässä annettu neuvotteluesitys; riittämätön neuvotteluaika. Merkitse `[varmista — työoikeusjuristin arvioitava]`.

## Raportoi
Tuota tarkistuslista ja aikajana lähdemerkinnöin. Korosta, että muutosneuvottelut on
**aidosti käytävä ennen päätöstä** — neuvottelu ei ole muodollisuus. Liitä viittaus
`tyosuhteen-paattaminen`-skilliin, kun neuvottelut johtavat irtisanomisiin.

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
- Onko käyttöön otettava tekoäly kielletty tai suuririskinen, ja kuka sitä valvoo → /tekoalysaantely:tekoaly-luokittelu
- Tekoälyn hallintamalli, käyttöönottajan prosessit ja tekoälylukutaito → /tekoalysaantely:tekoaly-hallintamalli
