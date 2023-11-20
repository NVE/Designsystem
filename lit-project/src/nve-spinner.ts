import { customElement } from 'lit/decorators.js';
import { SlSpinner } from '@shoelace-style/shoelace';
import './varsom.css';

@customElement('nve-spinner')
export class NveSpinner extends SlSpinner {}

declare global {
  interface HTMLElementTagNameMap {
    'nve-spinner': NveSpinner;
  }
}
