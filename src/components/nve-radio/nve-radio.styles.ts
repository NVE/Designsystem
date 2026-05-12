import { css } from 'lit';

export default css`
  :host {
    --radio-size: 18px;
    display: inline-block;
    outline: none;
  }

  :host {
    width: fit-content;
  }

  .radio {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    font: var(--typography-label-x-small-light);
    line-height: 1;
    cursor: pointer;
    --_color: var(--color-interactive-foreground-secondary-enabled);
    --_border-color: var(--color-neutrals-foreground-primary);
  }

  .radio--medium {
    --radio-size: 18px;
  }

  .radio--small {
    --radio-size: 14px;
  }

  .radio--large {
    --radio-size: 22px;
    font: var(--typography-label-small-light);
  }

  .radio__circle {
    width: var(--radio-size);
    height: var(--radio-size);
    border: 2px solid var(--_border-color);
    border-radius: 50%;
    box-sizing: border-box;
    transition: box-shadow 0.3s ease;
  }

  .radio__circle::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--_border-color);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  .radio--checked .radio__circle::after {
    transform: scale(0.7);
  }

  :host(:focus-visible) .radio__circle {
    outline: 2px solid var(--color-interactive-border-accessibility-focus);
  }

  .radio:hover:not(.radio--disabled) .radio__circle {
    box-shadow: 0 0 0 3px var(--color-interactive-border-primary-hover);
  }

  .radio--invalid {
    --_border-color: var(--color-feedback-border-emphasized-error);
  }

  .radio--disabled {
    --_border-color: var(--color-interactive-border-primary-disabled);
    --_color: var(--color-interactive-foreground-secondary-disabled);
    cursor: not-allowed;
  }
  .radio__label {
    line-height: 1;
  }
`;
