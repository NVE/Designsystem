import { css } from 'lit';

export default css`
  :host {
    --track-width: 2px;
    --active-border-bottom-color: var(--brand-primary); /* farge for strek under aktiv tab */
    --background-color: transparent;
    --active-background-color: transparent;
    --tab-color: var(--neutrals-foreground-mute);
    --active-tab-color: var(--neutrals-foreground-primary);
    display: block;
    --transition-speed: 0.3s;
    --track-color: transparent;
    --active-offset: 0;
  }

  :host([showbackground]) {
    --active-background-color: var(--neutrals-background-primary);
    --background-color: var(--neutrals-background-secondary);
  }

  :host([showunderline]) {
    --track-color: var(--neutrals-border-subtle); /* farge for strek under alle tabs */
    --active-offset: -1;
  }

  :host([showunderline][showbackground]) {
    --track-color: var(--neutrals-border-default);
  }

  .tab-group {
    display: flex;
    border-radius: 0;
    flex-direction: column;
  }

  .tab-group__tabs {
    display: flex;
    align-items: end;
    position: relative;
    flex: 1 1 auto;
    gap: var(--spacing-xx-small);
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
    bottom: calc(var(--active-offset) * var(--track-width));
    border-bottom: solid var(--track-width) var(--active-border-bottom-color);
    transition:
      var(--transition-speed) translate ease,
      var(--transition-speed) width ease;
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
