import { SlOption } from '@shoelace-style/shoelace';
import { customElement } from 'lit/decorators.js';
import styles from './nve-option.styles';
/**
 * En Shoelace-option i NVE-forkledning.
 * Se https://shoelace.style/components/option
 */
@customElement('nve-option')
export default class NveOption extends SlOption {
  constructor() {
    super();
  }
  static styles = [SlOption.styles, styles];

  /* Setter filled attributt på option når parent-select er filled, for å få annen hover-farge*/
  firstUpdated(changedProperties: any): void {
    super.firstUpdated(changedProperties);
    const select = this.closest('nve-select');
    if (select?.hasAttribute('filled')) {
      this.toggleAttribute('filled', true);
    } else {
      this.toggleAttribute('filled', false);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-option': NveOption;
  }
}
