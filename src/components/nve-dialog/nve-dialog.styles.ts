import { css } from 'lit';

export default css`
  /* Native dialog reset */
  dialog {
    padding: 0;
    border-radius: var(--border-radius-small);
    background: var(--color-neutrals-background-primary);
    border: none;
    width: clamp(300px, 50vw, 700px);
    transform: scale(0.8);
    opacity: 0;
  }

  dialog[open] {
    animation: dialog-in 250ms ease forwards;
  }

  dialog.dialog--closing {
    animation: dialog-out 250ms ease forwards;
  }

  @keyframes dialog-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes dialog-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  dialog::backdrop {
    background-color: rgba(13, 13, 14, 0.4);
    transition: background-color 250ms ease;
  }

  dialog.dialog--closing::backdrop {
    background-color: rgba(13, 13, 14, 0);
  }

  @keyframes backdrop-in {
    from {
      background-color: rgba(13, 13, 14, 0);
    }
    to {
      background-color: rgba(13, 13, 14, 0.4);
    }
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-x-large, 32px);
    padding: var(--spacing-large);
    overflow: auto;
  }

  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    h2 {
      font: var(--typography-heading-small);
      margin: 0;
    }
  }

  .dialog__title-icon {
    flex-shrink: 0;
  }

  .dialog__header-actions {
    display: flex;
    margin-left: auto;
    gap: var(--spacing-x-small);
  }

  .dialog__header-actions ::slotted(nve-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium, 1rem);
  }

  .dialog__body {
    font: var(--typography-body-medium);
  }

  .dialog__footer {
    display: flex;
    gap: 0.75rem;
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }
`;
