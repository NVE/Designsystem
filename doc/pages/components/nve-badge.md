---
meta:
  title: nve-badge
  description: Brukes for å vise status eller antall
layout: component
---

```html:preview
<nve-badge>Badge</nve-badge>
```

## Eksempler

Du finner også flere eksempler i [Shoelace-dokumentasjonen](https://shoelace.style/components/badge).

### Varianter

Bruk `variant` for å velge farge.

```html:preview
<nve-badge variant="primary">primary (dette er standard)</nve-badge>
<nve-badge variant="neutral">neutral</nve-badge>
<nve-badge variant="success">success</nve-badge>
<nve-badge variant="warning">warning</nve-badge>
<nve-badge variant="danger">danger</nve-badge>
<nve-badge variant="brand">brand</nve-badge>
```

### Størrelse

Bruk `size` for å velge størrelse.

```html:preview
<nve-badge size="small">small</nve-badge>
<nve-badge size="medium">medium</nve-badge>
<nve-badge size="large ">large</nve-badge>
```

### Low

Bruk `low` for å gjøre badge mildere.

```html:preview
<nve-badge low>low</nve-badge>
<nve-badge>vanlig</nve-badge>
```

### Knapp med badge

Du kan vise badge på en knapp ved å legge badge inni `<nve-button>`.

```html:preview
<nve-button variant="primary">
  Knapp
  <nve-badge>badge</nve-badge>
</nve-button>
```
