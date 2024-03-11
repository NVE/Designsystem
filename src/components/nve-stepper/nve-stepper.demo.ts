import { html } from 'lit';
import { StepperProps } from './nve-stepper.component';
import { StepProps, StepState } from './nve-step/nve-step.component';

/**
 * Demonstrasjon av nve-label
 */

let steps = [
  {
    icons: ["settings"],
    title: "Step 1",
    description: "This is the first step",
    state: StepState.Started,
    readyForEntrance: true
  },
  {
    icons: ["settings"],
    title: "Step 2",
    description: "This is the second step", 
    state: StepState.NotStarted,
    readyForEntrance: true
  },
  {
    icons: ["settings"],
    title: "Step 3",
    description: "This is the third step",
    state: StepState.NotStarted,
    readyForEntrance: true
  },
  {
    icons: ["settings"],
    title: "Step 4",
    description: "This is the fourth step",
    state: StepState.NotStarted,
    readyForEntrance: true
  },
  {
    icons: ["settings"],
    title: "Step 5",
    description: "This is the fourth step",
    state: StepState.NotStarted,
    readyForEntrance: true
  },
] as StepProps[];

let stepperProps = {
  selectedStep: 0,
  steps: steps,
  spaceBetweenSteps: 200,
} as StepperProps;


const stepperTest = html`
  <hr />
  <h3 id="nve-stepper">nve-stepper</h3>
    <nve-stepper .selectedStep=${stepperProps.selectedStep}
    .spaceBetweenSteps=${stepperProps.spaceBetweenSteps}
    .steps=${stepperProps.steps}></nve-stepper>
  </div>
`;

export default stepperTest;
