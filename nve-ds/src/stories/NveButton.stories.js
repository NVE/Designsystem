import { NveButton } from './NveButton';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Nve/Button',
  tags: ['autodocs'],
  render: args => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'outlined'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    size: 'large',
    type: 'primary',
    trailingIcon: 'edit',
    leadingIcon: 'preview',
    disabled: false,
    showLabel: true,
    loading: false,
  },
};
