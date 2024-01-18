import '../../components/nve-checkbox-group/nve-checkbox-group.component';
import '../../components/nve-checkbox/nve-checkbox.component';
import { StoryObj } from '@storybook/web-components';
import { NveCheckboxGroup, NveCheckboxGroupProps } from './NveCheckboxGroup';
import NveCheckboxGroupDoc from './NveCheckboxGroupDoc.mdx';

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
      page: NveCheckboxGroupDoc,
      description: {
        component:
          '<h2><nve-checkbox-group> | NveCheckboxGroup</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveCheckboxGroupProps>;

export const Primary: Story = {
  args: {
    disabled: false,
    invalid: false,
    orientation: 'horizontal',
    label: 'Label',
    tooltip: 'Help text',
    errorMessage: 'Error message',
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Horisontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    label: 'Vertikal',
  },
};

export const Tooltip: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Med tooltip',
    tooltip: "Hjelpetekst"
  },
};

export const Disabled: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Disabled',
    disabled: true
  },
};

export const Error: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Error',
    invalid: true,
    errorMessage: "Error message"
  },
};

