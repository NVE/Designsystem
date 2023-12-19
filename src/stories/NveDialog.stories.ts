import '../components/nve-dialog/nve-dialog';
import '../components/nve-button/nve-button';
import '../components/nve-icon/nve-icon';
import { StoryObj } from '@storybook/web-components';
import { NveDialog } from './NveDialog';

import { html } from 'lit';

export interface NveDialogProps {

  label: string;
  icon: string,

}
const meta = {
  title: 'Nve/NveDialog',
  tags: ['autodocs'],
  render: (args: NveDialogProps) => NveDialog(args),
  parameters: {
    docs: {
      description: {
        component: '<h2><nve-dialog> | NveDialog</h2><a href="https://github.com/doc/nve-dialog.md">API-dokumentasjon</a>',
      }
    }
  }
};

export default meta;
type Story = StoryObj<NveDialogProps>;

export const BasicDialog: Story = {
  args: {
    label: 'Dialog tittel',
    icon: '',
  },
  render: (args) => html`
  <div style="width: 400px; height: 400px;">
    <nve-dialog open
      label=${args.label}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <nve-button slot="footer" variant="primary">Lukk</nve-button>
    </nve-dialog>
    </div>
  `
};

export const SlettDialog: Story = {
  args: {
    label: 'Vil du slette dette påbegynte skjemaet?',
    icon: 'warning',
  },
  render: (args) => html`
  <div style="width: 400px; height: 400px;">
    <nve-dialog open
      label=${args.label}
      icon=${args.icon}
      style="--width: 30vw;">
        Du kan ikke angre dette etter du har slettet skjemaet. 
        <nve-button slot="footer" variant="primary">Slett</nve-button>
        <nve-button class="close" slot="footer" variant="neutral">Avbryt</nve-button>
    </nve-dialog>
    </div>
  `
};


export const CookiesDialog: Story = {
  args: {
    label: 'Informasjonskapsler (cookies)',
    icon: 'cookie',
  },
  render: (args) => html`
  <div style="width: 400px; height: 400px;">
    <nve-dialog
      open
      label=${args.label}
      icon=${args.icon}
      style="--width: 30vw;">
      Noregs vassdrags- og energidirektorat (NVE) er underlagt Olje- og energidepartementet og har ansvar for å forvalte vass- og energiressursane til landet. NVE varetek også dei statlege forvaltingsoppgåvene innanfor skredførebygging. 
        <nve-button slot="footer" variant="primary">Godta alle</nve-button>
        <nve-button class="close" slot="footer">Kun nødvendige</nve-button>
        <nve-button slot="footer" variant="neutral">Mine valg</nve-button>
    </nve-dialog>
    </div>
  `
};
export const CommentDialog: Story = {
  args: {
    label: 'Kommenter',
    icon: 'info',
  },
  render: (args) => html`
  <div style="width: 400px; height: 400px;">
    <nve-dialog
      open
      label=${args.label}
      icon=${args.icon}
      style="--width: 30vw;">
        <slot part="body">
          <p>Nve-Textarea er ikke laget ennå</p>
          <textarea placeholder="Skriv inn din kommentar her..."></textarea>
        </slot>
        <nve-button slot="footer" variant="primary">Send</nve-button>
        <nve-button slot="footer" variant="neutral">Avbryt</nve-button>
    </nve-dialog>
    </div>
  `
};

export const DisabledDialog: Story = {
  args: {
    label: 'Disable Background',
    icon: '',
  },
  render: (args) => html`
  <div style="width: 400px; height: 400px;">
    <nve-dialog
      open
      disableBackround
      label=${args.label}
      icon=${args.icon}
      style="--width: 30vw;">
        Kan ikke lukke dialogen ved å trykke utenfor
        <nve-button slot="footer" variant="neutral">Avbryt</nve-button>
    </nve-dialog>
    </div>
  `
};



