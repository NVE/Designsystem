import { css } from 'lit';

export default css`
  :host {
    --border-bottom: 2px;
    display: flex;
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:focus-visible) .tab {
    outline: 2px solid var(--interactive-outlined-border-focus);
    outline-offset: -12px;
  }

  .tab {
    display: flex;
    min-width: 40px;
    padding: 11px;
    white-space: nowrap;
    text-align: center;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xx-small);
    border-radius: var(--border-radius-small) var(--border-radius-small) var(--border-radius-none)
      var(--border-radius-none);
    border-bottom: 2px solid transparent;
    color: var(--neutrals-foreground-primary);
    font: var(--label-medium);
    cursor: pointer;
    transition:
      border-color 0.3s ease-in-out,
      background 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .tab {
      border-bottom: 2px solid var(--brand-primary);
    }
  }

  .tab--large {
    padding: 18px 8px;
    font: var(--label-medium);
  }

  .tab--background {
    background: var(--neutrals-background-primary);
    border-bottom: var(--border-bottom) solid transparent;
  }

  :host([aria-selected='false']) .tab {
    border-bottom: var(--border-bottom) solid var(--neutrals-border-subtle);
    font: var(--label-medium-light);
    color: var(--neutrals-foreground-muted);
  }

  :host([aria-selected='false']) .tab:hover {
    border-bottom: var(--border-bottom) solid var(--neutrals-border-default);
  }

  :host([aria-selected='false']) .tab.tab--background:hover {
    border-bottom: var(--border-bottom) solid var(--neutrals-border-default);
  }

  :host([aria-selected='false']) .tab.tab--background {
    background: var(--neutrals-background-secondary);
    font: var(--label-medium-light);
    color: var(--neutrals-foreground-muted);
  }
  :host([disabled]) .tab {
    cursor: not-allowed;
    color: var(--neutrals-foreground-disabled);
    opacity: var(--opacity-disabled);
  }
  :host([disabled]) .tab:hover {
    border-bottom: var(--border-bottom) solid var(--neutrals-border-subtle);
  }
`;
