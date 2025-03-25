---
layout: component
---

<CodeExamplePreview>

```html
<nve-tab-group>
  <nve-tab slot="nav" panel="p1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="p2">Fane 2</nve-tab>
  <nve-tab slot="nav" panel="p3">Fane 3</nve-tab>
  <nve-tab slot="nav" panel="inaktiv" disabled>Inaktiv</nve-tab>

  <nve-tab-panel name="p1">Dette er innholdet i den første fanen</nve-tab-panel>
  <nve-tab-panel name="p2">Innhold i fane nummer 2</nve-tab-panel>
  <nve-tab-panel name="p3">Her har vi fane 3-innholdet</nve-tab-panel>
  <nve-tab-panel name="inaktiv">Dette innholdet vil ikke kunne ses, siden fanen er inaktiv</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

## Eksempler

### Bakgrunn bak fane-knapper

Vi kan slå på en bakgrunnsfarge med `showbackground`
<CodeExamplePreview>

```html
<nve-tab-group showbackground>
  <nve-tab slot="nav" panel="p1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="p2">Fane 2</nve-tab>
  <nve-tab slot="nav" panel="p3">Fane 3</nve-tab>
  <nve-tab slot="nav" panel="inaktiv" disabled>Inaktiv</nve-tab>

  <nve-tab-panel name="p1">Dette er innholdet i den første fanen</nve-tab-panel>
  <nve-tab-panel name="p2">Innhold i fane nummer 2</nve-tab-panel>
  <nve-tab-panel name="p3">
    <div>
      Her har vi fane 3-innholdet
      <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
    </div>
  </nve-tab-panel>
  <nve-tab-panel name="inaktiv">Dette innholdet vil ikke kunne ses, siden fanen er inaktiv</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Skillelinje mellom fane-knapper og faner

Vi kan vise en linje under alle fane-knappene med `showunderline`

<CodeExamplePreview>

```html
<nve-tab-group showunderline>
  <nve-tab slot="nav" panel="p1">Fane 1</nve-tab>
  <nve-tab slot="nav" panel="p2">Fane 2</nve-tab>
  <nve-tab slot="nav" panel="p3">Fane 3</nve-tab>
  <nve-tab slot="nav" panel="p4" disabled>Inaktiv</nve-tab>

  <nve-tab-panel name="p1">Dette er innholdet i den første fanen</nve-tab-panel>
  <nve-tab-panel name="p2">Innhold i fane nummer 2</nve-tab-panel>
  <nve-tab-panel name="p3">
    <div>
      Her har vi fane 3-innholdet
      <img src="/assets/transmisjonsnett.jpg" alt="Transmisjonsnett" />
    </div>
  </nve-tab-panel>
  <nve-tab-panel name="p4">Dette innholdet vil ikke kunne ses, siden fanen er inaktiv</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Innhold i fane-knapper

Siden `nve-tab` er et eget element, står man fritt til å bestemme innholdet i denne

<CodeExamplePreview>

```html
<nve-tab-group showunderline showbackground>
  <nve-tab slot="nav" panel="p1">
    <nve-icon name="warning" style="color: var(--brand-primary); margin-inline-end: var(--spacing-xx-small)"></nve-icon>
    <span>Se her!</span>
  </nve-tab>
  <nve-tab slot="nav" panel="p2">
    <span>Mange meldinger</span>
    <nve-badge variant="danger" style="margin-inline-start: var(--spacing-xx-small)">432</nve-badge>
  </nve-tab>
  <nve-tab slot="nav" panel="p3"> Fane 3 </nve-tab>

  <nve-tab-panel name="p1">Dette er innholdet i den første fanen</nve-tab-panel>
  <nve-tab-panel name="p2">Innhold i fane nummer 2</nve-tab-panel>
  <nve-tab-panel name="p3">Her har vi fane 3-innholdet</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>

### Sett en fane som aktiv ved første visning

Bruk `active` på en fane for å sette den til aktiv.

<CodeExamplePreview>

```html
<nve-tab-group showunderline showbackground>
  <nve-tab slot="nav" panel="p1">Første</nve-tab>
  <nve-tab slot="nav" panel="p2" active>Andre</nve-tab>
  <nve-tab slot="nav" panel="p3">Tredje</nve-tab>
  <nve-tab-panel name="p1">Dette er innholdet i den første fanen</nve-tab-panel>
  <nve-tab-panel name="p2">Innhold i fane nummer 2</nve-tab-panel>
  <nve-tab-panel name="p3">Her har vi fane 3-innholdet</nve-tab-panel>
</nve-tab-group>
```

</CodeExamplePreview>
