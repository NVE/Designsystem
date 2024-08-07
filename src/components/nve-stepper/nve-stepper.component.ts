import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StepProps, StepState } from './nve-step/nve-step.component';
import styles from './nve-stepper.styles';
import './nve-stepper-mobile.component';

/** Interface for stepper-komponenten */
export interface INveStepper {
  /** Går til neste steg */
  nextStep?(): void;
  /** Går til forrige steg */
  prevStep?(): void;
  /** Velger et spesifikt steg basert på event */
  selectStep?(event: CustomEvent): void;
  /** Fullfører alle stegene */
  finishSteps(): void;
  /** Henter indeksen for gjeldende steg */
  getCurrentIndex?(): number;
  /** Tvinger en re-render av komponenten */
  reRender?(): void;

  /** Hvilken retning Steps skal gå. */
  orientation?: 'horizontal' | 'vertical';

  /** Indeks for valgt steg, gir mulighet for å styre hvilket steg som er valgt. */
  selectedStepIndex?: { value: number };

  /** Avstand mellom Steps */
  spaceBetweenSteps?: number;

  /** Mulighet om å endre teksten på knapp ved siste steg. */
  optionalEndButton?: string;

  /** Steps som skal vises, se StepProps interface for data som skal sendes inn. */
  steps: StepProps[];

  /** Deaktiverer muligheten til å klikke på en Step komponenten slik at den blir valgt. */
  disableStepClick?: boolean;

  /** Skjuler Neste og Forrige knappene slik at du kan implementere dine egne Neste og Forrige knappene. */
  hideStepButtons?: boolean;

  /** Skjuler Neste og Forrige knappene på mobilversjonen. */
  hideMobileStepButtons?: boolean;

  /** Viser mobilversjonen av Stepper. */
  displayMobileVersion?: boolean;
}

/** Funksjon for å sjekke om enheten er en mobil enhet */
function isMobileDevice(): boolean {
  return /Mobi|Android/i.test(navigator.userAgent);
}
/**
 * En stepper-komponent brukes for å bryte ned en kompleks prosess i flere mindre, håndterbare trinn.
 * Hver trinn representerer en del av prosessen og brukeren kan navigere frem og tilbake mellom trinnene. 
 * Dette gir en strukturert og intuitiv måte å fullføre flertrinnsoppgaver på, som for eksempel skjemaer eller registreringsprosesser. 
 * Steppers kan være enten horisontale eller vertikale, og kan tilpasses med valideringslogikk og egne knapper.
 */
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

  /** Metode som kjøres første gang komponenten er lagt til i DOM */
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

  /** Metode for å gå til neste steg */
  nextStep(): void {
    if (this.selectedStepIndex.value < this.steps.length - 1) {
      this.setStep(this.selectedStepIndex.value + 1);
    }
  }

  /** Metode for å gå til forrige steg */
  prevStep(): void {
    if (this.selectedStepIndex.value > 0) {
      this.setStep(this.selectedStepIndex.value - 1);
    }
  }

  /** Metode for å velge et spesifikt steg */
  selectStep(event: CustomEvent): void {
    if (event.detail.index > 0) {
      if (this.steps[event.detail.index - 1].state == StepState.NotStarted) {
        return;
      }
    }
    this.setStep(event.detail.index);
  }

  /** Metode som kjøres når alle stegene er fullført */
  finishSteps(): void {
    // Denne funksjonen kan implementeres utenfor komponenten for å definere
    // spesifikk logikk som skal utføres når stegprosessen er fullført.
    // Standard oppførsel er tom, men kan utvides der komponenten brukas av utvikleren.
  }

  /** Metode for å sette et spesifikt steg */
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

  /** Metode for å hente den gjeldende indeksen */
  getCurrentIndex(): number {
    return this.selectedStepIndex.value;
  }

  /** Metode for å sjekke om vi er på start eller slutten av Steps */
  getExtremes(): string | undefined {
    if (this.selectedStepIndex.value === 0) return 'start';
    if (this.selectedStepIndex.value === this.steps.length - 1) {
      return 'end';
    }
  }

  /** Metode for å håndtere neste steg på mobil */
  handleMobileNextStep(): void {
    if (this.selectedStepIndex.value < this.steps.length - 1) {
      this.nextStep();
    } else {
      this.finishSteps();
    }
  }

  /** Metode for å håndtere forrige steg på mobil */
  handleMobilePrevStep(): void {
    this.prevStep();
  }

  /** Metode for å render tilbakeknappen */
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

  /** Metode for å sjekke om orienteringen er vertikal */
  isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }

  /** Metode for å render fremoverknappen */
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

  /** Metode for å render knapper i vertikal orientering */
  renderVerticalButtons(): TemplateResult | string {
    return this.hideStepButtons ? '' : html`
      <div class="vertical-btn-container">
        ${this.renderBackButton()}
        ${this.renderForwardButton()}
      </div>
    `;
  }

  /** Hoved render-metode */
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
        <div class="steps-container ${this.orientation}  ${this.hideStepButtons ? '' : 'steps-container-with-buttons'}">
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
