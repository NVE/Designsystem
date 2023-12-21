import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
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
      return html`
      <label part="form-control-label" class="form-control__label" aria-hidden="false">
        <slot name="label">${this.value}</slot>
      </label>`
    }
    return html``; // value-property er ikke satt, så vi viser ikke denne delen
  }

  private renderSlottedContent() {
    if (!this.value.length) {
      return html`
      <label part="form-control-label" class="form-control__label" aria-hidden="false">
        <slot>${this.value}</slot>
      </label>`
    }
    return html``; // det er ikke innhold i slot, så vi viser ikke denne delen
  }

  render() {
    return html`
      ${this.renderValueProperty()}
      ${this.renderSlottedContent()}
      ${this.renderInfoIconWithTooltip()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-label': NveLabel;
  }
}
