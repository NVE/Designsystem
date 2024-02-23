import { html } from 'lit';
import { StepperProps } from './nve-stepper.component';
import { StepProps, StepState } from './nve-step/nve-step.component';

/**
 * Demonstrasjon av nve-label
 */

let stepperProps = {
  selectedStep: 0,
  orientation: 'horizontal',
} as StepperProps;

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
    readyForEntrance: false
  },
] as StepProps[];

const stepperTest = html`
  <hr />
  <h3 id="nve-label">nve-stepper</h3>
  <br>
  <nve-stepper  .stepperProps=${stepperProps} .steps=${steps}></nve-stepper>
`;

export default stepperTest;
