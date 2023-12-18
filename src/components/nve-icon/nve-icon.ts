import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * @see https://fonts.google.com/icons
 */
@customElement('nve-icon')
export class NveIcon extends LitElement {

  /**
   * Navnet på ikonet i Material Symbols-biblioteket
   */
  @property() name = '';
  static styles = css`
    :host {
      /* Apply Material Icons font-family to the Shadow DOM */
      font-family: 'Material Symbols Outlined';
    }
  
    /* we need it to center the icon */
    :is(span) {
      display: flex;
    }
  `;
  render() {
    return html` <span class="material-symbols-outlined">${this.name}</span> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
