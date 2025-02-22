import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-accordion-item.styles';
import { SlDetails } from '@shoelace-style/shoelace';

/**
 * Viser et kort sammendrag og utvides for å vise ekstra innhold.
 * Kan brukes som en selvstendig komponent eller som en del av nve-accordion.
 */
@customElement('nve-accordion-item')
export default class NveAccordionItem extends SlDetails implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  /** tykk strek på venstre side  */
  @property({ type: Boolean, reflect: true }) leftStroke: boolean = false;

  /** Setter farge på bakgrunn og tekst */
  @property({ type: String, reflect: true }) variant: 'none' | 'neutral' | 'info' | 'success' | 'warning' | 'error' =
    'none';

  /** Vis en ramme rundt hele komponenten */
  @property({ type: Boolean, reflect: true }) border: boolean = false;

  /** Kompakt visning uten luft på sidene. En strek vil vises under for å skille komponenter fra hverandre */
  @property({ type: Boolean, reflect: true }) compact: boolean = false;

  static styles = [SlDetails.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-accordion-item': NveAccordionItem;
  }
}
