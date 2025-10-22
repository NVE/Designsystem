# NVE Designsystem

Dette er skrevet for de som <i>utvikler</i> NVE Designsystem.
Skal du kun <i>bruke</i> designsystemet, finner du dokumentasjon og kodeeksempler her: [https://designsystem.nve.no/](https://designsystem.nve.no/).

Repositoryet inneholder css generert fra Figma-tokens i Designsystemet. [Her finner du pakka i npm](https://www.npmjs.com/package/nve-designsystem).

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

## Changelog

Changelog-filene genereres automatisk basert på commit-meldingene dine og blir synlige i [release-notatene](https://github.com/NVE/Designsystem/releases) på GitHub.

### Betingelser for Semantic Release

Merk at `semantic-release` stiller visse betingelser før oppdatering av changeloggen. For at en endring skal registreres i changelogen, må følgende krav være oppfylt:

- Commit-typen må være en av følgende:
  - `BREAKING CHANGE`: Introduserer en endring som bryter bakoverkompatibiliteten
  - `feat`: Legger til en ny funksjonalitet
  - `fix`: Retter en feil
  - `perf`: Forbedrer ytelsen
- Endringen må ha skjedd i en av følgende mappespesifikasjoner:
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

## Dokumentasjon

**Vi dokumenterer på norsk**

### JsDoc

Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties.
[Her er noen tips](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/#documenting-your-components).

Når du kjører opp test/dokumentasjons-applikasjonen, blir koden scannet og metadata + JsDoc lagret i `custom-elements.json`. Du kan også generere fila manuelt med `npm run manifest`. Dokumentasjons-applikasjonen bruker denne fila.

Skriv litt øverst i `.component.ts`-fila om hva komponenten skal brukes til. Om det er Shoelace-properties som ikke skal brukes fordi dette ikke passer med designsystemet, må du dokumentere det her.

### Brukerveiledning

Brukerveiledning med kodeeksempler skriver du i markdown-fila til komponenten. Dokumentasjons-applikasjonen viser denne markdown-fila sammen med info fra `custom-elements.json`. Fila skal hete det samme som komponenten, men med .md som etternavn, og legges her: `doc-site/components`. Eksempel: `doc-site/components/nve-button.md`

Lag kodeeksempler både for å teste at komponenten funker som forventet <em>og</em> for å vise hvordan komponenten funker. Koden skal være enklest mulig. Ta kun med kode som er relevant for eksemplet du ønsker å vise. Unngå styling i koden.

Markdown-fila skal ha denne strukturen:

1. Filhode
2. Enklest mulig kodeeksempel
3. Generelle tips
4. Resten av kodeeksemplene under overskriften `## Eksempler`

Mer om dette:

#### 1. Filhode

Markdown-fila må starte med denne blokka:

```md
---
layout: component
---
```

#### 2. Enklest mulig kodeeksempel

Deretter lager du et enklest mulig kodeeksempel for å kunne vise komponenten. Alle kodeksempler legges i en slik blokk:

````
<CodeExamplePreview>

```html
Her skriver du html-koden
```
</CodeExamplePreview>
````

Du må ha et ekstra linjeskift etter `<CodeExamplePreview>`og `</CodeExamplePreview>`

#### 3. Generelle tips

Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.

#### 4. Resten av kodeeksemplene

Nå er turen kommet til å demonstrere hvordan komponenten funker.
Lag kodeeksempler for de viktigste tingene du kan gjøre med komponenten, og for å vise hvordan komponenten oppfører seg. Bruk dette for å teste at komponenten oppfører seg slik den skal.

Eksemplene legger du under overskriften `## Eksempler`
Hvert tema skal ha egen overskrift, f.eks.: `### Deaktivering`.

Du kan også lage mer avanserte kodeeksempler i Vue. Se hvordan dette er gjort i [doc-site/introduction/vue.md](doc-site/introduction/vue.md).

---

Hvis du har laget en ny markdown-fil, må du starte test-applikasjonen på nytt ved å skrive `r` og taste `<enter>` i konsollet, for at fila skal leses.

### Annen dokumentasjon

Du kan også lage egne markdown-filer for spesielle tema, slik vi har gjort under `doc-site/introduction`. Lag en link til fila fra menyen i `doc-site/.vitepress/config.mts`.
