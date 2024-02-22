import { customElement } from 'lit/decorators.js';
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js';
import styles from './nve-radio.styles';

/**
 * En sl-radio med NVE design.
 * Se https://shoelace.style/components/radio
 *
 * @extends SlRadio
 *
 */
@customElement('nve-radio')
export default class NveRadio extends SlRadio {
  constructor() {
    super();
  }
  static styles = [SlRadio.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio': NveRadio;
  }
}
