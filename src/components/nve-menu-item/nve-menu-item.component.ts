import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-menu-item.styles';
import { PropertyValues } from 'lit';

/**
 * Bruk denne til å lage valg i en nve-menu.
 * Property "loading" støttes foreløpig ikke.
 */
@customElement('nve-menu-item')
// @ts-expect-error - overskriving av private metoder i sl-menu-item
export default class NveMenuItem extends SlMenuItem {
  /**
   * Gi menyvalget en egen undertekst.
   */
  @property({ type: String, reflect: true }) subtext: string = '';
  /**
   * Gjør at teksten får innrykk og en svakere farge
   */
  @property({ type: Boolean, reflect: true }) indent: boolean = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    // foreløpig fjerner mouseover event for å unngå at fokus blir stjelet når man skriver i search input felt og nve-menu med nve-menu items dukker opp
    this.removeEventListener('mouseover', this.handleMouseOver);
  }

  /**
   * Sørger for at subtext blir satt på, hvis den er tilstede i properties
   */
  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);
    if (changedProperties.has('subtext')) {
      this.style.setProperty('--nve-menu-item-subtext', `"${this.subtext}"`);
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
