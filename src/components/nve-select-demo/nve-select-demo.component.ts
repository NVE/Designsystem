import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-select-demo.styles';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../nve-icon/nve-icon.component';
import { classMap } from 'lit/directives/class-map.js';
import { getLabel, labelStyles } from '../../templates/label';

let id = 0;
/**
 * Representerer et alternativ i select-komponenten.
 * Den har en unik ID, en generisk verdi og en label som vises i UI.
 * ID-en brukes for å identifisere alternativet internt og i selectedIds.
 */
export type Option<T = string> = {
  id: string;
  value: T;
  label: string;
};

/**
 * Detaljer som sendes i change-hendelsen når et alternativ velges eller fjernes.
 * Inkluderer de valgte verdiene, ID-en til det endret alternativet
 * og handlingen som ble utført (select eller deselect).
 */
export interface NveSelectChangeDetail<T> {
  selectedValues: T | T[] | null;
  changedId: string;
  action: 'select' | 'deselect';
}

/**
 * En combobox-komponent lar brukeren velge ett eller flere alternativer fra en liste, eller søke etter alternativer i et tekstfelt.
 * Den støtter både enkelt- og flervalg.
 *
 * @event change Når et alternativ velges eller fjernes. Hendelsen inkluderer de valgte verdiene i et array, ID-en til det endret alternativet og handlingen som ble utført (select eller deselect).
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
@customElement('nve-select-demo')
export default class NveSelectDemo<T = string> extends LitElement implements INveComponent {
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
  /** Hjelpetekst som vises under feltet */
  @property({ type: String, reflect: true }) helpText = '';
  /** Ledetekst */
  @property({ type: String }) label: string = '';
  /** Tekst som vises for å markere at et felt er obligatorisk */
  /** Maks antall valg i multiselect */
  @property({ type: Number }) max?: number;
  /** Alternativer som kan velges i select-komponenten. Hver option har en id, en verdi av generisk type T og en label som vises i UI. */
  @property({ type: Array }) options: Option<T>[] = [];
  /** Placeholder-tekst for inputfeltet */
  @property({ type: String }) placeholder = '';
  /** Om feltet skal være skrivebeskyttet */
  @property({ type: Boolean, reflect: true }) readonly = false;
  /** Aria-label for knappen som fjerner et valgt alternativ i multiselect */
  @property({ type: String }) removeTagAriaLabel = 'Slett';
  /** Tekst som vises for å markere at et felt er obligatorisk */
  @property({ type: String, reflect: true }) requiredLabel = '';
  /** Om bruker kan skrive i input felt og søke etter alternativer */
  @property({ type: Boolean }) searchable = false;
  /** Initialt valgte ID-er */
  @property({ type: Array }) selectedIds: string[] = []; // initial selected Ids
  /** Størrelse på komponenten */
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /** Tooltip-tekst for label */
  @property({ type: String }) tooltip = '';

  /** @internal */
  private readonly componentId = `combobox-${++id}`;
  /** @internal */
  static styles = [styles, labelStyles];

  @query('input[role="combobox"]') comboboxNativeInput!: HTMLInputElement;
  /** Om listboksen er utvidet */
  @state() protected expanded = false;
  /** Aktivt alternativs ID */
  @state() private activeId = '';
  /** Internt array ID-er for valgte alternativer. Oppdateres basert på selectedIds-prop og når alternativer velges eller fjernes. */
  @state() private _selectedIds: string[] = [];
  /** Valgte verdier. Oppdateres når alternativer velges eller fjernes. */
  @state() private selectedValues: T | T[] | null = null;
  /** Søketekst som brukes for å filtrere alternativer i single select */
  @state() private searchString = '';
  /** Tekst som vises i inputfeltet */
  @state() private displayLabel = '';
  /** Om maks antall valg er nådd */
  @state() private maxReached = false;
  /** Synlige alternativer i listboksen. Kan filtreres basert på søketekst */
  @state() private visibleOptions: Option<T>[] = [];
  /** Timeout for searchString */
  private searchTimeout?: number;
  /** Internt array for alternativer. Oppdateres basert på options-prop */
  private _options: Option<T>[] = [];
  //@state() private shouldHideNextTag = false; // Når multiselect er true og det er flere tags enn bredden på input-feltet tillater, skjuler vi neste tag og viser en indikator +x med antall skjulte tags.
  //private resizeObserver?: ResizeObserver;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.label) {
      console.warn(
        'nve-select-demo: label is not set. It is recommended to set a label for each component for better accessibility.'
      );
    }
  }

  firstUpdated() {
    this.id = this.id || this.componentId;
    this.options.forEach((opt, index) => {
      opt.id = opt.id ? opt.id : `${this.id}-${index}`;
    });

    if (this.autofocus) {
      this.comboboxNativeInput.focus();
    }

    /*
    kode for eventuelt visning av antall valgte tags
    const input = this.renderRoot.querySelector('.combobox__value__input') as HTMLInputElement;
    if (input) {
      this.resizeObserver = new ResizeObserver(() => {
        this.getVisibleTagsCount();
      });
      this.resizeObserver.observe(input);
    } */
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has('options') && this.options !== null) {
      this._options = this.options;
      // fjern options fra DOM.
      this.removeAttribute('options');
      this.visibleOptions = this._options.filter((o): o is Option<T> => !!o);
    }
    if (changed.has('selectedIds') && this.selectedIds !== null) {
      if (!this.multiple && this.selectedIds.length > 1) {
        const isOption = this._options.some((opt) => opt?.id === this.selectedIds[0]);
        this._selectedIds = isOption ? [this.selectedIds[0]] : [];
      } else if (this.multiple) {
        // sjekk om selectedIds har tilsvarende verdi i options
        this.selectedIds.forEach((id) => {
          const option = this._options.find((opt) => opt?.id === id);
          if (!option) {
            console.warn(`nve-select-demo: selectedId "${id}" does not match any option.`);
          }
          this._selectedIds = [...this._selectedIds, id];
        });
      }
      // hvis ikke multiselect og selectedIds har kun en verdi
      else {
        const isOption = this._options.some((opt) => opt?.id === this.selectedIds[0]);
        this._selectedIds = isOption ? [this.selectedIds[0]] : [];
      }
      //fjern selectedIds fra DOM
      this.removeAttribute('selectedIds');
    }
    if (changed.has('activeId') && this.expanded) {
      this.scrollActiveOptionIntoView();
    }
  }

  /*********** TASTATURINTERAKSJONER *****************/
  /*
  Tastaturinteraksjoner som støttes i combobox:
  ArrowDown: åpne liste og navigere til den første optionen
  ArrowUp: åpne liste og navigere til den siste optionen
  Escape: lukke liste og beholde valgt verdi, fokus på input
  Enter/Space: når liste er lukket åpne liste
  Utskrivbare tegn: åpne liste og navigere til første matchende option basert på det som er skrevet

  ArrowLeft/ArrowRight: når multiselect og fokus er i input så naviger mellom tags og input
  Backspace: når multiselect, i tillegg til vanlig backspace funksjonalitet i input, hvis fokus er på en tag/knapp så deselect den og flytt fokus til forrige tag eller input

  Tastaturinteraksjoner som støttes i listbox:
  ArrowDown: navigere til neste option
  ArrowUp: navigere til forrige option
  Home: navigere til første option
  End: navigere til siste option
  Enter/Space: velge aktiv option
  Escape: lukke liste og beholde valgt verdi, fokus på input
  Backspace: fokus input, hvis ikke fokus forrige tag
 */

  private handleKeydown(e: KeyboardEvent) {
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
          const optionLabel = this._selectedIds[0]
            ? this._options.find((opt) => opt?.id === this._selectedIds[0])?.label || ''
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
   * Hvis listen ikke er utvidet, åpner den og aktiverer det første eller siste alternativet basert på hvilken pil
   * som trykkes.
   * @param key - 'up' eller 'down', avhengig av hvilken pil som ble trykket
   */
  private async handleArrowUpAndDown(key: 'up' | 'down') {
    // Hvis vi allerede har et aktivt alternativ og listen ikke er utvidet, åpne listen og behold det aktive alternativet
    if (!this.expanded && this.activeId && this._selectedIds.length) {
      this.openListbox();
      await this.updateComplete;
      this.scrollActiveOptionIntoView();
      return;
    }
    if (this.searchable && !this.multiple) {
      this.updateDisplayLabel('');
    }
    if (!this.expanded) {
      this.openListbox();
    }

    if (!this.visibleOptions.length) return;

    // Hvis ingen er aktive ennå → start fra første eller siste alternativ
    if (!this.activeId) {
      const index = key === 'down' ? 0 : this.visibleOptions.length - 1;
      this.activeId = this.visibleOptions[index].id;
      return;
    }

    // Flytt til neste eller forrige alternativ (wrap-around)
    const currentIndex = this.visibleOptions.findIndex((opt) => opt.id === this.activeId);
    const nextIndex =
      key === 'down'
        ? (currentIndex + 1) % this.visibleOptions.length
        : (currentIndex - 1 + this.visibleOptions.length) % this.visibleOptions.length;
    this.activeId = this.visibleOptions[nextIndex].id;
  }

  /**
   * Clearable knapp er ikke støttet av tastatur. Grunnen - den skal vises også når input ikke er fokusert.
   * @param e
   * @param key
   * @returns
   */
  private handleArrowRightOrLeft(e: KeyboardEvent, key: 'left' | 'right') {
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
        }
      } else {
        if (index > 0) {
          tags[index - 1].focus();
        } else {
          this.comboboxNativeInput.focus();
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
    if (this._selectedIds.length) {
      if (!this.multiple) {
        this.updateDisplayLabel(this._options.find((opt) => opt?.id === this._selectedIds[0])?.label || '');
      }
    }
    this.comboboxNativeInput.focus();
  }

  private handleBackspace(e: KeyboardEvent) {
    const focusLastTag = () => {
      const tags = this.renderRoot.querySelectorAll<HTMLButtonElement>('.combobox__value__tag');
      const lastTag = tags[tags.length - 1];
      lastTag?.focus();
    };

    const target = e.target as HTMLElement;

    // 1) In input: if empty and there are tags, move to last tag
    if (target === this.comboboxNativeInput) {
      const input = target as HTMLInputElement;
      if (!input.value && this._selectedIds.length) {
        e.preventDefault(); // avoid doing nothing
        focusLastTag();
      }
      return;
    }

    // 2) In listbox: focus input (or last tag if not searchable)
    if (target.getAttribute('role') === 'listbox') {
      e.preventDefault();
      if (this.searchable) {
        this.comboboxNativeInput.focus();
      } else {
        focusLastTag();
      }
      return;
    }

    // 3) On a tag: deselect and move to previous tag or input
    if (target.classList.contains('combobox__value__tag')) {
      e.preventDefault();
      const id = target.id;
      if (!id) return;

      // this updates selectedIdsIntern
      this.handleOptionChange(id);

      if (this._selectedIds.length) {
        const lastSelectedId = this._selectedIds[this._selectedIds.length - 1];
        const lastTag = this.renderRoot.querySelector<HTMLElement>(`.combobox__value__tag[id="${lastSelectedId}"]`);
        if (lastTag) {
          lastTag.focus();
          return;
        }
      }

      this.comboboxNativeInput.focus();
    }
  }

  private handleHomeOrEnd(key: 'home' | 'end') {
    let option: Option<T> | null = null;
    if (key === 'home') {
      option = this.visibleOptions[0];
    }
    if (key === 'end') {
      option = this.visibleOptions[this.visibleOptions.length - 1];
    }
    const id = option?.id;
    this.activeId = id ? id : '';
  }

  private handleEnterOrSpace() {
    if (!this.expanded) {
      this.openListbox();
    }
    if (this.activeId) {
      this.handleOptionChange(this.activeId);
    }
  }

  //when searchable we filter options and leave only those that starts with the typed letters
  private async handleTypeahead(key: string) {
    // kun bokstaver og space skal trigge typeahead
    if (key.length !== 1 || key === ' ' || this.searchable) return;

    this.openListbox();
    // bygger en søkestreng basert på tastetrykkene, og resetter den etter 500ms med inaktivitet
    clearTimeout(this.searchTimeout);
    this.searchString += key.toLowerCase();
    this.searchTimeout = window.setTimeout(() => {
      this.searchString = '';
    }, 500);

    const id = this.getIdByLetter(this.searchString);

    if (id) {
      this.activeId = id;
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
    if (this.searchable && !this.multiple) {
      this.updateDisplayLabel('');
    }
    if (!this.expanded) {
      this.openListbox();
    } else {
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
   * Håndterer klikk på et alternativ.
   * @param id - ID-en til et alternativ
   */
  private handleClickOption(id: string) {
    const isSelected = this._selectedIds.includes(id);
    const canClick = !this.maxReached || isSelected;
    if (!canClick) return;

    this.handleOptionChange(id);
  }

  private handleClear() {
    if (this.disabled || this.readonly) return;
    this._selectedIds = [];
    this.selectedValues = [];
    this.emitClear();
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
   * relevant informasjon for forbrukeren av komponenten. Hendelsen inkluderer både de valgte verdiene,
   * ID-en til det endret alternativet og handlingen som ble utført (select eller deselect).
   * @param id - ID-en til et alternativ
   * @param action - Handling som ble utført ('select' eller 'deselect')
   */
  private emitChange(id: string, action: 'select' | 'deselect') {
    this.emitEvent<NveSelectChangeDetail<T>>('change', {
      selectedValues: this.selectedValues,
      changedId: id,
      action: action,
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
   * @param id - ID-en til et alternativ
   */
  private handleOptionChange(id: string) {
    //check if option is selected
    const option = this._options.find((opt) => opt?.id === id);
    if (!option) return;

    const isSelected = this._selectedIds.includes(id);
    if (!isSelected) {
      this.selectOption(option);
    } else {
      if (!this.multiple) return;
      this.deselectOption(option);
    }

    if (this.multiple && this.searchable) {
      this.updateDisplayLabel('');
    }
    if (!this.multiple) {
      this.updateDisplayLabel(option.label || '');
      this.closeListbox();
    }
    //this.comboboxNativeInput.focus();
    this.maxReached = this.max ? this._selectedIds.length >= this.max : false;
    this.emitChange(id, isSelected && this.multiple ? 'deselect' : 'select');
  }

  /**
   * Legger til et alternativ i de valgte verdiene og ID-ene.
   * @param option - Alternativet som skal legges til
   */
  private selectOption(option: Option<T>) {
    // hvis multipe vi må legge til i array, hvis ikke multiselect så skal vi erstatte det som er valgt
    if (this.multiple) {
      const currentValues = Array.isArray(this.selectedValues) ? this.selectedValues : [];
      this.selectedValues = option.value ? [...currentValues, option.value] : currentValues;

      this._selectedIds = [...this._selectedIds, option.id];
    } else {
      this._selectedIds = [option.id];
      this.selectedValues = option.value;
      this.comboboxNativeInput.focus();
    }
    this.activeId = option.id; // altid kun det sist valgte alternativet som er aktivt
  }

  /**
   * Fjerner et alternativ fra de valgte verdiene og ID-ene. Fungerer kun i multiple
   * @param option - Alternativet som skal fjernes
   */
  private deselectOption(option: Option<T>) {
    const currentValues = Array.isArray(this.selectedValues) ? this.selectedValues : [];
    this.selectedValues = option.value
      ? (currentValues as T[]).filter((value) => value !== option.value)
      : currentValues;

    this._selectedIds = this._selectedIds.filter((id) => id !== option.id);
  }

  /**
   * Åpner listeboksen og legger til en global event listener for å kunne lukke den når
   * brukeren klikker utenfor. Emiter nve-show-hendelse.
   */
  private openListbox() {
    this.expanded = true;
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
      if (this.searchable && !this.multiple) {
        const optionLabel = this._selectedIds[0]
          ? this._options.find((opt) => opt?.id === this._selectedIds[0])?.label || ''
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
    const options = this._options.filter((o): o is Option<T> => !!o);
    if (!options.length) return;

    // Hjelpefunksjon for å sjekke om alle bokstavene i filteret er like, f.eks. "aaa" eller "bb"
    const allSameLetter = (array: string[]) => array.every((letter) => letter === array[0]);

    // Starter søket etter det aktive elementet for å kunne starte fra neste element med samme bokstav.
    // Eksempel: Hvis vi har tre elementer som starter med D, som David, Daniel og Diana, og Daniel er aktiv,
    // vi vil at neste trykk på D skal velge Diana, og ikke David.
    // Hvis ingen elementer er aktive, eller det aktive elementet ikke finnes i den filtrerte listen,
    // starter vi fra begynnelsen av listen.
    const currentIndex = options.findIndex((opt) => opt.id === this.activeId);
    const startIndex = currentIndex >= 0 ? currentIndex + 1 : 0;

    // roterer alternativer slik at arrayet starter fra neste element etter det aktive elementet,
    // og fortsetter i en loop (setter alternativer før det aktive elementet bakerst i arrayen)
    const orderedOptions = [...options.slice(startIndex), ...options.slice(0, startIndex)];

    // En eksakt match på hele filteret har høyest prioritet, så vi sjekker det først
    const firstMatch = this.filterOptions(orderedOptions, filter)[0];
    if (firstMatch) return firstMatch.id;

    // Hvis man har skrevet flere bokstaver og alle er like, f.eks. "aaa", så skal vi ikke søke etter "aaa"
    // men heller "a", fordi bruker vil navigere til neste element som starter på "a".
    if (allSameLetter(filter.split(''))) {
      const matches = this.filterOptions(orderedOptions, filter[0]);
      if (matches[0]) return matches[0].id;
    }

    // Ingen match
    return;
  }

  /**
   * Filtrerer en liste av alternativer basert på en søke-tekst.
   * @param options - Listen av alternativer som skal filtreres.
   * @param filter - Søke-teksten som brukes for å filtrere alternativene.
   * @returns En liste av alternativer som matcher søke-teksten.
   */
  private filterOptions(options: (Option<T> | null)[], filter: string): Option<T>[] {
    return options
      .filter((o): o is Option<T> => !!o)
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
    if (this.searchable) {
      this.visibleOptions = this.filterOptions(this._options, text);
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
    if (!this.activeId) return;

    const listbox = this.renderRoot.querySelector<HTMLElement>('.combobox__listbox');
    if (!listbox) return;

    const activeOption = listbox.querySelector<HTMLElement>(`[role="option"][id="${this.activeId}"]`);
    if (!activeOption) return;

    activeOption.scrollIntoView({ block: 'nearest' });
  }

  /*
  TODO: om vi skal ta i bruk indikator for antall valgte tags i multiselect.
  Vi må sjekke bredden på comboboxen når vi legger til nye tags. Hvis bredden på tagsene overstiger 
  bredden på comboboxen minus 90px, må vi vise en tag med +x og skjule resten av tagsene.
 private getVisibleTagsCount() {
    if (!this.multiselect) return 0;
    const input = this.renderRoot.querySelector('.combobox__value__input')?.clientWidth || 0;
    const tags = this.renderRoot.querySelectorAll('.combobox__value__tag');
    const tagsWidth = Array.from(tags).reduce((acc, tag) => acc + (tag.clientWidth || 0), 0);
    //if tags width exceeds the combobox width - 90px the next tag is the indicator and we stuck the
    //hidden tags in an array in case some previous visible tags gets removed
    this.shouldHideNextTag = tagsWidth > input / 2;
  } 
  */

  /* 
  - write about aria-activedescendant.
  - write about removing options and selectedIds from DOM and why we do it (accessibility reasons, to avoid screen readers reading out all options when we update the list)
  - Navigating the list of options does not set the value of the input. This gives screen reader users,
   who need to navigate among the options to perceive them, the ability to explore options without losing t
   he current value of the input. 
  - The current value is retained if the listbox is closed with Escape or if the user collapses the list by clicking the input.
  - consider  Dismisses the popup if it is visible. Optionally, if the popup is hidden before Escape is pressed, clears the combobox.
  -MULTISELECTION
  - we wont use aria-live for now
  -size og autocomplete st;ttes ikke for na
  -  //todo add no results found as alert and aria polite?
  - todo: kanksje ka selecte si hvor mye verdier er valgt nar man forst fokuserer pa den a11y
  -required validering fungerer ikke forelopig
  */

  /*


the indicator +2 if more selections we should discuss. should it show as default or shoulw we let select grow at first



  */

  render() {
    const labelId = `${this.id}-label`;
    const helpTextId = `${this.id}-helptext`;
    return html`
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
        ${getLabel(labelId, this.label, this.tooltip, this.required, this.requiredLabel, this.handleLabelClick)}
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
              ${this.multiple && this._selectedIds.length
                ? this._selectedIds.map(
                    (id) =>
                      html`<button
                        part="tag"
                        class="combobox__value__tag"
                        ?disabled=${this.disabled}
                        aria-label="${this.removeTagAriaLabel} ${this._options.find((opt) => opt?.id === id)?.label}"
                        tabindex="-1"
                        id=${ifDefined(id)}
                        @click=${(e: MouseEvent) => this.handleClickTag(e, id)}
                      >
                        ${this._options.find((opt) => opt?.id === id)?.label}
                        <nve-icon name="close" aria-hidden="true"></nve-icon>
                      </button>`
                  )
                : nothing}
              <input
                part="input"
                class="combobox__value__input"
                ?disabled=${this.disabled}
                ?readonly=${this.readonly || !this.searchable}
                aria-controls="${`${this.id}-listbox`}"
                aria-expanded="${this.expanded}"
                aria-haspopup="listbox"
                ?required="${this.required}"
                name=${ifDefined(this.name || undefined)}
                form=${ifDefined(this.form)}
                aria-labelledby="${labelId}"
                aria-describedby=${ifDefined(this.errorMessage || this.helpText ? `${helpTextId}` : undefined)}
                aria-activedescendant=${ifDefined(this.activeId)}
                role="combobox"
                placeholder=${this.placeholder && !this._selectedIds.length ? this.placeholder : ''}
                .value=${this.displayLabel}
                @input=${this.onInput}
              />
            </div>
            <!-- Ikoner -->
            ${this.clearable && this._selectedIds.length && !this.readonly && !this.disabled
              ? html`<button
                  part="clear-button"
                  tabindex="-1"
                  @click=${this.handleClear}
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
                      'combobox__listbox__option--active': option.id === this.activeId,
                      'combobox__listbox__option--selected': this._selectedIds.includes(option.id),
                      'combobox__listbox__option--disabled':
                        this.multiple && !this._selectedIds.includes(option.id) && this.maxReached,
                    })}
                    id=${ifDefined(option.id)}
                    role="option"
                    part="option"
                    aria-selected=${this._selectedIds.includes(option.id) ? 'true' : 'false'}
                    @click=${() => this.handleClickOption(option.id)}
                  >
                    ${this._selectedIds.includes(option.id)
                      ? html`<nve-icon name="check" aria-hidden="true"></nve-icon>`
                      : nothing}
                    ${ifDefined(option?.label)}
                  </li>`;
                })}
              </ul>`
            : nothing}
        </div>
        ${this.errorMessage || this.helpText
          ? html`<p part="help-text" class="field__help-text" id=${helpTextId}>
              ${this.errorMessage || this.helpText}
            </p>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-select-demo': NveSelectDemo;
  }
}
