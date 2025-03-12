<PageHeader title="For utviklere" imagePath="developer"  pageLevel=2></PageHeader>

# Importering av filer

## Import av komponenter

Etter du har innstallert pakken komponentene kan enkelt importeres slik:

```js
import 'nve-designsystem/components/nve-component/nve-component.component.js';
```

Du kan velge om du vil importere en komponent der den brukes i koden eller på et globalt nivå (f.eks. i `main.js` eller `index.html`).
Hvis du bruker mange designsystem-komponenter, anbefaler vi ikke å importere alle globalt, da dette kan føre til lengre lastetid.

Dersom en parent-komponent i applikasjonen importerer en designsystem-komponent, trenger du ikke å importere den igjen i en child-komponent.
Web-komponenter blir registrert i nettleseren første gang de importeres. Det betyr at hvis du importerer en komponent flere steder, registreres den bare én gang, og du unngår duplikater.

## Import av stiler

Importer <em>en</em> .css-fil for farge-tema i en hovedfil i applikasjonen (f.eks. `main.ts` eller `index.html`). Filene finnes i mappa `nve-designsystem/css/`.
For NVE-tema, bruk:

```js
import 'nve-designsystem/css/nve.css';
```

For Varsom-tema, bruk:

```js
import 'nve-designsystem/css/varsom.css';
```

Det finnes også varianter av disse to filene med mørkt tema.

## Import via CDN

Både stiler og komponenter kan importeres via CDN.

### Komponenter via CDN

Du kan importere en komponent i `index.html` slik:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/nve-designsystem@latest/components/nve-component/nve-component.component.js"
></script>
```

Skal du bruke komponenter som inneholder ikoner (som f.eks nve-select, nve-checkbox, nve-carousel, nve-menu-item, nve-input) må du også sørge for at du riktig registrerer ikoner i appen din. For eksempel kan du gjøre dette i `index.html` filen:

```html
<script>
  const registerIconLibraryHelper = () => {
    import('https://cdn.jsdelivr.net/npm/nve-designsystem@latest/registerIcons/systemLibraryCustomization.js').then(
      (module) => {
        const { icons, registerIconLibrary } = module;
        registerIconLibrary('system', {
          resolver: (name) => {
            return `data:image/svg+xml, ${encodeURIComponent(icons[name])}`;
          },
        });
      }
    );
  };
  registerIconLibraryHelper();
</script>
```

### CSS via CDN

Dersom du ikke trenger å innstallere (eller ikke kan bruke) hele nve-designsystem-pakken, men kun vil ha tilgang til CSS-variablene, anbefaler vi å bruke CDN.

Importer NVE-tema i `index.html` slik:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nve-designsystem@latest/css/nve.css" />
```

For Varsom-tema, bruk:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nve-designsystem@latest/css/varsom.css" />
```

Det samme gjelder for mørke temaer.
