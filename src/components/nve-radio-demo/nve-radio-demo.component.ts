import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-demo.styles';
import { classMap } from 'lit/directives/class-map.js';

@customElement('nve-radio-demo')
export default class NveRadioDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  static styles = [styles];

  @state() checked = false;

  /** @internal Used by radio group to force disable radios while preserving their original disabled state. */
  @state() forceDisabled = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) value: string | null = null;
  //@property({ reflect: true }) appearance: 'default' | 'button' = 'default';
  @property() size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: Boolean }) disabled = false;
  @property() name = '';
  constructor() {
    super();
  }
  private onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }
  render() {
    const classes = {
      radio: true,
      [`radio--${this.size}`]: true,
    };
    return html`
      <label class="radio-wrapper">
        <input
          type="radio"
          name=${this.name}
          .value=${this.value}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.onChange}
        />
        <span class=${classMap(classes)}></span>
        <span class="label"><slot></slot></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-demo': NveRadioDemo;
  }
}
