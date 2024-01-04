import { html } from 'lit';

/**
 * Demonstrasjon av nve-menu-item
 */
const table = html`
  <hr />
  <h3 id="nve-menu-item">nve-menu-item</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Standard</th>
        <th>Indent</th>
        <th>Divider top</th>
        <th>Divider button</th>
        <th>Subtext</th>
        <th>Checkbox</th>
        <th>Category</th>
        <th>Submenu</th>
        <th>Disabled</th>
        <th>Divider</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>
            <nve-menu-item >Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item indent>Undertittel</nve-menu-item>
        </td>
        <td>
        <nve-menu-item dividerTop>Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item dividerBottom>Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item subtext="Ekstratekst">Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item type="checkbox" checked>Checkbox</nve-menu-item>
        </td>
        <td>
        <nve-menu-item category>Category</nve-menu-item>
        </td>
        <td>
        <nve-menu-item ->Submenu  
          <nve-menu slot="submenu">
            <nve-menu-item >Tekst 2</nve-menu-item>
            <nve-menu-item >Tekst 3</nve-menu-item>
            <nve-menu-item >Tekst 4</nve-menu-item>
          </nve-menu>
        </nve-menu-item>
        </td>
        <td>
        <nve-menu-item disabled>disabled</nve-menu-item>
        </td>
        <td>
        <nve-divider></nve-divider>
        </td>
      </tr>   

      <tr>
        <td>Icon</td>
        <td>
            <nve-menu-item >    <nve-icon slot="prefix" name="info"></nve-icon> Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item indent><nve-icon slot="prefix" name="info"></nve-icon> Undertittel</nve-menu-item>
        </td>
        <td>
        <nve-menu-item dividerTop><nve-icon slot="prefix" name="info"></nve-icon> Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item dividerBottom><nve-icon slot="prefix" name="info"></nve-icon> Tekst</nve-menu-item>
        </td>
        <td>
        <nve-menu-item subtext="Ekstratekst"><nve-icon slot="prefix" name="info"></nve-icon> Tekst</nve-menu-item>
        </td>
        <td>
        
        </td>
        <td>
        <nve-menu-item category><nve-icon slot="prefix" name="info"></nve-icon> Category</nve-menu-item>
        </td>
        <td>
        <nve-menu-item> <nve-icon slot="prefix" name="info"></nve-icon> Submenu
          <nve-menu slot="submenu">
            <nve-menu-item >Tekst 2</nve-menu-item>
            <nve-menu-item >Tekst 3</nve-menu-item>
            <nve-menu-item >Tekst 4</nve-menu-item>
          </nve-menu>
        </nve-menu-item>
        </td>
        <td>
        <nve-menu-item disabled><nve-icon slot="prefix" name="info"></nve-icon> disabled</nve-menu-item>
        </td>
        <td>
       
        </td>
      </tr>   
     
    </tbody>
  </table>
`;

export default table;
