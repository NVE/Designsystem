// main.ts (or main.js if using JavaScript)
import { html, render } from 'lit';
import './styles/imports.css';
import './styles/global.css';

const app = html`<table>
  <hr />
  <th>Variant</th>
  <th>Primary</th>
  <th>Secondary</th>
  <th>Outlined</th>
  <th>Ghost</th>
  <hr />
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
    <td><nve-button variant="neutral" outline> im a butotn</nve-button></td>
  </tr>
  <tr>
    <td>loading</td>
    <td>
      <nve-button variant="neutral" outline loading> im a butotn</nve-button>
    </td>
  </tr>
  <tr>
    <td>loading with slot</td>
    <td>
      <nve-button variant="neutral" outline>
        im a butotn
        <!-- Hvis vi vil ha både label og spinner kan vi ikke bruke loading property på knappen og span med suffix må renders kondisjonelt -->
        <span slot="suffix"><nve-spinner></nve-spinner></span>
      </nve-button>
    </td>
    <td>
      <nve-button variant="neutral" outline>
        im a butotn
        <span slot="prefix"> <nve-icon name="search"></nve-icon></span>
      </nve-button>
    </td>
  </tr>
</table> `;
render(app, document.getElementById('app')!); // Render the Lit app in the specified container
