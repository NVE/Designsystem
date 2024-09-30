---
layout: component
---

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item>Hummer</nve-menu-item>
  <nve-menu-item>Kanari</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>

## Eksempler

Se [nve-menu-item](/components/nve-menu-item) for mer info om menyvalg.
Se [nve-divider](/components/nve-divider) for eksempel på hvordan du skiller menyvalg.
Se [nve-dropdown](/components/nve-dropdown) for eksempel på hvordan du lager en drop-down-meny.

### Under-menyer

Du kan lage en under-meny ved å legge en `nve-menu slot="submenu"` inni `nve-menu-item`.

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item>Hummer</nve-menu-item>
  <nve-menu-item
    >Kanari
    <nve-menu slot="submenu">
      <nve-menu-item>Liten</nve-menu-item>
      <nve-menu-item>Stor</nve-menu-item>
    </nve-menu>
  </nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>
