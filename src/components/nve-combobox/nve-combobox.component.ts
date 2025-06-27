import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-combobox.styles';
import { html, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import '../nve-popup/nve-popup.component';
import '../nve-input/nve-input.component';
import '../nve-menu/nve-menu.component';
import '../nve-option/nve-option.component';
import '../nve-icon/nve-icon.component';

/**
 * Interfacet for alternativene i comboboxen.
 * @interface Option
 */
export interface Option {
  label: string;
  value: string | number;
  selected?: boolean;
}
/**
 * En combobox komponent som lar brukeren velge ett eller flere alternativer fra en liste eller søke etter alternativer.
 * @event invalid Indikerer at validering har feilet ved form submit
 * @event value Returnerer de valgte alternativene etter at man har valgt / fjernet ett alternativ
 */
@customElement('nve-combobox')
export default class NveCombobox extends LitElement implements INveComponent {
  /**
   * Tekst som vises over input feltet.
   */
  @property() label?: string;

  /**
   * Placeholder som vises inne i input feltet.
   */
  @property() placeholder?: string;

  /**
   * Teksten som vises under input feltet, byttes ut med errorMessage hvis det er en feil ved validering
   */
  @property() helpText?: string | undefined = undefined;

  /**
   * Teksten på høyre side som forteller at feltet er obligatorisk.
   */
  @property() requiredLabel?: string = '*Obligatorisk';

  /**
   * Teksten som vises ved en feil i validering.
   */
  @property() errorMessage?: string = '-!ERROR!-';

  /**
   * Alle valgene som kan velges i comboboxen, bruk selected:true på verdier som er valgt fra start.
   */
  @property({ type: Array<Option> }) options: Option[] = [];

  /**
   * Antall valg som kan velges i comboboxen, hvis ikke spesifisert kan man velge så mange man ønsker.
   */
  @property({ type: Number }) max: number = Infinity;

  /**
   * Minimum valg som skal være valgt.
   */
  @property({ type: String }) min: number | undefined = undefined;

  /**
   * Er comboboxen deaktivert.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   * Skal den ha filled utseende (dvs. at den har en bakgrunnsfarge).
   */
  @property({ type: Boolean }) filled: boolean = false;

  /**
   * Skal den være påkrevd.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   * Inputfeltets størrelse.
   */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Test-id for enklere testing.
   */
  @property({ type: String }) testId: string | undefined = undefined;

  // Listen som vises inne i popupen når man har skrevet i input feltet.
  @state() private listWithSearchHits: Option[] = [];

  /**
   * Skal listWithSearchHits vises eller ikke.
   */
  @state() private displaySearchResult: boolean = false;

  /**
   * Valgte alternativer.
   */
  @state() private selectedOptions: Option[] = [];

  /**
   * Verdien som er skrevet inn i input feltet.
   */
  @state() private inputValue: string = '';

  /**
   * Er popupen aktiv?
   */
  @state() private isPopupActive: boolean = false;

  /**
   * Er det noe feil?
   */
  @state() private error?: boolean = false;

  /**
   * Referanse til input feltet som er inne i prefix slotten.
   */
  private prefixInputRef = createRef<HTMLInputElement>();

  static styles = [styles];

  /**
   * Oppretter en ny instans av NveCombobox.
   */
  constructor() {
    super();
  }

  /**
   * Kalles første gang komponenten er rendret.
   * Setter selectedOptions basert på options med selected=true.
   */
  firstUpdated() {
    this.selectedOptions = this.options.filter((value) => value?.selected);
  }

  /**
   * Binder boundHandleOutsideClick til klasseinstansen slik at den kan brukes som en event listener.
   */
  private boundHandleOutsideClick = this.handleOutsideClick.bind(this);

  /**
   * Legger til event listener for å håndtere klikk utenfor komponenten.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.boundHandleOutsideClick, true);
    const formElement = this.closest('form');
    formElement?.addEventListener('submit', this.handleSubmit.bind(this));
  }

  /**
   * Fjerner event listener når komponenten fjernes fra DOM.
   */
  disconnectedCallback() {
    document.removeEventListener('click', this.boundHandleOutsideClick, true);
    const formElement = this.closest('form');
    formElement?.removeEventListener('submit', this.handleSubmit.bind(this));
    super.disconnectedCallback();
  }

  /**
   * Håndterer klikk utenfor komponenten for å lukke popupen.
   * @param event MouseEvent
   */
  private handleOutsideClick(event: MouseEvent) {
    if (
      !this.shadowRoot?.contains(event.target as Node) &&
      !this.contains(event.target as Node) &&
      this.isPopupActive
    ) {
      this.setPopupActive(false);
      this.listWithSearchHits = [];
      this.inputValue = '';
      this.displaySearchResult = false;
    }
  }

  /**
   * Sender et custom event med de valgte alternativene.
   * @param options Valgte alternativer som skal sendes med eventet
   * @event value Returnerer de valgte alternativene
   */
  private emitValueEvent(options: Option[]): void {
    this.dispatchEvent(
      new CustomEvent('value', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          value: options,
        },
      })
    );
  }

  /**
   * Sender et custom event som indikerer valideringsfeil.
   * @event invalid Indikerer at validering har feilet
   */
  private emitInvalidEvent(): void {
    this.dispatchEvent(
      new CustomEvent('invalid', {
        bubbles: true,
        cancelable: false,
        composed: true,
      })
    );
  }
  /**
   * Setter fokus på input feltet som er inne i prefix slotten
   * og oppdaterer listen med søketreff.
   * @returns {void}
   */
  handleFocus(): void {
    this.displaySearchResult = false;
    this.focusPrefixInputField();
    this.handleInput();
    this.setPopupActive(true);
  }

  /**
   * Setter fokus på input feltet som er inne i prefix slotten
   * og åpner popupen.
   * @returns {void}
   */
  handleClick(): void {
    this.focusPrefixInputField();
    this.setPopupActive(true);
  }

  /**
   * Toggle for å aktivere eller deaktivere popupen.
   * @param event Event
   * @returns {void}
   */
  togglePopupActive(event: Event): void {
    event.stopPropagation();
    this.setPopupActive(!this.isPopupActive);
  }

  private handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.checkValidity();
  }

  private checkValidity() {
    const selectedOptionsLength: number = this.selectedOptions.length;
    const min: number = this.min !== undefined ? this.min : 0;
    const isValid = selectedOptionsLength >= min && selectedOptionsLength <= this.max;
    if (!isValid) {
      this.makeInvalid();
    } else {
      this.resetValidation();
    }
  }

  private makeInvalid() {
    this.errorMessage = this.errorMessage;
    this.error = true;
    this.emitInvalidEvent();
    this.toggleValidationAttributes(false);
  }

  private resetValidation() {
    this.error = false;
    this.toggleValidationAttributes(true);
  }

  private toggleValidationAttributes(isValid: boolean) {
    this.toggleAttribute('data-valid', isValid);
    this.toggleAttribute('data-user-valid', isValid);

    this.toggleAttribute('data-invalid', !isValid);
    this.toggleAttribute('data-user-invalid', !isValid);
  }

  /**
   * Håndterer input i søkefeltet og oppdaterer søkeresultater.
   * @returns {void}
   */
  handleInput(): void {
    const inputElement = this.prefixInputRef.value;
    if (inputElement && inputElement.value) {
      this.inputValue = inputElement.value;
      const res = this.searchForOptions(inputElement.value);
      this.updateListWithSearchHits(res);
    } else {
      this.displaySearchResult = false;
    }
  }

  /**
   * Håndterer tastaturnavigasjon i inputfeltet, ikke popupen.
   * @param event KeyboardEvent
   * @returns {void}
   */
  handleKeyboardNavigationInput(event: KeyboardEvent): void {
    if (this.disabled) return;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.setPopupActive(true);
        this.shadowRoot?.querySelector('nve-option')?.focus();
        return;
      case 'ArrowUp':
        event.preventDefault();
        this.setPopupActive(true);
        // Når popupen ikke er åpen, har .focus problemer med å fokusere elementet.
        const options = this.shadowRoot?.querySelectorAll('nve-option');
        if (options) {
          setTimeout(() => {
            options[options.length - 1].focus();
          }, 0);
        }
        return;
      case 'Escape':
        if (!this.isPopupActive && this.inputValue.length > 0) this.inputValue = '';
        this.setPopupActive(false);
        return;
      case 'Enter':
      case 'Space':
        this.setPopupActive(!this.isPopupActive);
        return;

      case 'Backspace':
        if (this.inputValue === '') {
          this.focusLastTag();
        }
        return;
      default:
        if (this.isAPrintableCharacterPressed(event)) this.focusPrefixInputField();
    }
  }

  /**
   * Håndterer tastaturnavigasjon i popupen, ikke inputfeltet. selectOptionKeyDown håndterer enter  .
   * @param event KeyboardEvent
   * @returns {void}
   */
  handleKeyboardNavigationListBox(event: KeyboardEvent): void {
    if (this.disabled) return;
    switch (event.key) {
      case 'Escape':
        this.setPopupActive(false);
        return;
      case 'ArrowUp':
      case 'ArrowDown':
        this.focusNextOption(event.key);
        event.preventDefault();
        return;
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'BackSpace':
        this.focusPrefixInputField();
        return;
      default:
        if (this.isAPrintableCharacterPressed(event)) {
          this.focusPrefixInputField();
        }
    }
  }

  /**
   * Oppdaterer listen med søkeresultater og viser popupen.
   * @param options Liste med søkeresultater
   * @returns {void}
   */
  private updateListWithSearchHits(options: Option[]): void {
    this.listWithSearchHits = [...options];
    this.displaySearchResult = true;
    this.setPopupActive(true);
  }

  /**
   * Søker etter alternativer som matcher søketeksten.
   * @param searchString Søketekst
   * @returns {Option[]} Liste med alternativer som matcher søket
   */
  private searchForOptions(searchString: string): Option[] {
    const searchTextLowerCase = searchString.toLowerCase();
    return this.options
      .filter((option) => option.label.toLowerCase().includes(searchTextLowerCase))
      .sort((a, b) => {
        const aStartsWith = a.label.toLowerCase().startsWith(searchTextLowerCase);
        const bStartsWith = b.label.toLowerCase().startsWith(searchTextLowerCase);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        return 0;
      });
  }

  /**
   * Velger et alternativ.
   * @param option Alternativet som skal velges
   * @returns {void}
   */
  selectOption(option: Option): void {
    if (this.disabled || this.isMaxNumberOfOptionsSelected()) return;

    const copyOfOptions = [...this.options];
    const indexInOptions = copyOfOptions.findIndex((optionValue) => optionValue.value === option.value);
    if (indexInOptions === -1) return;

    copyOfOptions[indexInOptions].selected = true;
    this.selectedOptions.push(option);
    this.options = copyOfOptions;

    this.inputValue = '';
    this.displaySearchResult = false;
    this.setPopupActive(false);
    this.focusPrefixInputField();
    this.emitValueEvent(this.selectedOptions);
  }

  /**
   * Velger et alternativ med tastatur.
   * @param option Alternativet som skal velges
   * @param event KeyboardEvent
   * @returns {void}
   */
  selectOptionKeyDown(option: Option, event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.selectOption(option);
    }
  }

  /**
   * Fjerner et valgt alternativ.
   * @param option Alternativet som skal fjernes
   * @returns {void}
   */
  unSelectOption(option: Option): void {
    if (this.disabled) return;
    const copyOfOptions = [...this.options];
    const copyOfSelectedOptions = [...this.selectedOptions];

    const indexOfOptionInOptions = copyOfOptions.findIndex((selectedOption) => selectedOption.value === option.value);
    const indexOfOptionInSelectedValues = copyOfSelectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    if (indexOfOptionInOptions !== -1) copyOfOptions[indexOfOptionInOptions].selected = false;
    if (indexOfOptionInSelectedValues !== -1) copyOfSelectedOptions.splice(indexOfOptionInSelectedValues, 1);

    this.selectedOptions = copyOfSelectedOptions;
    this.options = copyOfOptions;
    this.emitValueEvent(copyOfSelectedOptions);
  }

  /**
   * Fjerner ett valgt alternativ med tastatur.
   * @param option Alternativet som skal fjernes
   * @param event KeyboardEvent
   * @returns {void}
   */
  unSelectOptionKeyDown(option: Option, event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.unSelectOption(option);
      return;
    }
  }

  /**
   * Fjerner en tag med tastatur.
   * @param option Alternativet som skal fjernes
   * @param event KeyboardEvent
   * @returns {void}
   */
  unSelectOptionKeyDownTag(option: Option, event: KeyboardEvent): void {
    if (event instanceof KeyboardEvent && event.key !== 'Backspace') return;

    this.unSelectOption(option);

    // Har vi ikke har en tag å sette fokus på, sett fokus på input feltet.
    if (this.selectedOptions.length === 0) {
      this.focusPrefixInputField();
      return;
    }
  }

  /**
   * Setter popupens aktive tilstand.
   * @param active true for å åpne popup, false for å lukke
   */
  private setPopupActive(active: boolean): void {
    if (this.isPopupActive === active || this.disabled) return; // Unngår unødvendig oppdatering og hindrer at dropdown åpnes
    this.isPopupActive = active;
    this.shadowRoot?.querySelector('.open-icon')?.classList?.toggle('active');
  }

  /**
   *  Basert på om brukeren presser ArrowDown eller ArrowUp, fokuser på riktig element
   *  @param option Event.key string ArrowDown || ArrowUp
   */
  private focusNextOption(eventKey: string): void {
    const options = Array.from(this.shadowRoot?.querySelectorAll('nve-option') || []);
    const currentIndex = options.findIndex((el) => el === this.shadowRoot?.activeElement);

    let nextIndex = currentIndex;

    if (eventKey === 'ArrowDown') {
      if (currentIndex < options.length - 1) {
        nextIndex = currentIndex + 1;
      }
    } else if (eventKey === 'ArrowUp') {
      if (currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }
    }

    if (options[nextIndex]) options[nextIndex].focus();
  }

  /**
   * Focuserer den siste sl-taggen i prefix slotten
   */
  private focusLastTag(): void {
    const tags = Array.from(this.shadowRoot?.querySelectorAll('sl-tag') || []);
    const lastTag = tags[tags.length - 1];

    if (lastTag) lastTag.focus();
  }

  /**
   * Toggle valg av alternativ i søkeresultatlisten.
   * @param option Alternativet som skal toggles
   * @param index Indeks i søkeresultatlisten
   * @returns {void}
   */
  toggleOptionInListWithSearchHits(option: Option, index: number): void {
    if (this.disabled || this.shouldDisplayOptionAsDisabled(option)) return;
    const copyOfListWithPossibleSearchHits = [...this.listWithSearchHits];
    const previousValue = copyOfListWithPossibleSearchHits[index].selected;
    copyOfListWithPossibleSearchHits[index].selected = !copyOfListWithPossibleSearchHits[index].selected;

    this.listWithSearchHits = copyOfListWithPossibleSearchHits;
    // Hvis valgte valg var true tidligere, unselect valget.
    if (previousValue === true) {
      this.unSelectOption(option);
    } else {
      this.selectOption(option);
    }
  }

  /**
   * Toggle valg av alternativ i søkeresultatlisten med tastatur (kun Enter).
   * @param option Alternativet som skal toggles
   * @param index i søkeresultatlisten
   * @param event KeyboardEvent
   * @returns {void}
   */
  toggleOptionInListWithSearchHitsKeyDown(option: Option, index: number, event: KeyboardEvent): void {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') return;
    this.toggleOptionInListWithSearchHits(option, index);
  }

  /**
   * Legger til utheving av søketreff i label.
   * @param label Label til alternativet
   * @returns {TemplateResult} HTML med uthevet søketreff
   */
  addHighlightingToSearchResult(label: string): unknown {
    const matched = label.replace(new RegExp(this.inputValue, 'i'), (match) => `<b>${match}</b>`);
    return html` ${unsafeHTML(matched)} `;
  }

  /**
   * Sjekker om maksimalt antall alternativer er valgt.
   */
  private isMaxNumberOfOptionsSelected(): boolean {
    return this.selectedOptions.length === this.max;
  }

  /**
   *  Sjekker om et alternativ skal vises som deaktivert.
   *  Hvis disabled er true, vises alle alternativer som deaktivert.
   *  Hvis maksimalt antall alternativer er valgt, vises alle alternativer som ikke er valgt som deaktivert.
   */
  shouldDisplayOptionAsDisabled(option: Option): boolean {
    return this.disabled ? true : this.isMaxNumberOfOptionsSelected() ? !option?.selected : false;
  }

  /**
   *  Sjekker om en bokstav er trykket på tastaturet.
   *  @param event KeyboardEvent
   *  @returns {boolean} true hvis en bokstav er trykket
   */
  private isAPrintableCharacterPressed(event: KeyboardEvent): boolean {
    // Alle event koder starter med Key. Eksempel k || K = KeyK
    return event.code.startsWith('Key');
  }

  /**
   * Setter fokus på prefix input ref
   * @returns {void}
   */
  private focusPrefixInputField(): void {
    this.prefixInputRef.value?.focus();
  }

  render() {
    return html`
      <nve-popup placement="bottom" sync="width" .active="${this.isPopupActive}" distance="8">
        <nve-input
          tabindex="0"
          aria-controls="listbox"
          aria-expanded="${this.isPopupActive}"
          aria-haspopup="listbox"
          size="${this.size}"
          label="${this.label}"
          slot="anchor"
          autocomplete="off"
          requiredLabel="${this.requiredLabel}"
          @keydown="${this.handleKeyboardNavigationInput}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          .value="${this.inputValue}"
          ?disabled=${this.disabled}
          ?filled=${this.filled}
          ?required=${this.required}
        >
          ${this.selectedOptions.map((option) => {
            return html`
              <sl-tag
                size="${this.size}"
                variant="neutral"
                tabindex="-1"
                slot="prefix"
                saturation="default"
                variant="neutral"
                @sl-remove="${() => this.unSelectOption(option)}"
                @keydown="${(event: KeyboardEvent) => this.unSelectOptionKeyDownTag(option, event)}"
                .removable=${!this.disabled}
              >
                ${option.label}
              </sl-tag>
            `;
          })}

          <input
            placeholder="${this.placeholder}"
            autocomplete="off"
            slot="prefix"
            class="input-prefix"
            @input="${this.handleInput}"
            ?filled=${this.filled}
            ?disabled=${this.disabled}
            .value="${this.inputValue}"
            ${ref(this.prefixInputRef)}
          />

          ${html`
            <span class="open-icon-wrapper" slot="suffix">
              <nve-icon
                class="open-icon ${this.disabled && 'disabled'}"
                tabindex="-1"
                name="keyboard_arrow_down"
                style="font-size: 19px;"
                @click="${this.togglePopupActive}"
              ></nve-icon>
            </span>
          `}
          ${this.error &&
          html`
            <nve-icon slot="suffix" size="small" name="error" style="font-size: 1.5rem; color: #cc0000"> </nve-icon>
          `}
        </nve-input>

        ${this.error && this.errorMessage
          ? html`<span slot="anchor" class="text--error">${this.errorMessage}</span>`
          : this.helpText && html`<span slot="anchor" class="text-help">${this.helpText}</span>`}

        <div
          id="listbox"
          role="listbox"
          expanded="${!!this.isPopupActive}"
          aria-labelledby="${this.label}"
          part="listbox"
          class="select__listbox"
          tabindex="-1"
          @keydown="${this.handleKeyboardNavigationListBox}"
          ?disabled=${this.disabled}
          ?filled=${this.filled}
        >
          ${this.displaySearchResult === true
            ? this.listWithSearchHits.length > 0
              ? this.listWithSearchHits.map(
                  (option, i) => html`
                    <nve-option
                      tabindex="-1"
                      @keydown="${(e: KeyboardEvent) => this.toggleOptionInListWithSearchHitsKeyDown(option, i, e)}"
                      @click="${() => this.toggleOptionInListWithSearchHits(option, i)}"
                      value="${option.value}"
                      ?disabled=${this.shouldDisplayOptionAsDisabled(option)}
                      .selected="${option.selected}"
                    >
                      ${option.selected
                        ? html`
                            ${this.addHighlightingToSearchResult(option.label)}
                            <nve-icon slot="prefix" name="check" style="font-size: 1.5rem;"></nve-icon>
                          `
                        : this.addHighlightingToSearchResult(option.label)}
                    </nve-option>
                  `
                )
              : html` <nve-option disabled>Ingen resultater</nve-option> `
            : ''}
          ${this.displaySearchResult === false
            ? this.options.map(
                (option) => html`
                  <nve-option
                    tabindex="-1"
                    value="${option.value}"
                    @keydown="${(e: KeyboardEvent) =>
                      option.selected ? this.unSelectOptionKeyDown(option, e) : this.selectOptionKeyDown(option, e)}"
                    @click="${() => (option.selected ? this.unSelectOption(option) : this.selectOption(option))}"
                    ?disabled=${this.shouldDisplayOptionAsDisabled(option)}
                    .selected="${option.selected}"
                  >
                    ${option.selected
                      ? html`
                          ${option.label}
                          <nve-icon slot="prefix" name="check" style="font-size: 1.5rem;"></nve-icon>
                        `
                      : option.label}
                  </nve-option>
                `
              )
            : ''}
        </div>
      </nve-popup>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'nve-combobox': NveCombobox;
  }
}
