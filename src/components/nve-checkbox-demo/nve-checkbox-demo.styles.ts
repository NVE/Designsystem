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
    display: flex;
    font: var(--typography-label-x-small-light);
    gap: var(--spacing-x-small);
    align-items: center;
    line-height: var(--size);
  }

  .checkbox__input {
    position: relative;
    appearance: none;
    margin: 0;
    background-color: var(--color-neutrals-background-primary);
    border: var(--border-width-strong) solid var(--border-color);
    width: var(--size);
    height: var(--size);
    border-radius: calc(var(--size) * 0.25);
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
    --mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='7' viewBox='0 0 9 7' fill='none'%3E%3Cpath d='M2.81667 6.5L0 3.66667L0.833333 2.83333L2.81667 4.8L7.63333 0L8.46667 0.85L2.81667 6.5Z' fill='white'/%3E%3C/svg%3E");
    &::after {
      content: '';
      background-color: transparent;
      inset: 0;
      position: absolute;
      mask: var(--mask) no-repeat center / calc(var(--size) * 0.6) calc(var(--size) * 0.6);
    }
    &:hover {
      border-color: var(--hover-color);
    }
  }

  .checkbox__input:checked,
  .checkbox__input:indeterminate {
    background: var(--checked-background-color);
    &::after {
      background-color: var(--color-neutrals-background-primary);
    }
    &:hover {
      background-color: var(--hover-color);
    }
  }

  .checkbox__input:focus-visible {
    outline: var(--border-width-strong) solid var(--color-interactive-links-focus);
    outline-offset: 0px;
  }

  .checkbox__input:indeterminate::after {
    mask: none;
    background-color: var(--color-neutrals-background-primary);
    width: calc(var(--size) * 0.5);
    height: 1.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
