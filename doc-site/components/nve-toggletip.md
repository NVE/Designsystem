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

<span class="highlight">nve-toggletip</span> er en knapp med et informasjonsikon som åpner et popover ved klikk eller tastaturaktivering. I motsetning til et verktøytips beskriver ikke innholdet komponenten som åpner popoveret, men brukes til å formidle utfyllende informasjon om den omkringliggende konteksten. Innholdet leveres gjennom standardsporet og kan bestå av tekst, lenker eller andre komponenter.

<span class="highlight">nve-toggletip</span> er basert på <b>Popover API</b> med automatisk lukkeatferd. Den lukkes automatisk når brukeren klikker utenfor eller trykker <kbd>Esc</kbd>.

## Retningslinjer

- <b>Ikke legg kritisk informasjon i toggletipen.</b> Informasjon som er nødvendig for å forstå eller fullføre en oppgave skal være synlig i grensesnittet.
- <b>Plasser toggletipen nær informasjonen den utdyper.</b> Brukeren skal enkelt forstå hvilken del av grensesnittet den utfyllende informasjonen gjelder.
- <b>Bruk verktøytips når innholdet beskriver kontrollen.</b> Dersom innholdet kun forklarer funksjonen til knappen eller lenken, bør du bruke <a href="../components/nve-tooltip" class="highlight">nve-tooltip</a> i stedet.
- <b>Hold innholdet kort og relevant.</b> Selv om toggletipen kan inneholde rikere innhold, bør den være enkel å lese og fokusere på én oppgave eller ett tema.

## Eksempler

### Innhold

Innholdet i toggletipen leveres gjennom standardsporet. Legg inn ønsket innhold som barn av <span class="highlight">nve-toggletip</span>.
Innholdet kan bestå av tekst, HTML eller andre komponenter.

<CodeExamplePreview>

```html
<div>
  <nve-toggletip aria-label="Vis mer informasjon">
    <span>Innholdet kan bestå av HTML.</span>
  </nve-toggletip>
</div>
```

</CodeExamplePreview>

### Avstand

Du kan justere avstanden mellom toggletienp og ikonknappen som viser den ved å overstyre CSS-variabelen <span class="highlight">--offset</span> på <span class="highlight">nve-tooltip</span>. Standard er 4px.

<CodeExamplePreview>

```html
<nve-toggletip aria-label="Vis mer info" style="--offset:20px">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
```

</CodeExamplePreview>

### Ikon

Som standard brukes <span class="highlight">info</span> ikonet. Dersom det er behov for et annet ikon, bruk <span class="highlight">iconName</span>.

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
- <span class="highlight">sutble</span>

<CodeExamplePreview container-grid-template-columns="auto 1fr 1fr 1fr;" container-items-align="center" container-justify-items="center">

```html
<div></div>
<div>Default</div>
<div>Emphasized</div>
<div>Subtle</div>

<div>Neutral</div>
<nve-toggletip content="neutral, default" saturation="default">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="neutral, emphasized">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="neutral, subtle" saturation="subtle">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>

<div>Info</div>
<nve-toggletip content="info, default" variant="info" saturation="default">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="info, emphasized" variant="info">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="info, subtle" variant="info" saturation="subtle">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>

<div>Success</div>
<nve-toggletip content="success, default" variant="success" saturation="default">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="success, emphasized" variant="success">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="success, subtle" variant="success" saturation="subtle">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>

<div>Warning</div>
<nve-toggletip content="warning, default" variant="warning" saturation="default">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="warning, emphasized" variant="warning">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="warning, subtle" variant="warning" saturation="subtle">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>

<div>Error</div>
<nve-toggletip content="error, default" variant="error" saturation="default">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="error, emphasized" variant="error">
  <span>Esktra info i toggletip.</span>
</nve-toggletip>
<nve-toggletip content="error, subtle" variant="error" saturation="subtle">
  <span>Esktra info i toggletip.</span>
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
