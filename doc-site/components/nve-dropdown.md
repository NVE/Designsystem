---
layout: component
---

<nve-message-card label="Tips">
<span>For nedtrekksliste/"rullgardin"/dropdown-list, bruk <a href="/components/nve-select.html">nve-select</a></span>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-dropdown>
  <nve-button variant="primary" slot="trigger">
    <nve-icon name="expand_more" slot="suffix"></nve-icon>
    Dropdown
  </nve-button>
  <nve-menu>
    <nve-menu-item>Normal tekst</nve-menu-item>
    <nve-menu-item subtext="Dette er en undertekst">Tekst</nve-menu-item>
    <nve-menu-item>
      <nve-checkbox>Checkbox</nve-checkbox>
    </nve-menu-item>
    <nve-divider></nve-divider>
    <nve-menu-item>Normal tekst</nve-menu-item>
    <nve-menu-item indent="">Undertittel</nve-menu-item>
    <nve-label value="Kategori 1"> </nve-label>
    <nve-menu-item -=""
      >Submenu
      <nve-menu slot="submenu">
        <nve-menu-item>Tekst 2</nve-menu-item>
        <nve-menu-item>Tekst 3</nve-menu-item>
        <nve-menu-item>Tekst 4</nve-menu-item>
      </nve-menu>
    </nve-menu-item>
    <nve-menu-item dividertop="">Divider top</nve-menu-item>
    <nve-menu-item disabled="">Disabled</nve-menu-item>
    <nve-label value="Kategori 2" iconleft="" iconcolor="black">
      <div slot="tooltip">Hjelpetekst kan være veldig lang <strong>HTML</strong></div>
    </nve-label>
    <nve-menu-item dividerbottom="">Divider bottom</nve-menu-item>
    <nve-menu-item><nve-icon slot="prefix" name="info"></nve-icon>Ikon</nve-menu-item>
  </nve-menu>
</nve-dropdown>
```

</CodeExamplePreview>
