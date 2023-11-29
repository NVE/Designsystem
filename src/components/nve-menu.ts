import { customElement } from 'lit/decorators.js';
import { SlMenu } from '@shoelace-style/shoelace';

@customElement('nve-menu')
export class NveMenu extends SlMenu {
  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu': NveMenu;
  }
}
