import { css } from 'lit';
import { gapStyles } from '../nve-layout-gap.styles';

export default [
  gapStyles,
  css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--_grid-min, 250px), 1fr));
      gap: var(--spacing-medium);
    }
  `,
];
