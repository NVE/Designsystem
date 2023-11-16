import { NveCheckbox } from '../components/nve-checkbox/nve-checkbox';

export default {
  title: 'Nve/Checkbox',
  tags: ['autodocs'],
  render: args => NveCheckbox(args),
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Chekbox = {
  args: {
    label: 'Checkbox',
    checked: false,
    indeterminate: false,
  },
};
