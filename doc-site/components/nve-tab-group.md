---
layout: component
---

<CodeExamplePreview>

```html
<sl-tab-group>
  <sl-tab slot="nav" panel="general">General</sl-tab>
  <sl-tab slot="nav" panel="custom">Custom</sl-tab>
  <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
  <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

  <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
  <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
  <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
  <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
</sl-tab-group>
```

</CodeExamplePreview>

## Eksempler

### Plassering

Bruk `placement` for å velge Plassering. `top` er standard.

<CodeExamplePreview>

```html
<sl-tab-group placement="bottom">
  <sl-tab slot="nav" panel="general">General</sl-tab>
  <sl-tab slot="nav" panel="custom">Custom</sl-tab>
  <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
  <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

  <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
  <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
  <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
  <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
</sl-tab-group>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<sl-tab-group placement="start">
  <sl-tab slot="nav" panel="general">General</sl-tab>
  <sl-tab slot="nav" panel="custom">Custom</sl-tab>
  <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
  <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

  <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
  <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
  <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
  <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
</sl-tab-group>
```

</CodeExamplePreview>
