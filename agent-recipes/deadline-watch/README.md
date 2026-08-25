# maaraaika-vahti — määräaikojen valvonta-agentti

Valvoo määriteltyä aineisto- tai kalenterilähdettä oikeudellisista
**määräajoista** ja nostaa lähestyvät määräajat varoituksina. Tyypillisiä:
valitusaika (hallinto- ja yleiset tuomioistuimet), oikaisuvaatimusaika,
kanteen vanhentuminen, muutoksenhaun jatkokäsittely-/valituslupa-aika,
yhteistoimintalain neuvotteluajat ja rekisteröidyn pyynnön vastausaika (GDPR).

> **Tämä on keittokirja, ei valmis tuote.** Ks. [`../README.md`](../README.md)
> tietoturvamalli (lukija/analysoija/kirjoittaja) ja vastuurajaukset.

## Ohjaustapahtuma (esimerkki)

`Tarkista määräajat aineistosta <polku/lähde> päivään <YYYY-MM-DD>, kynnys: <päiviä ennen>`

## Tasot

| Taso | Tehtävä | Oikeudet |
|---|---|---|
| `aineisto-lukija` | Lukee asiakirjat/kalenterimerkinnät, poimii päivämäärät, tiedoksiantopäivät, asianumerot. Palauttaa JSONin. | `Read`, `Grep` |
| `maaraaika-laskija` | Laskee määräajat poimituista päivistä; tarkistaa määräaikasäännöt oik.ai/Finlexistä (lukuoikeus). | MCP-luku |
| `varoitus-kirjoittaja` | Kirjoittaa varoituslistan ja seurantamerkinnät. Ainoa `Write`-taso. | `Write` |

## Mitä tämä EI tee

- **Ei laske sitovia määräpäiviä.** Lasketut päivät ovat johtolankoja, jotka
  ihmisen on vahvistettava asiakirjasta ja säännöksestä. Tiedoksiantopäivä,
  pyhäpäiväsiirto ja erityislain poikkeus voivat muuttaa lopputuloksen.
- **Ei tee oikeudellista arviota** muutoksenhaun edellytyksistä tai
  menestymisestä.
- **Ei korvaa toimiston määräaikajärjestelmää** eikä asianajajan vastuuta
  määräaikojen seurannasta.
- **Ei lähetä mitään ulos** ilman ihmisen hyväksyntää.

## Käyttöönotto

1. Sovita konnektorit (DMS/kalenteri) omiin järjestelmiisi.
2. Aseta tarkistusrytmi ja kynnys (montako päivää ennen varoitetaan).
3. Tee oma evaluaatio testiaineistolla ennen tuotantokäyttöä.
4. Varmista mandanttitietojen käsittelyn lainmukaisuus
   ([`../../references/liability-and-security.md`](../../references/liability-and-security.md)).
