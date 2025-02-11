---
layout: component
---

<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" class="drawer-overview">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.previousElementSibling;
  const closeButton = drawer.querySelector('nve-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

</CodeExamplePreview>

Default er at drawer åpner seg på høyre side.

## Eksempler

### Åpne fra venstre side

Bruk `placement="start"` for å åpne drawer fra venstre side
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="start" class="drawer-placement-start">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.previousElementSibling;
  const closeButton = drawer.querySelector('nve-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

</CodeExamplePreview>

### Åpne fra toppen

Bruk `placement="top"` for å åpne drawer fra toppen
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="top" class="drawer-placement-top">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.previousElementSibling;
  const closeButton = drawer.querySelector('nve-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

</CodeExamplePreview>

### Åpne fra bunn

Bruk `placement="bottom"` for å åpne drawer fra bunn av siden
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="bottom" class="drawer-placement-bottom">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.previousElementSibling;
  const closeButton = drawer.querySelector('nve-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

</CodeExamplePreview>

### Bundet til et element

Som standard glir skuffer ut av sin inneholdende blokk, som vanligvis er visningsporten. For å få en skuff til å gli ut av et overordnet element, legg til attributtet `placement="contained"` til skuffen og bruk `"position: relative"` på det overordnede elementet.

I motsetning til vanlige skuffer, er ikke inneholdte skuffer modale. Dette betyr at de ikke viser et overlegg, de fanger ikke fokus, og de kan ikke lukkes med Escape. Dette er med vilje for å tillate brukere å samhandle med elementer utenfor skuffen.

<CodeExamplePreview>

```html
<div
  style="position: relative; border: solid 2px var(--sl-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  <sl-drawer label="Skuff" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </sl-drawer>
</div>

<nve-button>Åpne</nve-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;
  const closeButton = drawer.querySelector('nve-button[variant="primary"]');

  openButton.addEventListener('click', () => (drawer.open = !drawer.open));
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

</CodeExamplePreview>
