import { css } from 'lit';

export default css`
  /* Vis hover effekt på control-delen */
  :host(:hover)::part(control) {
    color: var(--neutrals-foreground-subtle);
  }

  /* Sett "ring" og fjern default blå bakgrunn fra shoelace */
  :host(:hover)::part(control) {
    border: solid var(--border-width-strong) var(--neutrals-foreground-subtle);
    background-color: var(--neutrals-background-primary);
  }

  :host([invalid])::part(control) {
    color: var(--feedback-background-emphasized-error);
    border-color: var(--feedback-background-emphasized-error);
  }

  /* overstyr opacity på disabled */
  .radio--disabled {
    opacity: 0.38;
  }

  /* overstyr opacity på disabled */
  .radio--disabled {
    opacity: 0.38;
  }

  /* Overstyr styling på control, label og radio */
  .radio__control {
    color: var(--neutrals-foreground-primary);
    border: solid var(--border-width-strong) var(--neutrals-foreground-primary);
  }

  .radio__label {
    display: inline-flex;
    margin-inline-start: unset; /* 0.5rem; ta bort margin */
    line-height: var(--toggle-size);
  }

  .radio--small .radio__label,
  .radio--medium .radio__label {
    font: var(--label-x-small-light);
    line-height: var(--toggle-size);
    gap: var(--spacing-x-small, 0.5rem); /* sett gap */
  }

  .radio {
    display: flex;
    font: var(--label-x-small-light);
    color: var(--neutrals-foreground-primary);
    background-color: var(--neutrals-background-primary);
    gap: var(--spacing-x-small, 0.5rem); /* sett gap */
  }

  .radio--checked .radio__control {
    color: var(--neutrals-foreground-primary);
    border-color: var(--neutrals-foreground-primary);
    background-color: var(--neutrals-background-primary);
  }

  /* overstyr størrelse på check-elementet */
  sl-icon::part(checked-icon) {
    transform: scale(1.75);
  }
`;
