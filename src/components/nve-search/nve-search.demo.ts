
  import { html } from 'lit';

  /**
 * Demonstrasjon av nve-search
 */
const table = html`
<hr />
<h3 id="nve-search">nve-search</h3>
<table class="demo">
<thead>
      <tr>
        <th></th>
        <th>default</th>
        <th>grey</th>
        <th>grey-outlined</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>Med ikon:</td>
        <td>
          <nve-search placeholder="Søk">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk" variant="grey">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk" variant="grey-outlined">
            <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
      </tr>
      <tr>
        <td>Uten ikon:</td>
        <td>
          <nve-search placeholder="Søk">
          </nve-search>
       </td>
       <td>
          <nve-search placeholder="Søk" variant="grey">
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk" variant="grey-outlined">
          </nve-search>
        </td>
      </tr>
    </tbody>
</table>`
  export default table;