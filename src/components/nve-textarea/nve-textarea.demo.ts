import { html } from 'lit';

const validateInputFieldDemo = (e: any) => {
  e.preventDefault();
  const inputElement = document.getElementById('demoTextAreaVal') as HTMLInputElement;
  if (!inputElement) return;
  if (!inputElement.value) {
    inputElement.setCustomValidity('Feil svar');
  } else {
    inputElement.setCustomValidity('');
  }
};
export default html`
  <hr />
  <h3 id="nve-textarea">nve-textarea</h3>
  <table class="demo">
    <thead>
      <th></th>
      <th>filled = false</th>
      <th>filled = true</th>
    </thead>
    <tbody>
      <tr>
        <td>Standard</td>
        <td>
          <nve-textarea placeholder="Placeholder" value=""></nve-textarea>
        </td>
        <td>
          <nve-textarea placeholder="Placeholder" filled value=""></nve-textarea>
        </td>
      </tr>
      <tr>
        <td>Skrivebeskyttet</td>
        <td>
          <nve-textarea readonly label="Label" value="Tekst"></nve-textarea>
        </td>
        <td>
          <nve-textarea readonly filled label="Label" value="Tekst"></nve-textarea>
        </td>
      </tr>
      <tr>
        <td>Deaktivert</td>
        <td>
          <nve-textarea disabled label="Label" tooltip="tooltip tekst" value="Tekst"></nve-textarea>
        </td>
        <td>
          <nve-textarea disabled filled label="Label" tooltip="tooltip tekst" value="Tekst"></nve-textarea>
        </td>
      </tr>
      <tr>
        <td>Obligatorisk</td>
        <td>
          <nve-textarea required helpText="Må skrive noe" value="Tekst"></nve-textarea>
        </td>
        <td>
          <nve-textarea required filled helpText="Må skrive noe" value="Tekst"></nve-textarea>
        </td>
      </tr>
      <tr>
        <td>Antall rader</td>
        <td>
          <nve-textarea label="rows satt til 10" value="Tekst" rows="10"></nve-textarea>
        </td>
        <td>
          <nve-textarea filled label="rows satt til 10" value="Tekst" rows="10"></nve-textarea>
        </td>
      </tr>
    </tbody>
  </table>
  <h3>nve-textarea constraint validering</h3>
  <form>
    <nve-textarea label="Validering" errorMessage="Kan ikke stå tom" helpText="Skriv noe tekst" required></nve-textarea>
    <nve-button style="margin-top:10px" type="submit" variant="primary" size="small">Submit</nve-button>
  </form>
  <h3>nve-textarea custom validering</h3>
  <form @submit="${(e: any) => validateInputFieldDemo(e)}">
    <nve-textarea required label="Validering" @sl-blur="${validateInputFieldDemo}" id="demoTextAreaVal"></nve-textarea>
    <nve-button style="margin-top:10px" type="submit" variant="primary" size="small">Submit</nve-button>
  </form>
`;
