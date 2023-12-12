import { html } from 'lit';

/**
 * Demonstrasjon av nve-input
 */
const table = html`
    <hr/>
    <h3 id="nve-button">nve-button</h3>
    <table class="demo">
    <thead>
    <th>Variant</th>
  <th>Primary</th>
  <th>Secondary</th>
  <th>Outlined</th>
  <th>Ghost</th>
</thead>
  <tr>
    <td>medium</td>
    <td>
      <nve-button size="medium" variant="primary" disabled="">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="medium" variant="default">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="medium" variant="neutral" outline>I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="medium" variant="neutral">I'm a NVE-butotn</nve-button>
    </td>
  </tr>
  <tr>
    <td>large</td>
    <td>
      <nve-button size="large" variant="primary">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="large" variant="default">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="large" variant="neutral" outline>I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="large" variant="neutral">I'm a NVE-butotn</nve-button>
    </td>
  </tr>
  <tr>
    <td>small</td>
    <td>
      <nve-button size="small" variant="primary">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="small" variant="default">I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="small" variant="neutral" outline>I'm a NVE-butotn</nve-button>
    </td>
    <td>
      <nve-button size="small" variant="neutral">I'm a NVE-butotn</nve-button>
    </td>
  </tr>
  <tr>
    <td>neutral</td>
    <td colspan="4"><nve-button variant="neutral" outline> im a butotn</nve-button></td>
  </tr>
  <tr>
    <td>loading</td>
    <td colspan="4">
      <nve-button colspan="4" variant="neutral" outline loading> im a butotn</nve-button>
    </td>
  </tr>
  <tr>
    <td>loading with slot</td>
    <td colspan="4">
      <nve-button variant="neutral" outline>
        im a butotn
        <!-- Hvis vi vil ha både label og spinner kan vi ikke bruke loading property på knappen og span med suffix må renders kondisjonelt -->
        <span slot="suffix"><nve-spinner></nve-spinner></span>
      </nve-button>
      <nve-button variant="neutral" outline>
        im a butotn
        <span slot="prefix"> <nve-icon name="search"></nve-icon></span>
        <span slot="suffix"><nve-spinner></nve-spinner></span>
      </nve-button>
    </td>
  </tr>
</table> `;

export default table;
