import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';

@customElement('nve-stepper')
export default class NveStepper extends LitElement {
  static styles = [styles];

  /**
   * Hvilken retning steppene skal gå. TODO: implementer vertical
   */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  /**
   * Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt.
   */
  @property({ type: Object })
  selectedStepIndex = { value: 0 };
  /**
   * Avstand mellom steppene
   */
  @property({ type: Number })
  spaceBetweenSteps = 200;
  /**
   * Hvilken ikonbibliotek som skal brukes
   */
  @property({ type: String })
  iconLibrary: 'Outlined' | 'Sharp' = 'Outlined';
  /**
   * Mulighet om å endre teksten på knapp ved siste steg,
   * default er disabled neste
   */
  @property({ type: String })
  optionalEndButton = '';
  /**
   * Steppene som skal vises, se StepProps interface for data som skal sendes inn
   */
  @property({ type: Array })
  steps = new Array<StepProps>();

  firstUpdated() {
    this.setStep(this.selectedStepIndex.value);
  }

  nextStep() {
    if (this.selectedStepIndex.value < this.steps.length - 1) {
      this.setStep(this.selectedStepIndex.value + 1);
    }
  }
  prevStep() {
    if (this.selectedStepIndex.value > 0) {
      this.setStep(this.selectedStepIndex.value - 1);
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
      this.selectedStepIndex.value = index;
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
  /**
   * Sjekker om vi er på start eller slutten av steppene
   * @returns 'start', 'end' eller undefined
   */
  getExtremes() {
    if (this.selectedStepIndex.value === 0) return 'start';
    if (this.selectedStepIndex.value === this.steps.length - 1) {
      return 'end';
    }
  }
  render() {
    return html`
      <div class="stepper ${this.orientation}">
        <div style="width: 120px">
          <nve-button
            .disabled=${this.getExtremes() === 'start'}
            size="medium"
            variant="primary"
            @click=${this.prevStep}
            ><nve-icon slot="prefix" name="navigate_before" library="${this.iconLibrary}"></nve-icon>Forrige</nve-button
          >
        </div>
        <div class="flex-container">
          ${this.steps.map(
            (step, index) => html`
              <nve-step
                @clicked=${this.selectStep}
                .iconLibrary=${this.iconLibrary}
                .icons=${step.icons}
                .title=${step.title}
                .description=${step.description}
                .state=${step.state}
                .selectedStepIndex=${this.selectedStepIndex.value}
                .isSelected=${step.isSelected}
                .isLast=${index === this.steps.length - 1}
                .index=${index}
                .spaceBetweenSteps=${this.spaceBetweenSteps}
                .readyForEntrance=${step.readyForEntrance}
                .direction=${this.orientation}
              >
              </nve-step>
            `
          )}
        </div>
        <div style="width: 120px">
          <nve-button
            .disabled=${this.getExtremes() === 'end' && this.optionalEndButton === ''}
            size="medium"
            variant="primary"
            @click=${this.nextStep}
          >
            <nve-icon slot="suffix" name="navigate_next" library="${this.iconLibrary}"></nve-icon>
            ${this.getExtremes() === 'end' && this.optionalEndButton !== '' ? this.optionalEndButton : 'Neste'}
          </nve-button>
        </div>
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
  selectedStepIndex: { value: number };
  steps: StepProps[];
  spaceBetweenSteps: number;
}
