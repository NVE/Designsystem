import { css } from 'lit';

export default css`
  :host {
    --left-stroke-width: 6px;
  }

  .alert {
    display: flex;
    align-items: center;
    padding: var(--spacing-medium) var(--spacing-large) var(--spacing-medium)
      calc(var(--spacing-large) - var(--left-stroke-width));
    border-radius: var(--border-radius-small);
    font: var(--typography-body-medium);
    border-left: var(--left-stroke-width) solid transparent;
  }

  .alert__button {
    display: flex;
    background: transparent;
    color: inherit;
    align-items: center;
    justify-content: center;
    width: var(--font-size-large);
    height: var(--font-size-large);
    border-radius: var(--border-radius-small);
    border: none;
    cursor: pointer;
    margin-left: var(--spacing-x-small);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    nve-icon {
      --icon-size: var(--font-size-large);
    }
  }

  .alert__message {
    flex: 1;
  }

  .alert--hidden {
    display: none; /* this will most likely not work with transitions */
  }

  ::slotted([slot='label']),
  label {
    font: var(--typography-label-large);
    margin-right: var(--spacing-medium);
  }

  ::slotted(nve-icon),
  nve-icon:not(.alert__button nve-icon) {
    --icon-size: var(--font-size-large);
    margin-right: var(--spacing-x-small);
  }

  /*variants */
  .alert--primary {
    background-color: var(--color-feedback-background-default-info);
    color: var(--color-feedback-foreground-on-bg-subtle-info, #142843);
    .alert__button:hover {
      background: var(--color-feedback-background-subtle-info);
    }
  }
  .alert--danger {
    background-color: var(--color-feedback-background-default-error);
    color: var(--color-feedback-foreground-on-bg-subtle-error, #581d1d);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-error);
    }
  }
  .alert--success {
    background-color: var(--color-feedback-background-default-success);
    color: var(--color-feedback-foreground-on-bg-subtle-success, #122b21);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-success);
    }
  }

  .alert--neutral {
    background-color: var(--color-feedback-background-default-neutral);
    color: var(--color-feedback-foreground-on-bg-subtle-neutral, #0d0d0e);
    .alert__button:hover {
      background: var(--color-feedback-background-subtle-neutral);
    }
  }
  .alert--warning {
    background-color: var(--color-feedback-background-default-warning);
    color: var(--color-feedback-foreground-on-bg-subtle-warning, #54301c);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-warning);
    }
  }

  /* Styling for høyere metningsgrad */

  .alert--emphasized.alert--primary {
    background-color: var(--color-feedback-background-emphasized-info);
    color: var(--color-feedback-foreground-on-bg-emphasized-info, #fff);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-info);
      color: var(--color-feedback-foreground-on-bg-subtle-info);
    }
  }
  .alert--emphasized.alert--danger {
    background-color: var(--color-feedback-background-emphasized-error);
    color: var(--color-feedback-foreground-on-bg-emphasized-error, #fff);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-error);
      color: var(--color-feedback-foreground-on-bg-subtle-error);
    }
  }
  .alert--emphasized.alert--success {
    background-color: var(--color-feedback-background-emphasized-success);
    color: var(--color-feedback-foreground-on-bg-emphasized-success, #fff);

    .alert__button:hover {
      background: var(--color-feedback-background-default-success);
      color: var(--color-feedback-foreground-on-bg-subtle-success,);
    }
  }
  .alert--emphasized.alert--neutral {
    background-color: var(--color-feedback-background-emphasized-neutral);
    color: var(--color-feedback-foreground-on-bg-emphasized-neutral, #fff);

    .alert__button:hover {
      background: var(--color-feedback-background-subtle-neutral);
      color: var(--color-feedback-foreground-on-bg-subtle-neutral);
    }
  }
  .alert--emphasized.alert--warning {
    color: var(--color-feedback-foreground-on-bg-emphasized-warning, #0d0d0e);

    background-color: var(--color-feedback-background-emphasized-warning);
    .alert__icon {
      color: var(--color-feedback-foreground-emphasized-warning) !important;
    }
    .alert__button {
      stroke: var(--color-feedback-foreground-emphasized-warning) !important;
    }
    .alert__button:hover {
      background: var(--color-feedback-background-subtle-warning);
      color: var(--color-feedback-foreground-on-bg-subtle-warning);
    }
  }

  /* leftStroke */
  .alert--left-stroke {
    border-left: 6px solid;
  }
  .alert--left-stroke.alert--primary {
    border-color: var(--color-feedback-border-emphasized-info);
  }
  .alert--left-stroke.alert--danger {
    border-color: var(--color-feedback-border-emphasized-error);
  }
  .alert--left-stroke.alert--success {
    border-color: var(--color-feedback-border-emphasized-succ);
  }
  .alert--left-stroke.alert--neutral {
    border-color: var(--color-feedback-border-emphasized-neutral);
  }
  .alert--left-stroke.alert--warning {
    border-color: var(--color-feedback-border-emphasized-warning);
  }

  /* leftStroke and emphasized */
  .alert--left-stroke.alert--emphasized.alert--primary {
    border-color: var(--color-feedback-border-subtle-info);
  }
  .alert--left-stroke.alert--emphasized.alert--danger {
    border-color: var(--color-feedback-border-subtle-error);
  }
  .alert--left-stroke.alert--emphasized.alert--success {
    border-color: var(--color-feedback-border-subtle-success);
  }
  .alert--left-stroke.alert--emphasized.alert--neutral {
    border-color: var(--color-feedback-border-subtle-neutral);
  }
  .alert--left-stroke.alert--emphasized.alert--warning {
    border-color: var(--color-feedback-border-subtle-warning);
  }
`;
