import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-accordion.styles';
import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.js';

/**
 * Viser et kort sammendrag og utvides for å vise ekstra innhold.
 */

@customElement('nve-accordion')
export default class NveAccordion extends SlDetails implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  /** tykk border til venstre  */
  @property({ type: Boolean, reflect: true }) leftstroke: boolean = false;
  /** Variant. Setter farge på bakgrunn og tekst */
  @property({ type: String, reflect: true }) variant: 'none' | 'neutral' | 'info' | 'success' | 'warning' | 'error' =
    'none';
  /** Dropdown-ikon vises til høyre, ikke venstre */
  @property({ type: Boolean, reflect: false }) rightalignedchevron: boolean = false;
  /** border rundt hele komponenten */
  @property({ type: Boolean, reflect: false }) border: boolean = false;
  /** kompakt visning uten sidepadding og border under */
  @property({ type: Boolean, reflect: false }) compact: boolean = false;

  static styles = [SlDetails.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-accordion': NveAccordion;
  }
}
