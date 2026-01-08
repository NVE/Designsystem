import { css } from 'lit';

export default css`
  :host(.tab-panel--hidden) {
    display: none;
  }

  .tab-panel {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: var(--color-neutrals-background-primary);
    padding: var(--spacing-small);
  }
`;
