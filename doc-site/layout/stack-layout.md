# stack-layout

`stack-layout` stabler barn-elementer vertikalt med mellomrom.

I de aller fleste tilfeller skal du bruke `size`. `size` er knyttet direkte til spacing-tokenene i designsystemet og er det som sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Størrelse

`size` setter avstanden mellom barn-elementene ved bruk av et spacing-token.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<stack-layout size="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout size="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
```

</CodeExamplePreview>

## Mellomrom

`gap` setter avstanden mellom barn-elementene som en eksakt CSS-verdi. Brukes kun når du trenger en verdi som ikke finnes blant tokenene.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<stack-layout gap="0.25rem" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout gap="1rem" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout gap="3rem" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
```

</CodeExamplePreview>

<nve-message-card size="compact" variant="warning"  label="Tips">Bruk size i stedet når du jobber med designsystemets avstander. Gap og space er ment for unntakstilfeller der du må ha en helt spesifikk og ikke-tokenbasert verdi.</nve-message-card>

## Justering

`justify` styrer hvordan barn-elementene fordeles vertikalt. Tilsvarer CSS-egenskapen `justify-content`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)">

```html
<stack-layout
  justify="flex-start"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="center"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="flex-end"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-between"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-around"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
<stack-layout
  justify="space-evenly"
  gap="0.5rem"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</stack-layout>
```

</CodeExamplePreview>

## Alias for mellomrom

`space` er et alias for `gap`. Brukes hvis `gap`-attributtet kolliderer med annen styling.

<CodeExamplePreview>

```html
<stack-layout space="1.5rem" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
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
<stack-layout size="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <stack-layout size="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  </stack-layout>
  <stack-layout size="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
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

| Egenskap  | Type                                                                                                                                       | Standard     | Beskrivelse                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------- |
| `size`    | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'` | –            | Tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren.          |
| `gap`     | `string`                                                                                                                                   | –            | Eksakt CSS-lengde (`"12px"`, `"1.25rem"`). Skal **ikke** brukes for tokens – bruk `size`. |
| `space`   | `string`                                                                                                                                   | –            | Alias for `gap` med samme regler.                                                         |
| `justify` | `string` (`justify-content`-verdi)                                                                                                         | `flex-start` | Fordeling langs den vertikale aksen.                                                      |
