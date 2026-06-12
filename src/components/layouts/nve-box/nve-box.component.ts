import { customElement, property } from 'lit/decorators.js';
import styles from './nve-box.styles';
import { LitElement, html } from 'lit';

/**
 * Pakker innhold i en boks med padding.
 * Basert på Box-primitiven fra Every Layout.
 *
 * Padding styres av `padding` og er låst til spacing-tokenene i designsystemet.
 * Bakgrunnsfarge styres av `background` og er låst til feedback-fargetokenene.
 *
 * @property {BoxLayoutPadding} padding - Forhåndsdefinert tokenbasert padding.
 * @property {BoxLayoutBackground} background - Forhåndsdefinert tokenbasert bakgrunnsfarge.
 */
export type BoxLayoutPadding =
  | 'none'
  | '2x-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large'
  | '3x-large'
  | '4x-large'
  | '5x-large';

export type BoxLayoutBackground =
  | 'none'
  | 'neutral'
  | 'neutral-subtle'
  | 'info'
  | 'info-subtle'
  | 'success'
  | 'success-subtle'
  | 'warning'
  | 'warning-subtle'
  | 'error'
  | 'error-subtle';

@customElement('nve-box')
export default class NveBox extends LitElement {
  static styles = [styles];

  /** Forhåndsdefinert tokenbasert padding. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) padding?: BoxLayoutPadding;

  /** Forhåndsdefinert tokenbasert bakgrunnsfarge. Mapper til `--color-feedback-background-*`. */
  @property({ type: String, reflect: true }) background?: BoxLayoutBackground;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-box': NveBox;
  }
}
