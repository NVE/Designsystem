---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="name-attributtet og native form-submission" size="compact">
 <p><span class="highlight">nve-segment</span> er ikke bygget med native <span class="highlight">input</span> og <span class="highlight">label</span>. Det er et bevisst valg for å kunne legge <span class="highlight">role="radio"</span> direkte på host-elementet og styre tilgjengeligheten mer presist med <span class="highlight">aria-setsize</span>, <span class="highlight">aria-posinset</span> og <span class="highlight">aria-checked</span>. Les mer i <a href="#tilgjengelighet">tilgjengelighet</a> seksjonen.</p>

<p><span class="highlight">nve-segment-group</span> og <span class="highlight">nve-segment</span> bruker ikke <span class="highlight">name</span>-attributtet slik vanlige HTML-radiofelter gjør. Komponenten støtter ikke native <span class="highlight">form submission</span>, så <span class="highlight">name</span> blir ikke brukt til å sende inn en verdi i et skjema.</p>

<p><span class="highlight">name</span> er heller ikke nødvendig for å gruppere radio-knappene. Gruppelogikken styres av <span class="highlight">nve-segment-group</span>, som sørger for at bare ett alternativ kan være valgt om gangen og emitterer valgt verdi via komponentens <span class="highlight">change</span>-hendelse.</p>

<p>For denne komponenten er det derfor <span class="highlight">value</span> på valgt <span class="highlight">nve-segment</span> og <span class="highlight">change</span>-hendelsen fra <span class="highlight">nve-segment-group</span> som brukes for å lese brukerens valg.</p>
</nve-message-card>

## Retningslinjer

<span class="highlight">nve-segment-group</span> brukes når brukeren skal velge ett alternativ fra en liten gruppe gjensidig utelukkende valg.

Komponenten fungerer semantisk som en radiogruppe og passer godt til for eksempel visningsmodus, periode eller andre innstillinger der kun ett alternativ kan være aktivt om gangen.

Bruk <span class="highlight">nve-segment-group</span> når:

- det finnes et lite antall alternativer
- kun ett alternativ kan være valgt om gangen
- alternativene har omtrent samme betydning og viktighet
- alle alternativene bør være synlige samtidig

<span class="highlight">nve-segment-group</span> skal ikke brukes som faner. Segmenter representerer et valg av verdi, mens faner brukes til å navigere mellom ulike innholdsområder. Bruk en egen <a href="./nve-tab">tab-komponent</a> når valget styrer hvilket innholdspanel som vises.

Unngå segmentgruppen dersom det finnes mange alternativer eller alternativene inneholder mye tekst. I slike tilfeller vil en vanlig radiogruppe ofte være enklere å lese og bruke.

## Eksempler

### Ledetekst

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Toggletip

Bruk sporet <span class="highlight">label-toggletip</span> for å vise en toggletip ved siden av ledeteksten.
Sporet er beregnet for en <a href="../components/nve-toggletip" class="highlight">nve-toggletip</a>-komponent.

Husk å legge til <span class="highlight">aria-label</span> på <span class="highlight">nve-toggletip</span>.

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?">
  <nve-toggletip slot="label-toggletip" aria-label="Les mer om tiltaket">
    <span>Ekstra info her.</span>
  </nve-toggletip>
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" required requiredLabel="Obligatorisk">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Hjelptekst

Bruk <span class="highlight">helpText</span> for å vise hjelpetekst over feltet.

<CodeExamplePreview>

```html
<nve-segment-group size="small" label="Hvilken gjenstand bruker du mest på jobb?" helpText="Ditt valg påvirker mange!">
  <nve-segment value="computer"><nve-icon slot="start" name="computer"></nve-icon>Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Hint-tekst

Bruk <span class="highlight">hint</span> for å vise hint-tekst under feltet.

<CodeExamplePreview>

```html
<nve-segment-group
  label="Hvilken gjenstand bruker du mest på jobb?"
  hint="Velg smart. Det finnes ingen vei tilbake fra dårlige valg."
>
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Størrelse

Størrelsen styres på gruppenivå. Bruk <span class="highlight">size</span> for å velge størrelse:

- <span class="highlight">small</span>
- <span class="highlight">medium</span> - er standard
- <span class="highlight">large</span>

<CodeExamplePreview>

```html
<nve-segment-group size="small" label="Hvilken gjenstand bruker du mest på jobb? (small)">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>

<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb? (medium)">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>

<nve-segment-group size="large" label="Hvilken gjenstand bruker du mest på jobb? (large)">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Rammestil

Segmentene i gruppen kan vises med avrundede kanter på de ytterste segmentene. Bruk <span class="highlight">pill</span>-attributtet på <span class="highlight">nve-segment-group</span> for å aktivere denne stilen.

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" pill>
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Deaktivert

Bruk attributtet <span class="highlight">disabled</span> for å hindre at verdien kan endres i hele gruppen. For å deaktivere enkelte segmenter, bruk <span class="highlight">disabled</span> direkte på dem.

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p><b>Disabled</b> bør brukes med måte, ettersom deaktiverte kontroller kan være vanskelige for noen brukere å forstå 
eller oppdage, særlig for dem som bruker hjelpemiddelteknologi. Når det er mulig, bør man vurdere å la kontrolleren være aktiv 
og heller gi tydelig veiledning eller valideringsmeldinger som forklarer hva som må gjøres før handlingen kan fullføres.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" disabled>
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

### Forhåndsvalgt verdi

Bruk <span class="highlight">value</span> for å vise en forhåndsvalgt verdi. Verdien må samsvare med <span class="highlight">value</span>-attributtet til en av <span class="highlight">nve-segment</span>-komponentene i gruppen.

<CodeExamplePreview>

```html
<nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" value="traditional">
  <nve-segment value="computer">Datamaskin</nve-segment>
  <nve-segment value="mobile">Mobil</nve-segment>
  <nve-segment value="traditional">Papir og blyant</nve-segment>
</nve-segment-group>
```

</CodeExamplePreview>

## Validering

For mer informasjon om hvordan <span class="highlight">nve-segment-group</span> og andre skjemakomponenter valideres, se <a href="../introduction/forDevelopers/validation">siden om validering</a>.

### Intern validering

Intern validering gjør det mulig å validere verdien i <span class="highlight">nve-segment-group</span> ved hjelp av valideringsregler.

Valideringsreglene kjøres når du kaller <span class="highlight">validateForm()</span> i skjemaets <span class="highlight">submit</span>-handler.

Du kan importere metoden slik:

```ts
import { validateForm } from 'nve-designsystem/validation/validateForm.js';
```

<CodeExamplePreview>

```html
<form id="test-form" class="form">
  <nve-segment-group id="sgr" label="Hvilken gjenstand bruker du mest på jobb?">
    <nve-segment value="computer">Datamaskin</nve-segment>
    <nve-segment value="mobile">Mobil</nve-segment>
    <nve-segment value="traditional">Papir og blyant</nve-segment>
  </nve-segment-group>

  <nve-button type="submit">Send inn</nve-button>
</form>

<script type="module">
  const form = document.querySelector('#test-form');
  const sgr = document.querySelector('#sgr');

  sgr.validationRules = [(value) => rules.required(value) || 'Feltet er påkrevd'];

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
  <nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" errorMessage="Feltet er påkrevd">
    <nve-segment value="computer">Datamaskin</nve-segment>
    <nve-segment value="mobile">Mobil</nve-segment>
    <nve-segment value="traditional">Papir og blyant</nve-segment>
  </nve-segment-group>

  <nve-button type="submit">Send inn</nve-button>
</form>
```

</CodeExamplePreview>

Du kan fjerne feiltilstanden ved å sette <span class="highlight">errorMessage</span> til en tom streng.

<CodeExamplePreview>

```html
<form id="test-form" class="form">
  <nve-segment-group label="Hvilken gjenstand bruker du mest på jobb?" errorMessage="">
    <nve-segment value="computer">Datamaskin</nve-segment>
    <nve-segment value="mobile">Mobil</nve-segment>
    <nve-segment value="traditional">Papir og blyant</nve-segment>
  </nve-segment-group>

  <nve-button type="submit">Send inn</nve-button>
</form>
```

</CodeExamplePreview>

## Tilgjengelighet

Segmentgruppen er implementert i tråd med [anbefalingene](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) i WAI-ARIA Authoring Practices Guide for radiogrupper, for å støtte tilgjengelig bruk i samsvar med WCAG.

- Siden segmentgruppen er bygget med <span class="highlight">fieldset</span> og <span class="highlight">legend</span>, kan den første segment-knappen som får fokus ved tab-navigasjon lese opp ledeteksten sammen med eventuell tilleggstekst fra <span class="highlight">helpText</span>, <span class="highlight">hint</span> og <span class="highlight">errorMessage</span>. Tillegsteksten legges til i <span class="highlight">aria-describedby</span> på <span class="highlight">fieldset</span>. (VoiceOver i Safari på macOS kan slite litt med <span class="highlight">aria-describedby</span> og ikke lese den).
- <span class="highlight">nve-segment</span> har intern tilstand for <span class="highlight">checked</span>, <span class="highlight">pos</span> og <span class="highlight">setsize</span>, som styres av <span class="highlight">nve-segment-group</span>. Disse brukes til å sette riktige ARIA-attributter (<span class="highlight">aria-checked</span> <span class="highlight">aria-posinset</span>,<span class="highlight">aria-setsize</span>) på segment-knappen.
- <span class="highlight">aria-posinset</span> og <span class="highlight">aria-setsize</span> brukes for å fortelle brukeren hvor i gruppen den aktuelle segment-knappen ligger, og hvor mange valg som finnes totalt.
- <span class="highlight">aria-disabled</span> og <span class="highlight">aria-invalid</span> settes på <span class="highlight">nve-segment</span> basert på egenskapene <span class="highlight">disabled</span> og <span class="highlight">invalid</span>.

slooooots

remove errormessage hint and helptext if not defined
