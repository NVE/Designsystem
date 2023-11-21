import '../nve-button';
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
  },
};

export const Default = {
  args: {
    theme: 'varsom',
    variant: 'primary',
    size: 'medium',
    caret: false,
    disabled: false,
  },
};
