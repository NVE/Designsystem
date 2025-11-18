---
layout: component
---

<CodeExamplePreview>

```html
<nve-accordion-item summary="Vis mer tekst">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

## Eksempler

### Accordion

Bruk [nve-accordion](/components/nve-accordion) hvis du vil ha flere `nve-accordion-item` under hverandre, men kun tillate at _en_ `nve-accordion-item` er åpen om gangen.

## Font styling

`nve-accordion-item` støtter ulike fontstiler for å tilpasse utseendet til komponenten. Du kan bruke bold-attributtet for å gjøre teksten fet.

<CodeExamplePreview>

```html
<nve-accordion-item summary="Regular">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>

<nve-accordion-item summary="Bold" bold>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

### Varianter

Vi har mye av de samme variantene her som i andre steder av løsningen. `none` er standard, og har ingen bakgrunn eller luft på sidene. `neutral` har hvit bakgrunn.

<CodeExamplePreview>

```html
<nve-accordion-item summary="none" open> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </nve-accordion-item>
<nve-accordion-item summary="neutral" open variant="neutral">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="secondary" open variant="secondary">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="info" open variant="info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="success" open variant="success">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="warning" open variant="warning">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
<nve-accordion-item summary="error" open variant="error">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
```

</CodeExamplePreview>

### Tykk linje til venstre

Bruk `leftStroke` for å sette en tykk strek til venstre for komponenten. Denne er i samme farge som `border`, med unntak av `none` og `neutral`-variantene, som har fargen `brand-primary`

<CodeExamplePreview>

```html
<nve-accordion-item summary="Ramme på venstre side" leftStroke>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

### Kompakt visning

Viser accordion uten padding til venstre og høyre, og med en border under. Sett `compact` for å vise denne

<CodeExamplePreview>

```html
<div>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
  <nve-accordion-item summary="Kompakt visning" compact>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </nve-accordion-item>
</div>
```

</CodeExamplePreview>

### Tilpassing av tittel-sporet

Du kan bruke `summary`-attributtet for å sette tittelen til komponenten. Hvis du trenger mer fleksibilitet, kan du angi tittelen som et eget spor ved å bruke `slot="summary"`. Dette gir deg muligheten til å tilpasse innholdet i tittelen med for eksempel ikoner, badge eller annen informasjon.

<CodeExamplePreview>

```html
<nve-accordion-item bold>
  <div slot="summary" class="customheader" style="display: flex; gap: var(--spacing-small); align-items: center;">
    <div>Tittel</div>
    <div
      style="color: var(--neutrals-foreground-subtle, #60656C); font-size: var(--font-size-medium); font-weight: 400;"
    >
      Ekstra tekst
    </div>
    <nve-badge>Badge</nve-badge>
    <nve-tag saturation="default" variant="info" closeable>
      Tag
      <nve-icon slot="prefix" library="Sharp" name="error" />
    </nve-tag>
    <nve-icon name="info"></nve-icon>
  </div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
```

</CodeExamplePreview>

## Størrelser

<CodeExamplePreview>

````html

<nve-accordion-item summary="Medium" variant="info" size="medium">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>

<nve-accordion-item summary="Stor" variant="info" size="large">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>

<nve-accordion-item summary="Ekstra stor" variant="info" size="x-large">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</nve-accordion-item>
</CodeExamplePreview>

<!-- Kommenteres ut til UX får dikutert om dette er noe vi vil støtte. Er ikke i skissene per i dag.  -->
<!-- ### Disabled

Bruk disabled for å deaktivere komponenten.

<CodeExamplePreview>

```html
<nve-accordion-item summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</nve-accordion-item>
````

</CodeExamplePreview>
