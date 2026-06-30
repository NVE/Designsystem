import { customElement, property } from 'lit/decorators.js';
import styles from './nve-grid.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken, isValidSpacingToken } from '../nve-layout-base';

/**
 * Et responsivt rutenett som automatisk bryter til nye linjer basert på en minste kolonnebredde.
 * Basert på Grid-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 * Arver padding/margin-props fra NveLayoutBase.
 *
 * @property {string} min - Minste kolonnebredde, f.eks. "250px" eller "16rem". Bestemmer når rutenettet bryter til ny linje.
 * @property {GridLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 */
export type GridLayoutGap = SpacingToken;

@customElement('nve-grid')
export default class NveGrid extends NveLayoutBase {
  static styles = [...styles];

  /** Minste kolonnebredde. Bestemmer når rutenettet bryter til ny linje. Standard: 250px. */
  @property({ type: String, reflect: true }) min: string = '250px';

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: GridLayoutGap;

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Valider gap. Ugyldige verdier ignoreres.
    if (changedProperties.has('gap')) {
      if (this.gap !== undefined && !isValidSpacingToken(this.gap)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-grid] Ugyldig verdi for 'gap': "${this.gap}". Verdien ignoreres. Gyldige verdier er: none, 2x-small, x-small, small, medium, large, x-large, 2x-large, 3x-large, 4x-large, 5x-large.`
        );
        this.gap = undefined;
      }
    }

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
