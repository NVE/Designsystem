import { css } from 'lit';

export default css`
  .switch {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
  }
  .switch .switch__control {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--sizing-2x-small);
    border-radius: 1rem;
    position: relative;
    --left: calc(0% + 4px);
    width: var(--sizing-medium);
    --on-color: var(--neutrals-foreground-subtle);
    --off-color: var(--neutrals-background-secondary);
    --label-color: var(--neutrals-foreground-primary);
    background-color: var(--off-color);
    transition: background-color 0.4s ease-in-out;
  }
  .switch.switch--checked .switch__control {
    /* 100% - bredde på thumb + 4px */
    --left: calc(100% - var(--font-size-xsmall) - 4px);
    --on-color: var(--neutrals-background-secondary);
    --off-color: var(--neutrals-foreground-subtle);
  }
  .switch .switch__control .switch__thumb {
    position: absolute;
    left: var(--left);
    height: var(--font-size-xsmall);
    width: var(--font-size-xsmall);
    border-radius: 2rem;
    z-index: 1;
    background-color: var(--on-color);
    transition:
      left 0.4s ease-in-out,
      background-color 0.4s ease-in-out;
  }
  .switch .switch__control .switch__icon {
    height: var(--font-size-2xsmall);
    width: var(--font-size-2xsmall);
    font-size: var(--font-size-2xsmall);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: var(--on-color);
    transition: color 0.4s ease-in-out;
  }
  .switch .switch__control .switch__icon.switch__onicon {
    left: calc(0% + 6px);
  }

  .switch .switch__control .switch__icon.switch__officon {
    left: calc(100% - var(--font-size-2xsmall) - 6px);
  }

  .switch input[type='checkbox'] {
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }
  .switch .switch__label {
    font: var(--label-medium-light);
    color: var(--label-color);
  }
  .switch.switch--focused:has(:focus-visible) .switch__control {
    outline: 2px solid var(--interactive-links-focus);
  }
  .switch.switch--disabled {
    opacity: var(--disabled);
  }
`;
