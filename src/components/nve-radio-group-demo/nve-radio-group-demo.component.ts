import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-group-demo.styles';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NveRadioDemo } from 'src/nve-designsystem';
import '../nve-tooltip/nve-tooltip.component';
import '../nve-icon/nve-icon.component';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

let errorId = 0;
@customElement('nve-radio-group-demo')
export default class NveRadioGroupDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'vertical';
  @property({ type: String }) label: string | undefined = undefined;
  @property({ type: String }) value = '';
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean }) required = false;
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Ekstra tekst som vises for obligatoriske felt. * er en standard og vises alltid */
  @property({ type: String }) requiredLabel = '';
  @queryAssignedElements({ selector: 'nve-radio-demo', flatten: true })
  private radios!: NveRadioDemo[];
  /** @internal */
  private readonly errorId = `error-input-${++errorId}`;
  static styles = [styles];

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
  */

  constructor() {
    super();
  }

  private handleClick(e: Event) {
    const radio = e.target as NveRadioDemo;
    if (radio.tagName.toLowerCase() === 'nve-radio-demo' && !radio.disabled) {
      this.selectRadio(radio);
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (this.radios.length === 0) return;

    const currentIndex = this.radios.findIndex((radio) => radio.contains(document.activeElement));
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (e.key === 'Enter' || e.key === ' ') {
      this.selectRadio(this.radios[currentIndex]);
      e.preventDefault();
    }

    if (this.orientation === 'horizontal') {
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % this.radios.length;
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + this.radios.length) % this.radios.length;
        e.preventDefault();
      }
    } else {
      if (e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % this.radios.length;
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        nextIndex = (currentIndex - 1 + this.radios.length) % this.radios.length;
        e.preventDefault();
      }
    }

    if (nextIndex !== currentIndex) {
      this.selectRadio(this.radios[nextIndex]);
    }
  }

  private selectRadio(radio: NveRadioDemo) {
    this.radios.forEach((r) => (r.checked = false));

    // Check the selected radio
    radio.checked = true;
    radio.focus();
    this.value = radio.value || '';
    this.updateTabIndexes();
    this.dispatchEvent(
      new CustomEvent('nve-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
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

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('errorMessage')) {
      // Update radios when errorMessage changes
      this.radios.forEach((radio) => {
        radio.invalid = !!this.errorMessage;
      });
    }
  }

  render() {
    return html`
      <fieldset
        test-id=${ifDefined(this.testId)}
        class="radio-group"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
        aria-describedby=${ifDefined(this.errorMessage ? this.errorId : undefined)}
        .required=${this.required}
      >
        ${this.label
          ? html`<legend>
              ${this.label}
              ${this.tooltip
                ? html`<nve-tooltip placement="top">
                    <div slot="content">${unsafeHTML(this.tooltip)}</div>
                    <nve-icon class="nve-info-icon" name="Info"></nve-icon>
                  </nve-tooltip>`
                : nothing}
              ${this.required
                ? html`<span class="label__required-text"
                    >*${this.requiredLabel ? html`${this.requiredLabel}` : nothing}</span
                  >`
                : nothing}
            </legend>`
          : nothing}
        <!-- husk a tilpasse ikonen slik at den har tooltip med hva som helst innhold html inkludert og suffix med innhold som spinners -->
        <div
          class=${classMap({
            'radio-group__radios': true,
            [`radio-group--${this.orientation}`]: true,
          })}
        >
          <slot @slotchange=${this.updateTabIndexes}></slot>
        </div>
        <!-- Feilmelding - skal plassen vises alltid eller skal vi la komponenten sprer seg-->
        ${this.errorMessage
          ? html`<span class="radio-group--invalid" id=${this.errorId}>${this.errorMessage}</span>`
          : nothing}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group-demo': NveRadioGroupDemo;
  }
}
