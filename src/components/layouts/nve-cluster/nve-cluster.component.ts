import { customElement, property } from 'lit/decorators.js';
import styles from './nve-cluster.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken, LayoutJustify } from '../nve-layout-base';

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
    this.style.setProperty('--_cluster-justify', this.justify);
    this.style.setProperty('--_cluster-align', this.align);
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
