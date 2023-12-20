import '../../components/nve-input/nve-input';
import '../../components/nve-label/nve-label';
import { StoryObj } from '@storybook/web-components';
import { NveInput } from './NveInput';
import type { NveInputProps } from './NveInput';


const meta = {
  title: 'Nve/NveInput',
  tags: ['autodocs'],
  render: (args: NveInputProps) => NveInput(args),
  parameters: {
    docs: {
      description: {
        component: '<h2><nve-input> | NveInput</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-input.md">API-dokumentasjon</a>',
      }
    }
  }
};

export default meta;
type Story = StoryObj<NveInputProps>;

export const standard: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Tekst',
    required: false,
    requiredLabel: '*Obligatorisk',
  },
};

export const filled: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Tekst',
  },
};

export const obligatorisk: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: '',
    required: true,
    requiredLabel: '*Obligatorisk',
  },
};
