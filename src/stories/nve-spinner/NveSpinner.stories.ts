import '../../components/nve-spinner/nve-spinner.component';
import NvespinnerDoc from './NvespinnerDoc.mdx';
import type { Meta, StoryObj } from '@storybook/web-components';
import { Nvespinner, NvespinnerProps } from './NveSpinner';

const meta = {
  title: 'Nve/Nvespinner',
  tags: ['autodocs'],
  render: (args) => Nvespinner(args),
  parameters: {
    docs: {
      page: NvespinnerDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-spinner.md">API-dokumentasjon</a>
        En spinner brukes for å vise at noe laster.
        </div>`,
      },
    },
  },
} satisfies Meta<NvespinnerProps>;

export default meta;
type Story = StoryObj<NvespinnerProps>;

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
