import { customElement, property } from 'lit/decorators.js';
import { SlButton } from '@shoelace-style/shoelace';
import './varsom.css';
import { css } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nve-button')
export class NveButton extends SlButton {
  constructor() {
    super();
  }

  /**
   * sl default = nve secondary
   *
   *
   */
  static styles = [
    SlButton.styles, // Import Shoelace styles after your custom styles
    css`
      .button {
        font: var(--label-medium);
      }
      .button__label {
        display: flex;
        align-items: center;
      }
      .button--standard.button--primary:hover:not(.button--disabled) {
        background: var(--interactive-primary-background-hover);
        color: var(--interactive-primary-foreground-default);
      }
      /* må endre font farge her fordi shoelace bruker samme farge på fonten som på neutral/secondary knapps bakgrunn */
      .button--standard.button--primary {
        color: var(--sl-color-grey-50);
      }
      .button--standard.button--default {
        border-color: var(--interactive-secondary-background-default);
      }
      .button--standard.button--default:hover:not(.button--disabled) {
        border-color: var(--interactive-secondary-background-hover);
        background: var(--interactive-secondary-background-hover);
        color: var(--sl-color-neutral-700);
      }

      .button--outline.button--neutral,
      .button--standard.button--neutral {
        color: var(--sl-color-neutral-700);
      }
      .button--standard.button--neutral {
        border: none;
      }

      .button--outline.button--neutral,
      .button--outline.button--neutral:active:not(.button--disabled) {
        border-color: var(--interactive-outlined-border-default);
        background-color: transparent;
      }
      .button--standard.button--neutral:hover:not(.button--disabled) {
        background-color: var(--interactive-ghost-background-hover);
        color: var(--sl-color-neutral-700);
      }

      .button--outline.button--neutral:hover:not(.button--disabled),
      .button--outline.button--neutral.button--checked:not(.button--disabled) {
        border-color: var(--interactive-outlined-border-hover);
        color: var(--sl-color-neutral-700);
      }
    `,
  ];

  @property() theme: 'nve' | 'varsom' = 'varsom';

  // dette tror jeg vi kunne sette globalt et sted
  setTheme(theme: string) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      if (theme === 'nve') {
        themeLink.href = './src/nve.css';
      } else if (theme === 'varsom') {
        themeLink.href = './src/varsom.css';
      }
    }
  }

  updated(changedProperties: any) {
    if (changedProperties.has('theme')) {
      this.setTheme(this.theme);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-button': NveButton;
  }
}
