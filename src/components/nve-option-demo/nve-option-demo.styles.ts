import { css } from 'lit';

export default css`
  :host(:focus-visible) {
    outline: none;
  }

  :host(:focus-visible) .option {
    background-color: var(--color-neutrals-background-primary-contrast);
  }

  :host([aria-selected='true']) .option {
    background-color: var(--color-neutrals-background-secondary);
  }

  .option {
    display: flex;
    padding: var(--spacing-x-small);
    gap: var(--spacing-x-small);
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .option--active,
  .option:hover {
    background-color: var(--color-neutrals-background-primary-contrast);
  }
`;
