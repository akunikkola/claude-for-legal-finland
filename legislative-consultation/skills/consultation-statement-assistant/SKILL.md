---
name: consultation-statement-assistant
description: >
  Lausunnon laatiminen lakiuudistuksiin ja lakiluonnoksiin minkä tahansa lausunnonantajan
  (kunta, kaupunki, kuntayhtymä, virasto, järjestö, yritys) näkökulmasta. Auttaa
  analysoimaan lakiehdotusta, vertaamaan sitä voimassa olevaan lakiin, tunnistamaan
  vaikutukset, tiivistämään muiden lausunnonantajien näkemyksiä ja kirjoittamaan
  perustellun lausunnon. Käytä tätä skilliä aina kun käyttäjä mainitsee lausunnon,
  lausuntokierroksen, lausuntopyynnön, lakiuudistuksen, hallituksen esityksen (HE),
  lausuntopalvelun tai kannanoton, tai haluaa analysoida lakiehdotusta oman
  organisaationsa näkökulmasta tai arvioida lakimuutoksen vaikutuksia.
---

# Lausuntoapuri — laadukas lausunto lakiuudistuksiin

Tämä skill auttaa laatimaan perustellun ja vaikuttavan lausunnon lakiehdotuksesta.
Se yhdistää lakiehdotuksen analyysin, vaikutusarvioinnin lausunnonantajan näkökulmasta
ja lausunnon rakenteellisen kirjoittamisen. Skill soveltuu kaikille lausunnonantajille;
kunnat ja muut julkisyhteisöt saavat siitä erityisesti irti, koska ne toteuttavat
suuren osan lainsäädännöstä käytännössä.

> **Vastuuvapaus:** lausunto on luonnos, jonka lausunnonantajan vastuuhenkilö tarkistaa
> ja hyväksyy. Arvolatautuneet ja poliittiset kannanotot jätetään päättäjien
> täydennettäväksi, jos niistä on erimielisyyttä. Lakiviittaukset tarkistetaan lähteestä.

## Output language

Drafts may be produced in **English** for review, but the version actually **filed with the court
or authority must be in Finnish or Swedish** (kielilaki 423/2003; oikeudenkäymiskaari for court
documents). An English filing is not admissible. Always offer to produce the Finnish version, and
state plainly that the English text is a working translation only.

Keep the Finnish term alongside the English one for legally operative concepts on first use, for
example `notice period (irtisanomisaika)`.

---

## Lausunnonantajan profiili

Lue `references/respondent-profile.md`. Jos profiili on täyttämättä, kysy
käyttäjältä keskeiset tiedot (organisaation tyyppi, koko, toimiala, resurssit,
erityispiirteet) ennen vaikutusten arviointia — vaikutusarvio on yhtä hyvä kuin sen
taustatiedot. Profiilin voi tallentaa pysyvästi plugarin käytäntöprofiiliin (`legislative-consultation/AGENTS.md`).

## Voimassa olevan lain ja oikeuskäytännön tarkistus

Aina kun lausunto vertaa ehdotusta voimassa olevaan lakiin tai viittaa pykälään,
**käytä `legal-core`-plugarin `legal-research`-skilliä** ja hae voimassa oleva sanamuoto
oik.ai/Finlex-MCP:stä. Älä vahvista lakiviittausta muistista. Tämä on lausunnon
uskottavuuden kannalta olennaista.

---

## Työvaiheet

Lausunnon laatiminen etenee seitsemässä vaiheessa. Jokainen vaihe tuottaa konkreettisen
tuloksen, jota seuraava hyödyntää.

### Vaihe 0: Rajaus
Selvitä käyttäjältä: mikä lakiuudistus (HE-numero tai lausuntopalvelun linkki),
mitä materiaaleja on valmiina (HE-luonnos, lausuntopyyntö, aiemmat lausunnot), lausunnon
**määräaika**, erityiset painopisteet ja huolenaiheet, lausunnon **vastuuhenkilö**, ja
onko aiempia lausuntoja samasta aiheesta. Jos asiasta on organisaatiossa erimielisyyttä,
kirjoita neutraalin asiantuntevasti ja jätä arvovalinnat täydennettäväksi.

### Vaihe 1: Lähtötietojen kerääminen
Jos materiaaleja ei ole, etsi ne (`WebSearch`/`WebFetch`; tarkemmat ohjeet
`references/information-sources.md` ja `references/lausuntopalvelu-guide.md`):
1. **HE-luonnos / lakiehdotusteksti** — ensisijaisesti Lausuntopalvelu.fi, vaihtoehtoisesti valtioneuvosto.fi tai eduskunta.fi.
2. **Voimassa oleva laki** — `legal-research`-skill (oik.ai/Finlex).
3. **Kuntaliiton / kattojärjestön lausunto** — sektorin yhteinen näkemys.
4. **Vastaavien lausunnonantajien lausunnot** — vertailupohja.
5. **Lausuntopyynnön erityiskysymykset** — mihin ministeriö toivoo vastausta.

### Vaihe 2: Lakiehdotuksen analyysi
Analysoi järjestelmällisesti (työkalut: `references/analysis-tools.md`) ja tuota
tiivistelmä ennen kirjoittamista.
- **Yleiskuva:** mitä lakia muutetaan ja miksi, keskeiset muutokset, tavoitteet HE:n mukaan.
- **Vaikutusten tunnistaminen** (kattava kehikko: `references/impact-assessment.md`): taloudelliset, hallinnolliset, palvelu-, henkilöstö-, aikataulu-, tietojärjestelmä- ja kohderyhmävaikutukset. Priorisoi lakiuudistuksen kannalta olennaisimmat.
- **Lausunnonantajan erityispiirteet:** suhteuta vaikutukset profiiliin.

### Vaihe 3: Muiden lausuntojen analyysi
Hae ja tiivistä keskeiset näkemykset (kattojärjestö, vertaisorganisaatiot, alueelliset toimijat, asiantuntijat). Tunnista: missä laaja yhteisymmärrys, missä erimielisyyttä, mitä huolia oma viiteryhmä nostaa, onko jotain jäänyt huomaamatta. Tuota yhteenveto käyttäjälle.

### Vaihe 4: Lausunnon laatiminen
Laadi lausunto (rakenneopas: `references/statement-structure.md`, esimerkit: `references/statement-structure-examples.md`):
1. **Yleistä** — kiitos lausuntomahdollisuudesta, lyhyt yleisarvio.
2. **Yleiset huomiot** — tavoitteiden arviointi, kokonaisvaikutus, viiteryhmän näkökulma.
3. **Yksityiskohtaiset huomiot** — pykälä-/lukukohtaiset kommentit: mitä ehdotetaan → miten vaikuttaa → mitä tilalle.
4. **Taloudelliset vaikutukset** — euroina aina kun mahdollista, rahoituskysymykset, siirtymäkausi.
5. **Toimeenpanon haasteet** — käytännön toteutettavuus, aikataulu, resurssit.
6. **Yhteenveto ja keskeiset esitykset** — 3–7 kannanottoa, konkreettiset muutosesitykset lakitekstiin.

Kirjoitustyyli (tarkemmin `references/writing-guidelines.md`): asiallinen ja rakentava, jokainen kannanotto perusteltu konkreettisesti (esimerkein ja luvuin), pykäläviittaukset tarkasti, vastustamisen rinnalle aina vaihtoehto, lausuntopyynnön erityiskysymyksiin vastataan suoraan ja otsikoidusti.

### Vaihe 5: Tarkistus ja viimeistely
- **Sisältö:** vastaavatko kommentit lausuntopyynnön kysymyksiin? Ovatko pykäläviittaukset, lakien nimet ja numerot oikein (tarkistettu `legal-research`-skillillä)? Ovatko euroarviot realistisia? Onko keskeiset vaikutukset käsitelty?
- **Rakenne:** johdonmukainen rakenne; yhteenveto linjassa yksityiskohtien kanssa; taloudelliset arviot tukevat kannanottoja.
- **Sävy:** asiallinen ja rakentava; muutosesitykset selkeitä ja toteuttamiskelpoisia.
- **Käytäntö:** lausunnonantajan virallinen nimi oikein; viitetiedot (diaarinumero, lausuntopyynnön tunnus) oikein; mitta sopiva (3–15 sivua).

Hyödynnä tarvittaessa `legal-core`-plugarin `document-review`-skilliä perusteelliseen tarkistukseen.

### Vaihe 6: Lähettäminen ja seuranta
Ohjeista käyttäjää (yksityiskohdat `references/lausuntopalvelu-guide.md`): lausunnot toimitetaan pääsääntöisesti Lausuntopalvelu.fi:n kautta tai lausuntopyynnössä ilmoitettuun osoitteeseen; tarkista allekirjoitustarve ja muoto. Seuraa uudistuksen etenemistä eduskunta.fi:stä — valiokuntien mietinnöistä näkee, huomioitiinko lausunnon kannat.

---

## Tulostemuoto

Luo **uusi** lausunto Word-dokumenttina (.docx), jotta käyttäjä voi muokata sitä ennen lähettämistä (käytä `docx`-skilliä; lue sen SKILL.md ensin). Jos muokkaat **olemassa olevaa** lausuntoluonnosta tai kommentoit sitä, käytä `adeu`-MCP:tä, joka tekee muutokset natiiveina Word-jälkimuutoksina ja kommentteina (Track Changes) muotoilua rikkomatta. Tuota lisäksi:
1. **Tiivistelmäsivu** (1 sivu) — päätöksentekijöille keskeiset viestit.
2. **Varsinainen lausunto** (3–15 sivua) yllä kuvatulla rakenteella.
3. **Analyysiliite** (valinnainen) — yksityiskohtainen analyysi, jos käyttäjä haluaa.

## Erityistilanteet

- **Laaja lausuntopyyntö:** keskity eniten vaikuttaviin osiin, mainitse mihin ei ole huomautettavaa.
- **Vähän aikaa:** keskity keskeisimpiin pykäliin, hyödynnä kattojärjestön lausuntoa pohjana, nosta 3–5 tärkeintä huomiota ja mainitse aikataulun rajoite.
- **EU-taustainen sääntely:** erota mikä tulee suoraan EU-säädöksestä (pakollista) vs. kansallinen liikkumavara; kohdista muutosesitykset kansalliseen toimeenpanoon.
- **Useita ministeriöitä:** varmista ettei asia jää kommentoimatta "kuuluu toiselle ministeriölle" -syystä.
- **Kanta poikkeaa kattojärjestöstä:** oma lausunto on itsenäinen; perustele poikkeama konkreettisesti.

## Viitetiedostot

| Tiedosto | Sisältö | Milloin lukea |
|---|---|---|
| `references/respondent-profile.md` | Lausunnonantajan taustatiedot (mallipohja) | Vaikutuksia arvioitaessa (vaihe 2) |
| `references/analysis-tools.md` | Lakiehdotuksen analyysin työkalut | Analyysissä (vaihe 2) |
| `references/impact-assessment.md` | Vaikutusten arviointikehikko | Vaikutuksia arvioitaessa (vaihe 2) |
| `references/information-sources.md` | Verkkolähteet ja hakuohjeet | Tiedonhaussa (vaihe 1) |
| `references/lausuntopalvelu-guide.md` | Lausuntopalvelu.fi:n käyttö ja lähettäminen | Tiedonhaussa ja lähettäessä (vaiheet 1, 6) |
| `references/statement-structure.md` | Lausunnon rakenneopas | Kirjoittaessa (vaihe 4) |
| `references/statement-structure-examples.md` | Esimerkkejä lausunnon osista | Kirjoittaessa (vaihe 4) |
| `references/writing-guidelines.md` | Lakikielen ja lausunnon kirjoitustyyli | Viimeistelyssä (vaihe 5) |

---

## Mitä tämä skill EI tee

- **Ei päätä organisaation kantaa.** Tuottaa lausuntoluonnoksen, jonka lausunnonantajan vastuuhenkilö tarkistaa ja hyväksyy ennen lähettämistä.
- **Ei vahvista lakiviittauksia eikä vaikutuslukuja muistista.** Voimassa olevat pykälät tarkistetaan lähteestä (`legal-research`-skill) ja euro- ja muut arviot merkitään selvästi arvioiksi (`[arvio — varmista organisaation taloushallinnosta]`).
- **Ei esitä poliittista kannanottoa varmistettuna.** Arvolatautuneet linjaukset jätetään päättäjien täydennettäväksi; jos asiasta on erimielisyyttä, kirjoitetaan neutraalin asiantuntevasti.
- **Ei esitä muutosesitystä sitovaan EU-sääntelyyn.** Erottaa pakollisen EU-pohjaisen sääntelyn kansallisesta liikkumavarasta ja kohdistaa esitykset vain kansalliseen toimeenpanoon.
- **Ei lähetä lausuntoa.** Ohjeistaa lähettämisessä (Lausuntopalvelu.fi tai ilmoitettu osoite), mutta varsinaisen jättämisen ja allekirjoituksen tekee käyttäjä.

## Jatka tästä

- Ehdotuksen ja voimassa olevan lain vertailu lähteestä → /juristi:oikeustutkimus
- Lausunnon kielen viimeistely → /juristi:suomen-kieli
- Valmiin luonnoksen perusteellinen laaduntarkistus → /juristi:asiakirjan-tarkistus
- Jos lausunto koskee säädösteknistä muotoilua → /lainvalmistelu:lainkirjoittajan-opas
- Jos lausunto kohdistuu hallituksen esityksen rakenteeseen tai perusteluihin → /lainvalmistelu:hallituksen-esityksen-laatimisohjeet
