
import styles from './nve-carousel.styles';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarousel } from '@shoelace-style/shoelace';

  @customElement('nve-carousel')
  export default class NveCarousel extends SlCarousel implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;
  /* Bidetekst */
  @property({ type: String, reflect: true }) imagetext = '';
  
  @query('slot') slot: any;

  static styles = [styles];

  constructor() {
    super();
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}