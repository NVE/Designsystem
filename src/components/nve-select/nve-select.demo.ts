import { html } from 'lit';

/**
 * Demonstrasjon av nve-select
 */

/** Lurt å nullstille validering på sl-change når man velger et alternativ */
const resetValidation = () => {
  const selectElement = document.getElementById('demoSelect') as HTMLSelectElement;
  if (!selectElement) return;
  selectElement.setCustomValidity('');
};

const validateSelectDemo = (e: any) => {
  e.preventDefault();
  const selectElement = document.getElementById('demoSelect') as HTMLSelectElement;
  if (!selectElement.value) {
    selectElement.setCustomValidity('Du må velge et alternativ');
  } else {
    resetValidation();
  }
};
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
          <nve-select clear-icon>
            <nve-label value="Hjelpetekst" slot="label" tooltip="Hjelpetekst"></nve-label>
            <nve-option value="option-1">Option 1</nve-option>
            <nve-option value="option-2">Option 2</nve-option>
            <nve-option value="option-3">Option 3</nve-option>
            <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
          </nve-select>
        </td>
        <td>
          <nve-select filled clear-icon>
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
  <h3 id="nve-select-validering">nve-select constraint validering</h3>
  <form @submit="${(e: any) => validateSelectDemo(e)}" style="max-width: 300px">
    <nve-select required errorMessage="Må velge et alternativ" id="demo" clear-icon @sl-change="${resetValidation}">
      <nve-label value="Hjelpetekst" slot="label" tooltip="Hjelpetekst"></nve-label>
      <nve-option value="option-1">Option 1</nve-option>
      <nve-option value="option-2">Option 2</nve-option>
      <nve-option value="option-3">Option 3</nve-option>
      <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
    </nve-select>
    <nve-button style="margin-top: 10px" variant="primary" type="submit" size="small">Submit</nve-button>
  </form>
  <h3 id="nve-select-validering">nve-select custom validering (med blur)</h3>
  <form @submit="${(e: any) => validateSelectDemo(e)}" style="max-width: 300px">
    <nve-select required id="demoSelect" clear-icon @sl-change="${resetValidation}">
      <nve-label value="Hjelpetekst" slot="label" tooltip="Hjelpetekst"></nve-label>
      <nve-option value="option-1">Option 1</nve-option>
      <nve-option value="option-2">Option 2</nve-option>
      <nve-option value="option-3">Option 3</nve-option>
      <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
    </nve-select>
    <nve-button style="margin-top: 10px" variant="primary" type="submit" size="small">Submit</nve-button>
  </form>
`;

export default table;
