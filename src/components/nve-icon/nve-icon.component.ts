import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-icon.styles';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols.
 * Vi bruker strek-tykkelse 400 uansett størrelse på ikonet.
 * Fill skal ikke brukes. 
 * @see https://fonts.google.com/icons
 */
@customElement('nve-icon')
export default class NveIcon extends LitElement {
  static styles = [styles];

  /** Skarpe eller myke hjørner. Ikonene i ikonsettet skal i utgangspunktet ha skarpe hjørner, men hjørner kan være avrundet om det gjør motivet tydeligere. */
  @property({ type: String }) library: 'Outlined' | 'Sharp' = 'Sharp';

  /** Navnet på ikonet i Material Symbols-biblioteket */
  @property({ reflect: true }) name = '';

  protected firstUpdated() {
    // For å unngå å importere material ikoner i index.html, vi legger til ikoner programmatisk på den første oppdatering
    // hvis material-icons lenke ikke eksisterer allerede
    if (!document.getElementById(`material-icons-${this.library.toLowerCase()}`)) {
      const link = document.createElement('link');
      link.id = `material-icons-${this.library.toLowerCase()}`;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+${this.library}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`;

      document.head.appendChild(link);
    }
  }

  render() {
    return html`<span part="icon" style="font-family:Material Symbols ${this.library}">${this.name}</span>`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
