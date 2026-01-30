import { css } from 'lit';

export default css`
  .tag {
    display: flex;
    gap: var(--spacing-2x-small);
    padding-inline: var(--spacing-x-small);
    align-items: center;
    border-radius: var(--border-radius-small);
    color: var(--_text-color);
    background: var(--_bg-color);
    width: fit-content;
    white-space: nowrap;
    line-height: 1;
  }

  :host([variant='neutral'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-neutral);
    --_text-color: var(--color-feedback-foreground-on-bg-emphasized-neutral,);
    --_hover-bg-color: var(--color-feedback-background-default-neutral);
    --_hover-text-color: var(--color-feedback-foreground-default-neutral);
  }

  :host([variant='neutral'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-neutral);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-neutral);
    --_hover-bg-color: var(--color-feedback-background-subtle-neutral);
    --_hover-text-color: var(--color-feedback-foreground-subtle-neutral);
  }

  :host([variant='neutral'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-neutral);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-neutral);
    --_hover-bg-color: var(--color-feedback-background-default-neutral);
    --_hover-text-color: var(--color-feedback-foreground-default-neutral);
  }

  :host([variant='success'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-success);
    --_text-color: var(--color-feedback-foreground-on-bg-emphasized-success);
    --_hover-bg-color: var(--color-feedback-background-default-success);
    --_hover-text-color: var(--color-feedback-foreground-default-success);
  }

  :host([variant='success'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-success);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-success);
    --_hover-bg-color: var(--color-feedback-background-subtle-success);
    --_hover-text-color: var(--color-feedback-foreground-subtle-success);
  }

  :host([variant='success'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-success);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-success);
    --_hover-bg-color: var(--color-feedback-background-default-success);
    --_hover-text-color: var(--color-feedback-foreground-default-success);
  }

  :host([variant='info'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-info);
    --_text-color: var(--color-feedback-foreground-on-bg-emphasized-info);
    --_hover-bg-color: var(--color-feedback-background-default-info);
    --_hover-text-color: var(--color-feedback-foreground-default-info);
  }

  :host([variant='info'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-info);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-info);
    --_hover-bg-color: var(--color-feedback-background-subtle-info);
    --_hover-text-color: var(--color-feedback-foreground-subtle-info);
  }

  :host([variant='info'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-info);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-info);
    --_hover-bg-color: var(--color-feedback-background-default-info);
    --_hover-text-color: var(--color-feedback-foreground-default-info);
  }

  :host([variant='warning'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-warning);
    --_text-color: var(--color-feedback-foreground-on-bg-emphasized-warning);
    --_hover-bg-color: var(--color-feedback-background-default-warning);
    --_hover-text-color: var(--color-feedback-foreground-default-warning);
  }

  :host([variant='warning'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-warning);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-warning);
    --_hover-bg-color: var(--color-feedback-background-subtle-warning);
    --_hover-text-color: var(--color-feedback-foreground-subtle-warning);
  }

  :host([variant='warning'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-warning);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-warning);
    --_hover-bg-color: var(--color-feedback-background-default-warning);
    --_hover-text-color: var(--color-feedback-foreground-default-warning);
  }

  :host([variant='error'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-error);
    --_text-color: var(--color-feedback-foreground-on-bg-emphasized-error);
    --_hover-bg-color: var(--color-feedback-background-default-error);
    --_hover-text-color: var(--color-feedback-foreground-default-error);
  }

  :host([variant='error'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-error);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-error);
    --_hover-bg-color: var(--color-feedback-background-subtle-error);
    --_hover-text-color: var(--color-feedback-foreground-subtle-error);
  }

  :host([variant='error'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-error);
    --_text-color: var(--color-feedback-foreground-on-bg-subtle-error);
    --_hover-bg-color: var(--color-feedback-background-default-error);
    --_hover-text-color: var(--color-feedback-foreground-default-error);
  }

  :host::part(text) {
    font: var(--typography-label-x-small);
    display: flex;
    align-items: center;
  }

  :host::part(extra) {
    font: var(--typography-label-x-small-light);
    display: flex;
    align-items: center;
  }

  ::slotted(nve-icon) {
    font-size: var(--font-size-medium);
    line-height: 1;
  }

  .tag--medium {
    height: var(--sizing-x-small);
  }

  .tag--small {
    height: var(--sizing-2x-small);
  }

  .tag-close {
    border: none;
    color: var(--_text_color);
    background-color: transparent;
    border-radius: var(--border-radius-small);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .tag-close:focus-visible {
    outline: none;
  }

  .tag:has(.tag-close:focus-visible) {
    outline: var(--_text-color) auto 1px;
  }

  .tag-close:hover {
    background-color: var(--_hover-bg-color);
    color: var(--_hover-text-color);
  }

  .tag.tag--saturation-emphasized:has(.tag-close:focus-visible) {
    outline-color: var(--color-neutrals-foreground-primary);
  }

  .tag.tag--saturation-emphasized.tag--neutral:has(.tag-close:focus-visible) {
    outline-color: var(--color-interactive-primary-foreground-border-focus);
  }
`;
