import '../../components/nve-button/nve-button.component';
import '../../components/nve-spinner/nve-spinner.component';
import { NveButton } from './NveButton';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { NveButtonProps } from './NveButton';

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
  },
};

export const Secondary: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
  },
};

export const Three: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: true,
  },
};

export const Four: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
    loading: false,
    outline: false,
  },
};
