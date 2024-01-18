import '../../components/nve-icon/nve-icon.component';
import '../../components/nve-tooltip/nve-tooltip.component';
import '../../components/nve-label/nve-label.component';
import { StoryObj } from '@storybook/web-components';
import type { NveLabelProps } from './NveLabel';
import { NveLabel } from './NveLabel';
import NveLabelDoc from './NveLabelDoc.mdx';

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
      page: NveLabelDoc,
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
    value: 'XS',
    size: 'small',
  },
};

export const Small: Story = {
  
  args: {
    value: 'Small',
    size: 'small',
  },
};

export const Medium: Story = {
  
  args: {
    value: 'Medium',
    size: 'medium',
  },
};

export const Large: Story = {
  
  args: {
    value: 'Large',
    size: 'large',
  },
};

export const Light: Story = {
  
  args: {
    value: 'Light',
    size: 'large',
    light: true
  },
};
export const Tooltip: Story = {
  
  args: {
    value: 'Svev over meg',
    size: 'medium',
    tooltip: 'Tooltip text'
  },
};

export const Standard: Story = {
  
  args: {
    value: 'Standard',
    size: 'large',
  },
};


