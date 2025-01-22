import { css } from 'lit';

export default css`
  :host {
    --_active-color: var(--brand-primary);
    --_active-text-color: var(--neutrals-background-primary);
    --_border-color: var(--neutrals-border-subtle);
    --_border-radius: var(--border-radius-small);
  }
  :host([pill]) {
    --_border-radius: var(--border-radius-pill);
  }

  :host() .button--outline.button--default {
    border-color: var(--_border-color);
  }
  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    background: var(--_active-color);
    color: var(--_active-text-color);
    border-color: var(--_active-color);
  }

  .button.button.button {
    /* vi bruker multiple selectors for å øke specificity og dermed overskrive shoelace */
    /* Pass på at denne er over :[first|last]-of-type */
    border-radius: 0;
  }

  :host(:first-of-type) .button {
    border-top-left-radius: var(--_border-radius);
    border-bottom-left-radius: var(--_border-radius);
  }
  :host(:last-of-type) .button {
    border-top-right-radius: var(--_border-radius);
    border-bottom-right-radius: var(--_border-radius);
  }
`;
