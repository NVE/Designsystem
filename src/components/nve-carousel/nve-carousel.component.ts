import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { SlCarouselItem } from '@shoelace-style/shoelace';
import SlCarousel from '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import styles from './nve-carousel.styles';
import { PropertyValueMap } from 'lit';

/**
 * En karusell for å vise bilder eller annet valgfritt innhold i en serie.
 * Nve-carousel støtter ikke propertien: orientation="vertical".
 * @cssproperty --pagination-counter-color - Fargen på sidetellerteksten.
 * @cssproperty --pagination-counter-bg-color - Bakgrunnsfargen til pagineringstelleren.
 */

@customElement('nve-carousel')
// @ts-expect-error overskriver declarations of a private property
export default class NveCarousel extends SlCarousel implements INveComponent {
  static styles = [SlCarousel.styles, styles];

  constructor() {
    super();
  }

  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** Dersom denne er satt vises en teller av typen "1 / 4" på karusellen. */
  @property({ reflect: true, type: Boolean }) paginationCounter: boolean = false;

  /* Overskrive metoden fra shoelace, slik den ser etter nve-carousel-item isteden for sl-carousel-item */
  // @ts-expect-error overskriver private method
  private override isCarouselItem(node: Node): node is SlCarouselItem {
    return node instanceof Element && node.tagName.toLowerCase() === 'nve-carousel-item';
  }

  protected firstUpdated() {
    super.firstUpdated();
    const numberOfItems = this.querySelectorAll('nve-carousel-item:not([data-clone])').length;
    this.shadowRoot?.getElementById('scroll-container')?.setAttribute('data-num-items', numberOfItems.toString());
    this.shadowRoot?.getElementById('scroll-container')?.setAttribute('data-active-item', '1');
    this.addEventListener('sl-slide-change', this.handeSlideChange.bind(this));
  }

  updated(changedProperties: PropertyValueMap<never>) {
    super.updated(changedProperties);
    const numberOfItems = this.querySelectorAll('nve-carousel-item:not([data-clone])').length;
    this.shadowRoot?.getElementById('scroll-container')?.setAttribute('data-num-items', numberOfItems.toString());
  }

  protected handeSlideChange(event: CustomEvent) {
    this.shadowRoot
      ?.getElementById('scroll-container')
      ?.setAttribute('data-active-item', (event.detail.index + 1).toString());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}
