import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-tab-group.styles';
import { NveTab, NveTabPanel } from 'src/nve-designsystem';
import '../nve-button/nve-button.component';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Fanegruppe som viser og styrer et sett med faner og tilhørende innholdspaneler.
 * Håndterer navigasjon mellom faner, synkronisering av aktive faner og paneler, samt tilgjengelighetsegenskaper.
 * Sporet 'nav' brukes for å legge til faner, og standardsporet brukes for innholdspaneler. Foreløpig støttes kun horisontal retning på fanene.
 * Automatisk aktivering av faner (når man blar mellom fanene med tastatur) støttes ikke – det kan være uheldig fra et tilgjengelighetsperspektiv.
 * For beste praksis, les mer i seksjonen om universell utforming.
 *
 * @event nve-tab-change Når aktiv fane endres.
 *
 * @csspart base Topp-element
 * @csspart body Innholdet i tab gruppen
 *
 * @slot (nav) - legg inn faner her.
 * @slot (standard) - legg inn paneler her.
 */
@customElement('nve-tab-group')
export default class NveTabGroup extends LitElement implements INveComponent {
  @property({ type: String }) testId: string | undefined = undefined;
  /** Brukes til å sette aria-labelledby på tab gruppe hvis en tittel på tab gruppen finnes. */
  @property({ type: String }) ariaLabelId: string | null = null;
  /** Om tab gruppen skal ha bakgrunnsfarge */
  @property({ type: Boolean }) background: boolean = false;
  /** Størrelse på tab gruppen */
  @property({ type: String }) size: 'small' | 'large' = 'large'; // is default large?
  /** Den aktive fanen i tab gruppen */
  @property({ type: String, reflect: true }) activeTab: string | null = null;

  /**
   * @internal
   * Om det er overflow i tab gruppen og bruker må scrolle */
  @state() private isOverflow: boolean = false;
  /**
   * @internal
   *  Om det er mulig å scrolle tilbake */
  @state() private canScrollBack: boolean = false;
  /**
   * @internal
   * Om det er mulig å scrolle fremover */
  @state() private canScrollForward: boolean = false;
  /**
   * @internal
   * Om tab-gruppe eller noen av tabbene har background egenskap som true */
  @state() private isBackground: boolean = false;

  /** @internal */
  private tabs: NveTab[] = [];
  /** @internal */
  private panels: NveTabPanel[] = [];
  /** @internal */
  private resizeObserver?: ResizeObserver;
  /** @internal */
  private buttonContainerWidth = 40; // bredde på tab-group__nav-button

  static styles = [styles];

  firstUpdated() {
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (nav && this.resizeObserver) {
      // setter resizeObserver på tab-group__nav for å oppdatere isOverflow
      this.resizeObserver.observe(nav);
      // håndterer scroll event for å oppdatere scroll state
      nav.addEventListener('scroll', () => this.updateScrollState());
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--button-container-width', `${this.buttonContainerWidth}px`);
    // setter tablist role for tilgjengelighet. Den må settes på hostelementet derfor settes via 'this'.
    this.setAttribute('role', 'tablist');
    if (this.ariaLabelId) {
      this.setAttribute('aria-labelledby', this.ariaLabelId);
    }
    this.resizeObserver = new ResizeObserver(() => this.checkOverflow());
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (nav) {
      nav.removeEventListener('scroll', () => this.updateScrollState());
    }
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  constructor() {
    super();
  }

  /**
   * @internal
   * Håndterer klikk på faner i tab gruppen.
   * Setter aktiv fane basert på klikket element.
   * @param event Klikkeventet.
   */
  handleClick(event: MouseEvent) {
    const path = event.composedPath() as HTMLElement[];
    const tab = path.find(
      (el): el is HTMLElement & { panel?: string } =>
        el instanceof HTMLElement && el.tagName.toLowerCase() === 'nve-tab'
    );
    const tabGroup = path.find(
      (el): el is HTMLElement => el instanceof HTMLElement && el.tagName.toLowerCase() === 'nve-tab-group'
    );

    if (tabGroup !== this) {
      return;
    }

    if (tab && tab.panel) {
      this.setActiveTab(tab.panel);
    }
  }

  /**
   * @internal
   * Håndterer tastetrykk på faner i tab gruppen.
   * Setter aktiv fane basert på tastetrykket.
   * @param event Tastetrykk eventet.
   */
  handleKeyDown(event: KeyboardEvent) {
    const path = event.composedPath() as HTMLElement[];
    const tab =
      (path.find((el) => el instanceof HTMLElement && el.closest && el.closest('nve-tab') === el) as NveTab) || null;
    const tabGroup = path.find(
      (el): el is HTMLElement => el instanceof HTMLElement && el.tagName.toLowerCase() === 'nve-tab-group'
    );

    if (tabGroup !== this) {
      return;
    }

    // Aktiver en fane med Enter eller Space
    if (['Enter', ' '].includes(event.key)) {
      if (tab && tab.panel) {
        this.setActiveTab(tab.panel);
        event.preventDefault();
      }
    }

    // Håndterer navigering med piltaster. Home og End for å navigere til første og siste fane.
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const activeTab = this.tabs.find((t) => t === tab);
      if (!activeTab) return;
      const currentIdx = this.tabs.indexOf(activeTab);
      let nextTab: NveTab | undefined;

      if (event.key === 'ArrowLeft') {
        nextTab = currentIdx > 0 ? this.tabs[currentIdx - 1] : this.tabs[this.tabs.length - 1];
      }
      if (event.key === 'ArrowRight') {
        nextTab = currentIdx < this.tabs.length - 1 ? this.tabs[currentIdx + 1] : this.tabs[0];
      }

      if (event.key === 'Home') {
        nextTab = this.tabs[0];
      }

      if (event.key === 'End') {
        nextTab = this.tabs[this.tabs.length - 1];
      }

      if (nextTab) {
        nextTab.focus();
        event.preventDefault();
      }
    }
  }

  /**
   * Henter alle paneler i tab gruppen.
   * @returns En liste over alle paneler i tab gruppen.
   */
  private getPanels(): NveTabPanel[] {
    const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement | null;
    if (!slot) return [];
    const panels = slot
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName.toLowerCase() === 'nve-tab-panel') as NveTabPanel[];
    return panels;
  }

  /**
   * Henter alle faner i tab gruppen.
   * @returns En liste over alle faner i tab gruppen.
   */
  private getTabs(): NveTab[] {
    const slot = this.shadowRoot?.querySelector('slot[name="nav"]') as HTMLSlotElement | null;
    if (!slot) return [];
    const tabs = slot
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName.toLowerCase() === 'nve-tab') as NveTab[];
    return tabs;
  }

  /** Setter aria-selected og tabindex på fanene. Kun aktiv fane skal bli fokusert. Gjemmer inaktive paneller.
   * Sender en nve-tab-change event med navnet på den aktive fanen.
   * @param panelName Navnet på panelet som skal aktiveres.
   */
  private setActiveTab(panelName: string) {
    this.tabs.forEach((tab) => tab.setAttribute('aria-selected', `${tab.panel === panelName}`));
    this.tabs.forEach((tab) => tab.setAttribute('tabindex', tab.panel === panelName ? '0' : '-1'));
    this.panels.forEach((panel) => panel.classList.toggle('tab-panel--hidden', panel.name !== panelName));
    this.activeTab = panelName;
    //bruker requestAnimationFrame for å sikre at alle endringene er oppdatert før vi måler indikatøren
    requestAnimationFrame(() => {
      this.updateIndicator();
    });
    this.dispatchEvent(
      new CustomEvent('nve-tab-change', {
        detail: panelName,
        bubbles: true,
        composed: true,
      })
    );
  }

  private updateIndicator() {
    if (this.isBackground) return;
    const nav = this.shadowRoot?.querySelector('.tab-group__nav') as HTMLElement;
    const activeTab = this.tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') as HTMLElement;
    if (nav && activeTab) {
      const offset = activeTab.offsetLeft - activeTab.parentElement!.offsetLeft;
      const width = activeTab.offsetWidth;

      nav.style.setProperty('--indicator-x', `${offset}px`);
      nav.style.setProperty('--indicator-width', `${width}px`);
    }
  }

  /**
   * Setter aria-controls og aria-labelledby attributter på faner og paneler.
   * Dette er viktig for tilgjengelighet slik at skjermlesere kan forstå sammenhengen mellom faner og deres tilhørende paneler.
   */
  private setAriaLabels() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);
      }
    });
  }

  /**
   * Oppdaterer faner og paneler i tab gruppen.
   * Kalles når komponenten oppdateres eller når faner/paneler endres.
   */
  private async syncTabsAndPanels() {
    await customElements.whenDefined('nve-tab');
    await customElements.whenDefined('nve-tab-panel');
    this.tabs = this.getTabs();
    this.panels = this.getPanels();
    this.setAriaLabels();
    this.removeTabIndexFromScrollButtons();
    this.tabs.forEach((tab) => {
      tab.background = tab.background ? tab.background : this.background;
    });
    this.isBackground = this.tabs.some((tab) => tab.background) || this.background;

    // setter størrelse på faner
    this.tabs.forEach((tab) => {
      tab.size = this.size;
    });

    // hvis activeTab er null, sett den første fanen som aktiv
    if (!this.activeTab) {
      const firstTabPanelId = this.tabs.length > 0 ? this.tabs[0].panel : null;
      if (firstTabPanelId) {
        this.setActiveTab(firstTabPanelId);
      }
    } else {
      this.setActiveTab(this.activeTab);
    }
  }

  /**
   * Fjerner tabindex fra scroll knappene. Scroll knappene gir mening kun til mus brukere. Derfor for å unngå
   * forvirring av tastatur brukere, fjerner vi tabindex fra knappene. Tastatur brukere kan bruke piltaster for å navigere mellom faner.
   */
  private removeTabIndexFromScrollButtons() {
    const backButton = this.shadowRoot?.querySelector('.tab-group__nav-button--backward');
    const forwardButton = this.shadowRoot?.querySelector('.tab-group__nav-button--forward');

    const backNveButton = backButton?.querySelector('nve-button');
    const forwardNveButton = forwardButton?.querySelector('nve-button');

    const backBase = backNveButton?.shadowRoot?.querySelector('[part="base"]');
    const forwardBase = forwardNveButton?.shadowRoot?.querySelector('[part="base"]');

    if (backBase) {
      backBase.setAttribute('tabindex', '-1');
    }
    if (forwardBase) {
      forwardBase.setAttribute('tabindex', '-1');
    }
  }

  /**
   * Sjekker om tab gruppen har overflow og oppdaterer tilstanden for scroll knappene.
   * Kalles ved endring av størrelse på tab gruppen.
   */
  private checkOverflow() {
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (!nav) return;
    // Sjekker scroll bredde er høyere enn synlige element's bredde (clientWidth)
    const isOverflowing = nav.scrollWidth > nav.clientWidth;
    this.isOverflow = isOverflowing;
    this.updateScrollState();
  }

  /**
   * Oppdaterer tilstanden for scroll knappene basert på gjeldende scroll posisjon.
   * Kalles når brukeren scroller i tab gruppen.
   */
  private updateScrollState() {
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (!nav) return;
    this.canScrollBack = nav.scrollLeft > 0;
    this.canScrollForward = nav.scrollLeft + nav.clientWidth + 5 < nav.scrollWidth; //legger til 5px pga tjukk teksten i aktive faner som tuller med scroll bredde.
  }

  /**
   * Ruller navigasjonslisten fremover. Flytter den siste fanen som er full synlig (den blir den første nå).
   */
  private scrollNavForward() {
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (!nav || !this.tabs.length) return;
    const navScrollLeft = nav.scrollLeft;
    const navVisibleWidth = nav.clientWidth;
    const navRightEdge = navScrollLeft + navVisibleWidth;

    for (let tab of this.tabs) {
      const tabLeft = tab.offsetLeft;
      const tabRight = tabLeft + tab.offsetWidth;
      const isTabCut = tabRight > navRightEdge;

      if (isTabCut) {
        const prevTab = this.tabs[this.tabs.indexOf(tab) - 1];
        const prevTabLeft = prevTab ? prevTab.offsetLeft : 0;
        nav.scrollTo({
          left: prevTabLeft - this.buttonContainerWidth * 2,
          behavior: 'smooth',
        });
        return;
      }
    }
  }

  /**
   * Ruller navigasjonslisten bakover. Flytter den første fanen som er full synlig (den blir den første nå).
   */
  private scrollNavBackward() {
    const nav = this.shadowRoot?.querySelector('.tab-group__nav');
    if (!nav || !this.tabs.length) return;
    const navVisibleWidth = nav.clientWidth;
    const navScrollLeft = nav.scrollLeft;
    for (let tab of this.tabs) {
      const tabLeft = tab.offsetLeft;
      const tabRight = tabLeft + tab.offsetWidth;
      const isFirstVisible = tabLeft > navScrollLeft;
      if (isFirstVisible) {
        nav.scrollTo({
          left: tabRight - navVisibleWidth + this.buttonContainerWidth,
          behavior: 'smooth',
        });
        return;
      }
    }
  }

  render() {
    return html`
      <div
        part="base"
        class="tab-group"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        testId=${ifDefined(this.testId)}
      >
        <div class="tab-group__nav-container">
          <div class=${classMap({ 'tab-group__nav': true, 'tab-group__nav--background': this.isBackground })}>
            <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
          </div>
          <div
            aria-hidden="true"
            class=${classMap({
              'tab-group__nav-button tab-group__nav-button--backward': true,
              'tab-group__nav-button--hidden': !this.canScrollBack || !this.isOverflow,
            })}
          >
            <nve-button @click=${this.scrollNavBackward} variant="text"
              ><nve-icon name="chevron_backward"></nve-icon
            ></nve-button>
          </div>
          <div
            aria-hidden="true"
            class=${classMap({
              'tab-group__nav-button tab-group__nav-button--forward': true,
              'tab-group__nav-button--hidden': !this.canScrollForward || !this.isOverflow,
            })}
          >
            <nve-button variant="text" @click=${this.scrollNavForward}
              ><nve-icon name="chevron_forward"></nve-icon
            ></nve-button>
          </div>
        </div>
        <slot part="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-tab-group': NveTabGroup;
  }
}
