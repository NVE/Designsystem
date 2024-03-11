import '../../components/nve-stepper/nve-stepper.component';
import { NveStepper } from './NveStepper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { StepperProps } from '../../components/nve-stepper/nve-stepper.component';
import { StepProps, StepState } from '../../components/nve-stepper/nve-step/nve-step.component';

const meta: Meta<StepperProps> = {
  title: 'Nve/NveStepper',
  render: (args) => NveStepper(args),
  argTypes: {
    selectedStep: {
      control: 'number',
    },
    spaceBetweenSteps: {
      control: 'number',
    },
    steps: {
      control: 'object', // Her kan du tilpasse kontrollen etter behov
    },
  },
  parameters: {
    docs: {
      // Flere parameterinnstillinger om nødvendig
    },
  },
};

export default meta;
export type Story = StoryObj<StepperProps>;

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
  selectedStep: 2,
  spaceBetweenSteps: 200,
  steps: steps,
} as StepperProps;

export const Standard: Story = {
  args: {
    selectedStep: stepperProps.selectedStep,
    spaceBetweenSteps: stepperProps.spaceBetweenSteps,
    steps: steps,

  },
};
