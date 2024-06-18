import { customElement } from 'lit/decorators.js';
import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import styles from './nve-checkbox.styles';

/**
 * En avkrysningsboks.
 * Ikke bruk `size`, i NVE bruker vi kun en størrelse på avkrysningsbokser.
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
    this.removeEventListener('sl-invalid', () => { });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox': NveCheckbox;
  }
}
