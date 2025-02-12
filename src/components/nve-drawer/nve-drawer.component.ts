import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-drawer.styles';
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.js';

/**
 * Bruk denne hvor du trenger en skuff, enten for hele siden eller mer lokalisert inne i en boks.
 * For mer informasjon se https://shoelace.style/components/drawer
 */
@customElement('nve-drawer')
export default class NveDrawer extends SlDrawer implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  static styles = [SlDrawer.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-drawer': NveDrawer;
  }
}
