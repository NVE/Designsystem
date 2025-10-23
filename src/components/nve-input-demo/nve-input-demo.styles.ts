import { css } from 'lit';

export default css`
  .input {
    display: flex;
    box-sizing: border-box;
    padding: var(--spacing-small) var(--spacing-x-small);
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-x-small);
    border-radius: var(--border-radius-small);
    border: var(--border-width-default) solid var(--neutrals-border-default);
    background: var(--neutrals-background-primary);

    &:focus-within {
      outline: var(--border-width-strong) solid var(--interactive-links-focus, #1e6fdc);
      outline-offset: -2px;
    }
    input {
      border: none;
      width: 100%;
      font: var(--body-small);
      background: inherit;
    }
    input:focus {
      outline: none;
    }
  }

  .input--error {
    border-color: var(--feedback-background-emphasized-error);
    nve-icon {
      color: var(--feedback-background-emphasized-error);
    }
    &:focus-within {
      outline-offset: 0.5px;
    }
  }

  .input--disabled {
    border-color: var(--neutrals-border-disabled);
    opacity: 0.38;
  }

  .input--filled {
    background: var(--neutrals-background-primary-contrast);
    border-color: var(--neutrals-background-secondary);
  }

  .input--readonly {
    background: var(--neutrals-background-secondary);
    nve-icon {
      color: var(--neutrals-foreground-subtle);
    }
  }

  .input--medium {
    height: var(--fixed-sizing-large);
  }

  .input--small {
    height: var(--fixed-sizing-medium);
  }

  .input--large {
    height: var(--fixed-sizing-x-large);
  }

  .input__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-small);
  }

  .input__error {
    color: var(--feedback-background-emphasized-error);
    font: var(--body-small);
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  .button__clear {
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    nve-icon {
      --icon-size: 20px;
    }
  }

  .label {
    display: flex;
    gap: var(--spacing-xx-small);
    width: fit-content;
  }

  .label__required-text {
    font: var(--label-x-small-light);
    color: var(--neutrals-foreground-colored);
  }

  .label--hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  ::slotted(nve-icon) {
    color: var(--neutrals-foreground-subtle);
  }
`;
