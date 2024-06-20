import '../../components/nve-textarea/nve-textarea.component';
import { StoryObj } from '@storybook/web-components';
import { NveTextarea } from './NveTextarea';
import type { NveTextareaProps } from './NveTextarea';
import NveTextareaDoc from './NveTextareaDoc.mdx';

const meta = {
  title: 'Nve/NveTextarea',
  tags: ['autodocs'],
  render: (args: NveTextareaProps) => NveTextarea(args),
  parameters: {
    docs: {
      page: NveTextareaDoc,
      description: {
        component:
          '<h2><nve-textarea> | NveTextarea</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-textarea.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveTextareaProps>;

export const Primary: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Tekst',
    required: false,
    requiredLabel: '',
    tooltip: 'Tooltip tekst',
    rows: 4,
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Filled input text',
    required: false,
    tooltip: 'Tooltip tekst',
  },
};

export const Readonly: Story = {
  args: {
    label: 'Ledetekst',
    tooltip: 'Tooltip tekst',
    value: 'Standard',
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    tooltip: 'Tooltip tekst',
    value: 'Deaktivert',
    disabled: true,
  },
};

export const Mandatory: Story = {
  args: {
    label: 'Ledetekst',
    value: 'Obligatorisk',
    required: true,
    requiredLabel: '',
  },
};
