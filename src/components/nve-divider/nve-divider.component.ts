import { SlDivider } from '@shoelace-style/shoelace';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * En Shoelace-divider i NVE-forkledning.
 * Se https://shoelace.style/components/divider
 */
@customElement('nve-divider')
export class NveDivider extends SlDivider {
  constructor() {
    super();
  }
  static styles = [
    SlDivider.styles,
    css`
      :host {
        --color: var(--neutrals-border-subtle);
        --width:  var(--border-width-strong, 2px);
        --spacing:  var(--spacing-xx-small, 0.25rem);

      }
      
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-divider': NveDivider;
  }
}
