import { html } from 'lit';

export interface NveDialogProps {

  label: string;
  icon: string,

}

export const NveDialog = (props: NveDialogProps) => {
  return html`
      <nve-dialog
        class='dialog-width'
        label=${props.label}
        ?icon=${props.icon}
      >
            Du kan ikke angre dette etter du har slettet skjemaet. 
          <nve-button slot="footer" variant="primary">Slett</nve-button>
          <nve-button class="close" slot="footer" variant="neutral">Avbryt</nve-button>
      </nve-dialog>
      <nve-button onclick="document.querySelector('.dialog-width').setAttribute('open', 'true')" class="open-dialog" variant="primary">Open Dialog</nve-button>
    `;
};
