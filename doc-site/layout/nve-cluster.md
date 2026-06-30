# nve-cluster

`nve-cluster` grupperer barn-elementer horisontalt med konsistent mellomrom og automatisk linjebryting. Brukes typisk for knappegrupper, tag-lister og navigasjon.

`gap` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Import

Layout-komponentene ligger et nivå under de andre komponentene. For å bruke disse kan du følge stien med `/layout` etterfulgt av komponentet du vil bruke. Eksempel:

```javascript
import 'nve-designsystem/components/layouts/nve-cluster/nve-cluster.component.js';
```

## Mellomrom

`gap` setter avstanden mellom barn-elementene ved bruk av et spacing-token. Hvis `gap` ikke er satt, brukes `medium` som standard.

### Gyldige spacing-verdier

Følgende verdier er gyldige for `gap`:
`none`, `2x-small`, `x-small`, `small`, `medium` (default), `large`, `x-large`, `2x-large`, `3x-large`, `4x-large` og `5x-large`.

<CodeExamplePreview>

```html
<nve-cluster gap="x-small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster gap="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
```

</CodeExamplePreview>

## Justering

`justify` styrer hvordan barn-elementene fordeles horisontalt. Tilsvarer CSS-egenskapen `justify-content`.

### Gyldige justering-verdier

Følgende verdier er gyldige for `justify`: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`, `start`, `end`, `left` og `right`.

<CodeExamplePreview>

```html
<nve-cluster
  justify="flex-start"
  gap="small"
  style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster
  justify="center"
  gap="small"
  style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster
  justify="flex-end"
  gap="small"
  style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster
  justify="space-between"
  gap="small"
  style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 80px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
```

</CodeExamplePreview>

## Vertikal justering

`align` styrer hvordan barn-elementene plasseres vertikalt når de har ulik høyde. Tilsvarer CSS-egenskapen `align-items`. Standard er `center`.

### Gyldige vertikal justering-verdier

Følgende verdier er gyldige for `align`: `flex-start`, `flex-end`, `center` (default), `baseline`, `stretch`, `start` og `end`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-cluster
  align="flex-start"
  gap="small"
  style="width: fit-content; padding: 1rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 100px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster
  align="center"
  gap="small"
  style="width: fit-content; padding: 1rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 100px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
<nve-cluster
  align="flex-end"
  gap="small"
  style="width: fit-content; padding: 1rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 100px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
  <div style="height: 44px; width: 44px; background: var(--color-feedback-background-default-info)"></div>
</nve-cluster>
```

</CodeExamplePreview>

## Eksempel på bruk

En knapperad som automatisk bryter til ny linje på smalere skjermer.

<CodeExamplePreview>

```html
<div style="width: 200px">
  <nve-cluster gap="small">
    <nve-button variant="primary">Lagre</nve-button>
    <nve-button variant="secondary">Forhåndsvis</nve-button>
    <nve-button variant="tertiary">Avbryt</nve-button>
  </nve-cluster>
</div>
```

</CodeExamplePreview>

Til sammenligning, samme knapper i en vanlig `<div>` uten `nve-cluster`. Det er ingen mellomrom mellom knappene, og når de bryter til ny linje, klistrer de seg sammen.

<CodeExamplePreview>

```html
<div style="width: 200px">
  <nve-button variant="primary">Lagre</nve-button>
  <nve-button variant="secondary">Forhåndsvis</nve-button>
  <nve-button variant="tertiary">Avbryt</nve-button>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap         | Type            | Standard     | Beskrivelse                                                                               |
| ---------------- | --------------- | ------------ | ----------------------------------------------------------------------------------------- |
| `gap`            | `SpacingToken`  | `medium`     | Tokenbasert mellomrom mellom barn-elementer.                                              |
| `justify`        | `LayoutJustify` | `flex-start` | Horisontal fordeling av barn-elementer. Gyldige verdier er CSS `justify-content`-verdier. |
| `align`          | `ClusterAlign`  | `center`     | Vertikal justering av barn-elementer. Gyldige verdier er CSS `align-items`-verdier.       |
| `padding`        | `SpacingToken`  | —            | Tokenbasert padding på alle sider.                                                        |
| `padding-block`  | `SpacingToken`  | —            | Overstyrer `padding` i blokk-retning (topp/bunn).                                         |
| `padding-inline` | `SpacingToken`  | —            | Overstyrer `padding` i inline-retning (venstre/høyre).                                    |
| `margin`         | `SpacingToken`  | —            | Tokenbasert margin på alle sider.                                                         |
| `margin-block`   | `SpacingToken`  | —            | Overstyrer `margin` i blokk-retning (topp/bunn).                                          |
| `margin-inline`  | `SpacingToken`  | —            | Overstyrer `margin` i inline-retning (venstre/høyre).                                     |
