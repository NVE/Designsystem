---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-tooltip content="Dette er tooltip">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

Pakk inn en <span class="highlight">nve-button</span>, <span class="highlight">button</span> eller
<span class="highlight">a</span> i <span class="highlight">nve-tooltip</span>. Tooltipen forankres til elementet inni og vises automatisk
over eller under det, avhengig av tilgjengelig plass.

<span class="highlight">nve-tooltip</span> støtter foreløpig kun disse elementene.
Dette er et bevisst valg for å begrense bruken til elementer der tooltip er hensiktsmessig og tilgjengelig.

<span class="highlight">nve-tooltip</span> skal kun omslutte ett interaktivt element. Den skal ikke brukes rundt flere søskenelementer. Hvis flere elementer trenger en tooltip, skal hvert element ha sin egen <span class="highlight">nve-tooltip</span>.

<nve-message-card variant="primary" label="Forsinkelse ved lukking" size="compact">
<p>Når pekeren flyttes bort fra elementet, lukkes tooltipen med en kort forsinkelse. Dette gjør det mulig å flytte pekeren over tooltipen uten at den forsvinner umiddelbart.</p> <p>Forsinkelsen er et bevisst valg for å gi en mer stabil og brukervennlig opplevelse.</p>
</nve-message-card>

Tooltip er ikke blant de mest tilgjengelige komponentene og bør brukes med omtanke. Les mer om anbefalt bruk og begrensninger i seksjonen om <a href="#tilgjengelighet">Tilgjengelighet</a>.

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

- <b>Bruk tooltip med måte.</b> Tooltip skal gi nyttig tilleggsinformasjon, ikke være den eneste måten brukeren får tilgang til viktig informasjon. Ikke legg kritisk informasjon i en tooltip.
- <b>Knytt tooltipen til elementet den beskriver.</b> Tooltip skal være forankret til kontrollen eller lenken den hører til.
- <b>Bruk kun på interaktive elementer som får fokus.</b> Tooltip skal bare brukes på elementer brukeren kan samhandle med, som knapper og lenker.
- <b>Ikke bruk tooltip som erstatning for etiketter.</b> Interaktive elementer skal ha en tydelig og tilgjengelig etikett. Tooltip kan supplere etiketten, men ikke erstatte den.
- <b>Bruk kun ren tekst. Hold den kort og presis.</b>

<nve-message-card variant="warning" label="Tooltip vises ikke på enheter uten hover (som mobil)!" size="compact">
<p>På enheter uten hover blir tooltip ikke vist visuelt. Likevel blir teksten knyttet til elementets tilgjengelighetsbeskrivelse og kan leses opp av skjermlesere. Hvis informasjonen må være tilgjengelig for alle brukere, bør du bruke en <a href="../components/nve-toggletip" class="highlight">nve-toggletip</a> i stedet. </p>
</nve-message-card>

## Eksempler

### Innhold

Bruk <span class="highlight">content</span> for å vise tekst i tooltipen.

<nve-message-card variant="warning" label="Obs!" size="compact">
<p>Tooltip skal <b>ikke</b> inneholde HTML, bilder, ikoner, emojier eller annet rikt innhold.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-tooltip content="Tooltip er kun tekst">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### Plassering

<span class="highlight">nve-tooltip</span> bruker <b>CSS Anchor Positioning API</b>. Tooltipen vises som standard over elementet den er knyttet til, men flyttes automatisk under eller til sidene dersom det ikke er nok plass. Hvis nettleseren ikke støtter anchor positioning, brukes en innebygd fallback for å plassere tooltipen manuelt. Derfor trengs ingen egen egenskap for å styre plasseringen.

### Avstand

Du kan justere avstanden mellom tooltipen og elementet den er forankret til ved å overstyre CSS-variabelen <span class="highlight">--offset</span> på <span class="highlight">nve-tooltip</span>. Standardverdien er 8px.

<CodeExamplePreview>

```html
<nve-tooltip style="--offset: 40px" content="Stor avstand">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
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

- <span class="highlight">default</span>
- <span class="highlight">emphasized</span> som er standard
- <span class="highlight">subtle</span>

<CodeExamplePreview container-grid-template-columns="auto 1fr 1fr 1fr;" container-items-align="center" container-justify-items="center">

```html
<div></div>
<div>Default</div>
<div>Emphasized</div>
<div>Subtle</div>

<div>Neutral</div>
<nve-tooltip content="neutral, default" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="neutral, emphasized">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="neutral, subtle" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>

<div>Info</div>
<nve-tooltip content="info, default" variant="info" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="info, emphasized" variant="info">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="info, subtle" variant="info" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>

<div>Success</div>
<nve-tooltip content="success, default" variant="success" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="success, emphasized" variant="success">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="success, subtle" variant="success" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>

<div>Warning</div>
<nve-tooltip content="warning, default" variant="warning" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="warning, emphasized" variant="warning">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="warning, subtle" variant="warning" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>

<div>Error</div>
<nve-tooltip content="error, default" variant="error" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="error, emphasized" variant="error">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="error, subtle" variant="error" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

## Tilgjengelighet

> Hvis informasjonen er viktig nok til å vises i en tooltip, er den ikke da viktig nok til å alltid være synlig?

Dette er et godt spørsmål å stille før du tar <span class="highlight">nve-tooltip</span> i bruk.

Hvis informasjonen er viktig nok til at alle brukere bør se den, bør den som regel være synlig direkte i grensesnittet.

Hvis det er plass, bør det brukes tydelige etiketter og korte, synlige beskrivelser fremfor å skjule informasjon i <span class="highlight">nve-tooltip</span>. Bruk tooltip kun for kort, supplerende informasjon.

<span class="highlight">nve-tooltip</span> er en popover som bruker ARIA-rollen <span class="highlight">[tooltip](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)</span> og følger anbefalt oppførsel for tooltip.

### Skjermlesere

For å gjøre innholdet tilgjengelig for skjermlesere legger <span class="highlight">nve-tooltip</span> automatisk til en tilgjengelig etikett på elementet den omslutter:

- Hvis elementet ikke har synlig tekst, brukes innholdet i tooltipen som <span class="highlight">aria-label</span>.
- Hvis elementet allerede har synlig tekst, legges innholdet i tooltipen til i <span class="highlight">aria-label</span>, slik at skjermleseren leser både den synlige teksten og den supplerende forklaringen.

### Tastatur og peker

Tooltipen vises automatisk når brukeren holder pekeren over elementet eller fokuserer elementet med tastaturet.

Tooltipen lukkes når pekeren flyttes bort fra både elementet og tooltipen, elementet mister fokus
eller når brukeren trykker <kbd>Escape</kbd>

Tooltipen mottar aldri fokus. Tastaturfokus forblir alltid på elementet som utløste tooltipen.

### Vedvarende innhold ved hover

Tooltipen skal forbli synlig når pekeren beveger seg over den, selv om det innebærer at pekeren ikke lenger er over elementet som utløste den. Innhold som vises ved hover kan være vanskelig eller umulig å oppfatte dersom brukeren må holde pekeren over utløseren hele tiden.

Dette følger suksesskriterium [WCAG 2.1 – 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html), som krever at innhold som vises ved hover eller fokus skal være vedvarende og ikke forsvinne uten at brukeren selv avslutter interaksjonen.
