import '../../components/nve-spinner/nve-spinner.component';
import NveSpinnerDoc from './NvespinnerDoc.mdx';
import type { Meta, StoryObj } from '@storybook/web-components';
import { NveSpinner, NveSpinnerProps } from './NveSpinner';

const meta = {
  title: 'Nve/NveSpinner',
  tags: ['autodocs'],
  render: (args) => NveSpinner(args),
  parameters: {
    docs: {
      page: NveSpinnerDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-spinner.md">API-dokumentasjon</a>
        En spinner brukes for å vise at noe laster.
        </div>`,
      },
    },
  },
} satisfies Meta<NveSpinnerProps>;

export default meta;
type Story = StoryObj<NveSpinnerProps>;

export const Example: Story = {
  args: {
    
  },
};

export const Standard: Story = {
  args: {
  },
};

export const Button: Story = {
  args: {
    button: true
  },
};
