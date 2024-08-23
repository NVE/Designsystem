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
    --_border-top-width: 0;
    --_border-left-width: 0;
    --_border-right-width: 0;
    --_border-bottom-width: 0;
  }
  :host::part(body) {
    box-shadow: var(--soft);
  }
  :host([saturation='subtle'])::part(body) {
    border: var(--border-width-default) solid var(--_border-color);
    box-shadow: var(--hard);
  }
  :host([saturation='subtle']) [data-current-placement^='top'] {
    --_border-bottom-width: var(--border-width-default);
    --_border-right-width: var(--border-width-default);
  }

  :host([saturation='subtle']) [data-current-placement^='bottom'] {
    --_border-top-width: var(--border-width-default);
    --_border-left-width: var(--border-width-default);
  }

  :host([saturation='subtle']) [data-current-placement^='left'] {
    --_border-top-width: var(--border-width-default);
    --_border-right-width: var(--border-width-default);
  }

  :host([saturation='subtle']) [data-current-placement^='right'] {
    --_border-bottom-width: var(--border-width-default);
    --_border-left-width: var(--border-width-default);
  }

  :host([saturation='subtle'])::part(arrow) {
    border-top: var(--_border-top-width) solid var(--_border-color);
    border-bottom: var(--_border-bottom-width) solid var(--_border-color);
    border-left: var(--_border-left-width) solid var(--_border-color);
    border-right: var(--_border-right-width) solid var(--_border-color);
    z-index: 1;
    translate: var(--_arrow-nudge-x, 0) var(--_arrow-nudge-y, 0);
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
