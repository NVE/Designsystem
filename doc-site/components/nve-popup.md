---
layout: component
---

<CodeExamplePreview arrangeComponentsVertically>

```html
<div style="margin:32px">
  <nve-popup placement="top" active>
    <span slot="anchor" style="border: 1px dotted black; border-radius:4px; padding:4px; width:100px;">Ankare</span>
    <div style="border: 1px solid black; border-radius:4px; padding:4px; ">Innehåll i popup</div>
  </nve-popup>
</div>
```

</CodeExamplePreview>

## Eksempler

### Plassering

Bruk `placement` for å styre plassering.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-popup placement="right" active>
  <span slot="anchor" style="border: 1px dotted black; border-radius:4px; padding:4px; width:100px;">Ankare</span>
  <div style="border: 1px solid black; border-radius:4px; padding:4px; ">Innehåll i popup</div>
</nve-popup>
```

</CodeExamplePreview>
