import { customElement, property } from 'lit/decorators.js';
import styles from './nve-stack.styles';
import { PropertyValues } from 'lit';
import {
  NveLayoutBase,
  SpacingToken,
  LayoutJustify,
  spacingTokens,
  layoutJustifyValues,
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
          `[nve-stack] Ugyldig verdi for 'gap': "${this.gap}". Verdien ignoreres. Gyldige verdier er: ${spacingTokens.join(', ')}.`
        );
        this.gap = undefined;
      }
    }

    // Valider justify. Ugyldige verdier ignoreres.
    const justifyValue: LayoutJustify | undefined = isValidLayoutJustify(this.justify) ? this.justify : undefined;
    if (
      changedProperties.has('justify') &&
      this.justify !== undefined &&
      !isValidLayoutJustify(this.justify)
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `[nve-stack] Ugyldig verdi for 'justify': "${this.justify}". Verdien ignoreres. Gyldige verdier er: ${layoutJustifyValues.join(', ')}.`
      );
    }

    if (justifyValue !== undefined) {
      this.style.setProperty('--_stack-justify', justifyValue);
    } else {
      this.style.removeProperty('--_stack-justify');
    }
  }

  render() {
    return this.renderLayout();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-stack': NveStack;
  }
}
