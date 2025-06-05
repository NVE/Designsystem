import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-stepper-mobile.styles';
import { StepProps } from './nve-step/nve-step.component';

@customElement('nve-stepper-mobile')
export default class NveStepperMobile extends LitElement {
  static styles: CSSResultArray = [styles];

  /** Steps som skal vises, se StepProps interface for data som skal sendes inn. */
  @property({ type: Array })
  steps: StepProps[] = [];

  /** Skjuler Neste og Forrige knappene slik at du kan implementere dine egne Neste og Forrige knappene. */
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

  selectedStepIndex: { value: number } = { value: 0 };

  render(): TemplateResult {
    const currentStep = this.steps[this.selectedStepIndex.value];
    const nextStep = this.steps[this.selectedStepIndex.value + 1];
    const isLastStep = this.selectedStepIndex.value === this.steps.length - 1;

    return html`
      <div class="mobile-stepper">
        <div class="progress-circle">${this.selectedStepIndex.value + 1} of ${this.steps.length}</div>
        <div class="step-info">
          <div class="step-label">${currentStep.label}</div>
          ${!this.hideStepButtons
            ? html` <div>
                ${!isLastStep
                  ? html` <div class="step-buttons next-button" @click=${this.handleNextStep}>
                      Neste: ${nextStep.label}
                    </div>`
                  : html` <div class="step-buttons next-button" @click=${this.handleNextStep}>Finish</div>`}
                <div class="step-buttons back-button" @click=${this.handlePrevStep}>Forrige</div>
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
