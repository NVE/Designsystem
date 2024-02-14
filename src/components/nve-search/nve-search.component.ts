
    import { customElement } from 'lit/decorators.js';
    import { SlInput } from '@shoelace-style/shoelace';
    import styles from './nve-search.styles';

    /**
     * En sl-input i NVE-forkledning som skal benyttes som søkefelt.
     * Mer info: https://shoelace.style/components/input
     * 
     * Merk at sl-input ikke kan benytte v-bind, men vi kan oppnå two-way binding manuelt. 
     * Se eksempel her: https://shoelace.style/frameworks/vue
     */

    @customElement('nve-search')
    export default class NveSearch extends SlInput {
      constructor() {
        super();
      }
    

    static styles = [SlInput.styles, styles];
  }
    
    declare global {
      interface HTMLElementTagNameMap {
        'nve-search': NveSearch;
      }
    }