import NveDividerDoc from './NveDividerDoc.mdx';
import type { Meta, StoryObj } from '@storybook/web-components';
import { NveDivider, NveDividerProps } from './NveDivider';

const meta = {
  title: 'Nve/NveDivider',
  tags: ['autodocs'],
  render: (args) => NveDivider(args),
  parameters: {
    docs: {
      page: NveDividerDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-divider.md">API-dokumentasjon</a>
        <p>Divider brukes for å skille innhold fra hverandre.</p>
        </div>`,
      },
    },
  },
} satisfies Meta<NveDividerProps>;

export default meta;
type Story = StoryObj<NveDividerProps>;

export const Example: Story = {
  args: {
    
  },
};

export const Button: Story = {
  args: {
    button: true
  },
};

export const Standard: Story = {
  args: {
    
  },
};
