import '../../components/nve-badge/nve-badge.component';
import NveBadgeDoc from './NveBadgeDoc.mdx';
import type { Meta, StoryObj } from '@storybook/web-components';
import { NveBadge, NveBadgeProps } from './NveBadge';

const meta = {
  title: 'Nve/NveBadge',
  tags: ['autodocs'],
  render: (args) => NveBadge(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
    },
  },
  parameters: {
    docs: {
      page: NveBadgeDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-badge.md">API-dokumentasjon</a>
        <p>Et lite visuelt element, vanligvis en merkelapp eller symbol, som brukes for å fremheve spesifikke informasjoner,
         som statusindikatorer. 
         Badges gir rask og tydelig visuell informasjon, og bør brukes sparsomt for å bevare en ren og oversiktlig design.</p>
        </div>`,
      },
    },
  },
} satisfies Meta<NveBadgeProps>;

export default meta;
type Story = StoryObj<NveBadgeProps>;

export const Example: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    low: false,
  },
};
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    low: false,
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    low: false,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'medium',
    low: false,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    low: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    low: false,
  },
};
