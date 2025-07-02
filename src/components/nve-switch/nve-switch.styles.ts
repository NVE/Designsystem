import { css } from 'lit';

export default css`
  .switch {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    --hover-offset: 0px;
  }
  .switch__control {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--sizing-2x-small);
    border-radius: 1rem;
    position: relative;
    --left: calc(0% + 4px);
    width: 48px;
    --on-color: var(--neutrals-foreground-subtle);
    --off-color: var(--neutrals-background-secondary);
    --label-color: var(--neutrals-foreground-primary);
    background-color: var(--off-color);
    transition: background-color 0.3s ease-in-out;
  }
  .switch--checked .switch__control {
    /* 100% - bredde på thumb + 4px */
    --left: calc(100% - var(--font-size-xsmall) - 4px);
    --on-color: var(--neutrals-background-secondary);
    --off-color: var(--neutrals-foreground-subtle);
  }
  .switch__thumb {
    position: absolute;
    left: var(--left);
    height: 18px;
    width: 18px;
    border-radius: 2rem;
    translate: var(--hover-offset, 0);
    z-index: 1;
    background-color: var(--on-color);
    transition:
      left 0.3s ease-in-out,
      translate 0.1s,
      background-color 0.3s ease-in-out;
  }
  .switch__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: var(--on-color);
    transition: color 0.3s ease-in-out;
  }

  ::slotted(nve-icon) {
    line-height: 1;
    font-size: var(--font-size-small);
  }

  .switch__icon.switch__onicon {
    left: calc(0% + 6px);
  }

  .switch__icon.switch__officon {
    left: calc(100% - var(--font-size-2xsmall) - 6px);
  }

  .switch input[type='checkbox'] {
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }
  .switch__label {
    font: var(--label-medium-light);
    color: var(--label-color);
  }
  .switch.switch--focused:has(:focus-visible) .switch__control {
    outline: 2px solid var(--interactive-links-focus);
  }
  .switch:not(.switch--disabled):hover {
    --hover-offset: 2px;
  }
  .switch:not(.switch--disabled).switch--checked:hover {
    --hover-offset: -2px;
  }
  .switch.switch--disabled {
    opacity: var(--disabled);
  }
`;
