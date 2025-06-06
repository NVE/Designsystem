import { css } from 'lit';

export default css`
  .mobile-stepper {
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .progress-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid var(--feeedback-foreground-emphasized-success, #00814b);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-right: 16px;
    padding: 0.2rem;
  }

  .step-info {
    display: flex;
    flex-direction: column;
  }

  .step-label {
    font-weight: bold;
    font-size: 18px;
  }

  .step-description {
    color: var(--neutrals-foreground-primary, #0d0d0e);

    /* Label/medium */
    font-family: 'Source Sans Pro';
    font-size: 1.125rem; /*18px; */
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    padding-top: 0.75rem; /*12px;*/
  }

  .next-button {
    color: var(--neutrals-foreground-primary, #0d0d0e);
  }

  .back-button {
    color: var(--neutrals-foreground-subtle, #60656c);
  }

  .step-buttons {
    /* Label/small-light */
    font-family: 'Source Sans Pro';
    font-size: 1rem; /*16px; */
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    padding-top: 0.625rem; /*10px; */
    cursor: pointer;
  }
`;
