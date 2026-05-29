# box-layout

`box-layout` pakker innhold i en boks med konsistent padding.

I de aller fleste tilfeller skal du bruke `size`. `size` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at paddingen er konsistent på tvers av sider og komponenter.

## Størrelse

`size` setter padding rundt innholdet ved bruk av et spacing-token. Hvis `size` ikke er satt, brukes `medium` som standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<box-layout size="small" style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout size="large" style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
```

</CodeExamplePreview>

## Padding

`padding` setter padding som en eksakt CSS-verdi. Brukes kun når du trenger en verdi som ikke finnes blant tokenene.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<box-layout padding="0.25rem" style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout padding="1rem" style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout padding="3rem" style="background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
```

</CodeExamplePreview>

<nve-message-card size="compact" variant="warning" label="Tips">Bruk size i stedet når du jobber med designsystemets avstander. Padding er ment for unntakstilfeller der du må ha en helt spesifikk og ikke-tokenbasert verdi.</nve-message-card>

## Nøsting

Bokser kan nøstes for å bygge opp et hierarki av padding.

<CodeExamplePreview>

```html
<box-layout size="large" style="background: var(--color-feedback-background-subtle-neutral)">
  <box-layout size="small" style="background: var(--color-feedback-background-default-info)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-subtle-neutral)"></div>
  </box-layout>
</box-layout>
```

</CodeExamplePreview>

## Eksempel på bruk

En boks med konsistent padding rundt en tekst.

<CodeExamplePreview>

```html
<box-layout style="background: var(--color-feedback-background-default-info)">
  <nve-paragraph>Innhold med jevn padding rundt.</nve-paragraph>
</box-layout>
```

</CodeExamplePreview>

Samme innhold uten `box-layout` hvor teksten ligger helt inntil kanten.

<CodeExamplePreview>

```html
<div style="background: var(--color-feedback-background-default-info)"">
  <nve-paragraph>Innhold med null padding rundt.</nve-paragraph>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap  | Type            | Standard | Beskrivelse                                                                               |
| --------- | --------------- | -------- | ----------------------------------------------------------------------------------------- |
| `size`    | `BoxLayoutSize` | `medium` | Tokenbasert padding. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren.            |
| `padding` | `string`        | –        | Eksakt CSS-lengde (`"12px"`, `"1.25rem"`). Skal **ikke** brukes for tokens – bruk `size`. |
