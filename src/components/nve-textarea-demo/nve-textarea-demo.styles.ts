import { css } from 'lit';

export default css`
  :host {
    --icon: 18px;
    --textarea-max-width: 100%;
    --textaraea-min-height: calc(var(--spacing-small) * 2 + var(--icon));
    width: 100%;
  }

  .textarea__container {
    box-sizing: border-box;
    width: 100%;
  }

  /* her setter hoved ramme styling siden det er denne komponenten som skal resizes og derfor ramme og ikonet ma ses bra ut */
  .textarea__control {
    position: relative;
    width: 100%;
    max-width: var(--textarea-max-width);
    min-height: var(--textaraea-min-height);
    min-width: var(--textaraea-min-height);
    resize: both;
    overflow: auto;
    background: var(--color-neutrals-background-primary);
    border-radius: var(--border-radius-small);
    transition: border-color 0.3s ease;
    border: var(--border-width-default) solid var(--color-neutrals-border-default);
    &:not(.textarea__control--readonly):not(.textarea__control--disabled):hover {
      border-color: var(--color-neutrals-foreground-primary);
    }
  }

  .textarea__control--disabled {
    opacity: 0.38;
    border: var(--border-width-default, 1px) solid var(--color-neutrals-border-default, #858b93);
    background: var(--color-neutrals-background-primary-contrast, #efeff1);
  }

  .textarea {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    padding-block: var(--spacing-small);
    padding-left: var(--spacing-x-small);
    padding-right: calc(var(--spacing-x-small));
    resize: none;
  }

  .textarea__control:focus-within {
    outline: var(--border-width-strong) solid var(--color-interactive-primary-border-focus);
    outline-offset: 0px;
  }

  .textarea:focus,
  .textarea:focus-visible {
    outline: none;
  }

  .textarea__control--readonly {
    background: var(--color-neutrals-background-secondary);
  }

  .textarea__control--filled {
    border: var(--border-width-default) solid var(--color-neutrals-border-subtle);
    background: var(--color-neutrals-background-primary-contrast);
    &:not(.textarea__control--readonly):hover {
      border: var(--border-width-default, 1px) solid var(--color-neutrals-border-default, #858b93);
    }
  }

  label {
    font: var(--typography-label-small);
    color: var(--color-neutrals-foreground-primary);
  }

  nve-icon {
    position: absolute;
    top: var(--spacing-small);
    right: var(--spacing-x-small);
    --icon-size: var(--icon);
  }

  /* Disabled */
  .textarea[disabled] {
    cursor: not-allowed;
  }

  /* Error  */
  .textarea__container--error {
    border-left: var(--border-width-strong) solid var(--color-feedback-border-emphasized-error);
    padding-left: var(--spacing-x-small);
    .textarea__control--error {
      border-color: var(--color-feedback-border-emphasized-error);
      .textarea {
        color: var(--color-feedback-foreground-error);
        padding-right: calc((var(--spacing-x-small) * 2) + var(--icon));
      }
    }

    nve-icon {
      color: var(--color-feedback-foreground-error);
    }
  }

  .textarea__error-msg {
    font: var(--typography-detailtext-caption);
    color: var(--color-feedback-foreground-error);
  }
`;
