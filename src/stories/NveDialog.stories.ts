import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/nve-button/nve-button';
import '../components/nve-dialog/nve-dialog';
import '../components/nve-icon/nve-icon';
import { NveDialog, NveDialogProps } from './NveDialog';

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
    <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant="primary">Open Dialog</nve-button>
    <nve-dialog label=${args.label} class="dialog-width">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <div slot="footer">
        <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Lukk</nve-button>
      </div>
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
    <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant="primary">Open Dialog</nve-button>
    <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width2">
      Du kan ikke angre dette etter du har slettet skjemaet. 
      <div slot="footer">
        <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Slett</nve-button>
        <nve-button class="close" variant="neutral" onclick="this.parentElement.parentElement.hide()">Avbryt</nve-button>
      </div>
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
    <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant="primary">Open Dialog</nve-button>
    <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width3">
      Noregs vassdrags- og energidirektorat (NVE) er underlagt Olje- og energidepartementet og har ansvar for å forvalte vass- og energiressursane til landet. 
      <div slot="footer">
        <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Godta alle</nve-button>
        <nve-button class="close" onclick="this.parentElement.parentElement.hide()">Kun nødvendige</nve-button>
        <nve-button variant="neutral" onclick="this.parentElement.parentElement.hide()">Mine valg</nve-button>
      </div>
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
    <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant="primary">Open Dialog</nve-button>
    <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width4" >
      <p>Nve-Textarea er ikke laget ennå</p>
      <textarea placeholder="Skriv inn din kommentar her..."></textarea>
      <div slot="footer">
        <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Send</nve-button>
        <nve-button variant="neutral" onclick="this.parentElement.parentElement.hide()">Avbryt</nve-button>
      </div>
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
    <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant="primary">Open Dialog</nve-button>
    <nve-dialog label=${args.label} disableBackground class="dialog-width5">
      Kan ikke lukke dialogen ved å trykke utenfor
      <div slot="footer">
        <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Avbryt</nve-button>
      </div>
    </nve-dialog>
    </div>
  `
};
