import { CSSResultArray, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-step.styles';

export enum StepState {
  NotStarted,
  Started,
  Done,
  Error,
}

export interface StepProps {
  title: string;
  description?: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance: boolean;
  disableClick?: boolean;
  orientation?: string;
}

@customElement('nve-step')
export default class NveStep extends LitElement {
  @property({ reflect: true })
  title: string = '';

  /**
   * Avstand mellom steppene
   */
  @property({ type: Number })
  spaceBetweenSteps = 200;

  /**
   * Stegets index
   */
  @property({ type: Number })
  index = 0;

  @property({ type: String })
  description: string = '';

  /**
   * Er steget besøkt, ikke besøkt, fullført eller feilet
   * @type {StepState}
   */
  @property({ type: Number })
  state: StepState = StepState.NotStarted;

  @property({ type: Number })
  selectedStepIndex: number = 0;

  /**
   * Er steget valgt
   */
  @property({ type: Boolean, reflect: true })
  isSelected: boolean = false;

  /**
   * Er steget det siste i rekken
   */
  @property({ type: Boolean })
  isLast: boolean = false;

  /**
   * Er det lov å gå inn i steget, alle krav er oppfylt
   */
  @property({ type: Boolean })
  entranceAllowed: boolean = false;

  /**
   * Deaktiverer muligheten til å klikke på komponenten slik at den blir valgt.
   */
  @property({ type: Boolean })
  disableClick: boolean = false;

    /**
   * Hvilken retning steppene skal gå. 
   */
  @property()
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  

  firstUpdated(): void {
    this.style.setProperty('--flex-grow', this.isLast ? '0' : '1');
  }

  updated(): void {
    this.style.setProperty('line-color', this.isLast ? '0' : '1');
  }

  static styles: CSSResultArray = [styles];

  isOrientationVertical(): boolean {
    return this.orientation === 'vertical';
  }


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

  getIsClickableClass(): string {
    return this.disableClick ? 'disable-click' : 'clickable';
  }

  getDividerColorClass(): string {
    return this.index < this.selectedStepIndex ? 'divider-reached-color' : 'divider-not-reached-color';
  }

  onClick(): void {
    if (!this.disableClick) {
      this.dispatchEvent(new CustomEvent('clicked', { detail: { index: this.index } }));
    }
  }

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

  renderDescription(): TemplateResult | string {
    return this.description ? html`<div class="step-description">${this.description}</div>` : '';
  }


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
          ${this.renderDescription()}
        </div>
      </div>
    `;
  }

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
