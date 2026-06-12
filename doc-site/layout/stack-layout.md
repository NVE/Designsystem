# stack-layout

`stack-layout` stabler barn-elementer vertikalt med mellomrom.

I de aller fleste tilfeller skal du bruke `gap`. `gap` er knyttet direkte til spacing-tokenene i designsystemet og er det som sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Mellomrom

`gap` setter avstanden mellom barn-elementene ved bruk av et spacing-token.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<stack-layout gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout gap="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
```

</CodeExamplePreview>

## Justering

`justify` styrer hvordan barn-elementene fordeles vertikalt. Tilsvarer CSS-egenskapen `justify-content`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)">

```html
<stack-layout
  justify="flex-start"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="center"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="flex-end"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-between"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-around"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-evenly"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
```

</CodeExamplePreview>

## Nøsting

Stacks kan nøstes for å bygge opp et hierarki av avstander.

<CodeExamplePreview>

```html
<stack-layout gap="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <stack-layout gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  </stack-layout>
  <stack-layout gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  </stack-layout>
</stack-layout>
```

</CodeExamplePreview>

## Eksempel på bruk

Med `stack-layout` får du konsistent avstand fra et token, uten egen CSS.

<CodeExamplePreview>

```html
<stack-layout>
  <nve-input label="Navn"></nve-input>
  <nve-input label="E-post" type="email"></nve-input>
  <nve-textarea label="Melding"></nve-textarea>
  <nve-button variant="primary">Send inn</nve-button>
</stack-layout>
```

</CodeExamplePreview>

Uten `stack-layout` klistrer elementene seg sammen og må styles individuelt for å få luft mellom seg.

<CodeExamplePreview>

```html
<div>
  <nve-input label="Navn"></nve-input>
  <nve-input label="E-post" type="email"></nve-input>
  <nve-textarea label="Melding"></nve-textarea>
  <nve-button variant="primary">Send inn</nve-button>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap  | Type                                                                                                                                       | Standard     | Beskrivelse                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------- |
| `gap`     | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'` | `medium`     | Tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren. |
| `justify` | `string` (`justify-content`-verdi)                                                                                                         | `flex-start` | Fordeling langs den vertikale aksen.                                             |
