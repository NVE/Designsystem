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
    name: "badge",
    low: false,
  },
};
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    low: false,
    name: "primary"
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    low: false,
    name: "neutral"
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'medium',
    low: false,
    name: "warning"
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    low: false,
    name: "success"
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    low: false,
    name: "danger"
  },
};

export const Small: Story = {
  args: {
    variant: 'success',
    size: 'small',
    low: false,
    name: "small badge"
  },
};

export const Medium: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    low: false,
    name: "medium badge"
  },
};

export const Large: Story = {
  args: {
    variant: 'success',
    size: 'large',
    low: false,
    name: "large badge"
  },
};

export const Lowwarning: Story = {
  args: {
    variant: 'warning',
    size: 'large',
    low: true,
    name: "warning"
  },
};

export const Lowsuccess: Story = {
  args: {
    variant: 'success',
    size: 'large',
    low: true,
    name: "success"
  },
};

export const Lowprimary: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    low: true,
    name: "primary"
  },
};

export const Lowdanger: Story = {
  args: {
    variant: 'danger',
    size: 'large',
    low: true,
    name: "danger"
  },
};

export const Lowneutral: Story = {
  args: {
    variant: 'neutral',
    size: 'large',
    low: true,
    name: "neutral",
  },
};

export const Inbutton: Story = {
  args: {
    variant: 'warning',
    size: 'small',
    name: "badge",
    button: true
  },
};


