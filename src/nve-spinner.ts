import { customElement } from 'lit/decorators.js';
import { SlSpinner } from '@shoelace-style/shoelace';
import './varsom.css';
import { css } from 'lit';

@customElement('nve-spinner')
export class NveSpinner extends SlSpinner {
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
