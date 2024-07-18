# Nve-Stepper

TODO Fix this documentation after we have updated the nve-designsystem version in order to change
the version in SandboxPreview

Her er eksempel på hvordandu bruker Nve-Stepper i Vue:

```vue
<template>
  <div>
    <nve-stepper
      ref="stepperRef"
      :selectedStepIndex="selectedStepIndex"
      :steps="steps"
      :spaceBetweenSteps="spaceBetweenSteps"
    ></nve-stepper>
    <div>
      <button @click="handlePrevStep">Previous</button>
      <button @click="handleNextStep">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import type { INveStepper } from 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import { StepState, StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component';

const selectedStepIndex = ref(0);
const stepperRef = ref<INveStepper>();

const steps: StepProps[] = [
  {
    title: 'Kategorisering',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.',
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
    state: StepState.Error,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: 'Oppsumering',
    description: '',
    state: StepState.Done,
    isSelected: false,
    readyForEntrance: true,
  },
];

const handleNextStep = () => {
  stepperRef.value?.nextStep();
};

const handlePrevStep = () => {
  stepperRef.value?.prevStep();
};
</script>
```

<SandboxPreview>

```
<template>
  <div>
    <nve-stepper
      ref="stepperRef"
      :selectedStepIndex="selectedStepIndex"
      :steps="steps"
      :spaceBetweenSteps="spaceBetweenSteps"
    ></nve-stepper>
    <div>
      <button @click="handlePrevStep">Previous</button>
      <button @click="handleNextStep">Next</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import 'nve-designsystem/components/nve-stepper/nve-stepper.component';
import { StepState, StepProps } from 'nve-designsystem/components/nve-stepper/nve-step/nve-step.component';

const selectedStepIndex = ref(0);
const stepperRef = ref<any | null>(null);

const steps: StepProps[] = [
  {
    title: "Kategorisering",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget.",
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
    state: StepState.Error,
    isSelected: false,
    readyForEntrance: true,
  },
  {
    title: "Oppsumering",
    description: "",
    state: StepState.Done,
    isSelected: false,
    readyForEntrance: true,
  },
];

const handleNextStep = () => {
  if (stepperRef.value) {
    stepperRef.value.nextStep();
  }
};

const handlePrevStep = () => {
 if (stepperRef.value) {
    stepperRef.value.prevStep();
  }
};
</script>

```

</SandboxPreview>
