import '../../components/nve-checkbox-group/nve-checkbox-group.component';
import '../../components/nve-checkbox/nve-checkbox.component';
import { Meta, StoryObj } from '@storybook/web-components';
import { NveCheckboxGroup, NveCheckboxGroupProps } from './NveCheckboxGroup';
import NveCheckboxGroupDoc from './NveCheckboxGroupDoc.mdx';

const meta = {
  title: 'Nve/NveCheckboxGroup',
  tags: ['autodocs'],
  render: (args: NveCheckboxGroupProps) => NveCheckboxGroup(args),
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
  },
  parameters: {
    docs: {
      page: NveCheckboxGroupDoc,
      description: {
        component: `<div>
          <a href="<a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox-group.md">API-dokumentasjon</a>
          <p>Sjekkboksgruppe lar brukere velge flere skjekkbokser fra en gruppe av alternativer. Den organiserer vanligvis relaterte sjekkbokser sammen og gir en praktisk måte for brukere å foreta flere valg innenfor en spesifikk kategori eller sett med alternativer.
          De valgte skjekkbokser i gruppen representerer samlet sett brukerens valg blant de tilgjengelige alternativene.
          </div>`,
      },
    },
  },
} satisfies Meta<NveCheckboxGroupProps>;

export default meta;
type Story = StoryObj<NveCheckboxGroupProps>;

export const Primary: Story = {
  args: {
    disabled: false,
    orientation: 'horizontal',
    label: 'Label',
    tooltip: 'Help text',
    errorMessage: 'Error message',
    required: false,
    requiredLabel: '',
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Horisontal',

  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    label: 'Vertikal',
  },
};

export const Tooltip: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Med tooltip',
    tooltip: "Hjelpetekst"
  },
};

export const Disabled: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Disabled',
    disabled: true
  },
};

export const Error: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Error',
    errorMessage: "Error message"
  },
};

export const Required: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Required',
    required: true,
    requiredLabel: '*Required field'
  },
};

