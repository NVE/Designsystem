
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-tab.styles';
import { SlTab } from '@shoelace-style/shoelace';

  /**
    * Tabs brukes i tab-groups for å representere og aktivere tab-panels. 
  */

  @customElement('nve-tab')
  export default class NveTab extends SlTab implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [SlTab.styles, styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab': NveTab;
  }
}