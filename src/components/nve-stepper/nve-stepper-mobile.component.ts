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

  private handleStepClick(action: 'next' | 'prev') {
    this.dispatchEvent(
      new CustomEvent('step-click', {
        detail: {
          action,
          currentIndex: this.selectedStepIndex.value,
          step: this.steps[this.selectedStepIndex.value],
          nextIndex: action === 'next' ? this.selectedStepIndex.value + 1 : this.selectedStepIndex.value - 1,
          nextStep: this.steps[action === 'next' ? this.selectedStepIndex.value + 1 : this.selectedStepIndex.value - 1],
        },
        bubbles: true,
        composed: true,
      })
    );
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
                  ? html` <div class="step-buttons next-button" @click=${() => this.handleStepClick('next')}>
                      Neste: ${nextStep.label}
                    </div>`
                  : html` <div class="step-buttons next-button" @click=${() => this.handleStepClick('next')}>
                      Finish
                    </div>`}
                <div class="step-buttons back-button" @click=${() => this.handleStepClick('prev')}>Forrige</div>
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
