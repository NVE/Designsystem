import { html } from 'lit';

export default html`
  <hr />
  <h3 id="nve-button">nve-button</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th>Default</th>
        <th>Disabled</th>
        <th>Loading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Primary Large</td>
        <td>
          <nve-button variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading variant="primary">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Primary Small</td>
        <td>
          <nve-button size="small" variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="small" variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="small" variant="primary">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Primary Medium</td>
        <td>
          <nve-button size="medium" variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="medium" variant="primary">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="medium" variant="primary">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Secondary Medium</td>
        <td>
          <nve-button size="medium" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="medium" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="medium" variant="default">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Secondary Small</td>
        <td>
          <nve-button size="small" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="small" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="small" variant="default">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Secondary Large</td>
        <td>
          <nve-button size="large" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="large" variant="default">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="large" variant="default">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Outlined Medium</td>
        <td>
          <nve-button size="medium" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="medium" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="medium" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Outlined Small</td>
        <td>
          <nve-button size="small" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="small" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="small" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Outlined Large</td>
        <td>
          <nve-button size="large" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="large" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="large" variant="neutral" outline>I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Ghost Medium</td>
        <td>
          <nve-button size="medium" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="medium" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="medium" variant="neutral">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Ghost Small</td>
        <td>
          <nve-button size="small" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="small" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="small" variant="neutral">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Ghost Large</td>
        <td>
          <nve-button size="large" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button disabled size="large" variant="neutral">I'm an NVE-button</nve-button>
        </td>
        <td>
          <nve-button loading size="large" variant="neutral">I'm an NVE-button</nve-button>
        </td>
      </tr>
      <tr>
        <td>Button with prefix icon</td>
        <td>
          <nve-button loading size="large" variant="primary"
            >I'm an NVE-button
            <nve-icon name="warning" slot="prefix"></nve-icon>
          </nve-button>
        </td>
      </tr>
      <tr>
        <td>Button with suffix icon</td>
        <td>
          <nve-button loading size="small" variant="primary"
            >I'm an NVE-button
            <nve-icon name="warning" slot="suffix"></nve-icon>
            <nve-icon name="warning" slot="prefix"></nve-icon>
          </nve-button>
        </td>
      </tr>
      <tr>
        <td>Button with suffix icon</td>
        <td>
          <nve-button loading size="medium" variant="primary"
            >I'm an NVE-button
            <nve-icon name="warning" slot="suffix"></nve-icon>
            <nve-icon name="warning" slot="prefix"></nve-icon>
          </nve-button>
        </td>
      </tr>
      <tr>
        <td>Button with suffix icon</td>
        <td>
          <nve-button size="medium" variant="primary">I'm an NVE-button </nve-button>
        </td>
      </tr>
      <tr>
        <td>Button with suffix icon</td>
        <td>
          <nve-button size="small" variant="primary">I'm an NVE-button </nve-button>
        </td>
      </tr>
    </tbody>
  </table>
`;
