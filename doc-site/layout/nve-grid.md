# nve-grid

`nve-grid` lager et responsivt rutenett som automatisk bryter til nye linjer basert på en minste kolonnebredde.

I de aller fleste tilfeller skal du bruke `gap` for mellomrom. `gap` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Minste kolonnebredde

`min` bestemmer hvor smal en kolonne kan bli før rutenettet bryter til ny linje. Standard er `250px`.

<nve-message-card size="simple" label="Dra i nedre høyre hjørne av eksempelet for å endre bredden og se hvordan rutenettet bryter til nye linjer."></nve-message-card>

<CodeExamplePreview>

```html
<div style="resize: horizontal; overflow: auto; max-width: 100%; min-width: 150px">
  <nve-grid min="120px" style="background: var(--color-feedback-background-subtle-neutral); padding: 0.5rem">
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
    <div
      style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
    ></div>
  </nve-grid>
</div>
```

</CodeExamplePreview>

## Mellomrom

`gap` setter mellomrommet mellom rutene ved bruk av et spacing-token. Hvis `gap` ikke er satt, brukes `medium` som standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-grid
  gap="small"
  min="80px"
  style="background: var(--color-feedback-background-subtle-neutral); padding: 0.5rem"
>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
</nve-grid>
<nve-grid min="80px" style="background: var(--color-feedback-background-subtle-neutral); padding: 0.5rem">
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
</nve-grid>
<nve-grid
  gap="large"
  min="80px"
  style="background: var(--color-feedback-background-subtle-neutral); padding: 0.5rem"
>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
  <div
    style="min-height: 80px; background: var(--color-feedback-background-default-info); border: 4px solid var(--color-feedback-background-subtle-neutral)"
  ></div>
</nve-grid>
```

</CodeExamplePreview>

## Eksempel på bruk

Et responsivt rutenett med navigasjonskort som tilpasser antall kolonner etter tilgjengelig plass.

<CodeExamplePreview>

```html
<nve-grid gap="small">
  <nve-link-card href="#" label="Flom og skred" size="small"></nve-link-card>
  <nve-link-card href="#" label="Vassdrag og miljø" size="small"></nve-link-card>
  <nve-link-card href="#" label="Energi" size="small"></nve-link-card>
  <nve-link-card href="#" label="Klima" size="small"></nve-link-card>
  <nve-link-card href="#" label="Konsesjon" size="small"></nve-link-card>
  <nve-link-card href="#" label="Tilsyn" size="small"></nve-link-card>
</nve-grid>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap | Type                                                                                                                                       | Standard | Beskrivelse                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------- |
| `min`    | `string`                                                                                                                                   | `250px`  | Minste kolonnebredde før rutenettet bryter til ny linje.                         |
| `gap`    | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'` | `medium` | Tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren. |
