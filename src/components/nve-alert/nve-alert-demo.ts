import { html } from 'lit';

/**
 * Demonstrasjon av nve-alert
 */
const table = html`
  <hr />
  <h3 id="nve-alert">nve-alert</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Default</th>
        <th>Left stroke</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Standard</td>
        <td>
          <nve-alert title="Info tittel" text="some text" variant="primary" open closable>
            <nve-icon slot="icon" name="info"></nve-icon>
          </nve-alert>
          <nve-alert title="Info tittel" text="some text" variant="danger" open closable>
            <nve-icon slot="icon" name="error"></nve-icon>
          </nve-alert>
          <nve-alert title="Info tittel" text="some text" variant="neutral" open closable>
            <nve-icon slot="icon" name="help"></nve-icon>
          </nve-alert>
          <nve-alert title="Info tittel" text="some text" variant="success" open closable>
            <nve-icon slot="icon" name="check_circle"></nve-icon>
          </nve-alert>
          <nve-alert title="Info tittel" text="some text" variant="warning" open closable>
            <nve-icon slot="icon" name="warning"></nve-icon>
          </nve-alert>
        </td>
        <td>
          <nve-alert leftStroke title="Info tittel" text="some text" variant="primary" open closable>
            <nve-icon slot="icon" name="info"></nve-icon>
          </nve-alert>
          <nve-alert leftStroke title="Info tittel" text="some text" variant="danger" open closable>
            <nve-icon slot="icon" name="error"></nve-icon>
          </nve-alert>
          <nve-alert leftStroke title="Info tittel" text="some text" variant="neutral" open closable>
            <nve-icon slot="icon" name="help"></nve-icon>
          </nve-alert>
          <nve-alert leftStroke title="Info tittel" text="some text" variant="success" open closable>
            <nve-icon slot="icon" name="check_circle"></nve-icon>
          </nve-alert>
          <nve-alert leftStroke title="Info tittel" text="some text" variant="warning" open closable>
            <nve-icon slot="icon" name="warning"></nve-icon>
          </nve-alert>
        </td>
      </tr>
      <tr>
        <td>Emphasized</td>
        <td>
          <nve-alert emphasized title="Info tittel" text="some text" variant="primary" open closable>
            <nve-icon slot="icon" name="info"></nve-icon>
          </nve-alert>
          <nve-alert emphasized title="Info tittel" text="some text" variant="danger" open closable>
            <nve-icon slot="icon" name="error"></nve-icon>
          </nve-alert>
          <nve-alert emphasized title="Info tittel" text="some text" variant="neutral" open closable>
            <nve-icon slot="icon" name="help"></nve-icon>
          </nve-alert>
          <nve-alert emphasized title="Info tittel" text="some text" variant="success" open closable>
            <nve-icon slot="icon" name="check_circle"></nve-icon>
          </nve-alert>
          <nve-alert emphasized title="Info tittel" text="some text" variant="warning" open closable>
            <nve-icon slot="icon" name="warning"></nve-icon>
          </nve-alert>
        </td>
        <td>
          <nve-alert emphasized leftStroke title="Info tittel" text="some text" variant="primary" open closable>
            <nve-icon slot="icon" name="info"></nve-icon>
          </nve-alert>
          <nve-alert emphasized leftStroke title="Info tittel" text="some text" variant="danger" open closable>
            <nve-icon slot="icon" name="error"></nve-icon>
          </nve-alert>
          <nve-alert emphasized leftStroke title="Info tittel" text="some text" variant="neutral" open closable>
            <nve-icon slot="icon" name="help"></nve-icon>
          </nve-alert>
          <nve-alert emphasized leftStroke title="Info tittel" text="some text" variant="success" open closable>
            <nve-icon slot="icon" name="check_circle"></nve-icon>
          </nve-alert>
          <nve-alert emphasized leftStroke title="Info tittel" text="some text" variant="warning" open closable>
            <nve-icon slot="icon" name="warning"></nve-icon>
          </nve-alert>
        </td>
      </tr>
    </tbody>
  </table>
`;

export default table;
