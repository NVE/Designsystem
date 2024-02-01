import { customElement } from 'lit/decorators.js';
import { SlCheckbox } from '@shoelace-style/shoelace';
import styles from './nve-checkbox.styles';

/**
 * En sl-checkbox.
 * Mer info: https://shoelace.style/components/checkbox
 * Kan brukes akkurat som en vanlig sl-checkbox komponent.
 * Vi burde ikke justere størrelsen på den siden det finnes bare en 'size' alternativ i design systemet.
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
