import '../../components/nve-button/nve-button.component';
import '../../components/nve-spinner/nve-spinner.component';
import { NveButton } from './NveButton';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { NveButtonProps } from './NveButton';
import NveButtonDoc from './NveButtonDoc.mdx';

const meta = {
  title: 'Nve/NveButton',
  tags: ['autodocs'],
  render: (args) => NveButton(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'default', 'neutral'],
    },
    outline: { control: 'boolean', if: { arg: 'variant', eq: 'neutral' } },
  },
  parameters: {
    docs: {
      page: NveButtonDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-button.md">API-dokumentasjon</a>
        <p>Knappeelementer brukes for å gi en enkel og tilgjengelig opplevelse for brukerne. 
        Et knappeelement skal brukes når en handling utføres av brukeren.
        </div>`,
      },
    },
  },
} satisfies Meta<NveButtonProps>;

export default meta;
type Story = StoryObj<NveButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "Nve button"
  },
};

export const Standard: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "primary"
  },
};



export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "default"
  },
};

export const Outlined: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: true,
    navn: "neutral"
  },
};

export const Ghost: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    navn: "ghost",
    outline: false,
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'small',
    disabled: false,
    loading: false,
    outline: false,
    navn: "small"
  },
};

export const Medium: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "medium"
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'large',
    disabled: false,
    loading: false,
    outline: false,
    navn: "large"
  },
};

export const Disabledone: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    loading: false,
    outline: false,
    navn: "disabled"
  },
};

export const Disabledtwo: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: true,
    loading: false,
    outline: false,
    navn: "disabled"
  },
};

export const Enabledone: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "enabled"
  },
};

export const Enabledtwo: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
    navn: "enabled"
  },
};

export const Loadingone: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: true,
    loading: true,
    outline: false,
    navn: "loading"
  },
};

export const Loadingtwo: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: true,
    loading: true,
    outline: true,
    navn: "loading"
  },
};

