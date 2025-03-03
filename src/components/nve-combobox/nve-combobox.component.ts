import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-combobox.styles';
import '../nve-popup/nve-popup.component';
import '../nve-input/nve-input.component';
import '../nve-tag/nve-tag.component';
import '../nve-menu/nve-menu.component';
import '../nve-menu-item/nve-menu-item.component';
import '../nve-option/nve-option.component';
import '../nve-icon/nve-icon.component';
import { ref, createRef } from 'lit/directives/ref.js';

/*
  ACTIONS 
 
 * Keyboard navigering 
  - nesten ferdig, men trenger arrow navigering , mulig inputRef under er løsningen 

 * Fikse props (values/isMultiSelect osv).

 * Validering av input (rød ramme)

 * Lage en form for kalkulasjon på bredden tin nve-tag.
    - jeg har lakt inn så viu kan kalkulere dette, ikke ferdig meeeen  så kan det være at man ikke ønsker 2 linjer på input. Hva skal skje hvis tags er for lange , skal tags 
 
 *  Det er ikke mulig å sette aria-* selected på option progrmatisk : https://github.com/shoelace-style/shoelace/blob/next/src/components/option/option.component.ts


* Fjern tags 


 */
interface OptionInterface {
  label: string;
  value: string | number;
  selected?: boolean;
}

type ListType = 'values' | 'listWithPossibleSearchHits';

@customElement('nve-combobox')
export default class NveCombobox extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
  @property({ reflect: true, type: Boolean }) multiple: boolean | undefined = true;

  @property({ type: Array<OptionInterface> }) values: OptionInterface[] = [
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
    { label: 'Bird', value: 'bird' },
    { label: 'Fish', value: 'fish' },
    { label: 'Horse', value: 'horse' },
    { label: 'Rabbit', value: 'rabbit' },
    { label: 'Hamster', value: 'hamster' },
    { label: 'Guinea Pig', value: 'guinea_pig' },
    { label: 'Turtle', value: 'turtle' },
    { label: 'Snake', value: 'snake' },
    { label: 'Lizard', value: 'lizard' },
    { label: 'Parrot', value: 'parrot' },
    { label: 'Canary', value: 'canary' },
    { label: 'Budgerigar', value: 'budgerigar' },
    { label: 'Goat', value: 'goat' },
    { label: 'Sheep', value: 'sheep' },
    { label: 'Cow', value: 'cow' },
    { label: 'Pig', value: 'pig' },
    { label: 'Hen', value: 'hen' },
    { label: 'Rooster', value: 'rooster' },
    { label: 'Duck', value: 'duck' },
    { label: 'Goose', value: 'goose' },
    { label: 'Turkey', value: 'turkey' },
    { label: 'Peacock', value: 'peacock' },
    { label: 'Kangaroo', value: 'kangaroo' },
    { label: 'Koala', value: 'koala' },
    { label: 'Panda', value: 'panda' },
    { label: 'Tiger', value: 'tiger' },
    { label: 'Lion', value: 'lion' },
    { label: 'Leopard', value: 'leopard' },
    { label: 'Cheetah', value: 'cheetah' },
    { label: 'Elephant', value: 'elephant' },
    { label: 'Rhinoceros', value: 'rhinoceros' },
    { label: 'Hippopotamus', value: 'hippopotamus' },
    { label: 'Giraffe', value: 'giraffe' },
    { label: 'Zebra', value: 'zebra' },
    { label: 'Bear', value: 'bear' },
    { label: 'Wolf', value: 'wolf' },
    { label: 'Fox', value: 'fox' },
    { label: 'Wolverine', value: 'wolverine' },
    { label: 'Badger', value: 'badger' },
    { label: 'Otter', value: 'otter' },
    { label: 'Beaver', value: 'beaver' },
    { label: 'Squirrel', value: 'squirrel' },
    { label: 'Hare', value: 'hare' },
    { label: 'Roe Deer', value: 'roe_deer' },
    { label: 'Deer', value: 'deer' },
    { label: 'Moose', value: 'moose' },
    { label: 'Reindeer', value: 'reindeer' },
    { label: 'Musk Ox', value: 'musk_ox' },
    { label: 'Wild Boar', value: 'wild_boar' },
    { label: 'Marten', value: 'marten' },
    { label: 'Stoat', value: 'stoat' },
    { label: 'Ferret', value: 'ferret' },
    { label: 'Mink', value: 'mink' },
    { label: 'Sea Lion', value: 'sea_lion' },
    { label: 'Elephant Seal', value: 'elephant_seal' },
    { label: 'Manatee', value: 'manatee' },
    { label: 'Dolphin', value: 'dolphin' },
    { label: 'Whale', value: 'whale' },
    { label: 'Orca', value: 'orca' },
    { label: 'Shark', value: 'shark' },
    { label: 'Ray', value: 'ray' },
    { label: 'Jellyfish', value: 'jellyfish' },
    { label: 'Crab', value: 'crab' },
    { label: 'Lobster', value: 'lobster' },
    { label: 'Shrimp', value: 'shrimp' },
    { label: 'Oyster', value: 'oyster' },
    { label: 'Mussel', value: 'mussel' },
    { label: 'Starfish', value: 'starfish' },
    { label: 'Sea Cucumber', value: 'sea_cucumber' },
    { label: 'Sea Anemone', value: 'sea_anemone' },
    { label: 'Coral', value: 'coral' },
    { label: 'Ink', value: 'ink' },
    { label: 'Octopus', value: 'octopus' },
    { label: 'Seahorse', value: 'seahorse' },
    { label: 'Sea Serpent', value: 'sea_serpent' },
    { label: 'Sea Dragon', value: 'sea_dragon' },
    { label: 'Sea Snake', value: 'sea_snake' },
    { label: 'Sea Scorpion', value: 'sea_scorpion' },
    { label: 'Sea Spider', value: 'sea_spider' },
    { label: 'Sea Crayfish', value: 'sea_crayfish' },
    { label: 'Sea Mouse', value: 'sea_mouse' },
    { label: 'Sea Urchin', value: 'sea_urchin' },
    { label: 'Sea Pig', value: 'sea_pig' },
    { label: 'Sea Pig Worm', value: 'sea_pig_worm' },
    { label: 'Sea Pig Fish', value: 'sea_pig_fish' },
    { label: 'Sea Pig Crab', value: 'sea_pig_crab' },
    { label: 'Sea Pig Crayfish', value: 'sea_pig_crayfish' },
    { label: 'Sea Pig Mouse', value: 'sea_pig_mouse' },
    { label: 'Sea Pig Star', value: 'sea_pig_star' },
    { label: 'Sea Pig Worm', value: 'sea_pig_worm' },
    { label: 'Sea Pig Fish', value: 'sea_pig_fish' },
    { label: 'Sea Pig Crab', value: 'sea_pig_crab' },
    { label: 'Sea Pig Crayfish', value: 'sea_pig_crayfish' },
    { label: 'Sea Pig Mouse', value: 'sea_pig_mouse' },
    { label: 'Sea Pig Star', value: 'sea_pig_star' },
    { label: 'Sea Pig Worm', value: 'sea_pig_worm' },
    { label: 'Sea Pig Fish', value: 'sea_pig_fish' },
    { label: 'Sea Pig Crab', value: 'sea_pig_crab' },
    { label: 'Sea Pig Crayfish', value: 'sea_pig_crayfish' },
    { label: 'Sea Pig Mouse', value: 'sea_pig_mouse' },
    { label: 'Sea Pig Star', value: 'sea_pig_star' },
    { label: 'Sea Pig Worm', value: 'sea_pig_worm' },
  ];

  @state() displayList: ListType = 'values';

  @state() listWithPossibleSearchHits: OptionInterface[] = [];
  @state() selectedOptions: OptionInterface[] = [];
  @state() inputValue: string = '';

  @state() isPopupActive: boolean = false;
  @state() nveTagWidth: number = 0;

  private resizeObserver: ResizeObserver | null = null;
  private width: number = 0;
  inputRef = createRef<HTMLInputElement>();
  static styles = [styles];

  constructor() {
    super();
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
    const res = this.searchForOptions(target.value);
    this.setListWithPossibleSearchHits(res);
  }

  setListWithPossibleSearchHits(options: OptionInterface[]) {
    this.listWithPossibleSearchHits = [];
    this.listWithPossibleSearchHits.push(...options);
    this.displayList = 'listWithPossibleSearchHits';
  }

  searchForOptions(searchText: string) {
    const searchTextLowerCase = searchText.toLowerCase();
    return this.values
      .filter((option) => new RegExp(searchText, 'i').test(option.label))
      .sort((a, b) => {
        const aStartsWith = a.label.toLowerCase().startsWith(searchTextLowerCase);
        const bStartsWith = b.label.toLowerCase().startsWith(searchTextLowerCase);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
        return 0;
      });
  }

  handleFocus() {
    console.log('handleFocus');
    this.isPopupActive = true;
    this.displayList = 'values';
  }

  handleBlur() {
    console.log('handleBlur');
    this.isPopupActive = false;
    this.listWithPossibleSearchHits = [];
    // console.log('getWidthOfNveTags ', this.getWidthOfNveTags());
  }

  selectItem(option: OptionInterface) {
    const copyOfValues = [...this.values];
    const indexInValues = copyOfValues.findIndex((optionValue) => optionValue.value === option.value);
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
    this.inputValue = '';
    this.isPopupActive = false;
  }

  unselectItem(option: OptionInterface) {
    const copyOfValues = [...this.values];
    const copyOfSelectedOptions = [...this.selectedOptions];

    const indexOfOptionInValues = copyOfValues.findIndex((selectedOption) => selectedOption.value === option.value);
    const indexOfOptionInSelectedValues = copyOfSelectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    if (indexOfOptionInValues !== -1) copyOfValues[indexOfOptionInValues].selected = false;
    if (indexOfOptionInSelectedValues !== -1) copyOfSelectedOptions.splice(indexOfOptionInSelectedValues, 1);

    this.selectedOptions = copyOfSelectedOptions;
    this.values = copyOfValues;
  }

  addHighlightingToSearchResult(option: OptionInterface) {
    const matched = option.label.replace(new RegExp(this.inputValue, 'i'), (match) => `<b>${match}</b>`);
    return html` ${unsafeHTML(matched)} `;
  }

  shouldDisplayList(list: ListType): boolean {
    switch (list) {
      case 'listWithPossibleSearchHits':
        return this.displayList === list;
      case 'values':
        return this.displayList === list;
      default:
        return false;
    }
  }

  toggleIsPopupActive(event?: KeyboardEvent | PointerEvent) {
    if (event instanceof KeyboardEvent) {
      if (event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        this.isPopupActive = !this.isPopupActive;
      }
    } else {
      this.isPopupActive = !this.isPopupActive;
    }
  }

  getWidthOfNveTags() {
    let totalWidth: number = 0;
    this.shadowRoot?.querySelectorAll('nve-tag[slot="prefix"]').forEach((childElement) => {
      if (childElement) totalWidth += childElement.getBoundingClientRect().width;
    });
    return totalWidth;
  }

  firstUpdated() {
    setTimeout(() => {
      const element = this.shadowRoot?.querySelector('nve-input.inputWithTags');
      const inputElement = element?.shadowRoot?.querySelector('input[part="input"][id="input"]');

      // Create a ResizeObserver instance
      this.resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.width = entry.contentRect.width;
          console.log(`New width: ${this.width}px`);
        }
      });
      if (inputElement) this.resizeObserver.observe(inputElement);
    }, 0);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Disconnect the observer when the element is removed from the DOM
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  ensureInView(element: Element | undefined) {
    requestAnimationFrame(() => element!.scrollIntoView(true));
  }

  getTabIndex(index: number) {
    return index === 0 ? 0 : -1;
  }

  render() {
    return html`
      <nve-popup placement="bottom" sync="width" .active="${this.isPopupActive}">
        <nve-input
          class="inputWithTags"
          slot="anchor"
          .value="${this.inputValue}"
          @input="${this.handleInput}"
          @focus="${this.handleFocus}"
          label="Velg et dyr"
        >
          ${this.selectedOptions.map(
            (option, i) => html`
              <nve-tag
                tabindex="${this.getTabIndex(i)}"
                @nve-close="${() => this.unselectItem(option)}"
                slot="prefix"
                closeable
                size="small"
              >
                ${option.label}
              </nve-tag>
            `
          )}
          ${!this.isPopupActive &&
          this.selectedOptions?.length &&
          html`<nve-tag slot="prefix" size="small"> ${this.selectedOptions.length} </nve-tag>`}
          ${html` <nve-icon
            tabindex="0"
            @keydown="${this.toggleIsPopupActive}"
            @click="${this.toggleIsPopupActive}"
            slot="suffix"
            name="keyboard_arrow_${this.isPopupActive ? 'up' : 'down'}"
            style="font-size: 1.5rem;"
          ></nve-icon>`}
        </nve-input>
        <div
          id="listbox"
          role="listbox"
          expanded="${!!this.isPopupActive}-"
          aria-labelledby="label"
          part="listbox"
          class="select__listbox"
          tabindex="-1"
          @blur="${this.handleBlur}"
        >
          ${this.shouldDisplayList('listWithPossibleSearchHits')
            ? this.listWithPossibleSearchHits.length > 0
              ? this.listWithPossibleSearchHits.map(
                  (option) => html`
                    <nve-option tabindex="-1" value="${option.value}" @click="${() => this.selectItem(option)}">
                      ${this.addHighlightingToSearchResult(option)}
                    </nve-option>
                  `
                )
              : html`<nve-option disabled>Ingen resultater</nve-option> `
            : ''}
          ${this.shouldDisplayList('values')
            ? this.values.map((option, i) => {
                return !option.selected
                  ? html` <nve-option
                      tabindex="${this.getTabIndex(i)}"
                      value="${option.value}"
                      @click="${() => this.selectItem(option)}"
                      >${option.label}</nve-option
                    >`
                  : html`
                      <nve-option
                        tabindex="${this.getTabIndex(i)}"
                        value="${option.value}"
                        @click=${() => this.unselectItem(option)}
                      >
                        <nve-icon slot="prefix" name="check" style="font-size: 1.5rem;"></nve-icon>
                        ${option.label}
                      </nve-option>
                    `;
              })
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
/*

       ${this.displayList === 'selectedItems' &&
          this.selectedItems?.map(
            (item) => html` <nve-option disabled @click="${() => this.selectItem(item)}"> ${item.label}</nve-option> `
          )} 


*/
