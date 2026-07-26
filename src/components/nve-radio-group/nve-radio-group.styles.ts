import { css } from 'lit';

export default css`
  .field {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: var(--spacing-x-small);
    min-inline-size: unset;
    margin-inline: 0;
    border-width: 0;
    border-style: none;
    border-color: unset;
    border-image: none;
    padding-block: 0;
    padding-inline: 0;
  }

  .radio-group {
    display: flex;
    gap: var(--spacing-small);
  }

  .radio-group--vertical {
    flex-direction: column;
  }

  .radio-group--horizontal {
    flex-direction: row;
    align-items: center;
  }
`;
