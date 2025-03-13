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

/*
TODO: 
  - Fikse fokus problemet




*/
interface OptionInterface {
  label: string;
  value: string | number;
  selected?: boolean;
}

type ListType = "values" | "listWithPossibleSearchHits";

@customElement("nve-combobox")
export default class NveCombobox extends LitElement implements INveComponent {
  private toggleIsDisabled() {
    this.disabled = !this.disabled;
  }
  private toggleIsFilled() {
    this.filled = !this.filled;
  }
  private toggleIsReq() {
    this.required = !this.required;
  }

  @property({ reflect: true, type: String }) testId: string | undefined =
    undefined;
  @property({ reflect: true, type: String }) label: string = "Label";
  @property({ reflect: true, type: Boolean }) multiple: boolean | undefined =
    true;
  @property({ reflect: true, type: Boolean }) disabled: boolean = false;
  @property({ reflect: true, type: Boolean }) filled: boolean = false;
  @property({ reflect: true, type: Boolean }) required: boolean = false;

  // Mulig denne kan fjernes, men brukt for test
  @property({ reflect: true, type: Boolean }) error: boolean = false;

  @property({ reflect: true, type: Boolean }) requiredLabel:
    | string
    | undefined = "undefisssned";
  @property({ reflect: true, type: Boolean }) errorMessage: string =
    "-!ERROR!-";

  @property({ type: Array<OptionInterface> }) values: OptionInterface[] = [
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Bird", value: "bird" },
    { label: "Fish", value: "fish" },
    { label: "Horse", value: "horse" },
    { label: "Rabbit", value: "rabbit" },
    { label: "Hamster", value: "hamster" },
    { label: "Guinea Pig", value: "guinea_pig" },
    { label: "Turtle", value: "turtle" },
    { label: "Snake", value: "snake" },
    { label: "Lizard", value: "lizard" },
    { label: "Parrot", value: "parrot" },
    { label: "Canary", value: "canary" },
    { label: "Budgerigar", value: "budgerigar" },
    { label: "Goat", value: "goat" },
    { label: "Sheep", value: "sheep" },
    { label: "Cow", value: "cow" },
    { label: "Pig", value: "pig" },
    { label: "Hen", value: "hen" },
    { label: "Rooster", value: "rooster" },
    { label: "Duck", value: "duck" },
    { label: "Goose", value: "goose" },
    { label: "Turkey", value: "turkey" },
    { label: "Peacock", value: "peacock" },
    { label: "Kangaroo", value: "kangaroo" },
    { label: "Koala", value: "koala" },
    { label: "Panda", value: "panda" },
    { label: "Tiger", value: "tiger" },
    { label: "Lion", value: "lion" },
    { label: "Leopard", value: "leopard" },
    { label: "Cheetah", value: "cheetah" },
    { label: "Elephant", value: "elephant" },
    { label: "Rhinoceros", value: "rhinoceros" },
    { label: "Hippopotamus", value: "hippopotamus" },
    { label: "Giraffe", value: "giraffe" },
    { label: "Zebra", value: "zebra" },
    { label: "Bear", value: "bear" },
    { label: "Wolf", value: "wolf" },
    { label: "Fox", value: "fox" },
    { label: "Wolverine", value: "wolverine" },
    { label: "Badger", value: "badger" },
    { label: "Otter", value: "otter" },
    { label: "Beaver", value: "beaver" },
    { label: "Squirrel", value: "squirrel" },
    { label: "Hare", value: "hare" },
    { label: "Roe Deer", value: "roe_deer" },
    { label: "Deer", value: "deer" },
    { label: "Moose", value: "moose" },
    { label: "Reindeer", value: "reindeer" },
    { label: "Musk Ox", value: "musk_ox" },
    { label: "Wild Boar", value: "wild_boar" },
    { label: "Marten", value: "marten" },
    { label: "Stoat", value: "stoat" },
    { label: "Ferret", value: "ferret" },
    { label: "Mink", value: "mink" },
    { label: "Sea Lion", value: "sea_lion" },
    { label: "Elephant Seal", value: "elephant_seal" },
    { label: "Manatee", value: "manatee" },
    { label: "Dolphin", value: "dolphin" },
    { label: "Whale", value: "whale" },
    { label: "Orca", value: "orca" },
    { label: "Shark", value: "shark" },
    { label: "Ray", value: "ray" },
    { label: "Jellyfish", value: "jellyfish" },
    { label: "Crab", value: "crab" },
    { label: "Lobster", value: "lobster" },
    { label: "Shrimp", value: "shrimp" },
    { label: "Oyster", value: "oyster" },
    { label: "Mussel", value: "mussel" },
    { label: "Starfish", value: "starfish" },
    { label: "Sea Cucumber", value: "sea_cucumber" },
    { label: "Sea Anemone", value: "sea_anemone" },
    { label: "Coral", value: "coral" },
    { label: "Ink", value: "ink" },
    { label: "Octopus", value: "octopus" },
    { label: "Seahorse", value: "seahorse" },
    { label: "Sea Serpent", value: "sea_serpent" },
    { label: "Sea Dragon", value: "sea_dragon" },
    { label: "Sea Snake", value: "sea_snake" },
    { label: "Sea Scorpion", value: "sea_scorpion" },
    { label: "Sea Spider", value: "sea_spider" },
    { label: "Sea Crayfish", value: "sea_crayfish" },
    { label: "Sea Mouse", value: "sea_mouse" },
    { label: "Sea Urchin", value: "sea_urchin" },
    { label: "Sea Pig", value: "sea_pig" },
    { label: "Sea Pig Worm", value: "sea_pig_worm" },
    { label: "Sea Pig Fish", value: "sea_pig_fish" },
    { label: "Sea Pig Crab", value: "sea_pig_crab" },
    { label: "Sea Pig Crayfish", value: "sea_pig_crayfish" },
    { label: "Sea Pig Mouse", value: "sea_pig_mouse" },
    { label: "Sea Pig Star", value: "sea_pig_star" },
    { label: "Sea Pig Worm", value: "sea_pig_worm" },
    { label: "Sea Pig Fish", value: "sea_pig_fish" },
    { label: "Sea Pig Crab", value: "sea_pig_crab" },
    { label: "Sea Pig Crayfish", value: "sea_pig_crayfish" },
    { label: "Sea Pig Mouse", value: "sea_pig_mouse" },
    { label: "Sea Pig Star", value: "sea_pig_star" },
    { label: "Sea Pig Worm", value: "sea_pig_worm" },
    { label: "Sea Pig Fish", value: "sea_pig_fish" },
    { label: "Sea Pig Crab", value: "sea_pig_crab" },
    { label: "Sea Pig Crayfish", value: "sea_pig_crayfish" },
    { label: "Sea Pig Mouse", value: "sea_pig_mouse" },
    { label: "Sea Pig Star", value: "sea_pig_star" },
    { label: "Sea Pig Worm", value: "sea_pig_worm" },
  ];

  @state() displayList: ListType = "values";
  @state() listWithSearchHits: OptionInterface[] = [];
  @state() selectedOptions: OptionInterface[] = [];
  @state() inputValue: string = "";
  @state() isPopupActive: boolean = false;
  @state() numberOfTagsToDisplay: number = 100;

  private inputRef = createRef<HTMLInputElement>();

  // MÅ testes ut i Vue
  private emit(eventname: string, value: OptionInterface[]): void {
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
  static styles = [styles];

  constructor() {
    super();
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    const res = this.searchForOptions(target.value);
    this.setListWithSearchHits(res);
  }

  handleFocus() {
    console.log("handleFocus");
    this.isPopupActive = true;
    this.displayList = "values";
    this.inputRef.value?.focus();
  }

  handleBlur() {
    console.log("handleBlur");
    this.isPopupActive = false;
    this.listWithSearchHits = [];
  }

  setListWithSearchHits(options: OptionInterface[]) {
    this.listWithSearchHits = [];
    this.listWithSearchHits.push(...options);
    this.displayList = "listWithPossibleSearchHits";
  }

  private searchForOptions(searchText: string) {
    const searchTextLowerCase = searchText.toLowerCase();
    return this.values
      .filter((option) => new RegExp(searchText, "i").test(option.label))
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

  selectOption(option: OptionInterface, event?: KeyboardEvent) {
    if (
      this.disabled ||
      (event instanceof KeyboardEvent && event.key !== "Enter")
    )
      return;

    const copyOfValues = [...this.values];
    const indexInValues = copyOfValues.findIndex(
      (optionValue) => optionValue.value === option.value
    );
    if (indexInValues === -1) return;

    if (!this.multiple && this.selectedOptions.length === 1) {
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
    this.emit("nve-combobox-selected-options", this.selectedOptions);
    this.inputValue = "";
  }

  unSelectOption(option: OptionInterface, event?: KeyboardEvent) {
    if (
      this.disabled ||
      (event instanceof KeyboardEvent && event.key !== "Enter")
    )
      return;
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
  }

  toggleOptionInListWithSearchHits(
    option: OptionInterface,
    index: number,
    event?: KeyboardEvent
  ) {
    if (
      this.disabled ||
      (event instanceof KeyboardEvent && event.key !== "Enter")
    ) {
      return;
    }

    const copyOfListWithPossibleSearchHits = [...this.listWithSearchHits];
    const previousValue = copyOfListWithPossibleSearchHits[index].selected;
    copyOfListWithPossibleSearchHits[index].selected =
      !copyOfListWithPossibleSearchHits[index].selected;

    // Hvis vi det ikke er mulig å velge mer enn 1,
    // Finn alternativer som er valgt og set de false
    // Men ikke for valget som nettopp har blitt valgt
    if (!this.multiple) {
      for (let i = 0; i < copyOfListWithPossibleSearchHits.length; i++) {
        const option = copyOfListWithPossibleSearchHits[i];
        if (option?.selected && i !== index) {
          option.selected = false;
          break;
        }
      }
    }

    this.listWithSearchHits = copyOfListWithPossibleSearchHits;
    // Hvis valgte valg var true tidligere, fjern valget.
    if (previousValue === true) {
      this.unSelectOption(option, event);
    } else {
      this.selectOption(option, event);
    }
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

  toggleIsPopupActive(event?: KeyboardEvent | PointerEvent) {
    if (this.disabled) return;
    if (event instanceof KeyboardEvent) {
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
    } else {
      this.isPopupActive = !this.isPopupActive;
    }
  }

  shouldDisplayCounter() {
    return !this.isPopupActive && this.selectedOptions?.length;
  }

  render() {
    return html`
      <button @click="${this.toggleIsDisabled}">Disable</button>
      <button @click="${this.toggleIsFilled}">Filled</button>
      <button @click="${this.toggleIsReq}">Required</button>
      <nve-popup
        placement="bottom"
        sync="width"
        .active="${this.isPopupActive}"
        distance="8"
      >
        <nve-input
          class="inputWithTags"
          slot="anchor"
          autocomplete="off"
          label="${this.label}"
          errorMessage="${this.errorMessage}"
          .value="${this.inputValue}"
          @blur="${this.handleBlur}"
          @focus="${this.handleFocus}"
          @click="${this.handleFocus}"
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
                .closeable=${!this.disabled}
                @nve-close="${() => this.unSelectOption(option)}"
              >
                ${option.label}
              </nve-tag>
            `;
          })}
          <input
            slot="prefix"
            class="input-prefix"
            .value="${this.inputValue}"
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @click="${this.handleFocus}"
            ${ref(this.inputRef)}
          />
          ${this.shouldDisplayCounter() &&
          html`
            <nve-tag slot="prefix" size="small">
              ${this.selectedOptions.length}
            </nve-tag>
          `}
          ${html`
            <nve-icon
              tabindex="0"
              @keydown="${this.toggleIsPopupActive}"
              @click="${this.toggleIsPopupActive}"
              slot="suffix"
              name="keyboard_arrow_${this.isPopupActive ? "up" : "down"}"
              style="font-size: 1.5rem;"
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
          aria-labelledby="label"
          part="listbox"
          class="select__listbox"
          tabindex="-1"
          ?disabled=${this.disabled}
          ?filled=${this.filled}
        >
          ${this.displayList === "listWithPossibleSearchHits"
            ? this.listWithSearchHits.length > 0
              ? this.listWithSearchHits.map(
                  (option, i) => html`
                    <nve-option
                      tabindex="0"
                      value="${option.value}"
                      ?disabled=${this.disabled}
                      .selected="${option.selected}"
                      @keydown="${(e: KeyboardEvent) =>
                        this.toggleOptionInListWithSearchHits(option, i, e)}"
                      @click="${() =>
                        this.toggleOptionInListWithSearchHits(option, i)}"
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
                        : this.addHighlightingToSearchResult(option.label)}
                    </nve-option>
                  `
                )
              : html`
                  <nve-option disabled>Ingen resultater</nve-option>
                `
            : ""}
          ${this.displayList === "values"
            ? this.values.map(
                (option) => html`
                  <nve-option
                    tabindex="0"
                    value="${option.value}"
                    ?disabled=${this.disabled}
                    .selected="${option.selected}"
                    @keydown="${(e: KeyboardEvent) =>
                      option.selected
                        ? this.unSelectOption(option, e)
                        : this.selectOption(option, e)}"
                    @click="${() =>
                      option.selected
                        ? this.unSelectOption(option)
                        : this.selectOption(option)}"
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
