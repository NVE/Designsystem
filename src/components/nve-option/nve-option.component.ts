import { SlOption } from '@shoelace-style/shoelace';
import { customElement } from 'lit/decorators.js';
import styles from './nve-option.styles';
import { PropertyValueMap } from 'lit';
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
  firstUpdated(): void {
    const a = this.closest('nve-select');
    if (a?.hasAttribute('filled')) {
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
