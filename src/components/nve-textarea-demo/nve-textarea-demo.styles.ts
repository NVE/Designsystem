import { css } from 'lit';

export default css`
  .textarea__control {
    position: relative;
    width: fit-content;
  }

  textarea[aria-invalid='true'] {
    box-sizing: border-box;
    padding-right: 12px;
  }

  nve-icon {
    position: absolute;
    top: 0;
    right: 0;
    --icon-size: 20px;
  }
`;
