# nve-box

`nve-box` pakker innhold i en boks med konsistent padding.

`padding` er knyttet direkte til spacing-tokenene i designsystemet og sikrer at paddingen er konsistent på tvers av sider og komponenter.

## Import

Layout-komponentene ligger et nivå under de andre komponentene. For å bruke disse kan du følge stien med `/layout` etterfulgt av komponentet du vil bruke. Eksempel:

```javascript
import 'nve-designsystem/components/layouts/nve-box/nve-box.component.js';
```

## Padding

`padding` setter padding rundt innholdet ved bruk av et spacing-token. Hvis `padding` ikke er satt, brukes `medium` som standard.

### Gyldige spacing-verdier

Følgende verdier er gyldige for `padding`:
`none`, `2x-small`, `x-small`, `small`, `medium` (default), `large`, `x-large`, `2x-large`, `3x-large`, `4x-large` og `5x-large`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-box padding="small" background="--color-neutrals-background-canvas">
  <div style="padding: 0.75rem; background: var(--color-neutrals-background-secondary)"></div>
</nve-box>
<nve-box background="--color-neutrals-background-canvas">
  <div style="padding: 0.75rem; background: var(--color-neutrals-background-secondary)"></div>
</nve-box>
<nve-box padding="large" background="--color-neutrals-background-canvas">
  <div style="padding: 0.75rem; background: var(--color-neutrals-background-secondary)"></div>
</nve-box>
```

</CodeExamplePreview>

## Bakgrunn

`background` setter en tokenbasert bakgrunnsfarge på boksen. Gyldige verdier kommer fra neutrals background-tokensene.

### Gyldige bakgrunnsverdier

Følgende verdier er gyldige for `background`: `--color-neutrals-background-canvas`, `--color-neutrals-background-primary`, `--color-neutrals-background-primary-contrast`, `--color-neutrals-background-secondary`, `--color-neutrals-background-secondary-dim` og `--color-neutrals-background-tertiary-dim`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-box background="--color-neutrals-background-canvas">
  <nve-paragraph>canvas</nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-primary">
  <nve-paragraph>primary</nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-primary-contrast">
  <nve-paragraph>primary-contrast</nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-secondary">
  <nve-paragraph>secondary</nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-secondary-dim">
  <nve-paragraph style="color: var(--color-neutrals-foreground-inverted)">secondary-dim</nve-paragraph>
</nve-box>
<nve-box background="--color-neutrals-background-tertiary-dim">
  <nve-paragraph style="color: var(--color-neutrals-foreground-inverted)">tertiary-dim</nve-paragraph>
</nve-box>
```

</CodeExamplePreview>

## Nøsting

Bokser kan nøstes for å bygge opp et hierarki av padding.

<CodeExamplePreview>

```html
<nve-box padding="large" background="--color-neutrals-background-canvas">
  <nve-box padding="small" background="--color-neutrals-background-secondary">
    <div style="padding: 0.75rem; background: var(--color-neutrals-background-canvas)"></div>
  </nve-box>
</nve-box>
```

</CodeExamplePreview>

## Eksempel på bruk

En boks med konsistent padding rundt en tekst.

<CodeExamplePreview>

```html
<nve-box background="--color-neutrals-background-secondary">
  <nve-paragraph>Innhold med jevn padding rundt.</nve-paragraph>
</nve-box>
```

</CodeExamplePreview>

Samme innhold uten `nve-box` hvor teksten ligger helt inntil kanten.

<CodeExamplePreview>

```html
<div style="background: var(--color-neutrals-background-secondary)">
  <nve-paragraph>Innhold med null padding rundt.</nve-paragraph>
</div>
```

</CodeExamplePreview>

## Egenskaper

| Egenskap         | Type            | Standard | Beskrivelse                                                                              |
| ---------------- | --------------- | -------- | ---------------------------------------------------------------------------------------- |
| `background`     | `BoxBackground` | —        | Tokenbasert bakgrunnsfarge. Gyldige verdier er `--color-neutrals-background-*`-tokenene. |
| `padding`        | `SpacingToken`  | `medium` | Tokenbasert padding på alle sider. Visuell standard er `medium` via CSS.                 |
| `padding-block`  | `SpacingToken`  | —        | Overstyrer `padding` i blokk-retning (topp/bunn).                                        |
| `padding-inline` | `SpacingToken`  | —        | Overstyrer `padding` i inline-retning (venstre/høyre).                                   |
| `margin`         | `SpacingToken`  | —        | Tokenbasert margin på alle sider.                                                        |
| `margin-block`   | `SpacingToken`  | —        | Overstyrer `margin` i blokk-retning (topp/bunn).                                         |
| `margin-inline`  | `SpacingToken`  | —        | Overstyrer `margin` i inline-retning (venstre/høyre).                                    |
