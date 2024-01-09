import './../../components/nve-checkbox/nve-checkbox.component';
import { StoryObj } from '@storybook/web-components';
import { NveCheckbox, NveCheckboxProps } from './NveCheckbox';

const meta = {
  title: 'Nve/NveCheckbox',
  tags: ['autodocs'],
  render: (args: NveCheckboxProps) => NveCheckbox(args),
  parameters: {
    docs: {
      description: {
        component:
          '<h2><nve-checkbox> | NveCheckbox</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveCheckboxProps>;

export const standard: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    invalid: false,
  },
};
