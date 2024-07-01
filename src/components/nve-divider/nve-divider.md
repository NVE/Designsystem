```html:preview
<nve-divider></nve-divider>
```

## Eksempler

### Orientering

Bruk `vertical` for å lage en vertikal skillelinje. Du må sette en høyde for at streken skal synes.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  venstre
  <nve-divider vertical></nve-divider>
  midten
  <nve-divider vertical></nve-divider>
  høyre
</div>
```

### Bruk i menyer

Bruk denne til å skille menyvalg fra hverandre.

```html:preview
<nve-menu>
    <nve-menu-item>Valg 1</nve-menu-item>
    <nve-menu-item>Valg 2</nve-menu-item>
    <nve-divider></nve-divider>
    <nve-menu-item>Valg 3</nve-menu-item>
</nve-menu>
```
