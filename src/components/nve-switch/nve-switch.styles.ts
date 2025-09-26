import { css } from 'lit';

export default css`
  .switch {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    --hover-offset: 0px;
    cursor: pointer;
  }
  .switch.switch--disabled {
    cursor: not-allowed;
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
    --label-color: var(--neutrals-foreground-primary);
    --on-color: var(--neutrals-foreground-subtle);
    --off-color: var(--neutrals-background-secondary);
    --thumb-color: var(--on-color);
    background-color: var(--off-color);
    transition: background-color 0.3s ease-in-out;
  }

  .switch.switch--disabled .switch__control {
    opacity: 0.38;
  }

  .switch--checked .switch__control {
    /* 100% - bredde på thumb + 4px */
    --left: calc(100% - var(--font-size-xsmall) - 4px);
    --thumb-color: var(--off-color);
    background-color: var(--on-color);
  }

  .switch__thumb {
    position: absolute;
    left: var(--left);
    height: 18px;
    width: 18px;
    border-radius: 2rem;
    translate: var(--hover-offset, 0);
    z-index: 1;
    background-color: var(--thumb-color);
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
    /* Disse fargene skal være motsatt av bakgrunnen */
    color: var(--off-color);
  }

  .switch__icon.switch__officon {
    left: calc(100% - var(--font-size-2xsmall) - 6px);
    color: var(--on-color);
  }

  .switch input[type='checkbox'] {
    clip: rect(0, 0, 0, 0);
    position: absolute;
  }

  .switch.switch--focused:has(:focus-visible) .switch__control {
    outline: 2px solid var(--interactive-links-focus);
    outline-offset: 1px;
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

  .switch--label-start {
    justify-content: flex-end;
    flex-direction: row-reverse;
  }

  .switch--primary {
    &.switch--checked .switch__control {
      --on-color: var(--interactive-primary-foreground-border-focus);
      --off-color: var(--neutrals-background-secondary);
    }
  }
`;
