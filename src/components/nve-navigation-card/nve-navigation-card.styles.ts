import { css } from 'lit';

export default css`
  .navigation-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: stretch;
    min-height: var(--sizing-card-link-card-height-x-large-min-height);
    max-height: var(--sizing-card-link-card-height-x-large-max-height);
    padding: var(--spacing-2x-large);
    gap: var(--spacing-medium);
    border-radius: var(--border-radius-small);
    border: var(--border-width-stronger) solid transparent;
    background: var(--color-neutrals-background-primary);
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s ease;
  }

  .navigation-card__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
  }

  .navigation-card__icon {
    width: var(--sizing-icon-3x-large);
    height: var(--sizing-icon-3x-large);
  }

  .navigation-card__title {
    font: var(--typography-heading-small);
    color: var(--color-neutrals-foreground-primary);
    transition: color 0.2s ease;
    margin: 0;
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
  }

  .navigation-card:hover {
    border-color: var(--color-neutrals-border-subtle);
  }

  .navigation-card:hover .navigation-card__title {
    color: var(--color-brand-foreground-primary);
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 5%;
    text-underline-offset: 16%;
  }

  .navigation-card:active {
    border-color: var(--color-neutrals-border-mute);
  }

  .navigation-card:active .navigation-card__title {
    text-decoration-thickness: 10%;
    text-underline-offset: 16%;
  }

  .navigation-card:focus {
    outline: var(--color-interactive-primary-border-focus) solid 2px;
  }
`;
