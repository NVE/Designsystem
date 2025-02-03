
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-tab-panel.styles';
import { SlTabPanel } from '@shoelace-style/shoelace';

  /**
    * Tab panels brukes i tab groups for å vise faneinnhold.
  */

  @customElement('nve-tab-panel')
  export default class NveTabPanel extends SlTabPanel implements INveComponent {

  @property({reflect: true, type: String}) testId: string | undefined = undefined;

  static styles = [SlTabPanel.styles, styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-panel': NveTabPanel;
  }
}