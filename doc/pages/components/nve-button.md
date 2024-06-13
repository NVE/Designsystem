---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<nve-button>NVE-knappen</nve-button>
```

## Eksempler

Du finner også flere eksempler i [Shoelace-dokumentasjonen](https://shoelace.style/components/button).

### Varianter

Bruk `variant` for å velge farge.
`success` og `warning` skal ikke brukes.

```html:preview
<nve-button variant="default">default (standard)</nve-button>
<nve-button variant="primary">primary</nve-button>
<nve-button variant="secondary">secondary</nve-button>
<nve-button variant="neutral">neutral</nve-button>
<nve-button variant="text">text</nve-button>
<nve-button variant="danger">danger</nve-button>
```

### Størrelse

Bruk `size` for å endre størrelse.

```html:preview
<nve-button size="small">small</nve-button>
<nve-button size="medium">medium</nve-button>
<nve-button size="large">large</nve-button>
```

### Disabled

Bruk `disabled` for å deaktivere knappen.

```html:preview
<nve-button disabled>deaktivert</nve-button>
<nve-button>ikke deaktivert</nve-button>
```

### Loading

Bruk `loading` for å legge til ei snurre.

```html:preview
<nve-button loading>loading</nve-button>
```
