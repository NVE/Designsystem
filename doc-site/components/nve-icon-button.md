---
layout: component
---

<CodeExamplePreview>

```html
<nve-icon-button iconName="more_vert" label="åpner meny"> </nve-icon-button>
```

</CodeExamplePreview>

<nve-message-card variant="warning" title="Obs!"> 
<span>Vær oppmerksom på at <b>label</b>-egenskapen ikke er obligatorisk, men den bør brukes for å sikre en optimal tilgjengelighetserfaring.
Den bør inneholde en kort beskrivelse av hva knappen gjør.</span>
</nve-message-card>

## Eksempler

### Variant

Bruk `variant` for å velge farge. `default` er standard.

<CodeExamplePreview>

```html
<nve-icon-button iconName="more_vert"></nve-icon-button>
<nve-icon-button variant="primary" iconName="more_vert"></nve-icon-button>
<nve-icon-button variant="neutral" iconName="more_vert"></nve-icon-button>
<nve-icon-button variant="text" iconName="more_vert"></nve-icon-button>
<nve-icon-button variant="danger" iconName="more_vert"></nve-icon-button>
```

</CodeExamplePreview>

### Rund knapp

Bruk `circle` hvis du vil ha en rund knapp.

<CodeExamplePreview>

```html
<nve-icon-button circle iconName="more_vert"></nve-icon-button>
<nve-icon-button circle loading iconName="more_vert"></nve-icon-button>
```

</CodeExamplePreview>

### Størrelse

Bruk `size` for å endre størrelse. `large` er standard.

<CodeExamplePreview>

```html
<nve-icon-button iconName="more_vert" size="small"></nve-icon-button>
<nve-icon-button iconName="more_vert" size="medium"></nve-icon-button>
<nve-icon-button iconName="more_vert"></nve-icon-button>
```

</CodeExamplePreview>

### Disabled

Bruk `disabled` for å deaktivere knappen.

<CodeExamplePreview>

```html
<nve-icon-button disabled iconName="more_vert"></nve-icon-button>
```

</CodeExamplePreview>

### Loading

Bruk `loading` for å vise spinner. Alle andre ikon navn blir ignorert når loading er med.

<CodeExamplePreview>

```html
<nve-icon-button loading iconName="more_vert"></nve-icon-button>
```

</CodeExamplePreview>
