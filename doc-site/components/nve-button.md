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
<nve-button size="large" variant="primary"><nve-icon name="warning"></nve-icon></nve-button>
<nve-button><nve-icon name="warning"></nve-icon></nve-button>
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
<nve-button circle variant="neutral" size="large"><nve-icon name="more_vert"></nve-button>
<nve-button circle><nve-icon name="more_vert"></nve-button>
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

### Lenker

Bruk `href` for å gjøre knappen til en lenke som åpner en URL. Når `href` er satt, vil `<nve-button>` renderes som et `<a>`-element i stedet for et vanlig `<button>`-element. Attributtet `target` spesifiserer hvor den nye siden skal åpnes.

- `href`: URL som knappen skal lenke til.
- `target`: Spesifiserer hvor lenken åpnes. Mulige verdier er:
  - `_blank`: Åpner lenken i en ny fane.
  - `_self`: Åpner lenken i samme vindu eller fane som den ble klikket fra.
  - `_parent`: Åpner lenken i foreldrerammen.
  - `_top`: Åpner lenken i det øverste nivået av rammen (top-level frame).

#### Eksempel på bruk av `href` og `target`

<CodeExamplePreview>

```html
<!-- Åpne en ekstern lenke i en ny fane -->
<nve-button href="https://www.nve.no/" target="_blank">Gå til NVE.no</nve-button>
<!-- Standardknapp uten lenke -->
<nve-button>Standardknapp</nve-button>
```

</CodeExamplePreview>
