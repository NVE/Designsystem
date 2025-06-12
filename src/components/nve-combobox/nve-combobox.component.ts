import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-combobox.styles';
import { html, LitElement } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import '../nve-popup/nve-popup.component';
import '../nve-input/nve-input.component';
import '../nve-tag/nve-tag.component';
import '../nve-menu/nve-menu.component';
import '../nve-option/nve-option.component';
import '../nve-icon/nve-icon.component';

/*

Error, hvordan legge inn errro håndetering ? ??? 


*/
export interface Option {
  label: string;
  value: string | number;
  selected?: boolean;
}
/**
 * En combobox komponent som lar brukeren velge ett eller flere alternativer fra en liste eller søke etter alternativer.
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
   * Antall valg som kan velges i comboboxen. Default er 1.
   */
  @property({ type: Number }) multiple: number = 1;

  /**
   * Minimum valg som skal være valgt, bruk multiple som max.
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
   * Test-id for enklere testing.
   */
  @property({ type: String }) testId: string | undefined = undefined;

  /**
   * Listen som vises inne i popupen når man har skrevet i input feltet.
   */
  @state() listWithSearchHits: Option[] = [];

  /**
   * Skal listWithSearchHits vises eller ikke.
   */
  @state() displaySearchResult: boolean = false;

  /**
   * Valgte alternativer.
   */
  @state() selectedOptions: Option[] = [];

  /**
   * Verdien som er skrevet inn i input feltet.
   */
  @state() inputValue: string = '';

  /**
   * Er popupen aktiv?
   */
  @state() isPopupActive: boolean = false;

  /**
   * Er det noe feil?
   */
  @state() error?: boolean = false;

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
   * Sender et custom event med valgt(e) option(s).
   * @param eventname Navn på eventet
   * @param value Valgte alternativer
   */
  private emit(eventname: string, value?: Option[]): void {
    const event = new CustomEvent(eventname, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        value,
      },
    });
    this.dispatchEvent(event);
  }

  /**
   * Setter fokus på input feltet som er inne i prefix slotten
   * og oppdaterer listen med søketreff.
   * @returns {void}
   */
  handleFocus(): void {
    this.displaySearchResult = false;
    this.prefixInputRef.value?.focus();
    this.handleInput();
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
    const isValid = selectedOptionsLength >= min && selectedOptionsLength <= this.multiple;
    if (!isValid) {
      this.makeInvalid();
    } else {
      this.resetValidation();
    }
  }

  private makeInvalid() {
    this.errorMessage = this.errorMessage;
    this.error = true;
    this.emit('invalid');
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
   * Håndterer tastaturnavigasjon i inputfeltet.
   * @param event KeyboardEvent
   * @returns {void}
   */
  handleKeyboardNavigation(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.setPopupActive(false);
      return;
    }

    if (event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.setPopupActive(true);

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const firstOption = this.shadowRoot?.querySelector('nve-option');
        firstOption?.focus();
      }

      return;
    }

    if (event.key === 'Tab') {
      this.setPopupActive(true);
      return;
    }

    if (this.disabled) return;

    if (this.isALetterPressed(event)) this.prefixInputRef.value?.focus();
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

    this.emit('value', this.selectedOptions);
  }

  /**
   * Velger et alternativ med tastatur.
   * @param option Alternativet som skal velges
   * @param event KeyboardEvent
   * @returns {void}
   */
  selectOptionKeyDown(option: Option, event: KeyboardEvent): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      this.focusNextOption(event.key);
      event.preventDefault();
      return;
    }

    if (event.key === 'Enter') {
      this.selectOption(option);
      return;
    }

    if (this.isALetterPressed(event)) this.prefixInputRef.value?.focus();
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
    this.emit('value', copyOfSelectedOptions);
  }

  /**
   * Fjerner et valgt alternativ med tastatur.
   * @param option Alternativet som skal fjernes
   * @param event KeyboardEvent
   * @returns {void}
   */
  unSelectOptionKeyDown(option: Option, event: KeyboardEvent): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      this.focusNextOption(event.key);
      event.preventDefault();
      return;
    }

    if (event.key === 'Backspace') {
      this.unSelectOption(option);
      return;
    }

    if (this.isALetterPressed(event)) this.prefixInputRef.value?.focus();
  }

  /**
   * Fjerner et valgt tag alternativ med tastatur.
   * @param option Alternativet som skal fjernes
   * @param event KeyboardEvent
   * @returns {void}
   */
  unSelectOptionKeyDownTag(option: Option, event: KeyboardEvent): void {
    if (event instanceof KeyboardEvent && event.key !== 'Backspace') return;

    // Lager en kopi av selectedOptions for å finne riktig tag å sette fokus på etter sletting.
    const copyOfSelectedOptions = [...this.selectedOptions];

    this.unSelectOption(option);

    // Har vi ikke har en tag å sette fokus på, sett fokus på input feltet.
    if (this.selectedOptions.length === 0) {
      this.prefixInputRef.value?.focus();
      return;
    }

    const indexOfDeletedOption = copyOfSelectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    // Velger hvilken tag som skal få fokus etter sletting, enten den før eller den etter.
    if (indexOfDeletedOption > 0) {
      const previousOptionElement = this.shadowRoot?.querySelector(`nve-tag:nth-child(${indexOfDeletedOption})`);
      if (previousOptionElement) {
        (previousOptionElement as HTMLElement)?.focus();
      } else {
        const nextOptionElement = this.shadowRoot?.querySelector(`nve-tag:nth-child(${indexOfDeletedOption + 1})`);
        if (nextOptionElement) {
          (nextOptionElement as HTMLElement)?.focus();
        }
      }
    }
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
      nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
    } else if (eventKey === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
    }

    if (options[nextIndex]) {
      (options[nextIndex] as HTMLElement).focus();
    }
  }

  /**
   * Toggle valg av alternativ i søkeresultatlisten.
   * @param option Alternativet som skal toggles
   * @param index Indeks i søkeresultatlisten
   * @returns {void}
   */
  toggleOptionInListWithSearchHits(option: Option, index: number): void {
    if (this.disabled) return;
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
    return this.selectedOptions.length === this.multiple;
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
   * Setter popupens aktive tilstand.
   * @param active true for å åpne popup, false for å lukke
   */
  private setPopupActive(active: boolean): void {
    if (this.isPopupActive === active) return; // Unngå unødvendig oppdatering
    this.isPopupActive = active;
    this.shadowRoot?.querySelector('.open-icon')?.classList?.toggle('active');
  }

  /**
   *    Sjekker om en bokstav er trykket på tastaturet.
   *    @param event KeyboardEvent
   *    @returns {boolean} true hvis en bokstav er trykket
   */
  private isALetterPressed(event: KeyboardEvent): boolean {
    // Alle event koder starter med Key. Eksempel k || K = KeyK
    return event.code.startsWith('Key');
  }

  render() {
    return html`
      <nve-popup placement="bottom" sync="width" .active="${this.isPopupActive}" distance="8">
        <nve-input
          tabindex="0"
          aria-controls="listbox"
          aria-expanded="${this.isPopupActive}"
          aria-haspopup="listbox"
          label="${this.label}"
          slot="anchor"
          autocomplete="off"
          requiredLabel="${this.requiredLabel}"
          @focus="${this.handleFocus}"
          @click="${this.handleFocus}"
          @keydown="${this.handleKeyboardNavigation}"
          .value="${this.inputValue}"
          ?disabled=${this.disabled}
          ?filled=${this.filled}
          ?required=${this.required}
        >
          ${this.selectedOptions.map((option) => {
            return html`
              <nve-tag
                slot="prefix"
                saturation="default"
                variant="neutral"
                tabindex="0"
                size="small"
                @nve-close="${() => this.unSelectOption(option)}"
                @keydown="${(event: KeyboardEvent) => this.unSelectOptionKeyDownTag(option, event)}"
                .closeable=${!this.disabled}
              >
                ${option.label}
              </nve-tag>
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
            <nve-icon
              class="open-icon"
              tabindex="0"
              slot="suffix"
              name="keyboard_arrow_down"
              style="font-size: 1.5rem;"
              @click="${this.togglePopupActive}"
            ></nve-icon>
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
          ?disabled=${this.disabled}
          ?filled=${this.filled}
        >
          ${this.displaySearchResult === true
            ? this.listWithSearchHits.length > 0
              ? this.listWithSearchHits.map(
                  (option, i) => html`
                    <nve-option
                      tabindex="0"
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
                    tabindex="0"
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
