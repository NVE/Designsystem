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
<nve-badge size="large ">large</nve-badge>
```

</CodeExamplePreview>

### Low

Bruk `low` for lysere bakgrunnsfarge. Teksten blir da svart for alle varianter.

<CodeExamplePreview>

```html
<dl>
  <dt>low</dt>
  <dd>
    <nve-badge low>primary</nve-badge>
    <nve-badge low variant="neutral">neutral</nve-badge>
    <nve-badge low variant="success">success</nve-badge>
    <nve-badge low variant="warning">warning</nve-badge>
    <nve-badge low variant="danger">danger</nve-badge>
    <nve-badge low variant="brand">brand</nve-badge>
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
