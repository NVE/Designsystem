import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './nve-icon.styles';
import FontFaceObserver from 'fontfaceobserver';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols, men det er også mulig å bruke ikoner fra egen repo. Det anbefales sterkt å bruke Material-ikonene.
 * Strektykkelsen skal være 400, uavhengig av ikonets størrelse, og kun stilene Sharp og Outlined skal brukes.
 * Fill-stilen bør unngås, da den fyller hele ikonet med farge i stedet for å bruke kun konturer
 * @see https://fonts.google.com/icons
 * @csspart icon - Selve ikon span-element.
 * @cssproperty --icon-size - Størrelse på ikonet. 16px er standard.
 */
@customElement('nve-icon')
export default class NveIcon extends LitElement {
  static styles = [styles];

  /** Skarpe eller myke hjørner. Ikonene i ikonsettet skal i utgangspunktet ha skarpe hjørner, men hjørner kan være avrundet om det gjør motivet tydeligere. */
  @property() library: 'Outlined' | 'Sharp' = 'Sharp';

  /** Navnet på ikonet i Material Symbols-biblioteket */
  @property({ type: String, reflect: true }) name: string = '';

  @property() src: string = '';
  @property() alt: string | undefined = undefined;

  /** Boolean som angir om ikonet har hatt tid til å laste. */
  @state() private iconLoaded = false;

  protected firstUpdated() {
    // For å unngå å importere material ikoner i index.html, vi legger til ikoner programmatisk på den første oppdatering
    // hvis material-icons lenke ikke eksisterer allerede.
    if (this.src) return;
    if (!document.getElementById(`material-icons-${this.library.toLowerCase()}`)) {
      const link = document.createElement('link');
      link.id = `material-icons-${this.library.toLowerCase()}`;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+${this.library}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`;
      document.head.appendChild(link);
    }

    // Siden lasting av materialikoner kan ta litt tid, lager vi en plassholder for å unngå at en tekst på navnet på ikonet er synlig før ikonet har rukket å laste.
    const observer = new FontFaceObserver(`Material Symbols ${this.library}`);
    observer
      .load()
      .then(() => {
        this.iconLoaded = true;
        this.requestUpdate();
      })
      .catch()
        }

  render() {
    if (this.src) {
      return html`<img src=${this.src} alt=${ifDefined(this.alt)} />`;
    }

    if (!this.src && this.iconLoaded) {
      return html`<span
        part="icon"
        class=${classMap({
          'material-outlined': this.library === 'Outlined',
          'material-sharp': this.library === 'Sharp',
        })}
        >${this.name}</span
      >`;
    } else {
      return html`<nve-skeleton class="placeholder" effect="sheen"></nve-skeleton>`;
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-icon': NveIcon;
  }
}
