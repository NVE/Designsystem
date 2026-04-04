import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox-group-demo.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NveCheckboxDemo } from 'src/nve-designsystem';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import deepCompare from '../../utils/deepCompare';

let errorId = 0;
@customElement('nve-checkbox-group-demo')
export default class NveCheckboxGroupDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Ledetekst */
  @property() label?: string;
  /** Om gruppa skal vises horisontalt eller vertikalt */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Returnerer en tabell av value-attributet til alle sjekkbokser som er valgt. Man kan lagre både primitiver og objekter i selectedValues. */
  @property({ type: Array }) selectedValues?: (string | null)[]; // consider not doing it
  @queryAssignedElements({ selector: 'nve-checkbox-demo', flatten: true })
  private checkboxes!: NveCheckboxDemo[];
  /** @internal */
  private readonly errorId = `error-input-${++errorId}`;
  static styles = [styles];

  constructor() {
    super();
  }

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
      // Update radios when errorMessage changes
      this.checkboxes.forEach((checkbox) => {
        checkbox.invalid = !!this.errorMessage;
      });
    }
  }

  private handleClick(e: Event) {
    this.updateSelectedValues(e);
  }

  private handleKeyDown(e: KeyboardEvent) {
    console.warn(e);
  }

  /** Oppdaterer selectedValues property hver gang man endrer noen av sjekkbokser i sjekkboksgruppa.  */
  private updateSelectedValues = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      if (!this.selectedValues) {
        this.selectedValues = [];
      }
      this.selectedValues.push(target.value);
    } else if (this.selectedValues) {
      const indexToRemove = this.selectedValues.findIndex((element) => deepCompare(element, target.value));
      if (indexToRemove !== -1) {
        this.selectedValues.splice(indexToRemove, 1);
      }
    }
    this.requestUpdate();
  };

  /*
  FORM QUIRKS
  - should i call the class of the invalid state with error or invalid? invalid fits aria better, but error fits more the ds semantic
  - i should rather call error errorMessage maybe?
  - what do we do with event names?
  - use span for error message
  - do we need nve-invalid input when 
  - use input inside the label to avoid extra id's
  -IMPORTANT make labels on both radio and checkboxes also as slots
  -IMPORTANT both checkboxes and radis must scale when users zoom right? so use rems on width and height
  - Add depends on other components i use plenty of them here and there
  */
  render() {
    return html`
      <fieldset
        test-id=${ifDefined(this.testId)}
        class="checkbox-group"
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
            'checkbox-group__checkboxes': true,
            [`checkbox-group__checkboxes--${this.orientation}`]: true,
          })}
        >
          <slot></slot>
        </div>
        <!-- Feilmelding - skal plassen vises alltid eller skal vi la komponenten sprer seg-->
        ${this.errorMessage
          ? html`<span class="checkbox-group__error-msg" id=${this.errorId}>${this.errorMessage}</span>`
          : nothing}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group-demo': NveCheckboxGroupDemo;
  }
}
