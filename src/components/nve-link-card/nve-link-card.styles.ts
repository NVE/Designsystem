import { css } from 'lit';
export default css`
  .link-card {
    border-radius: var(--borderRadius-large, 6px);
    padding: var(--spacing-medium, 16px) var(--spacing-large, 24px);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .link-card:focus {
    outline: var(--interactive-primary-foreground-border-focus, #008FFB) solid 2px;
  }

  .link-card:hover .link-card__title {
    text-decoration: underline;
  }

  .link-card:active {
    outline: var(--interactive-primary-foreground-border-focus, #008FFB) solid 2px;
  }

  .link-card--small {
    min-height: 40px;
    padding: var(--spacing-small, 12px) var(--spacing-medium, 16px);
  }

  .link-card--medium {
    min-height: 60px;
  }

  .link-card--large {
    min-height: 70px;
  }

  .link-card__title {
    font-size: 1rem;
    color: var(--neutrals-foreground-primary, #0D0D0E);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .link-card__title--small {
    font-size: 0.875rem;
  }

  .link-card__title--large {
    font-size: 1.125rem;
  }

  .link-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link-card__additional-text {
    color: var(--neutrals-foreground-primary, #0D0D0E);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    padding-top: 4px;
    font-size: 0.875rem;
  }

  .link-card--primary {
    background: var(--neutrals-background-primary, #FFF);
  }

  .link-card--primary:hover {
    background: var(--neutrals-background-secondary, #E4E5E7);  
  }

  .link-card--contrast {
    background: var(--neutrals-background-primary-contrast, #F7F7F8);  
  }

  .link-card--contrast:hover {
    background: var(--neutrals-background-secondary, #E4E5E7);  
  }

  .link-card--secondary {
    background: var(--neutrals-background-secondary, #E4E5E7);  
    transition: outline-color 0.3s;
  }

  .link-card--secondary:hover {
    border-radius: var(--borderRadius-large, 6px);
    border: 2px solid var(--neutrals-foreground-primary, #0D0D0E);
  }
`;
