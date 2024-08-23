---
layout: component
---

Se også [nve-label](./nve-label.html)

## Eksempler

### nve-button

<CodeExamplePreview >

```html
<nve-tooltip content="This is a tooltip" style="display:flex; justify-content:center;">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### nve-icon

<CodeExamplePreview >

```html
<nve-tooltip content="Hjelpetekst" style="display:flex; justify-content:center;">
  <nve-icon style="font-size:24px;" name="design_services" />
</nve-tooltip>
```

</CodeExamplePreview>

### Ulike farger og metningsgrader på tooltip

Du kan bruke ´variant´ for å sette farger, og ´saturation´ for å sette metningsgrad

- Variant kan være neutral, info, success, warning, error; neutral er standard
- Saturation kan være emphasized, subtle, default; emphasized er standard for tooltip

<CodeExamplePreview >

```html
<div
  style="display: grid; gap: var(--spacing-small); grid-template-columns: auto 1fr 1fr 1fr; align-items: center; justify-content: center;"
>
  <div></div>
  <div style="display:flex; justify-content:center;">Emphasized</div>
  <div style="display:flex; justify-content:center;">Default</div>
  <div style="display:flex; justify-content:center;">Subtle</div>

  <div>Neutral</div>
  <nve-tooltip content="neutral, emphasized" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip content="neutral, default" saturation="default" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip content="neutral, subtle" saturation="subtle" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <div>Info</div>
  <nve-tooltip content="info, emphasized" variant="info" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="info, default"
    variant="info"
    saturation="default"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip content="info, subtle" variant="info" saturation="subtle" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <div>Success</div>
  <nve-tooltip content="success, emphasized" variant="success" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="success, default"
    variant="success"
    saturation="default"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="success, subtle"
    variant="success"
    saturation="subtle"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <div>Warning</div>
  <nve-tooltip content="warning, emphasized" variant="warning" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="warning, default"
    variant="warning"
    saturation="default"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="warning, subtle"
    variant="warning"
    saturation="subtle"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <div>Error</div>
  <nve-tooltip content="error, emphasized" variant="error" style="display:flex; justify-content:center;">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="error, default"
    variant="error"
    saturation="default"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip
    content="error, subtle"
    variant="error"
    saturation="subtle"
    style="display:flex; justify-content:center;"
  >
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
</div>
```

</CodeExamplePreview>

### Åpen-attributt og klikkbar trigger

Du kan bruke `open` for å sette at en tooltip er åpen dersom du vil styre dette fra utsiden. Bruk da også `trigger="manual"`

Du kan også bruke ulike `trigger` for å si når tooltip skal åpnes

<CodeExamplePreview >

```html
<div style="display: flex; gap: var(--spacing-medium);">
  <nve-tooltip content="Åpen tooltip" open trigger="manual" style="display:flex; justify-content:center;">
    <nve-button>Alltid åpen</nve-button>
  </nve-tooltip>

  <nve-tooltip content="Har tooltip" trigger="focus" style="display:flex; justify-content:center;">
    <nve-button>Fokus</nve-button>
  </nve-tooltip>

  <nve-tooltip content="Du klikket" trigger="click" style="display:flex; justify-content:center;">
    <nve-button>Klikk</nve-button>
  </nve-tooltip>
</div>
```

</CodeExamplePreview>

### Innhold i tooltip

Du kan bruke `content`-sporet dersom du vil ha mer enn enkel tekst i tooltip

<CodeExamplePreview>

```html
<nve-tooltip style="display:flex; justify-content:center;" trigger="click" placement="bottom">
  <div slot="content" style="display:flex; align-items: center; gap: 8px; justify-content: flex-start;">
    <nve-icon style="font-size:24px;" name="info"></nve-icon>
    <div style="max-width: 12ch;">Tooltip med ikon og tekst</div>
  </div>
  <nve-button>Klikk for å åpne</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### Plassering av tooltip

Du kan bruke `placement` for å si hvilken side tooltip skal være på

<CodeExamplePreview>

```html
<div
  style="display: grid; gap: var(--spacing-small); grid-template-columns: 1fr 1fr 1fr; align-items: center; justify-content: center;"
>
  <nve-tooltip style="display:flex; justify-content:center;" placement="top-start" content="top-start">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="top" content="top">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="top-end" content="top-end">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="left-start" content="left-start">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <div></div>
  <nve-tooltip style="display:flex; justify-content:center;" placement="right-start" content="right-start">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="bottom-start" content="bottom-start">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="bottom" content="bottom">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
  <nve-tooltip style="display:flex; justify-content:center;" placement="bottom-end" content="bottom-end">
    <nve-button>Hover Me</nve-button>
  </nve-tooltip>
</div>
```

</CodeExamplePreview>
