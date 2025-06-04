import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import styles from './nve-textarea.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { INveComponent } from '@interfaces/NveComponent.interface';

import '../nve-icon/nve-icon.component';
import '../nve-label/nve-label.component';

/**
 * Skal brukes til å lage lang tekstfelt. Min høyde er satt opp til --sizing-2x-small. De fleste attributer som brukes på vanlig textarea
 * burde bli støttet her. Hvis det er noe som mangler, bare å legge til.
 * Man kan bruke label og tooltip attributer for å vise label over textarea. Samt med helpText. Trenger ikke noe eksta slots per i dag. Trengs ikke å lage separate slots for det.
 * Siden vi skulle bruke ikoner inn i textarea var det enklere å lage vår egen komponent enn å leke med sl-textarea
 *
 * Validering. Siden textarea ikke er shoelace komponent, constraint valdiering skal ikke fungere så bra med andre shoelace komponenter i formen.
 * Shoelace wrapper alle sine form komponenter i en form kontroll som gjør at alle blir validert samtidig når man bruker constraint validering. Det er ikke en default
 * nettlesersen oppførsel. Submit event stopper på den første feil den møter i formen. Per i dag siden vi blander både shoelace komponenter og våre egne
 * våre komponeter skal bli diskriminert i gruppe validering. Derfor anbefales det å bruke custom validering på textarea med setCustomValidation.
 * @dependency nve-icon
 * @dependency nve-label
 *
 * Bruker sl-eventer for å være konsistent. Kan bruke våre egne eventer når vi droppper shoelace
 * @event sl-blur - trigges når textarea mister fokus
 * @event sl-change - trigges når textarea endrer verdi
 * @event sl-input - trigges når textarea endrer verdi
 * @event sl-invalid - trigges når textarea er invalid
 *
 * @csspart form-control - hoved komponent sitt container
 * @csspart textarea-label - label og requiredLabel container
 * @csspart base - textarea og ikone container
 * @csspart help-text-container - container for hjelpetekst
 *
 */
@customElement('nve-textarea')
export default class NveTextarea extends LitElement implements INveComponent {
  static styles = [styles];

  /** Navnet på tekstområdet, sendt som et navn/verdi-par med skjemadata */
  @property() name = '';

  /** Textarea verdi, sendt som et navn/verdi-par med skjemadata */
  @property() value = '';

  /** Feil melding som vises under gruppe hvis validering feiler */
  @property() errorMessage?: string;

  @property() title = '';

  /** Viser filled variant */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Label tekst */
  @property() label = '';

  /** Hjelpetekst under textarea */
  @property() helpText = '';

  /** Om textarea er deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Om textarea er skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Placeholder tekst */
  @property() placeholder = '';

  /** Om textarea er obligatorisk */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.*/
  @property() requiredLabel = '*Obligatorisk';

  /** Den minste lengden på inndata som vil bli betraktet som gyldig. */
  @property({ type: Number }) minlength?: number;

  /** Maksimal lengde på inndata som vil bli betraktet som gyldig. */
  @property({ type: Number }) maxlength?: number;

  /** Kontrollerer om og hvordan tekstinnput automatisk blir gjort stor som det blir skrevet inn av brukeren. */
  @property() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' = 'off';

  /** Indikerer om nettleserens autokorrekturfunksjon er på eller av. */
  @property() autocorrect?: string;

  /** Indikerer om nettleserens autokorrekturfunksjon er på eller av. */
  @property() tooltip?: string;

  /**
   * Brukes for å kunne identifisere komponenten i tester
   */
  @property({ reflect: true, type: String }) testId: string = '';

  /**
   * Forteller nettleseren hvilken type data som vil bli skrevet inn av brukeren, slik at den kan vise det passende virtuelle
   * tastaturet på støttede enheter.
   */
  @property() inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Antall rader med tekst i textarea-taggen.
   * Browser-default dersom denne ikke er satt er 2 i alle browsere
   *
   * Bestemmer initiell høyde på textarea-boksen
   * (settes slik at antall rader * font-høyde får plass)
   */
  @property() rows?: number;

  /** Bestemmer om feilmelding skal vises når validering feiler  */
  @state() private showErrorMessage = false;

  /** Om bruker starter å skrive noe i textarea */
  @state() private touched = false;

  /** Hoved input felt i nve-textarea komponentet. Brukes til constraint validering */
  @query('.textarea__control') input!: HTMLTextAreaElement;

  constructor() {
    super();
  }
  private resizeObserver: ResizeObserver | null = null;
  firstUpdated() {
    // Sjekker om data-valid når komponenten først lastes
    if (this.required) {
      const isValid = this.input.checkValidity();
      this.toggleAttribute('data-valid', isValid);
      this.toggleAttribute('data-invalid', !isValid);
    }

    // for å endre bredde på label container når textarea endrer størrelse, må vi bruke ResizeObserver.
    // den observerer endringer i størrelse på textarea og endrer bredden på label container + padding
    const textarea = this.shadowRoot?.querySelector('.textarea__control');
    const formControl = this.shadowRoot?.querySelector('.textarea__label') as HTMLElement;
    if (textarea) {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          formControl.style.width = `${entry.contentRect.width + 32}px`;
        }
      });

      this.resizeObserver.observe(textarea);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const formElement = this.closest('form');
    formElement?.addEventListener('submit', this.handleSubmit.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const formElement = this.closest('form');
    formElement?.removeEventListener('submit', this.handleSubmit.bind(this));
    this.resizeObserver?.disconnect();
  }

  // kan senere flyttes til utils hvis blir brukt flere steder
  private emit(eventName: string) {
    this.dispatchEvent(new CustomEvent(eventName));
  }

  private handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.checkValidity();
  }

  // validerer ikke hvis bruker ikke har tatt på input feltet
  private handleBlur() {
    if (this.touched) {
      this.checkValidity();
    }
    this.emit('sl-blur');
  }

  private handleChange() {
    this.value = this.input.value;
    this.emit('sl-change');
  }

  private handleInput() {
    this.touched = true;
    this.value = this.input.value;
    this.emit('sl-input');
  }

  /** Sjekker constraint validation og hvis man kjørte setCustomValidity med en melding, checkValidity blir falsk og. Hvis man ikke bruker errorMessage property vil den vise default engelsk tekst istedenfor */
  private checkValidity() {
    const isValid = this.input.checkValidity();
    if (!isValid) {
      this.makeInvalid();
    } else {
      this.resetValidation();
    }
  }

  setCustomValidity(message = '') {
    this.input.setCustomValidity(message);
    this.checkValidity();
  }

  private makeInvalid() {
    this.errorMessage = this.errorMessage || this.input.validationMessage;
    this.showErrorMessage = true;
    this.emit('sl-invalid');
    this.toggleValidationAttributes(false);
  }

  private resetValidation() {
    this.showErrorMessage = false;
    this.toggleValidationAttributes(true);
  }

  /** Toggler riktig validering attribute for å vise riktig style */
  private toggleValidationAttributes(isValid: boolean) {
    this.toggleAttribute('data-valid', isValid);
    this.toggleAttribute('data-user-valid', isValid);
    this.toggleAttribute('data-invalid', !isValid);
    this.toggleAttribute('data-user-invalid', !isValid);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    return html`
      <div part="form-control" class=${classMap({ 'form-control': true, 'form-control--has-label': this.label })}>
        <div part="textarea-label" class="textarea__label">
          ${this.label
            ? html`
                <nve-label
                  aria-hidden=${this.label ? 'false' : 'true'}
                  value=${this.label}
                  tooltip=${ifDefined(this.tooltip)}
                ></nve-label>
              `
            : null}
          ${this.required && this.label
            ? html`<span class="textarea__required-label">${this.requiredLabel}</span>`
            : null}
        </div>
        <div part="base" class="textarea__base">
          <textarea
            part="textarea"
            class="textarea__control"
            title=${this.title /** En tom tittel hindrer nettleserens valideringsverktøy i å vises ved overføring */}
            name=${ifDefined(this.name)}
            .value=${live(this.value)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${ifDefined(this.placeholder)}
            minlength=${ifDefined(this.minlength)}
            maxlength=${ifDefined(this.maxlength)}
            autocapitalize=${ifDefined(this.autocapitalize)}
            autocorrect=${ifDefined(this.autocorrect)}
            ?autofocus=${this.autofocus}
            inputmode=${ifDefined(this.inputmode)}
            aria-describedby="help-text"
            rows=${ifDefined(this.rows && this.rows >= 3 ? this.rows : 3)}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
          ></textarea>
          <!-- Her kommer litt hokus pokus med å poisjonere ikonen. Det er en ekstra div med posisjon relativt 
          som skal vises rett etter textarea, og den skal inneholde ikone med position absolute som skal deretter vises inn i textarea.
          Må gjøres sånn fordi vi vil ikke begrense textarea__base brede til fit-content (da textarea kan aldri ta så mye plass som er 
          tilgjengelig i nettleseren og man må alltid sette brede på den manuelt. Nei takk.) -->
          <!-- Foreløpig kan man ha enten 'lock' eller 'error' ikone -->
          ${this.disabled || this.showErrorMessage
            ? html`<div class="textarea__icon__container">
                ${this.disabled ? html`<nve-icon name="lock"></nve-icon>` : null}
                ${this.showErrorMessage ? html`<nve-icon class="textarea__icon--error" name="error"></nve-icon>` : null}
              </div>`
            : null}
        </div>
        <div part="help-text-container" class="textarea__help-text__container">
          <!-- Ikke vis hjelpe tekst mens feil -->
          ${!this.showErrorMessage && this.helpText
            ? html`<span class="textarea__help-text" aria-hidden=${this.helpText ? 'false' : 'true'}
                >${this.helpText}</span
              >`
            : null}
          ${this.showErrorMessage
            ? html`<span class="textarea__help-text textarea__help-text--error">${this.errorMessage}</span>`
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-textarea': NveTextarea;
  }
}
