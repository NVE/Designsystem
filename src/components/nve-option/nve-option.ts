import { SlOption } from '@shoelace-style/shoelace';
import { customElement } from 'lit/decorators.js';
import styles from './nve-option.styles';
/**
 * En Shoelace-option i NVE-forkledning.
 * Se https://shoelace.style/components/option
 */
@customElement('nve-option')

export class NveOption extends SlOption {
  
  constructor() {
    super();
  }
  static styles = [SlOption.styles, styles];
  
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-option': NveOption;
  }
}
