# Codex-käyttöönotto

Tämä repo sisältää Codex-yhteensopivan markkinapaikan samoille plugareille ja
skilleille, jotka toimivat Claudessa.

## Asennus paikallisesta reposta

Aja repon juuressa:

```bash
node scripts/generate-codex.mjs
codex plugin marketplace add .
```

Asenna sen jälkeen vähintään läpileikkaava perusplugari ja tarvitsemasi
oikeudenalan plugari:

```bash
codex plugin add juristi@legal-for-finland
codex plugin add tyooikeus@legal-for-finland
```

Käynnistä Codex uudelleen tai avaa uusi istunto. Markkinapaikan CLI-nimi on
`legal-for-finland` ja näyttönimi `Legal for Finland`; jokainen käytäntöalue
näkyy omana plugarinaan.

## MCP-kirjautuminen

Jos pluginin `.mcp.json` sisältää `oik-ai`-palvelimen, tarkista tila ja kirjaudu:

```bash
codex mcp list --json
codex mcp login oik-ai
```

## Rakenne

- `.agents/plugins/marketplace.json` on Codexin repo-markkinapaikka.
- `<plugari>/.codex-plugin/plugin.json` on Codexin plugarimanifesti.
- `<plugari>/skills/` on sama skill-hakemisto, jota Claude käyttää.
- `<plugari>/.mcp.json` on jaettu MCP-palvelinmääritys Claudelle ja Codexille.
- `<plugari>/skills/<skill>/agents/openai.yaml` syntyy niille skilleille, jotka
  tarvitsevat MCP-työkaluja. Tiedosto kertoo Codexille skillin työkaluriippuvuudet.

## Päivitys

Kun pluginien metadata tai markkinapaikka muuttuu, aja:

```bash
node scripts/generate-codex.mjs
node --test tests/*.test.mjs
```

Älä muokkaa generoituja Codex-manifesteja käsin. Päivitä ensin Claude-puolen
kanoninen metadata tai `scripts/generate-codex.mjs`.
