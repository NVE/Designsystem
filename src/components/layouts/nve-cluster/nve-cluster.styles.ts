import { css } from 'lit';
import { gapStyles } from '../nve-layout-gap.styles';

export default [
  gapStyles,
  css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-medium);
      justify-content: var(--_cluster-justify, flex-start);
      align-items: var(--_cluster-align, center);
    }
  `,
];
