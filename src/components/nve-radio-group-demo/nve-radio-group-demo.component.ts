
  import { LitElement } from 'lit';
  import { customElement, property } from 'lit/decorators.js';
  import { INveComponent } from '@interfaces/NveComponent.interface';
  import styles from './nve-radio-group-demo.styles';

  @customElement('nve-radio-group-demo')
  export default class NveRadioGroupDemo extends LitElement implements INveComponent {

  @property({type: String}) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group-demo': NveRadioGroupDemo;
  }
}