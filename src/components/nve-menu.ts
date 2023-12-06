import { customElement } from 'lit/decorators.js';
import { SlMenu } from '@shoelace-style/shoelace';
import { css } from 'lit';

@customElement('nve-menu')
export class NveMenu extends SlMenu {
  constructor() {
    super();
  }
  static get styles() {
    return [
      super.styles,
      css`
      :host{
        padding: 0px;
        margin-top: 4px;
      }
      `
    ];
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu': NveMenu;
  }
}
