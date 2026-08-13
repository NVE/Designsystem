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
<span class="highlight">a</span> i nve-tooltip. Verktøytipset forankres til elementet inni og vises automatisk
over eller under det, avhengig av tilgjengelig plass.

<span class="highlight">nve-tooltip</span> støtter foreløpig kun disse elementene. Dette er et bevisst valg for å
begrense bruken til komponenter der verktøytips er hensiktsmessig og tilgjengelig.

<span class="highlight">nve-tooltip</span> skal kun omslutte ett interaktivt element. Den skal ikke brukes rundt flere søskenelementer. Hvis flere elementer trenger et verktøytips, skal hvert element ha sitt eget <span class="highlight">nve-tooltip</span>.

<nve-message-card variant="primary" label="Forsinkelse ved lukking" size="compact">
<p>Når pekeren flyttes bort fra elementet, lukkes verktøytipset med en kort forsinkelse. Dette gjør det mulig å flytte pekeren over verktøytipset uten at det forsvinner umiddelbart.</p> <p>Forsinkelsen er et bevisst valg for å gi en mer stabil og brukervennlig opplevelse.</p>
</nve-message-card>

Verktøytips er ikke blant de mest tilgjengelige komponentene og bør brukes med omtanke. Les mer om anbefalt bruk og begrensninger i seksjonen om <a href="#tilgjengelighet">Tilgjengelighet</a>.

## Retningslinjer

- <b>Bruk verktøytips med måte.</b> Verktøytips skal gi nyttig tilleggsinformasjon, ikke være den eneste måten brukeren får tilgang til viktig informasjon.
- <b>Knytt verktøytipset til elementet det beskriver.</b> Verktøytipset skal være forankret til kontrollen eller lenken det hører til.
- <b>Bruk kun på interaktive elementer som får fokus.</b> Verktøytips skal bare brukes på elementer brukeren kan samhandle med, som knapper og lenker.
- <b>Ikke bruk verktøytips som erstatning for etiketter.</b> Interaktive elementer skal ha en tydelig og tilgjengelig etikett. Verktøytips kan supplere etiketten, men ikke erstatte den.
- <b>Ikke legg kritisk informasjon i verktøytips.</b> Informasjon som er nødvendig for å forstå eller fullføre en oppgave skal være synlig i grensesnittet.
- <b>Bruk kun ren tekst. Hold den kort og presis.</b>

<nve-message-card variant="warning" label="Verktøytips vises ikke på mobil!" size="compact">
På enheter uten hover blir verktøytips ikke vist visuelt. Likevel blir teksten knyttet til elementets tilgjengelighetsbeskrivelse og kan leses opp av skjermlesere. Hvis informasjonen må være tilgjengelig for alle brukere, bør du bruke en <a href="../components/nve-toggletip" class="highlight">nve-toggletip</a> i stedet. 
</nve-message-card>

## Eksempler

### Innhold

Bruk <span class="highlight">content</span> for å vise tekst i tooltipen.

<nve-message-card variant="warning" label="Obs!" size="compact">
<p>Verktøytips skal <b>ikke</b> inneholde HTML, bilder, ikoner, emojier eller annet rikt innhold.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<div>
  <nve-tooltip content="Tooltip er kun tekst">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
</div>
```

</CodeExamplePreview>

### Avstand

Du kan justere avstanden mellom verktøytipset og elementet det er forankret til ved å overstyre CSS-variabelen <span class="highlight">--offset</span> på <span class="highlight">nve-tooltip</span>. Standard er 8px.

<CodeExamplePreview>

```html
<div>
  <nve-tooltip style="--offset: 40px" content="Stor avstand">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
</div>
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

> If the information is important enough for a tooltip, isn't it important enough to always be visible?

Dette er et godt spørsmål å stille før du tar <span class="highlight">nve-tooltip</span> i bruk.

Hvis informasjonen er viktig nok til at alle brukere bør se den, bør den som regel være synlig direkte i grensesnittet.

Hvis du har plass, foretrekk tydelige etiketter og korte, synlige beskrivelser fremfor å skjule informasjon i <span class="highlight">nve-tooltip</span>. Verktøytips bør kun brukes til kort, supplerende informasjon.

<span class="highlight">nve-tooltip</span> er en popover som bruker ARIA-rollen <span class="highlight">[tooltip](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)</span> og følger anbefalt oppførsel for verktøytips.

### Skjermlesere

For å gjøre innholdet tilgjengelig for skjermlesere legger <span class="highlight">nve-tooltip</span> automatisk til en tilgjengelig etikett på elementet den omslutter:

- Hvis elementet ikke har synlig tekst, brukes innholdet i verktøytipset som <span class="highlight">aria-label</span>.
- Hvis elementet har synlig tekst, brukes innholdet i verktøytipset som <span class="highlight">title</span>, slik at skjermleseren leser både etiketten og verktøytipset.

### Tastatur og peker

Verktøytipset vises automatisk når brukeren holder pekeren over elementet eller fokuserer elementet med tastaturet.

Verktøytipset lukkes når pekeren flyttes bort fra både elementet og verktøytipset, elementet mister fokus
eller når brukeren trykker <kbd>Escape</kbd>

Verktøytipset mottar aldri fokus. Tastaturfokus forblir alltid på elementet som utløste verktøytipset.

### Vedvarende innhold ved hover

Verktøytipset skal forbli synlig når pekeren beveger seg over det, selv om det innebærer at pekeren ikke lenger er over elementet som utløste det. Innhold som vises ved hover kan være vanskelig eller umulig å oppfatte dersom brukeren må holde pekeren over utløseren hele tiden.

Dette følger suksesskriterium [WCAG 2.1 – 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html), som krever at innhold som vises ved hover eller fokus skal være vedvarende og ikke forsvinne uten at brukeren selv avslutter interaksjonen.
