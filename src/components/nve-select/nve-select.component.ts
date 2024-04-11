import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './nve-select.styles';
import NveOption from '../nve-option/nve-option.component';

/**
 * En Shoelace-select i NVE-forkledning.
 * Se https://shoelace.style/components/select. Bruker constraint og custom validering. Klarte ikke å sette feil ikone når
 * validering feiler. Eneste måte å gjøre det på kunne ha vært å bruke ::after pseudo-element på noen av sl-select partene, men
 * funka ikke med ikonen.
 */
@customElement('nve-select')
// @ts-expect-error -next-line - overskriving av private metoder i sl-select
export default class NveSelect extends SlSelect {
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Brukes til enkel constraint validation til å overskrive default nettleseren melding
   */
  @property({ reflect: true }) errorMessage?: string;
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', (e) => {
      e.preventDefault();
    });
  }

  constructor() {
    super();
  }
  static styles = [SlSelect.styles, styles];

  protected firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    if (this.requiredLabel) {
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
    const popup = this.shadowRoot?.querySelector('sl-popup');
    popup?.setAttribute('distance', '3');
  }

  updated(changedProperties: any) {
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

  // @ts-ignore
  private handleOptionClick(event: MouseEvent) {
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
        this.updateComplete.then(() => {
          // @ts-expect-error - this is shadowed by outer container
          this.emit('sl-input');
          // @ts-expect-error - this is shadowed by outer container
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
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    if (customElements.get('nve-option')) {
      allOptions.forEach((option) => values.push(option.value));

      // @ts-expect-error - overskriving av private metoder for å sette selected
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    } else {
      customElements.whenDefined('nve-option').then(() => this.handleDefaultSlotChange());
    }
  }
  //Lagt til nve-option
  private getAllOptions() {
    return [...this.querySelectorAll<NveOption>('nve-option')];
  }
  // @ts-ignore
  private getFirstOption() {
    return this.querySelector<NveOption>('nve-option');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-select': NveSelect;
  }
}
