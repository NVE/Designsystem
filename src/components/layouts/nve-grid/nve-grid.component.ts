import { customElement, property } from 'lit/decorators.js';
import styles from './nve-grid.styles';
import { LitElement, html } from 'lit';

/**
 * Et responsivt rutenett som automatisk bryter til nye linjer basert på en minste kolonnebredde.
 * Basert på Grid-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 *
 * @property {string} min - Minste kolonnebredde, f.eks. "250px" eller "16rem". Bestemmer når rutenettet bryter til ny linje.
 * @property {GridLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 */
export type GridLayoutGap =
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

@customElement('nve-grid')
export default class NveGrid extends LitElement {
  static styles = [styles];

  /** Minste kolonnebredde. Bestemmer når rutenettet bryter til ny linje. Standard: 250px. */
  @property({ type: String, reflect: true }) min: string = '250px';

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: GridLayoutGap;

  updated() {
    this.style.setProperty('--_grid-min', this.min);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-grid': NveGrid;
  }
}
