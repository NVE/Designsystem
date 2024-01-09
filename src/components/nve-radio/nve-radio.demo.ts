import { html } from 'lit';
const table = html`
  <hr />
  <h3>Radio</h3>
  <p>Radios should _not_ be used without label.</p>
  <p>Click here and press tab to see focus.</p>

  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Unchecked</th>
        <th>Checked</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>
          <nve-radio-group value="0">
            <nve-radio value="1">Unchecked</nve-radio>
          </nve-radio-group>
        </td>
        <td>
          <nve-radio-group value="1">
            <nve-radio value="1">Checked The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <nve-radio-group value="0">
            <nve-radio value="1" disabled>
              Unchecked The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."
            </nve-radio>
          </nve-radio-group>
        </td>
        <td>
          <nve-radio-group value="1">
            <nve-radio value="1" disabled>Checked</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
    </tbody>
  </table>

  <h3>Radio-group</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>
          <nve-radio-group orientation="horizontal" value="1" label="Horizontal">
            <nve-radio value="1">Value</nve-radio>
            <nve-radio value="2">Value</nve-radio>
            <nve-radio value="3">Value</nve-radio>
            <nve-radio value="4">Value</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <nve-radio-group orientation="vertical" value="2" label="Vertical (small)">
            <nve-radio value="1">Value The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
            <nve-radio value="2">Value The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
            <nve-radio value="3">Value</nve-radio>
            <nve-radio value="4">Value</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <nve-radio-group required orientation="vertical" value="3">
            <label slot="label">
              <nve-label light size="x-small" required value="Slot med NVE-label">
                <div slot="tooltip">Hjelpetekst i <strong>HTML</strong></div>
              </nve-label>
            </label>
            <nve-radio value="1">Value</nve-radio>
            <nve-radio value="2">Value The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
            <nve-radio value="3">Value</nve-radio>
            <nve-radio value="4">Value</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <nve-radio-group required size="small" orientation="horizontal">
            <label slot="label">
              <span style="font-family:consolas;">Horizontal, required (small) with <b>slotted</b> label</span>
            </label>
            <nve-radio value="1">Value</nve-radio>
            <nve-radio value="2">Value The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
            <nve-radio value="3">Value</nve-radio>
            <nve-radio value="4">Value</nve-radio>
          </nve-radio-group>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h3>nve-radio-group validering</h3>
  <form>
    <nve-radio-group errorMessage="Kan ikke stå tom" required size="small" orientation="horizontal">
      <label slot="label">
        <span style="font-family:consolas;">Horizontal, required (small) with <b>slotted</b> label</span>
      </label>
      <nve-radio value="1">Value</nve-radio>
      <nve-radio value="2">Value The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."</nve-radio>
      <nve-radio value="3">Value</nve-radio>
      <nve-radio value="4">Value</nve-radio>
    </nve-radio-group>
    <nve-button style="margin-top: 10px" variant="primary" size="small" type="submit">submit</nve-button>
  </form>
`;

export default table;
