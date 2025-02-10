
import { customElement, property } from 'lit/decorators.js';
import { PropertyValues } from 'lit';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-carousel.styles';
import SlCarousel  from '@shoelace-style/shoelace/dist/components/carousel/carousel.js';

@customElement('nve-carousel')
export default class NveCarousel extends SlCarousel implements INveComponent {

  static styles = [SlCarousel.styles, styles];

  constructor() {
    super();
  }

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

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