---
layout: component
---

## Eksempler

### Standard med og uten knapper

Bruk `hideStepButtons` for å skjule knappene i desktop-versjon. Hvis du skjuler knappene, må du implementere dine egne knapper og du bruker metodene `nextStep` og `prevStep` for å håndtere logikken.

I siste trinn erstattes neste knapp med en klarknapp, som standard er teksten "Sende", men du kan endre teksten gjennom egenskapen `endButtonText`. Du må bruke metoden `finishSteps` for du spesifiserer hva som skal skje på den siste knappen.

<div style="height: 20px;"></div>

Se Vue eksempel [her](#stepper-uten-standardknapper) hvordan du bruker metoderna `nextStep`, `prevStep`, `finishSteps` og hvordan du får forskjellige sider med Stepper ved å bruke `getCurrentIndex`

<CodeExamplePreview>

```html
<nve-label>Med knapper</nve-label>
<nve-stepper
  endButtonText="Klar"
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>Uten knapper</nve-label>

<nve-stepper
  hideStepButtons
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse av steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Beskrivelse av steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse av steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

### Retning

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
  endButtonText="Klar"
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

### Skjul tilstandstekst for alle trinn

<CodeExamplePreview>

```html
<nve-label>horizontal</nve-label>
<nve-stepper
  hideStateText
  steps='
  [
  {"title":"Steg 1","description":"","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>vertical</nve-label>
<nve-stepper
  hideStateText
  orientation="vertical"
  steps='
  [
  {"title":"Steg 1","description":"","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

### Kompakt stepper uten beskrivelser

Bruk `hideDescriptions` for å skjule alle beskrivelser og få en mer kompakt visning. Dette er nyttig når du har begrenset plass eller når beskrivelsene ikke er nødvendige for brukeren.

Selv om du setter `hideDescriptions=true`, kan du fortsatt definere beskrivelser i step-objektene. Disse vil bli skjult i grensesnittet men kan brukes i andre sammenhenger eller vises senere om nødvendig.

<CodeExamplePreview>

```html
<nve-label>Kompakt horizontal</nve-label>
<nve-stepper
  hideDescriptions
  steps='
  [
  {"title":"Steg 1","description":"Denne beskrivelsen vises ikke","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Denne beskrivelsen vises ikke","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Denne beskrivelsen vises ikke","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>Kompakt vertical</nve-label>
<nve-stepper
  hideDescriptions
  orientation="vertical"
  steps='
  [
  {"title":"Steg 1","description":"Denne beskrivelsen vises ikke","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","description":"Denne beskrivelsen vises ikke","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Denne beskrivelsen vises ikke","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>
```

</CodeExamplePreview>

### Skjul description for steg 2

Dette eksempelet viser at `description` er en valgfri egenskap. Steg 2 har ingen beskrivelse, mens steg 1 og 3 har beskrivelser.

<CodeExamplePreview>

```html
<nve-label>horizontal</nve-label>
<nve-stepper
  steps='
  [
  {"title":"Steg 1","description":"Beskrivelse steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
>
</nve-stepper>

<nve-label>vertical</nve-label>
<nve-stepper
  orientation="vertical"
  steps='
    [
  {"title":"Steg 1","description":"Beskrivelse steg 1","state":1,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 2","state":0,"isSelected":false,"readyForEntrance":true},
  {"title":"Steg 3","description":"Beskrivelse steg 3","state":0,"isSelected":false,"readyForEntrance":true}]'
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

Eksemplet viser hvordan du bruker nve-stepper med standardinnstillinger.

#### nextStep-funksjonen

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<nve-message-card title="Tips">
Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes</nve-message-card>
<div style="height: 20px;"></div>

#### finishSteps-funksjonen

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

#### Forklaring av tilleggsfunksjoner

<div style="height: 10px;"></div>

##### getCurrentIndex-funksjon

Denne funksjonen henter gjeldende trinnindeks ved å bruke getCurrentIndex-metoden til stepper-komponenten og logger den til konsollen. Dette er nyttig for feilsøking eller for å spore hvilket trinn brukeren befinner seg på.

##### selectStep-funksjon

Denne funksjonen lar deg flytte til et bestemt trinn ved å bruke selectStep-metoden.Dette er nyttig når du trenger å navigere til et spesifikt trinn programmatisk basert på visse betingelser.

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

const stepper = ref<HTMLElement | null>(null);

onMounted(() => {
  initializeStepper();
  logCurrentIndex();
});

const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    overrideNextStep(nveStepper);
    overrideFinishSteps(nveStepper);
  }
};

// Function to override the nextStep method with custom validation
const overrideNextStep = (nveStepper: INveStepper) => {
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

const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  // Example condition: Ensure the description is not empty
  return steps[currentIndex].description.trim() !== '';
};

const logCurrentIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    const currentIndex = nveStepper.getCurrentIndex();
    console.log(`Current step index: ${currentIndex}`);
  }
};

// Function to move to a specific step
const moveToStep = (index: number) => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    nveStepper.selectStep(index);
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

const stepper = ref<HTMLElement | null>(null);

onMounted(() => {
  initializeStepper();
  logCurrentIndex();
});

const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;

    overrideNextStep(nveStepper);
    overrideFinishSteps(nveStepper);
  }
};

const overrideNextStep = (nveStepper: INveStepper) => {
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

const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  // Example condition: Ensure the description is not empty
  return steps[currentIndex].description.trim() !== '';
};

const logCurrentIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    const currentIndex = nveStepper.getCurrentIndex();
    console.log(`Current step index: ${currentIndex}`);
  }
};

// Function to move to a specific step
const moveToStep = (index: number) => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    nveStepper.selectStep(index);
    console.log(`Moved to step index: ${index}`);
  }
};
</script>

```

</SandboxPreview>

### Stepper uten standardknapper

Eksemplet viser hvordan du bruker nve-stepper uten standardknapper, slik at du fleksibelt kan plassere egne knapper der du trenger dem.

#### prevStep-funksjonen

Du kan skrive over prevStep-funksjonen.

#### nextStep-funksjon

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<nve-message-card title="Tips">
Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes</nve-message-card>
<div style="height: 20px;"></div>

#### finishSteps-funksjon

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

#### Forklaring av tilleggsfunksjoner

<div style="height: 20px;"></div>

##### hideStepButtons

En property som angir om standardknappene skal vises eller ikke.

##### getCurrentIndex-funksjon

Denne funksjonen henter gjeldende trinnindeks ved å bruke getCurrentIndex-metoden til stepper-komponenten og kan brukes for du administrerer Step index.

```vue
<template>
  <div>
    <nve-stepper ref="stepper" :steps="steps" :hideStepButtons="true"></nve-stepper>
    <div v-if="isCurrentStep(0)" style="height:300px; width:600px; background:green;">
      <h2>Page 1</h2>
    </div>
    <div v-if="isCurrentStep(1)" style="height:300px;width:600px; background:blue;">
      <h2>Page 2</h2>
    </div>
    <div v-if="isCurrentStep(2)" style="height:300px; width:600px; background:red;">
      <h2>Page 3</h2>
    </div>
    <div v-if="isCurrentStep(3)" style="height:300px; width:600px; background:yellow;">
      <h2>Page 4</h2>
    </div>
    <div>
      <nve-button size="small" variant="primary" @click="handlePrevStep"> Previous </nve-button>
      <nve-button size="small" variant="primary" @click="handleNextStepOrFinish">
        {{ isLastStep ? 'Send' : 'Next' }}
      </nve-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

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
    description: '',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: '',
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
const currentStepIndex = ref(0);
const isLastStep = ref(false);

onMounted(() => {
  initializeStepper();
});

const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value;

    const originalNextStep = nveStepper.nextStep.bind(nveStepper);
    nveStepper.nextStep = () => {
      if (validateCurrentStep(nveStepper)) {
        console.log('Validation success');
        originalNextStep();
        updateCurrentStepIndex();
      } else {
        console.log('Validation failed');
      }
    };

    // Override prevStep method
    const originalPrevStep = nveStepper.prevStep.bind(nveStepper);
    nveStepper.prevStep = () => {
      originalPrevStep();
      updateCurrentStepIndex();
    };

    // Override finishSteps method
    nveStepper.finishSteps = () => {
      console.log('Custom finish steps logic executed!');
      // Add your custom logic here
    };

    updateCurrentStepIndex();
  }
};

const updateCurrentStepIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    isLastStep.value = nveStepper.getCurrentIndex() === steps.length - 1;
    currentStepIndex.value = nveStepper.getCurrentIndex();
  }
};

const isCurrentStep = computed(() => (index: number) => index === currentStepIndex.value);

// Validate the current step
const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  return steps[currentIndex].description.trim() !== '';
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
    <nve-stepper ref="stepper" :steps="steps" :hideStepButtons="true"></nve-stepper>
    <div v-if="isCurrentStep(0)" style="height:300px; width:600px; background:green;">
      <h2>Page 1</h2>
    </div>
    <div v-if="isCurrentStep(1)" style="height:300px;width:600px; background:blue;">
      <h2>Page 2</h2>
    </div>
    <div v-if="isCurrentStep(2)" style="height:300px; width:600px; background:red;">
      <h2>Page 3</h2>
    </div>
    <div v-if="isCurrentStep(3)" style="height:300px; width:600px; background:yellow;">
      <h2>Page 4</h2>
    </div>
    <div>
      <nve-button size="small" variant="primary" @click="handlePrevStep"> Previous </nve-button>
      <nve-button size="small" variant="primary" @click="handleNextStepOrFinish">
        {{ isLastStep ? 'Send' : 'Next' }}
      </nve-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

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
    description: '',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Kontakt info',
    description: '',
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
const currentStepIndex = ref(0);
const isLastStep = ref(false);

onMounted(() => {
  initializeStepper();
});

const initializeStepper = () => {
  if (stepper.value) {
    const nveStepper = stepper.value;

    const originalNextStep = nveStepper.nextStep.bind(nveStepper);
    nveStepper.nextStep = () => {
      if (validateCurrentStep(nveStepper)) {
        console.log('Validation success');
        originalNextStep();
        updateCurrentStepIndex();
      } else {
        console.log('Validation failed');
      }
    };

    // Override prevStep method
    const originalPrevStep = nveStepper.prevStep.bind(nveStepper);
    nveStepper.prevStep = () => {
      originalPrevStep();
      updateCurrentStepIndex();
    };

    // Override finishSteps method
    nveStepper.finishSteps = () => {
      console.log('Custom finish steps logic executed!');
      // Add your custom logic here
    };

    updateCurrentStepIndex();
  }
};

const updateCurrentStepIndex = () => {
  if (stepper.value) {
    const nveStepper = stepper.value as unknown as INveStepper;
    isLastStep.value = nveStepper.getCurrentIndex() === steps.length - 1;
    currentStepIndex.value = nveStepper.getCurrentIndex();
  }
};

const isCurrentStep = computed(() => (index: number) => index === currentStepIndex.value);

const validateCurrentStep = (nveStepper: INveStepper) => {
  const currentIndex = nveStepper.getCurrentIndex();
  return steps[currentIndex].description.trim() !== '';
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
