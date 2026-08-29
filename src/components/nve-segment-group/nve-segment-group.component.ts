import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { FormValidationComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-segment-group.styles';
import { NveSegment } from 'nve-designsystem';
import { ValidationRule } from '@validation/validateForm';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { getLabel, labelStyles } from '../../templates/label';
import formField from '@styles/formField';
import { IRadioControl } from '@interfaces/radiocontrol';
import { handleRadioControlKeyDown, selectRadioControl, selectRadioControlWithFocus } from '@shared/radiocontrol';

let id = 0; // for å generere unike id-er. Brukes for å koble label og hint tekster til riktig fieldset via aria-describedby.

/**
 * En gruppe av nve-segment-knapper. Fungerer som en radio-gruppe. Kun én segment-knapp i en gitt gruppe kan være valgt om gangen.
 *
 * @event change når en segment-knapp i gruppen blir valgt. Inneholder den valgte verdien.
 *
 * @csspart base Hovedcontaineren for segment-gruppen, som er en fieldset.
 * @csspart help-text Teksten som vises under ledeteksten for å gi ekstra informasjon.
 * @csspart hint-text Teksten som vises under segment-knappene for å gi ekstra informasjon eller feilmeldinger.
 * @csspart error-text Teksten som vises under segment-knappene for å vise feilmeldinger.
 */
@customElement('nve-segment-group')
export default class NveSegmentGroup extends LitElement implements FormValidationComponent {
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
  /** Om segment skal ha pill-stil */
  @property({ type: Boolean }) pill = false;
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean }) required = false;
  /** Ekstra teks, t som vises for obligatoriske felt. * er en standard og vises alltid */
  @property({ type: String }) requiredLabel?: string = undefined;
  /** Størrelse på radio-knappene */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for ledetekst */
  @property({ type: String }) tooltip = '';
  /** Verdi for den valgte radio-knappen */
  @property({ type: String, reflect: true }) value?: string = undefined;
  @property({ attribute: false }) validationRules: Array<ValidationRule> = [];
  @queryAssignedElements({ selector: 'nve-segment' })
  private segments!: NveSegment[];
  @state() internalValidationMessage = '';

  static styles = [styles, labelStyles, formField];

  private segmentGroupName = `nve-segment-group-${id++}`;
  /**
   * Håndterer endring av valgt segment-knapp.
   * @param e Event som utløses når en segment-knapp endres.
   */
  private handleChange(e: Event) {
    const radioControl = e.target as IRadioControl;

    if (radioControl.tagName.toLowerCase() !== 'nve-segment' || radioControl.disabled) {
      return;
    }

    selectRadioControlWithFocus(radioControl, this.segments);
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
   * Håndterer tastetrykk for navigasjon mellom segment-knapper.
   * @param e Event som utløses når en tast trykkes ned.
   */
  private handleKeyDown(e: KeyboardEvent) {
    const selected = handleRadioControlKeyDown(e, this.segments, this.disabled);

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
    // Sett interne attributter på segment-knappene
    const checkedSegment = this.segments.find((segment) => segment.checked);
    this.segments.forEach((segment, index) => {
      if (!this.disabled) {
        // Sett tabIndex basert på hvilken segment-knapp som er valgt, 0 er standard
        segment.tabIndex = segment === checkedSegment || (!checkedSegment && segment === this.segments[0]) ? 0 : -1;
      }
      segment.pill = this.pill;
      // Sett posisjon
      segment.pos = index + 1;
      // Sett gruppestørrelse
      segment.setsize = this.segments.length;
      if (this.size !== 'medium') {
        // sett størrelse på segment-knappene
        segment.size = this.size;
      }
      if (this.value && segment.value === this.value) {
        selectRadioControl(segment, this.segments);
      }
    });
  }

  firstUpdated() {
    if (!this.label) {
      console.warn(
        'nve-segment-group: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage') || changedProperties.has('internalValidationMessage')) {
      this.segments.forEach((r) => (r.invalid = !!this.activeErrorMessage));
    }
    if (changedProperties.has('disabled')) {
      this.segments.forEach((radio) => {
        if (!radio.disabled) {
          radio.disabled = this.disabled;
        }
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
    const helpTextId = `${this.segmentGroupName}-helptext`;
    const hintTextId = `${this.segmentGroupName}-hinttext`;
    const errorTextId = `${this.segmentGroupName}-errortext`;

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
        @segment-select=${this.handleChange}
        @keydown=${this.handleKeyDown}
        aria-invalid=${ifDefined(this.activeErrorMessage ? 'true' : undefined)}
        aria-required=${ifDefined(this.required ? 'true' : undefined)}
        role="radiogroup"
        part="base"
      >
        <!-- Ledetekst -->
        ${getLabel(
          this.segmentGroupName,
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
        <div class="segment-group">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
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
    'nve-segment-group': NveSegmentGroup;
  }
}
