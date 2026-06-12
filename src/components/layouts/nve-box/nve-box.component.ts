import { customElement, property } from 'lit/decorators.js';
import styles from './nve-box.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken } from '../nve-layout-base';

/**
 * Pakker innhold i en boks med padding og bakgrunnsfarge.
 * Basert på Box-primitiven fra Every Layout.
 *
 * Arver padding/margin-props fra NveLayoutBase.
 * Bakgrunnsfarge styres av `background`.
 *
 * @property {SpacingToken} padding - Tokenbasert padding (arvet). Standard: medium.
 * @property {string} background - Tokenbasert bakgrunnsfarge.
 */
export type BoxLayoutPadding = SpacingToken;

@customElement('nve-box')
export default class NveBox extends NveLayoutBase {
  static styles = [styles];

  /** Tokenbasert bakgrunnsfarge. */
  @property({ type: String, reflect: true }) background?: string;

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (
      changedProperties.has('background') &&
      (changedProperties.get('background') !== undefined || this.background !== undefined)
    ) {
      if (this.background !== undefined) {
        this.style.setProperty('background', `var(${this.background})`);
      } else {
        this.style.removeProperty('background');
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-box': NveBox;
  }
}
