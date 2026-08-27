import { html, LitElement, PropertyValues, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { FormValidationComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox.styles';
import fieldStyles from '@styles/formField.ts';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ValidationRule } from '@validation/validateForm';

let id = 0;

/**
 * Lar brukeren toggle mellom to tilstander, valgt og ikke valgt. Sjekkbokser kan brukes alene eller i grupper.
 *
 * @event change Når sjekkboksen blir valgt eller fravalgt. Inneholder den valgte verdien.
 *
 * @csspart base wrapper rundt sjekkboksen.
 */
@customElement('nve-checkbox')
export default class NveCheckbox extends LitElement implements FormValidationComponent {
  /* Siden sjekkboks kan brukes alene ulik radio - size, checked, indeterminate skal brukes som property, ikke state */
  @property({ type: String }) testId: string | undefined = undefined;
  /** Størrelse på sjekkboks */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Om sjekkboksen er i en indeterminert tilstand */
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  /** Om sjekkboksen er deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om sjekkboksen er valgt */
  @property({ type: Boolean, reflect: true }) checked = false;
  /** Verdien til sjekkboksen. Når valgt, vil sjekkboksgruppen motta denne verdien. */
  @property({ type: String, reflect: true }) value: string = '';
  @query('input') input!: HTMLInputElement;
  /** Om sjekkboksen er ugyldig. Valgt å bruke bare internt. Enkle sjekkbokser skal ikke vise ugyldig tilstand via properties. */
  @state() invalid = false;
  static styles = [styles, fieldStyles];

  @property({ attribute: false }) validationRules: Array<ValidationRule> = [];
  @state() internalValidationMessage = '';
  @property({ type: String, reflect: true }) errorMessage = '';

  private readonly checkboxId = `checkbox-${++id}`;

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

  protected firstUpdated(_changedProperties: PropertyValues): void {
    if (!this.value) {
      console.warn('Checkbox is missing a value. Please provide it for the checkbox to function properly.');
    }
  }

  /**
   * Gir fokus til sjekkboksen.
   * @param options Valgfri fokusinnstillinger.
   */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  validate() {
    for (const rule of this.validationRules) {
      const result = rule(this.checked);
      if (result !== true) {
        if (typeof result !== 'string' || result.trim() === '') {
          console.warn(
            'Validation rule failed without returning an error message. Ensure you added error message to the rule.'
          );
        }
        this.internalValidationMessage =
          typeof result === 'string' && result.trim() !== '' ? result : 'The value is invalid.';
        return false;
      }
    }

    this.internalValidationMessage = '';
    return true;
  }
  private get activeErrorMessage() {
    return this.errorMessage || this.internalValidationMessage;
  }

  // sjekkboks kan bli brukt alene og når brukt i en gruppe, den skal ikke annonsere posisjonen sin i en liste (f.eks 1 av 3) som radio og derfor
  // kan det enklest gjøres med input element inn i label element.
  render() {
    const errorTextId = `${this.checkboxId}-errortext`;
    return html`
      <div
        part="wrapper"
        class=${classMap({ field: true, 'field--error': !!this.activeErrorMessage })}
        test-id=${ifDefined(this.testId)}
      >
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
            ?disabled=${this.disabled}
            aria-invalid=${ifDefined(this.activeErrorMessage ? 'true' : undefined)}
            aria-errormessage=${ifDefined(this.activeErrorMessage ? errorTextId : undefined)}
            aria-describedby=${ifDefined(this.activeErrorMessage ? errorTextId : undefined)}
            aria-checked=${this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
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

          <slot></slot>
        </label>
        <!-- feilmelding -->
        ${this.activeErrorMessage
          ? html` <p
              aria-live="assertive"
              aria-atomic="true"
              part="error-text"
              class="field__hint-text"
              id=${errorTextId}
            >
              ${this.activeErrorMessage}
            </p>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
