import { css } from 'lit';

export default css`
  :host {
    --radio-size: 18px;
  }
  .radio {
    display: flex;
    align-items: center;
    position: relative;
    gap: var(--spacing-x-small);
    font: var(--typography-label-x-small-light);
    line-height: 1;
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
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .radio__circle {
    width: var(--radio-size);
    height: var(--radio-size);
    border: 2px solid var(--_border-color);
    border-radius: 50%;
    box-sizing: border-box;
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

  .radio__input:checked + .radio__circle::after {
    transform: scale(0.7);
  }

  :host(:focus-visible) {
    outline: none;
  }
  :host(:focus-visible) .radio__circle {
    outline: 2px solid var(--color-interactive-border-accessibility-focus);
  }

  .radio--invalid {
    --_border-color: var(--color-feedback-border-emphasized-error);
  }

  .radio--disabled {
    --_border-color: var(--color-interactive-border-primary-disabled);
    --_color: var(--color-interactive-foreground-secondary-disabled);
    cursor: not-allowed;
  }
`;
