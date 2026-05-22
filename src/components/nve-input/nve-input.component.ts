import { customElement, property, query, state } from 'lit/decorators.js';
import styles from './nve-input.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, LitElement, nothing, PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLabel, labelStyles } from '../../templates/label';
import '../nve-icon/nve-icon.component';
import { live } from 'lit/directives/live.js';

let id = 0;
/**
 * Input brukes i et skjema når brukeren skal skrive inn kort tekst eller enkel informasjon i én linje.
 * Feltet støtter flere typer og kan brukes både for fritekst og strukturert inndata som tall, dato og tid.
 *
 * @event change - når verdien i input endres og elementet mister fokus
 * @event select - når brukeren markerer tekst i input
 *
 * @csspart field - wrapper rundt hele input-komponenten
 * @csspart help-text - hjelpetekst som vises over input
 * @csspart input - wrapper rundt input-elementet og eventuelle ikoner
 * @csspart input__control - selve input-elementet
 * @csspart hint-text - hint-tekst som vises under input, eller feilmelding hvis det er en valideringsfeil
 * @csspart status-icon - ikon som viser status for inputfeltet
 * @csspart clear-button - knapp for å tømme verdien i inputfeltet
 * @csspart show-password-button - knapp for å vise/ skjule passord i password-type input
 */
@customElement('nve-input')
export default class NveInput extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /* Native input attributer */
  /** Om autocomplete skal være aktivert */
  @property({ type: String }) autocomplete?: string;
  /** Om inputfeltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Inputmodus for feltet */
  @property({ type: String }) inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /** Maksimalt antall tegn som kan skrives inn */
  @property({ type: Number }) maxLength?: number;
  /** Maksimal verdi */
  @property({ type: String }) max?: string;
  /** Minimal verdi */
  @property({ type: String }) min?: string;
  /** Placeholder-tekst som vises når feltet er tomt */
  @property({ type: String }) placeholder?: string;
  /** Om inputfeltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Stegverdi for inputfeltet */
  @property({ type: Number }) step?: number;
  /** Inputtype for feltet */
  @property({ type: String }) type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'week'
    | 'month'
    | 'url' = 'text';
  /** Verdien i inputfeltet */
  @property({ type: String }) value: string = '';

  /** Custom input attributer */
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises.*/
  @property({ type: String, reflect: true }) errorMessage?: string;
  /** Om inputfeltet skal ha en mørk bakgrunn */
  @property({ type: Boolean }) filled: boolean = false;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String }) helpText = '';
  /** Hint-tekst som vises under feltet */
  @property({ type: String }) hint = '';
  /** Ledetekst */
  @property() label?: string;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Størrelse på inputfeltet */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Om inputfeltet skal ha en knapp for å tømme verdien. Vises kun for tekst type. */
  @property({ type: Boolean }) clearable = false;

  @query('.input__control') input!: HTMLInputElement;
  @state() showPassword = false;
  autocapitalize = 'off';
  private readonly inputId = `input-${++id}`;

  static styles = [styles, labelStyles];

  protected async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    await this.updateComplete;
    if (this.autofocus) {
      this.focus();
    }
    if (!this.label) {
      console.warn(
        'nve-input: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  /**
   * Sender en egendefinert hendelse.
   * @param name - Navn på hendelsen
   * @param detail - Detaljer som skal inkluderes i hendelsen
   */
  private emitEvent<D>(
    name: string,
    detail: D,
    options: { bubbles?: boolean; composed?: boolean } = { bubbles: true, composed: true }
  ) {
    this.dispatchEvent(
      new CustomEvent<D>(name, {
        detail,
        bubbles: options.bubbles,
        composed: options.composed,
      })
    );
  }

  /**
   * Sender en 'change' hendelse når verdien i input endres og elementet mister fokus.
   * Detaljene i hendelsen inneholder den nye verdien.
   * @param e - Event som utløser endringen
   */
  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.emitEvent('change', target.value);
  }

  /**
   * Sender en 'select' hendelse når brukeren markerer tekst i input.
   */
  private handleSelect() {
    this.emitEvent('select', '');
  }

  private handleClear(e: MouseEvent) {
    e.preventDefault();
    this.value = '';
    this.emitEvent('change', '', { composed: false });
    this.input.focus();
  }

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
  }

  /**
   * Toggler synligheten av passordet i password-type input. Når showPassword er true, vises passordet som vanlig tekst,
   * ellers vises det som prikker.
   */
  private togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  /** Fokuserer inputfeltet */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Velger tekst i input-feltet */
  select() {
    this.input?.select();
  }

  /** Setter utvalg i input-feltet
   * @param selectionStart - Startposisjon for utvalget
   * @param selectionEnd - Sluttposisjon for utvalget
   * @param selectionDirection - Retning for utvalget, kan være 'forward', 'backward' eller 'none'
   */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Erstatter tekst i input-feltet
   * @param replacement - Teksten som skal settes inn
   * @param start - Startposisjon for erstatningen, hvis ikke angitt brukes nåværende markering
   * @param end - Sluttposisjon for erstatningen, hvis ikke angitt brukes nåværende markering
   * @param selectMode - Hvordan utvalget skal håndteres etter erstatning, kan være 'select', 'start', 'end' eller 'preserve'
   */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    const selectionStart = start ?? this.input.selectionStart!;
    const selectionEnd = end ?? this.input.selectionEnd!;

    if (selectionStart === null || selectionEnd === null) {
      console.warn('Unable to set range text: input element does not have a valid selection range.');
      return;
    }

    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    this.value = this.input.value;
  }

  /** Øker verdien i et numerisk inputfelt med verdien fra step-attributtet. */
  stepUp() {
    this.input.stepUp();
    this.value = this.input.value;
  }

  /** Senker verdien i et numerisk inputfelt med verdien fra step-attributtet. */
  stepDown() {
    this.input.stepDown();
    this.value = this.input.value;
  }

  // vi lar pilknappene for number input være, ingen design endringer.
  render() {
    const labelId = `${this.id || this.inputId}`;
    const helpTextId = `${this.id || this.inputId}-helptext`;
    const hintTextId = `${this.id || this.inputId}-hinttext`;
    const describedBy = [this.helpText ? helpTextId : '', this.errorMessage || this.hint ? hintTextId : '']
      .filter(Boolean)
      .join(' ');
    const type = this.type === 'password' && this.showPassword ? 'text' : this.type;

    const statusIcon = this.errorMessage ? 'error' : this.disabled ? 'lock' : this.readonly ? 'edit_off' : undefined;
    return html`
      <div
        part="field"
        class=${classMap({
          field: true,
          'field--error': !!this.errorMessage,
          'field--readonly': this.readonly,
          'field--disabled': this.disabled,
          'field--filled': this.filled,
        })}
      >
        <!-- Ledetekst -->
        ${getLabel(labelId, this.label, this.tooltip, this.required, this.requiredLabel)}
        <!-- Hjelpetekst -->
        ${this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>${this.helpText}</p>`
          : nothing}
        <div
          part="input"
          class=${classMap({
            input: true,
            [`input--${this.size}`]: true,
          })}
        >
          <slot name="start"></slot>
          <input
            part="input__control"
            id=${labelId}
            class=${classMap({
              input__control: true,
            })}
            autocapitalize=${ifDefined(this.autocapitalize)}
            autocomplete=${ifDefined(this.autocomplete)}
            autocorrect=${ifDefined(this.autocorrect)}
            ?disabled=${this.disabled}
            inputmode=${ifDefined(this.inputmode)}
            maxlength=${ifDefined(this.maxLength)}
            max=${ifDefined(this.max)}
            min=${ifDefined(this.min)}
            placeholder=${ifDefined(this.placeholder)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            step=${ifDefined(this.step)}
            spellcheck=${ifDefined(this.spellcheck)}
            type=${type}
            .value=${live(this.value)}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @select=${this.handleSelect}
            aria-describedby=${ifDefined(describedBy || undefined)}
            aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
          />
          <!-- Ikoner og knapper -->
          ${this.clearable && this.value
            ? html`<button part="clear-button" tabindex="-1" @click=${this.handleClear} class="input__clear-button">
                <nve-icon name="cancel" aria-hidden="true"></nve-icon>
              </button>`
            : nothing}
          ${this.type === 'password'
            ? html`<button
                part="show-password-button"
                tabindex="-1"
                @click=${this.togglePasswordVisibility}
                class="input__clear-button"
              >
                <nve-icon name=${this.showPassword ? 'visibility_off' : 'visibility'} aria-hidden="true"></nve-icon>
              </button>`
            : nothing}
          ${statusIcon
            ? html`<nve-icon
                class="input__control__icon"
                part="status-icon"
                name=${statusIcon}
                aria-hidden="true"
              ></nve-icon>`
            : nothing}
        </div>
        <!-- Hint-tekst og feilmelding -->
        ${this.errorMessage || this.hint
          ? html`<p part="hint-text" class="field__hint-text" id=${hintTextId}>${this.errorMessage || this.hint}</p>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-input': NveInput;
  }
}
