import { css } from 'lit';

export default css`
  .radio-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    gap: 8px;
  }

  /* Hide the native radio visually but keep it accessible */
  .radio-wrapper input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 18px; /* match .radio--medium for focus ring */
    height: 18px;
    margin: 0;
    z-index: 1;
  }

  /* Custom radio appearance */
  .radio {
    border: 2px solid var(--neutrals-foreground-primary, #333);
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;
    position: relative;
  }

  .radio--large {
    width: 22px;
    height: 22px;
  }

  .radio--medium {
    width: 18px;
    height: 18px;
  }

  .radio--small {
    width: 16px;
    height: 16px;
  }

  /* Show dot when checked */
  .radio-wrapper input[type='radio']:checked + .radio::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #1e6fdc;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Label styling */
  span.label {
    user-select: none;
  }
`;
