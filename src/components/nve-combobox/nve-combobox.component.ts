import { INveComponent } from "@interfaces/NveComponent.interface";
import styles from "./nve-combobox.styles";
import { html, LitElement } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { customElement, property, state } from "lit/decorators.js";
import "../nve-popup/nve-popup.component";
import "../nve-input/nve-input.component";
import "../nve-tag/nve-tag.component";
import "../nve-menu/nve-menu.component";
import "../nve-menu-item/nve-menu-item.component";
import "../nve-option/nve-option.component";
import "../nve-icon/nve-icon.component";

interface Option {
  label: string;
  value: string | number;
  selected?: boolean;
}

@customElement("nve-combobox")
export default class NveCombobox extends LitElement implements INveComponent {
  @property() label?: string;
  @property() placeholder?: string;
  @property() requiredLabel?: string = "*Obligatorisk";
  @property() errorMessage?: string = "-!ERROR!-";

  @property({ type: Array<Option> }) values: Option[] = []; // Liste med verdier som kan velges

  @property({ reflect: true, type: Boolean }) singular: boolean = false;
  @property({ reflect: true, type: Boolean }) disabled: boolean = false;
  @property({ reflect: true, type: Boolean }) filled: boolean = false;
  @property({ reflect: true, type: Boolean }) required: boolean = false;
  @property({ reflect: true, type: String }) testId: string | undefined =
    undefined;

  @state() listWithSearchHits: Option[] = []; // Listen som vises inne i popupen når man har skrevet i input feltet
  @state() displaySearchResult: boolean = false; // Skal listWithSearchHits vises eller ikke

  @state() selectedOptions: Option[] = []; // Valgte alternativer
  @state() inputValue: string = "";
  @state() isPopupActive: boolean = false;

  @state() error?: boolean = false;

  private prefixInputRef = createRef<HTMLInputElement>();

  static styles = [styles];

  constructor() {
    super();
  }

  firstUpdated() {
    this.selectedOptions = this.values.filter((value) => value?.selected);
  }

  private boundHandleOutsideClick = this.handleOutsideClick.bind(this);

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.boundHandleOutsideClick, true);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.boundHandleOutsideClick, true);
    super.disconnectedCallback();
  }

  private emit(eventname: string, value: Option[]): void {
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

  private handleOutsideClick(event: MouseEvent) {
    if (
      !this.shadowRoot?.contains(event.target as Node) &&
      !this.contains(event.target as Node)
    ) {
      this.isPopupActive = false;
      this.listWithSearchHits = [];
      this.inputValue = "";
      this.displaySearchResult = false;
    }
  }

  handleFocus() {
    this.displaySearchResult = false;
    // Setter fokus på input feltet som er inne i prefix slotten
    this.prefixInputRef.value?.focus();
    this.handleInput();
    this.isPopupActive = true;
  }

  togglePopupActive(event: Event) {
    event.stopPropagation();
    this.isPopupActive = !this.isPopupActive;
  }

  handleInput() {
    const inputElement = this.prefixInputRef.value;
    if (inputElement && inputElement.value) {
      this.inputValue = inputElement.value;
      const res = this.searchForOptions(inputElement.value);
      this.updateListWithSearchHits(res);
    } else {
      this.displaySearchResult = false;
    }
  }

  // Handles keyboard navigation within the combobox
  handleKeyboardNavigation(event: KeyboardEvent) {
    // handleKeyboardNavigation logic

    if (this.disabled) return;
    if (
      event.key === "Enter" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      this.isPopupActive = !this.isPopupActive;
    } else if (event.key === "Tab") {
      this.isPopupActive = true;
    }
  }

  private updateListWithSearchHits(options: Option[]) {
    this.listWithSearchHits = [...options];
    this.displaySearchResult = true;
    this.isPopupActive = true;
  }

  private searchForOptions(searchString: string) {
    const searchTextLowerCase = searchString.toLowerCase();
    return this.values
      .filter((option) => option.label.toLowerCase().includes(searchTextLowerCase))
      .sort((a, b) => {
        const aStartsWith = a.label
          .toLowerCase()
          .startsWith(searchTextLowerCase);
        const bStartsWith = b.label
          .toLowerCase()
          .startsWith(searchTextLowerCase);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        return 0;
      });
  }

  selectOption(option: Option) {
    if (this.disabled) return;

    const copyOfValues = [...this.values];
    const indexInValues = copyOfValues.findIndex(
      (optionValue) => optionValue.value === option.value
    );
    if (indexInValues === -1) return;

    if (this.singular && this.selectedOptions.length === 1) {
      for (let i = 0; i < copyOfValues.length; i++) {
        const option = copyOfValues[i];
        if (option?.selected) {
          option.selected = false;
          break;
        }
      }
      this.selectedOptions = [];
    }

    copyOfValues[indexInValues].selected = true;
    this.selectedOptions.push(option);
    this.values = copyOfValues;
    this.emit("nve-combobox-selected-options", this.selectedOptions); // ikke testet
  }

  selectOptionKeyDown(option: Option, event: KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    this.selectOption(option);
  }

  unSelectOption(option: Option) {
    if (this.disabled) return;
    const copyOfValues = [...this.values];
    const copyOfSelectedOptions = [...this.selectedOptions];

    const indexOfOptionInValues = copyOfValues.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );
    const indexOfOptionInSelectedValues = copyOfSelectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    if (indexOfOptionInValues !== -1)
      copyOfValues[indexOfOptionInValues].selected = false;
    if (indexOfOptionInSelectedValues !== -1)
      copyOfSelectedOptions.splice(indexOfOptionInSelectedValues, 1);

    this.selectedOptions = copyOfSelectedOptions;
    this.values = copyOfValues;
    this.emit("nve-combobox-selected-options", copyOfSelectedOptions);
  }

  unSelectOptionKeyDown(option: Option, event: KeyboardEvent) {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    this.unSelectOption(option);
  }

  toggleOptionInListWithSearchHits(option: Option, index: number) {
    if (this.disabled) return;
    const copyOfListWithPossibleSearchHits = [...this.listWithSearchHits];
    const previousValue = copyOfListWithPossibleSearchHits[index].selected;
    copyOfListWithPossibleSearchHits[index].selected =
      !copyOfListWithPossibleSearchHits[index].selected;

    if (this.singular) {
      for (let i = 0; i < copyOfListWithPossibleSearchHits.length; i++) {
        const option = copyOfListWithPossibleSearchHits[i];
        if (option?.selected && i !== index) {
          option.selected = false;
          break;
        }
      }
    }

    this.listWithSearchHits = copyOfListWithPossibleSearchHits;
    // Hvis valgte valg var true tidligere, unselect valget.
    if (previousValue === true) {
      this.unSelectOption(option);
    } else {
      this.selectOption(option);
    }
  }

  toggleOptionInListWithSearchHitsKeyDown(
    option: Option,
    index: number,
    event: KeyboardEvent
  ) {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    this.toggleOptionInListWithSearchHits(option, index);
  }

  addHighlightingToSearchResult(label: string) {
    const matched = label.replace(
      new RegExp(this.inputValue, "i"),
      (match) => `<b>${match}</b>`
    );
    return html`
      ${unsafeHTML(matched)}
    `;
  }

  shouldDisplayCounter() {
    return !this.isPopupActive && this.selectedOptions?.length;
  }

  render() {
    return html`
      <nve-popup
        placement="bottom"
        sync="width"
        .active="${this.isPopupActive}"
        distance="8"
      >
        <nve-input
          aria-controls="listbox"
          aria-expanded="${this.isPopupActive}"
          aria-haspopup="listbox"
          slot="anchor"
          autocomplete="off"
          label="${this.label}"
          requiredLabel="${this.requiredLabel}"
          errorMessage="${this.errorMessage}"
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
                tabindex="0"
                size="small"
                @nve-close="${() => this.unSelectOption(option)}"
                @keydown="${(event: KeyboardEvent) =>
                  this.unSelectOptionKeyDown(option, event)}"
                .closeable=${!this.disabled}
              >
                ${option.label}
              </nve-tag>
            `;
          })}
          ${this.shouldDisplayCounter() &&
          html`
            <nve-tag slot="prefix" size="small">
              ${this.selectedOptions.length}
            </nve-tag>
          `}
          <input
            placeholder="${this.placeholder}"
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
              tabindex="0"
              slot="suffix"
              name="keyboard_arrow_${this.isPopupActive ? "up" : "down"}"
              style="font-size: 1.5rem;"
              @click="${this.togglePopupActive}"
            ></nve-icon>
          `}
          ${this.error &&
          html`
            <nve-icon
              slot="suffix"
              size="small"
              name="error"
              style="font-size: 1.5rem; color: rgb(204, 0, 0)"
            >
              ${this.selectedOptions.length}
            </nve-icon>
          `}
        </nve-input>
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
                      @keydown="${(e: KeyboardEvent) =>
                        this.toggleOptionInListWithSearchHitsKeyDown(
                          option,
                          i,
                          e
                        )}"
                      @click="${() =>
                        this.toggleOptionInListWithSearchHits(option, i)}"
                      value="${option.value}"
                      ?disabled=${this.disabled}
                      .selected="${option.selected}"
                    >
                      ${option.selected
                        ? html`
                            ${this.addHighlightingToSearchResult(option.label)}
                            <nve-icon
                              slot="prefix"
                              name="check"
                              style="font-size: 1.5rem;"
                            ></nve-icon>
                          `
                        : this.addHighlightingToSearchResult(option.label)}
                    </nve-option>
                  `
                )
              : html`
                  <nve-option disabled>Ingen resultater</nve-option>
                `
            : ""}
          ${this.displaySearchResult === false
            ? this.values.map(
                (option) => html`
                  <nve-option
                    tabindex="0"
                    value="${option.value}"
                    @keydown="${(e: KeyboardEvent) =>
                      option.selected
                        ? this.unSelectOptionKeyDown(option, e)
                        : this.selectOptionKeyDown(option, e)}"
                    @click="${() =>
                      option.selected
                        ? this.unSelectOption(option)
                        : this.selectOption(option)}"
                    ?disabled=${this.disabled}
                    .selected="${option.selected}"
                  >
                    ${option.selected
                      ? html`
                          ${option.label}
                          <nve-icon
                            slot="prefix"
                            name="check"
                            style="font-size: 1.5rem;"
                          ></nve-icon>
                        `
                      : option.label}
                  </nve-option>
                `
              )
            : ""}
        </div>
      </nve-popup>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "nve-combobox": NveCombobox;
  }
}
