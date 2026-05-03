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
 <p><span class="highlight">nve-radio</span> er ikke bygget med native <span class="highlight">input</span> og <span class="highlight">label</span>. Det er et bevisst valg for å kunne legge <span class="highlight">role="radio"</span> direkte på host-elementet og styre tilgjengeligheten mer presist med <span class="highlight">aria-setsize</span>, <span class="highlight">aria-posinset</span> og <span class="highlight">aria-checked</span>. Les mer i tilgjengelighet seksjonen.</p>

<p><span class="highlight">nve-radio-group</span> og <span class="highlight">nve-radio</span> bruker ikke <span class="highlight">name</span>-attributtet slik vanlige HTML-radiofelter gjør. Komponenten støtter ikke native <span class="highlight">form submission</span>, så <span class="highlight">name</span> blir ikke brukt til å sende inn en verdi i et skjema.</p>

<p><span class="highlight">name</span> er heller ikke nødvendig for å gruppere radio-knappene. Gruppelogikken styres av <span class="highlight">nve-radio-group</span>, som sørger for at bare ett alternativ kan være valgt om gangen og emitterer valgt verdi via komponentens <span class="highlight">change</span>-hendelse.</p>

<p>For denne komponenten er det derfor <span class="highlight">value</span> på valgt <span class="highlight">nve-radio</span> og <span class="highlight">change</span>-hendelsen fra <span class="highlight">nve-radio-group</span> som brukes for å lese brukerens valg.</p>
</nve-message-card>

## Eksempler

### Ledetekst og tooltip

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

Bruk i tillegg <span class="highlight">tooltip</span> for å vise utfyllende informasjon ved ledeteksten. Innholdet kan være ren tekst eller HTML, for eksempel lenker eller formattert hjelpetekst.

<CodeExamplePreview>

```html
<nve-radio-group
  label="Hva er status på tiltaket?"
  tooltip="Et tiltak er arbeidet eller inngrepet du søker om eller rapporterer om."
>
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

Bruk <span class="highlight">hintText</span> for å vise hint-tekst under feltet.

<CodeExamplePreview>

```html
<nve-radio-group
  label="Hva er status på tiltaket?"
  hintText="Velg smart. Det finnes ingen vei tilbake fra dårlige valg."
>
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

## Tilgjengelighet

Radiogruppen er implementert i tråd med [anbefalingene](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) i WAI-ARIA Authoring Practices Guide for radiogrupper, for å støtte tilgjengelig bruk i samsvar med WCAG.
