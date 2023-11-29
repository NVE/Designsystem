import '../components/nve-alert/nve-alert';
import '../components/nve-icon/nve-icon';
import { NveAlert } from './NveAlert';

export default {
  title: 'NveAlert', // Title for the component in Storybook
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
    iconName: string;
  }) => NveAlert(args),
  argTypes: {
    text: { control: { type: 'text' }},
    title: { control: {type: 'text'}},
    variant: { table: { disable: true }},
    open: { table: { disable: true }},
    iconName: { table: { disable: true }}
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
    iconName: 'info',
    open: true
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    text: 'this is some example text',
    title: 'Advarsel',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    iconName: 'warning',
    open: true
  },
};

export const Success = {
  args: {
    variant: 'success',
    text: 'this is some example text',
    title: 'Success',
    leftStroke: false,
    emphasized: false,
    closable: true,
    showIcon: true,
    iconName: 'check_circle',
    open: true
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    text: 'this is some example text',
    title: 'Feil',
    leftStroke: true, 
    emphasized: false,
    closable: true,
    showIcon: true,
    iconName: 'error',
    open: true
  },
};

export const Neutral = {
    args: {
      variant: 'neutral',
      text: 'this is some example text',
      title: 'Tittel',
      leftStroke: false,
      emphasized: false,
      closable: true,
      showIcon: true,
      iconName: 'help',
      open: true
    },
  };
