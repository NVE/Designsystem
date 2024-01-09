import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../nve-label/nve-label.component';
import styles from './nve-checkbox-group.styles';
import toggleBooleanAttrOnListOfNodes from '../../utils/updateInvalidProperty';

@customElement('nve-checkbox-group')
/**
 * Representerer en tilpasset sjekboksgruppekomponent.
 * Denne komponenten burde brukes kun med <nve-checkbox> komponent. isValid property endrer fargene på alle
 * <nve-checkbox> komponenter som er wrappet i <nve-checkbox-group>
 * @slot default - innholder alle nve-checkbox komponenter for global style styring og validering
 * */
export default class NveCheckboxGroup extends LitElement {
  constructor() {
    super();
  }

  /**
   * Bestemmer om sjekkboksgruppe er valid. Hvis ikke alle sjekkbokser i gruppe blir markert som feil
   */
  @property({ type: String, reflect: true }) isvalid?: string;
  /**
   * Disable eller enable gruppa
   */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om noen av sjekkboksene er sjekket inn */
  @property({ type: Boolean, reflect: true }) required = false;
  /**
   * Viser label til en gruppe
   */
  @property() label?: string;
  /**
   * Viser i ikone og tooltip tekst ved siden av label. Skal ikke fungere uten label
   */
  @property() tooltip?: string;
  /**
   * Om gruppen skal rendres horisontalt eller vertikalt
   */
  @property() orientation: 'horizontal' | 'vertical' = 'vertical';
  /**
   * Viser feil melding under gruppen
   */
  @property() errorMessage?: string;
  @query('slot') slot: any;
  @state() protected invalid = false;

  static styles = [styles];

  connectedCallback() {
    super.connectedCallback();
    // hvis required er true vi kjører validering når den nærmeste formen trigger submit
    const formElement = this.closest('form');
    formElement?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkValidity();
    });
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();
      this.makeInvalid();
    });
    this.addEventListener('sl-change', this.resetValidation.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', this.makeInvalid);
    this.removeEventListener('sl-change', this.resetValidation);
    const formElement = this.closest('form');
    formElement?.removeEventListener('submit', this.checkValidity);
  }

  private makeInvalid() {
    const nveRadios = Array.from(this.querySelectorAll('nve-checkbox'));
    // bruker 'invalid' property her som er ikke en tilgjengelig property i nve-checkbox. Den skal settes automatisk, derfor man trenger ikke (og burde ikke) å få tilgang til det
    toggleBooleanAttrOnListOfNodes(nveRadios, true, 'invalid');
    this.invalid = true;
  }

  private resetValidation() {
    const nveRadios = Array.from(this.querySelectorAll('nve-checkbox'));
    // bruker 'invalid' property her som er ikke en tilgjengelig property i nve-checkbox. Den skal settes automatisk, derfor man trenger ikke (og burde ikke) å få tilgang til det
    toggleBooleanAttrOnListOfNodes(nveRadios, false, 'invalid');
    this.invalid = false;
  }

  updated(changedProperties: any) {
    if (changedProperties.has('isvalid')) {
      this.checkValidity(); //also on change
    }

    // if (changedProperties.has('disabled')) {
    //   if (this.disabled) {
    //     nveCheckboxes.forEach((ch) => {
    //       ch.setAttribute('disabled', '');
    //     });
    //   } else {
    //     nveCheckboxes.forEach((ch) => {
    //       ch.removeAttribute('disabled');
    //     });
    //   }
    // }
  }

  private checkValidity() {
    let isValid = true;
    const nveCheckboxes = Array.from(this.querySelectorAll('nve-checkbox'));
    //check validity
    if (this.required) {
      isValid = nveCheckboxes.some((checkbox) => checkbox.checked);
    } else if (!this.isvalid && this.isvalid !== undefined) {
      isValid = false;
    }
    // dette her er ikke 'mimikerer' shoelace attributer i deres formcontroll komponenter.
    // det trengs ikke her, det er kun for å ha samme attributer når komponent er eller ikke er valid
    this.toggleAttribute('data-valid', isValid);
    this.toggleAttribute('data-user-valid', isValid);
    this.toggleAttribute('data-invalid', !isValid);
    this.toggleAttribute('data-user-invalid', !isValid);

    if (this.isvalid) {
      this.resetValidation();
    }

    if (!isValid) {
      // kaster akkurat samme sl-invalid event som alle andre ugyldige komponenter
      const event = new Event('sl-invalid', {
        bubbles: true,
        cancelable: true,
      });
      this.dispatchEvent(event);
    }
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
        ${this.invalid
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
