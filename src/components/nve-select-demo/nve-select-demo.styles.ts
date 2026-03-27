import { css } from 'lit';

export default css`
  .label {
    display: block;
    font: var(--typography-label-small);
    color: var(--color-neutrals-foreground-primary);
    width: 100%;
  }

  .combobox {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: var(--spacing-x-small);
  }

  .combobox__input {
    display: flex;
    gap: 4px;
    box-sizing: border-box;
    min-height: var(--sizing-fixed-sizing-x-large);
    padding: var(--spacing-small) var(--spacing-medium);
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid var(--color-neutrals-border-default);
    background: var(--color-neutrals-background-primary);
    transition: border-color 0.3s ease;
    &:not([disabled]):hover {
      border-color: var(--color-neutrals-foreground-primary);
    }
    &:focus-within {
      outline: var(--border-width-strong, 2px) solid var(--color-interactive-primary-border-focus, #008ffb);
    }
  }

  .combobox__input nve-icon {
    margin-left: auto;
    transition: transform 150ms ease-in-out;
    transform-origin: center;
  }

  .combobox__input[aria-expanded='true'] nve-icon {
    transform: rotate(180deg);
  }

  .combobox__input input {
    border: none;
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    &:focus {
      outline: none;
    }
  }

  .combobox__listbox {
    position: absolute; /* 2. Position the element */
    display: none;
    top: calc(100% + var(--spacing-x-small, 4px)); /* 3. Position the element below the input */
    box-sizing: border-box;
    padding: var(--border-radius-small);
    flex-direction: column;
    width: 100%;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--color-neutrals-border-default);
    background: var(--color-neutrals-background-primary);
    z-index: 10;
  }

  .combobox__listbox--expanded {
    display: flex;
  }

  .combobox__tag {
    display: flex;
    padding: 2px var(--spacing-2x-small, 4px);
    align-items: center;
    gap: var(--spacing-2x-small, 4px);
    border: none;
    border-radius: var(--border-radius-small, 4px);
    background: var(--color-neutrals-background-secondary, #e4e5e7);
    cursor: pointer;
    nve-icon {
      --icon-size: 20px;
    }
  }
`;
