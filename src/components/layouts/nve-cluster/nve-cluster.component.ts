import { customElement, property } from 'lit/decorators.js';
import styles from './nve-cluster.styles';
import { html, PropertyValues } from 'lit';
import {
  NveLayoutBase,
  SpacingToken,
  LayoutJustify,
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
export type ClusterAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'start' | 'end';

/**
 * Validerer at en verdi er en gyldig align-verdi.
 */
function isValidClusterAlign(value: unknown): value is ClusterAlign {
  const validAlign: ClusterAlign[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'start', 'end'];
  return validAlign.includes(value as ClusterAlign);
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
          `[nve-cluster] Ugyldig verdi for 'gap': "${this.gap}". Verdien ignoreres. Gyldige verdier er: none, 2x-small, x-small, small, medium, large, x-large, 2x-large, 3x-large, 4x-large, 5x-large.`
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
          `[nve-cluster] Ugyldig verdi for 'justify': "${this.justify}". Verdien ignoreres. Gyldige verdier er: flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right.`
        );
        justifyValue = undefined;
      }
    }

    // Valider align. Ugyldige verdier ignoreres.
    let alignValue: ClusterAlign | undefined = this.align;
    if (changedProperties.has('align')) {
      if (this.align !== undefined && !isValidClusterAlign(this.align)) {
        // eslint-disable-next-line no-console
        console.warn(
          `[nve-cluster] Ugyldig verdi for 'align': "${this.align}". Verdien ignoreres. Gyldige verdier er: flex-start, flex-end, center, baseline, stretch, start, end.`
        );
        alignValue = undefined;
      }
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
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-cluster': NveCluster;
  }
}
