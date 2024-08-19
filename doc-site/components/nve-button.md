---
layout: component
---

<CodeExamplePreview>

```html
<nve-button>NVE-knappen</nve-button>
```

</CodeExamplePreview>

## Eksempler

### Varianter

Bruk `variant` for å velge farge. `default` er standard.
`success` og `warning` skal ikke brukes. Vi bruker heller ikke `outline`-attributt, men `neutral`-variant

<CodeExamplePreview>

```html
<nve-button variant="primary">primary</nve-button>
<nve-button>default</nve-button>
<nve-button variant="neutral">neutral</nve-button>
<nve-button variant="text">text</nve-button>
<nve-button variant="danger">danger</nve-button>
```

</CodeExamplePreview>

### Størrelse

Bruk `size` for å endre størrelse. `large` er standard.

<CodeExamplePreview>

```html
<nve-button size="small">small</nve-button>
<nve-button size="medium">medium</nve-button>
<nve-button>large</nve-button>
```

</CodeExamplePreview>

### Disabled

Bruk `disabled` for å deaktivere knappen.

<CodeExamplePreview>

```html
<nve-button disabled>deaktivert</nve-button> <nve-button>ikke deaktivert</nve-button>
```

</CodeExamplePreview>

### Loading

Bruk `loading` for å legge til ei snurre.

<CodeExamplePreview>

```html
<nve-button loading>loading</nve-button>
```

</CodeExamplePreview>

### Kun ikon

Knapper med kun ikon i prefix eller suffix kan også brukes. Det finnes en dedikert [nve-icon-button](./nve-icon-button) komponent som kan passe bedre til din behov.

<CodeExamplePreview>

```html
<nve-button>
  <nve-icon slot="prefix" name="dark_mode" library="Sharp"></nve-icon>
</nve-button>
```

</CodeExamplePreview>
