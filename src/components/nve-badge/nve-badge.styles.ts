import { css } from 'lit';

export default css`
  :host::part(base) {
    border-radius: 3.125rem;
    white-space: nowrap;
    text-align: center;
    font: var(--label-small);
    padding: 0.375rem 0.4375rem;
    color: var(--interactive-primary-foreground-default, #fff);
  }

  /* padding basert på størrelse */
  :host([size='large'])::part(base) {
    padding: var(--spacing-x-small) 0.5625rem;
  }

  :host([size='small'])::part(base) {
    font-size: 0.75rem;
    padding: var(--spacing-xx-small) 0.31rem;
  }

  /* bakgrunn farger basert på variant */
  :host([variant='primary'])::part(base) {
    background: var(--feedback-background-emphasized-info, #1e6fdc);
  }

  :host([variant='neutral'])::part(base) {
    background: var(--neutrals-foreground-primary, #0d0d0e);
  }

  :host([variant='success'])::part(base) {
    background: var(--feedback-background-emphasized-success, #00814b);
  }

  :host([variant='danger'])::part(base) {
    background: var(--feedback-background-emphasized-error, #c00);
  }

  :host([variant='warning'])::part(base) {
    color: var(--feedback-foreground-emphasized-warning, #0d0d0e);
    background: var(--feedback-background-emphasized-warning, #ffd046);
  }

  /* low bakgrunn farger basert på variant */

  :host([low])::part(base) {
    color: var(--neutrals-foreground-primary, #0d0d0e);
  }

  :host([low][variant='primary'])::part(base) {
    background: var(--feedback-background-default-info, #ceeaff);
  }

  :host([low][variant='neutral'])::part(base) {
    background: var(--neutrals-background-secondary, #e4e5e7);
  }

  :host([low][variant='success'])::part(base) {
    background: var(--feedback-background-default-success, #cbf9cb);
  }

  :host([low][variant='danger'])::part(base) {
    background: var(--feedback-background-default-error, #ffd8de);
  }

  :host([low][variant='warning'])::part(base) {
    background: var(--feedback-background-default-warning, #ffe8a5);
  }
`;
