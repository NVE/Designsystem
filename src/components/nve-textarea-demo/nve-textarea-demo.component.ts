import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
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
  /* Native textarea attributes */
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: String }) autocomplete?: string;
  @property({ type: Number }) cols?: number;
  @property({ type: String }) form?: string;
  @property({ type: Number }) maxLength?: number;
  @property({ type: Number }) minLength?: number;
  @property({ type: String }) name?: string;
  @property({ type: String }) placeholder?: string;
  /** Om textareafeltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Number }) rows?: number;
  @property({ type: String }) wrap?: string;

  /* Custom textarea attributes */
  /** Ledetekst */
  @property({ type: Boolean, reflect: true }) filled: boolean = false;
  /** Ledetekst */
  @property() label?: string;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage?: string;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Om inputfeltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  @query('.textarea') textarea!: HTMLTextAreaElement;

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

  private handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emit('change', target.value);
  }

  //blur is emitted from the nve-textarea, so is focus.
  //input

  // select is inbuilt textarea event. its not gonna get triggered on the host. it has to be textarea that will emit it
  private handleSelect(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emit('select', target.value);
  }
  /* Triggers when element value changes and element loses focus 


 

  private handleFocus() {
    this.emit('focus');
  }
    */

  focus(options?: FocusOptions) {
    this.textarea.focus(options);
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
  protected firstUpdated(_changedProperties: PropertyValues): void {
    if (this.autofocus) {
      this.focus();
    }
  }
  render() {
    return html`
      <!--
     
      ></textarea>-->
      <div
        class=${classMap({
          textarea__container: true,
          'textarea__container--error': !!this.errorMessage,
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
        <div
          class=${classMap({
            textarea__control: true,
            'textarea__control--filled': this.filled,
            'textarea__control--readonly': this.readonly,
            'textarea__control--disabled': this.disabled,
            'textarea__control--error': !!this.errorMessage,
          })}
        >
          <textarea
            part="textarea"
            class=${classMap({
              textarea: true,
            })}
            autocapitalize=${ifDefined(this.autocapitalize)}
            autocomplete=${ifDefined(this.autocomplete)}
            autocorrect=${ifDefined(this.autocorrect)}
            cols=${ifDefined(this.cols)}
            form=${ifDefined(this.form)}
            maxlength=${ifDefined(this.maxLength)}
            minlength=${ifDefined(this.minLength)}
            name=${ifDefined(this.name)}
            placeholder=${ifDefined(this.placeholder)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            rows=${ifDefined(this.rows)}
            spellcheck=${ifDefined(this.spellcheck)}
            wrap=${ifDefined(this.wrap)}
            @change=${this.handleChange}
            ?disabled=${this.disabled}
            @select=${this.handleSelect}
            aria-describedby=${ifDefined(this.errorMessage ? this.errorId : undefined)}
            aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
          ></textarea>
          ${this.disabled ? html` <nve-icon name="lock"></nve-icon>` : null}
          ${this.readonly ? html`<nve-icon name="visibility"></nve-icon>` : nothing}
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
