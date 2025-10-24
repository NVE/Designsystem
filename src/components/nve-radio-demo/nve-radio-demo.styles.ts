import { css } from 'lit';

export default css`
  :host {
    --radio-size: 18px;
    display: inline-flex;
  }

  input[type='radio'] {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .radio {
    display: inline-flex;
  }

  .radio--medium {
    --radio-size: 18px;
  }

  .radio--small {
    --radio-size: 14px;
  }

  .radio--large {
    --radio-size: 22px;
  }

  label {
    display: inline-flex;
    align-items: center;
    line-height: 1;
    color: var(--neutrals-foreground-primary);
    cursror: pointer;
  }

  label::before {
    content: '';
    display: inline-block;
    height: var(--radio-size);
    width: var(--radio-size);
    border: solid 2px var(--neutrals-foreground-primary);
    border-radius: 50%;
    margin-right: 0.5em;
    vertical-align: middle;
    transition: border-color 0.3s ease;
  }

  input[type='radio']:checked + label::before {
    color: var(--neutrals-foreground-primary);
    background: radial-gradient(calc(var(--radio-size) * 0.7) circle at center, currentColor 50%, transparent 55%);
    border-color: currentColor;
    transition:
      border-color 0.3s ease,
      color 0.3s ease;
  }

  /** add focus */

  .radio--disabled label {
    cursor: not-allowed;
    opacity: 0.38;
  }

  .radio--error label {
    color: var(--feedback-background-emphasized-error);
  }

  .radio--error label::before,
  .radio--error input[type='radio']:checked + label::before {
    border-color: var(--feedback-background-emphasized-error);
    color: var(--feedback-background-emphasized-error);
  }

  label:hover::before {
    border-color: var(--neutrals-foreground-subtle);
  }

  input[type='radio']:checked + label:hover::before {
    color: var(--neutrals-foreground-subtle);
    border-color: var(--neutrals-foreground-subtle);
  }

  .radio--disabled label:hover::before,
  .radio--disabled input[type='radio']:checked + label:hover::before {
    border-color: var(--neutrals-foreground-primary);
    color: var(--neutrals-foreground-primary);
    background: none;
    cursor: not-allowed;
  }
`;
