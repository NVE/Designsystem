# nve-box

`nve-box` pakker innhold i en boks med konsistent padding.

I de aller fleste tilfeller skal du bruke `padding`. `padding` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at paddingen er konsistent på tvers av sider og komponenter.

## Padding

`padding` setter padding rundt innholdet ved bruk av et spacing-token. Hvis `padding` ikke er satt, brukes `medium` som standard.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-box padding="small" background="--color-feedback-background-subtle-neutral">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-box>
<nve-box background="--color-feedback-background-subtle-neutral">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-box>
<nve-box padding="large" background="--color-feedback-background-subtle-neutral">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-box>
```

</CodeExamplePreview>

## Bakgrunn

`background` setter en tokenbasert bakgrunnsfarge på boksen.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-box background="--color-brand-background-primary">
  <nve-paragraph></nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-secondary">
  <nve-paragraph></nve-paragraph>
</nve-box>
<nve-box background="--color-brand-background-quaternary">
  <nve-paragraph></nve-paragraph>
</nve-box>
```

</CodeExamplePreview>

## Nøsting

Bokser kan nøstes for å bygge opp et hierarki av padding.

<CodeExamplePreview>

```html
<nve-box padding="large" background="--color-feedback-background-subtle-neutral">
  <nve-box padding="small" background="--color-feedback-background-default-info">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-subtle-neutral)"></div>
  </nve-box>
</nve-box>
```

</CodeExamplePreview>

## Eksempel på bruk

En boks med konsistent padding rundt en tekst.

<CodeExamplePreview>

```html
<nve-box background="--color-feedback-background-default-info">
  <nve-paragraph>Innhold med jevn padding rundt.</nve-paragraph>
</nve-box>
```

</CodeExamplePreview>

Samme innhold uten `nve-box` hvor teksten ligger helt inntil kanten.

<CodeExamplePreview>

```html
<div style="background: var(--color-feedback-background-default-info)">
  <nve-paragraph>Innhold med null padding rundt.</nve-paragraph>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap     | Type                                                                                                                                       | Standard | Beskrivelse                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------- |
| `padding`    | `'none' \| '2x-small' \| 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| '3x-large' \| '4x-large' \| '5x-large'` | `medium` | Tokenbasert padding. Mapper til `--spacing-<verdi>` |
| `background` | Eksempel: `--color-brand-background-primary`                                                                                               | `none`   | Tokenbasert bakgrunnsfarge.                         |
