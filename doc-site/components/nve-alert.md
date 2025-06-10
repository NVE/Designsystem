---
layout: component
outline: [2, 3]
---

<CodeExamplePreview>

```html
<nve-alert open label="Info" text="Dette er alert komponent. Den har ventet hele livet på å varsle deg!"></nve-alert>
```

</CodeExamplePreview>

<nve-message-card label="Tips" size="compact">
<p>Bruk <b>open</b> for å vise en alert. Hvis ikke <b>open</b> er satt, vises den ikke.</p>
</nve-message-card>

## Eksempler

### Styr innhold

Du kan bruke spor for å vise innhold i alerten. Standard-spor er hovedteksten. Du kan også bruke egne spor for ikon (icon) og overskrift (label).

<CodeExamplePreview>

```html
<nve-alert open>
  <nve-icon slot="icon" name="info"></nve-icon>
  <nve-label slot="label">Label</nve-label>
  Bruk av slots i alerten.
</nve-alert>
```

</CodeExamplePreview>

Som alternativ kan du bruke attributer iconName, label og text.

<CodeExamplePreview>

```html
<nve-alert open label="Label" text="Bruk av attributer"></nve-alert>
```

</CodeExamplePreview>

### Variant

Bruk `variant` for å styre farger. `primary` er standard og trenger ikke spesifiseres.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open text="primary"></nve-alert>

<nve-alert variant="success" open text="success"></nve-alert>

<nve-alert variant="warning" open text="warning"></nve-alert>

<nve-alert variant="neutral" open text="neutral"></nve-alert>

<nve-alert variant="danger" open text="danger"></nve-alert>
```

</CodeExamplePreview>

### Ikon

Velger du variant kommer det en bestemt ikone som standard. Du kan overstyre ikone med `iconName` property.
Du kan skjule ikonen med `showIcon=false`

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open>Standard ikone på info variant</nve-alert>
<nve-alert open variant="danger">Standard ikone på fare variant</nve-alert>

<nve-alert variant="success" open iconName="house">Annen ikon</nve-alert>

<nve-alert variant="warning" open showIcon="false">Ingen ikon</nve-alert>
```

</CodeExamplePreview>

### Left stroke

Bruk `leftStroke` for å vise en fet strek på venstre side.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert variant="danger" text="Left stroke" leftStroke open> </nve-alert>
```

</CodeExamplePreview>

### Høyere metning

Bruk `saturation="emphasized"` for å få litt mørkere bakgrunnsfarge.

<CodeExamplePreview arrangeComponentsVertically>

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem">
  <nve-alert variant="warning" text="Emphasized" saturation="emphasized" open> </nve-alert>
  <nve-alert variant="warning" text="Ikke emphasized" open> </nve-alert>
  <nve-alert variant="success" text="Emphasized" saturation="emphasized" open> </nve-alert>
  <nve-alert variant="success" text="Ikke emphasized" open> </nve-alert>
  <nve-alert variant="neutral" text="Emphasized" saturation="emphasized" open> </nve-alert>
  <nve-alert variant="neutral" text="Ikke emphasized" open> </nve-alert>
  <nve-alert variant="danger" text="Emphasized" saturation="emphasized" open> </nve-alert>
  <nve-alert variant="danger" text="Ikke emphasized" open> </nve-alert>
  <nve-alert text="Emphasized" saturation="emphasized" open> </nve-alert>
  <nve-alert text="Ikke emphasized" open> </nve-alert>
</div>
```

</CodeExamplePreview>

### Closable

Bruk `closable` for å vise en lukke-knapp på høyre side, som skjuler komponenten.

<nve-message-card variant="warning" label="Viktig!" size="compact">
<p>Når du bruker <b>closable</b> vises det en knapp med kun ikon. <br>Siden det ikke finnes noe tekst på knappen, må vi informere skjermleser-brukere om hva knappen gjør. Derfor har knappen et <b>aria-label</b>-attributt. Dette styres via <b>buttonLabel</b>-egenskapen i alert-komponenten. Standardverdien er <b>"Lukk"</b>, men det er viktig å oppdatere denne hvis du bruker et annet språk.</p>
</nve-message-card>

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert open closable class="alert-closeable"> Trykk på krysset for å lukke denne </nve-alert>

<script>
  // Denne snutten vil vise alert igjen etter 2 sekunder, slik at du kan prøve å lukke den flere ganger
  const alert = document.querySelector('.alert-closeable');
  alert.addEventListener('sl-after-hide', async () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

</CodeExamplePreview>

### Duration

Du kan bruke `duration` for å lukke alerten automatisk. Verdien er gitt i millisekunder.

<CodeExamplePreview arrangeComponentsVertically>

```html
<nve-alert class="alert-duration" duration="2000"> Denne skal forsvinne etter 2 sekunder. </nve-alert>
<nve-button class="show-alert">Vis alerten</nve-button>
<script>
  // Denne snutten vil åpne alerten når man klikker på knappen.
  const button = document.querySelector('.show-alert');
  const alert = document.querySelector('.alert-duration');
  button.addEventListener('click', () => alert.show());
</script>
```

</CodeExamplePreview>

### Toast

Du kan selv bestemme hvordan du vil vise alerten i løsningen din. Når du legger til `nve-alert` i DOM-en, er den alltid der selv om `open` er satt til false. `display: none` gjør at skjermlesere ignorerer komponenten, så det er ingen fare ved å ha den i DOM-en hele tiden.

Ofte ønsker man å skjule slike komponenter i SPA-applikasjoner uansett. Vi tilbyr derfor også `toast`-funksjonalitet som gjør dette for deg. Som standard vises toast øverst i høyre hjørne. For å vise en alert som toast, må du wrappe `nve-alert` i en `div` med klassen `toast-stack`. Denne blir injisert i DOM-en utenfor hovedinnholdet. Når alerten lukkes, forsvinner også `toast-stack` sammen med alle `nve-alert`-komponentene. Vi anbefaler ikke å vise mer enn én alert samtidig. Les mer i seksjonen om universell utforming. Den er ikke justbar. Per i dag støttes det kun en animasjon, men kan sikkert prate med designere hvis det er behov for flere typer animasjoner.

<nve-message-card label="Vær oppmerksom" size="compact" variant="warning">
<p>I dette eksemplet vises det to alert meldinger samtidig når man klikker på begge knappene. Husk at det ikke er best praksis å vise flere alert meldinger samtidig. Bruk det med omhu, og les mer om det i <a href="#universell-utforming">universel utforming</a> seksjonen.</p>
</nve-message-card>

<CodeExamplePreview arrangeComponentsVertically>

```html
<div class="toast-container">
  <nve-alert class="alert-toast" variant="warning" closable label="Toast" text="Obs! Dette er en toast."> </nve-alert>
  <nve-alert class="alert-toast" variant="success" closable label="Toast" text="Gratulerer! Dette er en toast">
  </nve-alert>
  <nve-button class="show-alert-warning">Vis varsel toast</nve-button>
  <nve-button class="show-alert-success" variant="neutral">Vis suksess toast</nve-button>
</div>
<script>
  // Denne snutten vil åpne alert meldinger når man klikker på knapper.
  const container = document.querySelector('.toast-container');
  const buttonWarning = container.querySelector('.show-alert-warning');
  const buttonSuccsess = container.querySelector('.show-alert-success');
  const warningAlert = container.querySelector('nve-alert[variant="warning"]');
  const successAlert = container.querySelector('nve-alert[variant="success"]');
  buttonWarning.addEventListener('click', () => warningAlert.toast());
  buttonSuccsess.addEventListener('click', () => successAlert.toast());
</script>
```

</CodeExamplePreview>

## Universell utforming

`nve-alert` bruker `alert` live-region-rolle. Hovedoppgaven til alert-komponenten er å gi brukeren en umiddelbar og viktig beskjed. `alert` bruker derfor `aria-live="assertive"`, som betyr at når alerten vises i DOM-en (for eksempel med display:block), vil skjermlesere umiddelbart stoppe det de leser og fokusere på innholdet i alerten. Den har også `aria-atomic="true"`, som gjør at hvis innholdet i alerten endres mens den vises, vil skjermleseren lese opp hele innholdet på nytt. Vi har ikke endret noen av disse egenskapene, så de fungerer som standard for alert-rollen.

En av grunnene til at alerten leses opp umiddelbart, kan være at den ofte vises i et begrenset tidsrom. Alerts forsvinner gjerne etter en viss tid. Hvis du tror brukeren ikke rekker å lese meldingen på den tiden, kan du fjerne `duration`-verdien fra komponenten (hvis den brukes) og la brukeren lukke alerten selv. På grunn av `aria-live="assertive"`, anbefales det å ikke vise mange tidsstyrte alerts, eller generelt mange alerts samtidig. Det anbefales også å ikke vise alerts for ofte. Bruk denne komponenten med omhu, kun for de viktigste meldingene/tilbakemeldingene.

Alerten tar ikke fokus fra tastaturet når den vises. Hvis du vil at bruker skal kunne lukke `closable` alert med en gang den dukkes opp, og uten å tabbe gjenneom hele dokumentet, du kan gjerne sette fokus på knappen når alerten vises. Husk da å returnere fokus til det elementet som hadde fokus før du satte det på knappen i alerten.

På grunn av sin rolle anbefales det ikke å bruke `nve-alert` til å vise statiske meldinger. Til det kan man gjerne bruke [nve-message-card](./nve-message-card.md) komponent.

Siden alerten vises med en animasjon, er det viktig at vi respekterer innstillingen for redusert bevegelse (`prefers-reduced-motion`). Dette er allerede implementert i `animation.ts`-filen.

WCAG anbefaler å følge disse to reglene når alerten er implementert:

- WCAG 2.0 suksesskriterium [2.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html)
- WCAG 2.0 suksesskriterium [2.2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)

Ingen av disse kriteriene er påkrevd av [UUtilsynet](https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86), så vi trenger ikke å følge dem strengt.

<i>Alerten ble testet med NVDA skjerm-leser, og den fungerer som forventet.</i>
