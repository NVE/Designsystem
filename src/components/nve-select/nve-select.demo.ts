import { html } from 'lit';

/**
 * Demonstrasjon av nve-select
 */
const table = html`
  <hr />
  <h3 id="nve-select">nve-select</h3>
  <table class="demo">
      <thead>
        <tr>
          <th></th>
          <th>Default</th>
          <th>Filled</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Standard</td>
          <td>
          <nve-select  clear-icon>
          <nve-label value="Hjelpetekst" slot="label" tooltip="Hjelpetekst"></nve-label>
          <nve-option value="option-1">Option 1</nve-option>
          <nve-option value="option-2">Option 2</nve-option>
          <nve-option value="option-3">Option 3</nve-option>
          <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
          </nve-select>
          </td>
          <td>
          <nve-select  filled clear-icon>
          <nve-label value="Hjelpetekst" slot="label" tooltip="Hjelpetekst"></nve-label>
          <nve-option value="option-1">Option 1</nve-option>
          <nve-option value="option-2">Option 2</nve-option>
          <nve-option value="option-3">Option 3</nve-option>
          <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
          </nve-select>
          </td>
        </tr>
       
       
      </tbody>
    </table>
`;

export default table;
