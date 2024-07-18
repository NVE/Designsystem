import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';

@customElement('nve-stepper')
export default class NveStepper extends LitElement {
  static styles: CSSResultArray = [styles];

  /**
   * Hvilken retning steppene skal gå. 
   */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt.
   */
  @property({ type: Object })
  selectedStepIndex: { value: number } = { value: 0 };

  /**
   * Avstand mellom steppene
   */
  @property({ type: Number })
  spaceBetweenSteps: number = 200;


  /**
   * Mulighet om å endre teksten på knapp ved siste steg,
   * default er disabled neste.
   */
  @property({ type: String })
  optionalEndButton: string = '';

  /**
   * Steppene som skal vises, se StepProps interface for data som skal sendes inn.
   */
  @property({ type: Array })
  steps: StepProps[] = [];

  /**
   * Deaktiverer muligheten til å klikke på en Step komponenten slik at den blir valgt.
   */
  @property({ type: Boolean })
    disableStepClick: boolean = true;

    /**
    * Skjuler Step-knappene slik at du kan implementere dine egne Step-knappene.
   */
  @property({ type: Boolean })
      hideStepButtons: boolean = false;

  /**
   * Ved endring av props, re-render komponenten eksternt med document.querySelector("nve-stepper")?.reRender();
   * Ellers vil man ikke se endringene før intern state endres.
   */
  reRender(): void {
    this.requestUpdate();
  }

  firstUpdated(): void {
    this.setStep(this.selectedStepIndex.value);
  }

  nextStep(): void {
    if (this.selectedStepIndex.value < this.steps.length - 1) {
      this.setStep(this.selectedStepIndex.value + 1);
    }
  }

  prevStep(): void {
    if (this.selectedStepIndex.value > 0) {
      this.setStep(this.selectedStepIndex.value - 1);
    }
  }

  selectStep(event: CustomEvent): void {
    if (event.detail.index > 0) {
      if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
        return;
      }
    }
    this.setStep(event.detail.index);
  }


setStep(index: number): void {
  // Hvis gjeldende Step er mindre enn det nye Step, sett gjeldende Step til Done
  if (this.selectedStepIndex.value < index && this.steps[this.selectedStepIndex.value].state === StepState.Started) {
    this.steps[this.selectedStepIndex.value].state = StepState.Done;
  }

 // Hvis det nye Step er klart for å gå til neste
  if (this.steps[index].readyForEntrance) {
    this.selectedStepIndex.value = index;

    for (let i = 0; i < this.steps.length; i++) {
      this.steps[i].isSelected = i === index;

      if (i === index) {
        this.steps[i].state = StepState.Started;
      }
    }
    this.steps = [...this.steps];
  }
}

  /**
   * Sjekker om vi er på start eller slutten av steppene
   * @returns 'start', 'end' eller undefined
   */
  getExtremes(): string | undefined {
    if (this.selectedStepIndex.value === 0) return 'start';
    if (this.selectedStepIndex.value === this.steps.length - 1) {
      return 'end';
    }
  }

  onComplete(): void {
    this.dispatchEvent(new CustomEvent('complete', { bubbles: true }));
  }

  renderBackButton(): TemplateResult | string {
    return this.hideStepButtons ? '' : html`
        <nve-button
          .disabled=${this.getExtremes() === 'start'}
          size="medium"
          variant="primary"
          @click=${this.prevStep}>
          <nve-icon slot="prefix" name="navigate_before" ></nve-icon>
          Forrige
        </nve-button>
    `;
  }

  isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }
  
  renderForwardButton(): TemplateResult | string {
    return this.hideStepButtons ? '' : html`
        <nve-button
          .disabled=${this.getExtremes() === 'end' && this.optionalEndButton === ''}
          size="medium"
          variant="primary"
          @click=${this.getExtremes() === 'end' && this.optionalEndButton !== '' ? this.onComplete : this.nextStep}>
            <nve-icon slot="suffix" name="navigate_next" ></nve-icon>
              ${this.getExtremes() === 'end' && this.optionalEndButton !== '' ? this.optionalEndButton : 'Neste'}
          </nve-button>
    `;
  }
  
  renderVerticalButtons(): TemplateResult | string {
    return this.hideStepButtons ? '' : html`
      <div class="vertical-btn-container">
        ${this.renderBackButton()}
        ${this.renderForwardButton()}
      </div>
    `;
  }
  


  render(): TemplateResult {
    return html`
        <div class="stepper ${this.orientation}">
          ${this.isOrientationVertical() ? "" : this.renderBackButton()}
          <div class="steps-container ${this.orientation}">
            ${this.steps.map(
              (step, index) => html`
                <nve-step
                  @clicked=${this.selectStep}
                  .title=${step.title}
                  .description=${step.description}
                  .state=${step.state}
                  .selectedStepIndex=${this.selectedStepIndex.value}
                  .isSelected=${step.isSelected}
                  .isLast=${index === this.steps.length - 1}
                  .index=${index}
                  .spaceBetweenSteps=${this.spaceBetweenSteps}
                  .readyForEntrance=${step.readyForEntrance}
                  .orientation=${this.orientation}
                  .disableClick=${this.disableStepClick}
                >
                </nve-step>
              `
            )}
          </div>
          ${this.isOrientationVertical() ? "" : this.renderForwardButton()}
          ${this.isOrientationVertical() ? this.renderVerticalButtons() : ""}
        </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stepper': NveStepper;
  }
}
