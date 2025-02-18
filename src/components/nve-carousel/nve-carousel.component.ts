
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarouselItem } from '@shoelace-style/shoelace';
import SlCarousel  from '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import styles from './nve-carousel.styles';

/**
 * Bruk propertien "description" på nve-carousel-item for å legge på bildetekst under bildet.
 * Anbefaler å bare godta liggende eller stående formater på bilder i karusellen for best layout.
 * Nve-carousel støtter ikke propertien: orientation="vertical".
 */

@customElement('nve-carousel')
// @ts-expect-error overskriver declarations of a private property
export default class NveCarousel extends SlCarousel implements INveComponent {

  static styles = [SlCarousel.styles, styles];

  constructor() {
    super();
  }

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  /* Overskrive metoden fra shoelace, slik den ser etter nve-carousel-item isteden for sl-carousle-item */
  // @ts-expect-error overskriver private method
  private override isCarouselItem(node: Node): node is SlCarouselItem {
    return node instanceof Element && node.tagName.toLowerCase() === 'nve-carousel-item';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}