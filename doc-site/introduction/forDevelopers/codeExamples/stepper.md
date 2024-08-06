<PageHeader title="For utviklere" imagePath="developer"  pageLevel=3></PageHeader>

# Nve-Stepper

Her er eksempler på hvordan du bruker Nve-Stepper i Vue:

## Innholdsfortegnelse

1. [Vertikal med standardknapper](#vertikal-med-standardknapper)
   - [nextStep-funksjonen](#nextstep-funksjonen)
   - [Egen tekst for siste knapp](#egen-tekst-for-siste-knapp)
   - [finishSteps funksjon](#finishsteps-funksjonen)
   - [Forklaring av tilleggsfunksjoner](#forklaring-av-tilleggsfunksjoner)
2. [Horisontal med standardknapper](#horisontal-med-standardknapper)
   - [spaceBetweenSteps](#spacebetweensteps)
3. [Stepper uten standardknapper](#stepper-uten-standardknapper)
   - [prevStep-funksjonen](#prevstep-funksjonen)
   - [nextStep-funksjon uten knapper](#nextstep-funksjon-uten-standardknapper)
   - [Egen tekst for siste knapp uten standardknapper](#egen-tekst-for-siste-knapp-uten-standardknapper)
   - [finishSteps-funksjon uten knapper](#finishsteps-funksjon-uten-standardknapper)
   - [Forklaring av tilleggsfunksjoner uten standardknapper](#forklaring-av-tilleggsfunksjoner-uten-standardknapper)
   - [hideStepButtons](#hidestepbuttons)
   - [getCurrentIndex-funksjon uten standardknapper](#getcurrentindex-funksjon-uten-standardknapper)
4. [Mobil versjon](#mobil-versjon)
   - [displayMobileVersion](#displaymobileversion)
   - [hideMobileStepButtons](#hidemobilestepbuttons)

## Vertikal med standardknapper

Eksemplet viser hvordan du bruker nve-stepper med standardinnstillinger. Som standard får du en stepper som ligger horisontalt med tilbake- og fremoverknapper. Ved siste trinn endres fremover-knappen automatisk til en Send-knapp.

### nextStep-funksjonen

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<Card title="Tips" variant="info">Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes.</Card>

#### Egen tekst for siste knapp

Du kan velge din egen tekst på knappen ved å sende en string til property optionalEndButton, for eksempel optionalEndButton="Klar".

### finishSteps-funksjonen

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

### Forklaring av tilleggsfunksjoner

#### getCurrentIndex-funksjon

Denne funksjonen henter gjeldende trinnindeks ved å bruke getCurrentIndex-metoden til stepper-komponenten og logger den til konsollen. Dette er nyttig for feilsøking eller for å spore hvilket trinn brukeren befinner seg på.

#### selectStep-funksjon

Denne funksjonen lar deg flytte til et bestemt trinn ved å bruke selectStep-metoden. Den utløser en CustomEvent med select-step og ønsket trinnindeks. Dette er nyttig når du trenger å navigere til et spesifikt trinn programmatisk basert på visse betingelser.

::: info
Merk at selectStep-funksjonen har følgende condition:
if (this.steps[event.detail.index - 1].state == StepState.NotStarted) return;
:::

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

## Horisontal med standardknapper

Eksemplet viser hvordan du bruker en horisontal nve-stepper med standardinnstillinger. Se eksempelet på vertikal med standardknapper for å forstå hvordan du bruker funksjoner som nextStep og finishSteps.

### orientation

Property orientation har valgene: 'horisontal' | 'vertikal' der 'horisontal' er default.
:::info
Merk: Du må bruke orientation="horizontal", ikke :orientation="horizontal".
:::

### spaceBetweenSteps

Du kan justere avstanden mellom stegene ved å sende et tall til spaceBetweenSteps. Default er 200.

```vue
<template>
  <nve-stepper :steps="steps" orientation="vertical" :spaceBetweenSteps="100"></nve-stepper>
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
</script>
```

<SandboxPreview>

```
<template>
  <nve-stepper :steps="steps" orientation="vertical" :spaceBetweenSteps="100"></nve-stepper>

</template>
<script setup lang="ts">

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
</script>

```

</SandboxPreview>

## Stepper uten standardknapper

Eksemplet viser hvordan du bruker nve-stepper uten standardknapper, slik at du fleksibelt kan plassere egne knapper der du trenger dem.

### prevStep-funksjonen

Før du administrerer at kontrollen av det siste trinnet er riktig, bør du skrive ovenfor PrevState og legge til hnaten til stepperens indeks.

### nextStep-funksjon uten standardknapper

For å legge til valideringslogikk før du går til neste trinn, kan du skrive over komponentens nextStep-funksjon. Dette gjør det mulig å kontrollere om gjeldende trinn er gyldig før du går videre. Nedenfor finner du et eksempel på hvordan du kan skrive over nextStep-funksjonen og inkludere egen valideringslogikk.

<Card title="Tips" variant="info">Merk at du bør lage en kopi av den originale funksjonen slik at du kan bruke den dersom valideringen lykkes.</Card>

#### Egen tekst for siste knapp uten standardknapper

Du kan velge din egen tekst på knappen ved å sende en string til property optionalEndButton, for eksempel optionalEndButton="Klar".

### finishSteps-funksjon uten standardknapper

Du må skrive over komponentens finishSteps-funksjon for å håndtere hva som skal skje når du er ferdig med stepperen. Nedenfor er et eksempel på hvordan du kan skrive om finishSteps-funksjonen.

### Forklaring av tilleggsfunksjoner uten standardknapper

#### hideStepButtons

En property som angir om standardknappene skal vises eller ikke.

#### getCurrentIndex-funksjon uten standardknapper

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

## Mobil versjon

nve-stepper får automatisk et mobilutseende når mobile enheter brukes, så du trenger ingen innstillinger for at den skal tilpasse seg mobilvisning.

#### displayMobileVersion

Det er mulig å bruke mobilutseende selv på desktop-enheter ved å sette property displayMobileVersion="true".

#### hideMobileStepButtons

En property som angir om standardknappene skal vises eller ikke.
Hvis du velger å skjule standardknappene, se eksempelet "Stepper uten standardknapper" hvordan du implementerer dine egne knapper.

```vue
<template>
  <nve-stepper :steps="steps" :displayMobileVersion="true"> </nve-stepper>
</template>

<script setup lang="ts">
import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import 'nve-designsystem/components/nve-button/nve-button.component';
import 'nve-designsystem/components/nve-icon/nve-icon.component';

import { StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';
import { StepState } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js';

const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: '',
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
    description: '',
    state: StepState.NotStarted,
    isSelected: false,
    readyForEntrance: true,
  },
];
</script>
```

<SandboxPreview>

```
<template>

  <h2>Mobile version</h2>
    <nve-stepper
      :steps="steps"
      :displayMobileVersion="true">
    </nve-stepper>
</template>
<script setup lang="ts">
import "nve-designsystem/components/nve-stepper/nve-stepper.component";
import "nve-designsystem/components/nve-button/nve-button.component";
import "nve-designsystem/components/nve-icon/nve-icon.component";

import { StepProps } from "nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js";
import { StepState } from "nve-designsystem/components/nve-stepper/nve-step/nve-step.component.js";

const steps: StepProps[] = [
    {
        title: "Kategorisering",
        description: "",
        state: StepState.Started,
        isSelected: true,
        readyForEntrance: true,
    },
    {
        title: "Beskrivelse",
        description: "",
        state: StepState.NotStarted,
        isSelected: false,
        readyForEntrance: true,
    },
    {
        title: "Kontakt info",
        description: "",
        state: StepState.NotStarted,
        isSelected: false,
        readyForEntrance: true,
    },
    {
        title: "Oppsumering",
        description: "",
        state: StepState.NotStarted,
        isSelected: false,
        readyForEntrance: true,
    },
];

</script>

```

</SandboxPreview>
