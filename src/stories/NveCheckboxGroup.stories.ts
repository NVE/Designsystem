import '../components/nve-checkbox-group/nve-checkbox-group';
import '../components/nve-checkbox/nve-checkbox';
import { StoryObj } from '@storybook/web-components';
import { NveCheckboxGroup, NveCheckboxGroupProps } from './NveCheckboxGroup';

const meta = {
  title: 'Nve/NveCheckboxGroup',
  tags: ['autodocs'],
  render: (args: NveCheckboxGroupProps) => NveCheckboxGroup(args),
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2><nve-checkbox-group> | NveCheckboxGroup</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveCheckboxGroupProps>;

export const standard: Story = {
  args: {
    disabled: false,
    invalid: false,
    orientation: 'horizontal',
    label: 'Label',
    tooltip: 'Help text',
    errorMessage: 'Error message',
  },
};
