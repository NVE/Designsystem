import { html } from 'lit';

/**
 * Demonstrasjon av nve-tooltip
 */
const table = html`
  <hr />
  <h3 id="nve-tooltip">nve-tooltip</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Med tekst-innhold</td>
        <td>
          <nve-tooltip content="Hjelpetekst">
            <nve-button>Svev over meg</nve-button>
          </nve-tooltip>
        </td>
      </tr>
      <tr>
        <td>Med HTML-innhold</td>
        <td>
          <nve-tooltip>
            <div slot="content">Hjelpetekst i <strong>HTML</strong></div>
            <nve-button>Svev over meg</nve-button>
          </nve-tooltip>
        </td>
      </tr>
    </tbody>
  </table>
`;

export default table;
