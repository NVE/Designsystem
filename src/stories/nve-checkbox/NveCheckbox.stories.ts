import './../../components/nve-checkbox/nve-checkbox.component';
import { StoryObj } from '@storybook/web-components';
import { NveCheckbox, NveCheckboxProps } from './NveCheckbox';
import NveCheckboxDoc from './NveCheckboxDoc.mdx';

const meta = {
  title: 'Nve/NveCheckbox',
  tags: ['autodocs'],
  render: (args: NveCheckboxProps) => NveCheckbox(args),
  parameters: {
    docs: {
      page: NveCheckboxDoc,
      description: {
        component:
          '<h2><nve-checkbox> | NveCheckbox</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveCheckboxProps>;

export const Primary: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    invalid: false,
    value: "value"
  },
};

export const Unchecked: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    invalid: false,
    value: "unchecked"
  },
};

export const Checked: Story = {
  args: {
    disabled: false,
    checked: true,
    indeterminate: false,
    invalid: false,
    value: "checked"
  },
};

export const Indeterminate: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: true,
    invalid: false,
    value: "indeterminate"
  },
};

export const Disabledunchecked: Story = {
  args: {
    disabled: true,
    checked: false,
    indeterminate: false,
    invalid: false,
    value: "unchecked",
  },
};

export const Disabledchecked: Story = {
  args: {
    disabled: true,
    checked: true,
    indeterminate: false,
    invalid: false,
    value: "checked"
  },
};

export const Disabledindeterminate: Story = {
  args: {
    disabled: true,
    checked: false,
    indeterminate: true,
    invalid: false,
    value: "indeterminate"
  },
};

export const Errorunchecked: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    invalid: true,
    value: "unchecked"
  },
};

export const Errorchecked: Story = {
  args: {
    disabled: false,
    checked: true,
    indeterminate: false,
    invalid: true,
    value: "checked"
  },
};

export const Errorindeterminate: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: true,
    invalid: true,
    value: "indeterminate"
  },
};
