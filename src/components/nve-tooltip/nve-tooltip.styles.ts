import { css } from 'lit';

export default css`
  :host {
    --sl-tooltip-border-radius: 40px;
    --sl-tooltip-background-color: var(--_bg-color);
    --sl-tooltip-color: var(--_text-color);
    --sl-tooltip-font-weight: initial;
    --sl-tooltip-font-size: initial;
    --sl-tooltip-padding: var(--spacing-xx-small) var(--spacing-x-small);
    --sl-tooltip-border-radius: var(--border-radius-small);
    font: var(--label-small-light);
    --_border-color: transparent;
  }
  :host([saturation='subtle'])::part(popup) {
    filter: drop-shadow(0px 0px 2px var(--_border-color));
  }
  :host([variant='neutral'][saturation='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-neutral);
    --_text-color: var(--feedback-foreground-emphasized-neutral);
  }
  :host([variant='neutral'][saturation='default']) {
    --_bg-color: var(--feedback-background-default-neutral);
    --_text-color: var(--feedback-foreground-default-neutral);
  }
  :host([variant='neutral'][saturation='subtle']) {
    --_bg-color: var(--feedback-background-subtle-neutral);
    --_text-color: var(--feedback-foreground-subtle-neutral);
    --_border-color: var(--feedback-background-emphasized-neutral);
  }
  :host([variant='success'][saturation='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-success);
    --_text-color: var(--feedback-foreground-emphasized-success);
  }
  :host([variant='success'][saturation='default']) {
    --_bg-color: var(--feedback-background-default-success);
    --_text-color: var(--feedback-foreground-default-success);
  }
  :host([variant='success'][saturation='subtle']) {
    --_bg-color: var(--feedback-background-subtle-success);
    --_text-color: var(--feedback-foreground-subtle-success);
    --_border-color: var(--feedback-background-emphasized-success);
  }
  :host([variant='info'][saturation='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-info);
    --_text-color: var(--feedback-foreground-emphasized-info);
  }
  :host([variant='info'][saturation='default']) {
    --_bg-color: var(--feedback-background-default-info);
    --_text-color: var(--feedback-foreground-default-info);
  }
  :host([variant='info'][saturation='subtle']) {
    --_bg-color: var(--feedback-background-subtle-info);
    --_text-color: var(--feedback-foreground-subtle-info);
    --_border-color: var(--feedback-background-emphasized-info);
  }
  :host([variant='warning'][saturation='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-warning);
    --_text-color: var(--feedback-foreground-emphasized-warning);
  }
  :host([variant='warning'][saturation='default']) {
    --_bg-color: var(--feedback-background-default-warning);
    --_text-color: var(--feedback-foreground-default-warning);
  }
  :host([variant='warning'][saturation='subtle']) {
    --_bg-color: var(--feedback-background-subtle-warning);
    --_text-color: var(--feedback-foreground-subtle-warning);
    --_border-color: var(--feedback-background-emphasized-warning);
  }
  :host([variant='error'][saturation='emphasized']) {
    --_bg-color: var(--feedback-background-emphasized-error);
    --_text-color: var(--feedback-foreground-emphasized-error);
  }
  :host([variant='error'][saturation='default']) {
    --_bg-color: var(--feedback-background-default-error);
    --_text-color: var(--feedback-foreground-default-error);
  }
  :host([variant='error'][saturation='subtle']) {
    --_bg-color: var(--feedback-background-subtle-error);
    --_text-color: var(--feedback-foreground-subtle-error);
    --_border-color: var(--feedback-background-emphasized-error);
  }
`;
