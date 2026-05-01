import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio.styles';
import { classMap } from 'lit/directives/class-map.js';
import '../nve-label/nve-label.component';
import { ifDefined } from 'lit/directives/if-defined.js';
@customElement('nve-radio')
export default class NveRadio extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** The radio's value. it's used to identify which radio button in a group is selected. */
  @property({ type: String }) value: string | null = null;
  /** Størrelse på radio-knappen */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Om radio-knappen er deaktivert */
  @property({ type: Boolean }) disabled = false;
  /** Navnet på radio-knappen, brukes for å gruppere radio-knapper */
  @property() name = '';
  /** ID på radio-knappen */
  @property({ type: String }) id = '';
  /** Om radio-knappen er ugyldig */
  @property({ type: Boolean }) invalid = false;
  @query('input') input!: HTMLInputElement;
  /** Om radio-knappen er valgt. Brukes i inputfeltet for å synkronisere elementets property */
  @state() checked = false;

  static styles = [styles];

  constructor() {
    super();
    this.addEventListener('click', this.handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  /**
   * Når host klikkes skal vi simulere et klikk på input-elementet for å få riktig fokus og checked state.
   * Dette er fordi input-elementet er skjult for styling-formål, og vi vil at hele radio-knappen skal være klikkbar,
   * ikke bare inputfeltet.
   */
  private handleHostClick() {
    if (!this.disabled) {
      this.input?.click();
    }
  }

  /**
   * Håndterer endring av inputfeltet. Når input endres, oppdaterer vi checked state på radio-knappen.
   * @param e Eventet som trigget endringen
   */
  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
  }

  /**
   * Fokus radio-knappen.
   * @param options
   */
  focus(options?: FocusOptions) {
    super.focus(options);
  }

  render() {
    return html`
      <label
        test-id=${ifDefined(this.testId)}
        id=${ifDefined(this.id)}
        class=${classMap({
          radio: true,
          [`radio--${this.size}`]: true,
          'radio--disabled': this.disabled,
          'radio--invalid': this.invalid,
        })}
      >
        <input
          class="radio__input"
          type="radio"
          .checked=${this.checked}
          value=${this.value}
          name=${this.name}
          ?disabled=${this.disabled}
          tabindex="-1"
          @change=${this.handleChange}
        />
        <div class="radio__circle"></div>
        <slot></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio': NveRadio;
  }
}
