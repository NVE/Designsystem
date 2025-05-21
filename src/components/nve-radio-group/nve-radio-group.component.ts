import { customElement, property, state } from 'lit/decorators.js';
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import NveRadioButton from '../nve-radio-button/nve-radio-button.component';
import NveRadio from '../nve-radio/nve-radio.component';
import styles from './nve-radio-group.styles';
import { watch } from '../../utils/watch';
import toggleBooleanAttrOnListOfNodes from '../../utils/updateInvalidProperty';
import { PropertyValues } from 'lit';

/**
 * Brukes til å gruppere radioknapper som hører sammen. Den kan inneholde både nve-radio og nve-radio-button.
 * Pass på at nve-radio eller nva-radio-button har en value, ellers vil ikke radiogruppa fungere som forventet.
 * 
 * @extends SlRadioGroup
 *
 * @dependency NveRadioButton, NveRadio
 *
 * @property {string} orientation = horizontal eller vertical - Om radiogruppen skal vises vannrett eller loddrett
 * @property {boolean} disabled = deaktivere eller aktivere gruppen med radioknapper
 *
 * @slot Standard slot hvor <nve-radio> eller <nve-radio-button> plasseres
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
   * Deaktivere alle radioknapper i gruppen
   */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /**
   * Feilmelding som vises under radiogruppe. Vi har ikke tilgang til SlRadioGroup errorMessage så må overskrive med vår egen
   */
  @property({ reflect: true }) errorMessage?: string;
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Hjelpevariabel som sjekker om radio gruppe er allerede invalid
   */

  @property({reflect: true, type: String}) testId: string = '';

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

  // TODO: Sjekk generert API-dokumentasjon, ser ut som koden blir vist i dokumentasjonen
// @ts-expect-error: overskriving av privat metode i superklassen (SlRadioGroup)
private handleRadioClick = function (event) {
    // Lagt til nve-radio og nve-radio-button
    const target = event.target.closest('sl-radio, sl-radio-button, nve-radio, nve-radio-button');
  // @ts-expect-error: bruker privat metode i superklassen (getAllRadios)
  const radios = this.getAllRadios();
  // @ts-expect-error: tilgang til privat egenskap this.value i superklassen
  const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    // lagt til focus på klikk
    const controls = target.shadowRoot.querySelectorAll("span[part='base']");
    if (controls.length > 0) {
      controls[0].focus();
    }
  // @ts-expect-error: setter privat egenskap this.value i superklassen
  this.value = target.value;
    radios.forEach((radio: { checked: boolean }) => (radio.checked = radio === target));
  // @ts-expect-error: tilgang til privat metode emit i superklassen
  if (this.value !== oldValue) {
    // @ts-expect-error: kaller privat metode emit i superklassen
    this.emit('sl-change');
    // @ts-expect-error: kaller privat metode emit i superklassen
    this.emit('sl-input');
    }
  };

// @ts-expect-error: overskriver og utvider privat metode fra SlRadioGroup
private syncRadioElements = async  () => {
  const radios = this.getAllRadios();

    await Promise.all(
      // Sync the checked state and size
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      radios.map(async (radio: { updateComplete: any; checked: boolean; value: any; size: any }) => {
        await radio.updateComplete;
      radio.checked = radio.value === this.value;
      radio.size = this.size;
      })
    );

    // lagt til nve-radio-button
  // @ts-expect-error: bruker privat egenskap hasButtonGroup
  this.hasButtonGroup = radios.some(
      (radio: { tagName: string; }) => radio.tagName.toLowerCase() === 'sl-radio-button' || radio.tagName.toLowerCase() === 'nve-radio-button'
    );

  if (!radios.some((radio: { checked: boolean }) => radio.checked)) {
      // @ts-expect-error: bruker privat egenskap hasButtonGroup
      if (this.hasButtonGroup) {
        const buttonRadio = radios[0].shadowRoot?.querySelector('button');

        if (buttonRadio) {
          buttonRadio.tabIndex = 0;
        }
      } else {
        radios[0].tabIndex = 0;
      }
    }

  // @ts-expect-error: tilgang til privat egenskap hasButtonGroup
  if (this.hasButtonGroup) {
      // lagt til nve-button-group
      const buttonGroup =
      this.shadowRoot?.querySelector('sl-button-group') || this.shadowRoot?.querySelector('nve-button-group');

      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  };

// @ts-expect-error: utvider privat metode fra superklassen for å støtte egne elementer
private syncRadios = function () {
    if (
      (customElements.get('sl-radio') && customElements.get('sl-radio-button')) ||
      // lagt til nve-radio og nve-radio-button
      (customElements.get('nve-radio') && customElements.get('nve-radio-button'))
    ) {
    // @ts-expect-error: kaller privat metode
    this.syncRadioElements();
      return;
    }

    if (customElements.get('sl-radio') || customElements.get('nve-radio')) {
    // @ts-expect-error: kaller privat metode
    this.syncRadioElements();
    } else {
    // @ts-expect-error: definerer callback for privat metode
    customElements.whenDefined('sl-radio').then(() => this.syncRadios());
    }

    // lagt til nve-radio-button
    if (customElements.get('sl-radio-button') || customElements.get('nve-radio-button')) {
    // @ts-expect-error: kaller privat metode
    this.syncRadioElements();
    } else {
      // Rerun this handler when <sl-radio> or <sl-radio-button> is registered
    // @ts-expect-error: definerer callback for privat metode
    customElements.whenDefined('sl-radio-button').then(() => this.syncRadios());
      // lagt til nve-radio-button
    // @ts-expect-error: definerer callback for privat metode
    customElements.whenDefined('nve-radio-button').then(() => this.syncRadios());
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-radio-group': NveRadioGroup;
  }
}