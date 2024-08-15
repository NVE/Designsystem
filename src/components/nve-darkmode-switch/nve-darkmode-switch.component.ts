import { INveComponent } from '@interfaces/NveComponent.interface';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Komponent for å sette .darkmode-klasse på root.
 * Må kun være en av dem på siden, de vil ikke synkronisere data.
 *
 * Hvorvidt bruker foretrekker dark-mode eller ikke hentes fra browser via "prefers-color-scheme".
 * Dersom bruker setter darkmode ved å klikke på komponenten, lagres valget i localstorage.
 *
 * Man kan bruke "darkmodeclass" for å sette klassen som legges til dersom den ikke er "darkmode"
 */

@customElement('nve-darkmode-switch')
export default class NveDarkmodeSwitch extends LitElement implements INveComponent {
  constructor() {
    super();
  }
  @property({ reflect: true, type: String }) testId: string = '';
  @property({ attribute: false, type: Boolean }) darkmode = false;
  @property({ attribute: true, type: String }) darkmodeclass = 'darkmode';

  localStorageVariable = 'preferdarkmode';

  private toggleDarkmode(event: CustomEvent) {
    this.darkmode = !!(event.target! as HTMLInputElement).checked;
    localStorage.setItem(this.localStorageVariable, this.darkmode.toString());
    if (this.darkmode) {
      document.documentElement.classList.add(this.darkmodeclass);
    } else {
      document.documentElement.classList.remove(this.darkmodeclass);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const lsDarkmodeString = localStorage.getItem(this.localStorageVariable);
    let darkModePreferred = false;
    if (lsDarkmodeString === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkModePreferred = true;
      }
    } else {
      darkModePreferred = lsDarkmodeString === 'true';
    }

    if (darkModePreferred) {
      this.darkmode = true;
      document.documentElement.classList.add(this.darkmodeclass);
    } else {
      this.darkmode = false;
      document.documentElement.classList.remove(this.darkmodeclass);
    }
  }

  render(): TemplateResult {
    return html`<nve-switch @change=${this.toggleDarkmode} ?checked=${this.darkmode}>
      <nve-icon slot="onicon" name="dark_mode"></nve-icon>
      <nve-icon slot="officon" name="light_mode"></nve-icon>
    </nve-switch>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-darkmode-switch': NveDarkmodeSwitch;
  }
}
