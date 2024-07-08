import { css } from 'lit';

/** Det er en del repetisjoner med nve-input.styles.ts, men jeg har ikke tid til å rette det nå. Kan også være at vi
 * må lage vår egen nve-select komponent pga feil ikone derfor vil jeg ikke bruke mer tid på komponenten.
 */
export default css`
  :host {
    --sl-input-required-content: '*Obligatorisk';
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--brand-deep);
  }

  :host::part(combobox) {
    font: var(--body-small);
    color: var(--neutrals-foreground-primary, #0d0d0e);

    border-radius: 0.25rem;
    border: var(--border-width-default, 1px) solid var(--neutrals-border-default, #878c94);
  }

  :host(:hover)::part(combobox) {
    border-color: var(--neutrals-foreground-primary, #00131c);
  }

  :host([required]) .form-control--has-label .form-control__label::after,
  :host([requiredLabel])::part(form-control-label)::after {
    content: var(--sl-input-required-content);
    font: var(--label-x-small-light);
    color: var(--feedback-background-emphasized-error);
  }

  :host(:focus-visible)::part(form-control-input) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  :host::part(standard-not-disabled-focused-combobox),
  :host::part(standard-not-disabled-open-combobox) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  :host::part(popup) {
    border-radius: var(--border-radius-small, 0.25rem) !important;
    border: 1px solid var(--neutrals-foreground-subtle, #006b99) !important;
  }

  /* filled*/
  :host([filled])::part(listbox) {
    background-color: var(--neutrals-background-primary-contrast, #eff8fc);
  }

  /* Gir rød ramme ved valideringsfeil  */
  :host([data-user-invalid])::part(combobox) {
    border-color: var(--feedback-background-emphasized-error);
    color: var(--feedback-background-emphasized-error);
  }

  :host::part(form-control-help-text) {
    font: var(--detailtext-caption);
  }

  :host::after {
    content: var(--nve-input-error-message);
    font: var(--detailtext-caption);
    color: var(--feedback-background-emphasized-error);
  }

  /** gjemmer hjelpe tekst om det finnes et feil og feilmelding skal vises */
  :host([data-user-invalid])::part(form-control-help-text) {
    display: none;
  }

  :host([data-user-invalid])::part(form-control) {
    margin-bottom: var(--spacing-x-small);
  }

  :host::part(form-control-label) {
    align-items: center;
  }

  /** hvis hjelpe tekst vises skal den */
  .form-control--has-help-text .form-control__help-text {
    margin-top: var(--spacing-x-small);
  }
  /* Formaterer "*Obligatorisk" over input-felt og til høyre riktig når required er satt */
  .form-control--has-label .form-control__label {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-inline-start: unset;
    margin-bottom: var(--spacing-x-small);
  }
`;
