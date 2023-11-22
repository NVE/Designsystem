//import { SlIcon } from '@shoelace-style/shoelace';
import { customElement, property } from 'lit/decorators.js';
//import { registerIconLibrary } from '@shoelace-style/shoelace';
import { css, html, LitElement } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nve-icon')
export class NveIcon extends LitElement {
  @property() name = '';
  static styles = css`
    :host {
      /* Apply Material Icons font-family to the Shadow DOM */
      font-family: 'Material Symbols Outlined';
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
