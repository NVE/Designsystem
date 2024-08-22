/** border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-size);
    line-height: var(--sl-tooltip-font-size);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding); */

import { css } from 'lit';

export default css`
  :host {
    --sl-tooltip-border-radius: 40px;
    --sl-tooltip-background-color: var(--_bg-color);
    --sl-tooltip-color: var(--_text-color);
    --sl-tooltip-font-weight: initial;
    --sl-tooltip-font-size: initial;
    --sl-tooltip-padding: var(--spacing-x-small);
    --sl-tooltip-border-radius: var(--border-radius-small);
    font: var(--label-small-light);
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
  }
`;
