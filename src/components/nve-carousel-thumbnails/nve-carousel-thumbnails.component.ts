
  import { html, LitElement } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-carousel-thumbnails.styles';

  @customElement('nve-carousel-thumbnails')
  export default class NveCarouselThumbnails extends LitElement implements INveComponent {

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
        node.classList.add('thumbnails__image');
        node.setAttribute('part', 'thumbnail-image');
      }
    });
  }

  firstUpdated() {
    const carousel = this.closest('nve-carousel');
    const scroller = this.shadowRoot?.querySelector('.thumbnails__scroller');
    const thumbnails = this.shadowRoot?.querySelectorAll('.thumbnails__image');

    if (scroller && thumbnails && carousel) {
      scroller.addEventListener('click', e => {
        const target = e.target as HTMLElement;

        if (target.matches('.thumbnails__image')) {
          const index = Array.from(thumbnails).indexOf(target);
          (carousel as any).goToSlide(index);
        }
      });
      carousel.addEventListener('sl-slide-change', e => {
        const slideIndex = (e as CustomEvent).detail.index;

        thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle('active', i === slideIndex);
          if (i === slideIndex) {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        });
      });
    }
  }

  render() {
    return  html`
      <div class="thumbnails">
        <div class="thumbnails__scroller">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel-thumbnails': NveCarouselThumbnails;
  }
}