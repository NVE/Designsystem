import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-checkbox-group-demo.styles';

@customElement('nve-checkbox-group-demo')
export default class NveCheckboxGroupDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

  /*
  FORM QUIRKS
  - should i call the class of the invalid state with error or invalid? invalid fits aria better, but error fits more the ds semantic
  - i should rather call error errorMessage maybe?
  - what do we do with event names?
  - use span for error message
  - do we need nve-invalid input when 
  - use input inside the label to avoid extra id's
  -IMPORTANT make labels on both radio and checkboxes also as slots
  -IMPORTANT both checkboxes and radis must scale when users zoom right? so use rems on width and height
  */
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-checkbox-group-demo': NveCheckboxGroupDemo;
  }
}
