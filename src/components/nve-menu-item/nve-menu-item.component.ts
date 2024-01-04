import { SlMenuItem } from '@shoelace-style/shoelace';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-menu-item.styles';
/**
 * En sl-menu-item i NVE-forkledning.
 * Mer info: https://shoelace.style/components/menu-item
 *
 */
@customElement('nve-menu-item')
export class NveMenuItem extends SlMenuItem {
  /**
   * Tekst som vises som subtext(undertekst).
   */
  @property({ type: String, reflect: true }) subtext: string = '';
  /**
   * Setter en divider på toppen av item.
   */
  @property({ type: Boolean, reflect: true }) dividerTop: boolean = false;
  /**
   * Setter en divider på bunnen av item.
   */
  @property({ type: Boolean, reflect: true }) dividerBottom: boolean = false;
  /**
   * Gjør at teksten blir indent og mindre dominant farge
   */
  @property({ type: Boolean, reflect: true }) indent: boolean = false;
  /**
   * Gjør at teksten vises som en unclickable kategori
   */
  @property({ type: Boolean, reflect: true }) category: boolean = false;

  constructor() {
    super();
  }

  /**
   * Sørger for at subtext blir satt på, hvis den er tilstede i properties
   */
  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has('subtext')) {
      this.style.setProperty('--nve-menu-item-subtext', `"${this.subtext}"`);
    }
  }

  static styles = [SlMenuItem.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu-item': NveMenuItem;
  }
}
