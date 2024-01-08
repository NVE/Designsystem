import '../../components/nve-alert/nve-alert.component';
import '../../components/nve-icon/nve-icon.component';
import { NveAlert } from './NveAlert';
import NveAlertDoc from './NveAlertDoc.mdx';

export default {
  title: 'Nve/NveAlert', // Title for the component in Storybook
  component: 'nve-alert',
  render: (args: {
    variant: string;
    text: string;
    title: string;
    leftStroke: boolean;
    emphasized: boolean;
    closable: boolean;
    open: boolean;
    showIcon: boolean;
  }) => NveAlert(args),
  argTypes: {
    text: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'warning', 'success', 'danger', 'neutral'],
    },
    open: { table: { disable: true } },
  },
  parameters: {
    docs: {
      page: NveAlertDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-alert.md">API-dokumentasjon</a>
        </div>`,
      },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    text: 'this is some example text',
    title: 'Info tittel',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};
