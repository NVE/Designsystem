
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-carousel-item.styles';
  import { html, PropertyValues } from 'lit';
  import SlCarouselItem  from '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';

@customElement('nve-carousel-item')
export default class NveCarouselItem extends SlCarouselItem implements INveComponent {

  static styles = [SlCarouselItem.styles, styles];

  constructor() {
    super();
  }

  @property({reflect: true, type: String}) testId: string | undefined = undefined;
 /* Bildebeskrivelse */
  @property({ type: String, reflect: true }) description = '';

  updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);
      if (changedProperties.has('description')) {
        this.style.setProperty('--nve-carousel-description', `"${this.description}"`);
      }
    }

    firstUpdated() {
      const imgSlot = this.shadowRoot?.querySelector('slot');
      if (imgSlot) {
        imgSlot.addEventListener('slotchange', () => {
          const img = imgSlot.assignedElements()[0] as HTMLImageElement;
          if (img) {
            img.onload = () => {
              if (img.naturalHeight < img.naturalWidth) {
                img.classList.add('rotate-horizontal');
              }
            };
          }
        });
      }
    }

    render() {
      return html`
        <slot></slot>
        ${this.description ? html`
          <div class="carousel-item__description">
            <p>${this.description}</p>
          </div>` : ''}
      `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel-item': NveCarouselItem;
  }
}