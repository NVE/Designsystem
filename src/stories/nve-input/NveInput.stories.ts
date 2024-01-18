import '../../components/nve-input/nve-input.component';
import '../../components/nve-label/nve-label.component';
import { StoryObj } from '@storybook/web-components';
import { NveInput } from './NveInput';
import type { NveInputProps } from './NveInput';
import NveInputDoc from './NveInputDoc.mdx';

const meta = {
  title: 'Nve/NveInput',
  tags: ['autodocs'],
  render: (args: NveInputProps) => NveInput(args),
  parameters: {
    docs: {
      page: NveInputDoc,
      description: {
        component:
          '<h2><nve-input> | NveInput</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-input.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveInputProps>;

export const Primary: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Tekst',
    required: false,
    type: 'text',
    tooltip: false,
    icon: false
  },
};

export const Small: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Small input-felt',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Medium input-felt',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Large input-felt',
    size: 'large',
  },
};

export const Filledone: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Filled input text',
    size: 'small',
  },
};


export const Filledtwo: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Filled input text',
    size: 'medium',
  },
};

export const Filledthree: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Filled input text',
    size: 'large',
  },
};

export const Locked: Story = {
  args: {
    label: 'Ledetekst',
    value: 'Standard',
    size: 'large',
  },
};

export const Unlocked: Story = {
  args: {
    label: 'Ledetekst',
    value: 'Skrivebeskyttet',
    size: 'large',
    readonly: true
  },
};


export const Enabled: Story = {
  args: {
    filled: false,
    label: 'Ledetekst',
    value: 'Aktivert',
    size: 'medium',
    
  },
};

export const Disabled: Story = {
  args: {
    filled: true,
    label: 'Ledetekst',
    value: 'Deaktivert',
    size: 'medium',
    disabled: true,
  },
};


export const Mandatory: Story = {
  args: {
    label: 'Ledetekst',
    value: 'Obligatorisk',
    size: 'medium',
    required: true,
    requiredLabel: "Obligatorisk"
  },
};

export const Invalid: Story = {
  args: {
    label: 'Ledetekst',
    value: '41',
    size: 'medium',
    type: 'number',
    min: '42',
    max: '43',
    required: true,
    requiredLabel: 'Ugyldig verdi',
    helpText: "Skriv inn tall mellom 42 og 43"
  },
};

export const Icon: Story = {
  args: {
    label: 'Ledetekst',
    size: 'medium',
    value: 'Input med ikon',
    icon: true    
  },
};

export const Tooltip: Story = {
  args: {
    label: 'Ledetekst',
    value: '41',
    size: 'medium',
    tooltip: true
  },
};

export const Date: Story = {
  args: {
    type: 'date'
  },
};

export const Datetime: Story = {
  args: {
    type: 'datetime-local'
  },
};

export const Password: Story = {
  args: {
    label: 'Ledetekst',
    value: 'hemmelig',
    size: 'medium',
    type: 'password'
  },
};



