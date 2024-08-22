---
layout: component
---

<CodeExamplePreview>

```html
<nve-message-card title="Dette er et kort">Bruk meg med glede</nve-message-card>
<nve-message-card title="NVE avdelinger">
  <ul>
    <li>RME</li>
    <li>EK</li>
    <li>TB</li>
    <li>H</li>
    <li>IKT</li>
    <li>V</li>
    <li>SV</li>
  </ul>
</nve-message-card>
```

</CodeExamplePreview>

## Eksempler

### Varianter

Bruk `variant` for å velge farge. `primary` er standard.

<CodeExamplePreview>

```html
<nve-message-card title="Tittel">Primary</nve-message-card>
<!-- Box-shadow stil på den nøytrale varianten på grunn av lik farger med bakgrunnen i kodeforhåndsvisningen -->
<nve-message-card style="box-shadow:var(--dropdown)" variant="neutral" title="Tittel">Neutral</nve-message-card>
<nve-message-card variant="warning" title="Tittel">Warning</nve-message-card>
<nve-message-card variant="danger" title="Tittel">Danger</nve-message-card>
<nve-message-card variant="success" title="Tittel">Success</nve-message-card>
```

</CodeExamplePreview>

### Størrelse

Man kan velge mellom `default` (som er standard og ikke trenger å skrives), `compact` og `simple`.
Forskjellen mellom `compact` og `simple` er at `simple` viser kun tittel og ikon. Tittelen blir også tynnere.

<CodeExamplePreview>

```html
<nve-message-card title="Default">Størrelsen på kortet</nve-message-card>
<nve-message-card size="compact" title="Compact">Størrelsen på kortet</nve-message-card>
<nve-message-card size="simple" title="Simple">Størrelsen på kortet</nve-message-card>
```

</CodeExamplePreview>

### Høyere metning

Bruk `saturation="emphasized"` for å vise sterkere bakgrunnsfarge.

<CodeExamplePreview>

```html
<nve-message-card saturation="emphasized" title="Tittel">Primary</nve-message-card>
<nve-message-card saturation="emphasized" variant="neutral" title="Tittel">Neutral</nve-message-card>
<nve-message-card saturation="emphasized" variant="warning" title="Tittel">Warning</nve-message-card>
<nve-message-card saturation="emphasized" variant="danger" title="Tittel">Danger</nve-message-card>
<nve-message-card saturation="emphasized" variant="success" title="Tittel">Success</nve-message-card>
```

</CodeExamplePreview>

### Closable

Bruk `closable` for å vise lukk-knappen i tittel.

<CodeExamplePreview>

```html
<div class="closable-example-container">
  <nve-message-card closable class="message-card-closable" title="Tittel "> </nve-message-card>
</div>

<script>
  // Denne snutten skal vise message-card igjen etter 2 sek, og legge til an event igjen på det ny lagde message-card.
  // Grunnen vi må legge til event-listener igjen er at når man lukker message-card den forsvinner fra DOMen.
  let initialMessageCard;
  if (!initialMessageCard) {
    initialMessageCard = document.querySelector('.message-card-closable');
    initialMessageCard.addEventListener('nve-hide', () => {
      handleHideEvent();
    });
  }

  function addMessageCard() {
    const container = document.querySelector('.closable-example-container');
    const newMessageCard = document.createElement('nve-message-card');
    newMessageCard.setAttribute('closable', '');
    newMessageCard.classList.add('message-card-closable');
    newMessageCard.setAttribute('variant', 'primary');
    newMessageCard.setAttribute('title', 'Tittel');

    newMessageCard.addEventListener('nve-hide', () => {
      handleHideEvent();
    });

    container.appendChild(newMessageCard);
  }

  function handleHideEvent() {
    setTimeout(() => {
      addMessageCard();
    }, 2000);
  }
</script>
```

</CodeExamplePreview>

### Footer

Du kan bruke `footer`spor til å vise f.eks. en knapp.

<CodeExamplePreview>

```html
<nve-message-card variant="warning" title="Ingen støtte">
  Vi støtter ikke denne funksjonen.
  <slot name="footer">
    <nve-button variant="neutral">Les mer</nve-button>
  </slot>
</nve-message-card>
```

</CodeExamplePreview>

### Subheader

Slot `subheader` brukes til å vise en ekstra tekst over tittelen.

<CodeExamplePreview>

```html
<nve-message-card title="Tittel">
  <div slot="subheader">Varsel | 21.08.2024</slot>
</nve-message-card
>
```

</CodeExamplePreview>

### Vise eller gjemme ikon

Som default ikon vises ved tittelen. Ikon kan slås av ved ønske.

<CodeExamplePreview>

```html
<nve-message-card showIcon="false" title="Ingen ikon"> Ikon skal ikke vises </nve-message-card>
```

</CodeExamplePreview>

### Ikon

Ikon er tilpasset varianten i utgangspunktet, men du kan velge ditt eget ikon ved bruk av `iconTitle`-attributen.

<CodeExamplePreview>

```html
<nve-message-card iconTitle="pets" title="Hunden sier voff voff">
  Du kan velge et ikon i headeren selv
</nve-message-card>
<nve-message-card variant="warning" title="Katten liker ikke voff voff"> Vær forsiktig </nve-message-card>
```

</CodeExamplePreview>
