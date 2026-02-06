import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-radio-demo.styles';
import { classMap } from 'lit/directives/class-map.js';
import '../nve-label/nve-label.component';
let id = 0;
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
  @property({ type: String }) label = '';
  @property({ type: Number, reflect: true }) tabIndex = 0;
  @property() name = '';
  @property({ type: String }) id = '';
  @property({ type: Boolean }) invalid = false; //TODO: dette kanskje burde vaere noe data-invalid eller noes
  /** @internal */
  private readonly componentId = `radio-${++id}`; // TODO: hvor skal vi sette den
  @query('input') input!: HTMLInputElement;
  constructor() {
    super();
    // Delegate focus from host to input
    this.addEventListener('click', this.handleHostClick);
  }

  private handleHostClick() {
    if (!this.disabled) {
      this.input?.click();
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.label) {
      console.warn(
        'nve-input-demo: label is not set. It is recommended to set a label for each input component for better accessibility.'
      );
    }

    if (!this.id) {
      console.warn(
        'nve-input-demo: id is not set. It is recommended to set a unique id for each input component. Otherwise, a default id is set, which does not necessarily provide meaningful context for screen reader users.'
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
  }

  /** Public method to focus the radio */
  focus(options?: FocusOptions) {
    super.focus(options);
  }

  render() {
    const classes = {
      radio: true,
      [`radio--${this.size}`]: true,
      'radio--disabled': this.disabled,
      'radio--invalid': this.invalid,
    };
    //TODO: should i keep input inside the label or otuside?
    return html`
      <label class=${classMap(classes)}>
        <input
          class="radio__input"
          type="radio"
          id=${this.id || this.componentId}
          .checked=${this.checked}
          value=${this.label}
          name="option"
          ?disabled=${this.disabled}
          tabindex="-1"
          @change=${this.handleChange}
        />
        <div class="radio__circle"></div>
        ${this.label}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-demo': NveRadioDemo;
  }
}
