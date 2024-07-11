import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-menu-item.styles';
import { applyStyles } from '@utils/styles';
/**
 * En sl-menu-item i NVE-forkledning.
 * Mer info: https://shoelace.style/components/menu-item
 *
 */
@customElement('nve-menu-item')
// @ts-expect-error - overskriving av private metoder i sl-menu-item
export default class NveMenuItem extends SlMenuItem {
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
  * Egendefinerte stiler som skal brukes på knappen. 
   */
   @property({ reflect: true, type: String }) customStyle?: string;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    // foreløpig fjerner mouseover event for å unngå at fokus blir stjelet når man skriver i search input felt og nve-menu med nve-menu items dukker opp
    this.removeEventListener('mouseover', this.handleMouseOver);
  }

  /**
   * Sørger for at subtext og customStyle blir satt på, hvis de er tilstede i properties
   * 
   */
  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has('subtext')) {
      this.style.setProperty('--nve-menu-item-subtext', `"${this.subtext}"`);
    }
    if (changedProperties.has('customStyle') && this.customStyle) {
      const menuItemElement = this.renderRoot.querySelector('.menu-item') as HTMLElement;

      if (menuItemElement) {
        applyStyles(menuItemElement, this.customStyle);
      }
    }
  }

  // det er metoden fra sl-menu-item som er overstyrt her så at vi kan fjerne mouseover event
  private handleMouseOver = (event: MouseEvent) => {
    this.focus();
    event.stopPropagation();
  };

  static styles = [SlMenuItem.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-menu-item': NveMenuItem;
  }
}
