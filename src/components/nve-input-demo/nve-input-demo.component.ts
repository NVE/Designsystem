import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-input-demo.styles';
import '../nve-label/nve-label.component';
import '../nve-icon/nve-icon.component';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type RequiredValidation = {
  type: 'required';
  message: string;
};

type MinLengthValidation = {
  type: 'minlength';
  value: number;
  message: string;
};

type MaxLengthValidation = {
  type: 'maxlength';
  value: number;
  message: string;
};

type PatternValidation = {
  type: 'pattern';
  value: RegExp;
  message: string;
};

type EmailValidation = {
  type: 'email';
  message: string;
};

type CustomValidation = {
  type: 'custom';
  value: (val: any) => boolean;
  message: string;
};

type InputValidation =
  | RequiredValidation
  | MinLengthValidation
  | MaxLengthValidation
  | PatternValidation
  | EmailValidation
  | CustomValidation;

let id = 0;

@customElement('nve-input-demo')
export default class NveInputDemo extends LitElement implements INveComponent {
  /** Unik ID for inputfeltet */
  @property({ type: String }) id = '';
  /** Label-tekst for inputfeltet */
  @property({ type: String }) label = '';

  /** Skjuler label visuelt, men beholder den for skjermlesere */
  @property({ type: Boolean }) hideLabel = false;
  /** Tooltip-tekst for label */
  @property({ type: String }) labelTooltip = '';
  /** Verdi i inputfeltet */
  @property({ type: String }) value: string = '';
  @property({ type: String }) testId: string | undefined = undefined;

  /** Input-type, f.eks. tekst, e-post, nummer osv. */
  @property() type: 'date' | 'datetime-local' | 'email' | 'number' | 'search' | 'tel' | 'text' | 'time' | 'url' =
    'text';
  /** Størrelse på inputfeltet */
  @property() size: 'small' | 'medium' | 'large' = 'medium';
  /** Om inputfeltet skal ha fylt bakgrunn */
  @property({ type: Boolean }) filled = false;
  /** Om inputfeltet skal vise knapp for å tømme innhold */
  @property({ type: Boolean }) clearable = false;
  /** Om inputfeltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Om inputfeltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Om inputfeltet er obligatorisk */
  @property({ type: Boolean }) required = false;
  /** Ekstra tekst som vises for obligatoriske felt. * er en standard og vises alltid */
  @property({ type: String }) requiredLabel = '';
  /** Placeholder-tekst for inputfeltet */
  @property({ type: String }) placeholder = '';
  /**
   * Stegverdi for input (gjelder kun type nummer og dato). Kan også settes til 'any' for å tillate alle verdier.
   */
  @property() step: number | 'any' | undefined = undefined;
  /**
   * Angir om autofyll skal være på eller av. [Se MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for tilgjengelige verdier.
   */
  @property() autocomplete: 'on' | 'off' = 'off';
  /** Angir automatisk stor forbokstav, store bokstaver osv. [Se MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocapitalize) for tilgjengelige verdier.
   */
  @property() autocapitalize: 'none' | 'sentences' | 'words' | 'characters' = 'none';
  /** Om inputfeltet skal få fokus automatisk ved lasting av siden */
  @property({ type: Boolean }) autofocus = false; //currently not doing anything
  /**
   * Angir hvilken type data brukeren skal skrive inn, for å vise riktig tastatur på enheter.
   */
  @property() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' = 'text';
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir input-felt ugyldig og feil melding vises. Burde ikke brukes hvis man bruker validate-metoden */
  @property({ type: String, reflect: true }) errorMessage = '';
  /** Valideringsregler for inputfeltet. Bruker InputValidation modellen */
  @property({ type: Array }) validation: InputValidation[] = [];
  /** Om validering skal utføres ved blur (når feltet mister fokus). Krever regler i validation arrayet */
  @property({ type: Boolean }) blurValidation = false;
  /** Tittel-attributt for inputfeltet (ikke anbefalt for tilgjengelighet) */
  @property({ type: String }) title = '';

  /** @internal */
  private readonly componentId = `input-${++id}`;

  /** @internal */
  private readonly componentErrorId = `error-${++id}`;
  /** @internal */
  @state() private error = '';
  @query('input') input: HTMLInputElement | undefined;

  static styles = [styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.required) {
      const hasRequiredValidation = this.validation.some((rule) => rule.type === 'required');
      if (hasRequiredValidation) {
        this.required = true;
      }
    }

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

  willUpdate(changedProps: Map<string, unknown>) {
    if (changedProps.has('errorMessage') && this.errorMessage) {
      this.error = this.errorMessage;
    }
  }

  /**
   * Håndterer input-eventet fra inputfeltet.
   * Oppdaterer verdien og sender et custom 'input'-event med ny verdi.
   */
  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: this.value },
      })
    );
  }

  /**
   * Håndterer change-eventet fra inputfeltet.
   * Sender et custom 'change'-event med ny verdi.
   */
  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: target.value },
      })
    );
  }

  /**
   * Håndterer keydown-eventet fra inputfeltet.
   * Sender et custom 'keydown'-event med originalt KeyboardEvent.
   */
  private handleKeyDown(e: KeyboardEvent) {
    this.dispatchEvent(
      new CustomEvent('keydown', {
        detail: { originalEvent: e },
      })
    );
  }

  /**
   * Håndterer blur-eventet fra inputfeltet.
   * Utfører validering dersom blurValidation er aktivert.
   */
  private handleBlur() {
    if (this.blurValidation) {
      this.validate();
    }
  }

  /**
   * Håndterer klikk på wrapper rundt inputfeltet for å sette fokus til inputfeltet
   */
  private handleWrapperClick() {
    this.focus();
  }

  /**
   * Håndterer klikk på "clear"-knappen.
   * Tømmer inputfeltet, sender relevante events og setter fokus tilbake til input.
   */
  private handleClearClick(event: MouseEvent) {
    event.preventDefault();

    if (this.value !== '') {
      this.value = '';

      this.updateComplete.then(() => {
        this.dispatchEvent(new Event('clear', { bubbles: true, composed: true }));
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      });
    }

    this.focus();
  }

  /**
   * Setter fokus på inputfeltet programmatisk.
   */
  focus() {
    this.input?.focus();
  }

  /**
   * Validerer inputverdien mot valideringsreglene.
   * Oppdaterer feilmelding og returnerer true/false basert på resultatet.
   * @returns true hvis input er gyldig, false hvis ikke
   */
  validate() {
    const validationRules = this.validation;
    for (const rule of validationRules) {
      switch (rule.type) {
        case 'required':
          if (!this.value || this.value.trim() === '') {
            this.error = rule.message;
            return false;
          }
          break;
        case 'minlength':
          if (this.value.length < rule.value) {
            this.error = rule.message;
            return false;
          }
          break;
        case 'maxlength':
          if (this.value.length > rule.value) {
            this.error = rule.message;
            return false;
          }
          break;
        case 'pattern':
          if (!rule.value.test(this.value)) {
            this.error = rule.message;
            return false;
          }
          break;
        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(this.value)) {
            this.error = rule.message;
            return false;
          }
          break;
        case 'custom':
          if (!rule.value(this.value)) {
            this.error = rule.message;
            return false;
          }
          break;
      }
    }
    this.error = '';
    return true;
  }

  //TODO:
  // add aria-invalid programatically when the error occurs + add ariadescribedby that points to the error message when its present
  // - make labels hidden maybe?
  // add range type?
  // add required attribute when required is present in the validation rules but make sure its not added twice
  //currently there is no design for the hint/helptext in the input field which i think should be considered
  // as placeholder is not the best in accessibility point of view. also contrast often sucks
  //when validation on each click use aria polite in the error message but i dont think we will support it yet
  //- mention that aria-label ca be used if no label is present but its not recommended and label should be used even when its hidden
  //- aria labelleby wont work if the label isnt in the component itself as shadow dom cant reach outside its own dom
  // title attribute is not recommended as some screen readers wont read it
  render() {
    const clearableButton = html`
      <button class="button__clear" @click=${this.handleClearClick} part="clear-button" aria-label="Clear input">
        <nve-icon name="close"></nve-icon>
      </button>
    `;
    return html`
      <div class="input__container" part="input-container">
        <label for=${this.id} class=${classMap({ label: true, 'label--hidden': this.hideLabel })} class="label">
          <nve-label as="span" value=${this.label}>
            ${this.labelTooltip ? html`<div slot="tooltip">${unsafeHTML(this.labelTooltip)}</div>` : nothing}
          </nve-label>
          <span class="label__required-text">* ${this.requiredLabel ? html`${this.requiredLabel}` : nothing}</span>
        </label>
        <div
          part="input"
          @click=${this.handleWrapperClick}
          class=${classMap({
            input: true,
            'input--large': this.size === 'large',
            'input--medium': this.size === 'medium',
            'input--small': this.size === 'small',
            'input--disabled': this.disabled,
            'input--readonly': this.readonly,
            'input--error': this.error,
            'input--filled': this.filled,
          })}
        >
          <slot name="prefix" part="prefix"></slot>
          <input
            aria-label=${ifDefined(this.ariaLabel)}
            part="base"
            id=${this.id || this.componentId}
            name=${this.id}
            type=${this.type}
            title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            step=${ifDefined(this.step as number)}
            .value=${live(this.value ?? '')}
            autocapitalize=${ifDefined(this.autocapitalize)}
            autocomplete=${ifDefined(this.autocomplete)}
            ?autofocus=${this.autofocus}
            inputmode=${ifDefined(this.inputmode)}
            aria-describedby=${ifDefined(this.error ? this.componentErrorId : undefined)}
            aria-invalid=${ifDefined(this.error ? 'true' : undefined)}
            @change=${this.handleChange}
            @blur=${this.handleBlur}
            @input=${this.handleInput}
            @keydown=${this.handleKeyDown}
          />
          <slot name="suffix" part="suffix"></slot>
          ${this.disabled ? html`<nve-icon name="lock"></nve-icon>` : nothing}
          ${this.clearable && this.value ? clearableButton : nothing}
          ${this.readonly ? html`<nve-icon name="visibility"></nve-icon>` : nothing}
          ${this.error ? html`<nve-icon name="error"></nve-icon>` : nothing}
        </div>
        <span
          aria-live=${ifDefined(this.blurValidation ? 'assertive' : undefined)}
          class="input__error"
          id=${this.componentErrorId}
          >${this.error}</span
        >
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-input-demo': NveInputDemo;
  }
}
