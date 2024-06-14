# Validering av input

TODO: Vise kjørende Vue-komponenter sammen med markup? Skulle gjerne hatt et kodeeksempel hvor vi kan se skjemaet.
:::tip
Komponentene du skal validere må ligge inni en `<form>`, fordi validering utføres når `submit`-eventet fyres av.
:::

Vi tilbyr en forenklet variant av Shoelace sin måte å validere input på. Du bør lese om [hvordan Shoelace gjør det](https://shoelace.style/getting-started/form-controls).

Alle komponentene som kan brukes til å samle inn data har støtte for validering av input.

`nve-radio-group` og `nve-checkbox-group` støtter kun `required` av reglene i Constraint Validation API, i tillegg til "egendefinert validering".
Både sjekkbokser og radioknapper må ligge i en gruppe for å kunne valideres.

Det finnes to måter å validere på, constraint validation og "egendefinert" validering.

## [Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)

hvor nettleser validerer skjema selv basert på hvilke validerings-attributer (`required`, `pattern`, `min`, `max`) komponenten har.

Du må ha en feilmelding i `errorMessage`, ellers vises nettleseren sin standard feilmelding. Hvis du har flere validerings-attributer i samme komponent, husk at det kun er en `errorMessage` som vises. Hvis du vil tilpasse feilmeldinger til attributet som feilet må du gjøre det selv - sjekk [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).

Constraint validation kaster feil på det første ugyldige feltet den finner. Er det flere felt som feiler, vil ikke feilmelding for disse vises før man trykker submit-knappen på nytt. Det kan eventuelt fikses manuelt hvis man ønsker det. TODO: Hvordan?

## Egendefinert validering

Du kan også lage dine egne valideringsregler med `setCustomValidity()`.

Her er et eksempel på hvordan man kan bruke input validering i Vue appen:
TODO: Formatere som Vue-kode?

```html
<template>
  <!-- .prevent for å hoppe over nettleserens standardoppførsel på submit -->
  <form @submit.prevent="validate">
    <nve-input
      ref="inputComponent"
      :value="myInputValue"
      @input="myInputValue = $event.target.value"
      label="Bruker navn"
      help-test="Må ha minst en spesiell tegn og stor bokstav"
      @sl-blur="validate"
    >
    </nve-input>
    <nve-input
      ref="inputComponent2"
      :value="myInputValue2"
      @input="myInputValue2 = $event.target.value"
      label="Svaret på livet, universet og alt"
      @sl-blur="validate"
    >
    </nve-input>
    <nve-button type="submit">Submit</nve-button>
  </form>
</template>
<script>
  const inputComponent = ref<HTMLInputElement| null>();
  const inputComponent2 = ref<HTMLInputElement| null>();
  const inputValue = ref('');
  const inputValue2 = ref('');

  const validate = () => {
    const inputElement = inputComponent.value;
    const inputElement2 = inputComponent2.value;
    if (!inputElement || !inputElement2) return;

    if (!inputValue.value) {
      inputElement.setCustomValidity('Kan ikke være tom');
    } else if (inputValue.value == 42) {
      inputElement.setCustomValidity('Må være mer enn 42');
    } else {
      inputElement.setCustomValidity('');
    }
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (!uppercaseRegex.test(inputValue2.value)) {
      inputElement2.setCustomValidity('Må ha minst en stor bokstav');
    }
    if (!specialCharRegex.test(inputValue2.value)) {
      inputElement2.setCustomValidity('Må ha minst ett spesialtegn');
    } else {
      inputElement2.setCustomValidity('');
    }
  };
</script>
```

Eksempel på hvordan validere sjekkboks-grupper i Vue:
TODO: Formatere som Vue-kode?

```html
<template>
  <form @submit.prevent="validate">
    <nve-checkbox-group :selectedValues="checked" ref="chGrComponent" size="small" label="Label">
      <nve-checkbox v-for="item in arr" :key="item" :value="item">{{ item }}</nve-checkbox>
    </nve-checkbox-group>
    <nve-button type="submit">Sjekk svaret</nve-button>
  </form>
</template>

<script>
  const chGrComponent = ref<HTMLInputElement| null>();
  const arr = reactive(['1', '2']);
  const checked = reactive([]);

  const validate = () => {
    if (chGrComponent.value) {
      if (!checked.length) {
        chGrComponent.value.setCustomValidity('Må velge minst en');
      } else if (!checked.includes('1')) {
        chGrComponent.value.setCustomValidity('Du må velge 1');
      } else {
        chGrComponent.value.setCustomValidity('');
      }
    }
  };
</script>
```

Hvis en komponent feiler, sender den `sl-invalid`-event. Lytt etter denne hvis du trenger å legge til noe ekstra funksjonalitet.
Ifølge shoelace-dokumentasjon skulle også `form` sende `sl-invalid` hvis noen av feltene feiler, men det virker som dette ikke fungerer bestandig.

NB! Vi støtter ikke bruk av constraint validation og egendefinert validering i samme komponent.
