import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { CSSResultArray, html, LitElement, TemplateResult } from 'lit';
import { watch } from '../../utils/watch';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './nve-switch.styles';
/**
 * En vippe-bryter med støtte for ikoner.
 *
 * @slot - Tekst etter bryteren
 * @slot onicon - Det første ikonet (til venstre). Synlig når status er PÅ
 * @slot officon - Det andre ikonet (til høyre). Synlig når status er AV
 *
 * @event blur Bryter mister fokus
 * @event change Bryter endres
 * @event input Bryter endres
 * @event focus Bryter får fokus
 *
 * @csspart base Topp-element
 * @csspart control Element rundt bryteren
 * @csspart thumb Bryter-indikatoren
 * @csspart label Tekst bak bryteren
 *
 */
@customElement('nve-switch')
export default class NveSwitch extends LitElement implements INveComponent {
  constructor() {
    super();
  }
  @property({ reflect: true, type: String }) testId: string = '';

  /** Hidden checkbox som holder state */
  @query('input[type="checkbox"]') input!: HTMLInputElement;
  @state() private hasFocus = false;
  @property() title = ''; // make reactive to pass through

  /** Navn på switch */
  @property() name = '';

  /** Switchens verdi, bruk i forms */
  @property() value: string = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Verdien til switchen. */
  @property({ type: Boolean, reflect: true }) checked = false;
  static styles: CSSResultArray = [styles];
  private emit(eventname: string): void {
    const event = new CustomEvent(eventname, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
    });
    this.dispatchEvent(event);
  }

  private handleBlur() {
    this.hasFocus = false;
  }

  private handleInput() {
    //do nothing, bubble event
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit('change');
  }

  private handleFocus() {
    this.hasFocus = true;
  }
  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
      this.emit('change');
      this.emit('input');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
      this.emit('change');
      this.emit('input');
    }
  }
  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    this.input!.checked = this.checked; // force a sync update
  }

  /** click, focus og blur sendes til input (checkbox) */
  click() {
    this.input!.click();
  }
  focus(options?: FocusOptions) {
    this.input!.focus(options);
  }
  blur() {
    this.input!.blur();
  }

  render(): TemplateResult {
    return html`<div>
      <label
        part="base"
        class=${classMap({
          switch: true,
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
          'switch--focused': this.hasFocus,
        })}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-describedby="help-text"
          @click=${this.handleClick}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />
        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
          <span class="switch__icon switch__officon"><slot name="officon"></slot></span>
          <span class="switch__icon switch__onicon"><slot name="onicon"></slot></span>
        </span>

        <div part="label" class="">
          <slot></slot>
        </div>
      </label>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-switch': NveSwitch;
  }
}
