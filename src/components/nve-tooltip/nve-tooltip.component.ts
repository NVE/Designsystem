import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '../nve-icon/nve-icon.component';
import styles from './nve-tooltip.styles';
import feedbackStyles from '../../styles/feedback';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Et verktøyhint gir kontekstuell informasjon om et element når elementet får fokus eller brukeren holder pekeren over det,
 * men er ellers ikke synlig på siden. Verktøytipset vises automatisk – brukeren ber ikke om å få det vist.
 * Verktøytips støttes på nve-button, button- og a-elementer, og bør brukes for innhold med korte etiketter,
 * for eksempel ikonknapper. Kan ha ulik farge og metning.
 *
 * @csspart tooltip - Selve tooltipen
 * @csspart content - Innholdet i tooltipen
 * @csspart trigger - Elementet som trigger tooltipen
 */
@customElement('nve-tooltip')
export default class NveTooltip extends LitElement {
  /** Tekstlig innholdet i tooltipen */
  @property({ type: String }) content = '';
  /** Variant, bestemmer fargen på tag */
  @property({ type: String }) variant: 'neutral' | 'success' | 'info' | 'warning' | 'error' = 'neutral';
  /** Saturation - Hvor mettet fargen på tooltip er */
  @property({ type: String }) saturation: 'emphasized' | 'subtle' | 'default' = 'default';

  @query('.tooltip') tooltip!: HTMLDivElement;
  @query('slot')
  private triggerSlot!: HTMLSlotElement;

  private supportsAnchorPositioning = typeof CSS !== 'undefined' && CSS.supports('position-area: top');

  static styles = [styles, feedbackStyles];

  /*
  - Tooltip dukker opp i top lag, dette betyr at vi skal ikke bry oss om hositing som shoelace gjorde. Popover skal alltid vaere foran alt annet.
  - I utgangspunktet skal tooltipen vises over trigger-elementet, evt under basert pa hvor mye plass er det.
  */

  constructor() {
    super();
    this.addEventListener('mouseenter', this.showTooltip);
    this.addEventListener('mouseleave', this.hideTooltip);
    this.addEventListener('focusin', this.showTooltip);
    this.addEventListener('focusout', this.hideTooltip);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }

  /** Brukes til å forsinke lukking av tooltipen. Dette gjør at brukeren rekker å flytte
   * musepekeren fra trigger-elementet til tooltipen uten at den lukkes dersom det er
   * et lite mellomrom mellom dem.
   */
  private hideTimeout?: number;

  /**
   * Viser tooltipen.
   * Tooltipen vises kun dersom trigger-elementet er et nve-button, button eller a-element.
   */
  private showTooltip() {
    // Avbryt eventuell planlagt lukking dersom brukeren går tilbake til triggeren
    // eller beveger seg over tooltipen før forsinkelsen er utløpt.
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    const [trigger] = this.triggerSlot.assignedElements({
      flatten: true,
    });

    // Foreløpige løsning for å vise tooltipen for nve-button, button og a elementer. Andre elementer vil ikke vise tooltip.
    if (
      trigger &&
      (trigger.tagName.toLowerCase() === 'nve-button' ||
        trigger.tagName.toLowerCase() === 'button' ||
        trigger.tagName.toLowerCase() === 'a')
    ) {
      this.tooltip.showPopover();
    }

    // Vent til popoveren er plassert av nettleseren før pilens posisjon beregnes.
    requestAnimationFrame(() => {
      if (!this.supportsAnchorPositioning) {
        this.positionTooltipFallback();
      }
      this.positionArrow();
    });
  }

  /**
   * Lukker tooltipen med en liten forsinkelse for å gi brukeren tid til å flytte musepekeren fra trigger-elementet til tooltipen.
   */
  private hideTooltip() {
    this.hideTimeout = window.setTimeout(() => {
      this.tooltip.hidePopover();
    }, 150);
  }

  private handleContentSlotChange() {
    this.requestUpdate();
    const [trigger] = this.triggerSlot.assignedElements({
      flatten: true,
    });

    if (!trigger) return;

    // Tooltipen må gi triggeren et tilgjengelig navn dersom den ikke har synlig tekst.
    // Har triggeren allerede et tekstlig innhold, brukes title i stedet for aria-label slik at
    // den synlige teksten fortsatt er det tilgjengelige navnet.

    // nve-button håndterer selv title når den har synlig tekst.
    if (trigger.tagName.toLowerCase() === 'nve-button') {
      trigger.setAttribute('aria-label', this.content);
    }

    if (trigger.tagName.toLowerCase() === 'button') {
      if (trigger.textContent.trim() === '') {
        trigger.setAttribute('aria-label', this.content);
      } else {
        trigger.setAttribute('title', this.content);
      }
    }

    if (trigger.tagName.toLowerCase() === 'a') {
      if (trigger.textContent.trim() === '') {
        trigger.setAttribute('aria-label', this.content);
      } else {
        trigger.setAttribute('title', this.content);
      }
    }
  }

  /**
   * Plaserer pilen i tooltipen slik at den peker mot midten av trigger-elementet.
   * Pilen plassering er ikke rekalkulert ved endring av skjermstørrelse (noe som gjor at tooltipen flyttes), men kun
   * når tooltipen vises. Grunnen er a unnga a skrive kode som kanskje gir oss lite verdi. Tooltip vil mest sannsynglivis forsvinne mens bruker endrer
   * skjermstørrelse, og da vil den ikke være synlig.
   */
  private positionArrow() {
    const [trigger] = this.triggerSlot.assignedElements({
      flatten: true,
    });

    if (!trigger || !this.tooltip) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const tooltipCenter = tooltipRect.left + tooltipRect.width / 2;

    const shift = tooltipCenter - triggerCenter;
    if (shift !== 0) {
      const triggerCenterX = triggerRect.left + triggerRect.width / 2;
      const arrowX = triggerCenterX - tooltipRect.left;
      // setter pilens posisjon ved inset-inline-start i tooltip::after slik at den peker mot midten av trigger-elementet.
      this.tooltip.style.setProperty('--inset-inline-start', `${arrowX}px`);
    }

    const isBelow = tooltipRect.top >= triggerRect.bottom;
    // setter data-below attributt pa tooltipen slik at vi kan style pilen riktig.
    // Hvis tooltip er over trigger, vil pilen peke nedover, og hvis tooltip er under trigger, vil pilen peke oppover.
    this.tooltip.toggleAttribute('data-below', isBelow);
  }

  /**
   * Plasserer tooltipen manuelt dersom nettleseren ikke støtter anchor positioning.
   * Dette er en midlertidig løsning inntil anchor positioning støttes i alle moderne nettlesere.
   */
  private positionTooltipFallback() {
    const [trigger] = this.triggerSlot.assignedElements({ flatten: true });

    if (!trigger) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    const gap = 8;

    const hasSpaceAbove = triggerRect.top >= tooltipRect.height + gap;

    const top = hasSpaceAbove ? triggerRect.top - tooltipRect.height - gap : triggerRect.bottom + gap;

    const left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    this.tooltip.style.top = `${top}px`;
    this.tooltip.style.left = `${left}px`;
  }

  render() {
    return html`
      <span class="tooltip__trigger" part="trigger">
        <slot @slotchange=${this.handleContentSlotChange}></slot>
      </span>

      <div
        id="tooltip"
        class=${classMap({
          tooltip: true,
          'tooltip__anchor-features': true,
          'feedback--neutral': this.variant === 'neutral',
          'feedback--success': this.variant === 'success',
          'feedback--info': this.variant === 'info',
          'feedback--warning': this.variant === 'warning',
          'feedback--error': this.variant === 'error',
          'feedback--emphasized': this.saturation === 'emphasized',
          'feedback--subtle': this.saturation === 'subtle',
          'feedback--default': this.saturation === 'default',
        })}
        role="tooltip"
        popover="hint"
        part="tooltip"
      >
        ${this.content ? html`<p class="tooltip__content" part="content">${this.content}</p>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tooltip': NveTooltip;
  }
}
