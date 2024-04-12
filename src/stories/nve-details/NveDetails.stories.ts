import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/nve-details/nve-details.component';
import { NveDetails, NveDetailsProps } from './NveDetails';
import NveDetailsDoc from './NveDetailsDoc.mdx';

const meta = {
  title: 'Nve/NveDetails',
  tags: ['autodocs'],
  render: (args: NveDetailsProps) => NveDetails(args),
  parameters: {
    docs: {
      page: NveDetailsDoc,
      description: {
        component:
          '<h2><nve-details> | NveDetails</h2><a href="https://github.com/doc/nve-details.md">API-dokumentasjon</a>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveDetailsProps>;

export const Details: Story = {
  args: {
    summary: 'Tittel',
    variant: 'brand',
    leftStroke: false,
    open: false,
  },
  argTypes: {
    summary: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['brand', 'neutral', 'info', 'error', 'success', 'warning'],
    },
    leftStroke: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => html`
    <div style="width: 400px;">
      <nve-details summary=${args.summary} variant=${args.variant} ?left-stroke=${args.leftStroke} ?open=${args.open}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </nve-details>
    </div>
  `,
};
