import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-combobox.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../nve-icon/nve-icon.component';
import { classMap } from 'lit/directives/class-map.js';
import { getLabel, labelStyles } from '../../templates/label';

let id = 0;
/**
 * Representerer et alternativ i select-komponenten.
 * Den har en unik verdi og en label som vises i UI.
 * textLabel vises i input-feltet
 */
export type Option = {
  value: string;
  label: string;
  textLabel?: string;
};

/**
 * Detaljer som sendes i change-hendelsen når et alternativ velges eller fjernes.
 * Inkluderer verdien til det endret alternativet
 * og handlingen som ble utført (select eller deselect).
 */
export type NveSelectChangeDetail = {
  value: string;
  action: 'select' | 'deselect';
};

/**
 * En combobox-komponent lar brukeren velge ett eller flere alternativer fra en liste, eller søke etter alternativer i et tekstfelt.
 * Den støtter både enkelt- og flervalg.
 *
 * @event change Når et alternativ velges eller fjernes. Hendelsen inkluderer verdien til det endret alternativet og handlingen som ble utført (select eller deselect).
 * @event nve-show Når listeboksen åpnes
 * @event nve-hide Når listeboksen lukkes
 * @event nve-clear Når alle valgte alternativer fjernes ved å klikke på clearable-knappen
 *
 * @csspart field Ytre container for hele feltet (label, combobox og hjelpetekst)
 * @csspart combobox Wrapper rundt kontrollen (verdiområde og listboks)
 * @csspart control Selve kontrollen som inneholder verdi, input, tags og ikoner
 * @csspart value Område som inneholder valgte tags og input-feltet
 * @csspart input Det interaktive input-feltet som fungerer som combobox-kontroll
 * @csspart tag Tag/knapp som representerer et valgt alternativ i multiselect
 * @csspart clear-button Knapp for å fjerne alle valgte alternativer
 * @csspart listbox Containeren som viser listen over tilgjengelige alternativer
 * @csspart option Enkelt alternativ i listen
 * @csspart help-text Område for hjelpetekst og feilmeldinger under feltet
 */
@customElement('nve-combobox')
export default class NveCombobox extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  // Native select attributer
  /** Om feltet skal være deaktivert */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Form-id som feltet tilhører */
  @property({ type: String }) form?: string;
  /** Unik id */
  @property({ type: String }) id = '';
  /** Om komponenten tillater flere valg */
  @property({ type: Boolean }) multiple = false;
  /** Navn på feltet */
  @property({ type: String }) name?: string;
  /** Om feltet er obligatorisk */
  @property({ type: Boolean, reflect: true }) required = false;

  // Custom select attributer
  /** Om alle valgte alternativer kan fjernes */
  @property({ type: Boolean }) clearable = false;
  /** Feilmelding som vises ved valideringsfeil. Hvis den er satt blir felt ugyldig og feil melding vises. */
  @property({ type: String, reflect: true }) errorMessage?: string;
  /** Om feltet skal bruke filled variant */
  @property({ type: Boolean }) filled = false;
  /** Hjelpetekst som vises over feltet */
  @property({ type: String, reflect: true }) helpText = '';
  /** Hint-tekst som vises under feltet */
  @property({ type: String, reflect: true }) hintText = '';
  /** Ledetekst */
  @property({ type: String }) label: string = '';
  /** Tekst som vises for å markere at et felt er obligatorisk */
  /** Maks antall valg i multiselect */
  @property({ type: Number }) max?: number;
  /** Alternativer som kan velges i select-komponenten. Hver option har en verdi og en label som vises i UI. */
  @property({ type: Array }) options: Option[] = [];
  /** Placeholder-tekst for inputfeltet */
  @property({ type: String }) placeholder = '';
  /** Om feltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Aria-label for knappen som fjerner et valgt alternativ i multiselect */
  @property({ type: String }) removeTagAriaLabel = 'Slett';
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property({ type: String, reflect: true }) requiredLabel = '';
  /** Om bruker kan redigere verdien i inputfeltet */
  @property({ type: Boolean }) editable = false;
  /** Initialt valgte verdier */
  @property({ type: Array }) selectedValues: string[] = [];
  /** Størrelse på komponenten */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';
  /** Om tags skal brytes til neste linje hvis de ikke får plass. Standard er false og da indikatoren vises. */
  @property({ type: Boolean }) wrap = false;

  /** @internal */
  private readonly componentId = `combobox-${++id}`;
  /** @internal */
  static styles = [styles, labelStyles];

  @query('input[role="combobox"]') comboboxNativeInput!: HTMLInputElement;
  /** Om listboksen er utvidet */
  @state() protected expanded = false;
  /** Verdi til det aktivert/fokuserte alternativet */
  @state() private activeValue = '';
  /** Internt array verdier for valgte alternativer. Oppdateres basert på selectedValues-prop og når alternativer velges eller fjernes. */
  @state() private _selectedValues: string[] = [];
  /** ID-er for kollapsede tags i multiselect hvis wrap er false */
  @state() private collapsedTagIds: string[] = [];
  /** Søketekst som brukes for å filtrere alternativer i single select */
  @state() private searchString = '';
  /** Tekst som vises i inputfeltet */
  @state() private displayLabel = '';
  /** Om maks antall valg er nådd */
  @state() private maxReached = false;
  /** Antall skjulte tags i multiselect hvis wrap er false */
  @state() private indicatorCount = 0;
  /** Synlige alternativer i listboksen. Kan filtreres basert på søketekst */
  @state() private visibleOptions: Option[] = [];
  /** Timeout for searchString */
  private searchTimeout?: number;
  /** Internt array for alternativer. Oppdateres basert på options-prop */
  private _options: Option[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.label) {
      console.warn(
        'nve-combobox: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  firstUpdated() {
    this.id = this.id || this.componentId;
    this.options.forEach((opt, index) => {
      opt.value = opt.value ? opt.value : `${this.id}-${index}`;
    });

    if (this.autofocus) {
      this.comboboxNativeInput.focus();
    }
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('options') && this.options !== null) {
      this._options = this.options;
      // fjern options fra DOM.
      this.removeAttribute('options');
      this.visibleOptions = this._options.filter((o): o is Option => !!o);
    }

    if (changed.has('selectedValues') && this.selectedValues !== null) {
      this.syncSelectedFromValues();
      // fjern selectedValues fra DOM
      this.removeAttribute('selectedValues');
    }
    if (changed.has('activeValue') && this.expanded) {
      this.scrollActiveOptionIntoView();
    }
  }

  /** Synkronisere _selectedValues på selectedValues-attributtet. */
  private syncSelectedFromValues() {
    this._selectedValues = [];

    const values = this.selectedValues ?? [];
    if (!values.length) {
      // ingen forhåndsvalgte verdier
      if (!this.multiple) {
        this.updateDisplayLabel('');
      }
      return;
    }

    const validOptions = values
      .map((value) => {
        const option = this._options.find((opt) => opt?.value === value);
        if (!option) {
          console.warn(`nve-combobox: selectedValue "${value}" does not match any option.`);
        }
        return option ?? null;
      })
      .filter((o): o is Option => !!o);

    if (!validOptions.length) return;

    if (!this.multiple) {
      this._selectedValues = [...this._selectedValues, validOptions[0].value];
      this.updateDisplayLabel(validOptions[0].textLabel || validOptions[0].label || '');
    } else {
      this._selectedValues = validOptions.map((o) => o.value);
    }
  }

  /*********** TASTATURINTERAKSJONER *****************/
  /*
  Tastaturinteraksjoner som støttes i combobox:
  ArrowDown: åpne liste og navigere til det første alternativet
  ArrowUp: åpne liste og navigere til det siste alternativet
  Escape: lukke liste og beholde valgt verdi, fokus på input
  Enter/Space: når liste er lukket åpne liste
  Utskrivbare tegn: åpne liste og navigere til det første 'matchende' alternativ basert på det som er skrevet

  ArrowLeft/ArrowRight: når multiselect og fokus er i input så naviger mellom tags og input
  Backspace: når multiselect, i tillegg til vanlig backspace funksjonalitet i input, hvis fokus er på en tag/knapp så deselect den og flytt fokus til forrige tag eller input

  Tastaturinteraksjoner som støttes i listbox:
  ArrowDown: navigere til det neste alternativet
  ArrowUp: navigere til det forrige alternativet
  Home: navigere til det første alternativet
  End: navigere til det siste alternativet
  Enter/Space: velge aktivt alternativ
  Escape: lukke liste og beholde valgt verdi, fokus på input
  Backspace: fokus input, hvis ikke fokus forrige tag
 */

  private handleKeydown(e: KeyboardEvent) {
    if (this.disabled || this.readonly) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        return this.handleArrowUpAndDown('down');
      case 'ArrowUp':
        e.preventDefault();
        return this.handleArrowUpAndDown('up');
      case 'ArrowLeft':
        if (!this.multiple) return;
        return this.handleArrowRightOrLeft(e, 'left');
      case 'ArrowRight':
        if (!this.multiple) return;
        return this.handleArrowRightOrLeft(e, 'right');
      case 'Escape':
        e.preventDefault();
        return this.handleEscape();
      case 'Home':
        e.preventDefault();
        this.handleHomeOrEnd('home');
        break;
      case 'End':
        e.preventDefault();
        this.handleHomeOrEnd('end');
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        return this.handleEnterOrSpace();
      case 'Backspace':
        if (!this.multiple) return;
        return this.handleBackspace(e);
      case 'Tab':
        if (this.expanded) {
          const optionLabel = this._selectedValues[0]
            ? this._options.find((opt) => opt?.value === this._selectedValues[0])?.textLabel ||
              this._options.find((opt) => opt?.value === this._selectedValues[0])?.label ||
              ''
            : '';
          this.updateDisplayLabel(optionLabel);
          this.closeListbox();
        }
        return;
      default:
        this.handleTypeahead(e.key);
    }
  }

  /**
   * Handterer ArrowUp og ArrowDown for å navigere i listen med alternativer.
   * Hvis listen ikke er utvidet, åpner den og aktiverer det første eller det siste alternativet basert på hvilken pil
   * som trykkes.
   * @param key - 'up' eller 'down', avhengig av hvilken pil som ble trykket
   */
  private async handleArrowUpAndDown(key: 'up' | 'down') {
    if (!this.visibleOptions.length) return;

    this.comboboxNativeInput.focus();
    if (!this.expanded) {
      if (this.editable && !this.multiple) {
        this.updateDisplayLabel('');
      }

      if (!this._selectedValues.length) {
        // Hvis ingen er valgt ennå → start fra første eller siste alternativ
        const index = key === 'down' ? 0 : this.visibleOptions.length - 1;
        this.activeValue = this.visibleOptions[index].value;
      }
      this.openListbox();
    } else {
      // Flytt til neste eller forrige alternativ (wrap-around)
      const currentIndex = this.visibleOptions.findIndex((opt) => opt.value === this.activeValue);
      const nextIndex =
        key === 'down'
          ? (currentIndex + 1) % this.visibleOptions.length
          : (currentIndex - 1 + this.visibleOptions.length) % this.visibleOptions.length;
      this.activeValue = this.visibleOptions[nextIndex].value;
    }
  }

  /**
   * Flytter fokus mellom tags og input når man trykker venstre/høyre piltast i multiselect.
   * Hvis fokus er i input og caret er i starten eller slutten av input, flytt fokus til henholdsvis forrige eller neste
   * tag. Hvis det ikke er noen tags, gjør ingenting.
   * @param e - KeyboardEvent som utløste handlingen
   * @param key - 'left' eller 'right', avhengig av hvilken pil som ble trykket
   */
  private handleArrowRightOrLeft(e: KeyboardEvent, key: 'left' | 'right') {
    if (!this._selectedValues.length) return;
    const target = e.target as HTMLElement;
    if (target === this.comboboxNativeInput) {
      const input = target as HTMLInputElement;
      const atStart = input.selectionStart === 0 && input.selectionEnd === 0;
      const atEnd = input.selectionStart === input.value.length && input.selectionEnd === input.value.length;

      // Kun hijack venstre/høyre piltast når caret er i starten eller slutten av input
      const tags = this.renderRoot.querySelectorAll<HTMLButtonElement>('.combobox__value__tag');
      if (!tags.length) return;

      if (key === 'left' && !atStart) return; // la nettleseren flytte caret
      if (key === 'right' && !atEnd) return; // la nettleseren flytte caret

      e.preventDefault();
      this.closeListbox();
      if (key === 'left') {
        tags[tags.length - 1]?.focus();
      } else {
        tags[0]?.focus();
      }
      return;
    }

    // 2) Fra en tag → flytt venstre/høyre gjennom tags, deretter tilbake til input
    if (target.classList.contains('combobox__value__tag')) {
      e.preventDefault();
      const tags = Array.from(this.renderRoot.querySelectorAll<HTMLButtonElement>('.combobox__value__tag'));
      const index = tags.indexOf(target as HTMLButtonElement);

      if (key === 'right') {
        if (index < tags.length - 1) {
          tags[index + 1].focus();
        } else {
          this.comboboxNativeInput.focus();
          this.openListbox();
        }
      } else {
        if (index > 0) {
          tags[index - 1].focus();
        } else {
          this.comboboxNativeInput.focus();
          this.openListbox();
        }
      }
    }
  }

  /**
   * Håndterer Escape-tasten for å lukke listeboksen og beholde det valgte alternativet.
   * Fokuserer også input-feltet etter at listen er lukket.
   */
  private handleEscape() {
    this.closeListbox();
    // hvis søkbar ønsker vi å tilbakestille visningsetiketten til verdien av det valgte alternativet.
    if (this._selectedValues.length) {
      if (!this.multiple) {
        this.updateDisplayLabel(
          this._options.find((opt) => opt?.value === this._selectedValues[0])?.textLabel ||
            this._options.find((opt) => opt?.value === this._selectedValues[0])?.label ||
            ''
        );
      }
    } else {
      this.updateDisplayLabel('');
    }
    this.comboboxNativeInput.focus();
  }

  private async handleBackspace(e: KeyboardEvent) {
    this.closeListbox();
    const focusLastTag = () => {
      const tags = this.renderRoot.querySelectorAll<HTMLButtonElement>('.combobox__value__tag');
      const lastTag = tags[tags.length - 1];
      lastTag?.focus();
    };

    const target = e.target as HTMLElement;

    // 1) In input: if empty and there are tags, move to last tag
    if (target === this.comboboxNativeInput) {
      const input = target as HTMLInputElement;
      if (!input.value && this._selectedValues.length) {
        e.preventDefault(); // avoid doing nothing
        focusLastTag();
      }
      return;
    }

    // 2) In listbox: focus input (or last tag if not searchable)
    if (target.getAttribute('role') === 'listbox') {
      e.preventDefault();
      if (this.editable) {
        this.comboboxNativeInput.focus();
      } else {
        focusLastTag();
      }
      return;
    }

    // 3) On a tag: deselect and move to previous tag or input
    if (target.classList.contains('combobox__value__tag')) {
      e.preventDefault();
      const id = target.getAttribute('data-option-id');
      if (!id) return;

      const currentIndex = this._selectedValues.findIndex((selectedValue) => selectedValue === id);
      const prevId = this._selectedValues[currentIndex - 1];
      const nextId = this._selectedValues[currentIndex + 1];

      // this updates selectedValuesIntern
      this.handleOptionChange(id);

      if (this._selectedValues.length) {
        // focus previous tag if it exists, otherwise the first remaining tag
        // if currentindex is 0 but there is length bigger than 1 we want to focus the next tag
        await this.updateComplete;

        const prevIdIndex = this._selectedValues.findIndex((selectedValue) => selectedValue === prevId);
        const nextIdIndex = this._selectedValues.findIndex((selectedValue) => selectedValue === nextId);

        let nextTagId: string | undefined;
        if (prevIdIndex !== -1) {
          nextTagId = prevId;
        } else if (nextIdIndex !== -1) {
          nextTagId = nextId;
        }
        if (nextTagId) {
          const nextTag = this.renderRoot.querySelector<HTMLElement>(
            `.combobox__value__tag[data-option-id="${nextTagId}"]`
          );
          if (nextTag) {
            nextTag.focus();
            return;
          }
        }
      }

      this.comboboxNativeInput.focus();
    }
  }

  /**
   * Håndterer Home og End-tastene for å navigere til henholdsvis det første eller det siste alternativet i listen.
   * @param key - 'home' eller 'end', avhengig av hvilken tast som ble trykket
   */
  private handleHomeOrEnd(key: 'home' | 'end') {
    let option: Option | null = null;
    if (key === 'home') {
      option = this.visibleOptions[0];
    }
    if (key === 'end') {
      option = this.visibleOptions[this.visibleOptions.length - 1];
    }
    const value = option?.value;
    this.activeValue = value ? value : '';
  }
  /**
   * Håndterer Enter og Space-tastene for å åpne listeboksen eller velge det aktive alternativet.
   * Hvis listeboksen ikke er utvidet, åpner den og aktiverer det første alternativet.
   */
  private async handleEnterOrSpace() {
    if (!this.expanded) {
      await this.handleArrowUpAndDown('down');
      return;
    } else if (this.expanded && this.activeValue) {
      this.handleOptionChange(this.activeValue);
    } else {
      this.closeListbox();
    }
  }

  /**
   * Navigerer til alternativer basert på tastetrykk.
   * @param key - Tastetrykket som utløste navigasjonen
   */
  private async handleTypeahead(key: string) {
    // kun bokstaver og space skal trigge typeahead
    if (key.length !== 1 || key === ' ' || this.editable) return;

    this.openListbox();
    // bygger en søkestreng basert på tastetrykkene, og resetter den etter 500ms med inaktivitet
    clearTimeout(this.searchTimeout);
    this.searchString += key.toLowerCase();
    this.searchTimeout = window.setTimeout(() => {
      this.searchString = '';
    }, 500);

    const id = this.getIdByLetter(this.searchString);

    if (id) {
      this.activeValue = id;
    }
  }

  /**
   * Håndterer tastaturaktivitet på en tag (Enter/Space).
   */
  private handleTagKeydown(e: KeyboardEvent, id: string) {
    if (this.disabled || this.readonly) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      this.handleOptionChange(id);
      if (this._selectedValues.length) {
        const lastSelectedValue = this._selectedValues[this._selectedValues.length - 1];
        const lastTag = this.renderRoot.querySelector<HTMLElement>(
          `.combobox__value__tag[data-option-id="${lastSelectedValue}"]`
        );
        if (lastTag) {
          lastTag.focus();
          return;
        }
      }

      this.comboboxNativeInput.focus();
    }
  }

  /**
   * Håndterer enter eller space-tastetrykk på indikatorikonet.
   * @param e - KeyboardEvent som utløste handlingen
   */
  private handleIndicatorKeydown(e: KeyboardEvent) {
    if (this.disabled || this.readonly) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      if (this.expanded) {
        this.closeListbox();
      } else {
        this.openListbox();
      }
    }
  }

  /*********** KLIKKINTERAKSJONER *****************/
  /*
  Klikk på kontrollen åpner/lukker listeboksen
  Klikk på et alternativ velger/fjerner det
  Klikk utenfor komponenten lukker listeboksen
  Klikk på ledeteksten fokuserer input
  */

  /**
   * Fokuserer input når ledetekst klikkes.
   */
  private handleLabelClick() {
    this.comboboxNativeInput?.focus();
  }

  /**
   * Åpner eller lukker listeboksen når kontrollen klikkes.
   */
  private handleClickComboboxControl() {
    if (this.disabled || this.readonly) return;
    if (this.editable && !this.multiple) {
      this.updateDisplayLabel('');
    }
    if (!this.expanded) {
      this.openListbox();
    } else if (!this.editable) {
      this.closeListbox();
    }
    // hvis man klikker utenfor nativ input men fortsatt i kontrollen så skal vi fokusere input
    // både når den åpner eller lukkes
    this.comboboxNativeInput.focus();
  }

  /**
   * Håndterer klikk på en tag.
   * @param id - ID-en til et alternativ
   */
  private handleClickTag(e: MouseEvent, id: string) {
    e.stopPropagation();
    if (this.disabled || this.readonly) return;
    this.handleOptionChange(id);
  }

  /**
   * Håndterer klikk på indikatorikonet (som viser antall skjulte valg i flervalg). Åpner eller lukker listeboksen
   * avhengig av gjeldende tilstand.
   * @param e - MouseEvent som utløste handlingen
   */
  private handleIndicatorClick(e: MouseEvent) {
    e.stopPropagation();
    if (this.disabled || this.readonly) return;
    if (this.expanded) {
      this.closeListbox();
    } else {
      this.openListbox();
    }
  }

  /**
   * Håndterer klikk på et alternativ.
   * @param value - Verdien til et alternativ
   */
  private handleClickOption(value: string) {
    const isSelected = this._selectedValues.includes(value);
    const canClick = !this.maxReached || isSelected;
    if (!canClick) return;

    this.handleOptionChange(value);
  }

  /**
   * Håndterer klikk på clearable-knappen for å fjerne alle valgte alternativer.
   * Tømmer både _selectedValues, og oppdaterer displayLabel til en tom streng.
   * Clearable knapp er ikke støttet av tastatur. Grunnen - den skal vises også når input ikke er fokusert.
   * @param e - MouseEvent som utløste handlingen
   */
  private handleClear(e: MouseEvent) {
    e.stopPropagation();
    if (this.disabled || this.readonly) return;
    this._selectedValues = [];
    this.indicatorCount = 0;
    this.updateDisplayLabel('');
    this.emitClear();
    this.emitChange('', 'deselect');
    this.comboboxNativeInput.focus();
  }

  /*********** HENDELSER *****************/

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

  /**
   * Sender en change-hendelse for et alternativ. Enten når et alternativ velges eller fjernes. Change-hendelse
   * fra nativ input blir ikke sendt videre, i stedet sender vi denne egendefinerte hendelsen som inkluderer mer
   * relevant informasjon for forbrukeren av komponenten. Hendelsen inkluderer verdien til det endret alternativet
   * og handlingen som ble utført (select eller deselect).
   * @param value - Verdien til et alternativ
   * @param action - Handling som ble utført ('select' eller 'deselect')
   */
  private emitChange(value: string, action: 'select' | 'deselect') {
    this.emitEvent<NveSelectChangeDetail>('change', {
      value,
      action,
    });
  }

  /**
   * Sender en nve-show-hendelse når listeboksen åpnes.
   */
  private emitShow() {
    this.emitEvent('nve-show', {});
  }

  /**
   * Sender en nve-hide-hendelse når listeboksen lukkes.
   */
  private emitHide() {
    this.emitEvent('nve-hide', {});
  }

  /**
   * Sender en nve-clear-hendelse når alle valg fjernes.
   */
  private emitClear() {
    this.emitEvent('nve-clear', {});
  }

  /*********** HJELPEMETODER *****************/

  /**
   * Håndterer endring av et alternativ. Enten legger til eller fjerner (kun i multiselect) et alternativ fra de valgte verdiene.
   * I single select vil den erstatte teksten i input med det valgte alternativet, og lukke listeboksen.
   * I multiselect vil den tømme input-feltet for å gjøre det klart for videre søk eller valg.
   * Emiter change med enten select eller deselect.
   * @param value - Verdien til et alternativ
   * @param e - Hendelsen som utløste endringen (valgfritt)
   */
  private handleOptionChange(value: string) {
    //check if option is selected
    const option = this._options.find((opt) => opt?.value === value);
    if (!option) return;

    const isSelected = this._selectedValues.includes(value);
    if (this.maxReached && !isSelected) return;
    if (!isSelected) {
      this.selectOption(option);
    } else {
      if (!this.multiple) return;
      this.deselectOption(option);
    }

    if (this.multiple && this.editable) {
      this.updateDisplayLabel('');
    }
    if (!this.multiple) {
      this.updateDisplayLabel(option.textLabel || option.label || '');
      this.closeListbox();
    }
    this.maxReached = this.max ? this._selectedValues.length >= this.max : false;
    this.emitChange(value, isSelected && this.multiple ? 'deselect' : 'select');
  }

  /**
   * Legger til et alternativ i de valgte verdiene.
   * @param option - Alternativet som skal legges til
   * @param click - Om endringen ble utløst av et klikk (valgfritt)
   */
  private selectOption(option: Option) {
    if (this.multiple) {
      this._selectedValues = [...this._selectedValues, option.value];
      if (!this.wrap) {
        this.calculateVisibleTags();
      }
    } else {
      this._selectedValues = [option.value];
      this.comboboxNativeInput.focus();
    }
  }

  /**
   * Fjerner et alternativ fra de valgte verdiene. Fungerer kun i multiple
   * @param option - Alternativet som skal fjernes
   */
  private deselectOption(option: Option) {
    this._selectedValues = this._selectedValues.filter((value) => value !== option.value);
    if (this.multiple && !this.wrap) {
      this.calculateVisibleTags();
    }
  }

  /**
   * Åpner listeboksen og legger til en global event listener for å kunne lukke den når
   * brukeren klikker utenfor. Emiter nve-show-hendelse.
   */
  private async openListbox() {
    this.expanded = true;

    // hvis listen er lang og det finnes noen valgte verdier så scroller vi det aktive alternativet inn i view når
    // listen åpnes
    if (this._selectedValues.length) {
      await this.updateComplete;
      this.scrollActiveOptionIntoView();
    }

    window.addEventListener('pointerdown', this.handleOutsidePointerDown, true);
    this.emitShow();
  }

  /**
   * Lukker listeboksen og fjerner den globale event listeneren. Emiter nve-hide-hendelse.
   */
  private closeListbox() {
    this.expanded = false;
    window.removeEventListener('pointerdown', this.handleOutsidePointerDown, true);
    this.emitHide();
  }

  /**
   * Håndterer klikk utenfor komponenten for å lukke listeboksen.
   * @param event - PointerEvent som utløste hendelsen.
   */
  private handleOutsidePointerDown = (event: MouseEvent) => {
    const path = event.composedPath();

    if (this && !path.includes(this)) {
      if (this.editable && !this.multiple) {
        const optionLabel = this._selectedValues[0]
          ? this._options.find((opt) => opt?.value === this._selectedValues[0])?.textLabel ||
            this._options.find((opt) => opt?.value === this._selectedValues[0])?.label ||
            ''
          : '';
        this.updateDisplayLabel(optionLabel);
      }
      this.closeListbox();
    }
  };

  /**
   * Hjelpefunksjon for typeahead som finner ID-en til det neste alternativet som starter med den gitte
   * bokstaven eller bokstavene.
   * @param filter - Den nåværende søke bokstav-kombinasjon som bruker har skrevet inn. Kan være flere bokstaver.
   * @returns ID-en til det neste alternativet som matcher filteret, eller undefined hvis ingen match finnes.
   */
  private getIdByLetter(filter: string): string | undefined {
    const options = this._options.filter((o): o is Option => !!o);
    if (!options.length) return;

    // Hjelpefunksjon for å sjekke om alle bokstavene i filteret er like, f.eks. "aaa" eller "bb"
    const allSameLetter = (array: string[]) => array.every((letter) => letter === array[0]);

    // Starter søket etter det aktive elementet for å kunne starte fra neste element med samme bokstav.
    // Eksempel: Hvis vi har tre elementer som starter med D, som David, Daniel og Diana, og Daniel er aktiv,
    // vi vil at neste trykk på D skal velge Diana, og ikke David.
    // Hvis ingen elementer er aktive, eller det aktive elementet ikke finnes i den filtrerte listen,
    // starter vi fra begynnelsen av listen.
    const currentIndex = options.findIndex((opt) => opt.value === this.activeValue);
    const startIndex = currentIndex >= 0 ? currentIndex + 1 : 0;

    // roterer alternativer slik at arrayet starter fra neste element etter det aktive elementet,
    // og fortsetter i en loop (setter alternativer før det aktive elementet bakerst i arrayen)
    const orderedOptions = [...options.slice(startIndex), ...options.slice(0, startIndex)];

    // En eksakt match på hele filteret har høyest prioritet, så vi sjekker det først
    const firstMatch = this.filterOptions(orderedOptions, filter)[0];
    if (firstMatch) return firstMatch.value;

    // Hvis man har skrevet flere bokstaver og alle er like, f.eks. "aaa", så skal vi ikke søke etter "aaa"
    // men heller "a", fordi bruker vil navigere til neste element som starter på "a".
    if (allSameLetter(filter.split(''))) {
      const matches = this.filterOptions(orderedOptions, filter[0]);
      if (matches[0]) return matches[0].value;
    }

    // Ingen match
    return;
  }

  /**
   * Filtrerer en liste av alternativer som starter på en søkt tekst.
   * @param options - Listen av alternativer som skal filtreres.
   * @param filter - Søke-teksten som brukes for å filtrere alternativene.
   * @returns En liste av alternativer som matcher søke-teksten.
   */
  private filterOptions(options: (Option | null)[], filter: string): Option[] {
    return options
      .filter((o): o is Option => !!o)
      .filter((option) => {
        const optionText = option.label || '';
        return optionText.toLowerCase().startsWith(filter.toLowerCase());
      });
  }

  /**
   * Oppdaterer teksten som vises i input-feltet.
   * Når man kan skrive i input feltet, oppdaterer den også de synlige alternativene i listen basert på den nye teksten.
   * @param text - Den nye teksten som skal vises i input-feltet.
   */
  private updateDisplayLabel(text: string) {
    this.displayLabel = text;
    if (this.editable) {
      this.visibleOptions = this._options
        .filter((o): o is Option => !!o)
        .filter((option) => {
          const optionText = option.textLabel || option.label || '';
          return optionText.toLowerCase().includes(text.toLowerCase());
        });
    }
  }

  /**
   * Håndterer input-hendelser i det native input-feltet.
   * @param e - Input-hendelsen som utløses når brukeren skriver i input-feltet.
   */
  private onInput(e: InputEvent) {
    // Når brukeren skriver i input-feltet, vil vi åpne listeboksen hvis den ikke allerede er åpen.
    this.openListbox();
    const target = e.target as HTMLInputElement;
    this.updateDisplayLabel(target.value);
  }

  /**
   * Scroll til det aktive alternativet.
   */
  private scrollActiveOptionIntoView() {
    if (!this.activeValue) return;

    const listbox = this.renderRoot.querySelector<HTMLElement>('.combobox__listbox');
    if (!listbox) return;

    const activeOption = listbox.querySelector<HTMLElement>(`[role="option"][id="${this.activeValue}"]`);
    if (!activeOption) return;

    activeOption.scrollIntoView({ block: 'nearest' });
  }

  /**
   * Beregner antall tagger som skal vises, og setter indikator når det ikke er nok plass til flere tagger.
   */
  private async calculateVisibleTags() {
    // Sjekker bredden på value. Den skal være maks bredden for alle taggene og input-feltet.
    const valueDiv = this.renderRoot.querySelector('.combobox__value') as HTMLElement;
    if (!valueDiv) return;
    // Trekker 40px for eventuell indikator-tag. Hvis searchable trekker vi i tillegg 50px for input-feltet og 4px for gap.
    const valueWidth = valueDiv.clientWidth - 40 - (this.editable ? 50 + 4 : 0);

    // Lager en usynlig div som skal vise alle taggene basert på de valgte id-ene.
    const invisibleDiv = document.createElement('div');
    invisibleDiv.style.position = 'absolute';
    invisibleDiv.style.whiteSpace = 'nowrap';
    invisibleDiv.style.display = 'flex';
    invisibleDiv.style.visibility = 'hidden';
    invisibleDiv.style.gap = '4px';
    this.renderRoot.appendChild(invisibleDiv);

    let _indicatorCount = 0;

    this.collapsedTagIds = [];

    for (const [index, value] of this._selectedValues.entries()) {
      // vi gjemmer tagger som ikke får plass, hver gjemt tag øker indikator-count med 1. Hvis indikator allerede er
      // større enn 0, så legger vi ikke på flere tagger fordi vi vet at de ikke får plass
      if (_indicatorCount > 0) {
        this.collapsedTagIds.push(value);
        _indicatorCount++;
        continue;
      }
      // alle taggene i den usynlige div-en skal ha samme styling som synlige tagene for at målingen skal være korrekt
      const tag = document.createElement('button');
      tag.className = 'combobox__value__tag';
      tag.textContent =
        this._options.find((opt) => opt?.value === value)?.textLabel ||
        this._options.find((opt) => opt?.value === value)?.label ||
        '';
      const icon = document.createElement('nve-icon');
      icon.setAttribute('name', 'close');
      icon.setAttribute('aria-hidden', 'true');
      tag.appendChild(icon);
      invisibleDiv.appendChild(tag);

      await this.updateComplete;

      // Øker indikator-count og legger til tag i collapsedTagIds hvis usynlig div er bredere enn value-diven.
      if (invisibleDiv.clientWidth >= valueWidth) {
        // Hvis den første taggen er bredere enn hele verdien, setter vi --first-tag-max-width.
        // Deretter skal teksten bli trunkert med ellipsis.
        if (index === 0) {
          this.style.setProperty('--first-tag-max-width', `${valueWidth}px`);
          continue;
        }
        this.collapsedTagIds.push(value);
        _indicatorCount++;
      }
    }
    // fjerner den usynlige div-en
    this.renderRoot.removeChild(invisibleDiv);
    this.indicatorCount = this.collapsedTagIds.length;
  }

  render() {
    const labelId = `${this.id}-label`;
    const helpTextId = `${this.id}-helptext`;
    const hintTextId = `${this.id}-hinttext`;
    const selectedValuesId = `${this.id}-selected-values`;
    const describedBy = [
      helpTextId,
      this.errorMessage || this.hintText ? hintTextId : '',
      this.multiple ? selectedValuesId : '',
    ]
      .filter(Boolean)
      .join(' ');
    return html`
      <!-- Felt med feilmelding ramme -->
      <div
        part="field"
        class=${classMap({
          field: true,
          'field--error': !!this.errorMessage,
          'field--readonly': this.readonly,
          'field--disabled': this.disabled,
          'field--filled': this.filled,
        })}
        testId=${ifDefined(this.testId)}
      >
        <!-- Ledetekst -->
        ${getLabel(labelId, this.label, this.tooltip, this.required, this.requiredLabel, this.handleLabelClick)}
        <!-- Hjelpetekst -->
        ${this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>${this.helpText}</p>`
          : nothing}
        <!-- Combobox kontroll -->
        <div
          part="combobox"
          class=${classMap({ combobox: true, 'combobox--expanded': this.expanded })}
          @keydown=${this.handleKeydown}
        >
          <div
            part="control"
            @click=${this.handleClickComboboxControl}
            class=${classMap({
              combobox__control: true,
              'combobox__control--medium': this.size === 'medium',
              'combobox__control--small': this.size === 'small',
              'combobox__control--large': this.size === 'large',
              'combobox__control--multiselect': this.multiple,
              'combobox__control--readonly': this.readonly,
              'combobox__control--filled': this.filled,
            })}
          >
            <div part="value" class="combobox__value">
              ${this.multiple && this._selectedValues.length
                ? this._selectedValues
                    .filter((value) => !this.collapsedTagIds.includes(value))
                    .map(
                      (value) =>
                        html`<button
                          part="tag"
                          class="combobox__value__tag"
                          ?disabled=${this.disabled}
                          aria-label="${this.removeTagAriaLabel} ${this._options.find((opt) => opt?.value === value)
                            ?.textLabel ||
                          this._options.find((opt) => opt?.value === value)?.label ||
                          ''}"
                          tabindex="-1"
                          data-option-id=${ifDefined(value)}
                          @click=${(e: MouseEvent) => this.handleClickTag(e, value)}
                          @keydown=${(e: KeyboardEvent) => this.handleTagKeydown(e, value)}
                        >
                          <span
                            >${this._options.find((opt) => opt?.value === value)?.textLabel ||
                            this._options.find((opt) => opt?.value === value)?.label ||
                            ''}</span
                          >
                          <nve-icon name="close" aria-hidden="true"></nve-icon>
                        </button>`
                    )
                : nothing}
              ${this.indicatorCount > 0
                ? html`<button
                    class="combobox__value__indicator"
                    ?disabled=${this.disabled}
                    aria-label=""
                    tabindex="-1"
                    @click=${this.handleIndicatorClick}
                    @keydown=${this.handleIndicatorKeydown}
                  >
                    + ${this.indicatorCount}
                  </button>`
                : nothing}
              <div class="sr-only" id=${selectedValuesId}>
                ${this._options
                  .filter((opt) => this._selectedValues.includes(opt.value))
                  .map((opt) => opt.textLabel || opt.label || '')
                  .join(', ')}
              </div>
              <input
                part="input"
                class="${classMap({
                  combobox__value__input: true,
                  'combobox__value__input--searchable': this.editable,
                  'combobox__value__input--wrap': this.wrap,
                  'combobox__value__input--multiselect': this.multiple,
                })}"
                ?disabled=${this.disabled}
                ?readonly=${this.readonly || !this.editable}
                aria-controls="${`${this.id}-listbox`}"
                aria-expanded="${this.expanded}"
                aria-haspopup="listbox"
                ?required="${this.required}"
                name=${ifDefined(this.name || undefined)}
                form=${ifDefined(this.form)}
                aria-labelledby="${labelId}"
                aria-describedby=${ifDefined(describedBy || undefined)}
                aria-activedescendant=${ifDefined(this.activeValue)}
                role="combobox"
                ?aria-invalid=${this.errorMessage}
                placeholder=${this.placeholder && !this._selectedValues.length ? this.placeholder : ''}
                .value=${this.displayLabel}
                @input=${this.onInput}
              />
            </div>
            <!-- Ikoner og knapper -->
            ${this.clearable && this._selectedValues.length && !this.readonly && !this.disabled
              ? html`<button
                  part="clear-button"
                  tabindex="-1"
                  @click=${(e: MouseEvent) => this.handleClear(e)}
                  class="combobox__clear-button"
                >
                  <nve-icon name="cancel" aria-hidden="true"></nve-icon>
                </button>`
              : nothing}
            ${this.disabled || this.readonly
              ? nothing
              : html`<nve-icon class="icon__arrow" name="keyboard_arrow_down" aria-hidden="true"></nve-icon>`}
            ${this.disabled ? html`<nve-icon name="lock" aria-hidden="true"></nve-icon>` : nothing}
            ${this.readonly ? html`<nve-icon name="visibility" aria-hidden="true"></nve-icon>` : nothing}
            ${!!this.errorMessage
              ? html`<nve-icon class="icon__error" name="error" aria-hidden="true"></nve-icon>`
              : nothing}
          </div>
          <!-- Listbox -->
          ${this.expanded && this.visibleOptions.length
            ? html`<ul
                part="listbox"
                class=${classMap({ combobox__listbox: true })}
                role="listbox"
                id=${`${this.id}-listbox`}
                aria-multiselectable=${this.multiple ? 'true' : 'false'}
                tabindex="-1"
              >
                ${this.visibleOptions.map((option) => {
                  return html`<li
                    class=${classMap({
                      combobox__listbox__option: true,
                      'combobox__listbox__option--selected': this._selectedValues.includes(option.value),
                      'combobox__listbox__option--active': option.value === this.activeValue,
                      'combobox__listbox__option--disabled':
                        this.multiple && !this._selectedValues.includes(option.value) && this.maxReached,
                    })}
                    id=${ifDefined(option.value)}
                    role="option"
                    part="option"
                    aria-selected=${this._selectedValues.includes(option.value) ? 'true' : 'false'}
                    aria-disabled=${this.multiple && !this._selectedValues.includes(option.value) && this.maxReached
                      ? 'true'
                      : 'false'}
                    @click=${() => this.handleClickOption(option.value)}
                  >
                    ${this._selectedValues.includes(option.value)
                      ? html`<nve-icon name="check" aria-hidden="true"></nve-icon>`
                      : nothing}
                    ${ifDefined(option?.label)}
                  </li>`;
                })}
              </ul>`
            : nothing}
        </div>
        <!-- Hint-tekst og feilmelding -->
        ${this.errorMessage || this.hintText
          ? html`<p part="hint-text" class="field__hint-text" id=${hintTextId}>
              ${this.errorMessage || this.hintText}
            </p>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-combobox': NveCombobox;
  }
}
