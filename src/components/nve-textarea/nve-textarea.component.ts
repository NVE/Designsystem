import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-textarea.styles';
import '../nve-icon/nve-icon.component';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { getLabel, labelStyles } from '../../templates/label';

let id = 0;

/**
 * Textarea brukes når brukeren skal kunne skrive inn lengre tekst over flere linjer. Komponenten passer godt til
 * fritekstfelt som beskrivelser, kommentarer, begrunnelser eller meldinger.
 * Textarea kan også endre størrelse slik at brukeren får bedre plass til lengre innhold.
 *
 * @event change - når verdien i textarea endres og elementet mister fokus
 * @event select - når brukeren markerer tekst i textarea
 *
 * @csspart field - wrapper rundt hele textarea-komponenten
 * @csspart help-text - hjelpetekst som vises over textarea
 * @csspart textarea - wrapper rundt textarea-elementet og eventuelle ikoner
 * @csspart textarea__control - selve textarea-elementet
 * @csspart hint-text - hint-tekst som vises under textarea, eller feilmelding hvis det er en valideringsfeil
 */
@customElement('nve-textarea')
export default class NveTextarea extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /* Native textarea attributes */
  /** Om autocomplete skal være aktivert */
  @property({ type: String }) autocomplete?: string;
  /** Om inputfeltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Maksimalt antall tegn som kan skrives inn */
  @property({ type: Number }) maxLength?: number;
  /** Placeholder-tekst som vises når feltet er tomt */
  @property({ type: String }) placeholder?: string;
  /** Om textareafeltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Om minst en sjekkboks er sjekket på */
  @property({ type: Boolean, reflect: true }) required = false;
  /** Antall synlige tekstlinjer i textarea */
  @property({ type: Number }) rows?: number;
  /** Verdien i textarea */
  @property({ type: String }) value?: string;

  /* Custom textarea attributes */
  /** Om textareafeltet skal ha en mørk bakgrunn */
  @property({ type: Boolean }) filled: boolean = false;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String }) helpText = '';
  /** Hint-tekst som vises under feltet */
  @property({ type: String }) hint = '';
  /** Ledetekst */
  @property() label?: string;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises.*/
  @property({ type: String, reflect: true }) errorMessage?: string;
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property() requiredLabel = '';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  @query('.textarea__control') textarea!: HTMLTextAreaElement;
  private readonly textareaId = `textarea-${++id}`;

  static styles = [styles, labelStyles];

  protected async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    await this.updateComplete;
    if (this.autofocus) {
      this.focus();
    }
    if (!this.label) {
      console.warn(
        'nve-textarea: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  /**
   * Sender en egendefinert hendelse.
   * @param name - Navn på hendelsen
   * @param detail - Detaljer som skal inkluderes i hendelsen
   */
  private emitEvent<D>(name: string, detail: D) {
    this.dispatchEvent(
      new CustomEvent<D>(name, {
        detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  //Blur og focus trenger ikke å støtte her siden de sendes fra host elementet.

  /**
   * Sender en 'change' hendelse når verdien i textarea endres og elementet mister fokus. D
   * etaljene i hendelsen inneholder den nye verdien.
   * @param e - Event som utløser endringen
   */
  private handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emitEvent('change', target.value);
  }

  /**
   * Sender en 'select' hendelse når brukeren markerer tekst i textarea.
   * Detaljene i hendelsen inneholder den markerte teksten.
   * @param e - Event som utløser markeringen
   */
  private handleSelect(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.emitEvent('select', target.value);
  }

  // @selectionchange ble ikke støttet i mange nettleseren når koden ble skrevet, derfor er det utelatt.

  /**
   * Fokuserer textarea når label klikkes. Viktig for tilgjenelighet.
   */
  private handleLabelClick() {
    this.focus();
  }

  /**
   * Fokuserer textarea-elementet. Kan ta imot valgfri FocusOptions for å spesifisere fokusatferd.
   * @param options - Valgfri FocusOptions for å spesifisere fokusatferd
   */
  focus(options?: FocusOptions) {
    this.textarea.focus(options);
  }

  render() {
    const labelId = `${this.id || this.textareaId}`;
    const helpTextId = `${this.id || this.textareaId}-helptext`;
    const hintTextId = `${this.id || this.textareaId}-hinttext`;
    const describedBy = [this.helpText ? helpTextId : '', this.errorMessage || this.hint ? hintTextId : '']
      .filter(Boolean)
      .join(' ');

    const statusIcon = this.errorMessage ? 'error' : this.disabled ? 'lock' : this.readonly ? 'visibility' : undefined;
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
        ${getLabel(labelId, this.label, this.tooltip, this.required, this.requiredLabel, this.handleLabelClick)}
        <!-- Hjelpetekst -->
        ${this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>${this.helpText}</p>`
          : nothing}
        <div
          part="textarea"
          class=${classMap({
            textarea: true,
          })}
        >
          <textarea
            part="textarea__control"
            id=${labelId}
            class=${classMap({
              textarea__control: true,
            })}
            autocapitalize=${ifDefined(this.autocapitalize)}
            autocomplete=${ifDefined(this.autocomplete)}
            autocorrect=${ifDefined(this.autocorrect)}
            maxlength=${ifDefined(this.maxLength)}
            placeholder=${ifDefined(this.placeholder)}
            ?readonly=${this.readonly}
            ?required=${this.required}
            rows=${this.rows || 2}
            spellcheck=${ifDefined(this.spellcheck)}
            @change=${this.handleChange}
            ?disabled=${this.disabled}
            @select=${this.handleSelect}
            aria-describedby=${ifDefined(describedBy || undefined)}
            aria-invalid=${ifDefined(this.errorMessage ? 'true' : undefined)}
            .value=${this.value || ''}
          ></textarea>
          <!-- Ikoner -->
          ${statusIcon
            ? html`<nve-icon class="textarea__control__icon" name=${statusIcon} aria-hidden="true"></nve-icon>`
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
    'nve-textarea': NveTextarea;
  }
}
