import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * @see https://fonts.google.com/icons
 */
@customElement('nve-icon')
export class NveIcon extends LitElement {
  static properties = { name: { type: String } };
  /**
   * Navnet på ikonet i Material Symbols-biblioteket
   */
  name = '';
  static styles = css`
    :host {
      /* Apply Material Icons font-family to the Shadow DOM */
      font-family: 'Material Symbols Outlined';
    }

    /* we need it to center the icon */
    :is(span) {
      display: inline-flex;
      line-height: 24px;
      font-weight: var(--font-weight-regular);
    }
  `;
  render() {
    return html`<span class="material-symbols-outlined">${this.name}</span>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
