import { customElement, property } from 'lit/decorators.js';
import styles from './grid-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Et responsivt rutenett som automatisk bryter til nye linjer basert på en minste kolonnebredde.
 * Basert på Grid-primitiven fra Every Layout.
 *
 * Bruk fortrinnsvis `size` (mapper til spacing-tokens i designsystemet).
 * Bruk kun `gap` når en eksakt, ikke-tokenbasert verdi er nødvendig.
 *
 * @property {string} min - Minste kolonnebredde, f.eks. "250px" eller "16rem". Bestemmer når rutenettet bryter til ny linje.
 * @property {string} gap - Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal ikke brukes for token-verdier, bruk heller `size`.
 * @property {Size} size - Forhåndsdefinert tokenbasert mellomrom.
 */
export type GridLayoutSize =
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

@customElement('grid-layout')
export default class GridLayout extends LitElement {
  static styles = [styles];

  /** Minste kolonnebredde. Bestemmer når rutenettet bryter til ny linje. Standard: 250px. */
  @property({ type: String, reflect: true }) min: string = '250px';

  /** Eksakt CSS-lengde for mellomrom. Skal IKKE brukes for token-verdier – bruk `size` til det. */
  @property({ type: String, reflect: true }) gap?: string;

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) size?: GridLayoutSize;

  updated() {
    if (this.gap !== undefined) this.style.setProperty('--_grid-gap', this.gap);
    this.style.setProperty('--_grid-min', this.min);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-layout': GridLayout;
  }
}
