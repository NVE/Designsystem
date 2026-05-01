---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-radio-group label="Hvilken seksjon er best i IKTI?">
  <nve-radio value="IUR-1">Kanskje IUR</nve-radio>
  <nve-radio value="IUR-2">Må være IUR</nve-radio>
  <nve-radio value="IUR-3">IUR?</nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>

<CodeExamplePreview>

```html
<nve-radio-group label="Test" tooltip="test" value="test3">
  <nve-radio value="test2" size="large">test 2</nve-radio>
  <nve-radio value="test3" size="small">test 3</nve-radio>
  <nve-radio value="test4" disabled size="small">test 4</nve-radio>
</nve-radio-group>
<nve-radio-group label="test" orientation="horizontal" required requiredvalue="Obligatorisk">
  <nve-radio value="test2" size="large">test2</nve-radio>
  <nve-radio value="test3" size="small">test3</nve-radio>
  <nve-radio value="test3" size="small">test3</nve-radio>
</nve-radio-group>

<nve-radio-group label="test" orientation="vertical" errorMessage="should be better">
  <nve-radio value="test2" size="large"></nve-radio>
  <nve-radio value="test3" size="small"></nve-radio>
  <nve-radio value="test3" size="small"></nve-radio>
</nve-radio-group>
```

</CodeExamplePreview>
