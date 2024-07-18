import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';
import './nve-stepper-mobile.component';

export interface INveStepper extends HTMLElement {
  nextStep(): void;
  prevStep(): void;
  selectStep(event: CustomEvent): void;
  finishSteps(): void;
  getCurrentIndex(): number;
  reRender(): void;
}

function isMobileDevice(): boolean {
  return /Mobi|Android/i.test(navigator.userAgent);
}

@customElement('nve-stepper')
export default class NveStepper extends LitElement {
  static styles: CSSResultArray = [styles];

  /** Hvilken retning Steps skal gå. */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt. */
  @property({ type: Object })
  selectedStepIndex: { value: number } = { value: 0 };

  /** Avstand mellom Steps */
  @property({ type: Number })
  spaceBetweenSteps: number = 200;

  /** Mulighet om å endre teksten på knapp ved siste steg. */
  @property({ type: String })
  optionalEndButton: string = 'Sende';

  /** Steps som skal vises, se StepProps interface for data som skal sendes inn. */
  @property({ type: Array })
  steps: StepProps[] = [];

  /** Deaktiverer muligheten til å klikke på en Step komponenten slik at den blir valgt. */
  @property({ type: Boolean })
  disableStepClick: boolean = true;

  /** Skjuler Neste og Forrige knappene slik at du kan implementere dine egne Neste og Forrige knappene. */
  @property({ type: Boolean })
  hideStepButtons: boolean = false;

  /** Skjuler Neste og Forrige knappene på mobilversjonen. */
  @property({ type: Boolean })
  hideMobileStepButtons: boolean = false;

  /** Viser mobilversjonen av Stepper. */
  @property({ type: Boolean })
  displayMobileVersion: boolean = false;

  /**
   * Ved endring av props, re-render komponenten eksternt med document.querySelector("nve-stepper")?.reRender();
   * Dette er nyttig når du vil tvinge en oppdatering av komponenten uten å endre dens interne state.
   * Ellers vil man ikke se endringene før intern state endres.
   * `requestUpdate` er en innebygd Lit funksjon som planlegger en oppdatering av komponenten.
   */
  reRender(): void {
    this.requestUpdate();
  }

  firstUpdated(): void {
    this.setStep(this.selectedStepIndex.value);
    const stepperElement = this as unknown as INveStepper;
    stepperElement.nextStep = this.nextStep.bind(this);
    stepperElement.prevStep = this.prevStep.bind(this);
    stepperElement.selectStep = this.selectStep.bind(this);
    stepperElement.finishSteps = this.finishSteps.bind(this);
    stepperElement.getCurrentIndex = this.getCurrentIndex.bind(this);
    stepperElement.reRender = this.reRender.bind(this);
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

  finishSteps(): void {
    // Denne funksjonen kan implementeres utenfor komponenten for å definere
    // spesifikk logikk som skal utføres når stegprosessen er fullført.
    // Standard oppførsel er tom, men kan utvides der komponenten brukas av utvikleren.
  }

  setStep(index: number): void {
    // Hvis det nåværende steget er mindre enn det nye steget og det nåværende steget er startet,
    // sett det nåværende steget til fullført.
    if (this.selectedStepIndex.value < index && this.steps[this.selectedStepIndex.value].state === StepState.Started) {
      this.steps[this.selectedStepIndex.value].state = StepState.Done;
    }

    // Hvis det nye steget er klart for å gå til neste,
    // oppdater den valgte stegindeksen og status for Steps.
    if (this.steps[index].readyForEntrance) {
      this.selectedStepIndex.value = index;

      // Oppdaterer status og valg for alle Steps.
      for (let i = 0; i < this.steps.length; i++) {
        this.steps[i].isSelected = i === index;
        if (i === index) {
          this.steps[i].state = StepState.Started;
        }
      }
      this.steps = [...this.steps];
    }
  }

  getCurrentIndex(): number {
    return this.selectedStepIndex.value;
  }

  
  // Sjekker om vi er på start eller slutten av Steps
  getExtremes(): string | undefined {
    if (this.selectedStepIndex.value === 0) return 'start';
    if (this.selectedStepIndex.value === this.steps.length - 1) {
      return 'end';
    }
  }

  handleMobileNextStep() {
    if (this.selectedStepIndex.value < this.steps.length - 1) {
      this.nextStep();
    } else {
      this.finishSteps();
    }
  }

  handleMobilePrevStep() {
    this.prevStep();
  }

  renderBackButton(): TemplateResult | string {
    return this.hideStepButtons ? '' : html`
      <nve-button
        .disabled=${this.getExtremes() === 'start'}
        size="medium"
        variant="primary"
        @click=${this.prevStep}
      >
        <nve-icon slot="prefix" name="navigate_before"></nve-icon>
        Forrige
      </nve-button>
    `;
  }

  isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }

  renderForwardButton(): TemplateResult | string {
    if (this.hideStepButtons) return '';
    if (this.getExtremes() === 'end') {
      return html`
        <nve-button
          size="medium"
          variant="primary"
          @click=${this.finishSteps}
        >
          <nve-icon slot="suffix" name="done"></nve-icon>
          ${this.optionalEndButton}
        </nve-button>
      `;
    }
    return html`
      <nve-button
        .disabled=${this.getExtremes() === 'end'}
        size="medium"
        variant="primary"
        @click=${this.nextStep}
      >
        <nve-icon slot="suffix" name="navigate_next"></nve-icon>
        Neste
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
    if (isMobileDevice() || this.displayMobileVersion) {
      return html`
        <nve-stepper-mobile
          .steps=${this.steps}
          .selectedStepIndex=${this.selectedStepIndex}
          .hideStepButtons=${this.hideMobileStepButtons}
          @next-step=${this.handleMobileNextStep}
          @prev-step=${this.handleMobilePrevStep}
        ></nve-stepper-mobile>
      `;
    }

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
