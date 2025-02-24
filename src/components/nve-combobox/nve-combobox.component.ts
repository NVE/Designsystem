import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-combobox.styles';
import '../nve-popup/nve-popup.component';
import '../nve-input/nve-input.component';
import '../nve-tag/nve-tag.component';
import '../nve-menu/nve-menu.component';
import '../nve-menu-item/nve-menu-item.component';
import '../nve-option/nve-option.component';
import { StepProps } from '../nve-stepper/nve-step/nve-step.component';

/*
 
 
 Keyboard navigering
  Tabindex 
 
 Legge til text søk 

 sjekek aria attr

 splitte ut funksjonene jeg har for søk 

 fikse values prop.
 
 
 
 */
interface OptionInterface {
  label: string;
  value: string | number;
}

@customElement('nve-combobox')
export default class NveCombobox extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;
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

  @state() displayList: 'listWithoutSelectedElements' | 'listWithPossibleSearchHits' | 'selectedItems' =
    'listWithoutSelectedElements';
  @state() listWithoutSelectedElements: OptionInterface[] = [];
  @state() listWithPossibleSearchHits: OptionInterface[] = [];
  @state() selectedItems: OptionInterface[] = [];
  @state() inputValue: string = '';

  @state() isPopupActive: boolean = false;

  steps: StepProps[] = [];
  static styles = [styles];

  constructor() {
    super();
    this.listWithoutSelectedElements = [...this.values];
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
    return this.listWithoutSelectedElements.filter((option) => {
      return this.regExp(searchText, option);
    });
  }

  regExp(searchText: string, option: OptionInterface) {
    return new RegExp(searchText, 'i').test(option.label);
  }
  handleFocus() {
    console.log('handleFocus');
    this.isPopupActive = true;
  }

  handleBlur() {
    console.log('handleBlur');
    this.isPopupActive = false;
  }
  removeItem(option: OptionInterface) {
    this.selectedItems = this.selectedItems.filter((selectedItem) => selectedItem.value !== option.value);

    // find index in original array
    const indexInOriginalArray = this.values.findIndex((value) => value.value === option.value);

    // toSpliced er ikke mulig å bruke
    this.listWithoutSelectedElements.splice(indexInOriginalArray, 0, option);
  }

  selectItem(_option: OptionInterface) {
    console.log('selectItem');
    const option = { ..._option };

    const isSelectedDuplicateIndex = this.selectedItems.findIndex(
      (previouslySelectedItem) => previouslySelectedItem.value === option.value
    );

    if (isSelectedDuplicateIndex > -1) return;
    if (isSelectedDuplicateIndex === -1) {
      this.selectedItems = [...this.selectedItems, option];
      const removeElementFromListWithoutSelectedElementsIndex = this.listWithoutSelectedElements.findIndex(
        (listWithoutSelectedElement) => listWithoutSelectedElement.value === option.value
      );

      this.listWithoutSelectedElements.splice(removeElementFromListWithoutSelectedElementsIndex, 1);
    }

    this.isPopupActive = false;
  }

  addHighlightingToSearchResult(option: OptionInterface) {
    return option.label.replace(new RegExp(this.inputValue, 'i'), (match) => `<b>${match}</b>`);
  }

  render() {
    return html`
      <nve-popup placement="bottom" sync="width" .active="${this.isPopupActive}">
        <nve-input
          slot="anchor"
          .value="${this.inputValue}"
          @input="${this.handleInput}"
          @focus="${this.handleFocus}"
          label="Svaret på livet, universet og alt"
        >
          ${this.selectedItems.map(
            (item) => html`
              <nve-tag @nve-close="${() => this.removeItem(item)}" slot="prefix" closeable size="small">
                ${item.label}
              </nve-tag>
            `
          )}
        </nve-input>
        <div
          id="listbox"
          role="listbox"
          aria-expanded="${!!this.isPopupActive}-"
          aria-labelledby="label"
          part="listbox"
          class="select__listbox"
          tabindex="-1"
          @blur="${this.handleBlur}"
        >
          ${this.displayList === 'listWithPossibleSearchHits' &&
          this.listWithPossibleSearchHits?.map(
            (item) => html`
              <nve-option
                @click="${() => this.selectItem(item)}"
                textLabel="${this.addHighlightingToSearchResult(item)}"
              ></nve-option>
            `
          )}
          ${this.displayList === 'listWithoutSelectedElements' &&
          this.listWithoutSelectedElements?.map(
            (item) => html` <nve-option @click="${() => this.selectItem(item)}"> ${item.label}</nve-option> `
          )}
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
