import { LitElement, html } from 'lit';
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
  description: string;
  state: StepState;
  isSelected: boolean;
  readyForEntrance: boolean;
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
   * Hvilken ikonbibliotek som skal brukes, Sharp eller Outlined.
   */
  @property({ type: String })
  iconLibrary: 'Outlined' | 'Sharp' = 'Outlined';
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
  entraceAllowed: boolean = false;

  //TODO
  // @property ({type :String })
  // orientation: 'horizontal' | 'vertical' = 'horizontal';

  static styles = [styles];

  iconForState(state: StepState): string {
    let icon = '';
    switch (state) {
      case StepState.NotStarted:
        icon = `counter_${this.index + 1}`;
        break;
      case StepState.Started:
        if (this.isSelected) icon = `counter_${this.index + 1}`;
        else icon = 'error';
        break;
      case StepState.Done:
        icon = 'check_circle';
        break;
      case StepState.Error:
        icon = 'error';
        break;
      default:
        icon = `help_${this.iconLibrary}`;
        break;
    }
    return icon;
  }

  onClick() {
    this.dispatchEvent(new CustomEvent('clicked', { detail: { index: this.index } }));
  }

  render() {
    return html`
      <div class="step">
        <div class="step-figure">
          <span
            @click="${this.onClick}"
            class="${this.isSelected ? 'selected' : ''} ${this.state == StepState.Error ? 'hasError' : ''} ${this
              .state > 0
              ? ''
              : 'notStarted'}"
          >
            <nve-icon library=${this.iconLibrary} slot="suffix" name="${this.iconForState(this.state)}"></nve-icon>
          </span>

          ${this.isLast
            ? ''
            : html`<div
                style="width:${this.spaceBetweenSteps}px"
                class="divider-horizontal ${this.index < this.selectedStepIndex ? 'selectedInterval' : ''} ${this
                  .state > 0
                  ? ''
                  : 'notStarted'}"
              ></div>`}
        </div>
        <div class="step-title">${this.title}</div>
        <div class="step-description">${this.description}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-step': NveStep;
  }
}
