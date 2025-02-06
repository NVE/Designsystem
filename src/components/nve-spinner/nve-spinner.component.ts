import { customElement } from 'lit/decorators.js';
import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { css } from 'lit';

/**
 * Ei snurre
 * 
 * 
 */
@customElement('nve-spinner')
export default class NveSpinner extends SlSpinner {
  constructor() {
    super();
  }
  static styles = [
    SlSpinner.styles,
    // Import Shoelace styles after your custom styles
    css`
      .spinner__track {
        stroke: transparent;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-spinner': NveSpinner;
  }
}
