<PageHeader title="For utviklere" imagePath="developer"  pageLevel=2></PageHeader>

# Importering av filer

## Import av komponenter

For å registrere en webkomponent i applikasjonen der den brukes, må den importeres med en <b>side-effekt-import</b>:

```js
import 'nve-designsystem/components/nve-component/nve-component.component.js';
```

Grunnen til at komponenten må importeres på denne måten er at <b>@customElement-dekoratoren</b> kjører customElements.define(...), som registrerer webkomponenten i nettleseren. Dette skjer kun når modulen faktisk blir evaluert.

En <b>side-effekt-import</b> sørger for at komponenten blir registrert, men gir deg ikke nødvendigvis god type-støtte i editoren. Derfor vil du ofte ikke få forslag til tilgjengelige attributter når du bruker komponenten i HTML (for eksempel i Vue eller React).

For å få tilgang til typen kan du importere den separat:

```js
import NveComponent from 'nve-designsystem/components/nve-component/nve-component.component.js';
```

Dette gir bedre typehjelp, men kan føre til flere imports dersom du både vil registrere komponenten og bruke typen.

Alle imports som går via roten av designsystemet, for eksempel:

```js
import { NveButton, NveAlert } from 'nve-designsystem';
```

vil ofte føre til at hele nve-designsystem-pakken blir importert. Dette kan øke bundle-størrelsen unødvendig dersom du kun bruker noen få komponenter.

Designsystemet er per nå ca. 0.5 MB og vil sannsynligvis vokse over tid, så det er verdt å vurdere hvordan komponenter importeres.

Du kan velge om du vil importere en komponent der den brukes i koden eller på et globalt nivå (f.eks. i `main.js` eller `index.html`).
Hvis du bruker mange designsystem-komponenter, anbefaler vi ikke å importere alle globalt, da dette kan føre til lengre lastetid.

Dersom en parent-komponent i applikasjonen importerer en designsystem-komponent, trenger du ikke å importere den igjen i child-komponenten.
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

Skal du bruke komponenter som inneholder ikoner (som f.eks nve-combobox, nve-checkbox, nve-carousel, nve-menu-item, nve-input) må du også sørge for at du riktig registrerer ikoner i appen din. For eksempel kan du gjøre dette i `index.html` filen:

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
