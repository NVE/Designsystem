import '../nve-button';
import '../nve-spinner';
import { NveButton } from './NveButton';

export default {
  title: 'NveButton', // Title for the component in Storybook
  component: 'nve-button',
  render: (args) => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    theme: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export const Primary = {
  args: {
    theme: 'varsom',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Secondary = {
  args: {
    theme: 'varsom',
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

export const Outlined = {
  args: {
    theme: 'varsom',
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: true,
  },
};

export const Ghost = {
  args: {
    theme: 'varsom',
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};
