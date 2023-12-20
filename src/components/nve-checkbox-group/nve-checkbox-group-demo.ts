import { html } from 'lit';

export default html`
  <hr />
  <h3>nve-checkbox-group</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Show label: false</th>
        <th>Show label: true</th>
        <th>Show label with icon: true</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Horizontal</td>
        <td>
          <nve-checkbox-group disabled orientation="horizontal">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group label="Label" orientation="horizontal">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group label="Label" tooltip="Help text" orientation="horizontal">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
      </tr>
      <tr>
        <td>Vertical</td>
        <td>
          <nve-checkbox-group orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group label="Label" orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group label="Label" tooltip="Help text" orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
      </tr>
      <tr>
        <td>Horizontal error</td>
        <td>
          <nve-checkbox-group isValid="false" orientation="horizontal" errorMessage="Error message">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group isValid="false" label="Label" orientation="horizontal" errorMessage="Error message">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group
            isValid="false"
            label="Label"
            tooltip="Help text"
            orientation="horizontal"
            errorMessage="Error message"
          >
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
      </tr>
      <tr>
        <td>Vertical error</td>
        <td>
          <nve-checkbox-group isValid="false" orientation="vertical" errorMessage="Error message">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group isValid="false" label="Label" orientation="vertical" errorMessage="Error message">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group
            isValid="false"
            label="Label"
            tooltip="Help text"
            orientation="vertical"
            errorMessage="Error message"
          >
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
      </tr>
    </tbody>
  </table>
`;
