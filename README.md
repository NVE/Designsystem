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

HUSK! at for å få komponent validert med constraint validation den må stå innen `<form>` fordi validering kjører når `submit` event trigges!

Noen komponenter brukt i formen tilbyr validering. Det blir:

- <b>nve-input</b>
- <b>nve-radio-group</b> støtter kun `required` attribute fra constratin validation (enkelte radio knapper valideres ikke, må være innen nve-radio-group), resten må gjennom custom validering (les videre)
- <b>nve-checkbox-group</b> støtter kun `required` attribute fra constratin validation, resten må gjennom vustom validering (les videre)

Det finnes to måter å validere som støttes:

- <b>[Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)</b> kortsagt nettleseren validerer formen selv basert på hvilke attributer som blir med på komponenten. Det er en enkel måte å validere, hvis input feltene ikke krever avansert validering.<br> Viktig å nevne er at når constraint validation brukes, man må ha `errorMessage` property ellers så får man default validering melding, som ikke må være i et språk appen bruker. Vil du ha flere validerings
  attributer (required, pattern, min ,max) må du huske at det er kun en `errorMessage` som skal vises. Hvis du vil tilpasse
  feilmeldinger til attribute som feilet må du gjøre det selv - sjekk [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState). <br>Constraint validation kaster feil på den
  første ugyldig feltet den møter. Altså resten av feiler (hvis det finnes) på andre feltene skal ikke vises, med mindre man trykker på submit knapp igjen. Det kan eventulet fikses manuelt hvis man ønsker det.

- <b>Custom validering</b> Alle nevnte komponenter kan valideres på en custom måte med setCustomValidity() metoden. Det anbefales til å bruke hvis du vil dekke krav som constraint validation ikke tilbyr.
  <br>Hvordan man gjør det kan du finne i `demo` filer av øverst nevnte komponenter. Her er et eksempel på hvordan man kan bruke input validering i Vue appen:

```html
<template>
  <form @submit.prevent="validate">
    <nve-input
      ref="inputComponent"
      :value="myInputValue"
      @input="myInputValue = $event.target.value"
      label="Svaret på livet, universet og alt"
      @sl-blur="validate"
    >
    </nve-input>
    <nve-input
      ref="inputComponent2"
      :value="myInputValue2"
      @input="myInputValue2 = $event.target.value"
      label="Svaret på livet, universet og alt"
      @sl-blur="validate"
    >
    </nve-input>
    <nve-button type="submit">Submit</nve-button>
  </form>
</template>
<script>
  const inputComponent = ref<HTMLInputElement| null>();
  const inputComponent2 = ref<HTMLInputElement| null>();
  const inputValue = ref('');
  const inputValue2 = ref('');

  const validate = () => {
    const inputElement = inputComponent.value;
    const inputElement2 = inputComponent2.value;
    if (!inputElement || !inputElement2) return;

    if (!inputValue.value) {
      inputElement.setCustomValidity('Kan ikke være tom');
    } else if (inputValue.value < 42) {
      inputElement.setCustomValidity('Må være mer enn 42');
    } else {
      inputElement.setCustomValidity('');
    }
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (!uppercaseRegex.test(inputValue2.value)) {
      inputElement2.setCustomValidity('Må ha minst en stor bokstav');
    }
    if (!specialCharRegex.test(inputValue2.value)) {
      inputElement2.setCustomValidity('Må ha minst en spesiell tegn');
    } else {
      inputElement2.setCustomValidity('');
    }
  };
</script>
```

En annen eksempel på hvordan å validere sjekkboks grupper i Vue appen:

```html
<template>
  <form @submit.prevent="validate">
    <nve-checkbox-group ref="chGrComponent" size="small" label="Label">
      <nve-checkbox @sl-change="showEvent" v-for="item in arr" :key="item" :value="item">{{ item }}</nve-checkbox>
    </nve-checkbox-group>
    <nve-button type="submit">Sjekk svaret</nve-button>
  </form>
</template>

<script>
  const chGrComponent = ref<HTMLInputElement| null>();
  const arr = reactive(['1', '2']);
  const checked = reactive([]);

  const showEvent = (e) => {
    if (e.target.checked) {
      checked.push(e.target.value);
    } else {
      const indexToRemove = checked.findIndex((element) => element === e.target.value);
      if (indexToRemove !== -1) {
        checked.splice(indexToRemove, 1);
      }
    }
  };

  const validate = () => {
    if (chGrComponent.value) {
      if (!checked.length) {
        chGrComponent.value.setCustomValidity('Må velge minst en');
      } else if (!checked.includes('1')) {
        chGrComponent.value.setCustomValidity('Du må velge 1');
      } else {
        chGrComponent.value.setCustomValidity('');
      }
    }
  };
</script>
```

Hvis noen av komponenter feiler, emiter de `sl-invalid` event som kan lytes på hvis man trenger å legge til noe ekstra funksjonalitet.
Ifølge shoelace dokumentasjon formen også burde emite `sl-invalid` hvis noen av feltene feiler, men det er ikke veldig pålitelig (testet i Vue appen) og man burde teste det grundig.

NB! Det anbefales og bruke en av alternativene. Blanding ikke støttes per i dag og en uforventet oppførsel kan oppstå.

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

Shoelace støtter både [constraint](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) og custom validering. Les gjerne shoelace dokumentasjon på [form validering](https://shoelace.style/getting-started/form-controls).

De fleste shoelace komponenter baserer seg på data-invalid og data-user-invalid property. Så langt brukte vi data-user-invalid (vises når bruker har tatt på input feltet ikke med en gang som data-invalid) på input feltene som indikator at staten burde endres på alle input feltene. I grupper baserer vi oss på data-invalid property fordi alle elementer i en gruppe skal ha ugyldig state, selv om kun en ble tatt på. Sjekkboks gruppe eksisterer ikke i shoelace, derfor komponenten tilpasses til det som shoelace gjør (fake setCustomValidity metode på gruppe element for enklere validering, og toggle av data-valid, data-invalid attributer).

Det er viktig at vi støtter både constraint og custom validering og viser feil på samme måte. Du kan se hvordan det er gjort i eksisterende komponenter som input, radio-group, checkbox-group, og at styling fungerer lik i begge deler.

Lager du en ny komponent som shoelace ikke tilbyr som skal valideres, husk å emite sl-invalid for å være konsekvent.

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
