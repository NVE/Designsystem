import { css } from 'lit';

export default css`
  :host {
    flex-grow: var(--flex-grow, 1);
  }

  nve-icon {
    --icon-size: 24px;
  }

  .step-figure {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 2rem;
    width: 100%;
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
    width: 100%;
  }

  .text-container {
    padding-right: 1.5rem; /*24px; */
    width: 100%;
  }

  .step-title {
    color: var(--neutrals-foreground-primary, #0d0d0e);

    /* Label/medium */
    font-family: 'Source Sans Pro';
    font-size: 1.125rem; /*18px; */
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    padding-top: 0.75rem; /*12px;*/
  }

  .step-state {
    /* Label/x-small-light */
    font-family: 'Source Sans Pro';
    font-size: 0.875rem; /*14px;*/
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    padding-top: 0.25rem; /*4px;*/
  }

  .step-description {
    color: var(--neutrals-foreground-primary, #0d0d0e);

    /* Label/small-light */
    font-family: 'Source Sans Pro';
    font-size: 1rem; /*16px; */
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    padding-top: 0.625rem; /*10px; */
  }

  .step-description-max-width-vertical {
    max-width: 430px;
    padding-bottom: var(--spacing-large, 1.5rem);
  }

  .step-description-max-width-horizontal {
    max-width: 150px;
  }

  .divider-not-reached-color {
    background: var(--neutrals-background-secondary, #e4e5e7);
  }

  .divider-reached-color {
    background: var(--neutrals-foreground-primary, #0d0d0e);
  }

  .state-not-started-icon-color {
    color: var(--neutrals-background-secondary, #e4e5e7);
  }

  .state-not-started-color {
    color: var(--neutrals-foreground-subtle, #60656c);
  }

  .state-started-color {
    color: var(--feedback-background-emphasized-info, #1e6fdc);
  }

  .state-done-color {
    /* TODO the token feeedback is misspelled, should be feedback but --feedback-foreground-emphasized-success gives color */
    color: var(--feeedback-foreground-emphasized-success, #00814b);
  }

  .state-error-color {
    color: var(--feedback-background-emphasized-error, #cc0000);
  }

  .vertical-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .divider-horizontal {
    height: 2px;
    flex-grow: 1;
    width: 100%;
  }

  .divider-vertical {
    width: 2px;
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }

  .step-figure-vertical {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    height: 100%;
  }

  .vertical-divider-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
    width: 2px;
    padding-top: 1px;
  }

  .text-container-vertical {
    padding-left: 8px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex: 10;
  }

  .step-title-vertical {
    padding-top: 0;
    align-self: flex-start;
  }
`;
