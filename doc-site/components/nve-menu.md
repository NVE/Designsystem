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

### Skille menyvalg fra hverandre. TODO: Fjern dette når vi er enige om løsning.

Trenger vi egentlig `dividerTop` og `dividerBottom` på `nve-menu-item`?
For det første virker det som `dividerTop` og `dividerBottom` er helt like når det gjelder avstand mellom menyvalgene.
Virker enklere å bruke `nve-divider` i standard-sporet i stedet, om vi hadde fått til å vise riktig farge på `nve-divider` om den er inni en meny. Da er vi mer i tråd med Shoelace også.

<CodeExamplePreview>

```html
<nve-label>Bruk av nve-divider</nve-label>
<nve-menu>
  <nve-menu-item>Valg 1</nve-menu-item>
  <nve-menu-item>Valg 2</nve-menu-item>
  <nve-divider></nve-divider>
  <nve-menu-item>Valg 3</nve-menu-item>
  <nve-menu-item>Valg 4</nve-menu-item>
  <nve-divider></nve-divider>
  <nve-menu-item>Valg 5</nve-menu-item>
</nve-menu>

<nve-label>Bruk av dividerTop og dividerBottom</nve-label>
<nve-menu>
  <nve-menu-item>Valg 1</nve-menu-item>
  <nve-menu-item>Valg 2</nve-menu-item>
  <nve-menu-item dividerTop>Valg 3</nve-menu-item>
  <nve-menu-item dividerBottom>Valg 4</nve-menu-item>
  <nve-menu-item>Valg 5</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>
