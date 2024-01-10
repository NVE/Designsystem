# NVE Designsystem

Dette repository inneholder css generert fra Figma-tokens og komponentbibliotek basert på Shoelace [( Shoelace dokumentasjon)](https://shoelace.style/).
[Lenke til npm-pakke.](https://www.npmjs.com/package/nve-designsystem)

## Skal du bruke NVE designsystem? Denne seksjonen er for deg.

### Api-dokumentasjon

[Her er dokumentasjon på hver komponent](./doc/components.md)

### **Oppsett i Vue**

1. Install pakke med `npm i nve-designsystem`.

2. I vite.config (lagre en ny fil hvis den ikke eksisterer i rot-mappe), legg inn isCustomElement som forteller Vue at det er en customElement, og dropp component resolution [(les mer her)](https://vuejs.org/guide/extras/web-components.html).

```js
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('nve-'),
        },
      },
    }),
  ],
});
```

3. I tillegg trenger du å importere en .css-fil for farge-tema i main.ts. Filene finnes i mappa `nve-designsystem/build/css/`. For NVE-tema, bruk:

```ts
import 'nve-designsystem/dist/css/nve.css';
```

For Varsom-tema, bruk:

```ts
import 'nve-designsystem/dist/css/varsom.css';
```

Du har også mulighet til å velge enten lyst eller mørkt tema. Lyst er standard.

### **Eksempel på bruk av komponent**

```html
<template>
  <nve-button variant="primary" size="small" @click="send">Button</nve-button>
</template>
<script setup lang="ts">
  import { NveButton } from 'nve-designsystem';
</script>
```

Husk å alltid bruke både opening og closing tag individuelt, (`<nve-button />` fungerer ikke).

### **Storybook**

Komponentene kan ses og testes i Storybook med ulike parametere og varianter: https://main--65322c4ee3062d1c117bb2d5.chromatic.com/

### **Validering av komponentene**

Noen komponenter brukt i formen tilbyr validering. Shoelace tilbyr kun [constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) (kortsagt du lar nettleseren validere for deg basert på hvilke attributer som blir med) validering på noen av sine komponenter. Constraint validation fungerer i enkle validering scenario hvor i mer avansert tilfeller det kan være litt ufordrende. Derfor har vi laget `isvalid` property i tillegg som tar kun boolske verdier, hvor utviklere bestemmer selv hva som er gyldig eller ikke, og kun sender boolske verdi til en komponent for å få 'invalid' style på en komponent. Viktig å nevne er at constraint validation viser kun den første feilen den møter på submit. Så hvis det er flere feil, de skal vises etter den første ble fikset (f.eks. både input 1 og input 2 er feil, men feil i input 2 vises ikke hvis input 1 feil ikke er rettet opp).
I validering med isvalid property, styling endrer seg ikke på blur, eller onchange automatisk (i motsatt til constraint validering) så det er utvikler som må sørge at riktige validering metoder sendes i forskjellige scenario (onblur, onchange, onclick osv).

I både constraint validation og validering med 'isvalid' må man huske om å bruke `errorMessage` property så at bruker får en
riktig beskjed på hva som feiler. Samtidig hvis man bruker flere attributer med constraint validation (altså f.eks. både required og pattern) kan man ha kun en errorMessage med mindre man justerer det selv (man kan f.eks. ta i bruk [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) og sender en riktig errorMessage basert på hva slags feil man fikk som valueMissing eller patternMismatch osv.).

Hvis noen av komponenter feiler, emiter de `sl-invalid` event som kan lytes på hvis man trenger å legge til noe funksjonalitet i tillegg.
Ifølge shoelace dokumentasjon formen også burde emite `sl-invalid` hvis noen av feltene feiler, men det er ikke veldig pålitelig (testet i vue appen), så det er kanskje bedre å basere seg på `sl-invalid` på enkelte komponenter.

Komponenter som kan valideres med både constraint validation og `isvalid` property per i dag er:

- nve-input
- nve-radio-group som bruker kun required attribute fra constratin validation (enkelte radio knapper valideres ikke, må være innen nve-radio-group)
- nve-checkbox-group som bruker kun required attribute fra constratin validation (enkelte sjekkbokser valideres ikke må være innen nve-checkbox-group)

NB! Det anbefales og bruke en av alternativene, men det er selvfølgelig mulig å blande.
NB! Constraint validation kjøres kun på submit event så det er viktig at den står innen `<form>` som emitter `submit` event

Eksempel på bruk av `isvalid` property i Vue appen:

```html
<template>
  <form @submit.prevent="submit">
    <nve-input
      :isvalid="validation.isValid"
      :errorMessage="validation.errorMessage"
      :value="validation.inputValue"
      @input="validation.inputValue = $event.target.value"
    ></nve-input>
    <nve-button type="submit">submit</nve-button>
  </form>
</template>

<script>
  const validation = reactive({
    inputValue: '',
    isValid: true,
    errorMessage: '',
  });
  const submit = () => {
    validateInput();
  };

  const validateInput = () => {
    if (!validation.inputValue) {
      validation.isValid = false;
      validation.errorMessage = 'Input is required.';
    } else if (validation.inputValue.length < 20) {
      validation.isValid = false;
      validation.errorMessage = 'Input should be more than 20 characters.';
    } else {
      validation.isValid = true;
      validation.errorMessage = '';
    }
  };
</script>
```

## Skal du utvikle NVE designsystem? Denne seksjonen er for deg.

De fleste komponentene bygger på [Shoelace](https://shoelace.style/), men er tilpasset NVE Designsystem. Etterhvert vil de fleste Shoelace-komponenter få sin NVE-variant, men vi kommer også til å lage komponenter som ikke baseres på Shoelace. Vi anbefaler at du laster ned [kildekoden til Shoelace](https://github.com/shoelace-style/shoelace) og setter deg inn i [Lit](https://lit.dev/), som vi bruker som rammeverk.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### **Mappe struktur**

Ved å lage en ny komponent opprett en mappe under src/components med komponent navn. Fil som inneholder selve komponent burde ha

- .component.ts suffiks på fil sin inneholder selve komponent f.eks. /components/nve-component/nve-component.component
- .styles.ts på filer med styling f.eks. /components/nve-component/nve-component.styles.ts
- .demo.ts på filer som skal demonstrere komponent (til utviklere) f.eks. /components/nve-component/nve-component.demo.ts

### **Hvordan vi bygger komponenter**

Vi setter reflect: true på alle properties i komponenter (se eksempel under) for å kunne se properties som oppdateres i DOMen. Gjelder reaktive applikasjoner.

```js
@property({ reflect: true }) title: string = '';
```

### **Komponent eksport**

Komponenter skal eksponeres i src/index.ts fila med

```js
export { default as NveComponent } from './components/nve-component/nve-component.component';
```

### **Styling**

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

### **Typografi**

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

### **Validering av komponentene**

Shoelace tilbyr [constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) som vi også
bruker her. Les gjerne shoelace dokumentasjon på [form validering](https://shoelace.style/getting-started/form-controls).

Du kan bestemme selv om hvilken property skal definere 'invalid' state i komponenten. De fleste shoelace komponenter baserer seg på data-invalid og data-user-invalid property likevel. Så langt brukte vi data-user-invalid (vises når bruker har tatt på input feltet ikke med en gang som data-invalid) på input feltene som indikator at staten burde endres på alle input feltene, ellers lagde vi vår egen `invalid` togglable property på barna komponenter i nve-radio-group og nve-checkbox-group (selve radio og sjekkboks komponent har ikke noe property som indikerer at de ikke er gyldige fordi det er nve-\*-gruppe komponent som valideres, derfor brukte vi 'invalid' her. Det var også mye enklere å style de med dette property).

Vi ville også at utvikler har mulighet til å droppe constraint validation hvis man ikke føler at det er nok, og bruke `isvalid`
property istedenfor. Den tar kun boolske verdier selv om den er definert som string

```js
@property({ type: String, reflect: true }) isvalid?: string;
```

Grunnen til det er at alle attributer/properties i DOMen er av type string. Lit tilbyr type kasting med `type: Boolean` men den brukes kun når property skal vises (true) i DOMen eller ikke (false).
På 'isvalid' var det viktig for oss at kun `true` og `false` vises derfor valgte vi å bruke `type: String`. Kan være at det finnes en bedre måte å gjøre det på, men det har vi ikke utforsket enda. `isvalid` skal gi utviklere akkurat det samme UX og UI opplevelse som constraint validation derfor vi må sikre at den emiter `sl-invalid` (som deretter setter data-user-invalid i DOMen) event og at alt komponent stylinga endres på samme måte.
Komponenter som har validering på plass per i dag er:

- nve-input
- nve-radio-group (vi validerer ikke enkelte radio knapper)
- nve-checkbox-group (vi validerer ikke enkelte checkboxer, men shoelace lar deg gjøre det med `required` property)

Komponenter som ikke eksisterer enda men som vil sikkert trenge validering er:

- textarea
- select

Komponenter som kanskje trenger validering er:

- range
- switch

### **Mapping av shoelace tokes til NVE-tokens**

Det hadde vært fint om vi kunne sette en NVE-verdi for alle Shoelace-tokens. Men dette går ikke fordi strukturen i Shoelace og NVE Designsystem er forskjellig.
Vi har satt NVE-verdier for en del Shoelace-tokens, og disse ligger i global.css.
Foreslå gjerne flere Shoelace-tokens som kan mappes på denne måten.

Vi trenger ikke å style:

- fokus-tilstand på alle komponenter. Dette settes globalt
- høyde på input-felter, knapper og select
- border-radius på alle komponenter (med mindre border radius mangler på en Shoelace-komponent, men designsystemet spesifiserer border-radius)
- bakgrunn, font-farge, font-størrelse, ikon-farge, ramme i input, select og textarea i både variantene filled og not filled

### **Test-app for designere når man lager en PR**

Pull requests på komponenter skal godkjennes av designere. Derfor har vi satt opp en azure static app med Storybook. Denne bygges og kjøres når man lager en PR.

Det er maks 10 apper som kan kjøres samtidig, så hvis det er flere enn 10 PR'er kan det være at appen ikke bygges. De skal slettes automatisk når en PR lukkes, men det er ikke alltid dette virker. I slike tilfeller må vi slette appene manuelt i Azure-portalen. Appene ligger i denne ressursgruppa: TEST-Designsystemet-RG.

### Dokumentasjon

- Vi dokumenterer på norsk
- Alle komponenter dokumenteres med JsDoc-tags i koden. Alt som er tilgjengelig for de som bruker komponentene skal dokumenteres, dvs. alle public klasser, interfaces, properties/attributter, metoder, events, slots, css-parts og css-properties. [Her er noen tips.](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc)
  Vi bruker [Web Component Analyzer](https://github.com/runem/web-component-analyzer) til å generere API-dokumentasjon.
- Generer .MD-filer med `npm run doc` og sjekk inn de genererte filene sammen med koden. Om du har laget nye komponenter, legg dem til i [denne lista](./doc/components.md).

### **Bygge css**

For å bygge css filer som inneholder verdier basert på tokens fra Figma, kjør følgende kommando: "npm run tokenbuild." <br>

### **npm**

Publisering til npm skjer ved hjelp av Github actions. Når man pusher til main branch, starter det en workflow som oppdaterer versjonsnummer og publiserer npm-pakke. Workflow er spesifisert i filen .github/workflows/npm-publish.yml.

### **Kjøremiljø**

Prosjektet importerer Shoelace sin npm-pakke. Kjør `npm run dev` for utvikling.
For å teste en komponent i main.ts må man huske å legge til script tag med komponenten i index.html fila som f.eks. <script type="module" src="/src/nve-button.ts"></script>

### **Test pakke lokalt**

Før man pusher til main er det lurt å teste pakke lokalt. Med `npm run pack` kan man teste hvordan pakken oppfører seg akkurat på samme måte som etter publisering. For å teste en nve-designsystem pakke lokalt:

1. Kjør `npm run build`
2. Kjør `npm run pack`. En .tgz fil med pakken navn og versjon burde dukke opp i dist mappe
3. Åpen et annet prosjekt hvor du kan teste nve-designsystem pakken
4. Kjør `npm  i` <nve-designsystem-x.y.z.tgz med full sti>`
5. Importer komponent i prosjektet og sjekk om alt fungerer som det burde

NB! Vi lager pakken i dist mappe fordi det er enklere å strukturere hvordan pakken skal se ut når man laster den ned. Vi prøvde med `exports` og `files` i package.json men det ga oss ikke result vi var fornøyd med.

### Storybook

For å kjøre Storybook lokalt, kjør `npm run storybook`

Det skal opprettes en story for hver nye komponent som lages. Story opprettes på følgende måte: <br>

<ul>
<li>Opprett en mappe for komponenten i mappen stories</li>
<li>Opprett en fil med filnavn "NavnPåKomponent.stories.ts." F.eks. NveButton.stories.ts.</li>
<li>Se på eksisterende stories-filer og bruk samme oppsett </li>
<li>Storbyook lager toggle-buttons for boolean verdier. For dropdown-meny må man selv definere alternativene </li>
<li>Komponent-filen, f.eks. NavnPåKomponent.ts må eksportere props. Se eksisterende filer for eksempel (export interface NavnPåKomponentProps)</li>
<li>Minimum et eksempel på komponent må opprettes og eksporteres i stories-filen, f.eks. "export const Primary..." for Primary-vaiant av NveButton</li>
<li>Informasjon om komponenten (fra Figma og ev. ekstra info) kan legges inn i stories-files under parameters -> docs --> description -->  component</li>
</ul>

For å publisere Storybook på Chromatic, kjør `npm run build; npm run build-storybook`. Deretter må det kjøres en kommando med project token fra Chromatic: `npx chromatic --project-token=\<project-token\>`
