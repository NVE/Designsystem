import { css } from 'lit';

export default css`
  /* Native dialog reset */
  .modal {
    padding: 0;
    border-radius: var(--border-radius-small);
    background: var(--color-neutrals-background-primary);
    border: none;
    width: clamp(400px, 50vw, 700px);
    transform: scale(0.8);
    opacity: 0;
    outline: none;
  }

  .modal[open] {
    animation: modal-in 250ms ease forwards;
  }

  .modal.modal--closing {
    animation: modal-out 250ms ease forwards;
  }

  .modal::backdrop {
    background-color: rgba(13, 13, 14, 0.4);
    transition: background-color 250ms ease;
  }

  .modal.modal--closing::backdrop {
    background-color: rgba(13, 13, 14, 0);
  }

  .modal__panel {
    display: flex;
    flex-direction: column;

    padding: var(--spacing-large);
    overflow: auto;
  }

  .modal__panel--default {
    gap: var(--spacing-x-large, 32px);
  }

  .modal__panel--compact {
    gap: var(--spacing-2x-small, 32px);
  }

  @media screen and (max-width: 420px) {
    .modal {
      width: clamp(300px, 50vw, 400px);
    }
    .modal__panel {
      max-height: 80vh;
    }
  }

  .modal__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    h2 {
      font: var(--typography-heading-small);
      margin: 0;
    }
  }

  .modal__title-icon {
    flex-shrink: 0;
  }

  .modal__header-actions {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: var(--spacing-x-small);
  }

  .modal__header-actions ::slotted(nve-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium, 1rem);
  }

  .modal__body {
    font: var(--typography-body-medium);
  }

  .modal__footer {
    display: flex;
    gap: 0.75rem;
  }

  .modal:not(.modal--has-footer) .modal__footer {
    display: none;
  }

  @keyframes modal-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes modal-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  @keyframes backdrop-in {
    from {
      background-color: rgba(13, 13, 14, 0);
    }
    to {
      background-color: rgba(13, 13, 14, 0.4);
    }
  }
`;
