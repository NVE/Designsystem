import '../../components/nve-radio-group/nve-radio-group.component';
import '../../components/nve-radio-button/nve-radio-button.component';
import '../../components/nve-radio/nve-radio.component';
import { StoryObj } from '@storybook/web-components';
import type { NveRadioGroupProps } from './NveRadio';
import { NveRadioGroup } from './NveRadio';
import NveRadioDoc from './NveRadioDoc.mdx';

const meta = {
  title: 'Nve/NveRadioGroup',
  tags: ['autodocs'],
  render: (args: NveRadioGroupProps) => NveRadioGroup(args),
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {
    docs: {
      page: NveRadioDoc,
      description: {
        component:
          '<h2><nve-radio-group> | NveRadioGroup</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-radio-group.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveRadioGroupProps>;

// eslint-disable-next-line storybook/prefer-pascal-case
export const Primary: Story = {
  args: {
    label: 'Radio-gruppe',
    orientation: 'vertical',
    disabled: false,
    required: true,
    size: 'medium',
    value: 1
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Horizontal',
    orientation: 'horizontal',
    size: 'medium',
  },
};

export const Vertical: Story = {
  args: {
    label: 'Vertical',
    orientation: 'vertical',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    orientation: 'vertical',
    size: 'medium',
    disabled: true
  },
};

export const Enabled: Story = {
  args: {
    label: 'Enabled',
    orientation: 'vertical',
    size: 'medium',
  },
};

export const Optional: Story = {
  args: {
    label: 'Valgfri',
    orientation: 'vertical',
    size: 'medium',
  },
};

export const Required: Story = {
  args: {
    label: 'Obligatorisk',
    orientation: 'vertical',
    size: 'medium',
    required: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    orientation: 'vertical',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    orientation: 'vertical',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    orientation: 'vertical',
    size: 'large',
  },
};

export const Valueone: Story = {
  args: {
    label: 'Value 1 checked',
    orientation: 'vertical',
    size: 'large',
    value: 1
  },
};

export const Valuetwo: Story = {
  args: {
    label: 'Value 2 checked',
    orientation: 'vertical',
    size: 'large',
    value: 2
  },
};

export const Valuethree: Story = {
  args: {
    label: 'Value 3 checked',
    orientation: 'vertical',
    size: 'large',
    value: 3
  },
};