import { html } from 'lit';

const table = html`
  <hr />
  <h3>nve-dialog</h3>
  <table class="demo">
  <tbody>
    <tr>
      <td colspan="2">
        Warning
        <nve-dialog variant="warning" label="Vil du slette dette påbegynte skjemaet?" class="dialog-width" style="--width: 30vw;">
          Du kan ikke angre dette etter du har slettet skjemaet. 
          <nve-button slot="footer" variant="primary">Slett</nve-button>
          <nve-button class="close" slot="footer" variant="neutral">Avbryt</nve-button>
        </nve-dialog>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <nve-button onclick="document.querySelector('.dialog-width').setAttribute('open', 'true')" class="open-dialog" variant="neutral">Open Dialog</nve-button>
      </td>
    </tr>
  </tbody>
</table>

`;

export default table;
