import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-stepper-demo.styles';
import { StepProps, StepState } from '../nve-stepper/nve-step/nve-step.component';

export const steps: StepProps[] = [
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
@customElement('nve-stepper-demo')
export default class NveStepperDemo extends LitElement implements INveComponent {

  @property({ reflect: true, type: String }) testId: string = '';

  static styles = [styles];

  constructor() {
    super();
    console.log('nve-stepper-demo');
  }

  render() {


    return html`
      <div class="container">
        <nve-stepper
          .steps=${steps}
          .hideStepButtons=${false}
          .orientation=${'horizontal'}
        ></nve-stepper>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stepper-demo': NveStepperDemo;
  }
}
