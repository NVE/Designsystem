import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-icon.styles';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * @see https://fonts.google.com/icons
 */
@customElement('nve-icon')
export default class NveIcon extends LitElement {
  static styles = [styles];

  @property({ type: String }) library: 'Outlined' | 'Sharp' = 'Outlined';

  /** Navnet på ikonet i Material Symbols-biblioteket */
  @property({ reflect: true }) name = '';

  protected firstUpdated() {}

  render() {
    return html`<span style="font-family:Material Symbols ${this.library}">${this.name}</span>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
