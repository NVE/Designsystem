import { SlMenu } from '@shoelace-style/shoelace';
import { customElement } from 'lit/decorators.js';
import styles from '../nve-menu/nve-menu.styles';
/*
 * En sl-menu i NVE-forkledning.
 * Mer info: https://shoelace.style/components/menu
 * Man kan bruke nve-label inni sl-menu, f.eks. til å kategorisere menyvalg.
 * Nve-label får en spesiell styling når den brukes inni nve-menu
 */
@customElement('nve-menu')
export default class NveMenu extends SlMenu {
  constructor() {
    super();
  }
  static styles = [SlMenu.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu': NveMenu;
  }
}
