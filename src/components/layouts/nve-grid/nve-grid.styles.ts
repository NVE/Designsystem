import { css } from 'lit';
import { gapStyles } from '../nve-layout-gap.styles';

export default [
  gapStyles,
  css`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(var(--_grid-min, 250px), 100%), 1fr));
      gap: var(--spacing-medium);
    }
  `,
];
