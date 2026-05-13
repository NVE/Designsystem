import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox-group.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import NveCheckbox from '../nve-checkbox/nve-checkbox.component';
import { getLabel, labelStyles } from '../../templates/label';

let id = 0;

type NveCheckboxGroupChangeEvent = {
  value: string;
  action: 'select' | 'deselect';
};
@customElement('nve-checkbox-group')
export default class NveCheckboxGroup extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Om radio-gruppen er deaktivert */
  @property({ type: Boolean }) disabled = false;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String, reflect: true }) helpText = '';
  /** Hint-tekst som vises under feltet */
  @property({ type: String, reflect: true }) hintText = '';
  /** Ledetekst */
  @property() label?: string;
  /** Om gruppa skal vises horisontalt eller vertikalt */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Initialt valgte verdier */
  @property({ type: Array }) selectedValues: string[] = [];
  /** Størrelse på radio-knappene */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';

  @queryAssignedElements({ selector: 'nve-checkbox', flatten: true })
  private checkboxes!: NveCheckbox[];
  /** @internal */
  private readonly checkboxGroupId = `checkbox-group-${++id}`;

  static styles = [styles, labelStyles];

  protected firstUpdated() {
    // sjekker om selectedValues inneholder noe verdi fra starten
    if (!this.selectedValues?.length) return;
    this.checkboxes.forEach((ch) => {
      ch.checked = !(ch.value !== null && this.selectedValues?.includes(ch.value));
    });
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage')) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.invalid = !!this.errorMessage;
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

  private handleSlotChange() {
    // sett størrelse på sjekkboksene
    if (this.size !== 'medium') {
      this.checkboxes.forEach((checkbox) => {
        checkbox.size = this.size;
      });
    }

    requestAnimationFrame(() => {
      if (this.selectedValues?.length) {
        for (const checkbox of this.checkboxes) {
          const ch = checkbox.value !== null && this.selectedValues?.includes(checkbox.value);
          checkbox.checked = ch;
        }
      }
      this.removeAttribute('selectedValues');
    });
  }

  private handleChange(e: Event) {
    const value = (e.target as NveCheckbox).value;
    const checked = (e.target as NveCheckbox).checked;
    const action = checked ? 'select' : 'deselect';
    this.dispatchEvent(
      new CustomEvent<NveCheckboxGroupChangeEvent>('change', {
        detail: { value: value, action },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleKeyDown(e: KeyboardEvent) {
    console.warn(e);
  }

  render() {
    const helpTextId = `${this.checkboxGroupId}-helptext`;
    const hintTextId = `${this.checkboxGroupId}-hinttext`;

    const describedBy = [this.helpText ? helpTextId : null, this.errorMessage || this.hintText ? hintTextId : null]
      .filter(Boolean)
      .join(' ');

    return html`
      <fieldset
        test-id=${ifDefined(this.testId)}
        class=${classMap({
          field: true,
          'field--error': !!this.errorMessage,
        })}
        @change=${this.handleChange}
        @keydown=${this.handleKeyDown}
        aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
        aria-describedby=${ifDefined(describedBy)}
        part="base"
      >
        <!-- Ledetekst -->
        ${getLabel(this.checkboxGroupId, this.label, this.tooltip, this.required, this.requiredLabel, undefined, true)}
        <!-- Hjelpetekst -->
        ${this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId} part="help-text">${this.helpText}</p>`
          : nothing}
        <div
          class=${classMap({
            'checkbox-group': true,
            [`checkbox-group--${this.orientation}`]: true,
          })}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <!-- Hint-tekst og feilmelding -->
        ${this.errorMessage || this.hintText
          ? html`<p part="hint-text" class="field__hint-text" id=${hintTextId} part="hint-text">
              ${this.errorMessage || this.hintText}
            </p>`
          : nothing}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group': NveCheckboxGroup;
  }
}
