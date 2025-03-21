import { css } from 'lit';

export default css`
  :host {
    --indicator-color: var(--brand-primary);
    --track-color: var(--neutrals-border-subtle);
    --background-color: transparent;
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
    flex-direction: column;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group__nav-container {
    order: 1;
  }

  .tab-group__body {
    order: 2;
  }

  .tab-group__indicator {
    position: absolute;
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
