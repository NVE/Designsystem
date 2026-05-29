import { customElement, property } from 'lit/decorators.js';
import styles from './box-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Pakker innhold i en boks med konsistent padding.
 * Basert på Box-primitiven fra Every Layout.
 *
 * Bruk fortrinnsvis `size` (mapper til spacing-tokens i designsystemet).
 * Bruk kun `padding` når en eksakt, ikke-tokenbasert verdi er nødvendig.
 *
 * @property {string} padding - Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal IKKE brukes for token-verdier – bruk `size` til det.
 * @property {Size} size - Forhåndsdefinert tokenbasert størrelse.
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

@customElement('box-layout')
export default class BoxLayout extends LitElement {
  static styles = [styles];

  /** Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal IKKE brukes for token-verdier – bruk `size` til det. */
  @property({ type: String, reflect: true }) padding?: string;

  /** Forhåndsdefinert tokenbasert padding. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) size?: BoxLayoutSize;

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
