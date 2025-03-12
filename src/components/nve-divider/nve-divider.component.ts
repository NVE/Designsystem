import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Bruk denne til å skille innhold fra hverandre
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
        --color: var(--neutrals-border-subtle);
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
