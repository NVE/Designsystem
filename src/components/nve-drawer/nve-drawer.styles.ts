import { css } from 'lit';

export default css`
  :host::part(panel) {
    padding: var(--spacing-x-large) var(--spacing-large) var(--spacing-x-large) var(--spacing-large);
    background-color: var(--neutrals-background-primary);
    color: var(--neutrals-foreground-primary);
  }

  :host::part(header) {
    padding-bottom: var(--spacing-x-small);
    border-bottom: 1px solid var(--Neutrals-Border-Subtle, #e4e5e7);
  }

  :host::part(title) {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-semibold);
    padding: 0;
  }

  :host::part(header-actions) {
    padding: 0;
  }

  :host::part(close-button):hover {
    background-color: var(--interactive-ghost-background-hover);
    border-radius: var(--border-radius-small, 4px);
    transition: background-color 0.3s ease;
  }

  .drawer__body {
    padding: 0;
    padding-top: var(--spacing-large);
  }

  :host::part(footer),
  ::slotted([slot='footer']) {
    padding: 0;
  }
`;
