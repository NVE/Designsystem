import '../components/nve-button/nve-button';
import '../components/nve-spinner/nve-spinner';
import { NveButton } from './NveButton';

export default {
  title: 'NveButton', // Title for the component in Storybook
  component: 'nve-button',
  render: (args: {
    variant: string;
    size: string;
    disabled: boolean;
    loading: boolean;
    outline: boolean;
  }) => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: { table: { disable: true } },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Secondary = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Outlined = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: true,
  },
};

export const Ghost = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};
