import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.js';
import { customElement } from 'lit/decorators.js';
import styles from '../nve-menu/nve-menu.styles';

/**
 * En meny som tilbyr en liste av valg. Valgene lager du med en eller flere nve-menu-item's.
 * Du kan også bruke nve-label inni nve-menu, for eksempel til å kategorisere menyvalg.
 * Nve-label får en spesiell styling når den brukes inni nve-menu
 * For å skille skille valg fra hverandre, kan du bruke nve-divider.
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
