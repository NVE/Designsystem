import { customElement } from 'lit/decorators.js';
import { SlCheckbox } from '@shoelace-style/shoelace';
import styles from './nve-checkbox.styles';

// checkbox bruker checbkox sl-icon og jeg tror vi kan la den være sånn for nå. hvis design folka sier at vi ikke burde bruke den
// må vi mest sannsynligvis skrive vår egen checkbox (wrapping vil ikke hjelpe fordi sl-icon er hjemt i sl-checkbox så vi må forke den for å tilpasse).

/**
 * foreløpig finnes ikke noe hove
 */
@customElement('nve-checkbox')
export default class NveCheckbox extends SlCheckbox {
  constructor() {
    super();
  }

  static styles = [SlCheckbox.styles, styles];
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', () => {});
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
