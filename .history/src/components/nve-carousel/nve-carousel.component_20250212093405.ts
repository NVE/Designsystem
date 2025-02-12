
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-carousel.styles';
import SlCarousel  from '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import { SlCarouselItem } from '@shoelace-style/shoelace';

@customElement('nve-carousel')
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