import { css } from 'lit';

export default css`
  :host {
    --size: 1rem;
    --_checked-background-color: var(--color-interactive-background-primary-enabled);
    --_border-color: var(--color-interactive-border-primary-enabled);
    --_hover-color: var(--color-interactive-background-primary-hover);
    --_font: var(--typography-label-x-small-light);
  }

  .checkbox {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    width: fit-content;
    font: var(--_font);
    line-height: 1;
    color: var(--color-neutrals-foreground-primary);
    margin-inline: 0;
    gap: var(--spacing-x-small);
    align-items: center;
    line-height: var(--size);
    position: relative;
  }

  /* Vi gjemmer checkbox input siden vi lager vår egen med ::before */
  .checkbox input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  /* Sjekkboks custom styling */
  .checkbox::before {
    content: '';
    box-sizing: border-box;
    width: var(--size);
    height: var(--size);
    border: var(--border-width-strong) solid var(--_border-color);
    border-radius: calc(var(--size) * 0.25);
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .checkbox:hover:not(.checkbox--disabled)::before {
    box-shadow: 0 0 0 3px var(--color-interactive-border-primary-hover);
  }

  /* Sjekket styling */
  .checkbox:has(input[type='checkbox']:checked)::before {
    background-color: var(--_checked-background-color);
  }

  .checkbox:has(input[type='checkbox']:checked):hover:not(.checkbox--disabled)::before {
    background-color: var(--_hover-color);
  }

  .checkbox:has(input[type='checkbox']:checked):hover:not(.checkbox--disabled) {
    --_border-color: var(--_hover-color);
  }

  /* Sjekkmark er 10x8 i figma. For a sikre skallerbarhet nar font storrelsen endres kalulerer vi med 
  rem og med 0.625 som tilsvarer 10px og 0.5 som tilsvarer 8px */
  .checkbox__checkmark {
    position: absolute;
    width: 0.625rem;
    height: 0.5rem;
    display: none;
    left: calc((var(--size) - 0.625rem) / 2);
  }

  /* Indeterminate er 8x2 i figma. For a sikre skallerbarhet nar font storrelsen endres kalulerer vi med 
  rem og med 0.5 som tilsvarer 8px og 0.125 som tilsvarer 2px */
  .checkbox__indeterminate {
    position: absolute;
    width: 0.5rem;
    height: 0.125rem;
    display: none;
    left: calc((var(--size) - 0.5rem) / 2);
  }

  .checkbox:has(input[type='checkbox']:checked) .checkbox__checkmark,
  .checkbox:has(input[type='checkbox']:indeterminate) .checkbox__indeterminate {
    display: block;
  }

  .checkbox:has(input[type='checkbox']:checked)::before,
  .checkbox:has(input[type='checkbox']:indeterminate)::before {
    background-color: var(--_checked-background-color);
  }

  /* Størrelser */
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
    --_font: var(--typography-label-small-light);
  }

  .checkbox--invalid {
    --_checked-background-color: var(--color-feedback-background-emphasized-error);
    --_border-color: var(--color-feedback-border-emphasized-error);
  }

  .checkbox--disabled {
    --_checked-background-color: var(--color-interactive-background-primary-disabled);
    --_border-color: var(--color-interactive-border-primary-disabled);
  }

  .checkbox--disabled,
  .checkbox--disabled input[type='checkbox'] {
    cursor: not-allowed;
  }

  .checkbox:has(input[type='checkbox']:focus-visible)::before {
    outline: 2px solid var(--color-interactive-border-accessibility-focus);
  }
`;
