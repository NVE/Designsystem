import { html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-select-demo.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../nve-icon/nve-icon.component';
import { classMap } from 'lit/directives/class-map.js';
import { NveOptionDemo } from 'src/nve-designsystem';

let id = 0;

//add depends on nve-icon
@customElement('nve-select-demo')
export default class NveSelectDemo extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  @property({ type: String }) label: string = '';
  @property({ type: String }) tooltip = '';
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: String }) requiredLabel = '';
  @property({ type: String }) id = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) multiselect = false;
  @property({ type: String }) removeMultiSelectAriaLabel = 'Slett';
  /** @internal */
  private readonly componentId = `combobox-${++id}`;

  /** @internal */
  // private readonly componentErrorId = `error-combobox-${++id}`;
  static styles = [styles];

  @query('input[role="combobox"]') comboboxNativeInput!: HTMLInputElement;
  @queryAssignedElements({ selector: 'nve-option-demo', flatten: true })
  private options!: NveOptionDemo[];
  @state() protected expanded = false;
  @state() private activeIndex = -1;
  @state() private activeId = '';
  @state() private searchString = '';
  @state() private displayLabel = '';
  @state() private multiSelectDisplayLabels: Record<string, string> = {};
  private searchTimeout?: number;

  constructor() {
    super();
  }

  private handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        return this.updateActiveIndex();

      case 'ArrowUp':
        e.preventDefault();
        return this.updateActiveIndex(false);

      case 'Home':
        e.preventDefault();
        this.setFirstOptionActive();
        break;

      case 'End':
        e.preventDefault();
        this.setLastOptionActive();
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        if (this.multiselect) {
          return this.selectMultipleOptions(this.activeIndex);
        } else {
          return this.selectOption(this.activeIndex);
        }

      case 'Escape':
        e.preventDefault();
        this.closeOptions();
        break;

      default:
        this.handleTypeahead(e.key);
    }
  }

  private selectOption(index: number) {
    const option = this.options[index];
    if (!option) return;

    this.value = option.value;
    this.displayLabel = option.label || option.textContent?.trim() || '';
    this.activeIndex = index;

    this.expanded = false;
    // update aria-selected only when enter is changed
    option.setAttribute('aria-selected', 'true');
    this.options.forEach((opt, i) => {
      if (i !== index) {
        opt.setAttribute('aria-selected', 'false');
      }
    });

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  private selectMultipleOptions(index: number) {
    const option = this.options[index];
    if (!option) return;

    this.value = this.value ? `${this.value},${option.value}` : option.value;
    const label = option.label || option.textContent?.trim() || '';
    this.multiSelectDisplayLabels[option.value] = label;
    option.setAttribute('aria-selected', 'true');
  }

  private closeOptions() {
    this.expanded = false;
    if (!this.value) {
      this.activeId = '';
    }
  }

  private setFirstOptionActive() {
    this.activeIndex = 0;
    this.activeId = `${this.id}-0`;
    const option = this.options[0];
    option.setAttribute('aria-selected', 'true');
    this.options.forEach((opt, i) => {
      if (i !== this.activeIndex) {
        opt.setAttribute('aria-selected', 'false');
      }
    });
  }

  private setLastOptionActive() {
    const lastIndex = this.options.length - 1;
    this.activeIndex = lastIndex;
    this.activeId = `${this.id}-${lastIndex}`;
    const option = this.options[lastIndex];
    option.setAttribute('aria-selected', 'true');
    this.options.forEach((opt, i) => {
      if (i !== this.activeIndex) {
        opt.setAttribute('aria-selected', 'false');
      }
    });
  }

  private updateActiveIndex(add = true) {
    const max = this.options.length - 1;
    //Math.min(max, this.activeIndex + 1)
    // if no value then we set a new activeIndex to 0,
    // if value and expanded false then we have to set its index
    // if value and expanded true then we have to set next index
    let index = 0;
    if (this.value && !this.expanded) {
      const currentSelectedIndex = this.options.findIndex((opt) => opt.value === this.value);
      index = currentSelectedIndex;
    } else if (this.expanded) {
      index = this.activeIndex + (add ? 1 : -1);
      if (index < 0) {
        index = max;
      } else if (index > max) {
        index = 0;
      }
    }
    this.expanded = true;

    this.activeIndex = index;
    this.activeId = `${this.id}-${index}`;
    const option = this.options[index];
    option.active = true;
    this.options.forEach((opt, i) => {
      if (i !== this.activeIndex) {
        opt.active = false;
      }
    });
  }

  private handleTypeahead(key: string) {
    // kun bokstaver og space skal trigge typeahead
    if (key.length !== 1 || key === ' ') return;

    this.expanded = true;
    // bygger en søkestreng basert på tastetrykkene, og resetter den etter 500ms med inaktivitet
    clearTimeout(this.searchTimeout);
    this.searchString += key.toLowerCase();
    this.searchTimeout = window.setTimeout(() => {
      this.searchString = '';
    }, 500);

    const index = this.getIndexByLetter(this.searchString, this.activeIndex + 1);

    if (index >= 0) {
      this.activeIndex = index;
      this.activeId = `${this.id}-${index}`;
      const option = this.options[index];
      option.active = true;
      this.options.forEach((opt, i) => {
        if (i !== this.activeIndex) {
          opt.active = false;
        }
      });
    }
  }

  private getIndexByLetter(filter: string, startIndex = 0) {
    const orderedOptions = [...this.options.slice(startIndex), ...this.options.slice(0, startIndex)];
    const firstMatch = this.filterOptions(orderedOptions, filter)[0];
    const allSameLetter = (array: string[]) => array.every((letter) => letter === array[0]);

    // first check if there is an exact match for the typed string
    if (firstMatch) {
      return this.options.indexOf(firstMatch);
    }

    // if the same letter is being repeated, cycle through first-letter matches
    else if (allSameLetter(filter.split(''))) {
      const matches = this.filterOptions(orderedOptions, filter[0]);
      return this.options.indexOf(matches[0]);
    }

    // if no matches, return -1
    else {
      return -1;
    }
  }

  private filterOptions(orderedOptions: NveOptionDemo[], filter: string): NveOptionDemo[] {
    return orderedOptions.filter((option) => {
      const optionText = option.label || option.textContent?.trim() || '';
      const matches = optionText.toLowerCase().indexOf(filter.toLowerCase()) === 0;
      return matches;
    });
  }

  private handleClick(e: MouseEvent) {
    e.preventDefault();
    if (this.expanded && this.activeIndex >= 0) {
      this.selectOption(this.activeIndex);
    } else {
      this.expanded = !this.expanded;
    }
    this.comboboxNativeInput?.focus();
  }

  private handleLabelClick() {
    this.comboboxNativeInput?.focus();
  }

  private handleListboxClick(e: MouseEvent) {
    const index = this.options.findIndex((opt) => opt.contains(e.target as Node));
    if (index >= 0) {
      if (this.multiselect) {
        this.selectMultipleOptions(index);
      } else {
        this.selectOption(index);
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.label) {
      console.warn(
        'nve-select-demo: label is not set. It is recommended to set a label for each input component for better accessibility.'
      );
    }

    if (!this.id) {
      this.id = this.componentId;
    }
  }

  private onFocusOut = (event: FocusEvent) => {
    const next = event.relatedTarget as Node | null;

    // If focus is still inside the component → ignore
    if (next && this.contains(next)) {
      return;
    }

    // set activeIndex to a selected value
    if (this.activeIndex >= 0) {
      this.selectOption(this.activeIndex);
    } else {
      this.closeOptions();
    }
    // Otherwise: user left the component
    //this.commitSelectionAndClose();
  };

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.options.forEach((opt, index) => {
      if (!opt.id) {
        opt.id = `${this.id}-${index}`;
      }
    });
    this.addEventListener('focusout', this.onFocusOut);
  }

  /*
  Navigating the list of options does not set the value of the input. 
  This gives screen reader users, who need to navigate among the options to perceive them, 
  the ability to explore options without losing the current value of the input. 
  The value is set when users press Space, Enter, or Tab, or when focus moves out of the combobox. 
  The current value is retained if the listbox is closed with Escape or if the user collapses the 
  list by clicking the input.
  */

  /*
  change div into readonly input, check all the arias in wcag its fun


should i support values like objects so that we can transfer data easier? like in search

  MULTISELECTION
  - we wont use aria-live for now
  - when user select item it shows in the input as a tag/button with x to delete item
  - buttons inside the input are focussable with arrows not with the tab tho
  - we use comma delimiter
  */
  render() {
    return html`
      <div class="combobox" testId=${ifDefined(this.testId)}>
        <label class="label" id=${`${this.id}-label`} @click=${this.handleLabelClick}> ${this.label} </label>

        <div class="combobox__input" @click=${this.handleClick} @keydown=${this.handleKeydown}>
          ${this.multiselect && this.value
            ? this.value
                .split(',')
                .map(
                  (val) =>
                    html`<button
                      class="combobox__tag"
                      aria-label="${this.removeMultiSelectAriaLabel} ${this.multiSelectDisplayLabels[val]}"
                      tabindex="-1"
                    >
                      ${this.multiSelectDisplayLabels[val]} <nve-icon name="close" aria-hidden="true"></nve-icon>
                    </button>`
                )
            : nothing}
          <input
            value=${this.displayLabel}
            readonly
            aria-controls="${`${this.id}-listbox`}"
            aria-expanded="${this.expanded}"
            aria-haspopup="listbox"
            aria-labelledby="${`${this.id}-label`}"
            role="combobox"
            aria-activedescendant="${this.expanded ? this.activeId : ''}"
          />

          <nve-icon name="keyboard_arrow_down" aria-hidden="true"></nve-icon>
        </div>
        <div
          class=${classMap({ combobox__listbox: true, 'combobox__listbox--expanded': this.expanded })}
          role="listbox"
          id=${`${this.id}-listbox`}
          aria-labelledby="${`${this.id}-label`}"
          tabindex="-1"
          @click=${this.handleListboxClick}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-select-demo': NveSelectDemo;
  }
}
