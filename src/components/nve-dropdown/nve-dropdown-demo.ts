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
      <nve-menu-item type="checkbox" checked>Tekst</nve-menu-item>
      <nve-divider></nve-divider>
      <nve-menu-item>Tekst</nve-menu-item>
    </nve-menu>
  </nve-dropdown>
      
   
`;

export default table;
