import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-group.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../nve-tooltip/nve-tooltip.component';
import '../nve-icon/nve-icon.component';
import NveRadio from '../nve-radio/nve-radio.component';
import { getLabel, labelStyles } from '../../templates/label';

let id = 0;
/**
 * En gruppe av nve-radio-knapper. Kun én radioknapp i en gitt gruppe kan være valgt om gangen.
 */
@customElement('nve-radio-group')
export default class NveRadioGroup extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'vertical';
  @property({ type: String }) label: string | undefined = undefined;
  @property({ type: String, reflect: true }) value = '';
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean }) required = false;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String, reflect: true }) helpText = '';
  /** Hint-tekst som vises under feltet */
  @property({ type: String, reflect: true }) hintText = '';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Ekstra tekst som vises for obligatoriske felt. * er en standard og vises alltid */
  @property({ type: String }) requiredLabel = '';
  @property({ type: String }) name = '';
  @queryAssignedElements()
  private radios!: NveRadio[];
  /** @internal */
  static styles = [styles, labelStyles];

  private radioGroupName = `nve-radio-group-${id++}`;

  //TODO: show warning in the console if label is not set
  // add id generation if not set
  // events kun change, vi trenger ikke input. usikker om vi

  /*
  FORM QUIRKS
  - should i call the class of the invalid state with error or invalid? invalid fits aria better, but error fits more the ds semantic
  - i should rather call error errorMessage maybe?
  - what do we do with event names?
  - use span for error message
  - do we need nve-invalid input when
  
  TODO add invalid event when adding validation
  */

  constructor() {
    super();
  }

  private handleChange(e: Event) {
    const radio = e.target as NveRadio;
    if (radio.tagName.toLowerCase() === 'nve-radio' && !radio.disabled) {
      this.selectRadioWithFocus(radio);
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (this.radios.length === 0) return;

    const currentIndex = this.radios.findIndex((radio) => radio.contains(document.activeElement));
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (e.key === 'Enter' || e.key === ' ') {
      this.selectRadioWithFocus(this.radios[currentIndex]);
      e.preventDefault();
    }

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = this.getNextEnabledIndex(currentIndex, 1);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = this.getNextEnabledIndex(currentIndex, -1);
      e.preventDefault();
    }

    if (nextIndex !== currentIndex) {
      this.selectRadioWithFocus(this.radios[nextIndex]);
    }
  }

  private getNextEnabledIndex(fromIndex: number, delta: 1 | -1) {
    const count = this.radios.length;
    for (let step = 1; step <= count; step++) {
      const index = (fromIndex + delta * step + count) % count;
      if (!this.radios[index].disabled) return index;
    }
    return -1; // all disabled
  }

  private selectRadio(radio: NveRadio) {
    this.radios.forEach((r) => (r.checked = false));

    // Check the selected radio
    radio.checked = true;
    this.value = radio.value || '';
    this.updateTabIndexes();
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  private selectRadioWithFocus(radio: NveRadio) {
    this.selectRadio(radio);
    radio.focus();
  }

  /**
   * Setter riktig tabIndex på radio-knappene basert på hvilken som er valgt.
   * Hvis ingen er valgt, settes tabIndex på den første radio-knappen.
   * Det gjøres for å sikre at kun én radio-knapp er tabbable i gruppen. Resten skal navigeres med piltastene.
   */
  private updateTabIndexes() {
    const checkedRadio = this.radios.find((radio) => radio.checked);

    this.radios.forEach((radio) => {
      if (checkedRadio) {
        // Hvis det finnes en valgt radio knapp, sett tabIndex der
        radio.tabIndex = radio === checkedRadio ? 0 : -1;
      } else {
        // Hvis ingen er valgt, sett tabIndex på den første radio-knappen
        radio.tabIndex = radio === this.radios[0] ? 0 : -1;
      }
    });
  }

  private handleSlotChange() {
    this.updateTabIndexes();

    this.radios.forEach((radio) => {
      radio.name = this.radioGroupName;
    });

    requestAnimationFrame(() => {
      if (this.value) {
        const radioToSelect = this.radios.find((radio) => radio.value === this.value);

        if (radioToSelect) {
          this.selectRadio(radioToSelect);
        }
      }
    });
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage')) {
      this.radios.forEach((radio) => {
        radio.invalid = !!this.errorMessage;
      });
    }
  }

  render() {
    const helpTextId = `${this.radioGroupName}-helptext`;
    const hintTextId = `${this.radioGroupName}-hinttext`;

    return html`
      <fieldset
        test-id=${ifDefined(this.testId)}
        class=${classMap({ field: true, 'field--error': !!this.errorMessage })}
        @radio-select=${this.handleChange}
        @keydown=${this.handleKeyDown}
        aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
        .required=${this.required}
        role="radiogroup"
      >
        <!-- Ledetekst -->
        ${getLabel(this.radioGroupName, this.label, this.tooltip, this.required, this.requiredLabel, undefined, true)}
        <!-- Hjelpetekst -->
        ${this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>${this.helpText}</p>`
          : nothing}
        <div
          class=${classMap({
            'radio-group': true,
            [`radio-group--${this.orientation}`]: true,
          })}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <!-- Hint-tekst og feilmelding -->
        ${this.errorMessage || this.hintText
          ? html`<p part="hint-text" class="field__hint-text" id=${hintTextId}>
              ${this.errorMessage || this.hintText}
            </p>`
          : nothing}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group': NveRadioGroup;
  }
}
