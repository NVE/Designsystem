import { customElement } from 'lit/decorators.js';
import { SlDropdown } from '@shoelace-style/shoelace';
import styles from './nve-dropdown.styles';

@customElement('nve-dropdown')
export class NveDropdown extends SlDropdown {
    constructor() {
        super();
    }

    static styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        'nve-dropdown': NveDropdown;
    }
}
