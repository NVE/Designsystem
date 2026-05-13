import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Lar brukeren toggle mellom to tilstander, valgt og ikke valgt. Sjekkbokser kan brukes alene eller i grupper.
 *
 * @event change Når sjekkboksen blir valgt eller fravalgt. Inneholder den valgte verdien.
 *
 * @csspart base wraper rundt sjekkboksen.
 */
@customElement('nve-checkbox')
export default class NveCheckbox extends LitElement implements INveComponent {
  /* Siden sjekkboks kan brukes alene ulik radio - size, checked, indeterminate skal brukes som property, ikke state */
  @property({ type: String }) testId: string | undefined = undefined;
  /** Størrelse på sjekkboks */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Ledetekst for sjekkboksen */
  @property({ type: String }) label = '';
  /** Om sjekkboksen er ugyldig */
  @property({ type: Boolean, reflect: true }) invalid = false;
  /** Om sjekkboksen er i en indeterminert tilstand */
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  /** Om sjekkboksen er deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om sjekkboksen er valgt */
  @property({ type: Boolean, reflect: true }) checked = false;
  /** Verdien til sjekkboksen. Når valgt, vil sjekkboksgruppen motta denne verdien. */
  @property({ type: String, reflect: true }) value: string = '';
  /** Om sjekkboksen skal vises som en bryter. Endrer ikke styling kun funksjonalitet */
  @property({ type: Boolean, reflect: true }) switch = false;
  @query('input') input!: HTMLInputElement;
  static styles = [styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.label) {
      console.warn(
        'nve-checkbox-demo: label is not set. It is recommended to set a label for each checkbox component for better accessibility.'
      );
    }
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('indeterminate') && this.input) {
      this.input.indeterminate = this.indeterminate;
    }
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  /**
   * Gir fokus til sjekkboksen.
   * @param options Valgfri fokusinnstillinger.
   */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  //TODO write that blur and focusout are working on input only, so the label is excluded and will triggered those events
  // despite still being insite the component solution could be to add even listeners on the host like   this.addEventListener('focusin', this.onFocusIn, true);
  //this.addEventListener('focusout', this.onFocusOut, true);
  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          checkbox: true,
          [`checkbox--${this.size}`]: true,
          'checkbox--disabled': this.disabled,
          'checkbox--invalid': this.invalid,
        })}
      >
        <!-- Input vises ikke, vi lager en sjekkboks med ::before via css -->
        <input
          type="checkbox"
          .checked=${this.checked}
          value=${ifDefined(this.value)}
          name="option"
          ?switch=${this.switch}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <svg class="checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" fill="none">
          <path
            d="M3.16875 7.3125L0 4.125L0.9375 3.1875L3.16875 5.4L8.5875 0L9.525 0.95625L3.16875 7.3125Z"
            fill="white"
          />
        </svg>
        <svg class="checkbox__indeterminate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 2" fill="none">
          <path d="M0 1.2V0H8V1.2H0Z" fill="white" />
        </svg>

        ${ifDefined(this.label) ? html`${this.label}` : html`<slot></slot>`}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
