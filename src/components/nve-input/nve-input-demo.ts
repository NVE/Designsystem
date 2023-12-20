import { html } from 'lit';

/**
 * Demonstrasjon av nve-input
 */
const table = html`
  <hr />
  <h3 id="nve-input">nve-input</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>filled = false</th>
        <th>filled = true</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Standard</td>
        <td>
          <nve-input label="Label" value="Tekst"></nve-input>
        </td>
        <td>
          <nve-input filled label="Label" value="Tekst"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Med info-ikon og verktøyhint</td>
        <td>
          <nve-input value="Tekst">
            <nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"></nve-label>
          </nve-input>
        </td>
        <td>
          <nve-input filled value="Tekst">
            <nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"></nve-label>
          </nve-input>
        </td>
      </tr>
      <tr>
        <td>Aktiv</td>
        <td>
          <nve-input clearable value="Tekst"></nve-input>
        </td>
        <td>
          <nve-input filled clearable value="Tekst"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Deaktivert</td>
        <td>
          <nve-input disabled value="Tekst"></nve-input>
        </td>
        <td>
          <nve-input filled disabled value="Tekst"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Deaktivert med ikon</td>
        <td>
          <nve-input disabled value="Tekst">
            <nve-icon slot="suffix" name="Lock"></nve-icon>
          </nve-input>
        </td>
        <td>
          <nve-input filled disabled value="Tekst">
            <nve-icon slot="suffix" name="Lock"></nve-icon>
          </nve-input>
        </td>
      </tr>
      <tr>
        <td>Skrivebeskyttet</td>
        <td>
          <nve-input readonly value="Tekst"></nve-input>
        </td>
        <td>
          <nve-input filled readonly value="Tekst"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Valideringsfeil</td>
        <td>
          <nve-input type="number" value="41" min="42" max="42"></nve-input>
        </td>
        <td>
          <nve-input filled type="number" value="41" min="42" max="42"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Passord</td>
        <td><nve-input type="password" password-toggle="true" value="hemmelig"></nve-input></td>
        <td><nve-input filled type="password" password-toggle="true" value="hemmelig"></nve-input></td>
      </tr>
      <tr>
        <td>Obligatorisk</td>
        <td>
          <nve-input required value="">
            <nve-label slot="label" label="Label"></nve-label>
          </nve-input>
        </td>
        <td>
          <nve-input filled required label="Label" value=""></nve-input>
        </td>
      </tr>
      <tr>
        <td>Obligatorisk med engelsk tekst</td>
        <td>
          <nve-input required requiredLabel="*Required" value="">
            <nve-label slot="label" label="Label"></nve-label>
          </nve-input>
        </td>
        <td>
          <nve-input filled required requiredLabel="*Required" label="Label" value=""></nve-input>
        </td>
      </tr>
      <tr>
        <td>Tall</td>
        <td><nve-input type="number" value="42"></nve-input></td>
        <td><nve-input filled type="number" value="42"></nve-input></td>
      </tr>
      <tr>
        <td>Dato</td>
        <td><nve-input type="date"></nve-input></td>
        <td><nve-input filled type="date"></nve-input></td>
      </tr>
      <tr>
        <td>Dato og tid</td>
        <td><nve-input type="datetime-local"></nve-input></td>
        <td><nve-input filled type="datetime-local"></nve-input></td>
      </tr>
      <tr>
        <td>Størrelse: Liten</td>
        <td>
          <nve-input size="small" label="small" value="small"></nve-input>
        </td>
        <td>
          <nve-input filled size="small" label="small" value="small"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Størrelse: Middels (standard)</td>
        <td>
          <nve-input label="medium" value="medium"></nve-input>
        </td>
        <td>
          <nve-input filled label="medium" value="medium"></nve-input>
        </td>
      </tr>
      <tr>
        <td>Størrelse: Stor</td>
        <td>
          <nve-input size="large" label="large" value="large"></nve-input>
        </td>
        <td>
          <nve-input filled size="large" label="large" value="large"></nve-input>
        </td>
      </tr>
    </tbody>
  </table>
`;

export default table;
