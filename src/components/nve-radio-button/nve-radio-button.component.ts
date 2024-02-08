import { customElement } from 'lit/decorators.js';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

/**
 * En sl-radio-button med NVE design.
 * Se https://shoelace.style/components/radio-button
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
