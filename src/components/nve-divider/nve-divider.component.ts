import { SlDivider } from '@shoelace-style/shoelace';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * En Shoelace-divider i NVE-forkledning.
 * Se https://shoelace.style/components/divider
 */
@customElement('nve-divider')
export default class NveDivider extends SlDivider {
  constructor() {
    super();
  }
  static styles = [
    SlDivider.styles,
    css`
      :host {
        --color: var(--neutrals-border-default);
        --width: var(--border-width-default, 1px);
        --spacing: var(--spacing-xx-small, 0.25rem);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-divider': NveDivider;
  }
}
