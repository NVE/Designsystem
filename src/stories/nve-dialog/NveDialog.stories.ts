import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/nve-button/nve-button.component';
import '../../components/nve-dialog/nve-dialog.component';
import '../../components/nve-icon/nve-icon.component';
import { NveDialog, NveDialogProps } from './NveDialog';
import NveDialogDoc from './NveDialogDoc.mdx';

const meta = {
  title: 'Nve/NveDialog',
  tags: ['autodocs'],
  render: (args: NveDialogProps) => NveDialog(args),
  parameters: {
    docs: {
      page: NveDialogDoc,
      description: {
        component:
          '<h2><nve-dialog> | NveDialog</h2><a href="https://github.com/doc/nve-dialog.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveDialogProps>;

export const Primary: Story = {
  args: {
    label: 'Dialog tittel',
    icon: '',
    variant: 'primary'
  },
    argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'default', 'ghost'],
    },
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Lukk</nve-button>
        </div>
      </nve-dialog>
    </div>
  `,
};

export const Basic: Story = {
  args: {
    label: 'Dialog tittel',
    icon: '',
    variant: 'primary'
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} class="dialog-width">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Lukk</nve-button>
        </div>
      </nve-dialog>
    </div>
  `,
};

export const Delete: Story = {
  args: {
    label: 'Vil du slette dette påbegynte skjemaet?',
    icon: 'warning',
    variant: 'default'
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width2">
        Du kan ikke angre dette etter du har slettet skjemaet.
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Slett</nve-button>
          <nve-button class="close" variant="neutral" onclick="this.parentElement.parentElement.hide()"
            >Avbryt</nve-button
          >
        </div>
      </nve-dialog>
    </div>
  `,
};

export const Cookies: Story = {
  args: {
    label: 'Informasjonskapsler (cookies)',
    icon: 'cookie',
    variant: 'default'
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width3">
        Noregs vassdrags- og energidirektorat (NVE) er underlagt Olje- og energidepartementet og har ansvar for å
        forvalte vass- og energiressursane til landet.
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Godta alle</nve-button>
          <nve-button class="close" onclick="this.parentElement.parentElement.hide()">Kun nødvendige</nve-button>
          <nve-button variant="neutral" onclick="this.parentElement.parentElement.hide()">Mine valg</nve-button>
        </div>
      </nve-dialog>
    </div>
  `,
};

export const Comment: Story = {
  args: {
    label: 'Kommenter',
    icon: 'info',
    variant: 'primary'
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} icon=${args.icon} class="dialog-width4">
        <p>Nve-Textarea er ikke laget ennå</p>
        <textarea placeholder="Skriv inn din kommentar her..."></textarea>
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Send</nve-button>
          <nve-button variant="neutral" onclick="this.parentElement.parentElement.hide()">Avbryt</nve-button>
        </div>
      </nve-dialog>
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    label: 'Disable Background',
    icon: '',
    variant: 'primary'
  },
  render: (args) => html`
    <div style="width: 400px; height: 400px;">
      <nve-button onclick="this.nextElementSibling.show()" class="open-dialog" variant=${args.variant}
        >Open Dialog</nve-button
      >
      <nve-dialog label=${args.label} disableBackground class="dialog-width5">
        Kan ikke lukke dialogen ved å trykke utenfor
        <div slot="footer">
          <nve-button variant="primary" onclick="this.parentElement.parentElement.hide()">Avbryt</nve-button>
        </div>
      </nve-dialog>
    </div>
  `,
};
