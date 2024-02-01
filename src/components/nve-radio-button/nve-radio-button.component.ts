import { customElement } from 'lit/decorators.js';
import { SlRadioButton } from '@shoelace-style/shoelace';

/**
 * En sl-radio-button med NVE design.
 */
@customElement('nve-radio-button')
export default class NveRadioButton extends SlRadioButton {
  constructor() {
    super();
  }
  static styles = [SlRadioButton.styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-button': NveRadioButton;
  }
}
