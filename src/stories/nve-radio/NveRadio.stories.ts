import '../../components/nve-radio-group/nve-radio-group.component';
import '../../components/nve-radio-button/nve-radio-button.component';
import '../../components/nve-radio/nve-radio.component';
import { StoryObj } from '@storybook/web-components';
import type { NveRadioGroupProps } from './NveRadio';
import { NveRadioGroup } from './NveRadio';

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
  },
};

export const One: Story = {
  args: {
    label: 'Radio group',
    orientation: 'horizontal',
    disabled: false,
    required: true,
    size: 'medium',
  },
};

export const Two: Story = {
  args: {
    label: 'Radio-gruppe',
    orientation: 'vertical',
    disabled: true,
    required: false,
    size: 'medium',
  },
};

export const Three: Story = {
  args: {
    label: 'Radio-gruppe',
    orientation: 'vertical',
    disabled: false,
    required: true,
    size: 'small',
  },
};

export const Four: Story = {
  args: {
    label: 'Radio-gruppe',
    orientation: 'vertical',
    disabled: false,
    required: true,
    size: 'medium',
  },
};
