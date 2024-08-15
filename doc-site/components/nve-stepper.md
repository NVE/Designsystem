---
layout: component
---

<CodeExamplePreview>

```html
<nve-stepper
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

## Eksempler

### Retning

Bruk `orientation` for å velge retning. `horizontal` er standard.
:::info
Merk: Du må bruke orientation="horizontal", ikke :orientation="horizontal".
:::

<CodeExamplePreview>

```html
<nve-label>horizontal</nve-label>
<nve-stepper
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>vertical</nve-label>
<nve-stepper
  orientation="vertical"
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

### Mobil-versjon

Stepperen vises automatisk i en egen mobil-versjon på små skjermer.
Beskrivelsen av stegene vises ikke i denne versjonen.
Bruk `displayMobileVersion` for å alltid vise mobil-versjonen selv på brede skjermer.
Bruk `hideMobileStepButtons` for å skjule knappene i mobil-versjon.

<CodeExamplePreview>

```html
<nve-label>Med knapper</nve-label>
<nve-stepper
  displayMobileVersion
  steps='
  [
  {"title":"Steg 1", "state":2,"isSelected":true,"readyForEntrance":true},
  {"title":"Steg 2", "state":2,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3", "state":2,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>Uten knapper</nve-label>
<nve-stepper
  displayMobileVersion
  hideMobileStepButtons
  steps='
  [
  {"title":"Steg 1", "state":2,"isSelected":true,"readyForEntrance":true},
  {"title":"Steg 2", "state":2,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3", "state":2,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

## Vue eksempler

Her er eksempler på hvordan du bruker Nve-Stepper i Vue:

### Vertikal med standardknapper

Eksemplet viser hvordan du bruker nve-stepper med standardinnstillinger. Som standard får du en stepper som ligger horisontalt med tilbake- og fremoverknapper. Ved siste trinn endres fremover-knappen automatisk til en Send-knapp.

#### nextStep-funksjonen

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<nve-message-card title="Tips">
Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes</nve-message-card>

##### Egen tekst for siste knapp

Du kan velge din egen tekst på knappen ved å sende en string til property optionalEndButton, for eksempel optionalEndButton="Klar".

#### finishSteps-funksjonen

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

#### Forklaring av tilleggsfunksjoner

##### getCurrentIndex-funksjon

Denne funksjonen henter gjeldende trinnindeks ved å bruke getCurrentIndex-metoden til stepper-komponenten og logger den til konsollen. Dette er nyttig for feilsøking eller for å spore hvilket trinn brukeren befinner seg på.

##### selectStep-funksjon

Denne funksjonen lar deg flytte til et bestemt trinn ved å bruke selectStep-metoden. Den utløser en CustomEvent med select-step og ønsket trinnindeks. Dette er nyttig når du trenger å navigere til et spesifikt trinn programmatisk basert på visse betingelser.

<nve-message-card title="Info" variant="neutral">
Merk at selectStep-funksjonen har følgende condition:
if (this.steps[event.detail.index - 1].state == StepState.NotStarted) return;</nve-message-card>

```vue
<template>
  <nve-stepper ref="stepper" :steps="steps"></nve-stepper>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import 'nve-designsystem/components/nve-button/nve-button.component';
import 'nve-designsystem/components/nve-icon/nve-icon.component';

import { StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';
import { StepState } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';

const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: 'Lorem Ipsum',
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: 'Beskrivelse',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Oppsumering',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

// Get a reference to the stepper component
const stepper = ref<HTMLElement | null>(null);

onMounted(() => {
  initializeStepper();
  logCurrentIndex();
});

// Function to initialize the stepper component
const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;

    // Override the original nextStep method
    overrideNextStep(nveStepper);
    // Override the finishSteps method with custom logic
    overrideFinishSteps(nveStepper);
  }
};

// Function to override the nextStep method with custom validation
const overrideNextStep = (nveStepper: INveStepper) => {
  // Store a reference to the original nextStep method, binding 'this' to 'nveStepper'
  const originalNextStep = nveStepper.nextStep.bind(nveStepper);

  nveStepper.nextStep = () => {
    // Perform custom validation before advancing to the next step
    if (validateCurrentStep(nveStepper)) {
      console.log('Validation success');
      originalNextStep();
    } else {
      console.log('Validation failed');
    }
  };
};

// Function to override the finishSteps method with custom logic
const overrideFinishSteps = (nveStepper: INveStepper) => {
  nveStepper.finishSteps = () => {
    console.log('Custom finish steps logic executed!');
    // Add your custom logic here
  };
};

// Function to validate the current step
const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  // Example condition: Ensure the description is not empty
  return steps[currentIndex].description.trim() !== '';
};

// Function to log the current step index
const logCurrentIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    const currentIndex = nveStepper.getCurrentIndex();
    console.log(`Current step index: ${currentIndex}`);
  }
};

// Function to move to a specific step
// NOTE that the selectStep function has the condition:
//    if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
//        return; }
const moveToStep = (index: number) => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    nveStepper.selectStep(new CustomEvent('select-step', { detail: { index } }));
    console.log(`Moved to step index: ${index}`);
  }
};
</script>
```

<SandboxPreview>

```
<template>
  <nve-stepper ref="stepper" :steps="steps"></nve-stepper>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import "nve-designsystem/components/nve-stepper/nve-stepper.component";
import "nve-designsystem/components/nve-button/nve-button.component";
import "nve-designsystem/components/nve-icon/nve-icon.component";

import { StepProps } from "nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js";
import { StepState } from "nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js";
const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: 'Lorem Ipsum',
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: 'Beskrivelse',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Oppsumering',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

// Get a reference to the stepper component
const stepper = ref<HTMLElement | null>(null);

onMounted(() => {
  initializeStepper();
  logCurrentIndex();
});

// Function to initialize the stepper component
const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;

    // Override the original nextStep method
    overrideNextStep(nveStepper);
    // Override the finishSteps method with custom logic
    overrideFinishSteps(nveStepper);
  }
};

// Function to override the nextStep method with custom validation
const overrideNextStep = (nveStepper: INveStepper) => {
  // Store a reference to the original nextStep method, binding 'this' to 'nveStepper'
  const originalNextStep = nveStepper.nextStep.bind(nveStepper);

  nveStepper.nextStep = () => {
    // Perform custom validation before advancing to the next step
    if (validateCurrentStep(nveStepper)) {
      console.log('Validation success');
      originalNextStep();
    } else {
      console.log('Validation failed');
    }
  };
};

// Function to override the finishSteps method with custom logic
const overrideFinishSteps = (nveStepper: INveStepper) => {
  nveStepper.finishSteps = () => {
    console.log('Custom finish steps logic executed!');
    // Add your custom logic here
  };
};

// Function to validate the current step
const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  // Example condition: Ensure the description is not empty
  return steps[currentIndex].description.trim() !== '';
};

// Function to log the current step index
const logCurrentIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    const currentIndex = nveStepper.getCurrentIndex();
    console.log(`Current step index: ${currentIndex}`);
  }
};

// Function to move to a specific step
// NOTE that the selectStep function has the condition:
//    if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
//        return; }
const moveToStep = (index: number) => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    nveStepper.selectStep(new CustomEvent('select-step', { detail: { index } }));
    console.log(`Moved to step index: ${index}`);
  }
};
</script>

```

</SandboxPreview>

### Stepper uten standardknapper

Eksemplet viser hvordan du bruker nve-stepper uten standardknapper, slik at du fleksibelt kan plassere egne knapper der du trenger dem.

#### prevStep-funksjonen

Før du administrerer at kontrollen av det siste trinnet er riktig, bør du skrive ovenfor PrevState og legge til hnaten til stepperens indeks.

#### nextStep-funksjon uten standardknapper

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<nve-message-card title="Tips">
Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes</nve-message-card>

##### Egen tekst for siste knapp uten standardknapper

Du kan velge din egen tekst på knappen ved å sende en string til property optionalEndButton, for eksempel optionalEndButton="Klar".

#### finishSteps-funksjon uten standardknapper

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

#### Forklaring av tilleggsfunksjoner uten standardknapper

##### hideStepButtons

En property som angir om standardknappene skal vises eller ikke.

##### getCurrentIndex-funksjon uten standardknapper

Denne funksjonen henter gjeldende trinnindeks ved å bruke getCurrentIndex-metoden til stepper-komponenten og logger den til konsollen. Dette er nyttig for feilsøking eller for å spore hvilket trinn brukeren er på.

```vue
<template>
  <div>
    <nve-stepper ref="stepper" :steps="steps" :hideStepButtons="true"></nve-stepper>
    <!-- <nve-stepper ref="stepper" :steps="steps" :hideStepButtons="true" orientation="vertical"></nve-stepper> -->

    <div>
      <nve-button size="small" variant="primary" @click="handlePrevStep"> Previous </nve-button>
      <nve-button size="small" variant="primary" @click="handleNextStepOrFinish">
        {{ isLastStep ? 'Send' : 'Next' }}
      </nve-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import 'nve-designsystem/components/nve-button/nve-button.component';
import 'nve-designsystem/components/nve-icon/nve-icon.component';

import { INveStepper } from 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import { StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';
import { StepState } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';

const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: 'Lorem Ipsum',
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: 'Beskrivelse',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Oppsumering',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

const stepper = ref<INveStepper | null>(null);
const isLastStep = ref(false);

onMounted(() => {
  initializeStepper();
  updateIsLastStep();
});

// Initialize the stepper and override its methods
const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value;

    // Override nextStep method
    const originalNextStep = nveStepper.nextStep.bind(nveStepper);
    nveStepper.nextStep = () => {
      if (validateCurrentStep(nveStepper)) {
        console.log('Validation success');
        originalNextStep();
        updateIsLastStep();
      } else {
        console.log('Validation failed');
      }
    };

    // Override prevStep method
    const originalPrevStep = nveStepper.prevStep.bind(nveStepper);
    nveStepper.prevStep = () => {
      originalPrevStep();
      updateIsLastStep();
    };

    // Override finishSteps method
    nveStepper.finishSteps = () => {
      console.log('Custom finish steps logic executed!');
      // Add your custom logic here
    };
  }
};

// Validate the current step
const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  return steps[currentIndex].description.trim() !== '';
};

// Update the isLastStep flag based on the current step index
const updateIsLastStep = () => {
  if (stepper.value) {
    isLastStep.value = stepper.value.getCurrentIndex() === steps.length - 1;
  }
};

// Handle custom next/finish button click
const handleNextStepOrFinish = () => {
  if (isLastStep.value && stepper.value) {
    stepper.value.finishSteps();
  } else if (stepper.value) {
    stepper.value.nextStep();
  }
};

// Handle custom previous button click
const handlePrevStep = () => {
  if (stepper.value) {
    stepper.value.prevStep();
  }
};
</script>
```

<SandboxPreview>

```
<template>
  <div>
    <nve-stepper
      ref="stepper"
      :steps="steps"
      :hideStepButtons="true"
    ></nve-stepper>
        <!-- <nve-stepper ref="stepper" :steps="steps" :hideStepButtons="true" orientation="vertical"></nve-stepper> -->

    <div>
      <nve-button size="small" variant="primary" @click="handlePrevStep">
        Previous
      </nve-button>
      <nve-button size="small" variant="primary" @click="handleNextStepOrFinish">
        {{ isLastStep ? 'Send' : 'Next' }}
      </nve-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import 'nve-designsystem/components/nve-button/nve-button.component';
import 'nve-designsystem/components/nve-icon/nve-icon.component';

import { INveStepper } from 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import { StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';
import { StepState } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';

const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: 'Lorem Ipsum',
    state: StepState.Started,
    isSelected: true,
    readyForEntrance: true,
  },
  {
    title: 'Beskrivelse',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Oppsumering',
    description: 'Lorem Ipsum',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];

const stepper = ref<INveStepper | null>(null);
const isLastStep = ref(false);

onMounted(() => {
  initializeStepper();
  updateIsLastStep();
});

// Initialize the stepper and override its methods
const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value;

    // Override nextStep method
    const originalNextStep = nveStepper.nextStep.bind(nveStepper);
    nveStepper.nextStep = () => {
      if (validateCurrentStep(nveStepper)) {
        console.log('Validation success');
        originalNextStep();
        updateIsLastStep();
      } else {
        console.log('Validation failed');
      }
    };

    // Override prevStep method
    const originalPrevStep = nveStepper.prevStep.bind(nveStepper);
    nveStepper.prevStep = () => {
      originalPrevStep();
      updateIsLastStep();
    };

    // Override finishSteps method
    nveStepper.finishSteps = () => {
      console.log('Custom finish steps logic executed!');
      // Add your custom logic here
    };
  }
};

// Validate the current step
const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  return steps[currentIndex].description.trim() !== '';
};

// Update the isLastStep flag based on the current step index
const updateIsLastStep = () => {
  if (stepper.value) {
    isLastStep.value = stepper.value.getCurrentIndex() === steps.length - 1;
  }
};

// Handle custom next/finish button click
const handleNextStepOrFinish = () => {
  if (isLastStep.value && stepper.value) {
    stepper.value.finishSteps();
  } else if (stepper.value) {
    stepper.value.nextStep();
  }
};

// Handle custom previous button click
const handlePrevStep = () => {
  if (stepper.value) {
    stepper.value.prevStep();
  }
};
</script>

```

</SandboxPreview>
