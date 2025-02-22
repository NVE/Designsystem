import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './nve-label.styles';
import { HasSlotController } from '../../utils/slot';
import '../nve-icon/nve-icon.component';
import '../nve-tooltip/nve-tooltip.component';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Ledetekst med verktøy-hint (og tilhørende info-ikon)
 *
 * Kan også brukes i nve-menu for å skille kategorier. Her får den en spesiell utforming.
 *
 * @slot (default) - teksten som skal vises. Eller du kan bruke value-attributtet
 * @slot tooltip - innhold i denne blir vist som en tooltip hvis man svever over info-ikonet
 * @slot suffix - viser ekstra innhold etter hoved label som f.eks. nve-spinner
 *
 * TODO: Skal være litt mer plass mellom tekst og info-ikon
 * TODO: Hvis du angir både value og innhold i slot, er det value som vises. Det bør være motsatt.
 */
@customElement('nve-label')
export default class NveLabel extends LitElement {
  private readonly hasSlotController = new HasSlotController(this, 'tooltip');

  /**
   * Teksten som skal vises
   */
  @property({ reflect: true }) value = '';

  /**
   * Størrelse
   */
  @property({ reflect: true }) size: 'x-small' | 'small' | 'medium' | 'large' = 'small';

  /**
   * Sett denne hvis du vil ha litt lettere skriftvekt
   */
  @property({ type: Boolean, reflect: true }) light = false;

  /**
   * Denne teksten blir vist som et verktøyhint hvis man svever over info-ikonet
   */
  @property({ reflect: true }) tooltip?: string = undefined;

  /**
   * Om tooltip ikone skal vises på venstre siden
   */
  @property({ type: Boolean, reflect: true }) iconLeft = false;

  /**
   * Ikon farge
   */
  @property({ reflect: true }) iconColor: 'default' | 'black' = 'default';

  /**
   * For-attributten legges på label, og brukes som html-standard. Sett til samme som id på elementet label tilhører
   */
  @property({ reflect: true }) for?: string = undefined;

  static styles = [styles];

  private renderInfoIconWithTooltip() {
    let tooltipContent: ChildNode | string | undefined | null = this.tooltip;
    if (!tooltipContent?.length) {
      // tooltip-property er ikke satt, vi prøver å se om vi har tooltip i slot i stedet
      tooltipContent = this.hasSlotController.get('tooltip');
    }
    if (tooltipContent) {
      return html`<nve-tooltip placement="top">
        <div slot="content">${tooltipContent}</div>
        <nve-icon class="nve-info-icon" name="Info"></nve-icon>
      </nve-tooltip>`;
    }
    return html``; // tooltip er ikke spesifisert, så vi viser ikke denne delen
  }

  private renderValueProperty() {
    if (this.value.length) {
      // Vis value-property
      // For å vise label i slot INNI tooltip-slot, må label-slot ha et navn
      return html` <label
        part="form-control-label"
        class="form-control__label"
        aria-hidden="false"
        for=${ifDefined(this.for)}
      >
        <slot name="label">${this.value}</slot>
      </label>`;
    } else {
      // Vis evt. slot-innhold i stedet
      return html` <label
        part="form-control-label"
        class="form-control__label"
        aria-hidden="false"
        for=${ifDefined(this.for)}
      >
        <slot></slot>
      </label>`;
    }
  }

  render() {
    return html`
      ${this.iconLeft ? this.renderInfoIconWithTooltip() : null} ${this.renderValueProperty()}
      <slot name="suffix"></slot>
      ${!this.iconLeft ? this.renderInfoIconWithTooltip() : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-label': NveLabel;
  }
}
