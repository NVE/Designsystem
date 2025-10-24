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

Kjør `npm install` og `npm run dev` for å starte test-applikasjonen.

Dersom applikasjonen ikke er bygget på forhånd, vil npm run dev automatisk sørge for at den bygges og at dist-mappen opprettes.

Vi bygger applikasjonen før kjøring for å sikre at den importerer custom-elements.json og nve-designsystem.css fra dist. Siden begge filer ganske statiske man trenger ikke å å bygge
appen på nytt hver gang man gjør noen endringer i component filen. Disse to filene kunne vært plassert i src, men vi
unngår det – særlig for shoelace.css – fordi filen da måtte blitt manuelt kopiert fra node_modules til src (eller håndtert via et script).

Ved å importere shoelace.css direkte i main.ts, sørger Vite for korrekt bundling. Dette eliminerer behovet for å endre @import-referanser i global.css og gir dist-mappen som eneste source of truth.

Applikasjonen er selve brukerveiledninga for komponentbiblioteket, så her ligger api-dokumentasjon, beskrivelse av funksjonalitet og ikke minst kodeeksempler.

## Pull requests

Ikke push endringer direkte i `main`. Lag en pull request. Når du oppretter en pull request så skal du da også koble GitHub-issue ved å velge den under "Development" i høyre-kolonnen. Da blir issue lukket når Pull Requesten godkjennes.

### Conventional Commits

Vi har innført **Conventional Commits**-standarden i vårt prosjekt for å automatisere oppdatering av versjonsnummer og generering av changelog-filer. Når du lager en pull request (PR) som skal merges til `main`-branchen, må tittelen på PR-en følge denne standarden for at den skal bli godkjent.

#### Standardformatet er som følger

`<type>(<scope>): <beskrivelse>`

- **type**: Definerer hvilken type endring det er. Eksempler:
  - `feat`: Legger til ny funksjonalitet
  - `fix`: Fikser en feil
  - `chore`: Oppgaver som ikke endrer kode (f.eks. oppdatering av verktøy)
  - `docs`: Endringer i dokumentasjon

- **scope** (valgfritt): Beskriver hvor i prosjektet endringen er gjort. Denne kommer på starten av linjen i Changelog, så bør alltid være med. Eksempler:
  - `nve-button`: Endringer relatert til den spesifikke komponenten. Denne versjonen er som regel foretrukket
  - `tokens`: Dersom tokens er oppdatert

- **beskrivelse**: En kortfattet, imperativ beskrivelse av hva endringen gjør. Den skal være på én linje og beskrive hva koden gjør etter endringen. For eksempel: "Legg til validering for e-postadresse."

#### Eksempler på commit-meldinger

- feat(auth): legg til støtte for 2-faktor autentisering fix(ui): rettet layout-feil på forsiden
- docs: oppdatert README med nye installasjonsinstruksjoner

For mer informasjon om standarden, kan du lese mer på [Conventional Commits.](https://www.conventionalcommits.org/en/v1.0.0/)

#### PR-sjekk før merging til main

Tittelen på PR-en må oppfylle **Conventional Commits**-standarden. Dette blir automatisk validert som en del av en PR-sjekk.

#### Verktøy for å følge standarden

Det er flere måter å sikre at du følger **Conventional Commits**-standarden:

1. Commitizen: Du kan bruke Commitizen direkte i terminalen for å lage commits i riktig format. Bruke denne kommandoen for å lage en commit:

```script
npx cz
```

2. VS Code-utvidelse: Hvis du bruker Visual Studio Code, kan du installere utvidelsen [VS Code Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) for å sikre at commit-meldinger følger standarden. Etter at du har installert tillegget, kan du klikke på den runde sirkelen til høyre for Source Control for att gjøre en commit.

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
