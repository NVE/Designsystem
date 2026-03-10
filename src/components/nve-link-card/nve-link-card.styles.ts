import { css } from 'lit';
export default css`
  .link-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: var(--spacing-medium) var(--spacing-large);
    gap: var(--spacing-medium);
    border-radius: var(--border-radius-small);
    border: var(--border-width-stronger) solid transparent;
    background: var(--color-neutrals-background-primary);
    cursor: pointer;
    text-decoration: none;
    transition:
      background 0.3s ease,
      border-color 0.3s ease;
  }

  /* Setter farge på <a> for å sikre riktig lenkefarge uansett rammeverk eller browser */
  a {
    color: var(--color-neutrals-foreground-primary);
  }

  .link-card:hover {
    border-color: var(--color-neutrals-border-subtle);
    background: var(--color-neutrals-background-primary);
  }

  .link-card:active {
    border-color: var(--color-neutrals-border-mute);
  }

  .link-card:focus-visible {
    outline: var(--color-interactive-primary-border-focus) solid 2px;
  }

  .link-card--small {
    padding: var(--spacing-small) var(--spacing-medium);
    gap: var(--spacing-x-small);
    min-height: var(--sizing-2x-small);
  }

  .link-card--medium {
    padding: var(--spacing-medium) var(--spacing-large);
    min-height: var(--sizing-2x-small);
  }

  .link-card--large {
    padding: var(--spacing-large);
    min-height: var(--sizing-x-small);
  }

  .link-card--primary {
    background: var(--color-neutrals-background-primary);
  }

  .link-card--contrast {
    background: var(--color-neutrals-background-primary-contrast);
  }

  .link-card--secondary {
    background: var(--color-neutrals-background-secondary);
  }

  .link-card__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .link-card__label {
    font: var(--typography-heading-x-small);
    color: var(--color-neutrals-foreground-primary);
    transition:
      color 0.3s ease,
      text-decoration-thickness 0.3s,
      text-underline-offset 0.3s;
  }

  .link-card:hover .link-card__label {
    color: var(--color-brand-foreground-primary);
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 5%;
    text-underline-offset: 16%;
  }

  .link-card:active .link-card__label {
    text-decoration-thickness: 10%;
    text-underline-offset: 16%;
  }

  .link-card--small .link-card__label {
    font: var(--typography-label-small);
  }

  .link-card--large .link-card__label {
    font: var(--typography-heading-x-small);
  }

  .link-card__additional-text {
    color: var(--color-neutrals-foreground-subtle);
    font: var(--typography-body-compact-x-small-compact);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .link-card--small .link-card__additional-text {
    font: var(--typography-body-compact-x-small-compact);
  }

  .link-card--large .link-card__additional-text {
    font: var(--typography-body-compact-small-compact);
  }

  .link-card ::slotted([slot='icon']) {
    --icon-size: 24px;
  }

  nve-icon {
    --icon-size: 24px;
    color: var(--color-brand-foreground-primary);
  }
`;
