import '../../components/nve-tooltip/nve-tooltip.component';
import NveTooltipDoc from './NveTooltipDoc.mdx';
import type { Meta, StoryObj } from '@storybook/web-components';
import { NveTooltip, NveTooltipProps } from './NveTooltip';

const meta = {
  title: 'Nve/NveTooltip',
  tags: ['autodocs'],
  render: (args) => NveTooltip(args),
  parameters: {
    docs: {
      page: NveTooltipDoc,
      description: {
        component: `<div>
        <a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-tooltip.md">API-dokumentasjon</a>
        <div>
      <p>Tooltips er en meldingsboks som vises når en bruker holder markøren over eller gir fokus til et UI element. 
      Tooltips bør være sammenkoblet med et interaktivt UI element som feks en knapp. 
      Tooltips bør brukes sparsomt og inneholde kortfattet, utfyllende informasjon.</p>
      </div>
        </div>`,
      },
    },
  },
} satisfies Meta<NveTooltipProps>;

export default meta;
type Story = StoryObj<NveTooltipProps>;

export const Example: Story = {
  args: {
    content: 'hjelpetekst'
  },
};

export const Hjelpetekst: Story = {
  args: {
content: "content",
  },
};

export const Html: Story = {
  args: {
content: "content",
htmltxt: true
  },
};

