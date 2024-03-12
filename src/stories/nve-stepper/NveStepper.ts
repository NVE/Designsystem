import { html } from 'lit';
import { StepperProps } from '../../components/nve-stepper/nve-stepper.component';


export const NveStepper= (props: StepperProps) => {
  return  html`
    <nve-stepper .selectedStep=${props.selectedStep}
    .spaceBetweenSteps=${props.spaceBetweenSteps}
    .steps=${props.steps}></nve-stepper>
`;
};
