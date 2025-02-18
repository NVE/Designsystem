
  import { html, LitElement } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-carousel-thumbnail.styles';
  import { NveCarousel } from 'src/nve-designsystem';

  @customElement('nve-carousel-thumbnail')
  export default class NveCarouselThumbnail extends LitElement implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

  private handleSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    const nodes = slot?.assignedNodes({ flatten: true }) as HTMLElement[];
    nodes.forEach(node => {
      if (node instanceof HTMLImageElement) {
        node.classList.add('thumbnail__image');
      }
    });
  }

  firstUpdated() {
    const carousel = this.closest('nve-carousel') as NveCarousel;
    const scroller = this.shadowRoot?.querySelector('.thumbnail__scroller');
    const thumbnail = this.shadowRoot?.querySelectorAll('.thumbnail__image');

    console.log('carousel:', carousel);
    console.log('scroller:', scroller);
    console.log('thumbnail:', thumbnail);

    if (scroller && thumbnail && carousel) {
      console.log('heihei');
      scroller.addEventListener('click', e => {
        const target = e.target as HTMLElement;

        if (target.matches('.thumbnail__image')) {
          console.log('Thumbnail clicked:', target);
          const index = Array.from(thumbnail).indexOf(target);
          carousel.goToSlide(index);
        }
      });
      carousel.addEventListener('sl-slide-change', event => {
        const slideIndex = (event as CustomEvent).detail.index;

        thumbnail.forEach((image, index) => {
          image.classList.toggle('active', index === slideIndex);
          if (index === slideIndex) {
            image.scrollIntoView({
              block: 'nearest'
            });
          }
        });
      });
    }
  }

  render() {
    return  html`
      <div class="thumbnail">
        <div class="thumbnail__scroller">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel-thumbnail': NveCarouselThumbnail;
  }
}