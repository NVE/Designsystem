import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { FormValidationComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-group.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../nve-tooltip/nve-tooltip.component';
import formField from '@styles/formField';
import NveRadio from '../nve-radio/nve-radio.component';
import { getLabel, labelStyles } from '../../templates/label';
import type { ValidationRule } from '@validation/validateForm';
import { IRadioControl } from '@interfaces/radiocontrol';
import { handleRadioControlKeyDown, selectRadioControl, selectRadioControlWithFocus } from '@shared/radiocontrol';

let id = 0; // for å generere unike id-er. Brukes for å koble label og hint tekster til riktig fieldset via aria-describedby.
/**
 * En gruppe av nve-radio-knapper. Kun én radioknapp i en gitt gruppe kan være valgt om gangen.
 *
 * @event change når en radio-knapp i gruppen blir valgt. Inneholder den valgte verdien.
 *
 * @csspart base Hovedcontaineren for radio-gruppen, som er en fieldset.
 * @csspart help-text Teksten som vises under ledeteksten for å gi ekstra informasjon.
 * @csspart hint-text Teksten som vises under radio-knappene for å gi ekstra informasjon eller feilmeldinger.
 * @csspart error-text Teksten som vises under radio-knappene for å vise feilmeldinger.
 */
@customElement('nve-radio-group')
export default class NveRadioGroup extends LitElement implements FormValidationComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Om radio-gruppen er deaktivert */
  @property({ type: Boolean }) disabled = false;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String, reflect: true }) helpText?: string = undefined;
  /** Hint-tekst som vises under feltet */
  @property({ type: String, reflect: true }) hint?: string = undefined;
  /** Ledetekst for radio-gruppen */
  @property({ type: String }) label: string | undefined = undefined;
  /** Retning for gruppen av radioknapper */
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean }) required = false;
  /** Ekstra tekst som vises for obligatoriske felt. * er en standard og vises alltid */
  @property({ type: String }) requiredLabel?: string = undefined;
  /** Størrelse på radio-knappene */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for ledetekst */
  @property({ type: String }) tooltip = '';
  /** Verdi for den valgte radio-knappen */
  @property({ type: String, reflect: true }) value?: string = undefined;
  @property({ attribute: false }) validationRules: Array<ValidationRule> = [];
  @queryAssignedElements({ selector: 'nve-radio' })
  private radios!: NveRadio[];
  @state() internalValidationMessage = '';

  static styles = [styles, labelStyles, formField];

  private radioGroupName = `nve-radio-group-${id++}`;

  /**
   * Håndterer endring av valgt radio-knapp.
   * @param e Event som utløses når en radio-knapp endres.
   */
  private handleChange(e: Event) {
    const radioControl = e.target as IRadioControl;

    if (radioControl.tagName.toLowerCase() !== 'nve-radio' || radioControl.disabled) {
      return;
    }

    selectRadioControlWithFocus(radioControl, this.radios);
    this.value = radioControl.value;
    this.internalValidationMessage = '';

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: radioControl.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Håndterer tastetrykk for navigasjon mellom radio-knapper.
   * @param e Event som utløses når en tast trykkes ned.
   */
  private handleKeyDown(e: KeyboardEvent) {
    const selected = handleRadioControlKeyDown(e, this.radios, this.disabled);

    if (!selected) return;

    this.value = selected.value;
    this.internalValidationMessage = '';

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSlotChange() {
    // Sett interne attributter på radio-knappene
    const checkedRadio = this.radios.find((radio) => radio.checked);
    this.radios.forEach((radio, index) => {
      if (!this.disabled) {
        // Sett tabIndex basert på hvilken radio-knapp som er valgt, 0 er standard
        radio.tabIndex = radio === checkedRadio || (!checkedRadio && radio === this.radios[0]) ? 0 : -1;
      }
      // Sett posisjon
      radio.pos = index + 1;
      // Sett gruppestørrelse
      radio.setsize = this.radios.length;
      if (this.size !== 'medium') {
        // sett størrelse på radio-knappene
        radio.size = this.size;
      }
      if (this.value && radio.value === this.value) {
        selectRadioControl(radio, this.radios);
      }
    });
  }

  firstUpdated() {
    if (!this.label) {
      console.warn(
        'nve-radio-group: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage') || changedProperties.has('internalValidationMessage')) {
      this.radios.forEach((r) => (r.invalid = !!this.activeErrorMessage));
    }
    if (changedProperties.has('disabled')) {
      this.radios.forEach((radio) => {
        radio.disabled = this.disabled;
      });
    }
  }

  validate() {
    for (const rule of this.validationRules) {
      const result = rule(this.value);

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
    const helpTextId = `${this.radioGroupName}-helptext`;
    const hintTextId = `${this.radioGroupName}-hinttext`;
    const errorTextId = `${this.radioGroupName}-errortext`;

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
        aria-describedby=${ifDefined(describedBy)}
        @radio-select=${this.handleChange}
        @keydown=${this.handleKeyDown}
        aria-invalid=${ifDefined(this.activeErrorMessage ? 'true' : undefined)}
        aria-required=${ifDefined(this.required ? 'true' : undefined)}
        role="radiogroup"
        part="base"
      >
        <!-- Ledetekst -->
        ${getLabel(
          this.radioGroupName,
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
            ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>${this.helpText}</p>`
            : nothing
        }
        <div
          class=${classMap({
            'radio-group': true,
            [`radio-group--${this.orientation}`]: true,
          })}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <!-- Hint-tekst og feilmelding -->
        ${
          !this.activeErrorMessage && this.hint
            ? html`<p
                part="hint-text"
                class=${classMap({
                  'field__hint-text': true,
                  'field__hint-text--show': !!this.hint,
                })}
                id=${hintTextId}
              >
                ${this.hint}
              </p>`
            : nothing
        }

        <p
          aria-live="assertive"
          aria-atomic="true"
          part="error-text"
          class=${classMap({
            'field__hint-text': true,
            'field__hint-text--show': !!this.activeErrorMessage,
          })}
          id=${errorTextId}
        >
          ${this.activeErrorMessage ?? ''}
        </p>
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group': NveRadioGroup;
  }
}
