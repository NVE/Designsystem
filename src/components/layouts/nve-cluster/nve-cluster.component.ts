import { customElement, property } from 'lit/decorators.js';
import styles from './nve-cluster.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken } from '../nve-layout-base';

/**
 * Grupperer barn-elementer horisontalt med automatisk linjebryting.
 * Basert på Cluster-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 * Arver padding/margin-props fra NveLayoutBase.
 *
 * @property {ClusterLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 * @property {string} justify - justify-content-verdi. Standard: flex-start.
 * @property {string} align - align-items-verdi. Standard: center.
 */
export type ClusterLayoutGap = SpacingToken;

@customElement('nve-cluster')
export default class NveCluster extends NveLayoutBase {
  static styles = [...styles];

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: ClusterLayoutGap;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: string = 'flex-start';

  /** align-items på flex-containeren. Standard: center. */
  @property({ type: String, reflect: true }) align: string = 'center';

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
