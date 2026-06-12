# nve-cluster

`nve-cluster` grupperer barn-elementer horisontalt med konsistent mellomrom og automatisk linjebryting. Brukes typisk for knappegrupper, tag-lister og navigasjon.

I de aller fleste tilfeller skal du bruke `gap`. `gap` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Mellomrom

`gap` setter avstanden mellom barn-elementene ved bruk av et spacing-token. Hvis `gap` ikke er satt, brukes `medium` som standard.

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

| Egenskap  | Type                                                                                                                                       | Standard     | Beskrivelse                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------- |
| `gap`     | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'` | `medium`     | Tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren. |
| `justify` | `string`                                                                                                                                   | `flex-start` | `justify-content`-verdi.                                                         |
| `align`   | `string`                                                                                                                                   | `center`     | `align-items`-verdi.                                                             |
