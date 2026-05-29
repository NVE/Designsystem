import { css } from 'lit';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--_stack-gap, var(--spacing-medium));
    justify-content: var(--_stack-justify, flex-start);
  }

  :host([size='none']) {
    --_stack-gap: var(--spacing-none);
  }
  :host([size='2x-small']) {
    --_stack-gap: var(--spacing-2x-small);
  }
  :host([size='x-small']) {
    --_stack-gap: var(--spacing-x-small);
  }
  :host([size='small']) {
    --_stack-gap: var(--spacing-small);
  }
  :host([size='medium']) {
    --_stack-gap: var(--spacing-medium);
  }
  :host([size='large']) {
    --_stack-gap: var(--spacing-large);
  }
  :host([size='x-large']) {
    --_stack-gap: var(--spacing-x-large);
  }
  :host([size='2x-large']) {
    --_stack-gap: var(--spacing-2x-large);
  }
  :host([size='3x-large']) {
    --_stack-gap: var(--spacing-3x-large);
  }
  :host([size='4x-large']) {
    --_stack-gap: var(--spacing-4x-large);
  }
  :host([size='5x-large']) {
    --_stack-gap: var(--spacing-5x-large);
  }
`;
