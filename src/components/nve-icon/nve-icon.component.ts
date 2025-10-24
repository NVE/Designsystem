import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './nve-icon.styles';
import FontFaceObserver from 'fontfaceobserver';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { offlineIcons } from './offline-icons';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';


/**
 * Et ikon.
 * Vi bruker ikoner fra Material Symbols, men det er også mulig å bruke ikoner fra eget repo. 
 * Vi anbefaler å bruke Material-ikonene.
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

  /** Filnavn til ikonet om du velger å bruke et lokalt ikon */
  @property() src: string = '';

  /** En beskrivelse av ikonet */
  @property() alt: string | undefined = undefined;

  /** Boolean som angir om ikonet har hatt tid til å laste. */
  @state() private iconLoaded = false;

  protected firstUpdated() {
    // For å unngå å importere material ikoner i index.html, vi legger til ikoner programmatisk på den første oppdatering
    // hvis material-icons lenke ikke eksisterer allerede.
    
    if (this.src) return; // vi trenger ikke laste material icons hvis vi bruker lokale ikoner
    
    const offlineIcon = offlineIcons[this.name];
    if (offlineIcon) return; // vi trenger heller ikke laste material icons hvis vi bruker offline-ikoner
    
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
      .catch();
  }

  render() {
    if (this.src) {
      return html`<img src=${this.src} alt=${ifDefined(this.alt)} />`;
    }

    // Bruk offline-ikon hvis det finnes
    const offlineIcon = offlineIcons[this.name];
    if (offlineIcon) {
      return html`${unsafeHTML(offlineIcon)}`;
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
