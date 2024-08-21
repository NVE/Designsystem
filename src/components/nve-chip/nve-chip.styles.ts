import { css } from 'lit';

export default css`
  .chip {
    display: flex;
    gap: var(--spacing-xx-small);
    padding-inline: var(--spacing-x-small);
    align-items: center;
    border-radius: var(--border-radius-small);
    color: var(--_text-color);
    background: var(--_bg-color);
    width: fit-content;
    white-space: nowrap;
    line-height: 1;
  }

  :host([variant='neutral'][emphasis='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-neutral);
    --_text-color: var(--feedback-foreground-emphasized-neutral);
    --_hover-bg-color: var(--feedback-background-default-neutral);
    --_hover-text-color: var(--feedback-foreground-default-neutral);
  }
  :host([variant='neutral'][emphasis='default']) {
    --_bg-color: var(--feedback-background-default-neutral);
    --_text-color: var(--feedback-foreground-default-neutral);
    --_hover-bg-color: var(--feedback-background-subtle-neutral);
    --_hover-text-color: var(--feedback-foreground-subtle-neutral);
  }
  :host([variant='neutral'][emphasis='subtle']) {
    --_bg-color: var(--feedback-background-subtle-neutral);
    --_text-color: var(--feedback-foreground-subtle-neutral);
    --_hover-bg-color: var(--feedback-background-default-neutral);
    --_hover-text-color: var(--feedback-foreground-default-neutral);
  }
  :host([variant='success'][emphasis='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-success);
    --_text-color: var(--feedback-foreground-emphasized-success);
    --_hover-bg-color: var(--feedback-background-default-success);
    --_hover-text-color: var(--feedback-foreground-default-success);
  }
  :host([variant='success'][emphasis='default']) {
    --_bg-color: var(--feedback-background-default-success);
    --_text-color: var(--feedback-foreground-default-success);
    --_hover-bg-color: var(--feedback-background-subtle-success);
    --_hover-text-color: var(--feedback-foreground-subtle-success);
  }
  :host([variant='success'][emphasis='subtle']) {
    --_bg-color: var(--feedback-background-subtle-success);
    --_text-color: var(--feedback-foreground-subtle-success);
    --_hover-bg-color: var(--feedback-background-default-success);
    --_hover-text-color: var(--feedback-foreground-default-success);
  }
  :host([variant='info'][emphasis='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-info);
    --_text-color: var(--feedback-foreground-emphasized-info);
    --_hover-bg-color: var(--feedback-background-default-info);
    --_hover-text-color: var(--feedback-foreground-default-info);
  }
  :host([variant='info'][emphasis='default']) {
    --_bg-color: var(--feedback-background-default-info);
    --_text-color: var(--feedback-foreground-default-info);
    --_hover-bg-color: var(--feedback-background-subtle-info);
    --_hover-text-color: var(--feedback-foreground-subtle-info);
  }
  :host([variant='info'][emphasis='subtle']) {
    --_bg-color: var(--feedback-background-subtle-info);
    --_text-color: var(--feedback-foreground-subtle-info);
    --_hover-bg-color: var(--feedback-background-default-info);
    --_hover-text-color: var(--feedback-foreground-default-info);
  }
  :host([variant='warning'][emphasis='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-warning);
    --_text-color: var(--feedback-foreground-emphasized-warning);
    --_hover-bg-color: var(--feedback-background-default-warning);
    --_hover-text-color: var(--feedback-foreground-default-warning);
  }
  :host([variant='warning'][emphasis='default']) {
    --_bg-color: var(--feedback-background-default-warning);
    --_text-color: var(--feedback-foreground-default-warning);
    --_hover-bg-color: var(--feedback-background-subtle-warning);
    --_hover-text-color: var(--feedback-foreground-subtle-warning);
  }
  :host([variant='warning'][emphasis='subtle']) {
    --_bg-color: var(--feedback-background-subtle-warning);
    --_text-color: var(--feedback-foreground-subtle-warning);
    --_hover-bg-color: var(--feedback-background-default-warning);
    --_hover-text-color: var(--feedback-foreground-default-warning);
  }
  :host([variant='error'][emphasis='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-error);
    --_text-color: var(--feedback-foreground-emphasized-error);
    --_hover-bg-color: var(--feedback-background-default-error);
    --_hover-text-color: var(--feedback-foreground-default-error);
  }
  :host([variant='error'][emphasis='default']) {
    --_bg-color: var(--feedback-background-default-error);
    --_text-color: var(--feedback-foreground-default-error);
    --_hover-bg-color: var(--feedback-background-subtle-error);
    --_hover-text-color: var(--feedback-foreground-subtle-error);
  }
  :host([variant='error'][emphasis='subtle']) {
    --_bg-color: var(--feedback-background-subtle-error);
    --_text-color: var(--feedback-foreground-subtle-error);
    --_hover-bg-color: var(--feedback-background-default-error);
    --_hover-text-color: var(--feedback-foreground-default-error);
  }

  :host::part(text) {
    font: var(--label-x-small);
  }
  :host::part(extra) {
    font: var(--label-x-small-light);
  }
  ::slotted(nve-icon) {
    font-size: var(--font-size-small);
  }
  .chip--medium {
    height: var(--sizing-x-small);
  }
  .chip--small {
    height: var(--sizing-2x-small);
  }
  .chip-close {
    border: none;
    color: var(--_text_color);
    background-color: transparent;
    border-radius: var(--border-radius-small);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
  .chip-close:focus-visible {
    outline: none;
  }
  .chip:has(.chip-close:focus-visible) {
    outline: var(--_text-color) auto 1px;
  }
  .chip-close:hover {
    background-color: var(--_hover-bg-color);
    color: var(--_hover-text-color);
  }
  .chip.chip--emphasis-emphasized:has(.chip-close:focus-visible) {
    outline-color: var(--neutrals-foreground-primary);
  }

  .chip.chip--emphasis-emphasized.chip--neutral:has(.chip-close:focus-visible) {
    outline-color: var(--interactive-primary-foreground-border-focus);
  }
`;
