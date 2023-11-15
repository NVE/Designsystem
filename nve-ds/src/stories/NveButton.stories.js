import { NveButton } from './NveButton';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Nve/Button',
  tags: ['autodocs'],
  render: args => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-small'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'outlined'],
    },
    variant: {
      control: { type: 'select' },
      options: ['nve', 'varsom'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    size: 'large',
    type: 'primary',
    disabled: false,
    trailingIcon: 'edit',
    leadingIcon: 'preview',
    showLabel: true,
    loading: false,
    variant: 'varsom',
  },
};
