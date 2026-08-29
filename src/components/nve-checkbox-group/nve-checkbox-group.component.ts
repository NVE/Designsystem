import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { FormValidationComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox-group.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import fieldStyles from '@styles/formField.ts';
import NveCheckbox from '../nve-checkbox/nve-checkbox.component';
import { getLabel, labelStyles } from '../../templates/label';
import type { ValidationRule } from '@validation/validateForm';

let id = 0;

type NveCheckboxGroupChangeEvent = {
  value: string;
  action: 'select' | 'deselect';
};
/**
 * En gruppe med sjekkbokser som lar brukeren velge flere alternativer.
 *
 * @slot - Her plasseres nve-checkbox elementer som skal være en del av gruppen.
 *
 * @event change - når en sjekkboks i gruppen endres, sender ut en event med informasjon om hvilken verdi som ble endret og om den ble valgt eller fjernet.
 *
 * @csspart base - fieldset elementet som omslutter hele gruppen
 * @csspart checkbox-group - div elementet som omslutter slottet med sjekkboksene
 * @csspart help-text - p elementet som viser hjelpetekst, hvis satt
 * @csspart hint-text - p elementet som viser hint-tekst eller feilmelding, hvis satt
 * @csspart error-text - p elementet som viser feilmelding, hvis satt
 */
@customElement('nve-checkbox-group')
export default class NveCheckboxGroup extends LitElement implements FormValidationComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Om sjekkboks-gruppen er deaktivert */
  @property({ type: Boolean }) disabled = false;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises.*/
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String, reflect: true }) helpText?: string = undefined;
  /** Hint-tekst som vises under feltet */
  @property({ type: String, reflect: true }) hint?: string = undefined;
  /** Ledetekst */
  @property() label?: string = undefined;
  /** Om gruppa skal vises horisontalt eller vertikalt */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel?: string = undefined;
  /** Initialt valgte verdier */
  @property({ type: Array }) selectedValues: string[] = [];
  /** Størrelse på sjekkboksene */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip?: string = undefined;
  @property({ attribute: false }) validationRules: Array<ValidationRule> = [];
  /** Internt sporet valgte verdier. Brukes til validering, eksponeres ikke. */
  @state() _selectedValues: string[] = [];
  @state() internalValidationMessage = '';

  @queryAssignedElements({ selector: 'nve-checkbox', flatten: true })
  private checkboxes!: NveCheckbox[];
  /** @internal */
  private readonly checkboxGroupId = `checkbox-group-${++id}`;

  static styles = [styles, labelStyles, fieldStyles];

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage') || changedProperties.has('internalValidationMessage')) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.invalid = !!this.activeErrorMessage;
      });
    }
    if (changedProperties.has('disabled')) {
      this.checkboxes.forEach((checkbox) => {
        if (!checkbox.disabled) {
          checkbox.disabled = this.disabled;
        }
      });
    }
  }

  /**
   * Trigges når sjekkboksene i slottet endres (eller dukker opp første gang).
   * Oppdaterer sjekkboksene i gruppen med riktig størrelse og valgte verdier.
   */
  private handleSlotChange() {
    // sett størrelse på sjekkboksene
    if (this.size !== 'medium') {
      this.checkboxes.forEach((checkbox) => {
        checkbox.size = this.size;
      });
    }

    // når alle sjekkboksene er fullt renderert, oppdaterer vi checked attributtene basert på selectedValues property.
    requestAnimationFrame(() => {
      if (this.selectedValues?.length) {
        for (const checkbox of this.checkboxes) {
          const ch = checkbox.value !== null && this.selectedValues?.includes(checkbox.value);
          if (ch) {
            this._selectedValues.push(checkbox.value);
          }
          checkbox.checked = ch;
        }
      }
      this.removeAttribute('selectedValues');
    });
  }

  /**
   * Trigges når en sjekkboks i gruppen endres.
   * Oppdaterer selectedValues basert på hvilke sjekkbokser som er valgt.
   * @param e Eventet som trigget endringen.
   */
  private handleChange(e: Event) {
    const value = (e.target as NveCheckbox).value;
    const checked = (e.target as NveCheckbox).checked;
    const action = checked ? 'select' : 'deselect';
    if (checked) {
      this._selectedValues = [...this._selectedValues, value];
    } else {
      this._selectedValues = this._selectedValues.filter((v) => v !== value);
    }
    this.internalValidationMessage = '';
    this.dispatchEvent(
      new CustomEvent<NveCheckboxGroupChangeEvent>('change', {
        detail: { value: value, action },
        bubbles: true,
        composed: true,
      })
    );
  }

  validate() {
    for (const rule of this.validationRules) {
      const result = rule(this._selectedValues);

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

  render() {
    const helpTextId = `${this.checkboxGroupId}-helptext`;
    const hintTextId = `${this.checkboxGroupId}-hinttext`;
    const errorTextId = `${this.checkboxGroupId}-errortext`;

    const describedBy = [
      this.helpText ? helpTextId : null,
      this.activeErrorMessage ? errorTextId : null,
      this.hint ? hintTextId : null,
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <fieldset
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          field: true,
          'field--error': !!this.activeErrorMessage,
        })}
        @change=${this.handleChange}
        aria-invalid=${ifDefined(this.activeErrorMessage ? 'true' : undefined)}
        aria-describedby=${ifDefined(describedBy)}
        part="base"
      >
        <!-- Ledetekst -->
        ${getLabel(
          this.checkboxGroupId,
          this.label,
          this.required,
          this.requiredLabel,
          html`<slot name="label-toggletip"></slot>`,
          undefined,
          true
        )}
        <!-- Hjelpetekst -->
        ${
          this.helpText
            ? html`<p part="help-text" class="field__help-text" id=${helpTextId} part="help-text">${this.helpText}</p>`
            : nothing
        }
        <div
          part="checkbox-group"
          class=${classMap({
            'checkbox-group': true,
            [`checkbox-group--${this.orientation}`]: true,
          })}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <!-- Hint-tekst og feilmelding -->
        <!-- Hint-tekst og feilmelding -->
        ${
          !this.activeErrorMessage && this.hint
            ? html`<p part="hint-text" class="field__hint-text" id=${hintTextId}>${this.hint}</p>`
            : nothing
        }

        <p aria-live="assertive" aria-atomic="true" part="error-text" class="field__hint-text" id=${errorTextId}>
          ${this.activeErrorMessage ?? ''}
        </p>
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group': NveCheckboxGroup;
  }
}
