---
layout: component
---

Se også [nve-label](./nve-label.html)

## Eksempler

### nve-button

<CodeExamplePreview container-items-align="start">

```html
<nve-tooltip content="Dette er et verktøyhint">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### nve-icon

<CodeExamplePreview container-items-align="start">

```html
<nve-tooltip content="Hjelpetekst">
  <nve-icon style="font-size:24px;" name="design_services" />
</nve-tooltip>
```

</CodeExamplePreview>

### Ulike farger og metningsgrader på tooltip

Du kan bruke ´variant´ for å sette farger, og ´saturation´ for å sette metningsgrad

- Variant kan være neutral, info, success, warning, error; neutral er standard
- Saturation kan være emphasized, subtle, default; emphasized er standard for tooltip

<CodeExamplePreview container-grid-template-columns="auto 1fr 1fr 1fr;" container-items-align="center" container-justify-items="center">

```html
<div></div>
<div>Emphasized</div>
<div>Default</div>
<div>Subtle</div>
<div>Neutral</div>
<nve-tooltip content="neutral, emphasized">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="neutral, default" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="neutral, subtle" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<div>Info</div>
<nve-tooltip content="info, emphasized" variant="info">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="info, default" variant="info" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="info, subtle" variant="info" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<div>Success</div>
<nve-tooltip content="success, emphasized" variant="success">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="success, default" variant="success" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="success, subtle" variant="success" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<div>Warning</div>
<nve-tooltip content="warning, emphasized" variant="warning">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="warning, default" variant="warning" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="warning, subtle" variant="warning" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<div>Error</div>
<nve-tooltip content="error, emphasized" variant="error">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="error, default" variant="error" saturation="default">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip content="error, subtle" variant="error" saturation="subtle">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### Åpen-attributt og klikkbar trigger

Du kan bruke `open` for å sette at en tooltip er åpen dersom du vil styre dette fra utsiden. Bruk da også `trigger="manual"`

Du kan også bruke ulike `trigger` for å si når tooltip skal åpnes

<CodeExamplePreview container-grid-template-columns="auto auto auto;" container-justify-content= "start">

```html
<nve-tooltip content="Åpen tooltip" open trigger="manual">
  <nve-button>Alltid åpen</nve-button>
</nve-tooltip>

<nve-tooltip content="Har tooltip" trigger="focus">
  <nve-button>Fokus</nve-button>
</nve-tooltip>

<nve-tooltip content="Du klikket" trigger="click">
  <nve-button>Klikk</nve-button>
</nve-tooltip>
```

</CodeExamplePreview >

### Innhold i tooltip

Du kan bruke `content`-slotten dersom du vil ha mer enn enkel tekst i tooltip. Innholdet kan være HTML og bør være kort og lett å lese. Tooltipen må ikke inneholde interaktive elementer som knapper, lenker eller liknende.

<CodeExamplePreview container-items-align="start">

```html
<nve-tooltip trigger="click" placement="bottom">
  <div slot="content" style="display:flex; align-items: center; gap: 8px; justify-content: flex-start;">
    <nve-icon name="info"></nve-icon>
    <div>
      Dette er et <em>eksempel</em> på en tooltip med HTML. <br />
      Teksten kan inneholde <u>linjeskift</u> for <strong>bedre</strong> lesbarhet! <br />
    </div>
  </div>
  <nve-button>Klikk for å åpne</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>

### Plassering av tooltip

Du kan bruke `placement` for å si hvilken side tooltip skal være på

<CodeExamplePreview container-grid-template-columns="1fr 1fr 1fr;" container-items-align="start" container-justify-items="center">

```html
<nve-tooltip placement="top-start" content="top-start">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="top" content="top">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="top-end" content="top-end">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="left-start" content="left-start">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<div></div>
<nve-tooltip placement="right-start" content="right-start">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="bottom-start" content="bottom-start">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="bottom" content="bottom">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
<nve-tooltip placement="bottom-end" content="bottom-end">
  <nve-button>Hover Me</nve-button>
</nve-tooltip>
```

</CodeExamplePreview>
