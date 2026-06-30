---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis modalen</nve-button>
<nve-modal label="Overskrift"> Dette er en modal dialog. </nve-modal>
```

</CodeExamplePreview>

## Retningslinjer

- Bruk alltid `label` på `nve-modal`.
  `label` brukes som modalens tilgjengelige navn og kobles til den native dialogen. Dette gjør at skjermlesere kan presentere modalen med en tydelig tittel.

- Bruk modal kun når innholdet krever brukerens fulle oppmerksomhet.
  En modal avbryter arbeidsflyten og gjør resten av siden utilgjengelig mens den er åpen. Den egner seg derfor best til viktige valg, bekreftelser, korte skjemaer eller informasjon brukeren må forholde seg til før hen kan gå videre.

- Unngå å bruke modal til innhold som ikke blokkerer arbeidsflyten.
  Hvis innholdet bare gir ekstra informasjon, forhåndsvisning eller sekundære valg, er det ofte bedre å bruke en mindre inngripende komponent.

- Vurder nøye om modalen skal kunne lukkes ved klikk på bakgrunnen.
  For enkle og ufarlige handlinger kan `closedBy="any"` være passende. For viktige handlinger, bekreftelser eller oppgaver der brukeren lett kan miste arbeid, bør du som regel bruke `closedBy="closerequest"` (som er standard) eller `closedBy="none"`.

- La modalen være i DOM-en og åpne den med `show()`.
  Ikke bruk `open` for å styre modalen. `nve-modal` bygger på native `<dialog>` og er laget for å åpnes programmatisk via `show()`, slik at du får riktig modal oppførsel, fokusflyt og backdrop fra nettleseren.

- Sørg for at modalen alltid har en tydelig måte å lukkes på.
  Brukeren bør alltid ha tilgang til en synlig lukkemekanisme, for eksempel lukkeknappen i toppen eller en avbryt-knapp i footer.

- Hold innholdet kort og oppgaveorientert.
  Modaler fungerer best når innholdet er tydelig, avgrenset og lett å fullføre. Hvis innholdet blir langt eller komplekst, kan en vanlig side eller en annen type visning være et bedre valg.

- Tenk gjennom hvilket element som skal få fokus når modalen åpnes.
  Standardfokus er ikke alltid det beste valget. Ved behov bør du bruke `autofocus` eller eksplisitt fokusplassering for å støtte arbeidsflyten og gjøre innholdet lettere å forstå.

<nve-message-card variant="primary" label="Dialogoppførsel" size="compact">
  <p>
    <span class="highlight">nve-modal</span> bygger på det native
    <span class="highlight">&lt;dialog&gt;</span>-elementet. <span class="highlight">show()</span>-metoden (som åpner <span class="highlight">nve-modal</span>) kaller native <span class="highlight">showModal()</span>, som gir dialogen modal oppførsel. Dette gjør at nettleseren
    automatisk viser en backdrop bak dialogen og setter resten av siden som <span class="highlight">inert</span>.
  </p>

  <p>
    Det betyr at brukeren ikke kan samhandle med noe annet på siden enn modalen (og nettleserens egne kontroller). I
    tillegg låser
    <span class="highlight">nve-modal</span> sidescrolling mens modalen er åpen, slik at brukeren ikke kan scrolle
    innholdet som er satt til <span class="highlight">inert</span>.
  </p>

  <p>Følgende native dialog-attributter støttes:</p>

  <ul>
    <li><span class="highlight">closedBy</span></li>
  </ul>

  <p>Følgende native dialog-attributter støttes ikke:</p>

  <ul>
    <li>
      <span class="highlight">open</span> – I henhold til HTML-spesifikasjonen bør dette attributtet ikke brukes til å
      åpne eller lukke en modal dialog (<a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#note-dialog-remove-open-attribute">lenke</a>). <span class="highlight">nve-modal</span> eksponerer
      fortsatt en skrivebeskyttet <span class="highlight">open</span>-property, slik at utviklere kan lese om modalen er
      åpen eller ikke (ved behov).
    </li>
    <li> <span class="highlight">returnValue</span> – den tilfører unødvendig kompleksitet, 
     og våre bruksområder for dialoger har ikke behov for denne funksjonaliteten.</li>
  </ul>

  <p>Følgende native dialog-metoder støttes:</p>

  <ul>
    <li>
      <span class="highlight">close()</span>
      (<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close">lenke</a>)
    </li>
    <li>
      <span class="highlight">requestClose()</span>
      (<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose">lenke</a>)
    </li>
    <li>
      <span class="highlight">showModal()</span>(<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal">lenke</a>) eksponeres gjennom <span class="highlight">show()</span>
    </li>

  </ul>

  <p>Følgende native dialog-hendelser støttes:</p>

  <ul>
    <li>
      <span class="highlight">cancel</span>
      (<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event">lenke</a>)
    </li>
    <li>
      <span class="highlight">close</span>
      (<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event">lenke</a>)
    </li>

  </ul>
</nve-message-card>

## Eksempler

### Lukkemåte

Bruk <span class="highlight">closedBy</span> for å velge hvordan modalen kan lukkes:

- <span class="highlight">any</span> – tillater lukking ved klikk på bakgrunnen, <span class="highlight">Esc</span> og utviklerdefinerte lukkemekanismer (for eksempel en lukkeknapp).
- <span class="highlight">closerequest</span> (standard) – tillater lukking med <span class="highlight">Esc</span> eller utviklerdefinerte lukkemekanismer, men ikke ved klikk på bakgrunnen.
- <span class="highlight">none</span> – modalen kan kun lukkes ved en utviklerdefinert lukkemekanisme (for eksempel en lukkeknapp eller et kall til <span class="highlight">close()</span>).

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis modalen</nve-button>
<nve-modal label="Overskrift" closedBy="any"> Dette er en modal dialog. </nve-modal>
```

</CodeExamplePreview>

### Størrelse

Man kan velge mellom <span class="highlight">default</span> (som er standard og ikke trenger å skrives) eller <span class="highlight">compact</span>.

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis kompakt modalen</nve-button>
<nve-modal label="Overskrift" size="compact"> Dette er en modal dialog. </nve-modal>
```

</CodeExamplePreview>

### Ikon foran label

Bruk <span class="highlight">start-icon</span>-slottet for å vise et ikon foran ledeteksten.

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis dialogen</nve-button>
<nve-modal label="Overskrift">
  <nve-icon name="info" slot="start-icon"></nve-icon>
  Innhold
</nve-modal>
```

</CodeExamplePreview>

### Ikon bak label

Bruk <span class="highlight">end-icon</span>-slottet for å vise et ikon bak ledeteksten.

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis dialogen</nve-button>
<nve-modal label="Overskrift">
  <nve-icon name="info" slot="end-icon"></nve-icon>
  Innhold
</nve-modal>
```

</CodeExamplePreview>

### Knapper i footer

Det er egne spor for å legge innhold i bunnen av modalen.

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis dialogen</nve-button>
<nve-modal label="Overskrift">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna sit amet velit tempor accumsan. Interdum
  et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel ipsum dolor. Nullam a molestie risus, eget
  facilisis nisi. Phasellus eget faucibus mauris, in tincidunt mi. Curabitur urna tortor, semper vel facilisis vel,
  aliquam a risus. Praesent eu sapien ornare, ultrices neque id, tincidunt metus.
  <div slot="footer">
    <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Ok</nve-button>
    <nve-button disabled>Slett alt</nve-button>
  </div>
</nve-modal>
```

</CodeExamplePreview>

### Autofokus et interaktiv element i modalen

Som standard settes fokus på det første fokuserbare elementet i modalen når den åpnes. I de fleste tilfeller vil dette være lukkeknappen.

Noen ganger kan det være mer hensiktsmessig å sette fokus på et annet element, for eksempel en «OK»-knapp i en modal som bare viser ekstra informasjon eller leder brukeren videre til neste steg. I slike tilfeller kan du bruke <span class="highlight">autofocus</span> på elementet som skal få fokus først. Elementet må selv støtte <span class="highlight">autofocus</span>, noe de fleste HTML-elementer og våre webkomponenter gjør.

<CodeExamplePreview>

```html
<nve-button onclick="this.nextElementSibling.show()">Vis dialogen</nve-button>
<nve-modal label="Overskrift">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna sit amet velit tempor accumsan. Interdum
  et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel ipsum dolor. Nullam a molestie risus, eget
  facilisis nisi. Phasellus eget faucibus mauris, in tincidunt mi. Curabitur urna tortor, semper vel facilisis vel,
  aliquam a risus. Praesent eu sapien ornare, ultrices neque id, tincidunt metus.
  <div slot="footer">
    <nve-button variant="primary" autofocus onclick="this.parentElement.parentElement.hide()">Ok</nve-button>
  </div>
</nve-modal>
```

</CodeExamplePreview>

## Tilgjengelighet

<span class="highlight">nve-modal</span> bruker det native modale <span class="highlight">&lt;dialog&gt;</span>-elementet og får derfor modal dialogoppførsel og tilhørende tilgjengelighetsegenskaper fra nettleseren.

Alle modaler bør ha et synlig element med knapp-oppførsel som lukker modalen, for eksempel en lukkeknapp eller en avbryt-knapp. Derfor bør lukkeknappen som standard ikke fjernes.

<span class="highlight">nve-modal</span> setter <span class="highlight">aria-labelledby</span> på det native modale <span class="highlight">&lt;dialog&gt;</span>-elementet og kobler dette til <span class="highlight">label</span>-propertyen i <span class="highlight">nve-modal</span>. Derfor er <span class="highlight">label</span> påkrevd.

### Fokus

Når modalen åpnes, flyttes fokus til et element inne i modalen. Som regel vil fokus settes på det første fokuserbare elementet, men det er ikke alltid det som gir best brukeropplevelse. Hvor fokus bør plasseres først, avhenger av innholdet og hva brukeren skal gjøre i modalen.

<nve-message-card variant="warning" label="Fokus blir ikke låst inne i modalen!" size="compact">
<p>Fokus blir ikke aktivt låst inne i modalen. Brukeren kan fortsatt flytte fokus til nettleserens egne kontroller, for eksempel faner, adressefelt eller navigasjonsknapper, mens modalen er åpen. Dette er i tråd med hvordan native modale <span class="highlight">&lt;dialog&gt;</span>-elementer fungerer, og vi forsøker derfor ikke å innføre en egen fokusfelle.</p>
</nve-message-card>

Hvis modalen inneholder mye tekst eller flere semantiske strukturer, som lister, tabeller eller flere avsnitt, kan det være bedre å sette fokus på et statisk element øverst i innholdet i stedet for på den første knappen. Da kan brukere av hjelpemidler lettere lese og forstå innholdet i riktig rekkefølge. I slike tilfeller kan du for eksempel bruke `tabindex="-1"` på overskriften eller første avsnitt og flytte fokus dit når modalen åpnes.

Det samme gjelder hvis innholdet er så langt at starten av modalen kan forsvinne ut av syne dersom fokus settes direkte på det første interaktive elementet. Da kan det være mer hensiktsmessig å fokusere et statisk element øverst i modalen først.

Hvis modalen brukes til en handling som er vanskelig å angre, som sletting av data eller bekreftelse av en viktig handling, kan det være lurt å sette fokus på det minst destruktive valget først, for eksempel en avbryt-knapp. Hvis modalen derimot bare gir ekstra informasjon eller lar brukeren gå videre i en prosess, kan det være mer hensiktsmessig å sette fokus på handlingen som oftest brukes, som en «OK»- eller «Fortsett»-knapp.

Når modalen lukkes, returneres fokus som til elementet som åpnet den.

[Du kan lese mer her](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#:~:text=Closes%20the%20dialog.-,Note,-When%20a%20dialog).

### Tastaturinteraksjon

Når modalen åpnes, flyttes fokus inn i modalen. Hvilket element som får fokus først, avhenger av innholdet i modalen og om et element er merket med <span class="highlight">autofocus</span>.

- <span class="highlight">Tab</span> flytter fokus til neste tabbable element i modalen.
- Står fokus på det siste tabbable elementet, flyttes fokus tilbake til det første.
- <span class="highlight">Shift</span> + <span class="highlight">Tab</span> flytter fokus til forrige tabbable element i modalen.
- <span class="highlight">Escape</span> lukker modalen.
