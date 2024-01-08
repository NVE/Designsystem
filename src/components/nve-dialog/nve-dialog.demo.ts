import { html } from 'lit';

const table = html`
  <hr />
  <h3 id="nve-label">nve-dialog</h3>
  <table class="demo">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Basic</td>
        <nve-dialog label="Dialog tittel" class="dialog-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div slot="footer">
            <nve-button variant="primary" onclick="document.querySelector('.dialog-width').hide()">Lukk</nve-button>
          </div>
        </nve-dialog>
        <td>
          <nve-button onclick="document.querySelector('.dialog-width').show()" class="open-dialog" variant="primary"
            >Open Dialog</nve-button
          >
        </td>
      </tr>

      <tr>
        <td>Slett</td>
        <nve-dialog icon="warning" label="Vil du slette dette påbegynte skjemaet?" class="dialog-width2">
          Du kan ikke angre dette etter du har slettet skjemaet.
          <div slot="footer">
            <nve-button variant="primary" onclick="document.querySelector('.dialog-width2').hide()">Slett</nve-button>
            <nve-button class="close" variant="neutral" onclick="document.querySelector('.dialog-width2').hide()"
              >Avbryt</nve-button
            >
          </div>
        </nve-dialog>
        <td>
          <nve-button onclick="document.querySelector('.dialog-width2').show()" class="open-dialog" variant="primary"
            >Open Dialog</nve-button
          >
        </td>
      </tr>

      <tr>
        <td>Informasjonskapsler (cookies)</td>
        <nve-dialog icon="cookie" label="Informasjonskapsler (cookies)" class="dialog-width3">
          Noregs vassdrags- og energidirektorat (NVE) er underlagt Olje- og energidepartementet og har ansvar for å
          forvalte vass- og energiressursane til landet. NVE varetek også dei statlege forvaltingsoppgåvene innanfor
          skredførebygging.
          <div slot="footer">
            <nve-button variant="primary" onclick="document.querySelector('.dialog-width3').hide()"
              >Godta alle</nve-button
            >
            <nve-button class="close" onclick="document.querySelector('.dialog-width3').hide()"
              >Kun nødvendige</nve-button
            >
            <nve-button variant="neutral" onclick="document.querySelector('.dialog-width3').hide()"
              >Mine valg</nve-button
            >
          </div>
        </nve-dialog>
        <td>
          <nve-button onclick="document.querySelector('.dialog-width3').show()" class="open-dialog" variant="primary"
            >Open Dialog</nve-button
          >
        </td>
      </tr>

      <tr>
        <td>Kommenter (custom slot)</td>
        <nve-dialog icon="info" label="Kommenter" class="dialog-width4">
          <p>Nve-Textarea er ikke laget ennå</p>
          <textarea placeholder="Skriv inn din kommentar her..."></textarea>
          <div slot="footer">
            <nve-button variant="primary" onclick="document.querySelector('.dialog-width4').hide()">Send</nve-button>
            <nve-button variant="neutral" onclick="document.querySelector('.dialog-width4').hide()">Avbryt</nve-button>
          </div>
        </nve-dialog>
        <td>
          <nve-button onclick="document.querySelector('.dialog-width4').show()" class="open-dialog" variant="primary"
            >Open Dialog</nve-button
          >
        </td>
      </tr>

      <tr>
        <td>Disable background</td>
        <nve-dialog
          disableBackground
          label="I denne kan du ikke trykke utenfor for å lukke"
          class="dialog-width5"
          style="--width: 30vw;"
        >
          Tilfeldig tekst.
          <div slot="footer">
            <nve-button variant="primary" onclick="document.querySelector('.dialog-width5').hide()">Slett</nve-button>
            <nve-button class="close" variant="neutral" onclick="document.querySelector('.dialog-width5').hide()"
              >Avbryt</nve-button
            >
          </div>
        </nve-dialog>
        <td>
          <nve-button onclick="document.querySelector('.dialog-width5').show()" class="open-dialog" variant="primary"
            >Open Dialog</nve-button
          >
        </td>
      </tr>
    </tbody>
  </table>
`;

export default table;
