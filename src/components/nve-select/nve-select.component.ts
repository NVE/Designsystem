import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './nve-select.styles';
import NveOption from '../nve-option/nve-option.component';
import { PropertyValues } from 'lit';

/**
 * En nedtrekksliste, også kjent som rullgardin eller drop-down list. Kjært barn har mange navn.
 * TODO: Klarte ikke å sette feil-ikonet når validering feiler. Eneste måte å gjøre det på kunne ha vært å bruke ::after pseudo-element på noen av sl-select partene, men
 * funka ikke med ikonet.
 * Man kan bruke .focus() for å fokusere komponenten programatisk. Sjekk https://shoelace.style/getting-started/usage#methods for å se hvordan å bruke det.
 * Kan være at i Vue applikasjon man må kjøre .focus i neste tick for å fokusere komponenten.
 */
@customElement('nve-select')
// @ts-expect-error -next-line - overskriving av private metoder i sl-select
export default class NveSelect extends SlSelect {
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Brukes til enkel constraint validation til å overskrive default nettleser-melding
   */
  @property({ reflect: true }) errorMessage?: string;

  constructor() {
    super();
  }
  static styles = [SlSelect.styles, styles];

  // vi vil ikke at nettleseren viser feil meldingen til oss
  private slInvalidEventListener = (e: CustomEvent) => {
    e.preventDefault();
  };
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sl-invalid', this.slInvalidEventListener);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', this.slInvalidEventListener);
  }

  protected firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    if (this.requiredLabel) {
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
    const popup = this.shadowRoot?.querySelector('sl-popup');
    popup?.setAttribute('distance', '3');
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    const hasDataUserInvalidAttr = this.hasAttribute('data-user-invalid');
    if (hasDataUserInvalidAttr) {
      if (!this.errorMessage) {
        this.errorMessage = this.validationMessage;
      }
      this.style.setProperty('--nve-input-error-message', `"${this.errorMessage}"`);
    }
    if (!hasDataUserInvalidAttr) {
      this.style.setProperty('--nve-input-error-message', '');
    }
  }

  focus() {
    const popup = this.shadowRoot?.querySelector('sl-popup') as HTMLElement;
    popup?.classList.add('select--focused');
  }

  @state() private override valueHasChanged: boolean = false;

  // @ts-expect-error overskriver private method
  private override handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('nve-option');
    const oldValue = this.value;

    if (option && !option.disabled) {
      if (this.multiple) {
        // @ts-expect-error - overskriving av private metoder for å håndtere flere valg
        this.toggleOptionSelection(option);
      } else {
        // @ts-expect-error - overskriving av private metoder for å håndtere enkeltvalg
        this.setSelectedOptions(option);
      }

      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        this.valueHasChanged = true;
        this.updateComplete.then(() => {
          this.emit('sl-input');
          this.emit('sl-change');
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  //Lagt til nve-option
  private handleDefaultSlotChange() {
    if (!customElements.get('nve-option')) {
      customElements.whenDefined('nve-option').then(() => this.handleDefaultSlotChange());
    }

    const allOptions = this.getAllOptions();
    const val = this.valueHasChanged ? this.value : this.defaultValue;
    const value = Array.isArray(val) ? val : [val];

    // @ts-expect-error - overskriving av private metoder for å sette selected
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  //Lagt til nve-option
  private override getAllOptions() {
    return [...this.querySelectorAll<NveOption>('nve-option')];
  }

  // @ts-expect-error overskriver private method
  private override getFirstOption() {
    return this.querySelector<NveOption>('nve-option');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-select': NveSelect;
  }
}
