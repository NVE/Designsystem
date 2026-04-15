import { css } from 'lit';

export default css`
  :host {
    --header-spacing: var(--spacing-x-large, 2rem);
    --body-spacing: var(--spacing-x-large, 2rem);
    --footer-spacing: var(--spacing-x-large, 2rem);
    --width: 40.625rem;
    display: contents;
  }

  /* Native dialog reset */
  dialog {
    padding: 0;
    border: none;
    background: transparent;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: visible;
  }

  /* Hide native backdrop - we use our own overlay */
  dialog::backdrop {
    background: transparent;
  }

  dialog[open] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    overscroll-behavior: contain;
  }

  .dialog__overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(13, 13, 14, 0.4);
  }

  .dialog__panel {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: var(--width);
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    background-color: var(--color-neutrals-background-primary, #fff);
    border-radius: var(--sl-border-radius-medium, 0.25rem);
    box-shadow: var(--box-shadow-dropdown);
  }

  .dialog__panel:focus {
    outline: none;
  }

  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    color: var(--color-neutrals-foreground-primary, #00131c);
    font: var(--typography-heading-small);
    line-height: 130%;
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__title::before {
    font-family: 'Material Symbols Sharp';
    content: var(--title-icon);
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    gap: var(--sl-spacing-2x-small, 0.25rem);
    padding: 0 var(--header-spacing);
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.25rem;
    color: var(--color-neutrals-foreground-primary, #00131c);
    border-radius: var(--sl-border-radius-medium, 0.25rem);
    font-size: 1.3rem;
  }

  .dialog__close:hover {
    background-color: var(--color-neutrals-background-secondary, #f0f0f0);
  }

  .dialog__close:focus-visible {
    outline: 2px solid var(--sl-focus-ring-color, #0066cc);
    outline-offset: 2px;
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: 0 var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    color: var(--color-neutrals-foreground-primary, #00131c);
    font: var(--typography-body-medium);
    line-height: 150%;
  }

  .dialog__body:focus {
    outline: none;
  }

  .dialog__footer {
    flex: 0 0 auto;
    display: flex;
    text-align: left;
    gap: 0.75rem;
    padding: var(--footer-spacing);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog:not(.dialog--has-footer) .dialog__body {
    padding-bottom: var(--body-spacing);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0, #fff);
    }
  }
`;
