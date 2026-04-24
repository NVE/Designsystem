---
layout: component
outline: [2, 3]
---

For å legge til alternativer i select-komponenten bruk <span class="highlight">options</span>-attributtet.

<span class="highlight">Option</span> er en generisk type der T beskriver typen til <span class="highlight">value</span>. String er standard typen, men du kan også bruke objekter, array, eller tallene. Typen består av:

- <span class="highlight">value</span> - kan være string, tall, objekt, array og er den faktiske verdien som returneres.
- <span class="highlight">id</span> - er en unik identifikator som brukes internt til referanser, fokus og ARIA-koblinger.
- <span class="highlight">label</span> - er teksten som vises i nedtrekksmenyen.

```js
type Option<T = string> = {
  id: string;
  value: T;
  label: string;
};
```

Typen kan importeres slik:

```js
import type { Option } from 'nve-designsystem/components/nve-select-demo/nve-select-demo.component.js';
```

Bruk eksempel:

```js
 const options: Option[] = [
  {
   value:"ek",
   id: "ek",
   label: "EK"
  }
 ]

 const optionsWithObject: Option<{name: string, surname:string}>[] = [
  {
   value: {
    name: "Ola",
    surname: "Norman"
   },
   id: "12345",
   label: "Ola Norman"
  }
 ]
```

<br />

<nve-message-card variant="primary" label="Info" size="compact">
<p><b>Options</b>-attributtet fjernes fra DOM-en etter innlasting, og verdien lagres i en intern tilstand i comboboxen. Dette gjøres for å hindre at DOM-en fylles opp med unødvendig data.</p>
</nve-message-card>

Alle valgte alternativer lagres i et intern <span class="highlight">selectedValues</span>-array som returneres via <span class="highlight">change</span>-hendelsen. Hendelsestype kan importers ved:

```js
import type { NveSelectChangeDetail } from 'nve-designsystem/components/nve-select-demo/nve-select-demo.component.js';
```

Den returnerer:

```js
type NveSelectChangeDetail<T> = {
  selectedValues: T | T[] | null;
  changedId: string;
  action: 'select' | 'deselect';
}
```

## Eksempler

### Enkeltvalg

Det er en combobox standard.

<nve-message-card variant="primary" label="Tastaturnavigasjon" size="compact">
<p><b>Tastaturnavigasjon i combobox</b></p>
<ul>
  <li><b>Pil ned</b> – Åpner listeboksen hvis den er lukket, uten å flytte fokus ut av feltet. Setter visuell fokus på første element eller sist fokusert element.</li>
  <li><b>Pil opp</b> – Åpner listeboksen hvis den er lukket, uten å flytte fokus ut av feltet. Setter visuell fokus på siste element eller sist fokusert element.</li>
  <li><b>Escape</b> – Lukker listeboksen hvis den er åpen. Beholder gjeldende verdi i feltet.</li>
  <li><b>Enter / Mellomrom</b> – Hvis listeboksen er lukket, åpner den. Hvis et alternativ er aktivt, velger (eller fjerner) det aktive alternativet og lukker listen.</li>
  <li><b>Skrivbare tegn</b> – Åpner listeboksen (hvis lukket) og flytter visuell fokus til første alternativ som matcher det du skriver. Skriver du flere tegn raskt etter hverandre, søker den på hele teksten. Skriver du samme tegn flere ganger, hopper den mellom alternativer som starter med dette tegnet.</li>
  <li><b>Home</b> – Åpner listeboksen og flytter visuell fokus til første alternativ.</li>
  <li><b>End</b> – Åpner listeboksen og flytter visuell fokus til siste alternativ.</li>
  <li><b>Tab</b> – Lukker listeboksen og flytter fokus videre til neste fokusbare element i skjemaet.</li>
</ul>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-1"
  label="Velg en avdeling"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Enkeltvalg og redigerbar input

For a vise en eneltvalg med redigerbar input bruk <span class="highlight">editable</span>

<nve-message-card variant="primary" label="Tastaturnavigasjon" size="compact">
  <p><b>Tastaturnavigasjon i combobox</b></p>
  <p>Samme som i <a href="#enkeltvalg">enkeltvalg</a>, bortsett fra hvordan <b>skrivbare tegn</b> håndteres.</p>
  <p>Skrivbare tegn vises med én gang i input-feltet, og brukes til å filtrere listen slik at kun alternativer som inneholder skrevet tekst vises. I tillegg nar man valgte en verdi og sa trykker pa pilen ned, skal visuelt teksten forsvinne slik at hele listen vises igjen. Klikker man tab eller esc skal valgte verdi vises i tekst feltet igjen.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-1"
  label="Velg en avdeling"
  editable
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Flervalg

Bruk <span class="highlight">multiple</span> for å kunne velge flere alternativer. Valgte alternativer vises i combobox‑feltet som tags (implementert som button‑elementer).

  <nve-message-card variant="primary" label="aria-label i tag-knapp" size="compact">
    <p><b>aria-label</b> på tag-knappen er som standard «Slett» + ledeteksten til alternativet som fjernes. Du kan kun overskrive den første delen av teksten (for eksempel «Fjern» i stedet for «Slett»). Selve ledeteksten for alternativet leses alltid opp til slutt. Velg derfor ord som gir mening i sammenheng, og vurder å overskrive teksten dersom du bruker et annet språk enn norsk.</p>
  </nve-message-card>

Når du klikker på en tag, fjernes det tilhørende alternativet fra de valgte verdiene. Det samme kan gjøres med tastatur når fokus er i combobox‑feltet ved å bruke Backspace. Du kan også bruke venstre og høyre piltast for å navigere mellom tags og fjerne dem med enten Backspace eller Enter.

<nve-message-card variant="primary" label="Tastaturnavigasjon" size="compact">
<p><b>Tastaturnavigasjon i combobox</b></p>
<ul>
  <li><b>Pil ned</b> – Åpner listeboksen hvis den er lukket, uten å flytte fokus ut av feltet. Setter visuell fokus på første element eller sist fokusert element.</li>
  <li><b>Pil opp</b> – Åpner listeboksen hvis den er lukket, uten å flytte fokus ut av feltet. Setter visuell fokus på siste element eller sist fokusert element.</li>
  <li><b>Pil venstre</b> – Når listeboksen er åpen og det finnes valgte tags, lukkes listeboksen og fokus flyttes til den siste tag‑knappen i comboboxen. Hvert nye trykk på pil venstre flytter fokus til forrige tag.</li>
  <li><b>Pil høyre</b> – Når fokus står på en tag, flytter pil høyre fokus til neste tag. Hvis fokus står på den siste tag‑knappen, flyttes fokus tilbake til input‑feltet.</li>
  <li><b>Escape</b> – Lukker listeboksen hvis den er åpen. Beholder gjeldende verdi i feltet.</li>
  <li><b>Enter / Mellomrom</b> – Hvis listeboksen er lukket, åpner den. Hvis et alternativ er aktivt, velger (eller fjerner) det aktive alternativet. Tag med valgte verdi i comboboxen vises. Hvis klikket pa tag-knappen, slettes den.</li>
  <li><b>Backspace</b> – Når den trykkes mens fokus står i listen, lukkes listeboksen og fokus flyttes til den siste valgte tag‑knappen. Neste trykk på Backspace sletter taggen og flytter fokus på den neste siste taggen.</li>
  <li><b>Skrivbare tegn</b> – Åpner listeboksen (hvis lukket) og flytter visuell fokus til første alternativ som matcher det du skriver. Skriver du flere tegn raskt etter hverandre, søker den på hele teksten. Skriver du samme tegn flere ganger, hopper den mellom alternativer som starter med dette tegnet.</li>
  <li><b>Home</b> – Åpner listeboksen og flytter visuell fokus til første alternativ.</li>
  <li><b>End</b> – Åpner listeboksen og flytter visuell fokus til siste alternativ.</li>
  <li><b>Tab</b> – Lukker listeboksen og flytter fokus videre til neste fokusbare element i skjemaet.</li>
</ul>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-3"
  label="Velg en avdeling"
  multiple
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Flervalg og redigerbar input

Akkurat som i enkeltvag comboboxen kan man skrive inn i input feltet nar man bruker <span class="highlight">editable</span>-attributtet. Input felt vises etter taggene.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-4"
  label="Velg en avdeling"
  multiple
  editable
  options='[
    { "value":"rme","id": "rme","label": "RME-test with very long titles" },
    { "value":"ek","id": "ek","label": "EK-test with very long titles" },
    { "value":"tb","id": "tb","label": "TB-test with very long titles" },
    { "value":"h","id": "h","label": "H-test with very long titles" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Ledetekst og tooltip

Bruk <span class="highlight">label</span> for å vise en tydelig ledetekst for feltet. Attributtet er påkrevd – hvert skjemafelt skal ha en ledetekst som skjermlesere kan bruke for å forstå hva feltet gjelder.

Bruk i tillegg <span class="highlight">tooltip</span> for å vise utfyllende informasjon ved ledeteksten. Innholdet kan være ren tekst eller HTML, for eksempel lenker eller formattert hjelpetekst.

<nve-message-card variant="warning" label="Ikke bruke egne ledetekster" size="compact">
<p>Med web components er det forelopig ikke mulig a koble en ekstern ledetekst (som ikke eksiterer i samme Shadow root som komponent du skal koble den med) i nve-combobox slik at den gir mening fra tilgjengelighets perspektiv. Bruk gjerne label property i stedet.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-22"
  label="Velg en avdeling"
  tooltip="Velg avdeling"
  editable
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Endre list hoyden

Som standard har listen en maksimal høyde på 220px. Dette kan justeres ved behov ved å bruke CSS‑variabelen <span class="highlight">--listbox-max-height</span> på <span class="highlight">nve-select-demo</span>.

### Fjern alle knapp

Bruk <span class="highlight">clearable</span> for å vise en knapp i combobox‑feltet som fjerner alle valgte verdier (vises etter man har valgt minst en verdi).
Et klikk på fjern-knappen sender også en <span class="highlight">change</span>-hendelse med et tomt array av verdier.

<nve-message-card variant="warning" label="Obs!" size="compact">
<p>Fjern‑knappen er ikke fokuserbar med tastatur. Dette er et bevisst valg: i enkeltvalg‑varianten skal det ikke være egne knapper inne i feltet. I flervalg kan brukeren navigere mellom tags med piltaster, men det er ikke forventet at fjern‑knappen skal ha eget tastaturfokus i enkeltvalg.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-5"
  label="Velg en avdeling"
  clearable
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Størrelse

Bruk <span class="highlight">size</span> for å endre størrelsen på combobox‑feltet. Verdien kan være:

- <span class="highlight">large</span>
- <span class="highlight">medium</span> (standard)
- <span class="highlight">small</span>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-6"
  size="large"
  label="Velg en avdeling fra stor combobox"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>

<nve-select-demo
  id="nve-avdeling-7"
  label="Velg en avdeling fra medium combobox"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>

<nve-select-demo
  id="nve-avdeling-8"
  size="small"
  label="Velg en avdeling fra liten combobox"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Mørk bakgrunn

Bruk <span class="highlight">filled</span> for mørk bakgrunnsfarge

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-9"
  label="Velg en avdeling"
  filled
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Hjelptekst

Bruk <span class="highlight">helpText</span> for a vise hjelpetekst over combobox.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-10"
  label="Velg en avdeling"
  helpText="Avdeling velges for å sendes i skjema"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Hint-tekst

Bruk <span class="highlight">hintText</span> for a vise hint-tekst under combobox.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-10"
  label="Velg en avdeling"
  hintText="Avdeling velges for å sendes i skjema"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Deaktivert

Bruk attributtet <span class="highlight">disabled</span> for å hindre muligheten for å endre verdier.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-11"
  label="Velg en avdeling"
  disabled
  options='[{ "value":"rme","id": "rme","label": "RME" }]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Skrivebeskyttet

Bruk <span class="highlight">readonly</span> for å stenge mulighet for å endre innholdet.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-12"
  label="Velg en avdeling"
  readonly
  options='[{ "value":"rme","id": "rme","label": "RME" }]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Placeholder

Bruk <span class="highlight">placeholder</span> for å vise en hjelpetekst i feltet når ingen verdi er valgt. Placeholder‑teksten er kun et visuelt hint til brukeren og blir erstattet så snart brukeren har gjort et valg.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-13"
  label="Velg en avdeling"
  placeholder="Velg"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Påkrevd

Bruk <span class="highlight">required</span> for å vise et stjernesymbol på slutten av ledeteksten som markerer at feltet er påkrevd.  
Bruk i tillegg <span class="highlight">requiredLabel</span> for å vise en forklarende tekst sammen med stjernen (for eksempel 'obligatorisk'). Dette gir brukerne en bedre forståelse av at feltet er påkrevd, siden ikke alle brukere forstår eller oppfatter stjernesymbolet alene.

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-14"
  label="Velg en avdeling"
  required
  requiredLabel="Obligatorisk"
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Begrense antall valgbare verdier

Med flervalg kan du også begrense hvor mange verdier som kan velges ved å bruke <span class="highlight">max</span>. Når grensen er nådd, blir reste av alternativene utilgjengelige (aria-disabled).

<nve-message-card variant="warning" label="Vaer oppmerksom!" size="compact">
<p>Bruk <span class="highlight">helpText</span> til å informere brukeren om at det kun kan velges et begrenset antall alternativer (for eksempel «Du kan velge maks 2 alternativer»). Da unngår du at brukeren blir forvirret når valg blir plutselig deaktivert.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-14"
  label="Velg en avdeling"
  multiple
  max="2"
  helpText="Du kan velge maks 2 alternativer."
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

### Forhåndsvalgte verdier

Bruk et <span class="highlight">selectedIds</span> string array for a vise forhandsvalgte verdier. Hvis du skal bruke enkeltvalg skal kun et verdi i arrayet sendes. Om id-ere i arrayet stemmer ikke med alternativ sine id-er skal de ikke vises.
<br />
<nve-message-card variant="primary" label="Info" size="compact">

<p><b>selectedIds</b>-attributtet fjernes fra DOM-en etter innlasting, og verdien lagres i en intern tilstand i comboboxen. Dette gjøres for å hindre at DOM-en fylles opp med unødvendig data.</p>
</nve-message-card>

<CodeExamplePreview>

```html
<nve-select-demo
  id="nve-avdeling-14"
  label="Velg en avdeling"
  multiple
  selectedIds='["rme", "tb"]'
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>

<nve-select-demo
  id="nve-avdeling-14"
  label="Velg en avdeling"
  selectedIds='["rme"]'
  options='[
    { "value":"rme","id": "rme","label": "RME" },
    { "value":"ek","id": "ek","label": "EK" },
    { "value":"tb","id": "tb","label": "TB" },
    { "value":"h","id": "h","label": "H" },
    { "value":"ikti","id": "ikti","label": "IKTI" },
    { "value":"sv","id": "sv","label": "SV" },
    { "value":"v","id": "v","label": "V" }
     ]'
>
</nve-select-demo>
```

</CodeExamplePreview>

## Tilgjengelighet

popup has a role of listbox

arrow down or up opens listbox and focuses the last focused element if no then the first/last

When a combobox receives focus, DOM focus is placed on the combobox element.
Skrive om aria-activedescendant, hvorfor den brukes og hvilke begrensinger den innf;rer (nevne at derfor fjerner vi options og selected values fra DOMen)

- With respect to focus and the selected state, the most important considerations for designers and developers are:
  The visual focus indicator must always be visible.
  The selected state must be visually distinct from the focus indicator.

When a descendant of a listbox, grid, or tree popup is focused, DOM focus remains on the combobox and the combobox has aria-activedescendant set to a value that refers to the focused element within the popup.
DOM Focus is maintained on the combobox and the assistive technology focus is moved within the listbox using aria-activedescendant read more here https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant
since we have to refer ids there is no other way but to include options in the same shadow root as the comboboc itself.
otherwise id reading wont work.

autocomplete stottes ikke for na

when combobox is focused for the first time and has multiple selections all multiple selections are read. is that a correct appraoch? we dont have any summary message for now, maybe something to consider?

label component

not using aria live on combobox as it will mostly be the required error and it will happen only when bluring or when form is submitted that will remove the focus from combobox anyway

listbox

DOM focus (the active element) is functionally distinct from the selected state. For more details, see

In a single-select listbox, moving focus may optionally unselect the previously selected option and select the newly focused option. This model of selection is known as "selection follows focus" - we dont support it

If the listbox supports selection of more than one option, the element with role listbox has aria-multiselectable set to true.

The selection state of each selectable option is indicated with either aria-selected

aria-disabled on disabled options (currently supported only if max is reached)

Navigating the list of options does not set the value of the input. This gives screen reader users,
who need to navigate among the options to perceive them, the ability to explore options without losing t
he current value of the input
The current value is retained if the listbox is closed with Escape or if the user collapses the list by clicking the input.

multi
we wont use aria-live for now why

multi since tags are not focusable and input is the first focused element in the combobox when multiple is selected values they wouldnt normally be read. therefore we use sr-only div with the list of the selected values (labels) which are
being read by the screen reader when input focuses. this could potentially be solved with i18n and read only simple messages like 3 items selected.

aria-required when combobox is required

## Retningslinjer

bruk clearbale with multiple
husk a legge til label
prov a holde tekst i alternativer korte slik at de passer combobox bredden. lange tekster i alternativer skal kuttesmen
da ser bruker ikke hele teksten

Avoiding very long option names facilitates understandability and perceivability for screen reader users. The entire name of an option is spoken as a single unit of speech when the option is read. When too much information is spoken as the result of a single key press, it is difficult to understand. Long names inhibit perception by increasing the impact of interrupted speech because users typically have to re-read the entire option

Sets of options where each option name starts with the same word or phrase can also significantly degrade usability for keyboard and screen reader users. Scrolling through the list to find a specific option becomes inordinately time consuming for a screen reader user who must listen to that word or phrase repeated before hearing what is unique about each option. For example, if a listbox for choosing a city were to contain options where each city name were preceded by a country name, and if many cities were listed for each country, a screen reader user would have to listen to the country name before hearing each city name. In such a scenario, it would be better to have 2 list boxes, one for country and one for city.
