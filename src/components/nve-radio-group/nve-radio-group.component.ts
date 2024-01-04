import { customElement, property } from 'lit/decorators.js';
import { SlRadio, SlRadioGroup, SlRadioButton } from '@shoelace-style/shoelace';
import NveRadioButton from '../nve-radio-button/nve-radio-button.component';
import NveRadio from '../nve-radio/nve-radio.component';
import styles from './nve-radio-group.styles';
import { watch } from '../../utils/watch';

@customElement('nve-radio-group')
/**
 * Representerer en tilpasset radiogruppekomponent som utvider SlRadioGroup-klassen.
 * Denne komponenten tillater bruk av nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>
 * ved å overstyre noen private metoder i SlRadioGroup.
 *
 * @extends SlRadioGroup
 *
 * @dependency NveRadioButton, NveRadio
 *
 * @property {string} orientation = horizontal eller vertical - Om radio-gruppen skal rendres horisontalt
 * @property {boolean} disabled = disable eller enable gruppen med radio-knapper
 *
 * @slot Standard slot hvor `<nve-radio>` eller `<nve-radio-button>` plasseres
 *
 * @example <nve-radio-group horizontal value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 * @example <nve-radio-group vertical value="1"><nve-radio value="1">Value 1 (checked)</nve-radio></nve-radio-group>
 *
 */
// @ts-expect-error -next-line - overskriving av private metoder i sl-radio-group
export default class NveRadioGroup extends SlRadioGroup {
  constructor() {
    super();
  }
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  @property({ type: Boolean, reflect: true }) disabled = false;

  /* overvåker og setter disabled på under-radio-elementer når disabled endres */
  @watch('disabled')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePropChange(oldValue: any, newValue: any): boolean {
    const radios = this.getAllRadios();
    const changed = newValue !== oldValue;

    if (!changed) return false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    radios.forEach((radio: any) => {
      if (radio.was_disabled === undefined) {
        radio.was_disabled = radio.disabled;
      } else {
        if (oldValue === true) {
          // enabled
          radio.disabled = radio.was_disabled;
        } else {
          // disabled
          radio.was_disabled = radio.disabled;
          radio.disabled = true;
        }
      }
    });
    return true;
  }

  static styles = [SlRadioGroup.styles, styles];

  /* Overskriver private metoder i sl-radio-group for å kunne bruke nve-radio og nve-radio-button elementer inne i <nve-radio-group></nve-radio-group>*/
  private getAllRadios = function () {
    // Lagt til nve-radio og nve-radio-button
    return [
      // @ts-expect-error - bruk av this i private metode
      ...this.querySelectorAll<SlRadio | SlRadioButton | NveRadio | NveRadioButton>(
        'sl-radio, sl-radio-button, nve-radio, nve-radio-button'
      ),
    ];
  };

  // @ts-expect-error - overskriving av private metoder i sl-radio-group
  private handleRadioClick = function (event) {
    // Lagt til nve-radio og nve-radio-button
    const target = event.target.closest('sl-radio, sl-radio-button, nve-radio, nve-radio-button');
    // @ts-expect-error - this is shadowed by outer container
    const radios = this.getAllRadios();
    // @ts-expect-error - this is shadowed by outer container
    const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    // lagt til focus på klikk
    const controls = target.shadowRoot.querySelectorAll("span[part='base']");
    if (controls.length > 0) {
      controls[0].focus();
    }
    // @ts-expect-error - this is shadowed by outer container
    this.value = target.value;
    radios.forEach((radio: { checked: boolean }) => (radio.checked = radio === target));
    // @ts-expect-error - this is shadowed by outer container
    if (this.value !== oldValue) {
      // @ts-expect-error - this is shadowed by outer container
      this.emit('sl-change');
      // @ts-expect-error - this is shadowed by outer container
      this.emit('sl-input');
    }
  };

  // @ts-expect-error - overskriving av private metoder i sl-radio-group
  private syncRadioElements = async function () {
    // @ts-expect-error - this is shadowed by outer container
    const radios = this.getAllRadios();

    await Promise.all(
      // Sync the checked state and size
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      radios.map(async (radio: { updateComplete: any; checked: boolean; value: any; size: any }) => {
        await radio.updateComplete;
        // @ts-expect-error - this is shadowed by outer container
        radio.checked = radio.value === this.value;
        // @ts-expect-error - this is shadowed by outer container
        radio.size = this.size;
      })
    );

    // lagt til nve-radio-button
    // @ts-expect-error - this is shadowed by outer container
    this.hasButtonGroup = radios.some(
      // @ts-expect-error - this is shadowed by outer container
      (radio) => radio.tagName.toLowerCase() === 'sl-radio-button' || radio.tagName.toLowerCase() === 'nve-radio-button'
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!radios.some((radio: { checked: any }) => radio.checked)) {
      // @ts-expect-error - this is shadowed by outer container
      if (this.hasButtonGroup) {
        const buttonRadio = radios[0].shadowRoot?.querySelector('button');

        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }

    // @ts-expect-error - this is shadowed by outer container
    if (this.hasButtonGroup) {
      // lagt til nve-button-group
      const buttonGroup =
        // @ts-expect-error - this is shadowed by outer container
        this.shadowRoot?.querySelector('sl-button-group') || this.shadowRoot?.querySelector('nve-button-group');

      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  };

  // @ts-expect-error - overskriving av private metoder i sl-radio-group
  private syncRadios = function () {
    if (
      (customElements.get('sl-radio') && customElements.get('sl-radio-button')) ||
      // lagt til nve-radio og nve-radio-button
      (customElements.get('nve-radio') && customElements.get('nve-radio-button'))
    ) {
      // @ts-expect-error - this is shadowed by outer container
      this.syncRadioElements();
      return;
    }

    if (customElements.get('sl-radio') || customElements.get('nve-radio')) {
      // @ts-expect-error - this is shadowed by outer container
      this.syncRadioElements();
    } else {
      // @ts-expect-error - this is shadowed by outer container
      customElements.whenDefined('sl-radio').then(() => this.syncRadios());
    }

    // lagt til nve-radio-button
    if (customElements.get('sl-radio-button') || customElements.get('nve-radio-button')) {
      // @ts-expect-error - this is shadowed by outer container
      this.syncRadioElements();
    } else {
      // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
      // @ts-expect-error - this is shadowed by outer container
      customElements.whenDefined('sl-radio-button').then(() => this.syncRadios());
      // lagt til nve-radio-button
      // @ts-expect-error - this is shadowed by outer container
      customElements.whenDefined('nve-radio-button').then(() => this.syncRadios());
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group': NveRadioGroup;
  }
}
