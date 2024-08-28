---
layout: component
---

<CodeExamplePreview>

```html
<nve-badge>badge</nve-badge>
```

</CodeExamplePreview>

## Eksempler

### Varianter

Bruk `variant` for å velge farge. Primary er standard.

<CodeExamplePreview>

```html
<nve-badge>primary</nve-badge>
<nve-badge variant="neutral">neutral</nve-badge>
<nve-badge variant="success">success</nve-badge>
<nve-badge variant="warning">warning</nve-badge>
<nve-badge variant="danger">danger</nve-badge>
<nve-badge variant="brand">brand</nve-badge>
```

</CodeExamplePreview>

### Størrelse

Bruk `size` for å velge størrelse. `medium` er standard.

<CodeExamplePreview>

```html
<nve-badge size="small">small</nve-badge>
<nve-badge>medium</nve-badge>
<nve-badge size="large">large</nve-badge>
```

</CodeExamplePreview>

### Lav metning

Bruk `saturation="subtle"` for lysere bakgrunnsfarge. Teksten vil også skifte farge.

<CodeExamplePreview>

```html
<dl>
  <dt>lav metning</dt>
  <dd>
    <nve-badge saturation="subtle">primary</nve-badge>
    <nve-badge saturation="subtle" variant="neutral">neutral</nve-badge>
    <nve-badge saturation="subtle" variant="success">success</nve-badge>
    <nve-badge saturation="subtle" variant="warning">warning</nve-badge>
    <nve-badge saturation="subtle" variant="danger">danger</nve-badge>
    <nve-badge saturation="subtle" variant="brand">brand</nve-badge>
  </dd>
  <dt>vanlig</dt>
  <dd>
    <nve-badge>primary</nve-badge>
    <nve-badge variant="neutral">neutral</nve-badge>
    <nve-badge variant="success">success</nve-badge>
    <nve-badge variant="warning">warning</nve-badge>
    <nve-badge variant="danger">danger</nve-badge>
    <nve-badge variant="brand">brand</nve-badge>
  </dd>
</dl>
```

</CodeExamplePreview>

### Knapp med badge

Du kan vise badge på en knapp ved å legge badge inni `<nve-button>`.

<CodeExamplePreview>

```html
<nve-button>
  Knapp
  <nve-badge>badge</nve-badge>
</nve-button>
```

</CodeExamplePreview>
