---
outline: [2, 3]
---

<PageHeader title="For utviklere" imagePath="developer"  pageLevel=2></PageHeader>

# Skjemavalidering

NVE sine skjemakomponenter har innebygd støtte for regelbasert validering og ekstern feilhåndtering.
Alle støttede komponenter kan valideres når de brukes i et skjema.

<nve-message-card variant="primary" label="Støttede komponenter" size="compact">
<p>Følgende komponenter deltar i skjemavalidering:</p>
<ul>
<li><span class="highlight">nve-input</span></li>
<li><span class="highlight">nve-textarea</span></li>
<li><span class="highlight">nve-radio-group</span></li>
<li><span class="highlight">nve-checkbox-group</span></li>
<li><span class="highlight">nve-combobox</span></li>
</ul>
</nve-message-card>

Alle disse komponentene implementerer <span class="highlight">FormValidationComponent</span>.

```ts
export interface FormValidationComponent extends LitElement, INveComponent {
  validate(): boolean;
  validationRules: Array<ValidationRule>;
  errorMessage: string;
  internalValidationMessage: string;
}
```

- <span class="highlight">validate</span> – metode som validerer komponenten mot de angitte valideringsreglene.
- <span class="highlight">validationRules</span> – liste over valideringsregler som komponenten skal valideres mot.
- <span class="highlight">errorMessage</span> – tekst som brukes ved ekstern validering. Dersom den er satt, settes komponenten i feiltilstand.
- <span class="highlight">internalValidationMessage</span> – tekst som brukes ved intern validering. Dersom den er satt, settes komponenten i feiltilstand.

<b>To typer validering støttes:</b>

- <a class="highlight no-visited" href="#internal-validation">intern</a> – brukes når valideringslogikk ikke leveres utenfra.
- <a class="highlight no-visited" href="#external-validation">ekstern</a> – brukes når valideringslogikk leveres av eksterne biblioteker eller en server.

<nve-message-card variant="warning" label="Obs!" size="compact">
<p>Når både en ekstern feil og en internt generert valideringsfeil er til stede, prioriteres den eksterne feilmeldingen.</p>
</nve-message-card>

## Intern validering

### Valideringsregler

Valideringsregler legges til gjennom komponentens <span class="highlight">validationRules</span>-egenskap.

```ts
type ValidationRule<T = unknown> = (value: T) => true | string;
```

En valideringsregel (typen <span class="highlight">ValidationRule</span>) kan enten validere komponentens verdi ved å bruke parameteren <span class="highlight">value</span>:

```html
<form>
  <nve-input validationRules="[(value) => value.trim() !== '' || 'Feltet er påkrevd']"></nve-input>
</form>
```

eller utføre en kontroll som avhenger av ekstern tilstand, for eksempel verdien til et annet felt eller en applikasjonsspesifikk betingelse:

```html
<form>
  <nve-input validationRules="[() => !!name.value || 'Navn-feltet er påkrevd']"></nve-input>
</form>
```

Når en regel returnerer <span class="highlight">true</span>, er regelen godkjent. Returnerer regelen en feilmelding, registreres regelen som ugyldig. Valideringen fortsetter gjennom de øvrige reglene og skjemafeltene, før resultatet returneres med informasjon om eventuelle feil.

Valideringsreglene evalueres i den rekkefølgen de er oppgitt.

### Hjelpemetoder

Designsystemet tilbyr også hjelpemetoder som kan brukes i valideringsregler.

De kan brukes på komponenter der verdien er enten et array (f.eks. <span class="highlight">nve-checkbox-group</span> og <span class="highlight">nve-combobox</span>) eller en primitiv verdi (alle andre komponenter).

<nve-message-card variant="primary" label="Tilgjengelige hjelpemetoder" size="compact">
<ul>
<li><span class="highlight">required</span> – kontrollerer om verdien er tom. For array-baserte komponenter kontrolleres det at minst én verdi er valgt.</li>
<li><span class="highlight">minLength</span> – kontrollerer at verdien har minst angitt antall tegn. For array-baserte komponenter kontrolleres det at minst angitt antall verdier er valgt.</li>
<li><span class="highlight">maxLength</span> – kontrollerer at verdien har maksimalt angitt antall tegn. For array-baserte komponenter kontrolleres det at antall valgte verdier ikke overstiger grensen.</li>
<li><span class="highlight">email</span> – kontrollerer at verdien er en gyldig e-postadresse. Støttes ikke for array-baserte komponenter.</li>
<li><span class="highlight">min</span> – kontrollerer at verdien er et tall som er større enn eller lik minimumsverdien. Støttes ikke for array-baserte komponenter.</li>
<li><span class="highlight">max</span> – kontrollerer at verdien er et tall som er mindre enn eller lik maksimumsverdien. Støttes ikke for array-baserte komponenter.</li>
</ul>
</nve-message-card>

Hjelpemetodene kan importeres fra:

```ts
import { rules } from 'nve-designsystem/validation/validateForm.js';
```

Du kan legge dem til i en komponent på følgende måte:

```html
<form>
  <nve-input
    validationRules="[
      (value) => rules.required(value) || 'Feltet er påkrevd',
      (value) => rules.minLength(3, value) || 'Minimum 3 tegn',
      (value) => rules.maxLength(20, value) || 'Maksimum 20 tegn',
      (value) => rules.email(value) || 'Verdien er ikke en gyldig e-postadresse']"
  >
  </nve-input>
</form>
```

### Validere skjemaet

For å starte valideringen ved innsending av skjemaet må <span class="highlight">validateForm()</span>-metoden kalles.

<span class="highlight">validateForm()</span> tar imot et <span class="highlight">submit</span>-event fra skjemaet. Metoden bruker skjemaelementet til å finne alle komponenter som skal valideres, og kjører deretter deres interne <span class="highlight">validate()</span>-metoder.

<span class="highlight">validateForm()</span> returnerer et objekt av typen <span class="highlight">ValidateFormResult</span>.

```ts
export type ValidateFormResult = {
  isValid: boolean;
  invalidFields: FormValidationComponent[];
  firstInvalidField?: FormValidationComponent;
};
```

- <span class="highlight">isValid</span> – boolsk verdi som angir om skjemaet inneholder feil.
- <span class="highlight">invalidFields</span> – liste over alle ugyldige felter.
- <span class="highlight">firstInvalidField</span> – det første ugyldige feltet. Kan brukes til å flytte fokus til feltet, slik at brukeren raskt kommer til den første feilen i lange skjemaer.

Metoden kan importeres fra:

```ts
import { validateForm } from 'nve-designsystem/validation/validateForm.js';
```

Eksempel på bruk:

```html
<form id="test-form">
  <nve-input id="name-input" label="Saksbehandlers navn"></nve-input>
  <nve-button type="submit">Send inn</nve-button>
</form>

<script type="module">
  const form = document.querySelector('#test-form');
  const nameInput = document.querySelector('#name-input');

  nameInput.validationRules = [
    (value) => rules.required(value) || 'Feltet er påkrevd',
    (value) => value.startsWith('s') || 'Må starte med s',
  ];

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm(event);
  });
</script>
```

Eksempel på bruk i <b>Vue</b>:

```vue
<script setup lang="ts">
import 'nve-designsystem/components/nve-input/nve-input.component.js';
import 'nve-designsystem/components/nve-button/nve-button.component.js';
import { validateForm, rules } from 'nve-designsystem/validation/validateForm.js';
import { ref } from 'vue';

const inputValue = ref('');

const handleSubmit = (e: SubmitEvent) => {
  const result = validateForm(e);
  if (!result.isValid) {
    result.firstInvalidField?.focus();
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <nve-input
      v-model="inputValue"
      :validationRules="[(value: string) => rules.required(value) || 'Feltet er påkrevd']"
    ></nve-input>
    <nve-button type="submit">Submit</nve-button>
  </form>
</template>
```

### Tilbakestille feiltilstand

Feiltilstanden fjernes automatisk når det utløses et <span class="highlight">input</span>-event (input, textarea og combobox) eller et <span class="highlight">change</span>-event (checkbox- og radio-grupper).

## Ekstern validering

Når valideringslogikk leveres eksternt, kan komponentens feiltilstand styres gjennom egenskapen <span class="highlight">errorMessage</span>.

Angi en feilmelding som skal vises til brukeren:

```html
<form>
  <nve-input errorMessage="Value rejected by the server."></nve-input>
</form>
```

Fjern den eksterne feilmeldingen når den ikke lenger er relevant:

```html
<form>
  <nve-input errorMessage=""></nve-input>
</form>
```

## Tilgjengelighet

### Identifisering av feil

Valideringsmønsteret støtter [WCAG 3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) <b>Identifisering av feil</b> ved å gjøre feil tydelige både visuelt og programmatisk. Når et felt ikke består valideringen, settes komponenten i feiltilstand, og en feilmelding vises direkte under det aktuelle skjemafeltet:

<CodeExamplePreview>

```html
<nve-input label="Navn"></nve-input> <nve-input label="Navn" errorMessage="Navn er pakrevd"></nve-input>
```

</CodeExamplePreview>

Samtidig settes <span class="highlight">[aria-invalid](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA21)="true"</span> på det underliggende input-elementet eller fieldset-et, slik at hjelpeteknologier kan oppdage at feltet er ugyldig.

Feilmeldingen eksponeres også som en <span class="highlight">live region</span> ved hjelp av <span class="highlight">[aria-live](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19)="assertive"</span> og <span class="highlight">aria-atomic="true"</span>, slik at skjermlesere varsler brukeren når feilmeldingen vises eller endres. I tillegg knyttes feilmeldingen til skjemafeltet ved hjelp av <span class="highlight">aria-describedby</span>, slik at feilmeldingen leses opp sammen med feltet.

### Fokushåndtering

Inntil en egen komponent for oppsummering av valideringsfeil er tilgjengelig, anbefales det å flytte fokus til det første ugyldige skjemafeltet når <a class="highlight no-visited" href="#validating-the-form">validateForm()</a> returnerer et ugyldig resultat.

Det returnerte objektet inneholder <span class="highlight">firstInvalidField</span>, som kan brukes til dette formålet. Dette gjør det enklere for brukere av tastatur og skjermleser å finne den første feilen raskt, uten å måtte lete seg gjennom skjemaet manuelt.

Alle støttede skjemakomponenter eksponerer en <span class="highlight">focus()</span>-metode, slik at fokus kan flyttes til det første ugyldige feltet på en konsistent måte.

```ts
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = validateForm(event);
  result.firstInvalidField.focus();
});
```
