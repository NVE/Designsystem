import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import styles from './nve-alert.styles';
import { customElement, property } from 'lit/decorators.js';
import { PropertyValues } from 'lit';

/**
 * Brukes til å vise viktige beskjeder enten på en side eller som en enkel popup.
 *
 * Hvis du trenger å vise en statisk varsling med mer informasjon, kan det hende at
 * nve-message-card er et bedre valg.
 */
@customElement('nve-alert')
export default class NveAlert extends SlAlert {
  constructor() {
    super();
  }
  /** Tykk tekst, vises helt til venstre */
  @property({ reflect: true }) title: string = '';
  /** Tynnere beskrivelse tekst */
  @property({ reflect: true }) text: string = '';
  /** Bestemmer sterkere bakgrunnsfarge */
  @property({ type: String, reflect: false }) saturation: 'emphasized' | null = null;
  /** Ramme linje til venstre */
  @property({ type: Boolean, reflect: true }) leftStroke: boolean = false;

  static styles = [
    SlAlert.styles, // we have to have this otherwise closable is not working
    styles,
  ];

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('title')) {
      this.style.setProperty('--nve-alert-title', `"${this.title}"`);
    }
    if (changedProperties.has('text')) {
      this.style.setProperty('--nve-alert-text', `"${this.text}"`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-alert': NveAlert;
  }
}
