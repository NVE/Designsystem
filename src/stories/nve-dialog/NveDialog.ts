import { html } from 'lit';

export interface NveDialogProps {

  label: string;
  icon: string,
  variant: string

}

export const NveDialog = (props: NveDialogProps) => {
  return html`

  <div style="width: 400px; height: 400px;">
      <nve-dialog open
        class='dialog-width'
        label=${props.label}
        icon=${props.icon}
      >
      </nve-dialog>
      </div>
      `;
};

