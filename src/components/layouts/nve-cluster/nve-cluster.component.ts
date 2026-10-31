import { customElement, property } from 'lit/decorators.js';
import styles from './nve-cluster.styles';
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
 * Grupperer barn-elementer horisontalt med automatisk linjebryting.
 * Basert på Cluster-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 * Arver padding/margin-props fra NveLayoutBase.
 *
 * @property {ClusterLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 * @property {LayoutJustify} justify - justify-content-verdi. Standard: flex-start.
 * @property {ClusterAlign} align - align-items-verdi. Standard: center.
 */
export type ClusterLayoutGap = SpacingToken;
const validAlignValues = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'start', 'end'] as const;
export type ClusterAlign = (typeof validAlignValues)[number];

/**
 * Validerer at en verdi er en gyldig align-verdi.
 */
function isValidClusterAlign(value: unknown): value is ClusterAlign {
  return typeof value === 'string' && (validAlignValues as readonly string[]).includes(value);
}

@customElement('nve-cluster')
export default class NveCluster extends NveLayoutBase {
  static styles = [...styles];

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: ClusterLayoutGap;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: LayoutJustify = 'flex-start';

  /** align-items på flex-containeren. Standard: center. */
  @property({ type: String, reflect: true }) align: ClusterAlign = 'center';

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Valider gap. Ugyldige verdier ignoreres.
    if (changedProperties.has('gap')) {
      if (this.gap !== undefined && !isValidSpacingToken(this.gap)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-cluster] Ugyldig verdi for 'gap': "${this.gap}". Verdien ignoreres. Gyldige verdier er: ${spacingTokens.join(', ')}.`
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
        `[nve-cluster] Ugyldig verdi for 'justify': "${this.justify}". Verdien ignoreres. Gyldige verdier er: ${layoutJustifyValues.join(', ')}.`
      );
    }

    // Valider align. Ugyldige verdier ignoreres.
    const alignValue: ClusterAlign | undefined = isValidClusterAlign(this.align) ? this.align : undefined;
    if (
      changedProperties.has('align') &&
      this.align !== undefined &&
      !isValidClusterAlign(this.align)
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `[nve-cluster] Ugyldig verdi for 'align': "${this.align}". Verdien ignoreres. Gyldige verdier er: ${validAlignValues.join(', ')}.`
      );
    }

    if (justifyValue !== undefined) {
      this.style.setProperty('--_cluster-justify', justifyValue);
    } else {
      this.style.removeProperty('--_cluster-justify');
    }

    if (alignValue !== undefined) {
      this.style.setProperty('--_cluster-align', alignValue);
    } else {
      this.style.removeProperty('--_cluster-align');
    }
  }

  render() {
    return this.renderLayout();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-cluster': NveCluster;
  }
}
