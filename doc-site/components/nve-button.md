---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-button>NVE-knappen</nve-button>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Info" size="compact">
<p><span class="highlight">nve-button</span> støtter nesten alle egenskaper fra en native HTML-knapp.</p>

<p>Det er likevel enkelte attributter som per i dag ikke støttes:</p>
<ul>
<li><span class="highlight">command</span></li>
<li><span class="highlight">commandfor</span></li>
<li><span class="highlight">popovertarget</span></li>
<li><span class="highlight">popovertargetaction</span></li>
</ul>

<p>Disse er foreløpig ikke implementert fordi de krever en referanse (ID) til et element som skal styres. Når vi bruker Shadow DOM, er det ikke mulig å referere direkte til elementer utenfor komponentens egen shadow root på en robust måte. Den interne knappen i <span class="highlight">nve-button</span> kan derfor ikke på en trygg og enkel måte vite hvilken popover eller hvilket mål den skal styre.</p>

<p>For å få dette til måtte vi ha traversert hele DOM-treet for å finne riktig element basert på ID. Det virker lite effektivt, og vi har derfor valgt å ikke støtte disse attributtene inntil vi kan tilby en løsning som både er ytelseseffektiv og vedlikeholdbar.</p>
</nve-message-card>

## Retningslinjer

- Vi skal tydelig beskrive handlingene knappene utfører. En knapp kan bare ha en handling, ikke flere.

- Vi skal holde oss til ett ikon per knapp.

- Primærknappen skal alltid være venstrestilt, men når det er i trinnvis eller modal skal primærknapp ligge på høyre side.

- Vi skal holde oss til én primærknapp per side. Hvis det er flere hovedhandlinger kan brukerne bli usikre på hva de skal gjøre.

- Når bredden går over til mobil skal knappene alltid gå til full bredde. Dette er for å øke klikkflate.

- Knappetekst skal alltid begynne med stor forbokstav, etterfulgt av små bokstaver..

- Størrelsen <span class="highlight">small</span> er tilgjengelig for bruk i tabeller eller interne løsninger. Den bør brukes sparsomt da klikkflaten kan være problematisk, spesielt på mobil.

## Eksempler

### Variant

Bruk <span class="highlight">variant</span> for å styre farger. <span class="highlight">secondary</span> er standard og trenger ikke spesifiseres.

<CodeExamplePreview>

```html
<nve-button variant="primary">Primary</nve-button>
<nve-button>Secondary</nve-button>
<nve-button variant="tertiary">Tertiary</nve-button>
<nve-button variant="ghost">Ghost</nve-button>
<nve-button variant="danger">Danger</nve-button>
```

</CodeExamplePreview>

### Størrelse

Bruk <span class="highlight">size</span> for å endre størrelse. <span class="highlight">medium</span> er standard.

<CodeExamplePreview>

```html
<nve-button size="large">Large</nve-button>
<nve-button>Medium</nve-button>
<nve-button size="small">Small</nve-button>
```

</CodeExamplePreview>

### Deaktivert

Bruk <span class="highlight">disabled</span> for å deaktivere knappen.

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p><b>Disabled</b> bør brukes med måte, ettersom deaktiverte kontroller kan være vanskelige for noen brukere å forstå 
eller oppdage, særlig for dem som bruker hjelpemiddelteknologi. Når det er mulig, bør man vurdere å la knappen være aktiv 
og heller gi tydelig veiledning eller valideringsmeldinger som forklarer hva som må gjøres før handlingen kan fullføres.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-button disabled>Deaktivert</nve-button>
```

</CodeExamplePreview>

### Start og end spor

Bruk <span class="highlight">start</span> og <span class="highlight">end</span> spor for å legge til ikoner.

<CodeExamplePreview>

```html
<nve-button><nve-icon slot="start" name="house"></nve-icon>Varsel</nve-button>
<nve-button><nve-icon slot="end" name="warning"></nve-icon>Varsel</nve-button>
```

</CodeExamplePreview>

### Loading

Bruk <span class="highlight">loading</span> for å legge til ei snurre. Knappen med <span class="highlight">loading</span> kan ikke klikkes.
Når knappen går inn i en lastetilstand, skjules slot-end-ikonet for å unngå visuell støy og at flere ikoner vises samtidig.

<nve-message-card variant="primary" label="Tips!" size="compact">
<p>Knapp med <span class="highlight">loading</span> kan ikke klikkes på.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-button loading>Loading</nve-button>
```

</CodeExamplePreview>

### Kun ikon

Legg <span class="highlight">nve-icon</span> i standardsporet for å få knapper med kun ikon.
Man kan fortsatt bruke <span class="highlight">loading</span>-attributtet for å vise kun en spinner.

<nve-message-card variant="warning" label="Les om tilgjengelighet i knapper med kun ikon!" size="compact">
<p>Knapper med kun ikon trenger et tilgjengelig navn slik at skjermleserbrukere forstår hva knappen gjør. Les mer i <a href="#kun-ikon-knapper">aria-label seksjonen</a>.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-button size="large" variant="primary"><nve-icon name="house"></nve-icon></nve-button>
<nve-button><nve-icon name="house"></nve-icon></nve-button>
<nve-button size="small" variant="ghost"><nve-icon name="house"></nve-icon></nve-button>
<nve-button loading><nve-icon name="house"></nve-icon></nve-button>
```

</CodeExamplePreview>

Knapp med bare ikon kan også gjøres runde ved å bruk <span class="highlight">circle</span>.

<CodeExamplePreview>

```html
<nve-button circle><nve-icon name="more_vert"></nve-button>
```

</CodeExamplePreview>

### Ikon farge

Du kan bruke css-variable for å styre farge på ikoner:

- <span class="highlight">--nve-icon-color</span> CSS-egenskapen for
  vanlig farge,
- <span class="highlight">--nve-icon-color-hover</span> for hover
- <span class="highlight">--nve-icon-color-pressed</span> for klikk.

<CodeExamplePreview>

```html
<nve-button style="--nve-icon-color: red; --nve-icon-color-hover: orange; --nve-icon-color-pressed:brown"
  ><nve-icon name="house"></nve-icon
></nve-button>
<nve-button style="--nve-icon-color: red"><nve-icon name="house"></nve-icon></nve-button>
```

</CodeExamplePreview>

### Lenkeknapp

Hvis <span class="highlight">href</span>-attributtet er satt, rendres knappen som et <span class="highlight">a</span>-element i stedet for <span class="highlight">button</span>. Dette gjør at komponenten vil oppføre seg som en lenke, samtidig som den beholder det visuelle uttrykket til en knapp. Lenkeknapper kan også ta imot vanlige <span class="highlight">a</span>-attributter som <span class="highlight">download</span>, <span class="highlight">hreflang</span>, <span class="highlight">referrerpolicy</span>, <span class="highlight">rel</span> og <span class="highlight">target</span>.

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p>Hvis du vil vise en deaktivert lenkeknapp, ikke bruk <span class="highlight">disabled</span>. Det ikke fungere. Bruk tom <span class="highlight">href</span>-attributtet i stedet.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-button href="https://www.nve.no/" target="_blank">Gå til NVE</nve-button>
```

</CodeExamplePreview>

### Knapp i et skjema

Når knappen plasseres i et skjema, kan den brukes til å sende inn skjemaet ved å sette <span class="highlight">type</span> til <span class="highlight">submit</span>. Den støtter vanlige skjemaattributter som <span class="highlight">form</span>, <span class="highlight">formAction</span>, <span class="highlight">formEnctype</span>, <span class="highlight">formMethod</span>, <span class="highlight">formNoValidate</span>, <span class="highlight">formTarget</span> og <span class="highlight">name</span>.

Ved å bruke <span class="highlight">form</span>-attributtet trenger ikke knappen å være plassert inne i selve form-elementet for å kunne sende inn skjemaet.

<nve-message-card label="Submit-håndtering i nve-button" size="compact">
<p>Når <b>nve-button</b> brukes som en submit-knapp, opprettes en native knapp i light DOM for å trigge skjemainnsending korrekt. Dette er nødvendig fordi komponentens interne knapp ligger i Shadow DOM, noe som hindrer nettleserens innebygde skjemelogikk i å automatisk oppdage og koble den til skjemaet. Ved å opprette en usynlig native knapp i light DOM kan komponenten delta riktig i nettleserens innebygde mekanisme for skjemainnsending, slik at hendelser, validering og innsending fungerer som forventet. Light DOM knapp fjernes med en gang etter den har blitt klikket.</p>
</nve-message-card>

## Tilgjengelighet

Alle ARIA-attributter beskrevet under kan brukes direkte på <span class="highlight">nve-button</span> lowercased. Komponentet videresender dem til det underliggende native knappeelementet i Shadow DOM, slik at de tolkes korrekt av skjermlesere.

### Kun ikon knapper

Når man bruker knapper med kun ikon, er det viktig å gi dem et tilgjengelig navn slik at skjermleserbrukere forstår hva knappen gjør. Dette gjøres vanligvis ved hjelp av <span class="highlight">aria-label</span> eller <span class="highlight">title</span>.

Å bruke både <span class="highlight">aria-label</span> og <span class="highlight">title</span> samtidig kan imidlertid gi en dårlig brukeropplevelse. Noen skjermlesere leser opp begge attributtene, noe som fører til dupliserte eller gjentakende opplesninger, som kan være irriterende og forvirrende for brukerne.

Samtidig er det ikke tilstrekkelig å kun bruke <span class="highlight">title</span>. Noen skjermlesere leser ikke <span class="highlight">title</span>-attributtet konsekvent, noe som kan føre til at knappen mangler et pålitelig tilgjengelig navn.

Det er også viktig å merke seg at <span class="highlight">aria-label</span> ikke er synlig for seende brukere. I motsetning til title vises det ikke som en tooltip ved hover. Det betyr at hvis <span class="highlight">title</span> utelates, vil det ikke finnes noen visuell indikasjon på hva knappen gjør, med mindre man tilbyr annen UI (for eksempel en tooltip).

I praksis bør <span class="highlight">aria-label</span> brukes for å sikre tilgjengelighet for skjermlesere, mens synlige etiketter eller egne tooltips (som [nve-tooltip](./nve-tooltip.md)) bør vurderes for å støtte seende brukere. Unngå å kombinere <span class="highlight">aria-label</span> og <span class="highlight">title</span> med mindre det finnes en tydelig og bevisst grunn til det.

Riktig bruk av <span class="highlight">aria-label</span>:

<CodeExamplePreview>

```html
<nve-button aria-label="Hjemmesiden"><nve-icon name="house"></nve-icon></nve-button>
```

</CodeExamplePreview>

### Toggle knapp

Ved a legge til <span class="highlight">aria-pressed</span>-attributet gjør man knappen om til en toggle knapp. Les mer om [aria-pressed her](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed).

### Knapper som styrer synligheten av innhold

For slike knapper, er <span class="highlight">aria-expanded</span> det viktigste attributtet å inkludere. Det formidler gjeldende tilstand (utvidet eller kollapset) til hjelpemiddelteknologi, slik at skjermleserbrukere kan forstå om ekstra innhold er synlig. Dette er spesielt viktig for komponenter som akkordeoner, nedtrekksmenyer og utvidbare paneler/popovers.

Selv om <span class="highlight">aria-controls</span> også kan brukes for å indikere hvilket element som styres, er det mindre kritisk i praksis. Støtten for <span class="highlight">aria-controls</span> er inkonsekvent på tvers av skjermlesere, og mange utnytter det ikke på en meningsfull måte. I oppsett som bruker Shadow DOM, er det ikke pålitelig å referere til elementer med ID på tvers av grensen, siden ID-er ikke passerer gjennom shadow root. Dette betyr at selv om <span class="highlight">aria-controls</span> er satt, kan det hende det ikke fungerer som forventet.

Av den grunn bør <span class="highlight">aria-expanded</span> regnes som det primære og viktigste attributtet for å formidle tilstandsendringer. Det gir tydelig og pålitelig tilbakemelding til brukere av hjelpemiddelteknologi, selv når relasjoner som <span class="highlight">aria-controls</span> ikke kan etableres fullt ut.

### Arias som ikke støttes

På grunn av behovet for eksterne element-ID-er støttes heller ikke <span class="highlight">aria-labelledby</span> og <span class="highlight">aria-describedby</span>.
