import { css } from 'lit';

export default css`
  :host {
    --drawer-padding-block: var(--spacing-large);
    --drawer-padding-inline: var(--spacing-medium);
  }

  :host::part(title) {
    display: flex;
    align-items: center;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semibold);
    padding: 0;
  }

  :host::part(header) {
    padding: var(--drawer-padding-block) var(--drawer-padding-inline);
    border-bottom: 1px solid var(--color-neutrals-border-subtle);
  }

  :host::part(header-actions) {
    display: flex;
    align-items: center;
    padding: 0;
  }

  :host::part(panel) {
    background-color: var(--color-neutrals-background-primary);
    color: var(--color-neutrals-foreground-primary);
  }

  :host::part(body) {
    padding: var(--drawer-padding-block) var(--drawer-padding-inline);
  }

  :host::part(footer) {
    display: flex;
    gap: var(--spacing-small);
    padding: var(--drawer-padding-block) var(--drawer-padding-inline);
    justify-content: flex-start;
  }
  :host::part(close-button) {
    color: var(--color-neutrals-foreground-primary);
  }
  :host::part(close-button):hover {
    background-color: var(--color-interactive-ghost-background-hover);
    border-radius: var(--border-radius-small, 4px);
    transition: background-color 0.3s ease;
  }
`;
