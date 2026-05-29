import { customElement, property } from 'lit/decorators.js';
import styles from './stack-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Stabler barn-elementer vertikalt med konsistent mellomrom.
 * Basert på Stack-primitiven fra Every Layout.
 *
 * Bruk fortrinnsvis `size` (mapper til spacing-tokens i designsystemet).
 * Bruk kun `gap`/`space` når en eksakt, ikke-tokenbasert verdi er nødvendig.
 *
 * @property {string} gap - Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal IKKE brukes for token-verdier – bruk `size` til det.
 * @property {string} space - Alias for gap. Brukes hvis gap ikke er satt.
 * @property {Size} size - Forhåndsdefinert tokenbasert størrelse.
 * @property {string} justify - justify-content-verdi. Standard: flex-start.
 */
export type StackLayoutSize =
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

@customElement('stack-layout')
export default class StackLayout extends LitElement {
  static styles = [styles];

  /** Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal IKKE brukes for token-verdier – bruk `size` til det. */
  @property({ type: String, reflect: true }) gap?: string;

  /** Alias for gap – brukes hvis gap ikke er satt. */
  @property({ type: String, reflect: true }) space?: string;

  /** Forhåndsdefinert tokenbasert størrelse. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) size?: StackLayoutSize;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: string = 'flex-start';

  updated() {
    const spacing = this.gap ?? this.space;
    if (spacing !== undefined) this.style.setProperty('--_stack-gap', spacing);
    this.style.setProperty('--_stack-justify', this.justify);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stack-layout': StackLayout;
  }
}
