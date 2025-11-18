import { css } from 'lit';
export default css`
  .link-card {
    border-radius: var(--border-radius-small);
    padding: var(--spacing-medium, 16px) var(--spacing-large, 24px);
    transition: background 0.3s ease;
    border: 2px solid transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  }

  /*bruker color på a, ikke på link-card fordi link-card overskriver standard lenke farge i remmeverker som next js som har sin egen
  wrappar rundt lenke og som støtter :visited*/
  a {
    color: var(--color-neutrals-foreground-primary, #0d0d0e);
  }

  .link-card--visited,
  a:visited {
    color: var(--color-interactive-links-visited);
  }

  .link-card:focus {
    outline: var(--color-interactive-primary-foreground-border-focus, #008ffb) solid 2px;
  }

  .link-card:hover .link-card__label {
    text-decoration: underline;
  }

  .link-card:active {
    outline: var(--color-interactive-primary-foreground-border-focus, #008ffb) solid 2px;
  }

  .link-card--small {
    padding: var(--spacing-small) var(--spacing-medium) var(--spacing-small) var(--spacing-medium);
    min-height: var(--sizing-2x-small);
  }

  .link-card--medium {
    padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) var(--spacing-large);
    min-height: var(--sizing-2x-small);
  }

  .link-card--large {
    padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) var(--spacing-large);
    min-height: var(--sizing-x-small);
  }

  .link-card__label {
    font-size: 1rem;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .link-card--visited .link-card__label,
  .link-card:visited .link-card__label {
    color: var(--color-interactive-links-visited);
  }

  .link-card__label--small {
    font-size: 0.875rem;
  }

  .link-card__label--large {
    font-size: 1.125rem;
  }

  .link-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link-card__additional-text {
    color: inherit;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    padding-top: 4px;
    font-size: 0.875rem;
  }

  .link-card--visited .link-card__additional-text,
  a:visited .link-card__additional-text {
    color: var(--color-interactive-links-visited);
  }

  .link-card--primary {
    background: var(--color-neutrals-background-primary, #fff);
  }

  .link-card--primary:hover {
    background: var(--color-neutrals-background-secondary, #e4e5e7);
  }

  .link-card--contrast {
    background: var(--color-neutrals-background-primary-contrast, #f7f7f8);
  }

  .link-card--contrast:hover {
    background: var(--color-neutrals-background-secondary, #e4e5e7);
  }

  .link-card--secondary {
    background: var(--color-neutrals-background-secondary, #e4e5e7);
  }

  .link-card--secondary:hover {
    border: 2px solid var(--color-neutrals-foreground-primary, #0d0d0e);
  }

  nve-icon {
    --icon-size: 24px;
    color: var(--color-neutrals-foreground-primary);
  }
`;
