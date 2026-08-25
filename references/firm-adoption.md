# Käyttöönotto organisaatiossa – päätökset ennen tuotantokäyttöä

Tämä opas on tarkoitettu asianajotoimiston, lakiosaston, viraston tai
kunnan vastuuhenkilölle, joka ottaa kokoelman käyttöön **ammattikäytössä**.
Tekninen asennus: [`QUICKSTART.md`](../QUICKSTART.md). Tämä opas kattaa
sen, mitä pitää päättää ja dokumentoida **ennen** kuin aineistoa viedään
työkaluun. Vastuun ja tietoturvan mekanismit:
[`liability-and-security.md`](liability-and-security.md).

## 1. Päätä, mikä aineisto saa mennä malliin

Tee kirjallinen linjaus kolmeen koriin:

| Kori | Esimerkki | Linjaus |
|---|---|---|
| Vapaa | julkiset säädökset, omat mallipohjat, anonymisoitu aineisto | saa käsitellä |
| Ehdollinen | toimeksiantoaineisto, sopimusluonnokset | vain sopimus- ja anonymisointiedellytysten täytyttyä (kohdat 2–3) |
| Kielletty | erityisen arkaluonteiset tiedot, aineisto jonka käsittelyyn ei ole oikeutta | ei koskaan |

Kirjaa linjaus organisaation ohjeeseen ja
`juristi:kaytantoprofiili`-skillillä käytäntöprofiiliin.

## 2. Sopimus- ja salassapitoperusta kuntoon

- **Käsittelysopimus (GDPR 28 art)** palveluntarjoajan kanssa ennen
  henkilötietojen käsittelyä; tarkista myös tietojen sijainti- ja
  koulutuskäyttöehdot (API/työtilatason asetukset).
- **Asianajosalaisuus ja salassapito**: arvioi, salliiko
  toimeksiantosopimus ja ammattieettiset säännöt aineiston käsittelyn
  valitulla työkalulla – ja dokumentoi arvio. Epäselvässä tilanteessa
  asiakkaan suostumus tai anonymisointi.
- **Julkishallinto**: julkisuuslain salassapitoperusteet ja
  tiedonhallintalain vaatimukset arvioidaan ennen käyttöönottoa.

## 3. Anonymisointi työnkulkuna, ei poikkeuksena

- Asenna **PII Shield** (ks. `data-protection`-plugarin README) ja tee
  siitä oletus: henkilötiedot korvataan paikkamerkeillä paikallisesti
  ennen analyysiä ja palautetaan jälkikäteen. Suomalaisia tunnisteita
  (HETU, Y-tunnus) on tuettu versiosta 2.2.0 alkaen.
- Määritä, milloin anonymisointi on pakollinen (esim. aina
  henkilöasiakkaiden aineistossa) ja kuka sen varmistaa.

## 4. Konnektorit ja vähimmäisoikeudet

- **oik.ai/Finlex-MCP** on lähdekurin selkäranka – ilman sitä skillit
  merkitsevät viittaukset muistinvaraisiksi. Päätä, kenen tilillä ja
  millä laajuudella konnektori on käytössä.
- Paikalliset MCP:t (Adeu, EU AI Act) eivät vaadi tiliä mutta vaativat
  Node.js:n – ota se mukaan työasemavakioon.
- Periaate: **vain tarvittavat konnektorit** – älä kytke työkaluun
  järjestelmiä, joita skillit eivät tarvitse. Agenttiresepteissä
  noudata lukija/analysoija/kirjoittaja-mallia
  ([`../agentti-reseptit/README.md`](../agent-recipes/README.md)).

## 5. Ihmisen tarkistusportti – nimeä se

Jokainen tuotos on tarkistettava luonnos. Tee siitä prosessi:

- **Kuka tarkistaa mitä**: esim. 🔴-luokitellut riskiarviot ja kaiken
  ulos lähtevän tarkistaa aina kokenut juristi; määräaikalaskelmat käy
  läpi vastuuhenkilö kalenteria vasten.
- **Viitteet tarkistetaan lähteestä** ennen lähettämistä –
  `legal-core`-plugarin `lahdetarkastaja`-agentti tekee tästä
  yksivaiheisen: aja se jokaiselle lausunnolle ja kirjelmälle.
- Kirjaa tarkistusketju käytäntöprofiiliin, jolloin skillit
  muistuttavat siitä.

## 6. Räätälöinti ja pilotointi

1. Asenna `legal-core` + 2–3 omaa ydinaluetta – älä kaikkea kerralla.
2. Aja `juristi:kaytantoprofiili` ja kirjaa talon linjaukset.
3. Pilotoi [`esimerkkiaineistoilla`](../examples/) ennen
   oikeaa aineistoa – niissä on arviointikriteerit, joilla näet,
   toimivatko skillit odotetusti omassa ympäristössäsi.
4. Kouluta käyttäjät kahteen asiaan: (a) tuotos on luonnos, (b)
   varmuusmerkinnät (`Varmistettu / Tarkistettava / [mallin laskelma —
   tarkista]`) tarkoittavat sitä mitä lukevat.

## 7. Jatkuva ylläpito

- **Säädösmuutokset**: ota `agent-recipes/statute-watch` seuraamaan
  organisaatiolle keskeisiä säädöksiä ja käytäntöprofiilissa mainittuja
  lakeja.
- **Oikeuskäytäntö**: `agent-recipes/precedent-watch` omille
  aihealueille.
- **Versiopäivitykset**: kokoelman releaset (GitHub) tuovat uusia
  skillejä ja korjauksia – katselmoi muutosloki ennen päivitystä, jos
  olette räätälöineet profiileja.
- **Palaute ja evaluointi**: kerää käyttäjiltä virhehavainnot
  (erityisesti viittausvirheet) ja ilmoita ne repoon – koko kokoelman
  laatu paranee.

## Vastuunjako tiivistettynä

| Mistä vastaa | Kuka |
|---|---|
| Tuotoksen oikeellisuus ja käyttö | tarkistava juristi / asiantuntija |
| Määräaikojen noudattaminen | nimetty vastuuhenkilö, kalenteri |
| Aineiston käsittelyn lainmukaisuus | organisaatio (rekisterinpitäjä) |
| Skillien sisältö ja suojaukset | tämä avoin yhteisöprojekti – ei takuuta; ks. [LICENSE](../LICENSE) |
