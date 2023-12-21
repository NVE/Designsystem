import { css, html, LitElement } from 'lit';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * @see https://fonts.google.com/icons
 */
export class NveIcon extends LitElement {

  declare name: string;
  static properties = {
    name: { type: String }
  }

  constructor() {
    super();
    this.name = '';
  }

  /**
   * Navnet på ikonet i Material Symbols-biblioteket
   */
  static styles = css`
    :host {
      /* Apply Material Icons font-family to the Shadow DOM */
      font-family: 'Material Symbols Outlined';
    }
  
    /* we need it to center the icon */
    :is(span) {
      display: inline-flex;
    }
  `;
  render() {
    return html`<span class="material-symbols-outlined">${this.name}</span>`;
  }
}

customElements.define('nve-icon', NveIcon);
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
