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

## Retningslinjer

- Husk å legge til en tydelig ledetekst på comboboxen
- Bruk <span class="highlight">clearable</span> sammen med flervalg der det gir mening
- Forsøk å holde tekst i alternativer kort, slik at de passer innenfor bredden til comboboxen. Å unngå svært lange navn på alternativer forbedrer både forståelighet og oppfattbarhet, spesielt for brukere av skjermleser
- Unngå sett med alternativer der alle navn starter med samme ord eller frase fordi da må brukeren høre den samme starten gjentatt for hvert alternativ

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

Denne combobox-komponenten følger WAI-ARIA-mønstrene for [combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) og [listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), slik de er definert av W3C.

### Fokusstyring og aria-activedescendant

Når brukeren navigerer mellom valg i popupen (listbox), forblir DOM-fokus på inputfeltet i comboboxen. I stedet for å flytte DOM-fokus, bruker komponenten <span class="highlight">aria-activedescendant</span> ([les mer her](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant)) til å referere til det aktive elementet.

Dette innebærer:

- Comboboxen beholder DOM-fokus til enhver tid
- Hjelpeteknologier oppfatter fokusflyt i listen via <span class="highlight">aria-activedescendant</span>
- Verdien til <span class="highlight">aria-activedescendant</span> peker alltid til ID-en til det aktive elementet

Siden <span class="highlight">aria-activedescendant</span> er avhengig av ID-referanser, må alle interaktive valg være i samme shadow root som comboboxen (derfor brukes <span class="highlight">options-attributtet</span> i stedet for en dedikert option-komponent). Dette sikrer at relasjoner basert på ID fungerer korrekt for hjelpeteknologier.

### Flervalg

For comboboxer med flervalg:

- Når comboboxen får fokus første gang, blir alle valgte verdier lest opp via <span class="highlight">aria-describedby</span>
- Valgte verdier rendres i en visuelt skjult container (bruker sr-only css-klassen) som inneholder ledetekstene til de valgte elementene
- Dette gjør at skjermlesere kan lese opp valgte verdier når inputfeltet får fokus

Dette er nødvendig fordi:

- Valgte “tags” ikke er fokuserbare
- Inputfeltet er det primære fokuserbare elementet
- Uten dette ville skjermlesere ikke lese opp tidligere valgte verdier

Dette er en midlertidig løsning. Med støtte for internasjonalisering (i18n) vil dette erstattes med enklere meldinger, som for eksempel: "3 elementer valgt".

### Clear-knapp

Comboboxen kan inneholde en <span class="highlight">clear</span>-knapp plassert etter inputfeltet, som lar brukeren fjerne alle valgte verdier.

Knappen er ikke tilgjengelig via piltaster eller intern tastaturnavigasjon i comboboxen.

Dette er et bevisst valg fordi:

- DOM-fokus holdes på inputfeltet for å sikre korrekt oppførsel med <span class="highlight">aria-activedescendant</span>. Flytting av fokus bort fra inputfeltet vil bryte med comboboxens fokusmodell.
- Å inkludere knappen i piltastnavigasjon ville bryte med forventet navigasjonsmønster og kunne skape forvirring (siden den er plassert etter input feltet ulik taggene med valge verdier).

Brukere kan fortsatt tømme input manuelt med tastatur (f.eks. Backspace/Delete) eller med mus.

Dette vurderes som en akseptabel avveining, ettersom funksjonaliteten fortsatt er tilgjengelig via tastatur, selv om den ikke er eksponert som en egen fokusbar kontroll.

### Feilhåndtering

Feilmeldinger annonseres ikke med <span class="highlight">aria-live</span>.

Dette er bevisst fordi:

- Feil oppstår vanligvis ved blur eller innsending av skjema
- I begge tilfeller flyttes fokus bort fra comboboxen
- Feilmeldingen vil da bli lest naturlig i dokumentets leserekkefølge

Når errorMessage er satt, får inputfeltet i nve-combobox attributtet <span class="highlight">aria-invalid</span>.

### Begrensning av maks antall valg

Når et definert maksantall valg er nådd i en combobox med flervalg, blir alle øvrige valg utilgjengelige.

Dette gjøres ved å sette <span class="highlight">aria-disabled="true"</span> på alle valg som ikke allerede er valgt.

Brukere kan fortsatt navigere mellom alle valg i listen. Valg som er deaktivert blir annonsert som utilgjengelige av skjermlesere.

### Navigasjon i listen

Navigering i listen oppdaterer ikke verdien i inputfeltet.

Dette gjør det mulig for skjermleserbrukere å utforske tilgjengelige valg uten å miste gjeldende verdi.

Gjeldende verdi beholdes når listen lukkes med Escape eller når brukeren lukker listen ved å interagere med inputfeltet
