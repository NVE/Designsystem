
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { NveCarousel } from 'src/nve-designsystem';
import styles from './nve-carousel-thumbnail.styles';

/**
 * En rekke med miniatyrbilder som brukes til å forhåndsvise bildene i nve-carousel.
 * Definer en lik id på nve-carousel og nve-carousel-thumbnail for å koble komponentene sammen.
 */

@customElement('nve-carousel-thumbnail')

export default class NveCarouselThumbnail extends LitElement implements INveComponent {

  static styles = [styles];

  constructor() {
    super();
  }

  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** Brukes til å targete riktig karusell som skal kobles opp mot thumbnailsene.*/
  @property({ reflect: true, type: String }) carouselId: '' | undefined = undefined; // For å vite hvilken karusell vi skal lytte på.

  private handleSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    const nodes = slot?.assignedNodes({ flatten: true }) as HTMLElement[];
    nodes.forEach((node) => {
      if (node instanceof HTMLImageElement) {
        node.classList.add('thumbnail__image');
      }
    });
    const nodesFiltered = nodes.filter((node) => node instanceof HTMLImageElement) as HTMLElement[];
    nodesFiltered[0].classList.add('thumbnail__image--active');
  }

  private handleClick(e: Event) {
    if (!this.carouselId) return;
    const carousel = document.getElementById(this.carouselId) as NveCarousel; // Finner riktig karusell basert på id.
    const target = e.target as HTMLElement;
    const slot = this.shadowRoot?.querySelector('slot');

    // Henter alle slotted barna som er thumbnail__image's, ellers får vi også 'text' noder.
    const nodes = slot
      ?.assignedNodes({ flatten: true })
      .filter(
        (node) => node instanceof HTMLImageElement && node.classList.contains('thumbnail__image')
      ) as HTMLElement[];

    if (target.matches('.thumbnail__image') && nodes && carousel) {
      const index = nodes.indexOf(target);
      carousel.goToSlide(index);
    }
  }

  firstUpdated() {
    if (!this.carouselId) return;
    const carousel = document.getElementById(this.carouselId) as NveCarousel;

    carousel.addEventListener('sl-slide-change', (event) => {
      const slot = this.shadowRoot?.querySelector('slot');
      const nodes = slot
        ?.assignedNodes({ flatten: true })
        .filter(
          (node) => node instanceof HTMLImageElement && node.classList.contains('thumbnail__image')
        ) as HTMLElement[];
      const slideIndex = (event as CustomEvent).detail.index;
      const imgToActive = nodes[slideIndex];
      nodes?.forEach((img) => img.classList.remove('thumbnail__image--active'));
      imgToActive?.classList.add('thumbnail__image--active');
    });
  }

  render() {
    return html`
      <div class="thumbnail">
        <div class="thumbnail__scroller" @click="${this.handleClick}">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel-thumbnail': NveCarouselThumbnail;
  }
}