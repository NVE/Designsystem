import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-stepper-mobile.styles';

export interface StepProps {
  title: string;
  description?: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance: boolean;
  disableClick?: boolean;
  orientation?: string;
}

export enum StepState {
  NotStarted,
  Started,
  Done,
  Error,
}

@customElement('nve-stepper-mobile')
export default class NveStepperMobile extends LitElement {
  static styles: CSSResultArray = [styles];

  @property({ type: Array })
  steps: StepProps[] = [];

  @property({ type: Object })
  selectedStepIndex: { value: number } = { value: 0 };

  @property({ type: Boolean })
  hideStepButtons: boolean = false;

  private handleNextStep() {
    const event = new CustomEvent('next-step', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private handlePrevStep() {
    const event = new CustomEvent('prev-step', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult {
    const currentStep = this.steps[this.selectedStepIndex.value];
    const nextStep = this.steps[this.selectedStepIndex.value + 1];
    const isLastStep = this.selectedStepIndex.value === this.steps.length - 1;

    return html`
      <div class="mobile-stepper">
        <div class="progress-circle">
          ${this.selectedStepIndex.value + 1} of ${this.steps.length}
        </div>
        <div class="step-info">
          <div class="step-title">${currentStep.title}</div>
          ${!this.hideStepButtons
            ? html`
                <div>
                  ${!isLastStep
                    ? html`
                        <div class="step-buttons next-button" @click=${this.handleNextStep}>
                          Neste: ${nextStep.title}
                        </div>`
                    : html`
                        <div class="step-buttons next-button" @click=${this.handleNextStep}>
                          Finish
                        </div>`}
                  <div class="step-buttons back-button" @click=${this.handlePrevStep}>
                    Forrige
                  </div>
                </div>`
            : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stepper-mobile': NveStepperMobile;
  }
}
