import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    --transition-speed: 0.3s;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    user-select: none;
    font: var(--label-medium-light);
    -webkit-user-select: none;
    cursor: pointer;
    border-radius: var(--border-radius-small) var(--border-radius-small) var(--border-radius-none)
      var(--border-radius-none);
    transition: var(--transition-speed) color;
    padding: var(--spacing-medium) var(--spacing-small);
    color: var(--neutrals-foreground-mute);
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--neutrals-foreground-primary);
  }
  .tab:focus-visible:not(.tab--disabled) {
    color: var(--neutrals-foreground-primary);
  }

  .tab.tab--active:not(.tab--disabled) {
    font: var(--label-medium);
    color: var(--neutrals-foreground-primary);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--disabled {
    opacity: var(--opacity-disabled);
    cursor: not-allowed;
  }
`;
