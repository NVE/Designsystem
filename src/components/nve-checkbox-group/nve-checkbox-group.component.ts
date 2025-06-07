import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../nve-label/nve-label.component';
import styles from './nve-checkbox-group.styles';
import toggleBooleanAttrOnListOfNodes from '../../utils/updateInvalidProperty';
import deepCompare from '../../utils/deepCompare';

/**
 * Bruk denne for å håndtere flere avkrysningsbokser (nve-checkbox) som hører sammen.
 * selectedValues inneholder `value` til hver av avkrysningsboksene som er valgt i gruppa.
 * Gruppa oppdaterer seg automatisk når man klikker på en avkrysningsboks.
 * Støtter både constraint validation (kun `required`) og tilpasset validering.
 * Tilpasset validering prioriteres foran `required`.
 * @slot default - legg avkrysningsboksene inni denne.
 * */
@customElement('nve-checkbox-group')
export default class NveCheckboxGroup extends LitElement {
  constructor() {
    super();
  }

  /** Deaktiverer alle sjekkbokser hvis 'true' */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Ledetekst */
  @property() label?: string;
  /** Viser i-ikon og hjelpetekst ved siden av label. Du må ha en label for å bruke denne. */
  @property() tooltip?: string;
  /** Om gruppa skal vises horisontalt eller vertikalt */
  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /** Feilmelding som vises under gruppe hvis validering feiler */
  @property() errorMessage?: string;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '*Obligatorisk';
  /** Returnerer en tabell av value-attributet til alle sjekkbokser som er valgt. Man kan lagre både primitiver og objekter i selectedValues. */
  @property({ type: Array }) selectedValues?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @query('slot') slot: any;
  /** Bestemmer om feilmelding skal vises når validering feiler  */
  @state() protected showErrorMessage = false;
  /** Status for tilpasset validering. Den trengs for å kunne kjøre både constraint- og tilpasset validering samtidig. */
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

  updated(changedProperties: Map<string | number | symbol, unknown>) {
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
          : nothing}
        <slot class="checkbox-group__checkboxes"></slot>
        ${this.showErrorMessage
          ? html`<span role="alert" id="error-message" class="checkbox-group__error-message"
              >${this.errorMessage || nothing}</span
            >`
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
