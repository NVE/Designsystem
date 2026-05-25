import { css } from 'lit';

export default css`
  :host {
    --_icon-size: var(--font-size-medium);
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
    .input,
    .input__control {
      cursor: not-allowed;
    }
    .input nve-icon {
      color: var(--color-neutrals-foreground-subtle);
    }
  }

  .field--readonly {
    --_color: var(--color-neutrals-foreground-subtle);
    --_background-color: var(--color-neutrals-background-secondary);
    --_border-color: transparent;
  }

  .field--error {
    .input__control,
    .input nve-icon {
      color: var(--color-feedback-foreground-error);
    }
  }

  .field--filled {
    --_background-color: var(--color-neutrals-background-primary-contrast);
    --_border-color: var(--color-interactive-border-tertiary-enabled);
  }

  /* for å inkludere ikoner i input, brukes denne wrappen */
  .input {
    position: relative;
    width: 100%;
    display: flex;
    gap: 4px;
    align-items: center;
    overflow: auto;
    box-sizing: border-box;
    background: var(--_background-color);
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid var(--_border-color);
    transition: border-color 0.3s ease;
    nve-icon {
      --icon-size: var(--_icon-size);
    }
    &:focus-within {
      outline: var(--border-width-strong, 2px) solid var(--color-interactive-primary-border-focus, #008ffb);
    }
  }

  .field:not(.field--readonly):not(.field--disabled) .input:hover {
    --_border-color: var(--color-interactive-border-secondary-hover);
  }

  .input__control:focus,
  .input__control:focus-visible {
    outline: none;
  }

  .input__control {
    font: var(--typography-body-medium);
    flex: 1;
    color: var(--_color);
    font-size: 1rem;
    background-color: transparent;
    border: none;
    height: var(--sizing-fixed-sizing-large);
    padding-block: 0;
  }

  .input--medium {
    padding-inline: var(--spacing-x-small) var(--spacing-small);
    .input__control {
      height: var(--sizing-fixed-sizing-large);
    }
  }

  .input--small {
    padding-inline: var(--spacing-fixed-spacing-2x-small) var(--spacing-x-small);
    .input__control {
      height: var(--sizing-fixed-sizing-medium);
    }
  }

  .input--large {
    padding-inline: var(--spacing-small) var(--spacing-medium);
    .input__control {
      height: var(--sizing-fixed-sizing-x-large);
    }
  }

  .input__clear-button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    color: var(--color-interactive-foreground-tertiary-enabled, #60656c);
    transition: color 0.3s ease;
    nve-icon {
      --icon-size: var(--_icon-size);
    }
  }
  .input__clear-button:hover {
    color: var(--color-interactive-foreground-tertiary-hover);
  }

  ::slotted([slot='start']) {
    --icon-size: var(--font-size-medium);
  }
`;
