import { customElement, property, state } from 'lit/decorators.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import styles from './nve-input.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';

/**
 * En sl-input i NVE-forkledning.
 * Mer info: https://shoelace.style/components/input
 *
 * Vil du ha info-ikon med hjelpetekst etter ledeteksten, putt en nve-label i label-slot.
 * Disse attributtene skal ikke brukes:
 * - pill
 *
 * TODO: Felte blir breddere når feil ikone vises. Alt på grunn av at det dukker opp i en slot. Hvis Vi bestemmer oss
 * å ha en fast verdi på sloten, kan det kanksje påvirke andre elementer som skal vises i sloten.
 */
@customElement('nve-input')
export default class NveInput extends SlInput implements INveComponent{
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Brukes til enkel constraint validation til å overskrive default nettleseren melding
   */
  @property({ reflect: true }) errorMessage?: string;
  /**
   * Hjelpe variabler som sjekker om input feltet er allerede invalid
   */
 /**
   * Brukes for å kunne identifisere komponenten i tester
   */
  @property({reflect: true, type: String}) testId:string = '';

 /**
   * Brukes for å kunne identifisere komponenten
   */
  @property({ type: String, reflect: true }) inputId?: string;


  @state() protected alreadyInvalid = false;

  static styles = [SlInput.styles, styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();
      if (!this.alreadyInvalid) {
        this.makeInvalid();
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', this.makeInvalid);
  }

  firstUpdated() {
    super.firstUpdated();
    if (this.requiredLabel) {
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    const hasDataUserInvalidAttr = this.hasAttribute('data-user-invalid');
    if (changedProperties.has('inputId')) {
      this.updateInputId();
    }
    if (hasDataUserInvalidAttr && !this.alreadyInvalid) {
      this.makeInvalid();
    }
    if (!hasDataUserInvalidAttr) {
      this.resetValidation();
    }
  }

  private updateInputId() {
    const input = this.shadowRoot?.querySelector('input');
    if (input && this.inputId) {
      input.id = this.inputId;
    }
  }

  private makeInvalid() {
    this.showErrorIcon();
    this.showErrorMessage();
    this.alreadyInvalid = true;
  }

  private resetValidation() {
    this.hideErrorIcon();
    this.style.setProperty('--nve-input-error-message', '');
    this.alreadyInvalid = false;
  }

  private showErrorMessage() {
    if (!this.errorMessage) {
      this.errorMessage = this.validationMessage;
    }
    this.style.setProperty('--nve-input-error-message', `"${this.errorMessage}"`);
  }

  private showErrorIcon() {
    const nveInput = this;
    const nveIcon = document.createElement('nve-icon');
    nveIcon.setAttribute('id', 'error-icon');
    nveIcon.setAttribute('name', 'error');
    nveIcon.setAttribute('slot', 'suffix');
    // ikone farge
    const variableValue = getComputedStyle(document.documentElement).getPropertyValue(
      '--feedback-background-emphasized-error'
    );
    nveIcon.style.color = variableValue.trim();
    nveInput.appendChild(nveIcon);
  }
  private hideErrorIcon() {
    const nveInput = this;
    //make sure its an error icon!
    const errorIcon = nveInput.querySelector('#error-icon');
    if (errorIcon) {
      errorIcon.remove();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-input': NveInput;
  }
}
