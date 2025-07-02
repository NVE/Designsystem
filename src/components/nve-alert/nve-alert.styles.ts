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
    color: var(--feedback-foreground-default-info);
    font: var(--body-medium);
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
    transition: background 0.3s ease;
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
    font: var(--label-large);
    margin-right: var(--spacing-medium);
  }

  ::slotted(nve-icon),
  nve-icon:not(.alert__button nve-icon) {
    --icon-size: var(--font-size-large);
    margin-right: var(--spacing-x-small);
  }

  /*variants */
  .alert--primary {
    background-color: var(--feedback-background-default-info);
    .alert__button:hover {
      background: var(--feedback-background-subtle-info);
    }
  }
  .alert--danger {
    background-color: var(--feedback-background-default-error);
    .alert__button:hover {
      background: var(--feedback-background-subtle-error);
    }
  }
  .alert--success {
    background-color: var(--feedback-background-default-success);
    .alert__button:hover {
      background: var(--feedback-background-subtle-success);
    }
  }

  .alert--neutral {
    background-color: var(--feedback-background-default-neutral);
    .alert__button:hover {
      background: var(--feedback-background-subtle-neutral);
    }
  }
  .alert--warning {
    background-color: var(--feedback-background-default-warning);
    .alert__button:hover {
      background: var(--feedback-background-subtle-warning);
    }
  }

  /* Styling for høyere metningsgrad */

  .alert--emphasized {
    color: var(--feedback-foreground-emphasized-neutral);
  }

  .alert--emphasized.alert--primary {
    background-color: var(--feedback-background-emphasized-info);
    .alert__button:hover {
      background: var(--feedback-background-subtle-info);
      color: var(--feedback-background-emphasized-info);
    }
  }
  .alert--emphasized.alert--danger {
    background-color: var(--feedback-background-emphasized-error);
    .alert__button:hover {
      background: var(--feedback-background-subtle-error);
      color: var(--feedback-background-emphasized-error);
    }
  }
  .alert--emphasized.alert--success {
    background-color: var(--feedback-background-emphasized-success);
    .alert__button:hover {
      background: var(--feedback-background-subtle-success);
      color: var(--feedback-background-emphasized-success);
    }
  }
  .alert--emphasized.alert--neutral {
    background-color: var(--feedback-background-emphasized-neutral);
    .alert__button:hover {
      background: var(--feedback-background-subtle-neutral);
      color: var(--feedback-background-emphasized-neutral);
    }
  }
  .alert--emphasized.alert--warning {
    color: var(--feedback-foreground-emphasized-warning);
    background-color: var(--feedback-background-emphasized-warning);
    .alert__icon {
      color: var(--feedback-foreground-emphasized-warning) !important;
    }
    .alert__button {
      stroke: var(--feedback-foreground-emphasized-warning) !important;
    }
  }

  /* leftStroke */
  .alert--left-stroke {
    border-left: 6px solid;
  }
  .alert--left-stroke.alert--primary {
    border-color: var(--feedback-background-emphasized-info);
  }
  .alert--left-stroke.alert--danger {
    border-color: var(--feedback-background-emphasized-error);
  }
  .alert--left-stroke.alert--success {
    border-color: var(--feedback-background-emphasized-success);
  }
  .alert--left-stroke.alert--neutral {
    border-color: var(--feedback-foreground-default-neutral);
  }
  .alert--left-stroke.alert--warning {
    border-color: var(--feedback-background-emphasized-warning);
  }

  /* leftStroke and emphasized */
  .alert--left-stroke.alert--emphasized.alert--primary {
    border-color: var(--feedback-background-default-info);
  }
  .alert--left-stroke.alert--emphasized.alert--danger {
    border-color: var(--feedback-background-default-error);
  }
  .alert--left-stroke.alert--emphasized.alert--success {
    border-color: var(--feedback-background-subtle-success);
  }
  .alert--left-stroke.alert--emphasized.alert--neutral {
    border-color: var(--feedback-background-default-neutral);
  }
  .alert--left-stroke.alert--emphasized.alert--warning {
    border-color: var(--feedback-background-default-warning);
  }
`;
