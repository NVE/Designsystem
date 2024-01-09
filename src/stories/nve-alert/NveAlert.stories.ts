import '../../components/nve-alert/nve-alert.component';
import '../../components/nve-icon/nve-icon.component';
import { NveAlert } from './NveAlert';
import NveAlertDoc from './NveAlertDoc.mdx';

export default {
  title: 'Nve/NveAlert', // Title for the component in Storybook
  tags: ['autodocs'],
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

export const Prime = {
  args: {
    variant: 'primary',
    text: 'text',
    title: 'Primary',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Success = {
  args: {
    variant: 'success',
    text: 'text',
    title: 'Success',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    text: 'text',
    title: 'Danger',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    text: 'text',
    title: 'Warning',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
    text: 'text',
    title: 'Neutral',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Leftstrokeone = {
  args: {
    variant: 'danger',
    text: 'text',
    title: 'Left stroke',
    leftStroke: true,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Leftstroketwo = {
  args: {
    variant: 'warning',
    text: 'text',
    title: 'Left stroke',
    leftStroke: true,
    emphasized: false,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Emphasizedone = {
  args: {
    variant: 'neutral',
    text: 'text',
    title: 'Emphasized',
    leftStroke: false,
    emphasized: true,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Emphasizedtwo = {
  args: {
    variant: 'success',
    text: 'text',
    title: 'Emphasized',
    leftStroke: false,
    emphasized: true,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Closable = {
  args: {
    variant: 'success',
    text: 'text',
    title: 'Closable',
    leftStroke: false,
    emphasized: true,
    closable: true,
    showIcon: true,
    open: true,
  },
};

export const Notclosable = {
  args: {
    variant: 'danger',
    text: 'text',
    title: 'Not closable',
    leftStroke: false,
    emphasized: true,
    closable: false,
    showIcon: true,
    open: true,
  },
};