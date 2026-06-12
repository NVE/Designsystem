import { customElement, property } from 'lit/decorators.js';
import styles from './stack-layout.styles';
import { LitElement, html } from 'lit';

/**
 * Stabler barn-elementer vertikalt med konsistent mellomrom.
 * Basert på Stack-primitiven fra Every Layout.
 *
 * Mellomrommet styres av `gap` og er låst til spacing-tokenene i designsystemet.
 *
 * @property {StackLayoutGap} gap - Forhåndsdefinert tokenbasert mellomrom.
 * @property {string} justify - justify-content-verdi. Standard: flex-start.
 */
export type StackLayoutGap =
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

@customElement('stack-layout')
export default class StackLayout extends LitElement {
  static styles = [styles];

  /** Forhåndsdefinert tokenbasert mellomrom. Mapper til `--spacing-<verdi>`. */
  @property({ type: String, reflect: true }) gap?: StackLayoutGap;

  /** justify-content på flex-containeren. Standard: flex-start. */
  @property({ type: String, reflect: true }) justify: string = 'flex-start';

  updated() {
    this.style.setProperty('--_stack-justify', this.justify);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stack-layout': StackLayout;
  }
}
