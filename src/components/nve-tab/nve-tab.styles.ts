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
    transition:
      var(--transition-speed) color,
      var(--transition-speed) background-color;
    padding: 0 var(--spacing-small);
    color: var(--tab-color);
    background-color: var(--background-color);
    min-height: var(--fixed-sizing-2x-large);
    border-bottom: transparent;
    position: relative;
  }

  .tab:hover:not(.tab--disabled):not(.tab--active) {
    color: var(--neutrals-foreground-primary);
    background-color: var(--active-background-color);
  }

  .tab:hover:not(.tab--disabled):not(.tab--active)::after {
    content: ' ';
    height: var(--track-width);
    width: 100%;
    color: var(--neutrals-foreground-primary);
    border-bottom: var(--track-width) solid var(--hover-track-color);
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: calc(0.5 * var(--gap-size));
  }
  .tab:focus-visible:not(.tab--disabled) {
    color: var(--neutrals-foreground-primary);
  }

  .tab.tab--active:not(.tab--disabled) {
    font: var(--label-medium);
    color: var(--active-tab-color);
    background-color: var(--active-background-color);
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
