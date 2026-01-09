<PageHeader title="For utviklere" imagePath="developer"  pageLevel=2></PageHeader>

# Importering av filer

## Import av komponenter

Etter du har installert pakken kan komponentene enkelt importeres slik:

```js
import 'nve-designsystem/components/nve-component/nve-component.component.js';
```

Du kan velge om du vil importere en komponent der den brukes i koden eller på et globalt nivå (f.eks. i `main.js` eller `index.html`).
Hvis du bruker mange designsystem-komponenter, anbefaler vi ikke å importere alle globalt, da dette kan føre til lengre lastetid.

Dersom en parent-komponent i applikasjonen importerer en designsystem-komponent, trenger du ikke å importere den igjen i child-komponentet.
Web-komponenter blir registrert i nettleseren første gang de importeres. Det betyr at hvis du importerer en komponent flere steder, registreres den bare én gang, og du unngår duplikater.

## Import av stiler

Importer én `.css`-fil for fargetema i en hovedfil i applikasjonen (f.eks. `main.ts` eller `index.html`). Filene finnes i mappa `nve-designsystem/css/`.
For NVE-tema, bruk:

```js
import 'nve-designsystem/css/nve.css';
```

For Varsom-tema, bruk:

```js
import 'nve-designsystem/css/varsom.css';
```

Det finnes også varianter av disse to filene med mørkt tema.

## Import av skrifttyper

Designsystemet bruker skrifttypen Source Sans Pro med font-vekt 400 og 600.
Den enkleste måten å importere skrifttyper på er å hente dem direkte fra cdnfonts.com, ved å legge dette i en global css-fil:

```css
@import url('https://fonts.cdnfonts.com/css/source-sans-pro');
```

Et alternativ som gir raskere oppstart er å importere skrifttypene i HTML med `<link rel="preload" as="font" ...>`, men da må du spesifisere hver font-fil for seg.

Du kan også laste ned og distribuere skrifttypene sammen med applikasjonen din. Dette gir færre avhengigheter til eksterne kilder og kan gi enda raskere oppstartstid. Du får også offline-støtte.
Slik kan du inkludere skrifttyper distribuert med applikasjonen (sjekk at du bruker samme sti og navn på filene):

```css
@font-face {
  font-family: 'Source Sans Pro';
  src:
    local('Source Sans Pro'),
    url('/fonts/source-sans-3-latin-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Source Sans Pro';
  src:
    local('Source Sans Pro'),
    url('/fonts/source-sans-3-latin-400-italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: 'Source Sans Pro';
  src:
    local('Source Sans Pro'),
    url('/fonts/source-sans-3-latin-600-normal.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Source Sans Pro';
  src:
    local('Source Sans Pro'),
    url('/fonts/source-sans-3-latin-600-italic.woff2') format('woff2');
  font-weight: 600;
  font-style: italic;
}
```

[Her](/introduction/designelementer/typography.html) er mer info om skrifttypene som brukes i Designsystemet.

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

Dersom du ikke trenger å installere (eller ikke kan bruke) hele nve-designsystem-pakken, men kun vil ha tilgang til CSS-variablene, anbefaler vi å bruke CDN.

Importer NVE-tema i `index.html` slik:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nve-designsystem@latest/css/nve.css" />
```

For Varsom-tema, bruk:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nve-designsystem@latest/css/varsom.css" />
```

Det samme gjelder for mørke temaer.
