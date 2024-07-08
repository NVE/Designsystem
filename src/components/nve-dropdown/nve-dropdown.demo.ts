import { html } from 'lit';

/**
 * Demonstrasjon av nve-dropdown
 */
const table = html`
  <hr />
  <h3 id="nve-dropdown">nve-dropdown</h3>
  <nve-dropdown>
    <nve-button variant="primary" slot="trigger">
    <nve-icon name="expand_more" slot="suffix"></nve-icon>
    Dropdown</nve-button>
    <nve-menu>
      <nve-menu-item >Tekst</nve-menu-item>
      <nve-menu-item subtext='Dette er en undertekst'>Tekstrrrrrrrrrr</nve-menu-item>
      <nve-menu-item> 
            <nve-checkbox >Tekst</nve-checkbox>
      </nve-menu-item>
      <nve-divider></nve-divider>
      <nve-menu-item>Tekst</nve-menu-item>
    </nve-menu>
  </nve-dropdown>
      
  <nve-dropdown  width="500px">
    <nve-button variant="primary" slot="trigger"  
      customStyle="width: 400px; display: flex; justify-content: space-between; "
      slotStyle="slot:prefix { display: none; }; slot:label { padding-left: 8px; };"
    >

    <nve-icon name="expand_more" slot="suffix" ></nve-icon>
    Dropdown med custom css </nve-button>
    <nve-menu>
      <nve-menu-item  customStyle="width: 400px;">Tekst</nve-menu-item>
    </nve-menu>
  </nve-dropdown> 
`;

export default table;
