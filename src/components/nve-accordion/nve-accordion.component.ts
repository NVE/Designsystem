
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-accordion.styles';
  import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.js';

  /**
 * Viser et kort sammendrag og utvides for å vise ekstra innhold.
 */

  @customElement('nve-accordion')
  export default class NveAccordion extends SlDetails implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [
    SlDetails.styles,
    styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-accordion': NveAccordion;
  }
}