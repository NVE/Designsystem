import { html } from 'lit';

const checkedValues: string[] = [];

/**  Metoden for å teste custom validering*/
const validateCheckboxGroupDemo = (e: any) => {
  e.preventDefault();

  const chgrElement = document.getElementById('checkboxGroup') as HTMLInputElement;
  if (!chgrElement) return;
  if (!checkedValues.includes('3')) {
    chgrElement.setCustomValidity('Feil svar, må inneholde 3');
  } else {
    chgrElement.setCustomValidity('');
  }
};

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
          <nve-checkbox-group orientation="horizontal">
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
        <td>Required</td>
        <td>
          <nve-checkbox-group required orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group required label="Label" orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
        <td>
          <nve-checkbox-group required label="Label" tooltip="Help text" orientation="vertical">
            <nve-checkbox checked>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
            <nve-checkbox>Value</nve-checkbox>
          </nve-checkbox-group>
        </td>
      </tr>
    </tbody>
  </table>
  <h3>nve-checkbox-group constraint validering</h3>
  <!-- preventdefault så at nettsider ikke lastes på nytt -->
  <form onsubmit="event.preventDefault();">
    <div style="width: fit-content">
      <nve-checkbox-group required label="Label" orientation="horizontal" errorMessage="Velg minst en">
        <nve-checkbox>1</nve-checkbox>
        <nve-checkbox>2</nve-checkbox>
        <nve-checkbox>3</nve-checkbox>
      </nve-checkbox-group>
    </div>
    <nve-button style="margin-top:10px" type="submit" variant="primary" size="small">Submit</nve-button>
  </form>
  <h3>nve-checkbox-group custom validering</h3>
  <form @submit="${(e: any) => validateCheckboxGroupDemo(e)}">
    <div style="width: fit-content">
      <nve-checkbox-group
        required
        requiredLabel="*Required"
        .selectedValues=${checkedValues}
        id="checkboxGroup"
        label="Label"
        orientation="horizontal"
      >
        <nve-checkbox value="1">1</nve-checkbox>
        <nve-checkbox value="2">2</nve-checkbox>
        <nve-checkbox value="3">3</nve-checkbox>
      </nve-checkbox-group>
    </div>
    <nve-button style="margin-top:10px" type="submit" variant="primary" size="small">Submit</nve-button>
  </form>
`;
