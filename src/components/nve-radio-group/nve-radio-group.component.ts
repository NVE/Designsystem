import { customElement, property, state } from 'lit/decorators.js';
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import NveRadioButton from '../nve-radio-button/nve-radio-button.component';
import NveRadio from '../nve-radio/nve-radio.component';
import styles from './nve-radio-group.styles';
import { watch } from '../../utils/watch';
import toggleBooleanAttrOnListOfNodes from '../../utils/updateInvalidProperty';
import type { PropertyValues } from 'lit';

/**
 * En sl-radio-group i NVE-forkledning.
 * Se https://shoelace.style/components/radio-group
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
@customElement('nve-radio-group')
// @ts-expect-error -next-line - overskriving av private metoder i sl-radio-group
export default class NveRadioGroup extends SlRadioGroup {
  static styles = [SlRadioGroup.styles, styles];

  constructor() {
    super();
  }
  /**
   * Om radio knapper skal vises horisontalt eller vertikalt
   */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  /**
   * Deaktivere alle radio knapper i gruppen
   */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /**
   * Feil melding som vises under radiogruppe. Vi har ikke tilgang til SlRadioGroup errorMessage så må overskrive med vår egen
   */
  @property({ reflect: true }) errorMessage?: string;
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Hjelpe variabel som sjekker om radio gruppe er allerede invalid
   */
  @state() private alreadyInvalid = false;
  /**
   * Ikke mulig å få taket i errorMessage til superklassen (SlRadioGroup), og den trengs for å vise feilmelding under radio gruppe.
   * Samtidig errorMessage fra SlRadioGroup (som er tom, som deretter gir oss default nettleseren sin melding)
   * overskriver NveRadioGroup errorMessage prop når sl-input trigges, derfor må vi lagre den i staten når komponenten renderes første gang.
   */
  @state() private errorMessageCopy = '';

  /* overvåker og setter disabled på under-radio-elementer når disabled endres */
  @watch('disabled')
  connectedCallback() {
    super.connectedCallback();
    this.errorMessageCopy = this.errorMessage || '';
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();
      if (!this.alreadyInvalid) {
        this.makeInvalid();
      }
    });
    this.addEventListener('sl-change', this.resetValidation.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sl-invalid', this.makeInvalid);
    this.removeEventListener('sl-change', this.resetValidation);
  }

  updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    if (changedProperties.has('requiredLabel')) {
      //`"${this.requiredLabel}"` er en rar syntaksen men hvis vi ikke bruker fnytter html skjønner ikke at requiredLabel er en verdi
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
    if (this.hasAttribute('data-user-invalid') && !this.alreadyInvalid) {
      this.makeInvalid();
    }
    if (!this.hasAttribute('data-invalid') && !this.hasAttribute('data-user-invalid')) {
      this.resetValidation();
    }
  }

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

  private makeInvalid() {
    const nveRadios = this.getAllRadios();
    // toggler 'data-invalid' attribute på alle radio komponenter for å få riktig style
    toggleBooleanAttrOnListOfNodes(nveRadios, true, 'data-invalid');
    if (!this.errorMessageCopy) {
      this.errorMessageCopy = this.validationMessage;
    }
    this.setCustomValidity(this.errorMessageCopy);
    this.style.setProperty('--radio-group-error-message', `"${this.errorMessageCopy}"`);
  }

  private resetValidation() {
    const nveRadios = this.getAllRadios();
    this.errorMessageCopy = '';
    // toggler 'invalid' attribute på alle radio komponenter for å få riktig style
    toggleBooleanAttrOnListOfNodes(nveRadios, false, 'data-invalid');
    this.setCustomValidity('');
    this.style.removeProperty('--radio-group-error-message');
  }

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

  // @ts-ignore
  private handleRadioClick = function (event) {
    // Lagt til nve-radio og nve-radio-button
    const target = event.target.closest('sl-radio, sl-radio-button, nve-radio, nve-radio-button');
    // @ts-ignore
    const radios = this.getAllRadios();
    // @ts-ignore
    const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    // lagt til focus på klikk
    const controls = target.shadowRoot.querySelectorAll("span[part='base']");
    if (controls.length > 0) {
      controls[0].focus();
    }
    // @ts-ignore
    this.value = target.value;
    radios.forEach((radio: { checked: boolean }) => (radio.checked = radio === target));
    // @ts-ignore
    if (this.value !== oldValue) {
      // @ts-ignore
      this.emit('sl-change');
      // @ts-ignore
      this.emit('sl-input');
    }
  };

  // @ts-ignore
  private syncRadioElements = async function () {
    // @ts-ignore
    const radios = this.getAllRadios();

    await Promise.all(
      // Sync the checked state and size
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      radios.map(async (radio: { updateComplete: any; checked: boolean; value: any; size: any }) => {
        await radio.updateComplete;
        // @ts-ignore
        radio.checked = radio.value === this.value;
        // @ts-ignore
        radio.size = this.size;
      })
    );

    // lagt til nve-radio-button
    // @ts-ignore
    this.hasButtonGroup = radios.some(
      // @ts-ignore
      (radio) => radio.tagName.toLowerCase() === 'sl-radio-button' || radio.tagName.toLowerCase() === 'nve-radio-button'
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!radios.some((radio: { checked: any }) => radio.checked)) {
      // @ts-ignore
      if (this.hasButtonGroup) {
        const buttonRadio = radios[0].shadowRoot?.querySelector('button');

        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }

    // @ts-ignore
    if (this.hasButtonGroup) {
      // lagt til nve-button-group
      const buttonGroup =
        // @ts-ignore
        this.shadowRoot?.querySelector('sl-button-group') || this.shadowRoot?.querySelector('nve-button-group');

      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  };

  // @ts-ignore
  private syncRadios = function () {
    if (
      (customElements.get('sl-radio') && customElements.get('sl-radio-button')) ||
      // lagt til nve-radio og nve-radio-button
      (customElements.get('nve-radio') && customElements.get('nve-radio-button'))
    ) {
      // @ts-ignore
      this.syncRadioElements();
      return;
    }

    if (customElements.get('sl-radio') || customElements.get('nve-radio')) {
      // @ts-ignore
      this.syncRadioElements();
    } else {
      // @ts-ignore
      customElements.whenDefined('sl-radio').then(() => this.syncRadios());
    }

    // lagt til nve-radio-button
    if (customElements.get('sl-radio-button') || customElements.get('nve-radio-button')) {
      // @ts-ignore
      this.syncRadioElements();
    } else {
      // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
      // @ts-ignore
      customElements.whenDefined('sl-radio-button').then(() => this.syncRadios());
      // lagt til nve-radio-button
      // @ts-ignore
      customElements.whenDefined('nve-radio-button').then(() => this.syncRadios());
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group': NveRadioGroup;
  }
}
