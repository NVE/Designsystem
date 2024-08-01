<PageHeader title="For utviklere" imagePath="@images/code-blocks.png"></PageHeader>

# Validering av input

:::tip
Komponentene du skal validere må ligge inni en `<form>`, fordi validering utføres når `submit`-eventet fyres av.
:::

Vi tilbyr en forenklet variant av Shoelace sin måte å validere input på. Du bør lese om [hvordan Shoelace gjør det](https://shoelace.style/getting-started/form-controls).

Alle komponentene som kan brukes til å samle inn data har støtte for validering av input.

Både sjekkbokser og radioknapper må ligge i en gruppe for å kunne valideres.

Det finnes to måter å validere på, [Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) og manuell validering.

## Constraint Validation

hvor nettleser validerer skjema selv basert på hvilke validerings-attributer (`required`, `pattern`, `min`, `max`) komponenten har.

Du må ha en feilmelding i `errorMessage`, ellers vises nettleseren sin standard feilmelding. Hvis du har flere validerings-attributer i samme komponent, må du finne en felles feilmelding som dekker alle tilfeller. Hvis du vil tilpasse feilmeldinger til attributtet som feilet må du gjøre det selv - sjekk [validityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).

Constraint validation kaster feil på det første ugyldige feltet den finner. Er det flere felt som feiler, vil ikke feilmelding for disse vises før man trykker submit-knappen på nytt. Det kan eventuelt fikses manuelt hvis man ønsker det. TODO: Hvordan?

Du finner eksempler på bruk av constraint validation på sida for [nve-input](../../components/nve-input.html#constraint-validation).

`nve-radio-group` og `nve-checkbox-group` støtter kun `required`.

## Manuell validering

Du kan også lage dine egne valideringsregler og bruke `setCustomValidity()` for å vise en feilmelding.

Her er et eksempel på hvordan man kan lage egne valideringsregler i Vue:

```vue
<!-- .prevent for å hoppe over nettleserens standardoppførsel på submit -->
<template>
  <form @submit.prevent="validate" class="form">
    <nve-input
      ref="inputComponent"
      :value="inputValue"
      @input="inputValue = $event.target.value"
      label="Svaret på livet, universet og alt"
    >
    </nve-input>
    <nve-button type="submit" @click="validate">Sjekk svaret</nve-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'nve-designsystem/components/nve-input/nve-input.component';
import 'nve-designsystem/components/nve-button/nve-button.component';
const inputComponent = ref<HTMLInputElement | null>(null);
const inputValue = ref('');

const validate = () => {
  const inputElement = inputComponent.value;
  if (!inputElement) {
    return;
  }
  if (inputValue.value !== '42') {
    inputElement.setCustomValidity('Feil svar');
  } else {
    inputElement.setCustomValidity(''); // Slett evt. tidligere feilmelding
  }
};
</script>
```

<SandboxPreview>

```
<template>
  <form @submit.prevent="validate" class="form">
    <nve-input
      ref="inputComponent"
      :value="inputValue"
      @input="inputValue = $event.target.value"
      label="Svaret på livet, universet og alt"
    >
    </nve-input>
    <nve-button type="submit" @click="validate">Sjekk svaret</nve-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "nve-designsystem/components/nve-input/nve-input.component";
import "nve-designsystem/components/nve-button/nve-button.component";
const inputComponent = ref<HTMLInputElement | null>(null);
const inputValue = ref("");

const validate = () => {
  const inputElement = inputComponent.value;
  if (!inputElement) {
    return;
  }
  if (inputValue.value !== "42") {
    inputElement.setCustomValidity("Feil svar");
  } else {
    inputElement.setCustomValidity(""); // Slett evt. tidligere feilmelding
  }
};
</script>

```

</SandboxPreview>

Hvis en komponent feiler, sender den `sl-invalid`-event. Lytt etter denne hvis du trenger å legge til noe ekstra funksjonalitet.
Ifølge shoelace-dokumentasjonen skulle også `form` sende `sl-invalid` hvis noen av feltene feiler, men det virker som dette ikke fungerer bestandig.

NB! Vi støtter ikke bruk av constraint validation og manuell validering i samme komponent.
