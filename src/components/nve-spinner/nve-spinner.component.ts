import { customElement } from 'lit/decorators.js';
import { SlSpinner } from '@shoelace-style/shoelace';
import { css } from 'lit';

/**
 * En Shoelace-spinner i NVE-forkledning.
 * Se https://shoelace.style/components/spinner
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
