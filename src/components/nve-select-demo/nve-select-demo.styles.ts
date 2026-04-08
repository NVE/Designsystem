import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --listbbox-max-height: 220px;
  }

  .field {
    display: flex;
    border: none;
    flex-direction: column;
    gap: var(--spacing-x-small);
    --_border-color: var(--color-neutrals-border-default);
    --_background-color: var(--color-neutrals-background-primary);
    --_border-color-hover: var(--color-neutrals-foreground-primary);
    --_options-background-selected: var(--color-neutrals-background-secondary);
    --_options-background-active: var(--color-neutrals-background-primary-contrast);
  }

  .field--disabled {
    input,
    .combobox__control,
    .combobox__value__tag {
      cursor: not-allowed;
    }
    /* Standard disabled knapp har veldig svak font farge, med var opacity 0.35 teksten blir usynlig  */
    .combobox__value__tag {
      color: var(--color-neutrals-foreground-primary);
    }
    .combobox__control {
      opacity: 0.38;
    }
  }

  .field--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    .field__help-text {
      color: var(--color-feedback-foreground-error);
    }
  }

  .field__help-text {
    margin: 0;
    color: var(--color-neutrals-foreground-primary, #141414);
    font: var(--typography-detailtext-caption);
  }

  .combobox {
    border-radius: var(--border-radius-small);
    &:focus-within {
      outline: var(--border-width-strong, 2px) solid var(--color-interactive-primary-border-focus, #008ffb);
    }
  }

  .combobox__control {
    display: flex;
    anchor-name: --combobox-anchor;
    align-items: center;
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    border-width: var(--border-width-default);
    border-style: solid;
    border-color: var(--_border-color);
    background: var(--_background-color);
    transition: border-color 0.3s ease;
  }

  .field:not(.field--disabled):not(.field--readonly) .combobox__control:hover {
    border-color: var(--_border-color-hover);
  }

  .field--error {
    --_border-color: var(--color-feedback-border-emphasized-error);
    .combobox__control input,
    .combobox__control nve-icon {
      color: var(--color-feedback-foreground-error);
    }
  }

  .field--filled {
    --_border-color: var(--color-neutrals-border-subtle);
    --_background-color: var(--color-neutrals-background-primary-contrast,);
    --_border-color-hover: var(--color-neutrals-border-default);
    --_options-background-selected: var(--color-neutrals-background-primary);
    --_options-background-active: var(--color-neutrals-background-primary);
  }

  .field--readonly {
    --_background-color: var(--color-neutrals-background-secondary);
  }

  .combobox__control--small {
    padding: var(--spacing-2x-small) var(--spacing-x-small);
    nve-icon {
      --icon-size: 20px;
    }
  }

  .combobox__control--medium {
    padding: var(--spacing-x-small) var(--spacing-medium);
  }

  .combobox__control--medium.combobox__control--multiselect {
    padding: var(--spacing-x-small);
  }

  .combobox__control--large {
    padding: var(--spacing-small) var(--spacing-medium);
  }

  .combobox__control--large.combobox__control--multiselect {
    padding: var(--spacing-small) var(--spacing-x-small);
  }

  .combobox__value {
    display: flex;
    width: 100%;
    gap: var(--border-radius-small, 4px);
    flex-wrap: wrap;
  }

  .combobox__value input {
    border: none;
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    flex: 1;
    min-width: 80px;
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  .icon__error {
    --icon-size: 20px;
  }

  /* LISTBOX */
  .combobox__listbox {
    position: absolute;
    display: flex;
    gap: 2px;
    overflow-y: auto;
    max-height: var(--listbbox-max-height);
    list-decoration: none;
    position-anchor: --combobox-anchor;
    position-area: bottom;
    width: anchor-size();
    flex-direction: column;
    box-shadow: var(--box-shadow-soft);
    margin-top: var(--spacing-x-small);
    padding: var(--border-radius-small);
    border-radius: var(--border-radius-small);
    border-width: var(--border-width-default);
    border-style: solid;
    border-color: var(--_border-color);
    background: var(--_background-color);
    z-index: 10;
    position-try-fallbacks: top;
  }

  .combobox--expanded .combobox__listbox {
    display: flex;
  }

  .icon__arrow {
    margin-left: auto;
    transition: transform 150ms ease-in-out;
    transform-origin: center;
  }

  .combobox--expanded .icon__arrow {
    transform: rotate(180deg);
  }

  .combobox__listbox__option {
    display: flex;
    padding: var(--spacing-x-small);
    gap: var(--spacing-x-small);
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    border-radius: var(--border-radius-small);
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  .combobox__listbox__option--disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  .combobox__listbox__option--active,
  .combobox__listbox__option:not(.combobox__listbox__option--disabled):hover {
    background-color: var(--_options-background-active);
  }

  .combobox__listbox__option--selected {
    background-color: var(--_options-background-selected);
  }

  .combobox__value__tag {
    display: flex;
    font: var(--typography-label-x-small);
    align-items: center;
    gap: var(--spacing-2x-small, 4px);
    border: none;
    border-radius: var(--border-radius-small, 4px);
    background: var(--_options-background-selected);
    cursor: pointer;
    nve-icon {
      --icon-size: 20px;
    }
  }

  .combobox__clear-button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
