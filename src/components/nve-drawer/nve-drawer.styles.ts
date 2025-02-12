import { css } from 'lit';

export default css`
  :host::part(panel) {
    padding: var(--spacing-2x-large, 40px);
  }

  :host::part(title) {
    font-size: var(--fixed-sizing-small, 24px);
    font-weight: var(--font-weight-semibold, 600);
    padding: 0;
  }

  .drawer__body {
    padding: 0;
    padding-top: var(--spacing-x-large, 32px);
  }

  :host::part(footer),
  ::slotted([slot='footer']) {
    padding: 0;
  }
`;
