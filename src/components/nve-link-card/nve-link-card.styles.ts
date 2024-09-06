import { css } from 'lit';
export default css`
  .link-card {
    border-radius: var(--borderRadius-large, 6px);
    padding: var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-large, 24px);
    transition: background-color 0.3s, border-color 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    cursor: pointer;
  }

  .small {
    min-height: 40px;
    padding: var(--spacing-small, 12px) var(--spacing-medium, 16px);
  }

  .medium {
    min-height: 60px;
    padding: var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-large, 24px);
  }

  .large {
    min-height: 70px;
    padding: var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-medium, 16px) var(--spacing-large, 24px);
  }

  .link-card.small .title {
    font-size: 0.875rem; 
  }

  .link-card.medium .title {
    font-size: 1rem;  
  }

  .link-card.large .title {
    font-size: 1.125rem; 
  }


  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    color: var(--neutrals-foreground-primary, #0D0D0E);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .additional-text {
    color: var(--neutrals-foreground-primary, #0D0D0E);
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    padding-top: 4px;
    font-size: 0.875rem; 
  }

  .primary {
    background: var(--neutrals-background-primary, #FFF);
  }

  .primary:hover {
    background: var(--neutrals-background-secondary, #E4E5E7);  
  }

  .contrast {
    background: var(--neutrals-background-primary-contrast, #F7F7F8);  
  }

  .contrast:hover {
    background: var(--neutrals-background-secondary, #E4E5E7);  
  }

  .secondary {
    background: var(--neutrals-background-secondary, #E4E5E7);  
  }

  .secondary:hover {
    border-radius: var(--borderRadius-large, 6px);
    border: 2px solid var(--neutrals-foreground-primary, #0D0D0E);
  }
`;



