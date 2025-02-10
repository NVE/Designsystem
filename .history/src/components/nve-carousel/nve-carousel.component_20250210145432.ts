
import styles from './nve-carousel.styles';
import { customElement, property, query } from 'lit/decorators.js';
import { PropertyValues } from 'lit';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarousel } from '@shoelace-style/shoelace/dist/react';
import { SlCarousel } from '@shoelace-style/shoelace';
import SLCar

  @customElement('nve-carousel')
  export default class NveCarousel extends SlCarousel implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;
  /* Bildebeskrivelse */
  @property({ type: String, reflect: true }) description = '';
  /* Slot til innhold i karusellen */
  @query('slot') slot: any;

  static styles = [styles];

  constructor() {
    super();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('title')) {
      this.style.setProperty('--nve-carousel-description', `"${this.description}"`);
    }
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}