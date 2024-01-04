import { html } from 'lit';

export default html`
  <hr />
  <h3>nve-checkbox</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Unchecked</th>
        <th>Checked</th>
        <th>Indeterminate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>
          <nve-checkbox>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox checked>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox indeterminate>Value</nve-checkbox>
        </td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <nve-checkbox disabled>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox disabled checked>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox disabled indeterminate>Value</nve-checkbox>
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <nve-checkbox invalid>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox invalid checked>Value</nve-checkbox>
        </td>
        <td>
          <nve-checkbox invalid indeterminate>Value</nve-checkbox>
        </td>
      </tr>
    </tbody>
  </table>
`;
