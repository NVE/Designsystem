---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-toggletip aria-label="Vis mer info">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
```

</CodeExamplePreview>

<nve-message-card variant="primary" label="Popover API" size="compact">
<p><span class="highlight">nve-toggletip</span> er basert på <b>Popover API</b> med automatisk lukkeatferd. Den lukkes automatisk når brukeren klikker utenfor eller trykker <kbd>Esc</kbd>.</p>
</nve-message-card>

## Tooltip eller toggletip?

Tooltip og toggletip brukes begge til å vise supplerende informasjon, men har ulike funksjoner og ulik tilknytning til innholdet.

### Beskriver informasjonen ett bestemt interaktivt element?

Bruk <span class="highlight">nve-tooltip</span>.

Tooltip er direkte knyttet til elementet det beskriver. Det samme elementet fungerer som utløser, og innholdet vises når elementet får fokus eller brukeren holder pekeren over det.

Dette passer for eksempel når du vil:

- forklare hva en knapp eller lenke gjør
- gi en kort presisering av en handling

<CodeExamplePreview>

```html
<nve-tooltip content="Klikk for å sende skjema">
  <nve-button>Send</nve-button>
</nve-tooltip>

<nve-tooltip content="Åpner en ekstern side">
  <a href="#" target="_blank">Gå til</a>
</nve-tooltip>
```

</CodeExamplePreview>

### Beskriver informasjonen et område, en funksjon eller annet innhold i grensesnittet?

Bruk <span class="highlight">nve-toggletip</span>.

Toggletip har sin egen utløser og er ikke direkte knyttet til elementene den beskriver. Plasser utløseren i nærheten av innholdet den beskriver.
Dette passer for eksempel når du vil:

- forklare et filter eller en gruppe med valg
- gi mer informasjon om en del av grensesnittet
- forklare et begrep eller en funksjon ved hjelp av en egen informasjonsknapp

Toggletip åpnes når brukeren aktiverer utløseren og kan derfor også brukes på enheter uten hover.

Se eksempel under på hvordan <span class="highlight">nve-toggletip</span> kan brukes i et skjema for å gi mer informasjon om et inputfelt.

<CodeExamplePreview>

```html
<nve-input label="Beskriv saken">
  <nve-toggletip slot="label-toggletip" aria-label="Les mer om saken">
    <span>Gi en kort beskrivelse som oppsummerer innholdet og gir nødvendig kontekst.</span>
  </nve-toggletip>
</nve-input>
```

</CodeExamplePreview>

## Retningslinjer

- <b>Ikke legg kritisk informasjon i toggletipen.</b> Informasjon som er nødvendig for å forstå eller fullføre en oppgave skal være synlig i grensesnittet.
- <b>Plasser toggletipen nær informasjonen den utdyper.</b> Brukeren skal enkelt forstå hvilken del av grensesnittet den utfyllende informasjonen gjelder.
- <b>Bruk tooltipen når innholdet beskriver kontrollen.</b> Dersom innholdet kun forklarer funksjonen til knappen eller lenken, bør du bruke <a href="../components/nve-tooltip" class="highlight">nve-tooltip</a> i stedet.
- <b>Hold innholdet kort og relevant.</b> Selv om toggletipen kan inneholde rikere innhold, bør den være enkel å lese og fokusere på én oppgave eller ett tema.

## Eksempler

### Innhold

Innholdet i toggletipen leveres gjennom standardsporet. Legg inn ønsket innhold som barn av <span class="highlight">nve-toggletip</span>.
Innholdet kan bestå av tekst, HTML eller andre komponenter.

<CodeExamplePreview>

```html
<nve-toggletip aria-label="Vis mer informasjon">
  <span>Innholdet kan bestå av HTML.</span>
</nve-toggletip>
```

</CodeExamplePreview>

### Plassering

<span class="highlight">nve-toggletip</span> bruker <b>CSS Anchor Positioning API</b>. Toggletipen vises som standard over knappen som åpner den, men flyttes automatisk under eller til sidene dersom det ikke er nok plass. Hvis nettleseren ikke støtter anchor positioning, brukes en innebygd fallback for å plassere toggletipen manuelt. Derfor trengs ingen egen egenskap for å styre plasseringen.

### Avstand

Du kan justere avstanden mellom toggletipen og ikonknappen som viser den ved å overstyre CSS-variabelen <span class="highlight">--offset</span> på <span class="highlight">nve-toggletip</span>. Standardverdien er 4px.

<CodeExamplePreview>

```html
<nve-toggletip aria-label="Vis mer info" style="--offset:20px">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
```

</CodeExamplePreview>

### Ikon

Som standard brukes <span class="highlight">info</span>-ikonet. Dersom det er behov for et annet ikon, bruk <span class="highlight">iconName</span>.

Velg et ikon som tydelig signaliserer at komponenten åpner utfyllende informasjon. Unngå ikoner som kan gi inntrykk av en annen handling eller funksjon.

<CodeExamplePreview>

```html
<nve-toggletip>
  <span>Dette er toggletip med standard ikon.</span>
</nve-toggletip>

<nve-toggletip iconName="info_i">
  <span>Dette er toggletip med et annet ikon.</span>
</nve-toggletip>

<nve-toggletip iconName="help">
  <span>Dette er toggletip med et annet ikon.</span>
</nve-toggletip>
```

</CodeExamplePreview>

### Ulike varianter og metningsgrader

Du kan bruke <span class="highlight">variant</span> for å sette farger:

- <span class="highlight">neutral</span> som er standard
- <span class="highlight">info</span>
- <span class="highlight">success</span>
- <span class="highlight">warning</span>
- <span class="highlight">error</span>

Bruk <span class="highlight">saturation</span> for å sette metningsgrad:

- <span class="highlight">default</span> som er standard
- <span class="highlight">emphasized</span>
- <span class="highlight">subtle</span>

<CodeExamplePreview container-grid-template-columns="auto 1fr 1fr 1fr;" container-items-align="center" container-justify-items="center">

```html
<div></div>
<div>Default</div>
<div>Emphasized</div>
<div>Subtle</div>

<div>Neutral</div>
<nve-toggletip saturation="default">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip>
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip saturation="subtle">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>

<div>Info</div>
<nve-toggletip variant="info" saturation="default">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="info">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="info" saturation="subtle">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>

<div>Success</div>
<nve-toggletip variant="success" saturation="default">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="success">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="success" saturation="subtle">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>

<div>Warning</div>
<nve-toggletip variant="warning" saturation="default">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="warning">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="warning" saturation="subtle">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>

<div>Error</div>
<nve-toggletip variant="error" saturation="default">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="error">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip variant="error" saturation="subtle">
  <span>Ekstra info i toggletip.</span>
</nve-toggletip>
```

</CodeExamplePreview>

## Tilgjengelighet

Bruk kun <span class="highlight">nve-toggletip</span> til utfyllende informasjon. Dersom informasjonen er nødvendig for å forstå innholdet eller fullføre en oppgave, bør den være synlig direkte i grensesnittet.

<span class="highlight">nve-toggletip</span> bør gjøre det enklere å få mer informasjon, ikke være den eneste måten brukeren får tilgang til viktig innhold.

Unngå å plassere flere toggletips tett ved siden av hverandre. Dersom brukeren må åpne flere informasjonsknapper for å forstå samme innhold, bør informasjonen presenteres på en annen måte.

### aria-label

Husk å sette <span class="highlight">aria-label</span> på <span class="highlight">nve-toggletip</span>. Komponenten gjengis som en knapp med et ikon og har derfor ingen synlig etikett. En beskrivende <span class="highlight">aria-label</span> er nødvendig for at skjermleserbrukere skal forstå knappens funksjon.

<CodeExamplePreview>

```html
<nve-toggletip aria-label="Vis mer informasjon">
  <span>Ekstra informasjon i toggletipen.</span>
</nve-toggletip>
```

</CodeExamplePreview>
