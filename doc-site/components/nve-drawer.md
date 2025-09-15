---
layout: component
---

<CodeExamplePreview>

```html
<div>
  <nve-button>Åpne</nve-button>
  <nve-drawer label="Skuff" class="drawer-overview">
    Lorem ipsum dolor sit amet
  </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.previousElementSibling;
  openButton.addEventListener('click', () => drawer.show());
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
    <div slot="header-actions">
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
      <nve-drawer label="Skuff" placement="start" class="drawer-placement-start1">
          Lorem ipsum dolor sit amet 
      </nve-drawer>
</div>

<script>
  const drawer = document.querySelector('.drawer-placement-start1');
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
  <nve-drawer label="Skuff" placement="top" class="drawer-placement-top">
      Lorem ipsum dolor sit amet 
  </nve-drawer>
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
  <nve-drawer label="Skuff" contained class="drawer-contained" style="--size: 50%;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </nve-drawer>
</div>

<nve-button>Åpne</nve-button>

<script>
  const drawer = document.querySelector('.drawer-contained');
  const openButton = drawer.parentElement.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = !drawer.open));
</script>
```

</CodeExamplePreview>

### Utfyllende eksempel

Skuffen skal ikke ha en knapp i footer for å lukke draweren. Denne funksjonaliteten er dekket av lukke ikonet øverst vedsiden av label.
<CodeExamplePreview>

```html
    <div>
      <nve-button>Åpne</nve-button>
      <nve-drawer label="Tittel" placement="bottom"  class="drawer-utfyllende-eksempel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus velit a est placerat, in cursus urna varius. Pellentesque vestibulum enim in velit hendrerit feugiat. Morbi dapibus est lacus, nec blandit tortor feugiat et. Nulla tempus orci eget felis tempus interdum. Maecenas quis risus et sem ullamcorper pharetra. In hac habitasse platea dictumst. Integer a risus tincidunt, posuere nisi id, interdum augue. Pellentesque sagittis vulputate orci, vitae commodo elit porta ac. In laoreet eget diam aliquet pretium. Sed vel arcu commodo, auctor ex in, accumsan nisl. Maecenas varius, magna quis dignissim porta, dolor justo ullamcorper dui, non mollis augue nunc quis mi. Quisque in porttitor ligula. Vestibulum at ullamcorper nibh. In nisi quam, scelerisque at purus sit amet, congue molestie lectus. Curabitur dapibus rutrum mauris et luctus. Nulla efficitur, erat tincidunt posuere sagittis, sem massa tempus sem, id convallis magna augue eget libero. Morbi justo quam, imperdiet at porttitor blandit, semper et lectus. Pellentesque consectetur turpis eget libero pulvinar, id vehicula lorem dignissim. Proin nec mi bibendum, sagittis sapien at, fringilla arcu. Quisque pellentesque velit lectus, in sagittis odio auctor ut. Donec faucibus, nunc a interdum faucibus, purus nisi bibendum mi, non cursus enim libero sit amet nibh. Donec feugiat justo quis odio gravida, non mattis magna vehicula. Donec sagittis tincidunt diam quis porta. Nulla feugiat, est ut pharetra tempus, nibh turpis sollicitudin lacus, et pharetra elit orci elementum diam. Sed id egestas quam, sit amet tristique lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eget lorem tempus, maximus lacus vel, sagittis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer rhoncus nisl arcu, ut interdum nunc efficitur non. Etiam semper imperdiet suscipit. Nunc vehicula scelerisque tempus. Phasellus pharetra dignissim finibus. Vestibulum suscipit tortor eget magna feugiat consequat. Pellentesque eleifend neque vel lobortis consequat. Nam tellus leo, rutrum quis nunc sed, laoreet mattis lacus. Praesent euismod libero sit amet sapien volutpat rutrum. Aenean eget tempor magna. Vestibulum quis magna in erat facilisis convallis. Cras sit amet velit quis velit vehicula malesuada pharetra et nisi. Suspendisse potenti. Sed maximus id nunc sed rutrum. Integer in sapien vitae metus ultricies tempus nec dignissim elit. Etiam posuere, quam et accumsan vehicula, massa lectus iaculis augue, nec ultrices diam turpis ac tellus. Fusce tincidunt mi et quam pulvinar, vitae scelerisque ex efficitur. Fusce vel ligula a ipsum facilisis lacinia.
          <nve-button variant="info" slot="footer"> Button text
              <nve-icon slot="suffix" name="grid_guides">
          </nve-button>
          <nve-button variant="primary" slot="footer"> Button text
              <nve-icon slot="suffix" name="grid_guides">
          </nve-button> 
      </nve-drawer>
    </div>
    
    <script>
      const drawer = document.querySelector('.drawer-utfyllende-eksempel');
      const openButton = drawer.previousElementSibling;
      
      openButton.addEventListener('click', () => drawer.show());
    </script>
```
</CodeExamplePreview>