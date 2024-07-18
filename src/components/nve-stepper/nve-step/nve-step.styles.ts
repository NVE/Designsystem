import { css } from 'lit';

export default css`
  :host {
    flex-grow: var(--flex-grow, 1);
  }

  .step-figure {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  .filled-icon {
    font-variation-settings:
      'FILL' 1,
      'wght' 300,
      'GRAD' 1,
      'opsz' 48 !important;
  }

  .clickable {
    cursor: pointer;
  }

  .disable-click {  
    cursor: default;
  }

  .divider-horizontal {
    height: 2px;
    flex-grow: 1;
  }

  .text-container {
    padding-right: 1.5rem; /*24px; */
  }

  .step-title {
    color: var(--neutrals-foreground-primary, #0D0D0E);

    /* Label/medium */
    font-family: "Source Sans Pro";
    font-size: 1.125rem; /*18px; */
    font-style: normal;
    font-weight: 600;
    line-height: 110%; 
    padding-top: 0.75rem; /*12px;*/
  }

  .step-state {
    /* Label/x-small-light */
    font-family: "Source Sans Pro";
    font-size: 0.875rem;/*14px;*/
    font-style: normal;
    font-weight: 400;
    line-height: 110%; 
    padding-top: 0.25rem; /*4px;*/

  }

  .step-description {
    color: var(--neutrals-foreground-primary, #0D0D0E);
    
    /* Label/small-light */
    font-family: "Source Sans Pro";
    font-size: 1rem; /*16px; */
    font-style: normal;
    font-weight: 400;
    line-height: 110%; 
    padding-top: 0.625rem; /*10px; */
  }


  .divider-not-reached-color {
    /* TODO the token --neutrals-background-secondary gives wrong color #c8eaf9 instead of #E4E5E7
    color:var(--neutrals-background-secondary, #E4E5E7); */
    background:#E4E5E7; 
}

  .divider-reached-color {
    background: var(--neutrals-foreground-primary, #0D0D0E);
  }

  .state-not-started-icon-color {
    /* TODO the token --neutrals-background-secondary gives wrong color #c8eaf9 instead of #E4E5E7
    color:var(--neutrals-background-secondary, #E4E5E7); */
    color:#E4E5E7; 
  }

  .state-not-started-color {
    color: var(--neutrals-foreground-subtle, #60656C);
  }

  .state-started-color {
    color: var(--feedback-background-emphasized-info, #1E6FDC);
  }

  .state-done-color {
    /* TODO the token feeedback is misspelled, should be feedback but --feedback-foreground-emphasized-success gives color */
    color: var(--feeedback-foreground-emphasized-success, #00814B);
  }

  .state-error-color {
    color: var(--feedback-background-emphasized-error, #CC0000);
  }

  .vertical-container {
    display: flex;
    align-items: flex-start; 
  }

  .divider-horizontal {
    height: 2px;
    flex-grow: 1;
  }

  .divider-vertical {
    width: 2px;
    align-self: stretch;
  }

  .step-figure-vertical { 
    display: flex;
    font-size: 2rem;
    flex-direction: column; 
  }  

  .vertical-divider-container {
    display: flex;
    justify-content: center;
    padding-top: 1.5px;
  }
  
  .text-container-vertical {
    padding-left: 1.5rem; /*24px; */
    justify-content: center;
  }

  .step-title-vertical {
    padding-top: 0;
    align-self: flex-start; 
}

`;

