import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import { customElement, property } from 'lit/decorators.js';
import { getTabbableBoundary } from '../../utils/tabbable';
import NveButton from '../nve-button/nve-button.component';
import NveMenu from '../nve-menu/nve-menu.component';
import styles from './nve-dropdown.styles';
import { INveComponent } from '@interfaces/NveComponent.interface';
/**
 * TODO: Beskrivelse mangler
 */
@customElement('nve-dropdown')
// @ts-expect-error - overskriving av private metoder i sl-dropdown
export default class NveDropdown extends SlDropdown implements INveComponent {
  constructor() {
    super();
  }
  static styles = [SlDropdown.styles, styles];
  @property({reflect: true, type: String}) testId:string = '';


  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === 'nve-menu') as
      | NveMenu
      | undefined;
  }

  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true }) as HTMLElement[];
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target: HTMLElement;

    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        // Shoelace buttons have to update the internal button so it's announced correctly by screen readers
        case 'nve-button':
          target = (accessibleTrigger as NveButton).button;
          break;

        default:
          target = accessibleTrigger;
      }

      target.setAttribute('aria-haspopup', 'true');
      target.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
  }
  // @ts-expect-error - overskriving av private metoder i sl-dropdown
  private handlePanelSelect = (event: CustomEvent) => {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === 'nve-menu') {
      //this.hide();
      this.focusOnTrigger();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dropdown': NveDropdown;
  }
}
