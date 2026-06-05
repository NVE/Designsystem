import { customElement, property } from 'lit/decorators.js';
import styles from './box-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Pakker innhold i en boks med padding.
 * Basert på Box-primitiven fra Every Layout.
 *
 * Bruk fortrinnsvis `size` (mapper til spacing-tokens i designsystemet).
 * Bruk kun `padding` når en eksakt, ikke-tokenbasert verdi er nødvendig.
 *
 * @property {string} padding - Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal ikke brukes for token-verdier, bruk heller `size`.
 * @property {Size} size - Forhåndsdefinert tokenbasert størrelse.
 * @property {BoxLayoutBackground} background - Forhåndsdefinert tokenbasert bakgrunnsfarge.
 */
export type BoxLayoutSize =
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

@customElement('box-layout')
export default class BoxLayout extends LitElement {
  static styles = [styles];

  /** Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal IKKE brukes for token-verdier – bruk `size` til det. */
  @property({ type: String, reflect: true }) padding?: string;

  /** Forhåndsdefinert tokenbasert padding. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) size?: BoxLayoutSize;

  /** Forhåndsdefinert tokenbasert bakgrunnsfarge. Mapper til `--color-feedback-background-*`. */
  @property({ type: String, reflect: true }) background?: BoxLayoutBackground;

  updated() {
    if (this.padding !== undefined) this.style.setProperty('--_box-padding', this.padding);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'box-layout': BoxLayout;
  }
}
