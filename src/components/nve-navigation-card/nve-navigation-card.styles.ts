import { css } from 'lit';

export default css`
  :host {
    --nav-card-arrow-transition:
      margin-left 0.3s cubic-bezier(0, 0, 0.2, 1), margin-right 0.3s cubic-bezier(0, 0, 0.2, 1);
    --nav-card-arrow-transition-fast:
      margin-left 0.3s cubic-bezier(0, 0, 0.2, 1), margin-right 0.3s cubic-bezier(0, 0, 0.2, 1);
    display: flex;
    height: 100%;
  }

  .navigation-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-height: var(--sizing-card-link-card-height-x-large-min-height);
    padding: var(--spacing-2x-large);
    gap: var(--spacing-medium);
    border-radius: var(--border-radius-small);
    border: var(--border-width-stronger) solid transparent;
    background: var(--color-neutrals-background-primary);
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.3s ease;
  }

  .navigation-card:hover {
    border-color: var(--color-neutrals-border-subtle);
  }

  .navigation-card:active {
    border-color: var(--color-neutrals-border-mute);
  }

  .navigation-card:focus-visible {
    outline: var(--color-interactive-border-accessibility-focus) solid 2px;
  }

  .navigation-card__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    align-items: flex-start;
    align-self: stretch;
  }

  .navigation-card__icon {
    width: var(--sizing-icon-3x-large);
    height: var(--sizing-icon-3x-large);
  }

  .navigation-card__label {
    font: var(--typography-heading-small);
    color: var(--color-neutrals-foreground-primary);
    transition: color 0.3s ease;
    margin: 0;
  }

  .navigation-card:hover .navigation-card__label {
    color: var(--color-brand-foreground-primary);
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 5%;
    text-underline-offset: 16%;
  }

  .navigation-card:active .navigation-card__label {
    text-decoration-thickness: 10%;
    text-underline-offset: 16%;
  }

  .navigation-card__additional-text {
    font: var(--typography-body-compact-medium-compact);
    color: var(--color-neutrals-foreground-subtle);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0;
  }

  .navigation-card__arrow {
    flex-shrink: 0;
    color: var(--color-brand-foreground-primary);
    margin-right: var(--spacing-x-small);
    transition: var(--nav-card-arrow-transition);
  }

  .navigation-card:hover .navigation-card__arrow {
    margin-left: var(--spacing-2x-small);
    margin-right: var(--spacing-2x-small);
    transition: var(--nav-card-arrow-transition-fast);
  }

  .navigation-card:active .navigation-card__arrow {
    margin-left: var(--spacing-x-small);
    margin-right: 0;
    transition: var(--nav-card-arrow-transition-fast);
  }

  nve-icon {
    --icon-size: 24px;
  }
`;
