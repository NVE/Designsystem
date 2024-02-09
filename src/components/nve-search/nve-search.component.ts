
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

      static styles = [SlInput.styles, styles];

      constructor() {
        super();
      }

      //VIKTIG! Husk at du må importere komponent i index.ts 
      // For å vise en demonstrasjon av en komponent når vi starter appen lokalt import den i main.ts 

    }
    
    declare global {
      interface HTMLElementTagNameMap {
        'nve-search': NveSearch;
      }
    }