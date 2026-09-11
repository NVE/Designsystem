import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --height: 1.5rem;
    --width: 3rem;
    --thumb-size: 1.125rem;
    --thumb-offset: calc((var(--height) - var(--thumb-size)) / 2);
    --thumb-background: var(--color-interactive-foreground-secondary-enabled);
    --thumb-background-checked: var(--color-interactive-foreground-primary-enabled);
    --control-background: var(--color-interactive-background-secondary-enabled);
    --control-background-checked: var(--color-interactive-background-primary-enabled);
    --control-background-hover: var(--color-interactive-background-secondary-hover);
    --control-background-checked-hover: var(--color-interactive-background-primary-hover);
  }

  .switch {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-x-small);
    cursor: pointer;
    font: var(--typography-label-medium-light);
    color: var(--color-neutrals-foreground-primary);
  }

  .switch__label--start {
    flex-direction: row-reverse;
  }

  .switch__input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  .switch__input:focus-visible + .switch__control {
    outline: 2px solid var(--color-interactive-border-accessibility-focus);
    outline-offset: 2px;
  }

  .switch__control {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius-pill);
    background: var(--control-background);
    transition: background-color 0.3s ease-in-out;
  }

  .switch__thumb {
    content: '';
    position: absolute;
    left: var(--thumb-offset);
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background: var(--thumb-background);
    transition:
      transform 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  .switch--primary {
    --control-background-checked: var(--color-feedback-background-emphasized-info);
    --control-background-checked-hover: var(--color-supplemental-emphasized-blue-background);
  }

  .switch__input:checked + .switch__control {
    background-color: var(--control-background-checked);
  }

  .switch__input:not(:disabled) + .switch__control:hover {
    background-color: var(--control-background-hover);
  }

  .switch__input:checked:not(:disabled) + .switch__control:hover {
    background-color: var(--control-background-checked-hover);
  }

  .switch__input:checked + .switch__control .switch__thumb {
    background-color: var(--thumb-background-checked);
    transform: translateX(calc(var(--width) - var(--thumb-size) - var(--thumb-offset) * 2));
  }

  /* Ikoner */
  ::slotted(nve-icon) {
    line-height: 1;
    font-size: var(--font-size-small);
  }

  .switch__icon {
    display: none;
    position: absolute;
  }

  .switch__officon {
    display: block;
    right: var(--thumb-offset);
    color: var(--thumb-background);
  }

  .switch__input:checked + .switch__control {
    .switch__officon {
      display: none;
    }

    .switch__onicon {
      display: block;
      left: var(--thumb-offset);
      color: var(--thumb-background-checked);
    }
  }

  /* Deaktivert */
  .switch--disabled {
    cursor: not-allowed;
    --control-background: var(--color-interactive-background-secondary-disabled);
    --control-background-checked: var(--color-interactive-background-primary-disabled);
    --thumb-background: var(--color-interactive-foreground-secondary-disabled);
    --thumb-background-checked: var(--color-interactive-foreground-primary-disabled);
  }
`;
