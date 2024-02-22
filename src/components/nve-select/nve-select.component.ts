import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import { customElement } from 'lit/decorators.js';
import styles from './nve-select.styles';
import NveOption from '../nve-option/nve-option.component';

/**
 * En Shoelace-select i NVE-forkledning.
 * Se https://shoelace.style/components/select
 */
@customElement('nve-select')
// @ts-expect-error -next-line - overskriving av private metoder i sl-select
export default class NveSelect extends SlSelect {
  constructor() {
    super();
  }
  static styles = [SlSelect.styles, styles];

  protected firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    const popup = this.shadowRoot?.querySelector('sl-popup');
    popup?.setAttribute('distance', '3');
  }

  // @ts-expect-error - overskriving av private metoder i sl-select
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
          console.log(this);
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
  // @ts-expect-error - overskriving av private metoder i sl-select
  private getFirstOption() {
    return this.querySelector<NveOption>('nve-option');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-select': NveSelect;
  }
}
