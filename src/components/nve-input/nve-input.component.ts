import { customElement, property, state } from 'lit/decorators.js';
import { SlInput } from '@shoelace-style/shoelace';
import styles from './nve-input.styles';

/**
 * En sl-input i NVE-forkledning.
 * Mer info: https://shoelace.style/components/input
 *
 * Vil du ha info-ikon med hjelpetekst etter ledeteksten, putt en nve-label i label-slot.
 * Du trenger ikke å sette 'required' property for å vise requiredLabel hvis du velger å validere med invalid property
 * Da må du sikre å ha med requiredLabel property, og at den har noe verdi
 * Du trenger ikke å sette requiredLabel property hvis du velger constraint validering og bruker required property. Den
 * vises *Obligatorisk som default og kan justeres med requiredLabel.
 * Disse attributtene skal ikke brukes:
 * - pill
 *
 * TODO: Vise valideringsfeil med rød tekst under tekstfeltet
 * TODO: Felte blir breddere når feil ikone vises. Alt på grunn av at det dukker opp i en slot. Hvis Vi bestemmer oss
 * å ha en fast verdi på sloten, kan det kanksje påvirke andre elementer som skal vises i sloten.
 */
@customElement('nve-input')
export default class NveInput extends SlInput {
  /**
   * Tekst som vises for å markere at et felt er obligatorisk. Er satt til "*Obligatorisk" som standard.
   */
  @property() requiredLabel = '*Obligatorisk';
  /**
   * Feil melding som vises under input feltet
   */
  @property({ reflect: true }) errorMessage?: string;
  /**
   * Reactive property som brukes for å signere at komponent ikke er valid. Brukes som alternativ til constraint validation. Står som
   * string her fordi DOM returnerer alltid properties som string. Vi vil at både isvalid=false og isvalid=true vises i DOMen
   * når man bruker dette alternativet
   */
  @property({ type: String, reflect: true }) isvalid?: 'true' | 'false';
  /**
   * Hjelpe variabler for å unngå å kjøre makeInvalid hver gang man klikker på submit knapp hvis felte er invalid allerede
   */
  @state() isvalidState = true;

  static styles = [SlInput.styles, styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sl-invalid', (e) => {
      // vi vil ikke at nettleseren viser feil meldingen til oss
      e.preventDefault();

      // sikre at den kjører kun en gang hvis isvalidstate er usant
      if (this.isvalidState) {
        this.makeInvalid();
      }
    });
  }

  firstUpdated(): void {
    if (this.requiredLabel) {
      this.style.setProperty('--sl-input-required-content', `"${this.requiredLabel}"`);
    }
  }

  updated(changedProperties: any): void {
    if (changedProperties.has('isvalid')) {
      if (!this.isvalid) {
        this.setCustomValidity(`${this.errorMessage}` || 'Error');
      } else {
        this.setCustomValidity('');
        this.resetValidation();
      }
    }
    if (this.hasAttribute('data-user-invalid')) {
      this.makeInvalid();
    } else {
      this.resetValidation();
    }
  }

  private makeInvalid() {
    if (!this.isvalidState) return;
    this.addErrorIcon();
    this.addErrorMessage();
    this.isvalidState = false;
  }

  //TODO kjør den kun en gang kanskje?
  private resetValidation() {
    console.log(this.isvalid);
    this.removeErrorIcon();
    this.isvalidState = true;
    //fjern den og bare vis meldingen når invalid er på plass
    this.style.setProperty('--nve-input-error-message', '');
  }

  private addErrorMessage() {
    if (this.hasAttribute('data-user-invalid')) {
      this.style.setProperty('--nve-input-error-message', `"${this.errorMessage}"`);
    }
  }

  private addErrorIcon() {
    const nveInput = this;
    const nveIcon = document.createElement('nve-icon');
    nveIcon.setAttribute('name', 'error');
    nveIcon.setAttribute('slot', 'suffix');
    // ikone farge
    const variableValue = getComputedStyle(document.documentElement).getPropertyValue(
      '--feedback-background-emphasized-error'
    );
    nveIcon.style.color = variableValue.trim();
    nveInput.appendChild(nveIcon);
  }
  private removeErrorIcon() {
    const nveInput = this;
    const nveIcon = nveInput.querySelector('[slot="suffix"]');
    if (nveIcon) {
      nveIcon.remove();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-input': NveInput;
  }
}
