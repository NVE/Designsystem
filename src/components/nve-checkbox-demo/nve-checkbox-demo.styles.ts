import { css } from 'lit';

export default css`
  :host {
    --size: 1rem;
    --checked-background-color: var(--color-interactive-primary-background-default);
    --border-color: var(--color-interactive-secondary-foreground-disabled);
    --hover-color: var(--color-neutrals-foreground-subtle);
  }

  .checkbox {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    font: var(--typography-label-x-small-light);
    color: var(--color-neutrals-foreground-primary);
    margin-inline: 0;
    gap: var(--spacing-x-small);
    align-items: center;
    line-height: var(--size);
    position: relative;
  }

  /* Custom checkbox styling */
  .checkbox::before {
    content: '';
    box-sizing: border-box;
    width: var(--size);
    height: var(--size);
    border: var(--border-width-strong) solid var(--border-color);
    border-radius: calc(var(--size) * 0.25);
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .checkbox:hover::before {
    border-color: var(--hover-color);
  }

  /* Vi gjemmer checkbox input siden vi skal lage var egen */
  .checkbox input[type='checkbox'] {
    opacity: 0;
    position: absolute;
  }

  .checkbox:has(input[type='checkbox']:checked)::before {
    background-color: var(--checked-background-color);
  }

  .checkbox__checkmark,
  .checkbox__indeterminate {
    --icon-size: calc(var(--size) * 0.6);
    position: absolute;
    display: none;
    width: var(--icon-size);
    height: var(--icon-size);
    left: calc(((var(--size) - var(--icon-size)) / 2) + 0.4px);
    pointer-events: none;
  }

  .checkbox:has(input[type='checkbox']:indeterminate) .checkbox__indeterminate {
    display: block;
  }

  .checkbox:has(input[type='checkbox']:checked)::before,
  .checkbox:has(input[type='checkbox']:indeterminate)::before {
    background-color: var(--checked-background-color);
  }

  .checkbox:has(input[type='checkbox']:checked) .checkbox__checkmark {
    display: block;
  }

  .checkbox--invalid {
    --checked-background-color: var(--color-feedback-background-emphasized-error);
    --border-color: var(--color-feedback-border-emphasized-error);
  }

  /* 16px */
  .checkbox--small {
    --size: 1rem;
  }

  /* 18px */
  .checkbox--medium {
    --size: 1.125rem;
  }

  /* 20x */
  .checkbox--large {
    --size: 1.25rem;
  }
`;
