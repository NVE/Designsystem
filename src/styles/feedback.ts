import { css } from 'lit';

export default css`
  .feedback--default {
    color: var(--_color);
    background: var(--_background);
    border-color: var(--_border-color);
  }

  .feedback--subtle {
    color: var(--_color-subtle);
    background: var(--_background-subtle);
    border-color: var(--_border-color-subtle);
  }

  .feedback--emphasized {
    color: var(--_color-emphasized);
    background: var(--_background-emphasized);
    border-color: var(--_border-color-emphasized);
  }

  .feedback--neutral {
    --_color: var(--color-feedback-foreground-on-bg-subtle-neutral);
    --_background: var(--color-feedback-background-default-neutral);
    --_border-color: transparent;

    --_color-emphasized: var(--color-feedback-foreground-on-bg-emphasized-neutral);
    --_background-emphasized: var(--color-feedback-background-emphasized-neutral);
    --_border-color-emphasized: transparent;

    --_color-subtle: var(--color-feedback-foreground-on-bg-subtle-neutral);
    --_background-subtle: var(--color-feedback-background-subtle-neutral);
    --_border-color-subtle: var(--color-feedback-border-subtle-neutral);
  }

  .feedback--info {
    --_color: var(--color-feedback-foreground-on-bg-subtle-info);
    --_background: var(--color-feedback-background-default-info);
    --_border-color: transparent;

    --_color-emphasized: var(--color-feedback-foreground-on-bg-emphasized-info);
    --_background-emphasized: var(--color-feedback-background-emphasized-info);
    --_border-color-emphasized: transparent;

    --_color-subtle: var(--color-feedback-foreground-on-bg-subtle-info);
    --_background-subtle: var(--color-feedback-background-subtle-info);
    --_border-color-subtle: var(--color-feedback-border-subtle-info);
  }

  .feedback--error {
    --_color: var(--color-feedback-foreground-on-bg-subtle-error);
    --_background: var(--color-feedback-background-default-error);
    --_border-color: transparent;

    --_color-emphasized: var(--color-feedback-foreground-on-bg-emphasized-error);
    --_background-emphasized: var(--color-feedback-background-emphasized-error);
    --_border-color-emphasized: transparent;

    --_color-subtle: var(--color-feedback-foreground-on-bg-subtle-error);
    --_background-subtle: var(--color-feedback-background-subtle-error);
    --_border-color-subtle: var(--color-feedback-border-subtle-error);
  }

  .feedback--success {
    --_color: var(--color-feedback-foreground-on-bg-subtle-success);
    --_background: var(--color-feedback-background-default-success);
    --_border-color: transparent;

    --_color-emphasized: var(--color-feedback-foreground-on-bg-emphasized-success);
    --_background-emphasized: var(--color-feedback-background-emphasized-success);
    --_border-color-emphasized: transparent;

    --_color-subtle: var(--color-feedback-foreground-on-bg-subtle-success);
    --_background-subtle: var(--color-feedback-background-subtle-success);
    --_border-color-subtle: var(--color-feedback-border-subtle-success);
  }

  .feedback--warning {
    --_color: var(--color-feedback-foreground-on-bg-subtle-warning);
    --_background: var(--color-feedback-background-default-warning);
    --_border-color: transparent;

    --_color-emphasized: var(--color-feedback-foreground-on-bg-emphasized-warning);
    --_background-emphasized: var(--color-feedback-background-emphasized-warning);
    --_border-color-emphasized: transparent;

    --_color-subtle: var(--color-feedback-foreground-on-bg-subtle-warning);
    --_background-subtle: var(--color-feedback-background-subtle-warning);
    --_border-color-subtle: var(--color-feedback-border-subtle-warning);
  }
`;
