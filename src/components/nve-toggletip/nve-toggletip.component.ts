import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-toggletip.styles';
import feedbackStyles from '../../styles/feedback';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Et toggletip viser utfyllende informasjon i et popover som åpnes når brukeren aktiverer en ikonknapp med mus eller tastatur.
 * I motsetning til et verktøytips åpnes ikke toggletipen automatisk ved hover eller fokus, og innholdet beskriver
 * ikke elementet som åpner popoveret. Innholdet leveres gjennom standardsporet og kan bestå av tekst,
 * lenker eller andre komponenter. Ikon, farge og metning kan tilpasses.
 *
 * @csspart trigger - Knappen som åpner toggletipen
 * @csspart content - Selve popoveret med innholdet
 */
@customElement('nve-toggletip')
export default class NveToggletip extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Ikon navn som skal vises på knappen */
  @property({ type: String }) iconName = 'info';
  /** Variant, bestemmer fargen på tag */
  @property({ type: String }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';
  /** Saturation - Hvor mettet fargen på tooltip er */
  @property({ type: String }) saturation: 'emphasized' | 'subtle' | 'default' = 'default';

  @state() private isOpen = false;
  @query('.toggletip') private toggletip!: HTMLDivElement;
  @query('.toggletip__trigger') private trigger!: HTMLButtonElement;

  private supportsAnchorPositioning = CSS.supports('position-area: top');

  static styles = [styles, feedbackStyles];

  constructor() {
    super();
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.toggletip.addEventListener('toggle', this.handleToggleState.bind(this));

    if (this.hasAttribute('aria-label')) {
      this.forwardAriaAttribute('aria-label', this.getAttribute('aria-label'));
    }
  }

  toggle() {
    if (this.isOpen) {
      this.toggletip.hidePopover();
    } else {
      this.toggletip.showPopover();
      requestAnimationFrame(() => {
        if (!this.supportsAnchorPositioning) {
          this.positionTooltipFallback();
        }
        this.positionArrow();
      });
    }
  }

  handleToggleState(e: ToggleEvent) {
    this.isOpen = e.newState === 'open';
  }

  /**
   * Plaserer pilen i tooltipen slik at den peker mot midten av trigger-elementet.
   * Pilen plassering er ikke rekalkulert ved endring av skjermstørrelse (noe som gjor at tooltipen flyttes), men kun
   * når tooltipen vises. Grunnen er a unnga a skrive kode som kanskje gir oss lite verdi. Tooltip vil mest sannsynglivis forsvinne mens bruker endrer
   * skjermstørrelse, og da vil den ikke være synlig.
   */
  private positionArrow() {
    if (!this.trigger || !this.toggletip) {
      return;
    }

    const triggerRect = this.trigger.getBoundingClientRect();
    const tooltipRect = this.toggletip.getBoundingClientRect();

    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const tooltipCenter = tooltipRect.left + tooltipRect.width / 2;

    const shift = tooltipCenter - triggerCenter;
    if (shift !== 0) {
      const triggerCenterX = triggerRect.left + triggerRect.width / 2;
      const arrowX = triggerCenterX - tooltipRect.left;
      // setter pilens posisjon ved inset-inline-start i tooltip::after slik at den peker mot midten av trigger-elementet.
      this.toggletip.style.setProperty('--inset-inline-start', `${arrowX}px`);
    }

    const isBelow = tooltipRect.top >= triggerRect.bottom;
    // setter data-below attributt pa tooltipen slik at vi kan style pilen riktig.
    // Hvis tooltip er over trigger, vil pilen peke nedover, og hvis tooltip er under trigger, vil pilen peke oppover.
    this.toggletip.toggleAttribute('data-below', isBelow);
  }

  /**
   * Plasserer tooltipen manuelt dersom nettleseren ikke støtter anchor positioning.
   * Dette er en midlertidig løsning inntil anchor positioning støttes i alle moderne nettlesere.
   */
  private positionTooltipFallback() {
    const triggerRect = this.trigger.getBoundingClientRect();
    const tooltipRect = this.toggletip.getBoundingClientRect();

    const gap = 8;

    const hasSpaceAbove = triggerRect.top >= tooltipRect.height + gap;

    const top = hasSpaceAbove ? triggerRect.top - tooltipRect.height - gap : triggerRect.bottom + gap;

    const left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    this.toggletip.style.top = `${top}px`;
    this.toggletip.style.left = `${left}px`;
  }

  static get observedAttributes() {
    return [...super.observedAttributes, 'aria-label'];
  }
  private forwardingAria = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    const isAriaLabelAttribute = name === 'aria-label';

    /*
     * Do not pass internally removed ARIA attributes to Lit.
     */
    if (isAriaLabelAttribute && this.forwardingAria) {
      return;
    }

    /*
     * These attributes are handled manually rather than as Lit properties.
     */
    if (isAriaLabelAttribute) {
      if (oldValue !== newValue && this.trigger) {
        this.forwardAriaAttribute(name, newValue);
      }

      return;
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  private forwardAriaAttribute(name: string, value: string | null) {
    if (!this.trigger) {
      return;
    }

    if (value === null) {
      this.trigger.removeAttribute(name);
      return;
    }
    this.trigger.setAttribute(name, value);

    this.forwardingAria = true;

    try {
      this.removeAttribute(name);
    } finally {
      this.forwardingAria = false;
    }
  }

  render() {
    return html`
      <button
        @click=${this.toggle}
        class="toggletip__trigger"
        part="trigger"
        aria-expanded=${this.isOpen}
        aria-controls="toggletip-content"
        aria-haspopup="dialog"
      >
        <nve-icon name=${this.iconName}></nve-icon>
      </button>
      <div
        id="toggletip-content"
        class=${classMap({
          toggletip: true,
          'toggletip__anchor-features': true,
          'feedback--neutral': this.variant === 'neutral',
          'feedback--success': this.variant === 'success',
          'feedback--info': this.variant === 'info',
          'feedback--warning': this.variant === 'warning',
          'feedback--error': this.variant === 'error',
          'feedback--emphasized': this.saturation === 'emphasized',
          'feedback--subtle': this.saturation === 'subtle',
          'feedback--default': this.saturation === 'default',
        })}
        part="content"
        popover="auto"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-toggletip': NveToggletip;
  }
}
