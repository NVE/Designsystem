
import styles from './nve-carousel.styles';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarousel } from '@shoelace-style/shoelace';

  @customElement('nve-carousel')
  export default class NveCarousel extends SlCarousel implements INveComponent {

  /* Fjerne? */
  @property({reflect: true, type: String}) testId: string | undefined = undefined;
  /* Bidetekst */
  @property({ type: String, reflect: true }) imagetext = '';
  /* Slot til innhold i karusellen */
  @query('slot') slot: any;

  static styles = [styles];

  constructor() {
    super();
  }

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
    'nve-carousel': NveCarousel;
  }
}