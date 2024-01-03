import { customElement } from 'lit/decorators.js';
import { SlRadio } from '@shoelace-style/shoelace';
import styles from './nve-radio.styles';

@customElement('nve-radio')
/**
 * Representerer en tilpasset radio-komponent som utvider SlRadio-klassen og styler den i nve-drakt.
 *
 * @extends SlRadio
 *
 */
export class NveRadio extends SlRadio {
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
