
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-tab-group.styles';
import { SlTabGroup } from '@shoelace-style/shoelace';

  /**
    * Tab groups organiserer innhold i en beholder som viser én seksjon om gangen. 
  */
  @customElement('nve-tab-group')
  export default class NveTabGroup extends SlTabGroup implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [SlTabGroup.styles, styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-group': NveTabGroup;
  }
}