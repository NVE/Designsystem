import { css } from 'lit';

export default css`
  :host {
    --padding: 0;
    --padding-top: var(--spacing-x-small);
    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
    padding-top: var(--padding-top);
  }
`;
