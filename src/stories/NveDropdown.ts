import { html } from 'lit';

export const NveDropdown = () => {
  return html`
  <nve-dropdown>
    <nve-button variant="primary" slot="trigger">
    <nve-icon name="expand_more" slot="suffix"></nve-icon>
    Dropdown</nve-button>
    <nve-menu>
      <nve-menu-item >Normal tekst</nve-menu-item>
      <nve-menu-item subtext='Dette er en undertekst'>Tekst</nve-menu-item>
      <nve-menu-item type="checkbox" checked>Checkbox</nve-menu-item>
      <nve-divider></nve-divider>
      <nve-menu-item>Normal tekst</nve-menu-item>
      <nve-menu-item indent>Undertittel</nve-menu-item>
      <nve-menu-item category>Kategori</nve-menu-item>
      <nve-menu-item ->Submenu  
          <nve-menu slot="submenu">
            <nve-menu-item >Tekst 2</nve-menu-item>
            <nve-menu-item >Tekst 3</nve-menu-item>
            <nve-menu-item >Tekst 4</nve-menu-item>
          </nve-menu>
      </nve-menu-item>
      <nve-menu-item dividerTop>Divider top</nve-menu-item>
      <nve-menu-item disabled>Disabled</nve-menu-item>
      <nve-menu-item dividerBottom>Divider bottom</nve-menu-item>
      <nve-menu-item ><nve-icon slot="prefix" name="info"></nve-icon>Ikon</nve-menu-item>
    </nve-menu>
  </nve-dropdown>
    `;
};
