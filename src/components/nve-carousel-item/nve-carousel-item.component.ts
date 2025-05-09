
  import { customElement, property } from 'lit/decorators.js';
  import { html, PropertyValues } from 'lit';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import SlCarouselItem  from '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';
  import styles from './nve-carousel-item.styles';

/**
 * Et karusellelement som representerer bilder eller annet valgfritt innhold i en karusell.
 * Bruk propertien "description" for å legge på bildetekst under bildet.
 * Anbefaler å bare godta liggende eller stående formater på bilder i karusellen for best layout.
 */

@customElement('nve-carousel-item')
export default class NveCarouselItem extends SlCarouselItem implements INveComponent {

  static styles = [SlCarouselItem.styles, styles];

  constructor() {
    super();
  }

  @property({reflect: true, type: String}) testId: string | undefined = undefined;
  /** Brukes til å legge på beskrivelse på bildene. */
  @property({ type: String, reflect: true }) description = '';

  updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);
      if (changedProperties.has('description')) {
        this.style.setProperty('--nve-carousel-description', `"${this.description}"`);
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