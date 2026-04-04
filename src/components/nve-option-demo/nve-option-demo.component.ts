import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-option-demo.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('nve-option-demo')
export default class NveOptionDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String, attribute: 'aria-selected', reflect: true }) ariaSelected = 'false';
  @property({ type: Boolean }) selected = false;
  @property({ type: Boolean, reflect: true }) active = false;

  /*
  i wont use selected proeprty as this on will be controlled by value proeprty on the select insted
  i use disabled and label. if label is present the text inside option is ingored
  
  since i dont use native option check the retningslinjer in wcag on arias and keybaord support


  consider changing active to focus, active sounds like its selected, but then again aria-activedescendant marks the focus one, not selected one

  should we have grouped options as well?
  */
  static styles = [styles];

  constructor() {
    super();
    this.tabIndex = -1;
    this.setAttribute('role', 'option');
  }

  // aria-disabled may change
  connectedCallback() {
    super.connectedCallback();

    if (this.disabled) {
      this.setAttribute('aria-disabled', 'true');
    }
  }

  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class=${classMap({ option: true, 'option--disabled': this.disabled })} testId=${ifDefined(this.testId)}>
        ${this.ariaSelected === 'true' ? html`<nve-icon name="check" aria-hidden="true"></nve-icon>` : nothing}
        ${this.label ? this.label : html`<slot></slot>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-option-demo': NveOptionDemo;
  }
}
