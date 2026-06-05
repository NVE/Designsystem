import { css } from 'lit';

export default css`
  :host {
    --_tooltip-distance: var(--spacing-x-small);
    --_tooltip-arrow-size: var(--dimension-2-5x);
    --_tooltip-padding: var(--spacing-2x-small) var(--spacing-x-small);
    font: var(--typography-label-small-light);
    display: inline-block;
    position: relative;
    --_border-color: transparent;
    --_border-top-width: 0;
    --_border-left-width: 0;
    --_border-right-width: 0;
    --_border-bottom-width: 0;
  }

  .tooltip__trigger {
    display: inline-flex;
  }

  .tooltip__popup {
    inline-size: max-content;
    left: 0;
    max-inline-size: min(20rem, calc(100vw - var(--spacing-large)));
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    visibility: hidden;
    z-index: 10;
  }

  .tooltip__popup--rich {
    min-inline-size: min(16rem, calc(100vw - var(--spacing-large)));
  }

  .tooltip__popup--open {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  .tooltip__body {
    background-color: var(--_bg-color);
    border: var(--border-width-default) solid var(--_border-color);
    border-radius: var(--border-radius-small);
    box-shadow: var(--box-shadow-hard);
    color: var(--_text-color);
    font: inherit;
    font-weight: initial;
    line-height: 1.4;
    padding: var(--_tooltip-padding);
  }

  .tooltip__body ::slotted(*) {
    margin: 0;
  }

  .tooltip__body ::slotted(ul),
  .tooltip__body ::slotted(ol) {
    padding-inline-start: var(--spacing-medium);
  }

  .tooltip__arrow {
    background-color: var(--_bg-color);
    block-size: var(--_tooltip-arrow-size);
    inline-size: var(--_tooltip-arrow-size);
    position: absolute;
    rotate: 45deg;
  }

  :host([saturation='emphasized']) .tooltip__body,
  :host([saturation='default']) .tooltip__body {
    border-color: transparent;
    box-shadow: none;
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

  :host([saturation='subtle']) .tooltip__arrow {
    border-top: var(--_border-top-width) solid var(--_border-color);
    border-bottom: var(--_border-bottom-width) solid var(--_border-color);
    border-left: var(--_border-left-width) solid var(--_border-color);
    border-right: var(--_border-right-width) solid var(--_border-color);
    z-index: 1;
  }

  .tooltip__popup[data-current-placement^='top'] .tooltip__arrow {
    inset-block-end: calc(var(--_tooltip-arrow-size) / -2);
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  .tooltip__popup[data-current-placement='top-start'] .tooltip__arrow,
  .tooltip__popup[data-current-placement='bottom-start'] .tooltip__arrow {
    inset-inline-start: 50%;
    translate: 0 0;
  }

  .tooltip__popup[data-current-placement='top-end'] .tooltip__arrow,
  .tooltip__popup[data-current-placement='bottom-end'] .tooltip__arrow {
    inset-inline-start: auto;
    inset-inline-end: 50%;
    translate: 0 0;
  }

  .tooltip__popup[data-current-placement^='bottom'] .tooltip__arrow {
    inset-block-start: calc(var(--_tooltip-arrow-size) / -2);
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  .tooltip__popup[data-current-placement^='left'] .tooltip__arrow {
    inset-block-start: 50%;
    inset-inline-end: calc(var(--_tooltip-arrow-size) / -2);
    translate: 0 -50%;
  }

  .tooltip__popup[data-current-placement='left-start'] .tooltip__arrow,
  .tooltip__popup[data-current-placement='right-start'] .tooltip__arrow {
    inset-block-start: var(--spacing-small);
    translate: 0 0;
  }

  .tooltip__popup[data-current-placement='left-end'] .tooltip__arrow,
  .tooltip__popup[data-current-placement='right-end'] .tooltip__arrow {
    inset-block-start: auto;
    inset-block-end: var(--spacing-small);
    translate: 0 0;
  }

  .tooltip__popup[data-current-placement^='right'] .tooltip__arrow {
    inset-block-start: 50%;
    inset-inline-start: calc(var(--_tooltip-arrow-size) / -2);
    translate: 0 -50%;
  }

  :host([variant='neutral'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-neutral);
    --_text-color: var(--color-feedback-foreground-emphasized-neutral);
  }
  :host([variant='neutral'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-neutral);
    --_text-color: var(--color-feedback-foreground-default-neutral);
  }
  :host([variant='neutral'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-neutral);
    --_text-color: var(--color-feedback-foreground-subtle-neutral);
    --_border-color: var(--color-feedback-background-emphasized-neutral);
  }
  :host([variant='success'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-success);
    --_text-color: var(--color-feedback-foreground-emphasized-success);
  }
  :host([variant='success'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-success);
    --_text-color: var(--color-feedback-foreground-default-success);
  }
  :host([variant='success'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-success);
    --_text-color: var(--color-feedback-foreground-subtle-success);
    --_border-color: var(--color-feedback-background-emphasized-success);
  }
  :host([variant='info'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-info);
    --_text-color: var(--color-feedback-foreground-emphasized-info);
  }
  :host([variant='info'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-info);
    --_text-color: var(--color-feedback-foreground-default-info);
  }
  :host([variant='info'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-info);
    --_text-color: var(--color-feedback-foreground-subtle-info);
    --_border-color: var(--color-feedback-background-emphasized-info);
  }
  :host([variant='warning'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-warning);
    --_text-color: var(--color-feedback-foreground-emphasized-warning);
  }
  :host([variant='warning'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-warning);
    --_text-color: var(--color-feedback-foreground-default-warning);
  }
  :host([variant='warning'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-warning);
    --_text-color: var(--color-feedback-foreground-subtle-warning);
    --_border-color: var(--color-feedback-background-emphasized-warning);
  }
  :host([variant='error'][saturation='emphasized']) {
    --_bg-color: var(--color-feedback-background-emphasized-error);
    --_text-color: var(--color-feedback-foreground-emphasized-error);
  }
  :host([variant='error'][saturation='default']) {
    --_bg-color: var(--color-feedback-background-default-error);
    --_text-color: var(--color-feedback-foreground-default-error);
  }
  :host([variant='error'][saturation='subtle']) {
    --_bg-color: var(--color-feedback-background-subtle-error);
    --_text-color: var(--color-feedback-foreground-subtle-error);
    --_border-color: var(--color-feedback-background-emphasized-error);
  }
`;
