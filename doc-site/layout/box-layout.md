# box-layout

`box-layout` pakker innhold i en boks med konsistent padding.

I de aller fleste tilfeller skal du bruke `padding`. `padding` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at paddingen er konsistent på tvers av sider og komponenter.

## Padding

`padding` setter padding rundt innholdet ved bruk av et spacing-token. Hvis `padding` ikke er satt, brukes `medium` som standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<box-layout padding="small" background="neutral-subtle">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout background="neutral-subtle">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
<box-layout padding="large" background="neutral-subtle">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</box-layout>
```

</CodeExamplePreview>

## Bakgrunn

`background` setter en tokenbasert bakgrunnsfarge på boksen. Verdiene mapper til feedback-fargene i designsystemet.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<box-layout background="neutral">
  <nve-paragraph>neutral</nve-paragraph>
</box-layout>
<box-layout background="info">
  <nve-paragraph>info</nve-paragraph>
</box-layout>
<box-layout background="success">
  <nve-paragraph>success</nve-paragraph>
</box-layout>
<box-layout background="warning">
  <nve-paragraph>warning</nve-paragraph>
</box-layout>
<box-layout background="error">
  <nve-paragraph>error</nve-paragraph>
</box-layout>
```

</CodeExamplePreview>

<nve-message-card size="compact" variant="info" >Trenger du en farge som ikke finnes blant tokenene, kan du fortsatt sette bakgrunn via style-attributtet. Foretrekk likevel background-propen for konsistens.</nve-message-card>

## Nøsting

Bokser kan nøstes for å bygge opp et hierarki av padding.

<CodeExamplePreview>

```html
<box-layout padding="large" background="neutral-subtle">
  <box-layout padding="small" background="info">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-subtle-neutral)"></div>
  </box-layout>
</box-layout>
```

</CodeExamplePreview>

## Eksempel på bruk

En boks med konsistent padding rundt en tekst.

<CodeExamplePreview>

```html
<box-layout background="info">
  <nve-paragraph>Innhold med jevn padding rundt.</nve-paragraph>
</box-layout>
```

</CodeExamplePreview>

Samme innhold uten `box-layout` hvor teksten ligger helt inntil kanten.

<CodeExamplePreview>

```html
<div style="background: var(--color-feedback-background-default-info)">
  <nve-paragraph>Innhold med null padding rundt.</nve-paragraph>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap     | Type                                                                                                                                                                | Standard | Beskrivelse                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| `padding`    | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'`                          | `medium` | Tokenbasert padding. Mapper til `--spacing-<verdi>`. Autoutfylling i editoren. |
| `background` | `'none' \| 'neutral' \| 'neutral-subtle' \| 'info' \| 'info-subtle' \| 'success' \| 'success-subtle' \| 'warning' \| 'warning-subtle' \| 'error' \| 'error-subtle'` | `none`   | Tokenbasert bakgrunnsfarge. Mapper til `--color-feedback-background-*`.        |
