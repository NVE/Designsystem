# NVE Designsystem

Dette er skrevet for de som <i>utvikler</i> NVE Designsystem.
TODO: Skal du kun <i>bruke</i> designsystemet, finner du dokumentasjon og kodeeksempler her: [https://brave-meadow-0c645bd03.5.azurestaticapps.net/](https://brave-meadow-0c645bd03.5.azurestaticapps.net/).

Repositoryet inneholder css generert fra Figma-tokens i Designsystemet. Her finner du [pakka i npm](https://www.npmjs.com/package/nve-designsystem).

Her er skisser i [Figma](https://www.figma.com/files/1033298377581647627/project/85006605/Public---Designsystem?fuid=854992400462434435).

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi har også komponenter som ikke er basert på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

## Kjøremiljø

Kjør `npm install` og `npm run dev` for å starte test-applikasjonen. Applikasjonen er selve brukerveiledninga for komponentbiblioteket, så her ligger api-dokumentasjon, beskrivelse av funksjonalitet og ikke minst kodeeksempler.

## Pull requests

Ikke push endringer direkte i `main`. Lag en pull request.

## Oppretting av en ny komponent og mappestruktur

<em>Alle komponenters navn skal starte med `nve-`. Bruk det samme navnet som komponenten får i html. Kun små bokstaver og bindestrek er tillatt i navnet.</em>

Vi skiller API + funksjonalitet, styling og test/dokumentasjon i hver sine filer.

Du kan lage skall til en ny komponent ved å kjøre `npm run add-component {navn på komponent}`. Scriptet oppretter riktige filer for deg.

Du kan også lage filene manuelt. Lag en mappe under `src/components`. Navnet på mappa skal være samme som komponent-navnet. Eksempel:

| Filnavn                            | Beskrivelse           |
| ---------------------------------- | --------------------- |
| nve-button                         | Mappe for komponenten |
| nve-button/nve-button.component.ts | Selve komponenten     |
| nve-button/nve-button.styles.ts    | Styling               |
| nve-button/nve-button.md           | Test og dokumentasjon |

Markdown-fila blir lest av test/dokumentasjons-applikasjonen og innholdet blir presentert i applikasjonen.

## Properties

Vi setter reflect: true på alle properties i komponenter (se eksempel under) for å kunne se properties som oppdateres i DOMen. Gjelder reaktive applikasjoner.

```js
@property({ reflect: true }) title: string = '';
```

## Eksport

Komponenter skal eksponeres i `src/nve-designsystem.ts` på denne måten:

```js
export { default as NveComponent } from './components/nve-component/nve-component.component';
```

## Hvordan tolke design i Figma

Skissene i Figma er et forslag til design, ikke en spesifikasjon.

Hvis vi skal ta utgangspunkt i en Shoelace-komponent, pass på at designet ikke går for mye på tvers av slik komponenten er laget i Shoelace. Hvis du ser at du må endre `render()`-metoden for få til ønsket design, ta opp med designeren om hen heller kan justere designet.

Pass også på at API'et til komponenten blir ryddig. Navn på properties må følge god praksis for web-komponenter, og ikke alle properties er nødvendig å implementere. F.eks. trenger vi ikke en showHelpText-property. Det holder med en helpText-property med blank som standard-verdi. Da viser du helpText hvis den finnes.

## Styling

Når vi styler shoelace-komponenter kan vi enten overskrive Shoelace sine css-klasser eller bruke parts i shadow-DOM.
Bruk helst parts fordi koden blir lettere å lese.
Dette:

```css
::part(control) {
  color: red;
}
```

ser bedre ut enn dette:

```css
.checkbox checkbox--medium checkbox__control {
  color: red;
}
```

Hvis det ikke er mulig å style med ::part, bruk css-klasser.
safari (liten forbokstav med vilje) sliter med å håndtere parts med denne syntaksen `:host(:hover)::part(control)`, med det resultat at stilene til Shoelace ikke blir overskrvet som ønsket. Derfor må vi huske å teste web komponenter i safari og. Problemet kan løses med bruk av '!important', f.eks.:

```css
:host([disabled]:hover)::part(control control--indeterminate) {
  background: var(--neutrals-foreground-primary) !important;
  border-color: var(--neutrals-foreground-primary) !important;
}
```

## Typografi

Det finnes tokens for typografi i Figma.
Sett Figma i utviklermodus og klikk på en tekst.
I typografi-seksjonen til høyre ser vi css'en som er generert. Vi skal ikke bruke selve css'en, men <b>kommentaren</b> over css'en gir et hint om navnet på tokenet. Eksempel i Figma:

```css
color: var(--neutrals-foreground-mute, #3c3f44);

/* Label/small */
font-family: Source Sans Pro;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 110%; /* 1.1rem */
```

Kommentaren `/* Label/small */` betyr at vi skal bruke css-variabelen `--label-small`, f.eks. slik:

```css
.button-label {
  font: var(--label-small);
}
```

## Mapping av shoelace-tokens til NVE-tokens

Det hadde vært fint om vi kunne sette en NVE-verdi for alle Shoelace-tokens. Men dette går ikke fordi strukturen i Shoelace og NVE Designsystem er forskjellig.
Vi har satt NVE-verdier for en del Shoelace-tokens, og disse ligger i `global.css`.
Foreslå gjerne flere Shoelace-tokens som kan mappes på denne måten.

Vi trenger <em>ikke</em> å style:

- fokus-tilstand på alle komponenter. Dette settes globalt
- høyde på input-felter, knapper og select
- border-radius på alle komponenter (med mindre border radius mangler på en Shoelace-komponent, men designsystemet spesifiserer border-radius)
- bakgrunn, font-farge, font-størrelse, ikon-farge, ramme i input, select og textarea i både variantene filled og not filled

## Dokumentasjon

Vi dokumenterer på norsk

### Dokumentasjon i koden (JsDoc)

Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties. [Her er noen tips](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc).

Når du kjører opp test/dokumentasjons-applikasjonen, blir kildekoden lest og JsDoc samt en del andre opplysninger lagret i `custom-elements.json`. Du kan også generere fila manuelt med `npm run manifest`. Dokumentasjons-applikasjonen bruker denne fila.

Skriv litt øverst i `.component.ts`-fila om hva komponenten skal brukes til. Om det er Shoelace-properties som ikke skal brukes fordi dette ikke passer med designsystemet, må du dokumentere det her.

### Dokumentasjon i Markdown

Resten av brukerveiledninga med kodeeksempler skriver du i markdown-fila til komponenten. Dokumentasjons-applikasjonen viser denne markdown-fila sammen med info fra `custom-elements.json`.

:::tip
Lag kodeeksempler både for å teste at komponenten funker som forventet <em>og</em> for å vise hvordan komponenten funker.
:::

Slik strukturerer du markdown-fila:

1. Start med et enklest mulig kodeeksempel for å kunne vise komponenten. Alle kodeksempler startes med ` ``` ` `html:preview` og avsluttes med ` ``` `
2. Skriv evt. generelle tips som ikke passer å ha i @JsDoc. Pass på at det ikke blir dobbelt opp med det du har skrevet i @JsDoc.
3. Legg inn resten av kodeeksemplene under kapittel-overskriften `## Eksempler`. Hvert tema skal ha egen overskrift, f.eks.: `### Deaktivering`.

Hvis du har laget en ny komponent, må du legge til en import av komponenten i `/doc-site/src/importAllComponents.ts`, for at komponenten skal vises i dokumentasjons-applikasjonen.
Hvis du har laget en ny markdown-fil, må du starte test-applikasjonen på nytt ved å skrive r + <enter> i konsollet for at fila skal leses.

### Annen dokumentasjon

Dokumenatasjon som går på tvers av komponenter ligger i egne markdown-filer. Disse ligger under /doc/pages. For å vise en slik side må den linkes til, enten fra menyen i `MenuComponent.vue` eller fra en annen side. Url blir det samme som navnet på markdown-fila, men uten `.md`.

## Publisering til npm

Publisering til npm skjer ved hjelp av Github actions. Når man pusher til `main` (ved å fullføre en pull request), starter det en jobb som oppdaterer versjonsnummer og publiserer npm-pakka. Jobben er spesifisert i filen .github/workflows/npm-publish.yml.

## Test pakke lokalt

Før man pusher til main er det lurt å teste pakke lokalt. Med `npm run pack` kan man teste hvordan pakken oppfører seg akkurat på samme måte som etter publisering. For å teste en nve-designsystem pakke lokalt:

1. Kjør `npm run build` (du kan også kjøre `npm run build:dev` om du ønsker å få tilgang til sourcemaps)
2. Kjør `npm run pack`. En .tgz fil med pakken navn og versjon burde dukke opp i mappa `dist`
3. Åpen et annet prosjekt hvor du kan teste nve-designsystem pakken
4. Kjør `npm  i` <nve-designsystem-x.y.z.tgz med full sti>`
5. Importer komponent i prosjektet og sjekk om alt fungerer som det skal

## Test-app for pull requests

Pull requests på komponenter skal også kunne godkjennes av designere. Derfor har vi satt opp en azure static app som kjører test/dokumentasjons-applikasjonen i egne `Preview environments`. Appen bygges og kjøres når man lager en PR.

Det er maks 10 apper som kan kjøres samtidig, så hvis det er flere enn 10 PR'er kan det være at appen ikke bygges. De skal slettes automatisk når en PR lukkes, men det er ikke alltid dette virker. I slike tilfeller må vi slette appene manuelt i Azure-portalen. Appene finner du i ressursgruppe `TEST-Designsystemet-RG`, Resource `nve-designsystem-dok`, menyvalg `Settings/Environments`. Marcin, Øystein, Joel, Fred og Tommy har tilgang til dette.

## Bygge globale css-filer

Når vi har nye design-tokens eller endringer i tokens må vi generere globale css-filer på nytt.
Kjør følgende kommando: `npm run tokenbuild`.
