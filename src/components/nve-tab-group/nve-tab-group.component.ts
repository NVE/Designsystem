import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab-group.styles';
import { NveTab, NveTabPanel } from 'src/nve-designsystem';

/**
 * En komponent for å vise faner. Bruker underkomponenter for å vise knapper og det innholdet den spesifikke knappen skal vise
 *
 * NveTab er selve knappen for å velge fane
 * NveTabPanel er innholdet for hver fane
 * Disse kobles sammen med `panel` på NveTab som skal være det samme som `name` på NveTabPanel
 *
 * @slot - For innholdet på hver fane. Må være en eller flere `<nve-tab-panel>`-elementer
 * @slot nav - For fane-knapper. Må være av typen `<nve-tab>`
 *
 * @csspart base - Hele komponenten er inne i denne.
 * @csspart tabs - Konteiner som inneholder fane-knappene.
 * @csspart active-tab-indicator - Linje under aktiv fane.
 * @csspart body - Konteiner som inneholder synlig innhold
 */

@customElement('nve-tab-group')
export default class NveTabGroup extends LitElement implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  /**  Skal vi vise bakgrunn eller ikke for fane-knappene */
  @property({ reflect: true, type: Boolean }) showbackground: boolean = false;
  /** Skal vi vise linje under fane-knapp-raden eller ikke */
  @property({ reflect: true, type: Boolean }) showunderline: boolean = false;

  private activeTab?: NveTab;
  private mutationObserver!: MutationObserver; /* Blir laget i connectedCallback */
  private resizeObserver!: ResizeObserver;
  private tabs: NveTab[] = [];
  private panels: NveTabPanel[] = [];

  /** Spørring for base-elementet */
  @query('.tab-group') tabGroup!: HTMLElement;
  /** Spørring for indre element som holder faneinnholdet */
  @query('.tab-group__body') body!: HTMLSlotElement;
  /** Spørring for det ytre elementet som faneknapper og indikator ligger i */
  @query('.tab-group__tabs') tabsholder!: HTMLSlotElement;
  /** Spørring for det indre elementet som holder faneknapper */
  @query('.tab-group__nav') nav!: HTMLElement;
  /** Spørring for indikator-elementet som viser aktiv fane */
  @query('.tab-group__indicator') indicator!: HTMLElement;
  static styles = [styles];

  constructor() {
    super();
  }

  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined('nve-tab'),
      customElements.whenDefined('nve-tab-panel'),
    ]);
    super.connectedCallback();
    this.mutationObserver = new MutationObserver((mutations) => {
      // sjekker om aria-labels trenger en oppdatering
      if (mutations.some((m) => !['aria-labelledby', 'aria-controls'].includes(m.attributeName!))) {
        setTimeout(() => this.setAriaLabels());
      }

      // Dersom en tab disables/enables
      if (mutations.some((m) => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
      this.repositionIndicator();
    });
    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
    });

    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      // Wait for tabs and tab panels to be registered
      whenAllDefined.then(() => {
        this.setAriaLabels();
        this.setActiveTab(this.getActiveTab() ?? this.tabs[0]);
      });
    });
  }
  protected getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return [...(slot.assignedElements() as NveTab[])].filter((el) => {
      return options.includeDisabled
        ? el.tagName.toLowerCase() === 'nve-tab'
        : el.tagName.toLowerCase() === 'nve-tab' && !el.disabled;
    });
  }

  protected getAllPanels() {
    return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === 'nve-tab-panel') as [
      NveTabPanel,
    ];
  }

  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: false });
    this.panels = this.getAllPanels();
    this.syncIndicator();
  }
  private setAriaLabels() {
    // Linker tabs og tab-panel
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id')!);
        panel.setAttribute('aria-labelledby', tab.getAttribute('id')!);
      }
    });
  }

  syncIndicator() {
    const tab = this.getActiveTab();
    if (tab) {
      this.indicator.style.display = 'block';
      this.repositionIndicator();
    } else {
      this.indicator.style.display = 'none';
    }
  }

  private getActiveTab() {
    return this.tabs.find((el) => el.active);
  }

  private setActiveTab(tab: NveTab) {
    if (tab !== this.activeTab && !tab.disabled) {
      this.activeTab = tab;
      // Sync active tab and panel
      this.tabs.forEach((el) => (el.active = el === this.activeTab));
      this.panels.forEach((el) => (el.active = el.name === this.activeTab?.panel));
      this.syncIndicator();
    }
  }
  private repositionIndicator() {
    const currentTab = this.getActiveTab();

    if (!currentTab) {
      return;
    }

    let width = currentTab.clientWidth;
    const gap = this.tabsholder.computedStyleMap().get('gap')?.toString();

    let left = currentTab.offsetLeft - currentTab.parentElement!.offsetLeft;

    if (gap) {
      const gapNumeric = Number(gap.replace('px', ''));
      left -= gapNumeric;
      width += 2 * gapNumeric;
    }
    this.indicator.style.width = `${width}px`;
    this.indicator.style.height = 'auto';
    this.indicator.style.translate = `${left}px`;
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('nve-tab');
    const tabGroup = tab?.closest('nve-tab-group');
    // Sjekk at vi er i riktig tab-group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this.setActiveTab(tab);
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('nve-tab');
    const tabGroup = tab?.closest('nve-tab-group');
    // Sjekk at vi er i riktig tab-group
    if (tabGroup !== this) {
      return;
    }

    // Aktiver tab med Enter eller space
    if (['Enter', ' '].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab);
        event.preventDefault();
      }
    }

    // Bytt tab med piler, end, home
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const activeEl = this.tabs.find((t) => t.matches(':focus'));
      if (activeEl?.tagName.toLowerCase() === 'nve-tab') {
        let index = this.tabs.indexOf(activeEl);
        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = this.tabs.length - 1;
        } else if (event.key === 'ArrowLeft') {
          index--;
        } else if (event.key === 'ArrowRight') {
          index++;
        }
        if (index < 0) {
          index = this.tabs.length - 1;
        }

        if (index > this.tabs.length - 1) {
          index = 0;
        }
        this.tabs[index].focus({ preventScroll: true });
        this.setActiveTab(this.tabs[index]);
        event.preventDefault();
      }
    }
  }

  render() {
    return html`
      <div part="base" class="tab-group" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <div class="tab-group__nav" part="nav">
          <div part="tabs" class="tab-group__tabs" role="tablist">
            <div part="active-tab-indicator" class="tab-group__indicator"></div>
            <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
          </div>
        </div>
        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-group': NveTabGroup;
  }
}
