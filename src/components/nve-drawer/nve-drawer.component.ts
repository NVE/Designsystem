import { customElement, property } from 'lit/decorators.js';
import { INveComponent } from '@interfaces/NveComponent.interface';
import styles from './nve-drawer.styles';
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.js';

/**
 * Bruk denne hvor du trenger en skuff, enten for hele siden eller mer lokalisert inne i en boks.
 */
@customElement('nve-drawer')
export default class NveDrawer extends SlDrawer implements INveComponent {
  @property({ reflect: true, type: String }) testId: string | undefined = undefined;

  static styles = [SlDrawer.styles, styles];

  constructor() {
    super();
  }

  firstUpdated() {
    super.firstUpdated();
    this.updateCloseIcon();
  }

  private updateCloseIcon() {
    requestAnimationFrame(() => {
      const closeButtonPart = this?.shadowRoot?.querySelector('[part="close-button"]');
      const closeButton = closeButtonPart?.shadowRoot?.querySelector('button') as HTMLElement | null;

      if (!closeButton) return;

      closeButton.style.color = 'inherit';

      const placementToIconNameMap: Record<string, string> = {
        start: 'left_panel_close',
        end: 'right_panel_close',
        top: 'top_panel_close',
        bottom: 'bottom_panel_close',
      };

      const nveIcon = document.createElement('nve-icon');

      nveIcon.setAttribute('name', placementToIconNameMap[this.placement]);

      closeButton.replaceChildren(nveIcon);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-drawer': NveDrawer;
  }
}
