import { css } from 'lit';
import { gapStyles } from '../nve-layout-gap.styles';

export default [
  gapStyles,
  css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-medium);
      justify-content: var(--_stack-justify, flex-start);
    }
  `,
];
