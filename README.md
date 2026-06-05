# NVE Designsystem

Dette er skrevet for de som <i>utvikler</i> NVE Designsystem.
Skal du kun <i>bruke</i> designsystemet, finner du dokumentasjon og kodeeksempler her: [https://designsystem.nve.no/](https://designsystem.nve.no/).

Har du lyst til å bidra? [Her finner du informasjon om hvordan du kan komme i gang som bidragsyter](CONTRIBUTING.md)

Repositoriumet inneholder css generert fra Figma-tokens i Designsystemet. [Her finner du pakka i npm](https://www.npmjs.com/package/nve-designsystem).

[Her](https://www.figma.com/files/1033298377581647627/project/85006605/Public---Designsystem?fuid=854992400462434435) er skisser i Figma.

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi har også komponenter som ikke er basert på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

## Kjøremiljø

Dette prosjektet inneholder to applikasjoner:

- I rot-mappa ligger selve komponentbiblioteket med nve-komponentene
- I mappa `doc-site` ligger test-applikasjonen som viser brukerveiledninga for biblioteket. Teknisk beskrivelse av denne ligger i egen [readme](doc-site/README.md)

### Bytte fra npm til pnpm

Repoet bruker nå `pnpm` som package manager. Hvis du har jobbet i prosjektet tidligere med `npm`, bør du rydde opp før du installerer på nytt.

1. Slett `node_modules`
2. Slett eventuelle `package-lock.json`
3. Sjekk hvilken `node`-versjon og hvilken `packageManager` repoet krever i `package.json`
4. Sørg for at du bruker riktig Node-versjon
5. Aktiver riktig `pnpm`-versjon via Corepack
6. Kjør `pnpm install`

Sjekk først verdiene i `package.json`:

```json
{
  "engines": {
    "node": "^24.16.0"
  },
  "packageManager": "pnpm@11.5.1+..."
}
```

Det er disse verdiene som gjelder dersom versjonene endres senere.

Du kan aktivere `pnpm` slik:

```bash
corepack enable
corepack use pnpm@<versjon-fra-packageManager>
pnpm --version
```

Hvis du også må bytte Node-versjon først, kan du gjøre det med `nvm` og deretter aktivere `pnpm`:

```bash
nvm install <node-versjon-fra-engines.node>
nvm use <node-versjon-fra-engines.node>
corepack enable
corepack use pnpm@<versjon-fra-packageManager>
pnpm --version
```

Når dette er gjort, kan du starte prosjektet med `pnpm install` og `pnpm run dev`.

Kjør `pnpm install` og `pnpm run dev` for å starte test-applikasjonen.

Dersom applikasjonen ikke er bygget på forhånd, vil pnpm run dev automatisk sørge for at den bygges og at dist-mappen opprettes.

Vi bygger applikasjonen før kjøring for å sikre at den importerer custom-elements.json og nve-designsystem.css fra dist. Siden begge filer ganske statiske man trenger ikke å å bygge
appen på nytt hver gang man gjør noen endringer i component filen. Disse to filene kunne vært plassert i src, men vi
unngår det – særlig for shoelace.css – fordi filen da måtte blitt manuelt kopiert fra node_modules til src (eller håndtert via et script).

Ved å importere shoelace.css direkte i main.ts, sørger Vite for korrekt bundling. Dette eliminerer behovet for å endre @import-referanser i global.css og gir dist-mappen som eneste source of truth.

Applikasjonen er selve brukerveiledninga for komponentbiblioteket, så her ligger api-dokumentasjon, beskrivelse av funksjonalitet og ikke minst kodeeksempler.

## Versjonslogg

[CHANGELOG.md](CHANGELOG.md) genereres automatisk basert på commit-meldingene dine og vises i [versjons-notatene](https://github.com/NVE/Designsystem/releases) på GitHub.

### Betingelser for Semantic Release

Merk at `semantic-release` stiller visse betingelser før oppdatering av versjonsloggen. For at en endring skal registreres i versjonsloggen, må følgende krav være oppfylt:

- Commit-typen må være en av følgende:
  - `BREAKING CHANGE`: Introduserer en endring som bryter bakoverkompatibiliteten
  - `feat`: Legger til en ny funksjonalitet
  - `fix`: Retter en feil
  - `perf`: Forbedrer ytelsen
- Endringen må ha skjedd i en av følgende mapper:
  - `src/**`
  - `build/**`
  - `public/css/**`

## Automatiske oppdateringer med Dependabot

Vi bruker **Dependabot** for å automatisk opprette pull requests når det finnes oppdateringer av avhengigheter eller sikkerhetsfikser i vår `package.json`.  
Konfigurasjonen for Dependabot ligger i: .github/dependabot.yml

Når Dependabot oppretter en pull request, genereres det automatisk et **forhåndsvisningsmiljø** av nettsiden via **Azure Static Web Apps**. Dette lar deg enkelt sjekke hvordan endringene påvirker dokumentasjonsappen.

### Slik finner du lenken til forhåndsvisningen:

1. Gå inn i den aktuelle pull requesten.
2. Klikk på fanen **Checks**.
3. Velg jobben **"Bygg og installasjon av dok-app i skyen"**.
4. Gå til steget **"Installer dokumentasjons-nettsted"**.
5. Se etter linjen som inneholder: Visit your site at: https://...
6. Klikk på lenken for å åpne den midlertidige versjonen av nettstedet.

Merk: Lenken vises **ikke automatisk som en kommentar** i PR-en.  
Dette skyldes at Dependabot, av sikkerhetsgrunner, ikke har tillatelse til å poste kommentarer via GitHub Actions. Derfor kan du se følgende feilmelding i loggene:

```
Unexpectedly failed to add GitHub comment.
```
