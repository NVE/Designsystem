# nve-stack

`nve-stack` stabler barn-elementer vertikalt med mellomrom.

I de aller fleste tilfeller skal du bruke `gap`. `gap` er knyttet direkte til spacing-tokenene i designsystemet og er det som sikrer at avstandene er konsistente på tvers av sider og komponenter.

## Mellomrom

`gap` setter avstanden mellom barn-elementene ved bruk av et spacing-token.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)" containerItemsAlign="start">

```html
<nve-stack gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack gap="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
```

</CodeExamplePreview>

## Justering

`justify` styrer hvordan barn-elementene fordeles vertikalt. Tilsvarer CSS-egenskapen `justify-content`.

<CodeExamplePreview containerGridTemplateColumns="repeat(3, 1fr)">

```html
<nve-stack
  justify="flex-start"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack
  justify="center"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack
  justify="flex-end"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack
  justify="space-between"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack
  justify="space-around"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
<nve-stack
  justify="space-evenly"
  gap="small"
  style="height: 220px; padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)"
>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
</nve-stack>
```

</CodeExamplePreview>

## Nøsting

Stacks kan nøstes for å bygge opp et hierarki av avstander.

<CodeExamplePreview>

```html
<nve-stack gap="large" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
  <nve-stack gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  </nve-stack>
  <nve-stack gap="small" style="padding: 0.5rem; background: var(--color-feedback-background-subtle-neutral)">
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
    <div style="padding: 0.75rem; background: var(--color-feedback-background-default-info)"></div>
  </nve-stack>
</nve-stack>
```

</CodeExamplePreview>

## Eksempel på bruk

Med `nve-stack` får du konsistent avstand fra et token, uten egen CSS.

<CodeExamplePreview>

```html
<nve-stack>
  <nve-input label="Navn"></nve-input>
  <nve-input label="E-post" type="email"></nve-input>
  <nve-textarea label="Melding"></nve-textarea>
  <nve-button variant="primary">Send inn</nve-button>
</nve-stack>
```

</CodeExamplePreview>

Uten `nve-stack` klistrer elementene seg sammen og må styles individuelt for å få luft mellom seg.

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

| Egenskap         | Type            | Standard     | Beskrivelse                                                                            |
| ---------------- | --------------- | ------------ | -------------------------------------------------------------------------------------- |
| `gap`            | `SpacingToken`  | `medium`     | Tokenbasert mellomrom mellom barn-elementer.                                           |
| `justify`        | `LayoutJustify` | `flex-start` | Fordeling langs den vertikale aksen. Gyldige verdier er CSS `justify-content`-verdier. |
| `padding`        | `SpacingToken`  | —            | Tokenbasert padding på alle sider.                                                     |
| `padding-block`  | `SpacingToken`  | —            | Overstyrer `padding` i blokk-retning (topp/bunn).                                      |
| `padding-inline` | `SpacingToken`  | —            | Overstyrer `padding` i inline-retning (venstre/høyre).                                 |
| `margin`         | `SpacingToken`  | —            | Tokenbasert margin på alle sider.                                                      |
| `margin-block`   | `SpacingToken`  | —            | Overstyrer `margin` i blokk-retning (topp/bunn).                                       |
| `margin-inline`  | `SpacingToken`  | —            | Overstyrer `margin` i inline-retning (venstre/høyre).                                  |
