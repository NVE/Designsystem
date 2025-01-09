import { css } from 'lit';

export default css`
  :host {
    --button-hover: rgba(0, 0, 0, 0.1);
  }

  .message-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--border-radius-small);
    padding: var(--spacing-large);
    gap: var(--spacing-small);
    align-self: stretch;
    color: var(--neutrals-foreground-primary, #0d0d0e);
    opacity: 1;
    transition: opacity 0.3s 0s;
  }

  .message-card__header-container {
    display: flex;
    width: 100%;
  }

  .message-card__subheader {
    font: var(--label-x-small-light);
  }

  .message-card__header {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-small);
    overflow: hidden;
  }

  /* tittelen blir kuttet hvis for langt i utgangspunktet */
  .message-card__header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    font: var(--label-large);
    :is(span) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .message-card__body {
    font: var(--body-medium);
  }

  .message-card__close-btn {
    border: none;
    background: none;
    width: 28px;
    height: 28px;
    font-size: unset;
    background-color: unset;
    color: inherit;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* brukes når man lukker kortet*/
  .message-card-remove {
    opacity: 0;
  }

  nve-icon::part(icon) {
    display: unset;
    font-size: 24px;
  }

  /** Varianter */

  .message-card--neutral {
    background: var(--neutrals-background-primary, #fff);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  .message-card--danger {
    background: var(--feedback-background-default-error);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  .message-card--warning {
    background: var(--feedback-background-default-warning);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  .message-card--success {
    background: var(--feedback-background-default-success);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  .message-card--primary {
    background: var(--feedback-background-subtle-info);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  /** Sterkere farger */

  :host([saturation='emphasized']) .message-card--neutral {
    background: var(--neutrals-background-secondary);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  :host([saturation='emphasized']) .message-card--danger {
    color: var(--feedback-foreground-emphasized-error);
    background: var(--feedback-background-emphasized-error);
    .message-card__close-btn:hover {
      background-color: var(--feedback-background-default-error);
      color: var(--neutrals-foreground-primary);
    }
  }

  :host([saturation='emphasized']) .message-card--warning {
    color: var(--feedback-foreground-emphasized-warning);
    background: var(--feedback-background-emphasized-warning);
    .message-card__close-btn:hover {
      background-color: var(--feedback-background-default-warning);
    }
  }

  :host([saturation='emphasized']) .message-card--success {
    color: var(--feedback-foreground-emphasized-success);
    background: var(--feedback-background-emphasized-success);
    .message-card__close-btn:hover {
      background-color: var(--feedback-background-default-success);
      color: var(--neutrals-foreground-primary);
    }
  }

  :host([saturation='emphasized']) .message-card--primary {
    color: var(--feedback-foreground-emphasized-info);
    background: var(--feedback-background-emphasized-info);
    .message-card__close-btn:hover {
      background-color: var(--button-hover);
    }
  }

  /** Størrelser */

  :host([size='compact']) .message-card,
  :host([size='simple']) .message-card {
    padding: var(--spacing-small);
    gap: var(--spacing-x-small);
  }

  :host([size='simple']) .message-card__header-title {
    font: var(--label-small-light);
  }

  :host([size='simple']) nve-icon::part(icon) {
    font-size: 20px;
  }
`;
