import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';

@customElement('nve-stepper')
export default class NveStepper extends LitElement {
  static styles = [styles];

  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  @property({ type: Number })
  selectedStep!: number;

  @property({ type: Array })
  steps = new Array<StepProps>();

  @query('.scroll-menu')
  scrollContainer!: Element;

  stepWidth = 100;

  firstUpdated() {
    this.setStep(this.selectedStep);
  }
  checkOverflow() {}
  nextStep() {
    if (this.selectedStep < this.steps.length - 1) {
      this.setStep(this.selectedStep + 1);
    }
  }
  prevStep() {
    if (this.selectedStep > 0) {
      this.setStep(this.selectedStep - 1);
    }
  }
  selectStep(event: any) {
    if (event.detail.index > 0) {
      if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
        return;
      }
    }
    this.setStep(event.detail.index);
  }
  setStep(index: number) {
    if (this.steps[index].readyForEntrance) {
      this.selectedStep = index;
      for (let i = 0; i < this.steps.length; i++) {
        this.steps[i].isSelected = i === index;
        if (i <= index) {
          if (this.steps[i].state < StepState.Done) {
            this.steps[i].state = StepState.Started;
          }
        }
        this.steps = [...this.steps];
      }
    }
  }
  render() {
    return html`
      <div class="stepper ${this.orientation}">
        <nve-button size="medium" variant="primary" @click=${this.prevStep}
          ><nve-icon slot="prefix" name="navigate_before"></nve-icon>Forrige</nve-button
        >
        <div class="flex-container">
          ${this.steps.map(
            (step, index) => html`
              <nve-step
                @clicked=${this.selectStep}
                .icons=${step.icons}
                .title=${step.title}
                .description=${step.description}
                .state=${step.state}
                .stepperIndex=${this.selectedStep}
                .isSelected=${step.isSelected}
                .isLast=${index === this.steps.length - 1}
                .index=${index}
                .readyForEntrance=${step.readyForEntrance}
                .direction=${this.orientation}
              >
              </nve-step>
            `
          )}
        </div>
        <nve-button size="medium" variant="primary" @click=${this.nextStep}>
          <nve-icon slot="suffix" name="navigate_next"></nve-icon>Neste</nve-button
        >
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-nve': NveStepper;
  }
}

export interface StepperProps {
  selectedStep: number;
  orientation: 'horizontal' | 'vertical';
  steps: StepProps[];
}
