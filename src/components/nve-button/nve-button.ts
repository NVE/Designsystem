import { customElement } from 'lit/decorators.js';
import { SlButton } from '@shoelace-style/shoelace';
import styles from './nve-button.styles';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nve-button')
export class NveButton extends SlButton {
  constructor() {
    super();
  }

  /**
   * TODO:
   * make width fit content
   * border shows up on active on primary
   *
   *
   */

  static styles = [
    SlButton.styles, // Import Shoelace styles after your custom styles
    styles,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
