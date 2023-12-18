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
    <nve-dialog label="Dialog tittel" class="dialog-width" style="--width: 30vw;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <nve-button slot="footer" variant="primary">Lukk</nve-button>
         
    </nve-dialog>
        <td>
        <nve-button onclick="document.querySelector('.dialog-width').setAttribute('open', 'true')" class="open-dialog" variant="primary">Open Dialog</nve-button>
      </td>
    </tr>

    <tr>
    <td>Slett</td>
    <nve-dialog icon="warning" label="Vil du slette dette påbegynte skjemaet?" class="dialog-width2" style="--width: 30vw;">
          Du kan ikke angre dette etter du har slettet skjemaet. 
          <nve-button slot="footer" variant="primary">Slett</nve-button>
          <nve-button class="close" slot="footer" variant="neutral">Avbryt</nve-button>
    </nve-dialog>
        <td>
        <nve-button onclick="document.querySelector('.dialog-width2').setAttribute('open', 'true')" class="open-dialog" variant="primary">Open Dialog</nve-button>
      </td>
    </tr>

    <tr>
    <td>Informasjonskapsler (cookies)</td>
    <nve-dialog icon="cookie" label="Informasjonskapsler (cookies)" class="dialog-width3" style="--width: 30vw;">
          Noregs vassdrags- og energidirektorat (NVE) er underlagt Olje- og energidepartementet og har ansvar for å forvalte vass- og energiressursane til landet. NVE varetek også dei statlege forvaltingsoppgåvene innanfor skredførebygging. 
          <nve-button slot="footer" variant="primary">Godta alle</nve-button>
          <nve-button class="close" slot="footer">Kun nødvendige</nve-button>
          <nve-button slot="footer" variant="neutral">Mine valg</nve-button>
    </nve-dialog>
        <td>
        <nve-button onclick="document.querySelector('.dialog-width3').setAttribute('open', 'true')" class="open-dialog" variant="primary">Open Dialog</nve-button>
      </td>
    </tr>

    <tr>
    <td>Kommenter (custom slot)</td>
    <nve-dialog icon="info" label="Kommenter" class="dialog-width4" style="--width: 30vw;">
          <slot part="body">
            <p>Textarea er ikke laget ennå</p>
            <textarea placeholder="Skriv inn din kommentar her..."></textarea>
          </slot>
          <nve-button slot="footer" variant="primary">Send</nve-button>
          <nve-button slot="footer" variant="neutral">Avbryt</nve-button>
    </nve-dialog>
        <td>
        <nve-button onclick="document.querySelector('.dialog-width4').setAttribute('open', 'true')" class="open-dialog" variant="primary">Open Dialog</nve-button>
      </td>
    </tr>
  </tbody>
</table>

`;

export default table;
