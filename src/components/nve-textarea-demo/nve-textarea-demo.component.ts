import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-textarea-demo.styles';
import '../nve-icon/nve-icon.component';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

let errorId = 0;
@customElement('nve-textarea-demo')
export default class NveTextareaDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Ledetekst */
  @property() label?: string;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage: string | undefined = undefined;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Om inputfeltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  //autofocus kanskje burde ikke brukes?
  static styles = [styles];
  private readonly errorId = `error-textarea-${++errorId}`;
  constructor() {
    super();
  }

  private emit(eventname: string, detail: any = {}): void {
    const event = new CustomEvent(eventname, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: detail,
    });
    this.dispatchEvent(event);
  }

  /* Triggers when element value changes and element loses focus */
  private handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emit('change', target.value);
  }

  private handleSelect(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emit('select', target.value);
  }

  private handleBlur() {
    this.emit('blur');
  }

  private handleFocus() {
    this.emit('focus');
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
  - Add depends on other components i use plenty of them here and there
  - dispatch all events that need it!!!!!!
  */

  //emit select, selectionchange (is not working in lit, but i guess select should suffice), change, blur, focus no need for input as it is composed,
  /*
   <textarea
        part="textarea"
        class="textarea__control"
        title=${this.title /** En tom tittel hindrer nettleserens valideringsverktøy i å vises ved overføring
        autocapitalize=${ifDefined(this.autocapitalize)}
        autocomplete=${ifDefined(this.autocomplete)}
        autocorrect=${ifDefined(this.autocorrect)}
        ?autofocus=${this.autofocus}
        cols=${ifDefined(this.cols)}
        ?disabled=${this.disabled}
        form=${ifDefined(this.form)}
        maxlength=${ifDefined(this.maxlength)}
        minlength=${ifDefined(this.minlength)}
        name=${ifDefined(this.name)}
        placeholder=${ifDefined(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        rows=${ifDefined(this.rows && this.rows >= 3 ? this.rows : 3)}
        spellcheck=${ifDefined(this.spellcheck)}
        wrap=${ifDefined(this.wrap)}
        .value=${live(this.value)}
        inputmode=${ifDefined(this.inputmode)}
        aria-describedby="help-text"
        @change=${this.handleChange}
        @input=${this.handleInput}
        @blur=${this.handleBlur}
  */

  // HUSK AT aria/described by can be combined both helpt text from the label and from under the input
  // HUSK sjekk om textarea og input har samme hover style
  // HUSK instead of a border i think i should maybe use outline or sth that doesnt collide with the layout
  render() {
    return html`
      <!--
     
      ></textarea>-->
      <div
        class=${classMap({
          textarea__container: true,
          'textarea__container--error': !!this.errorMessage,
          'textarea__container--disabled': this.disabled,
        })}
      >
        ${this.label
          ? html`<label>
              ${this.label}
              ${this.tooltip
                ? html`<nve-tooltip placement="top">
                    <div slot="content">${unsafeHTML(this.tooltip)}</div>
                    <nve-icon class="nve-info-icon" name="Info"></nve-icon>
                  </nve-tooltip>`
                : nothing}
              ${this.required
                ? html`<span class="label__required-text"
                    >*${this.requiredLabel ? html`${this.requiredLabel}` : nothing}</span
                  >`
                : nothing}
            </label>`
          : nothing}
        <div class="textarea__control">
          <textarea
            class="textarea"
            @change=${this.handleChange}
            @blur=${this.handleBlur}
            ?disabled=${this.disabled}
            @focus=${this.handleFocus}
            @select=${this.handleSelect}
            aria-describedby=${ifDefined(this.errorMessage ? this.errorId : undefined)}
            aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
          ></textarea>
          ${this.disabled ? html` <nve-icon name="lock"></nve-icon>` : null}
          ${this.errorMessage ? html` <nve-icon name="error"></nve-icon>` : null}
        </div>
        ${this.errorMessage
          ? html`<span class="textarea__error-msg" id=${this.errorId}>${this.errorMessage}</span>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-textarea-demo': NveTextareaDemo;
  }
}
