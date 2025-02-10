
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-carousel-item.styles';
  import SlCarouselItem  from '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';

@customElement('nve-carousel-item')
export default class NveCarouselItem extends SlCarouselItem implements INveComponent {

  static styles = [styles];

  constructor() {
    super();
  }

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  @property({ type: String, reflect: true }) description = '';
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel-item': NveCarouselItem;
  }
}