import { html } from 'lit';

/**
 * Demonstrasjon av nve-label
 */
const table = html`
  <hr />
  <h3 id="nve-label">nve-label</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>light</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Størrelse: x-small</td>
        <td>
          <nve-label size="x-small" value="En helt vanlig ledetekst"></nve-label>
        </td>
        <td>
          <nve-label light size="x-small" value="En helt vanlig ledetekst"></nve-label>
        </td>
      </tr>
      <tr>
        <td>Størrelse: small (standard)</td>
        <td>
          <nve-label value="En helt vanlig ledetekst"></nve-label>
        </td>
        <td>
          <nve-label light value="En helt vanlig ledetekst"></nve-label>
        </td>
      </tr>
      <tr>
        <td>Størrelse: medium</td>
        <td>
          <nve-label size="medium" value="En helt vanlig ledetekst"></nve-label>
        </td>
        <td>
          <nve-label light size="medium" value="En helt vanlig ledetekst"></nve-label>
        </td>
      </tr>
      <tr>
        <td>Størrelse: large</td>
        <td>
          <nve-label size="large" value="En helt vanlig ledetekst"></nve-label>
        </td>
        <td>
          <nve-label light size="large" value="En helt vanlig ledetekst"></nve-label>
        </td>
      </tr>
      <tr>
        <td>Med info-ikon og verktøyhint</td>
        <td>
          <nve-label value="Svev over ikonet" tooltip="Hjelpetekst"></nve-label>
        </td>
        <td>
          <nve-label light value="Svev over ikonet" tooltip="Hjelpetekst"></nve-label>
        </td>
      </tr>
      <tr>
        <td>Med info-ikon og verktøyhint i html</td>
        <td>
          <nve-label value="Svev over ikonet">
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
        <td>
          <nve-label light value="Svev over ikonet">
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
      </tr>
      <tr>
        <td>Med info-ikon på venstre siden</td>
        <td>
          <nve-label value="Svev over ikonet" iconLeft>
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
        <td>
          <nve-label light value="Svev over ikonet" iconLeft>
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
      </tr>
      <tr>
        <td>Med svart info-ikon</td>
        <td>
          <nve-label value="Svev over ikonet" iconColor="black">
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
        <td>
          <nve-label light value="Svev over ikonet" iconColor="black">
            <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
          </nve-label>
        </td>
      </tr>
      <tr>
        <td>Innhold i slot</td>
        <td>
          <nve-label> Ledetekst i <i>HTML</i> </nve-label>
        </td>
        <td>
          <nve-label light> Ledetekst i <i>HTML</i> </nve-label>
        </td>
      </tr>
    </tbody>
  </table>
`;

export default table;
