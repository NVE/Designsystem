
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
        <th>Compact</th>
        <th>Expand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Medium</td>
        <td>
          <nve-search filled placeholder="Søk">
          <nve-icon name="search" slot="prefix"></nve-icon>
          </nve-search>
        </td>
        <td>
          <nve-search placeholder="Søk"></nve-search>
        </td>
      </tr>
      </tbody>
</table>`
  export default table;