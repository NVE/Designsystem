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

Bruk [nve-divider](/components/nve-divider) for skille menyvalg.
Se eksempel på hvordan du kan lage under-menyer i sida for [nve-menu](/components/nve-menu).

### Ikoner

Putt et `nve-icon` i sporet `prefix` eller `suffix` inni `nve-menu-item` for å vise et ikon foran eller bak menyvalget. Du kan også bruke `nve-badge` inni et menyvalg.

<CodeExamplePreview>

```html
<!-- vi setter maks-bredde for at menyen ikke skal fylle hele bredden på boksen -->
<nve-menu style="max-width: 240px;">
  <nve-menu-item
    >Med ikon foran
    <nve-icon slot="prefix" name="favorite"></nve-icon>
  </nve-menu-item>
  <nve-menu-item
    >Med ikon bak
    <nve-icon slot="suffix" name="favorite"></nve-icon>
  </nve-menu-item>
  <nve-menu-item
    >Med ikon foran og bak
    <nve-icon slot="prefix" name="favorite"></nve-icon>
    <nve-icon slot="suffix" name="favorite"></nve-icon>
  </nve-menu-item>
  <nve-menu-item
    >Med badge
    <nve-badge slot="suffix">42</nve-badge>
  </nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>

### Deaktivering

Bruk `disabled` for å deaktivere et menyvalg.

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item disabled>Hummer</nve-menu-item>
  <nve-menu-item>Kanari</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>

### Av/på

Bruk `type="checkbox"` for å markere at menyvalget kan skrus av og på. Om valget er "på" er `checked` satt.

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item type="checkbox">Valg 1</nve-menu-item>
  <nve-menu-item type="checkbox" checked>Valg 2</nve-menu-item>
  <nve-menu-item>Valg 3</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>

### Å vite hvilket menyvalg som ble valgt

Bruk `value` for å gi menyvalget en unik ID. Du kan lese av `value` til aktuelt menyvalg i `event.detail.item` i `sl-select`-hendelsen når noe velges.

<CodeExamplePreview>

```html
<nve-menu class="menu-value">
  <nve-menu-item value="opt-1">Option 1</nve-menu-item>
  <nve-menu-item value="opt-2">Option 2</nve-menu-item>
  <nve-menu-item value="opt-3">Option 3</nve-menu-item>
  <sl-divider></sl-divider>
  <nve-menu-item type="checkbox" value="opt-4">Checkbox 4</nve-menu-item>
  <nve-menu-item type="checkbox" value="opt-5">Checkbox 5</nve-menu-item>
  <nve-menu-item type="checkbox" value="opt-6">Checkbox 6</nve-menu-item>
</nve-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('sl-select', (event) => {
    const item = event.detail.item;

    if (item.type === 'checkbox') {
      console.log(`Valgt verdi: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Valgt verdi: ${item.value}`);
    }
  });
</script>
```

</CodeExamplePreview>

### Undertekst

Bruk `subtext` for å lage en undertekst til et menyvalg.

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item subtext="Et ettertraket skalldyr">Hummer</nve-menu-item>
  <nve-menu-item>Kanari</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>

### Innrykk

Bruk `indent` for å lage et "under-menyvalg".

<CodeExamplePreview>

```html
<nve-menu>
  <nve-menu-item>Vanlig menyvalg</nve-menu-item>
  <nve-menu-item indent>Under-menyvalg</nve-menu-item>
</nve-menu>
```

</CodeExamplePreview>
