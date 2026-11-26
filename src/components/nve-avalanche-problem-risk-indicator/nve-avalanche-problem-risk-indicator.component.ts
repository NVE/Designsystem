import { LitElement, html, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './nve-avalanche-problem-risk-indicator.styles';
import texts from './texts.json';
import '../nve-button/nve-button.component';
import '../nve-icon/nve-icon.component';
import '../nve-segmented-level-indicator/nve-segmented-level-indicator.component';

type Language = 'no' | 'en';

type Category = 'triggerSensitivity' | 'propagation' | 'destructiveSize';

interface RiskLevel {
  category: Category;
  id: string;
  level: number;
  label: Record<Language, string>;
  description: Record<Language, string>;
}

const riskIndicators = texts as RiskLevel[];

/**
 * Viser utløsbarhet, utbredelse og forventet skredstørrelse for et snøskredproblem.
 * ID'ene for de ulike risikofaktorene kan vises sammen eller separat.
 */
@customElement('nve-avalanche-problem-risk-indicator')
export default class NveAvalancheProblemRiskIndicator extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;

  /** Id for hvor lett det er å løse ut skred. */
  @property({ type: String }) triggerSensitivityId: string = '';

  /** Id for utbredelse av skredproblemet. */
  @property({ type: String }) propagationId: string = '';

  /** Id for forventet størrelse på skred. */
  @property({ type: String }) destructiveSizeId: string = '';

  /** Språk for tekstene. Blir satt til engelsk om lang starter på 'en'. Standard er norsk. */
  @property({ type: String }) lang: string = 'no';

  /** Om beskrivelsen til hver indikator skal vises eller ikke. */
  @property({ type: Boolean }) expanded: boolean = false;

  static styles = [styles];

  private get language(): Language {
    return this.lang.toLowerCase().startsWith('en') ? 'en' : 'no';
  }

  private getExpandOrCollapseLabel() {
    if (this.language === 'no') {
      return this.expanded ? 'Skjul detaljer' : 'Vis detaljer';
    }
    return this.expanded ? 'Hide details' : 'Show details';
  }

  private getIconName(): string {
    return this.expanded ? 'expand_less' : 'expand_more';
  }

  // Viser EN indikator. Om det er første indikator, vises også knappen for å vise eller skjule detaljer.
  private renderIndicator(
    category: Category,
    id: string,
    scale: number,
    action: TemplateResult | typeof nothing = nothing // Fordi knappen skal vises på linje med første indikator, sender vi den med her
  ) {
    const indicator = riskIndicators.find((item) => item.category === category && item.id === id);
    if (!indicator) {
      return nothing;
    }
    return html`<div class="indicator">
      <div class="indicator__row">
        <nve-segmented-level-indicator
          value=${indicator?.level ?? 0}
          scale=${scale}
          lang=${this.language}
          label=${indicator?.label[this.language] ?? ''}
          class="indicator__level"
        ></nve-segmented-level-indicator>
        ${action}
      </div>
      ${this.expanded && indicator ? html`<p class="description">${indicator.description[this.language]}</p>` : nothing}
    </div>`;
  }

  render() {
    const indicators: { category: Category; id: string; scale: number }[] = [
      { category: 'triggerSensitivity', id: this.triggerSensitivityId, scale: 4 },
      { category: 'propagation', id: this.propagationId, scale: 3 },
      { category: 'destructiveSize', id: this.destructiveSizeId, scale: 5 },
    ];
    const firstVisibleIndex = indicators.findIndex((level) =>
      riskIndicators.some((item) => item.category === level.category && item.id === level.id)
    );
    const expandButton = html`<nve-button
      variant="ghost"
      size="small"
      aria-expanded=${this.expanded}
      @click=${() => (this.expanded = !this.expanded)}
      >${this.getExpandOrCollapseLabel()} <nve-icon slot="end" name=${this.getIconName()}></nve-icon
    ></nve-button>`;

    return html`<div testId=${ifDefined(this.testId)} class="container">
      <div class="indicators">
        ${indicators.map((level, index) =>
          this.renderIndicator(
            level.category,
            level.id,
            level.scale,
            index === firstVisibleIndex ? expandButton : nothing
          )
        )}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-avalanche-problem-risk-indicator': NveAvalancheProblemRiskIndicator;
  }
}
