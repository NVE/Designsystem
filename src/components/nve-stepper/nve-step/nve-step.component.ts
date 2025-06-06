import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './nve-step.styles';

/** Enum for å representere tilstanden til et steg */
export enum StepState {
  NotStarted,
  Started,
  Active,
  Done,
  Error,
}

/** Interface for å definere egenskapene til et steg */
export interface StepProps {
  label: string;
  description?: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance: boolean;
  orientation?: string;
  hideStateText?: boolean;
  hideDescriptions?: boolean;
}

/** Komponent for et enkelt steg i en stepper */
@customElement('nve-step')
export default class NveStep extends LitElement {
  /** Tittel på steget */
  @property({ reflect: true })
  label: string = '';

  /** Indeks for steget */
  @property({ type: Number })
  index = 0;

  /** Beskrivelse av steget */
  @property({ type: String })
  description?: string;

  /**
   * Stegets tilstand: Ikke startet, påbegynt, fullført eller feilet
   * @type {StepState}
   */
  @property({ type: Number })
  state: StepState = StepState.NotStarted;

  /** Indeks for det valgte steget */
  @property({ type: Number })
  selectedStepIndex: number = 0;

  /** Angir om steget er valgt */
  @property({ type: Boolean, reflect: true })
  isSelected: boolean = false;

  /** Angir om steget er det siste i rekken */
  @property({ type: Boolean })
  isLast: boolean = false;

  /** Angir om det er tillatt å gå inn i steget */
  @property({ type: Boolean })
  entranceAllowed: boolean = false;

  /** Retningen stegene skal gå i: horisontal eller vertikal */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Angir om stateText skal skjules */
  @property({ type: Boolean })
  hideStateText: boolean = false;

  /** Angir om beskrivelser skal skjules */
  @property({ type: Boolean })
  hideDescriptions: boolean = false;

  /** Brukes for å justere høyden for den vertikale skilleveggen blir så høy som nær Step har en description. */
  @query('.step-description')
  descriptionElement!: HTMLElement;

  /** Metode som kjøres første gang komponenten er lagt til i DOM */
  firstUpdated(): void {
    this.style.setProperty('--flex-grow', this.isLast ? '0' : '1');
  }

  /** Metode som kjøres hver gang komponentens oppdateres */
  updated(): void {
    if (this.isOrientationVertical()) {
      this.updateVerticalDividerHeight();
    }
    this.style.setProperty('line-color', this.isLast ? '0' : '1');
  }

  /** Definerer stilene som brukes av komponenten */
  static styles: CSSResultArray = [styles];

  private isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }

  private iconForState(state: StepState): string {
    let icon = '';
    switch (state) {
      case StepState.NotStarted:
        icon = 'circle';
        break;
      case StepState.Active:
        icon = 'radio_button_checked';
        break;

      case StepState.Started:
        icon = 'trip_origin';
        break;
      case StepState.Done:
        icon = 'check_circle';
        break;
      case StepState.Error:
        icon = 'error';
        break;
      default:
        icon = 'check_circle';
        break;
    }
    return icon;
  }

  private getStateText(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'Ikke påbegynt';
      case StepState.Active:
        return 'Aktiv';
      case StepState.Started:
        return 'Påbegynt';
      case StepState.Done:
        return 'Fullført';
      case StepState.Error:
        return 'Feil';
      default:
        return 'Ikke påbegynt';
    }
  }

  private getStateColorClass(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'state-not-started-color';
      case StepState.Active:
        return 'state-started-color';
      case StepState.Done:
        return 'state-done-color';
      case StepState.Error:
        return 'state-error-color';
      default:
        return 'state-not-started-color';
    }
  }

  private getLabelClass(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'state-not-started-color';
      case StepState.Error:
        return 'state-error-color';
      default:
        return '';
    }
  }

  private getIconClass(state: StepState): string {
    switch (state) {
      case StepState.Started:
        return '';
      case StepState.NotStarted:
        return 'state-not-started-icon-color filled-icon';
      case StepState.Error:
        return 'state-error-color filled-icon';
      default:
        return 'filled-icon';
    }
  }

  private getDividerColorClass(): string {
    return this.index < this.selectedStepIndex ? 'divider-reached-color' : 'divider-not-reached-color';
  }

  private renderDivider(): TemplateResult | string {
    const dividerClass = this.isOrientationVertical() ? 'divider-vertical' : 'divider-horizontal';
    return this.isLast
      ? ''
      : html` <div class="vertical-divider-container">
          <div class="${dividerClass} ${this.getDividerColorClass()}"></div>
        </div>`;
  }

  private renderDescription(): TemplateResult | string {
    if (!this.isDescriptionValid(this.description)) {
      // Return an empty div with min-height to maintain spacing when no description
      return html`<div
        class="step-description empty-description ${this.orientation === 'vertical'
          ? 'step-description-max-width-vertical'
          : 'step-description-max-width-horizontal'}"
      ></div>`;
    }
    return html`<div
      class="step-description ${this.orientation === 'vertical'
        ? 'step-description-max-width-vertical'
        : 'step-description-max-width-horizontal'}"
    >
      ${this.description}
    </div>`;
  }

  private isDescriptionValid(description: string | undefined): boolean {
    // Simplify this expression for clarity
    return !!description && description?.trim().length > 0 === true;
  }

  /** Brukes for beregning av riktig høyde før divider. Description elementet har padding, så høyden før divider var for kort, så bruk denne funksjonen for regner ut riktig høyde. */
  private updateVerticalDividerHeight(): void {
    const TRIP_ORIGIN_ICON_HEIGHT = 24;
    const DEFAULT_HEIGHT = TRIP_ORIGIN_ICON_HEIGHT + 10; // Default height if no description

    let descriptionHeight = DEFAULT_HEIGHT;
    // Only then try to access the element in the DOM
    if (this.descriptionElement) {
      descriptionHeight = this.descriptionElement.offsetHeight + TRIP_ORIGIN_ICON_HEIGHT;
    }

    const dividerElement = this.shadowRoot!.querySelector(
      '.vertical-divider-container .divider-vertical'
    ) as HTMLElement;
    if (dividerElement) {
      dividerElement.style.height = `${descriptionHeight}px`;
    }
  }

  private renderVerticalStep(): TemplateResult {
    return html`
      <div class="vertical-container">
        <div class="step-figure-vertical">
          <div class=" ${this.getIconClass(this.state)}">
            <nve-icon slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
          </div>
          ${this.renderDivider()}
        </div>
        <div class="text-container-vertical">
          <div class="step-label step-label-vertical ${this.getLabelClass(this.state)}">${this.label}</div>
          <div class="step-state ${this.getStateColorClass(this.state)}">
            ${this.hideStateText ? '' : this.getStateText(this.state)}
          </div>
          <div>${this.hideDescriptions ? '' : this.renderDescription()}</div>
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    return this.isOrientationVertical()
      ? this.renderVerticalStep()
      : html`
          <div class="step-figure">
            <span class=" ${this.getIconClass(this.state)}">
              <nve-icon slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
            </span>
            ${this.renderDivider()}
          </div>
          <div class="${this.isLast ? '' : 'text-container'}">
            <div class="step-label ${this.getLabelClass(this.state)}">${this.label}</div>
            <div class="step-state ${this.getStateColorClass(this.state)}">
              ${this.hideStateText ? '' : this.getStateText(this.state)}
            </div>
            ${this.hideDescriptions ? '' : this.renderDescription()}
          </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-step': NveStep;
  }
}
