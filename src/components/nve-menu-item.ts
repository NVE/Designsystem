import { customElement } from 'lit/decorators.js';
import { SlMenuItem } from '@shoelace-style/shoelace';

@customElement('nve-menu-item')
export class NveMenuItem extends SlMenuItem {
  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu-item': NveMenuItem;
  }
}
