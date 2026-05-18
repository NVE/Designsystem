import { css } from 'lit';

export default css`
  :host {
    --icon: 18px;
    --textarea-max-width: 100%;
    --textarea-min-height: calc(var(--spacing-small) * 2 + var(--icon));
    width: 100%;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
    box-sizing: border-box;
    width: 100%;
    --_color: var(--color-neutrals-foreground-primary);
    --_border-color: var(--color-interactive-border-secondary-enabled);
    --_background-color: var(--color-neutrals-background-primary);
    color: var(--_color);
  }

  .field--disabled {
    --_color: var(--color-interactive-background-primary-disabled);
    --_background-color: var(--color-interactive-background-secondary-disabled);
    --_border-color: var(--color-interactive-border-secondary-disabled);
    .textarea,
    .textarea__control {
      cursor: not-allowed;
    }
    .textarea nve-icon {
      color: var(--color-neutrals-foreground-subtle);
    }
  }

  .field--readonly {
    --_color: var(--color-neutrals-foreground-subtle);
    --_background-color: var(--color-neutrals-background-secondary);
    --_border-color: transparent;
  }

  .field--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    --_border-color: var(--color-feedback-border-emphasized-error);
    .field__hint-text,
    .textarea nve-icon {
      color: var(--color-feedback-foreground-error);
    }
  }

  .field--filled {
    --_background-color: var(--color-neutrals-background-primary-contrast);
    --_border-color: var(--color-interactive-border-tertiary-enabled);
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

  /* for å inkludere ikoner i textarea, brukes denne wrappen for å endre størrelsen i textarea. 
  selve textare__controller får ingen resizing. 
  */
  .textarea {
    position: relative;
    width: 100%;
    max-width: var(--textarea-max-width);
    min-height: var(--textarea-min-height);
    min-width: var(--textarea-min-height);
    resize: both;
    overflow: auto;
    background: var(--_background-color);
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid var(--_border-color);
    transition: border-color 0.3s ease;
    nve-icon {
      position: absolute;
      top: var(--spacing-small);
      right: var(--spacing-x-small);
      --icon-size: var(--icon);
    }
    &:focus-within {
      outline: var(--border-width-strong, 2px) solid var(--color-interactive-primary-border-focus, #008ffb);
    }
  }

  .field:not(.field--readonly):not(.field--disabled) .textarea:hover {
    --_border-color: var(--color-interactive-border-secondary-hover);
  }

  .textarea:focus,
  .textarea:focus-visible {
    outline: none;
  }

  .textarea__control {
    width: 100%;
    height: 100%;
    font: var(--typography-body-medium);
    color: var(--_color);
    font-size: 1rem;
    display: block;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    padding: var(--spacing-small);
    resize: none;
  }
`;
