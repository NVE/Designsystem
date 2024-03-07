import { html } from 'lit';

export default html`
  <hr />
  <h3 id="nve-badge">nve-badge</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Small</th>
        <th>Medium</th>
        <th>Large</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Neutral</td>
        <td><nve-badge variant="neutral" size="small">Ikke påbegynt</nve-badge></td>
        <td><nve-badge variant="neutral">Ikke påbegynt</nve-badge></td>
        <td><nve-badge variant="neutral" size="large">Ikke påbegynt</nve-badge></td>
      </tr>
      <tr>
        <td>Brand</td>
        <td><nve-badge variant="brand" size="small">Ikke påbegynt</nve-badge></td>
        <td><nve-badge variant="brand">Ikke påbegynt</nve-badge></td>
        <td><nve-badge variant="brand" size="large">Ikke påbegynt</nve-badge></td>
      </tr>
      <tr>
        <td>Primary</td>
        <td><nve-badge size="small">Under behandling</nve-badge></td>
        <td><nve-badge>Under behandling</nve-badge></td>
        <td><nve-badge size="large">Under behandling</nve-badge></td>
      </tr>
      <tr>
        <td>Success</td>
        <td><nve-badge variant="success" size="small">Ferdig</nve-badge></td>
        <td><nve-badge variant="success">Ferdig</nve-badge></td>
        <td><nve-badge variant="success" size="large">Ferdig</nve-badge></td>
      </tr>
      <tr>
        <td>Danger</td>
        <td><nve-badge variant="danger" size="small">Fjernet</nve-badge></td>
        <td><nve-badge variant="danger">Fjernet</nve-badge></td>
        <td><nve-badge variant="danger" size="large">Fjernet</nve-badge></td>
      </tr>
      <tr>
        <td>Warning</td>
        <td><nve-badge variant="warning" size="small">1</nve-badge></td>
        <td><nve-badge variant="warning">1</nve-badge></td>
        <td><nve-badge variant="warning" size="large">1</nve-badge></td>
      </tr>
      <tr>
        <td>Low Neutral</td>
        <td><nve-badge low variant="neutral" size="small">Ikke påbegynt</nve-badge></td>
        <td><nve-badge low variant="neutral">Ikke påbegynt</nve-badge></td>
        <td><nve-badge low variant="neutral" size="large">Ikke påbegynt</nve-badge></td>
      </tr>
      <tr>
        <td>Low Brand</td>
        <td><nve-badge low variant="brand" size="small">Under behandling</nve-badge></td>
        <td><nve-badge low variant="brand">Under behandling</nve-badge></td>
        <td><nve-badge low variant="brand" size="large">Under behandling</nve-badge></td>
      </tr>
      <tr>
        <td>Low Primary</td>
        <td><nve-badge low size="small">Under behandling</nve-badge></td>
        <td><nve-badge low>Under behandling</nve-badge></td>
        <td><nve-badge low size="large">Under behandling</nve-badge></td>
      </tr>
      <tr>
        <td>Low Success</td>
        <td><nve-badge low variant="success" size="small">Ferdig</nve-badge></td>
        <td><nve-badge low variant="success">Ferdig</nve-badge></td>
        <td><nve-badge low variant="success" size="large">Ferdig</nve-badge></td>
      </tr>
      <tr>
        <td>Low Danger</td>
        <td><nve-badge low variant="danger" size="small">Fjernet</nve-badge></td>
        <td><nve-badge low variant="danger">Fjernet</nve-badge></td>
        <td><nve-badge low variant="danger" size="large">Fjernet</nve-badge></td>
      </tr>
      <tr>
        <td>Low Warning</td>
        <td><nve-badge low variant="warning" size="small">Feil</nve-badge></td>
        <td><nve-badge low variant="warning">Feil</nve-badge></td>
        <td><nve-badge low variant="warning" size="large">Feil</nve-badge></td>
      </tr>
      <tr>
        <td>Badge inn i knappen</td>
        <td>
          <nve-button>Button <nve-badge>Badge</nve-badge></nve-button>
        </td>
      </tr>
    </tbody>
  </table>
`;
