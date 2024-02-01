import '../../components/nve-select/nve-select.component';
import '../../components/nve-option/nve-option.component';
import '../../components/nve-label/nve-label.component';
import { NveSelect } from './NveSelect';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { NveSelectProps } from './NveSelect';
import NveSelectDoc from './NveSelectDoc.mdx';

const meta = {
  title: 'Nve/NveSelect',
  tags: ['autodocs'],
  render: (args) => NveSelect(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
  },
  parameters: {
    docs: {
      page: NveSelectDoc,
      description: {
        component: `<div>
                <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-select.md">API-dokumentasjon</a>
                </div>`,
      },
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
} satisfies Meta<NveSelectProps>;

export default meta;
type Story = StoryObj<NveSelectProps>;

export const Primary: Story = {
  args: {
    filled: false,
    size: 'medium',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
  },
};

export const Small: Story = {
  args: {
    filled: false,
    size: 'small',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Small"
  },
};

export const Medium: Story = {
  args: {
    filled: false,
    size: 'medium',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Medium"
  },
};

export const Large: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Large"
  },
};

export const Enabled: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Enabled"
  },
};

export const Disabled: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: true,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Disabled"
  },
};

export const Unfilled: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Standard"
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Filled",
  },
};

export const Helptext: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Med hjelpetekst",
    helpText: "Hjelpetekst plasseres her..."
  },
};

export const Tooltip: Story = {
  args: {
    filled: false,
    size: 'large',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    clearable: false,
    open: false,
    placement: 'bottom',
    required: false,
    label: "Med tooltip",
    tooltip: "tooltip tekst"
  },
};



