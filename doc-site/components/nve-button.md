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

Bruk `size` for å endre størrelse. `medium` er standard.

<CodeExamplePreview>

```html
<nve-button size="small">small</nve-button>
<nve-button>medium</nve-button>
<nve-button size="large">large</nve-button>
```

</CodeExamplePreview>

### Disabled

Bruk `disabled` for å deaktivere knappen.

<CodeExamplePreview>

```html
<nve-button disabled>deaktivert</nve-button> <nve-button>ikke deaktivert</nve-button>
```

</CodeExamplePreview>

### Prefix spor

Bruk `prefix` spor for å vise noe foran knapp teksten, f.eks et ikon.

<CodeExamplePreview>

```html
<nve-button><nve-icon slot="prefix" name="warning"></nve-icon>Varsel</nve-button>
```

</CodeExamplePreview>

### Suffix spor

Bruk `suffix` spor for å vise noe etter knapp teksten, f.eks et ikon.

<CodeExamplePreview>

```html
<nve-button><nve-icon slot="suffix" name="thumb_up"></nve-icon>Bra</nve-button>
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

Knapper med kun ikon kan brukes ved å sette `nve-icon` i den standard sporet.

<CodeExamplePreview>

```html
<nve-button><nve-icon name="warning"></nve-icon></nve-button>
<nve-button size="medium" variant="primary"><nve-icon name="warning"></nve-icon></nve-button>
<nve-button size="small" variant="neutral"><nve-icon name="warning"></nve-icon></nve-button>
```

</CodeExamplePreview>

Man kan fortsatt bruke `loading` attributtet for å vise kun spinner.

<CodeExamplePreview>

```html
<nve-button loading size="medium" variant="primary"><nve-icon name="warning"></nve-icon></nve-button>
```

</CodeExamplePreview>

Knapper med bare ikon kan også bruke attributtet `circle` for å vise en rund knapp.

<CodeExamplePreview>

```html
<nve-button circle><nve-icon name="more_vert"></nve-button>
<nve-button circle variant="neutral" size="medium"><nve-icon name="more_vert"></nve-button>
<nve-button circle size="small" variant="text"><nve-icon name="more_vert"></nve-icon></nve-button>
```

</CodeExamplePreview>

### Ikon farge

I noen tilfeller må man sette en annen farge på ikonet. Dette kan enkelt gjøres ved å sette `--nve-icon-color` CSS-egenskapen.

<CodeExamplePreview>

```html
<nve-button size="medium" variant="neutral" style="--nve-icon-color: red"
  ><nve-icon name="warning"></nve-icon
></nve-button>
```

</CodeExamplePreview>
