import { customElement, property } from 'lit/decorators.js';
import styles from './nve-stack.styles';
import { html, PropertyValues } from 'lit';
import { NveLayoutBase, SpacingToken } from '../nve-layout-base';

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
  @property({ type: String, reflect: true }) justify: string = 'flex-start';

  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    this.style.setProperty('--_stack-justify', this.justify);
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
