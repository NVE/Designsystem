import { css } from 'lit';

export default css`
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  nve-button::part(base) {
    padding-right: 0;
    min-height: 0;
  }

  nve-button::part(label) {
    white-space: nowrap;
  }

  nve-button {
    padding-right: 0px;
  }

  .indicator:first-child {
    padding-top: var(--spacing-small);
  }

  .indicator__row {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-small);
  }

  .indicator__level {
    flex: 1;
    min-width: 0;
  }

  .indicator__row > nve-button {
    flex-shrink: 0;
  }

  .indicators {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
  }

  .description {
    margin-top: var(--spacing-2xsmall);
    margin-bottom: 0;
    font: var(--typography-body-compact-small-compact);
  }
`;
