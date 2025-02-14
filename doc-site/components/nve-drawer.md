---
layout: component
---

<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" class="drawer-overview">
    Lorem ipsum dolor sit amet
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

Default er at skuffen åpner seg på høyre side.

## Eksempler

### Slots

Vi har 3 slots pluss hoved innholdet vi kan endre på

- `label`
- `header-actions`
- `footer`

Label slotten kan også brukes som et attributt på nve-drawer `<nve-drawer label="Skuff">`

<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer placement="end" class="drawer-slot">
    <div slot="label">Dette er label slot'en</div>
    <div slot="header-actions" style="display:flex; align-items: center; ">
      <nve-button id="dialogBtn" variant="text"><nve-icon name="warning"></nve-icon></nve-button>
    </div>
    Lorem ipsum dolor sit amet
    <div slot="footer">Her er footer slot'en</div>
  </nve-drawer>
  <nve-dialog id="dialog" label="Ett eksempel"> <p>Dette er et eksempel</p> </nve-dialog>
</div>
<script>
  const drawer = document.querySelector('.drawer-slot');
  const openButton = drawer.previousElementSibling;

  openButton.addEventListener('click', () => drawer.show());
  document.getElementById('dialogBtn').addEventListener('click', () => document.getElementById('dialog').show());
</script>
```

</CodeExamplePreview>

### Åpne fra venstre side

Bruk `placement="start"` for å åpne skuffen fra venstre side
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="start" class="drawer-placement-start"> Lorem ipsum dolor sit amet </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.previousElementSibling;
  openButton.addEventListener('click', () => drawer.show());
</script>
```

</CodeExamplePreview>

### Åpne fra toppen

Bruk `placement="top"` for å åpne skuffen fra toppen
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="top" class="drawer-placement-top"> Lorem ipsum dolor sit amet </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.previousElementSibling;
  openButton.addEventListener('click', () => drawer.show());
</script>
```

</CodeExamplePreview>

### Åpne fra bunn

Bruk `placement="bottom"` for å åpne skuffen fra bunn av siden
<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" placement="bottom" class="drawer-placement-bottom">
    Lorem ipsum dolor sit amet
    <nve-button variant="primary" slot="footer"> Lukk </nve-button>
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.previousElementSibling;
  openButton.addEventListener('click', () => drawer.show());
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
  <sl-drawer label="Skuff" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </sl-drawer>
</div>

<nve-button>Åpne</nve-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = !drawer.open));
</script>
```

</CodeExamplePreview>
