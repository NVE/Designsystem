import { customElement, property } from 'lit/decorators.js';
import { SlDropdown, SlSelectEvent } from '@shoelace-style/shoelace';
import { NveMenu } from '../nve-menu';
import { getTabbableBoundary } from '../../utils/tabbable';
import { NveButton } from '../nve-button/nve-button';
import styles from './nve-dropdown.styles'
import { css } from 'lit';

@customElement('nve-dropdown')
export class NveDropdown extends SlDropdown {
  @property({ type: Boolean, reflect: true }) open: boolean = false;
  constructor() {
    super();
  }
  static styles = css`
  :host(.open) {
    --icon-rotation: rotate(-180deg);
  }
`;

  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find(el => el.tagName.toLowerCase() === 'nve-menu') as
      | NveMenu
      | undefined;
  }

  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true }) as HTMLElement[];
    const accessibleTrigger = assignedElements.find(el => getTabbableBoundary(el).start);
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
  
  private handlePanelSelect = (event: SlSelectEvent) => {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === 'nve-menu') {
      //this.hide();
      this.focusOnTrigger();
    }
  };
 
  updated(changedProperties: any) {
    super.updated(changedProperties);
    if (changedProperties.has('open')) {
      if (this.open) {
        this.classList.add('open');
      } else {
        this.classList.remove('open');
      }
    }
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    'nve-dropdown': NveDropdown;
  }
}
