import { customElement, property } from 'lit/decorators.js';
import styles from './cluster-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Grupperer barn-elementer horisontalt med automatisk linjebryting.
 * Basert på Cluster-primitiven fra Every Layout.
 *
 * Bruk `size` (mapper til spacing-tokens i designsystemet).
 * Bruk kun `gap` når en eksakt, ikke-tokenbasert verdi er nødvendig.
 *
 * @property {string} gap - Eksakt CSS-lengde, f.eks. "12px" eller "1.25rem". Skal ikke brukes for token-verdier, bruk heller `size`.
 * @property {Size} size - Forhåndsdefinert tokenbasert mellomrom.
 * @property {string} justify - justify-content-verdi. Standard: flex-start.
 * @property {string} align - align-items-verdi. Standard: center.
 */
export type ClusterLayoutSize =
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

@customElement('cluster-layout')
export default class ClusterLayout extends LitElement {
  static styles = [styles];

  /** Eksakt CSS-lengde for mellomrom. Skal ikke brukes for token-verdier, bruk heller `size`. */
  @property({ type: String, reflect: true }) gap?: string;

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) size?: ClusterLayoutSize;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: string = 'flex-start';

  /** align-items på flex-containeren. Standard: center. */
  @property({ type: String, reflect: true }) align: string = 'center';

  updated() {
    if (this.gap !== undefined) this.style.setProperty('--_cluster-gap', this.gap);
    this.style.setProperty('--_cluster-justify', this.justify);
    this.style.setProperty('--_cluster-align', this.align);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cluster-layout': ClusterLayout;
  }
}
