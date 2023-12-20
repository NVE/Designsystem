import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './nve-label.styles';
import { HasSlotController } from '../../utils/slot';
import '../nve-icon/nve-icon';
import '../nve-tooltip/nve-tooltip';

/**
 * Ledetekst med valgfritt verktøy-hint (og tilhørende info-ikon)
 *
 * @slot (default) - teksten som skal vises. Eller du kan bruke value-attributtet
 * @slot tooltip - innhold i denne blir vist som en tooltip hvis man svever over info-ikonet
 *
 * TODO: Skal være litt mer plass mellom tekst og info-ikon
 */
@customElement('nve-label')
export class NveLabel extends LitElement {
  private readonly hasSlotController = new HasSlotController(this, 'tooltip');

  /**
   * Teksten som skal vises
   */
  @property() value = '';

  /**
   * Størrelse
   */
  @property() size: 'x-small' | 'small' | 'medium' | 'large' = 'small';

  /**
   * Sett denne hvis du vil ha litt lettere skriftvekt
   */
  @property({ type: Boolean }) light = false;

  /**
   * Denne teksten blir vist som et verktøyhint hvis man svever over info-ikonet
   */
  @property() tooltip?: string = undefined;

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
      return html`
      <label part="form-control-label" class="form-control__label" aria-hidden="false">
        <slot name="sillyRandomName">${this.value}</slot>
      </label>`
    } else {
      // Vis evt. slot-innhold i stedet
      return html`
      <label part="form-control-label" class="form-control__label" aria-hidden="false">
        <slot></slot>
      </label>`
    }
  }


  render() {
    return html`
      ${this.renderValueProperty()}
      ${this.renderInfoIconWithTooltip()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-label': NveLabel;
  }
}
