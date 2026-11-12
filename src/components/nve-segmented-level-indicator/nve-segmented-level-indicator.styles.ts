import { css } from 'lit';

export default css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-x-small);
    align-self: stretch;
  }

  /** En firkant */
  .segment {
    display: inline-block;
    width: var(--dimension-2-5x);
    height: var(--dimension-2-5x);
    border-radius: 2px;
    border: var(--border-with-default);
    border: var(--border-width-default) solid var(--color-feedback-border-emphasized-neutral, #3c3f44);
    background: var(--color-neutrals-foreground-white);
  }

  /** Fylte firkanter angir nivået */
  .segment.filled {
    border-color: var(--color-feedback-foreground-danger);
    background: var(--color-feedback-foreground-danger);
  }

  /** Alle firkantene stables ved siden av hverandre */
  .segments {
    display: flex;
    gap: var(--spacing-2x-small);
  }

  /** Teksten under nivå-indikatoren */
  .label {
    font: var(--typography-label-small);
    color: var(--color-neutrals-foreground-primary);
  }
`;
