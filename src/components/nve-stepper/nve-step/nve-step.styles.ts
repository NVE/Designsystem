import { css } from 'lit';

export default css`
  :host {
    flex-grow: var(--flex-grow, 1);
  }
  .step-figure {
    position: relative;
    display: flex;
    align-items: center;
  }

  .divider-horizontal {
    height: 2px;
    background-color: var(--grey-150);
    flex-grow: 1;
  }

  .step-title {
    font-size: 16px;
    font-weight: bold;
    padding-top: 4px;
  }
  .step-description {
    font-size: 14px;
    font-weight: bold;
    padding-top: 4px;
  }

  .reachedInterval {
    height: 4px;
    background-color: black;
  }

  .reached {
    font-variation-settings:
      'FILL' 1,
      'wght' 300,
      'GRAD' 1,
      'opsz' 48 !important;
  }

  .hasError {
    color: red;
  }

  .notStarted {
    color: var(--grey-150);
  }

  .evaluated {
    background-color: rgb(184, 184, 184);
  }

  span {
    cursor: pointer;
    font-size: 2rem;
    display: flex;
  }

  .material-symbols-sharp {
    font-size: 2rem;
    font-variation-settings:
      'FILL' 0,
      'wght' 300,
      'GRAD' 0,
      'opsz' 24;
  }
`;
