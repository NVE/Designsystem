import { customElement, property } from 'lit/decorators.js';
import styles from './nve-stack.styles';
import { html, PropertyValues } from 'lit';
import {
  NveLayoutBase,
  SpacingToken,
  LayoutJustify,
  isValidSpacingToken,
  isValidLayoutJustify,
} from '../nve-layout-base';

/**
 * Stabler barn-elementer vertikalt med konsistent mellomrom.
 * Basert på Stack-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 * Arver padding/margin-props fra NveLayoutBase.
 *
 * @property {StackLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 * @property {string} justify - justify-content-verdi. Standard: flex-start.
 */
export type StackLayoutGap = SpacingToken;

@customElement('nve-stack')
export default class NveStack extends NveLayoutBase {
  static styles = [...styles];

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: StackLayoutGap;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: LayoutJustify = 'flex-start';

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Valider gap. Ugyldige verdier ignoreres.
    if (changedProperties.has('gap')) {
      if (this.gap !== undefined && !isValidSpacingToken(this.gap)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-stack] Ugyldig verdi for 'gap': "${this.gap}". Verdien ignoreres. Gyldige verdier er: none, 2x-small, x-small, small, medium, large, x-large, 2x-large, 3x-large, 4x-large, 5x-large.`
        );
        this.gap = undefined;
      }
    }

    // Valider justify. Ugyldige verdier ignoreres.
    let justifyValue: LayoutJustify | undefined = this.justify;
    if (changedProperties.has('justify')) {
      if (this.justify !== undefined && !isValidLayoutJustify(this.justify)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-stack] Ugyldig verdi for 'justify': "${this.justify}". Verdien ignoreres. Gyldige verdier er: flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right.`
        );
        justifyValue = undefined;
      }
    }

    if (justifyValue !== undefined) {
      this.style.setProperty('--_stack-justify', justifyValue);
    } else {
      this.style.removeProperty('--_stack-justify');
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stack': NveStack;
  }
}
