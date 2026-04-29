import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --listbox-max-height: 220px;
    --first-tag-max-width: unset;
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
    .combobox__value__tag,
    .combobox__value__indicator {
      cursor: not-allowed;
    }
    /* Standard disabled knapp har veldig svak font farge, med var opacity 0.35 teksten blir usynlig  */
    .combobox__value__tag,
    .combobox__value__indicator {
      color: var(--color-neutrals-foreground-primary);
    }
    .combobox__control {
      opacity: 0.38;
    }
  }

  .field--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    .field__hint-text {
      color: var(--color-feedback-foreground-error);
    }
  }

  .field__hint-text {
    margin: 0;
    color: var(--color-neutrals-foreground-primary);
    font: var(--typography-detailtext-caption);
    text-align: start;
  }

  .field__help-text {
    margin: 0;
    margin-top: calc(var(--spacing-2x-small) - var(--spacing-x-small));
    color: var(--color-neutrals-foreground-subtle);
    font: var(--typography-detailtext-caption);
    text-align: start;
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
    --_options-background-selected: var(--color-neutrals-background-secondary);
    --_options-background-active: var(--color-neutrals-background-primary);
  }

  .field--readonly {
    --_background-color: var(--color-neutrals-background-secondary);
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

  .combobox__value__input {
    border: none;
    font: var(--typography-body-small);
    color: var(--color-neutrals-foreground-primary);
    flex: 1;
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  /* Når multiselect men ikke skriftlig input, input skjules */
  .combobox__value__input--multiselect:not(.combobox__value__input--searchable) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  /* Når multiselect og skriftlig input, men ikke wrap, min-width settes til 0. Den skal justeres programmatisk */
  .combobox__value__input--searchable.combobox__value__input--multiselect:not(.combobox__value__input--wrap) {
    min-width: 0;
  }

  .combobox__value__input--wrap {
    min-width: 50px;
  }

  /* LISTBOX */
  .combobox__listbox {
    position: absolute;
    display: flex;
    gap: 2px;
    overflow-y: auto;
    max-height: var(--listbox-max-height);
    list-style: none;
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
    opacity: 0.38;
  }

  .combobox__listbox__option--selected {
    background-color: var(--_options-background-selected);
  }

  .combobox__listbox__option--active,
  .combobox__listbox__option--selected.combobox__listbox__option--active,
  .combobox__listbox__option:not(.combobox__listbox__option--disabled):hover {
    background-color: var(--_options-background-active);
  }

  .combobox__value__indicator,
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

  .combobox__value__tag {
    max-width: var(--first-tag-max-width);
  }

  .combobox__value__tag span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .combobox__clear-button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .icon__error {
    --icon-size: 20px;
  }

  .icon__arrow {
    margin-left: auto;
    transition: transform 150ms ease-in-out;
    transform-origin: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
`;
