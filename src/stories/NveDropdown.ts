import { html } from 'lit';

export const NveDropdown = () => {
  return html`
        <nve-dropdown>
      <nve-button variant="primary" slot="trigger">
        <nve-icon name="expand_more" slot="suffix"></nve-icon>
        Dropdown</nve-button>
      <nve-menu>
        <nve-menu-item subtext="Ekstratekst">Tekst 1</nve-menu-item>
        <nve-menu-item dividerTop>Tekst 2</nve-menu-item>
        <nve-menu-item dividerBottom>Tekst 3</nve-menu-item>
        <nve-menu-item level2>Tekst 4</nve-menu-item>
        <nve-menu-item category>Category</nve-menu-item>
        <nve-menu-item type="checkbox" checked>Checkbox</nve-menu-item>
        <nve-menu-item disabled>Disabled</nve-menu-item>
        <nve-menu-item> Submenu
        <nve-menu slot="submenu">
          <nve-menu-item >Tekst 2</nve-menu-item>
          <nve-menu-item >Tekst 3</nve-menu-item>
          <nve-menu-item >Tekst 4</nve-menu-item>
        </nve-menu>
      </nve-menu-item>
        <sl-divider></sl-divider>
        <nve-menu-item>
          Prefix
          <nve-icon slot="prefix" name="info"></sl-icon>
        </nve-menu-item>
        <nve-menu-item>
          Suffix Icon
          <nve-icon slot="suffix" name="info"></sl-icon>
        </nve-menu-item>
      </nve-menu>
    </nve-dropdown>
    `;
};
