import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './nve-step.styles';

/** Enum for å representere tilstanden til et steg */
export enum StepState {
  NotStarted,
  Started,
  Done,
  Error,
}

/** Interface for å definere egenskapene til et steg */
export interface StepProps {
  title: string;
  description?: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance: boolean;
  disableClick?: boolean;
  orientation?: string;
}

/** Komponent for et enkelt steg i en stepper */
@customElement('nve-step')
export default class NveStep extends LitElement {
  /** Tittel på steget */
  @property({ reflect: true })
  title: string = '';

  /** Avstand mellom stegene */
  @property({ type: Number })
  spaceBetweenSteps = 200;

  /** Indeks for steget */
  @property({ type: Number })
  index = 0;

  /** Beskrivelse av steget */
  @property({ type: String })
  description: string = '';

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

  /** Deaktiverer muligheten til å klikke på steget for å velge det */
  @property({ type: Boolean })
  disableClick: boolean = false;

  /** Retningen stegene skal gå i: horisontal eller vertikal */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

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

  /** Sjekker om orienteringen er vertikal */
  isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }

  /**
   * Returnerer ikonet for den gitte stegetilstanden
   * @param state - Stegets tilstand
   */
  iconForState(state: StepState): string {
    let icon = '';
    switch (state) {
      case StepState.NotStarted:
        icon = 'circle';
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

  /**
   * Returnerer teksten for den gitte stegetilstanden
   * @param state - Stegets tilstand
   */
  getStateText(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'Ikke påbegynt';
      case StepState.Started:
        return 'Aktiv';
      case StepState.Done:
        return 'Fullført';
      case StepState.Error:
        return 'Feil';
      default:
        return 'Ikke påbegynt';
    }
  }

  /**
   * Returnerer CSS-klassen for fargen til den gitte stegetilstanden
   * @param state - Stegets tilstand
   */
  getStateColorClass(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'state-not-started-color';
      case StepState.Started:
        return 'state-started-color';
      case StepState.Done:
        return 'state-done-color';
      case StepState.Error:
        return 'state-error-color';
      default:
        return 'state-not-started-color';
    }
  }

  /**
   * Returnerer CSS-klassen for tittelen til den gitte stegetilstanden
   * @param state - Stegets tilstand
   */
  getTitleClass(state: StepState): string {
    switch (state) {
      case StepState.NotStarted:
        return 'state-not-started-color';
      case StepState.Error:
        return 'state-error-color';
      default:
        return '';
    }
  }

  /**
   * Returnerer CSS-klassen for ikonet til den gitte stegetilstanden
   * @param state - Stegets tilstand
   */
  getIconClass(state: StepState): string {
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

  /** Returnerer CSS-klassen for om steget er klikkbart */
  getIsClickableClass(): string {
    return this.disableClick ? 'disable-click' : 'clickable';
  }

  /** Returnerer CSS-klassen for fargen til divideren */
  getDividerColorClass(): string {
    return this.index < this.selectedStepIndex ? 'divider-reached-color' : 'divider-not-reached-color';
  }

  /** Håndterer klikk på steget */
  onClick(): void {
    if (!this.disableClick) {
      this.dispatchEvent(new CustomEvent('clicked', { detail: { index: this.index } }));
    }
  }

  /** Brukes for beregning av riktig høyde før divider. Description elementet har padding, så høyden før divider var for kort, så bruk denne funksjonen for regner ut riktig høyde. */
  updateVerticalDividerHeight(): void {
    const TRIP_ORIGIN_ICON_HEIGHT = 24; 
    const descriptionHeight = this.descriptionElement.offsetHeight + TRIP_ORIGIN_ICON_HEIGHT;
    const dividerElement = this.shadowRoot!.querySelector('.vertical-divider-container .divider-vertical') as HTMLElement;
    if (dividerElement) {
      dividerElement.style.height = `${descriptionHeight}px`;
    }
  }

  /** Render divideren mellom stegene */
  renderDivider(): TemplateResult | string {
    const dividerClass = this.isOrientationVertical() ? 'divider-vertical' : 'divider-horizontal';
    return this.isLast
      ? ''
      : html`
          <div class="vertical-divider-container">
          <div
          style="${this.isOrientationVertical() ? `height:${this.spaceBetweenSteps}px` : `min-width:${this.spaceBetweenSteps}px`}"
          class="${dividerClass} ${this.getDividerColorClass()}"
        ></div>
        </div>`;
  }

  /** Render beskrivelsen av steget */
  renderDescription(): TemplateResult | string {
    return this.description ? html`<div class="step-description ${this.orientation === 'vertical' ? 'step-description-max-width-vertical' : 'step-description-max-width-horizontal'}">${this.description}</div>` : '';
  }

  /** Render vertikalt steg */
  renderVerticalStep(): TemplateResult {
    return html`
      <div class="vertical-container">
        <div class="step-figure-vertical">
          <div
            @click="${this.onClick}"
            class="${this.getIsClickableClass()} ${this.getIconClass(this.state)}"
          >
            <nve-icon slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
          </div>
          ${this.renderDivider()}
        </div>
        <div class="text-container-vertical">
          <div class="step-title step-title-vertical ${this.getTitleClass(this.state)}">${this.title}</div>
          <div class="step-state ${this.getStateColorClass(this.state)}">
            ${this.getStateText(this.state)}
          </div>
          <div>       
          ${this.renderDescription()}
          </div>
        </div>
      </div>
    `;
  }

  /** Render metoden for komponenten */
  render(): TemplateResult {
    return this.isOrientationVertical() ? this.renderVerticalStep() : html`
        <div class="step-figure">
          <span
            @click="${this.onClick}"
            class="${this.getIsClickableClass()} ${this.getIconClass(this.state)}"
          >
            <nve-icon  slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
          </span>
          ${this.renderDivider()}
        </div>
        <div class="${this.isLast ? "" : "text-container"}">
          <div class="step-title ${this.getTitleClass(this.state)}">${this.title}</div>
          <div class="step-state ${this.getStateColorClass(this.state)}">
            ${this.getStateText(this.state)}
          </div>       
          ${this.renderDescription()}
        </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-step': NveStep;
  }
}
