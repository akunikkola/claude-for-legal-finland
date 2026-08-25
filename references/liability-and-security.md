# Vastuu, ammattietiikka ja tietoturva

**Versio 1.0 – 4.6.2026.** Tämä on koko `agent-skills-for-finnish-law`
-markkinapaikan jaettu vastuu- ja tietoturvastandardi. Se täydentää
[`references/citation-style.md`](citation-style.md) -lähdestandardia.

> **Lähtökohta: disclaimer ei ole suoja.** Loppuhuomautus "ei oikeudellista
> neuvontaa" ei estä yhtäkään virhettä eikä siirrä yhtäkään vastuuta. Se kertoo
> lukijalle aseman, mutta itse suojan tuottavat **mekanismit**, jotka on
> rakennettu skilleihin ja näihin standardeihin. Tämä tiedosto kokoaa ne ja
> kuvaa, mitä compliancea työkalujen käyttö edellyttää.

---

## 1. Suojan kerrokset (tämä on se "enemmän kuin disclaimer")

Jokainen tuotos kulkee viiden mekanismin läpi. Disclaimer on vasta kuudes,
ja vähäisin.

1. **Lähteen varmistus.** Säädös ja oikeuskäytäntö haetaan lähteestä (oik.ai/
   Finlex), ei mallin muistista. Ks. plugarien `CLAUDE.md` ja
   `legal-core:legal-research`.
2. **Kolmiportainen varmuusmerkintä.** Jokainen väite on joko *Varmistettu*,
   *Tarkistettava* tai *Älä käytä* – ja merkintä näkyy numeron vieressä.
   Ks. [`citation-style.md`](citation-style.md).
3. **Premissien tarkistus.** Käyttäjän esittämää virheellistä oikeudellista
   faktaa ei oteta annettuna; olennainen premissi tarkistetaan ennen analyysiä.
4. **Negatiivirajaus.** Jokainen skill kertoo osiossa *Mitä tämä skill EI tee*,
   mihin se ei ota kantaa ja mitä se ei korvaa – tämä rajaa hallusinaatio- ja
   vastuuriskiä konkreettisesti.
5. **Ihmisen tarkistusportti.** Mitään ei lähetetä, jätetä tuomioistuimeen,
   allekirjoiteta tai julkaista ennen kuin pätevä ihminen on tarkistanut ja
   hyväksynyt sen ja kantaa ammatillisen vastuun lopputuloksesta.
6. **Vastuuvapaus.** Merkitään tuotokseen – mutta vasta viidennen mekanismin
   jälkeen, ei sen sijasta.

**Suunnittelusääntö:** jos virhe pääsisi läpi ilman, että jokin mekanismi 1–5
sen pysäyttää, vika on skillissä – korjaa skilli, älä luota disclaimeriin.

---

## 2. Ammattieettinen kerros

Työkalut tuottavat luonnoksia; ammatillinen vastuu ja velvoitteet säilyvät
käyttäjällä. Pääpiirteet (tarkista ajantasainen sääntely lähteestä):

- **Salassapito.** Asianajajan salassapitovelvollisuus (laki asianajajista
  496/1958 ja Asianajajaliiton tapaohjeet, hyvä asianajajatapa) ja muu
  lakisääteinen salassapito sitovat riippumatta työkalusta. Asiakkaan
  luottamuksellista tietoa ei viedä työkaluun, joka ei täytä luottamuksellisen
  käsittelyn vaatimuksia. Ks. luku 3.
- **Esteellisyys ja eturistiriita.** Työkalu ei tunnista toimeksiantojen
  välisiä eturistiriitoja. Niiden arviointi kuuluu käyttäjälle.
- **Kuka saa edustaa.** Oikeudenkäyntiasiamiehenä yleisessä tuomioistuimessa
  toimiminen on rajattua (oikeudenkäymiskaari 4/1734, 15 luku): pääsääntöisesti
  asianajaja, julkinen oikeusavustaja tai luvan saanut oikeudenkäyntiavustaja
  (laki luvan saaneista oikeudenkäyntiavustajista 715/2011). Skillin tuottama
  kirjelmäluonnos ei tee kenestäkään kelpoista asiamiestä.
- **Ei-juristit.** Toisin kuin eräissä maissa, oikeudellisen neuvonnan
  tarjoaminen tuomioistuimen ulkopuolella on Suomessa verraten vapaata, mutta
  vastuu annetusta neuvosta säilyy. Ei-juristin tuottama luonnos ei ole
  ammatillista oikeudellista neuvontaa eikä korvaa sitä.
- **Hyvä lakimiestapa.** Tunnista epävarmuus avoimesti, älä esitä tulkintaa
  varmempana kuin se on, ja ohjaa tarvittaessa pätevän asiantuntijan arvioon.

---

## 3. Tietojenkäsittely ja tietoturva

Mandanttitietojen vieminen tekoälytyökaluun on henkilötietojen käsittelyä ja
usein salassa pidettävän tiedon käsittelyä. Ennen kuin asiakirjoja syötetään:

- **Käsittelysopimus (GDPR 28 art).** Jos henkilötietoja käsitellään ulkoisessa
  työkalussa/pilvipalvelussa, palveluntarjoajan kanssa on oltava
  henkilötietojen käsittelysopimus (DPA/AVV). Varmista myös tietojen
  **säilytyskäytäntö** (esim. kuinka pitkään mallintarjoaja säilyttää
  syötteet) ja mahdollinen tiedon siirto EU:n ulkopuolelle (siirtoperuste).
- **Anonymisointi ensin.** Kun henkilötietojen ei tarvitse päätyä mallille,
  anonymisoi ne paikallisesti ennen analyysiä. Suositeltu työkalu on
  **PII Shield** (ks. `data-protection`-plugarin README): se korvaa henkilötiedot
  paikkamerkeillä paikallisesti ja palauttaa ne jälkikäteen – henkilötieto ei
  päädy API:hin asti. Tämä toteuttaa tietojen minimoinnin.
- **Salassapito ja pilvi.** Arvioi erikseen, saako salassa pidettävää tai
  arkaluonteista aineistoa (9–10 art) viedä työkaluun lainkaan. Epäselvässä
  tilanteessa: älä vie – anonymisoi tai käsittele paikallisesti.
- **Oikeudellinen sääntely:** EU:n tietosuoja-asetus (2016/679),
  tietosuojalaki (1050/2018), työelämän tietosuoja (laki yksityisyyden suojasta
  työelämässä 759/2004). Ks. `data-protection`-plugari. *Säädösnumerot tarkistettava
  Finlexistä ennen lopullista käyttöä.*

---

## 4. Tekoälyn läpinäkyvyys työkalusta itsestään

- Nämä plugarit ohjaavat yleiskäyttöistä tekoälyä (Claude). **Tuotokset ovat
  tekoälyn tuottamia luonnoksia** – tee tämä näkyväksi, kun jaat tuotoksen
  eteenpäin. EU:n tekoälyasetuksen (2024/1689) läpinäkyvyysvelvoite (50 art)
  edellyttää, että käyttäjä tietää olevansa tekemisissä tekoälyn kanssa.
- **Riskiluokka.** Juristin luonnostelun apuvälineenä työkalu ei lähtökohtaisesti
  ole korkean riskin tekoälyjärjestelmä. Erityistilanteissa luokka voi muuttua –
  esimerkiksi jos lainkäyttöviranomainen käyttää tekoälyä avustamaan oikeuden
  soveltamisessa tosiseikkoihin (asetuksen liite III). Arvioi käyttötapa
  tapauskohtaisesti `ai-regulation`-plugarilla; älä oleta luokkaa.

---

## 5. Soveltaminen

- Plugarien `CLAUDE.md` viittaa tähän tiedostoon ja
  [`citation-style.md`](citation-style.md):ään.
- Kun tuotat merkittävän juridisen tuotoksen, varmista että mekanismit 1–5
  ovat toteutuneet ennen kuin lisäät vastuuvapauden.
- Tämä tiedosto ei ole oikeudellinen neuvo compliance-velvoitteista, vaan
  käytännön muistilista. Organisaation oma tietosuoja- ja
  ammattieettinen ohjeistus menee tämän edelle.

*Päivitä versionumero ja päiväys, kun standardia muutetaan.*
