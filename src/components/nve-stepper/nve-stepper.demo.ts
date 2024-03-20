import { html } from 'lit';
import { StepperProps } from './nve-stepper.component';
import { StepProps, StepState } from './nve-step/nve-step.component';

/**
 * Demonstrasjon av nve-label
 */

let steps = [
  {
    title: 'Step 1',
    description: 'The first step',
    state: StepState.Started,
    readyForEntrance: true,
  },
  {
    title: 'Step 2',
    description: 'The second step',
    state: StepState.NotStarted,
    readyForEntrance: true,
  },
  {
    title: 'Step 3',
    description: 'The third step',
    state: StepState.NotStarted,
    readyForEntrance: true,
  },
  {
    title: 'Step 4',
    description: 'The fourth step',
    state: StepState.NotStarted,
    readyForEntrance: true,
  },
  {
    title: 'Step 5',
    description: 'The fifth step',
    state: StepState.NotStarted,
    readyForEntrance: true,
  },
] as StepProps[];

const stepperProps = {
  selectedStepIndex: { value: 0 },
  steps: steps,
  spaceBetweenSteps: 200,
} as StepperProps;

const stepperTest = html`
  <hr />
  <h3 id="nve-stepper">nve-stepper</h3>
  <nve-stepper .selectedStepIndex=${stepperProps.selectedStepIndex}
    .spaceBetweenSteps=${stepperProps.spaceBetweenSteps}
    .optionalEndButton=${'Fullfør'}
    .steps=${stepperProps.steps}
    @complete=${() => console.log('Complete action')}
    ></nve-stepper>
  </div>
`;

export default stepperTest;
