import { css } from 'lit';

export default css`
  .field {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-inline-size: unset;
    margin-inline: 0;
    border-width: 0;
    border-style: none;
    border-color: unset;
    border-image: none;
    padding-block: 0;
    padding-inline: 0;
  }
  .segment-group {
    display: flex;
    align-items: center;
    margin-top: var(--spacing-x-small);
  }
`;
