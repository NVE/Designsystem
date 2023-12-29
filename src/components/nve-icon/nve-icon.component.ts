import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * @see https://fonts.google.com/icons
 */
@customElement('nve-icon')
export default class NveIcon extends LitElement {
  /**
   * Navnet på ikonet i Material Symbols-biblioteket
   */
  @property({ reflect: true }) name = '';
  static styles = css`
    :host {
      /* Apply Material Icons font-family to the Shadow DOM */
      font-family: 'Material Symbols Outlined';
   
    }
    /* Brukes i dropdown. Eneste måten å override shadow dom for å rotere expand_more ikonet når menyen åpner */
    :host([name="expand_more"]) {
      transform: var(--icon-rotation, none);
      transition: transform 0.3s ease;
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
