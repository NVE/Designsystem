import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../nve-label/nve-label.component';
import styles from './nve-checkbox-group.styles';
import toggleBooleanAttrOnListOfNodes from '../../utils/updateInvalidProperty';
import deepCompare from '../../utils/deepCompare';

@customElement('nve-checkbox-group')
/**
 * Representerer en tilpasset sjekboksgruppekomponent.
 * Denne komponenten burde brukes kun med <nve-checkbox> komponent.
 * Man kan ta i bruk selectedValues som inneholder value-attributet fra alle aktive sjekkbokser inn i sjekkboksgruppen. Den
 * oppdaterer seg automatisk når mån klikker på sjekkbokser. Man kan lagre både primitiver og objekter i selectedValues.
 * Valideres både med constraint validation (kun required støttes per i dag), og custom validering. Custom validering prioriteres når man submitter formen.
 * <nve-checkbox> komponenter som er wrappet i <nve-checkbox-group>
 * @slot default - innholder alle nve-checkbox komponenter for global style styring og validering
 * */
export default class NveCheckboxGroup extends LitElement {
  constructor() {
    super();
  }

  /** Deaktiverer alle sjekkbokser hvis 'true' */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Viser label til sjekboksgruppen */
  @property() label?: string;
  /** Viser i ikone og tooltip tekst ved siden av label. Skal ikke fungere uten label */
  @property() tooltip?: string;
  /** Om gruppen skal rendres horisontalt eller vertikalt */
  @property() orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Feil melding som vises under gruppe hvis validering feiler */
  @property() errorMessage?: string;
  /** Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard */
  @property() requiredLabel = '*Obligatorisk';
  /** Returnerer et array av value-attributet til alle sjekkbokser som er valgt */
  @property({ type: Array }) selectedValues?: string[];
  @query('slot') slot: any;
  /** Bestemmer om feilmelding skal vises når validering feiler  */
  @state() protected showErrorMessage = false;
  /** State på custom validering. Den trengs for å kunne kjøre både constaraint- og custom validering samtidig. */
  @state() protected isCustomValidationError = false;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    const formElement = this.closest('form');
    // Kjører validering når den nærmeste formen trigger submit. Gjelder kun constraint validation.
    formElement?.addEventListener('submit', this.handleSubmit.bind(this));
    this.addEventListener('sl-change', this.handleChange.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sl-change', this.handleChange);
    this.removeEventListener('submit', this.handleSubmit);
  }

  protected firstUpdated() {
    if (this.requiredLabel) {
      this.style.setProperty('--sl-checkbox-required-content', `"${this.requiredLabel}"`);
    }

    // sjekker om selectedValues inneholder noe verdi fra starten
    if (!this.selectedValues?.length) return;
    const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
    nveCheckboxes.forEach((ch) => {
      if (this.selectedValues?.includes(ch.value)) {
        ch.checked = true;
      } else {
        ch.checked = false;
      }
    });
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has('disabled')) {
      const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
      toggleBooleanAttrOnListOfNodes(nveCheckboxes, this.disabled, 'disabled');
    }
  }

  /** En 'fake' metode som gjør custom validering enklere på checkbox-group komponent */
  setCustomValidity(message = '') {
    const isValid = message.length ? false : true;
    if (!isValid) {
      this.errorMessage = message;
      this.makeInvalid();
    } else {
      this.resetValidation();
    }
    this.isCustomValidationError = !isValid;
    this.toggleValidationAttributes(isValid);
  }

  private handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.checkValidity();
  }

  private handleChange(e: Event) {
    this.updateSelectedValues(e);
    this.checkValidity();
  }

  /** Oppdaterer selectedValues property hver gang man endrer noen av sjekkbokser i sjekkboksgruppen.  */
  private updateSelectedValues = (e: Event) => {
    if (!this.selectedValues) return;
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      this.selectedValues.push(target.value);
    } else {
      const indexToRemove = this.selectedValues.findIndex((element) => deepCompare(element, target.value));
      if (indexToRemove !== -1) {
        this.selectedValues.splice(indexToRemove, 1);
      }
    }
    this.requestUpdate();
  };

  /** Sjekker validity basert på constraint validation. Man kan legge til flere properties. */
  private checkValidity() {
    if (!this.required) return;
    // custom validering er prioritert. Hvis den feiler constraint validering via checkValidity kjører ikke.
    if (this.isCustomValidationError) return;
    let isValid = true;
    if (this.required) {
      isValid = this.checkIfRequiredValid();
    }

    if (isValid) {
      this.resetValidation();
    } else {
      this.makeInvalid();
    }
    this.toggleValidationAttributes(isValid);
  }

  /** Toggler riktig validering attribute for å vise riktig style */
  private toggleValidationAttributes(isValid: boolean) {
    this.toggleAttribute('data-valid', isValid);
    this.toggleAttribute('data-user-valid', isValid);
    this.toggleAttribute('data-invalid', !isValid);
    this.toggleAttribute('data-user-invalid', !isValid);
  }

  private resetValidation() {
    const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
    nveCheckboxes.forEach((c) => {
      c.toggleAttribute('data-user-invalid', false);
      c.setCustomValidity('');
    });
    this.showErrorMessage = false;
  }

  private makeInvalid() {
    const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
    // checkbox har data-valid prop derfor må vi endre den med å sette custom validity på alle barn. den gir også styling
    nveCheckboxes.forEach((c) => {
      c.toggleAttribute('data-user-invalid', true);
      c.setCustomValidity(this.errorMessage || 'Error');
    });
    this.showErrorMessage = true;

    const event = new Event('sl-invalid', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  private checkIfRequiredValid(): boolean {
    const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
    const isValid = nveCheckboxes.some((checkbox) => checkbox.checked);
    return isValid;
  }

  render() {
    return html`
      <fieldset
        class="checkbox-group"
        aria-required=${this.required}
        aria-labelledby="label"
        aria-describedby="error-message"
        aria-errormessage="error-message"
      >
        ${this.label
          ? html`<div class="checkbox-group__label">
              <nve-label id="label" value=${this.label} size="small" tooltip=${this.tooltip!}></nve-label>
            </div>`
          : null}
        <slot class="checkbox-group__checkboxes"></slot>
        ${this.showErrorMessage
          ? html`<span role="alert" id="error-message" class="checkbox-group__error-message"
              >${this.errorMessage || null}</span
            >`
          : null}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group': NveCheckboxGroup;
  }
}
