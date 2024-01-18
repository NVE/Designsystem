import '../../components/nve-icon/nve-icon.component';
import '../../components/nve-tooltip/nve-tooltip.component';
import '../../components/nve-label/nve-label.component';
import { StoryObj } from '@storybook/web-components';
import type { NveLabelProps } from './NveLabel';
import { NveLabel } from './NveLabel';

const meta = {
  title: 'Nve/NveLabel',
  tags: ['autodocs'],
  render: (args: NveLabelProps) => NveLabel(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2><nve-label> | NveLabel</h2><a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-label.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveLabelProps>;

export const Primary: Story = {
  args: {
    value: 'En helt vanlig ledetekst',
    size: 'medium',
    light: false,
    tooltip: '',
  },
};

export const Xsmall: Story = {
  
  args: {
    value: 'Ledetekst',
    size: 'small',
    tooltip: '',
  },
};

export const Small: Story = {
  
  args: {
    value: 'Ledetekst',
    size: 'small',
    tooltip: '',
  },
};

export const Medium: Story = {
  
  args: {
    value: 'Ledetekst',
    size: 'small',
    tooltip: '',
  },
};

export const Large: Story = {
  
  args: {
    value: 'Ledetekst',
    size: 'small',
    tooltip: '',
  },
};

export const Three: Story = {
  args: {
    value: 'Svev over meg',
    size: 'medium',
    light: false,
    tooltip: 'hint',
  },
};

export const Four: Story = {
  args: {
    value: 'Hover me',
    size: 'small',
    light: false,
    tooltip: 'verktøyhint',
  },
};
