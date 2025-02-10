
  import { LitElement } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-carousel.styles';

  @customElement('nve-carousel')
  export default class NveCarousel extends LitElement implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

  

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-carousel': NveCarousel;
  }
}