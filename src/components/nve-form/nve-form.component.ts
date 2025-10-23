import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-form.styles';

@customElement('nve-form')
export default class NveForm extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  static styles = [styles];

  constructor() {
    super();
  }

  //find button and check if submit was clicked

  //find all components that have validation and run their validate method and show messages

  //support error if the validation comes from external source

  render() {
    return html`<form part="form"><slot></slot></form>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-form': NveForm;
  }
}
