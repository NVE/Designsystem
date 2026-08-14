---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="name-attributtet og native form-submission" size="compact">
 <p><span class="highlight">nve-radio</span> er ikke bygget med native <span class="highlight">input</span> og <span class="highlight">label</span>. Det er et bevisst valg for å kunne legge <span class="highlight">role="radio"</span> direkte på host-elementet og styre tilgjengeligheten mer presist med <span class="highlight">aria-setsize</span>, <span class="highlight">aria-posinset</span> og <span class="highlight">aria-checked</span>. Les mer i <a href="#tilgjengelighet">tilgjengelighet</a> seksjonen.</p>

<p><span class="highlight">nve-radio-group</span> og <span class="highlight">nve-radio</span> bruker ikke <span class="highlight">name</span>-attributtet slik vanlige HTML-radiofelter gjør. Komponenten støtter ikke native <span class="highlight">form submission</span>, så <span class="highlight">name</span> blir ikke brukt til å sende inn en verdi i et skjema.</p>

<p><span class="highlight">name</span> er heller ikke nødvendig for å gruppere radio-knappene. Gruppelogikken styres av <span class="highlight">nve-radio-group</span>, som sørger for at bare ett alternativ kan være valgt om gangen og emitterer valgt verdi via komponentens <span class="highlight">change</span>-hendelse.</p>

<p>For denne komponenten er det derfor <span class="highlight">value</span> på valgt <span class="highlight">nve-radio</span> og <span class="highlight">change</span>-hendelsen fra <span class="highlight">nve-radio-group</span> som brukes for å lese brukerens valg.</p>
</nve-message-card>

## Eksempler

### Ledetekst

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Toggletip

Bruk sporet <span class="highlight">label-toggletip</span> for å vise en toggletip ved siden av ledeteksten.
Sporet er beregnet for en <a href="../components/nve-toggletip" class="highlight">nve-toggletip</a>-komponent.

Husk å legge til <span class="highlight">aria-label</span> på <span class="highlight">nve-toggletip</span>.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?">
  <nve-toggletip slot="label-toggletip" aria-label="Les mer om tiltaket">
    <span>Ekstra info her.</span>
  </nve-toggletip>
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?" required requiredLabel="Obligatorisk">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Retning

Bruk <span class="highlight">orientation</span> for å velge retning:

- <span class="highlight">vertical</span> er standard og viser radioknappene under hverandre.
- <span class="highlight">horizontal</span> viser radioknappene ved siden av hverandre.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket? (vertical)">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>

<nve-radio-group label="Hva er status på tiltaket? (horizontal)" orientation="horizontal">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Størrelse

Størrelsen styres på gruppenivå. Bruk <span class="highlight">size</span> for å velge størrelse:

- <span class="highlight">small</span>
- <span class="highlight">medium</span> - er standard
- <span class="highlight">large</span>

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket? (small)" size="small">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>

<nve-radio-group label="Hva er status på tiltaket? (medium)">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>

<nve-radio-group label="Hva er status på tiltaket? (large)" size="large">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Hjelptekst

Bruk <span class="highlight">helpText</span> for å vise hjelpetekst over feltet.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?" helpText="Ditt valg påvirker mange!">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Hint-tekst

Bruk <span class="highlight">hint</span> for å vise hint-tekst under feltet.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?" hint="Velg smart. Det finnes ingen vei tilbake fra dårlige valg.">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Deaktivert

Bruk attributtet <span class="highlight">disabled</span> for å hindre at verdien kan endres i hele gruppen. For å deaktivere enkelte radioknapper, bruk <span class="highlight">disabled</span> direkte på dem.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?" disabled>
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk <span class="highlight">value</span> for å vise en forhåndsvalgt verdi. Verdien må samsvare med <span class="highlight">value</span>-attributtet til en av <span class="highlight">nve-radio</span>-komponentene i gruppen.

<CodeExamplePreview>

```html
<nve-radio-group label="Hva er status på tiltaket?" value="current">
  <nve-radio value="planned">Planlagt</nve-radio>
  <nve-radio value="current">Pågående</nve-radio>
  <nve-radio value="done">Ferdigstilt</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

## Validering

For mer informasjon om hvordan <span class="highlight">nve-radio-group</span> og andre skjemakomponenter valideres, se <a href="../introduction/forDevelopers/validation">siden om validering</a>.

### Intern validering

Intern validering gjør det mulig å validere verdien i <span class="highlight">nve-radio-group</span> ved hjelp av valideringsregler.

Valideringsreglene kjøres når du kaller <span class="highlight">validateForm()</span> i skjemaets <span class="highlight">submit</span>-handler.

Du kan importere metoden slik:

```ts
import { validateForm } from 'nve-designsystem/validation/validateForm.js';
```

<CodeExamplePreview>

```html
<form id="test-form" class="form">
  <nve-radio-group id="rdgr" label="Hva er status på tiltaket?">
    <nve-radio value="planned">Planlagt</nve-radio>
    <nve-radio value="current">Pågående</nve-radio>
    <nve-radio value="done">Ferdigstilt</nve-radio>
  </nve-radio-group>

  <nve-button type="submit">Send inn</nve-button>
</form>

<script type="module">
  const form = document.querySelector('#test-form');
  const rdgr = document.querySelector('#rdgr');

  rdgr.validationRules = [(value) => rules.required(value) || 'Feltet er påkrevd'];

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(event);
  });
</script>
```

</CodeExamplePreview>

### Ekstern validering

Bruker du et eksternt valideringssystem, kan du sette komponenten i feiltilstand ved hjelp av <span class="highlight">errorMessage</span>.

<CodeExamplePreview>

```html
<form id="test-form" class="form">
  <nve-radio-group id="rdgr" label="Hva er status på tiltaket?" errorMessage="Feltet er påkrevd">
    <nve-radio value="planned">Planlagt</nve-radio>
    <nve-radio value="current">Pågående</nve-radio>
    <nve-radio value="done">Ferdigstilt</nve-radio>
  </nve-radio-group>

  <nve-button type="submit">Send inn</nve-button>
</form>
```

</CodeExamplePreview>

Du kan fjerne feiltilstanden ved å sette <span class="highlight">errorMessage</span> til en tom streng.

<CodeExamplePreview>

```html
<form id="test-form" class="form">
  <nve-radio-group id="rdgr" label="Hva er status på tiltaket?" errorMessage="">
    <nve-radio value="planned">Planlagt</nve-radio>
    <nve-radio value="current">Pågående</nve-radio>
    <nve-radio value="done">Ferdigstilt</nve-radio>
  </nve-radio-group>

  <nve-button type="submit">Send inn</nve-button>
</form>
```

</CodeExamplePreview>>

```

</CodeExamplePreview>

## Tilgjengelighet

Radiogruppen er implementert i tråd med [anbefalingene](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) i WAI-ARIA Authoring Practices Guide for radiogrupper, for å støtte tilgjengelig bruk i samsvar med WCAG.

- Siden radiogruppen er bygget med <span class="highlight">fieldset</span> og <span class="highlight">legend</span>, kan den første radioknappen som får fokus ved tab-navigasjon lese opp ledeteksten sammen med eventuell tilleggstekst fra <span class="highlight">helpText</span>, <span class="highlight">hint</span> og <span class="highlight">errorMessage</span>. Tillegsteksten legges til i <span class="highlight">aria-describedby</span> på <span class="highlight">fieldset</span>. (VoiceOver i Safari på macOS kan slite litt med <span class="highlight">aria-describedby</span> og ikke lese den).
- <span class="highlight">nve-radio</span> har intern tilstand for <span class="highlight">checked</span>, <span class="highlight">pos</span> og <span class="highlight">setsize</span>, som styres av <span class="highlight">nve-radio-group</span>. Disse brukes til å sette riktige ARIA-attributter (<span class="highlight">aria-checked</span> <span class="highlight">aria-posinset</span>,<span class="highlight">aria-setsize</span>) på radio-knappen.
- <span class="highlight">aria-posinset</span> og <span class="highlight">aria-setsize</span> brukes for å fortelle brukeren hvor i gruppen den aktuelle radio-knappen ligger, og hvor mange valg som finnes totalt.
- <span class="highlight">aria-disabled</span> og <span class="highlight">aria-invalid</span> settes på <span class="highlight">nve-radio</span> basert på egenskapene <span class="highlight">disabled</span> og <span class="highlight">invalid</span>.
```
