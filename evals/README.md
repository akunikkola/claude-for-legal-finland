# Evaluointi — triggeritestit ja laatuarviointi

Tämä hakemisto tekee kesäkuussa 2026 ensi kertaa ajetusta evaluointireseptistä
toistettavan. Kaksi tasoa:

1. **Triggeritestit** (tämä hakemisto): triggeröityykö oikea skill, kun
   käyttäjä esittää tyypillisen pyynnön?
2. **Laatuarviointi** ([`../esimerkkiaineistot/`](../esimerkkiaineistot/)):
   kun skill triggeröityy, onko tuotos arviointikriteerien mukainen?

> **Kustannusvaroitus:** molemmat tasot ajavat oikeita mallikutsuja ja
> maksavat tokeneita. Näitä ei ajeta CI:ssä — aja käsin, kun muutat skillien
> kuvauksia (`description`) tai teet isomman sisältömuutoksen.

## Triggeritestit

```sh
bash evals/aja-triggeritestit.sh                    # kaikki skenaariot
bash evals/aja-triggeritestit.sh koeaikapurku       # yksi skenaario
EVAL_MODEL=claude-sonnet-5 bash evals/aja-triggeritestit.sh
```

Skenaariot ovat tiedostossa [`skenaariot.json`](skenaariot.json). Jokainen
skenaario lataa yhden plugarin `--plugin-dir`-lipulla, ajaa promptin
headless-tilassa (`-p --output-format stream-json`) ja tarkistaa striimistä,
kutsuiko malli odotettua skilliä (`tool_use`, `name == "Skill"`).

**Aja kirjautuneessa ympäristössä** (terminaali, jossa `claude` toimii
interaktiivisesti). Eristetyissä ympäristöissä headless-ajo kaatuu
401-virheeseen, koska kirjautuminen ei seuraa config-hakemistoon — runner
tunnistaa tämän ja keskeyttää selvällä virheellä sen sijaan, että
raportoisi valheellisia triggerihukkia.

**Skenaarion lisääminen:** lisää olio `skenaariot.json`-taulukkoon. Hyvä
skenaario on käyttäjän oikea pyyntö (ei skillin nimen toistoa) — testin
pointti on, että kuvaus nappaa aidon muotoilun.

### Tunnetut hukat (kesäkuu 2026)

Kesäkuun 2026 evaluoinnissa triggeröinti toimi substanssikysymyksissä
(8/10), mutta kaksi skenaariota ohitti skillin headless-tilassa
systemaattisesti sekä Sonnet 4.6:lla että Opus 4.8:lla:

| Skenaario | Tila | Huomio |
|---|---|---|
| Pikakorjaus ("korjaa tämä viittaus") | Kuvausta täsmennetty — skenaario `pikakorjaus-viittaus` toimii regressiovahtina | Jos hukkuu taas, pelkkä kuvausmuutos ei riitä |
| "Sain asiakirjan, mistä aloitan" | **Avoin** — merkitty `tunnettu_hukka: true` | Vaarallisin hukka: `toimeksianto` kartoittaa määräajat ensin; suora vastaus voi hukata valitusajan. Plugarin CLAUDE.md toimii varaverkkona (määräajat huomattiin evaluoinnissa silti) |

`tunnettu_hukka: true` -skenaariot raportoidaan varoituksena (⚠️), eivät
virheenä — ne kertovat, onko tunnettu ongelma yhä olemassa. Kun hukka
saadaan korjattua, poista lippu, jolloin skenaariosta tulee regressiovahti.

## Laatuarviointi grader-agenteilla

Kolme sotkuista harjoitusaineistoa arviointikriteereineen:
[`../esimerkkiaineistot/`](../esimerkkiaineistot/). Resepti:

1. Kopioi aineiston tiedostot työhakemistoon **ilman**
   `arviointikriteerit.md`-tiedostoa (malli ei saa nähdä kriteerejä).
2. Aja tehtävä skillillä (esim. toimeksianto + aineisto).
3. Arvioi tuotos **erillisellä grader-agentilla**, jolle annetaan tuotos ja
   `arviointikriteerit.md`. Kriteerit ovat käyttäytymislistoja (nostaako
   ristiriidat, merkitseekö laskelmat tarkistettaviksi, jättääkö pykälät
   vahvistamatta muistista) — eivät mallivastauksia.

## Asennussavutesti

Puhtaassa ympäristössä (`CLAUDE_CONFIG_DIR=$(mktemp -d)`):

```sh
claude plugin marketplace add <repon polku>
claude plugin install juristi@legal-for-finland --scope user
```

**Huom:** kirjautuminen ei seuraa config-hakemistoon (macOS-avainnippu),
joten headless-ajot eivät toimi puhtaassa hakemistossa — asennussavutesti
todentaa vain asentumisen, triggeritestit ajetaan omassa
oletusympäristössä `--plugin-dir`-lipulla.

## Aiemmat löydökset (opiksi)

- **`[tarkista]`-porsaanreikä:** ohje "hae lähteestä TAI merkitse
  [tarkista]" salli mallin esittää vanhentuneen raja-arvon varauksella
  (KKV:n yrityskauppavalvonnan 2023 vanhentuneet rajat). Korjaus: kiellä
  luvun esittäminen kokonaan ilman lähdehakua. Sama kuvio kannattaa
  tarkistaa uusista skilleistä.
- **Plugarin CLAUDE.md on varaverkko:** vaikka skill ei triggeröydy,
  CLAUDE.md-suojaukset (määräajat, viittausmuoto) vaikuttavat. Siksi
  suojausten kuuluu olla CLAUDE.md:ssä eikä vain skillissä.
- **Always-on-kustannus:** kaikkien 20+ plugarin lataus yhtä aikaa maksaa
  n. 10 000 tokenia kontekstia. Triggeritestit lataavat vain yhden
  plugarin kerrallaan myös siksi.
