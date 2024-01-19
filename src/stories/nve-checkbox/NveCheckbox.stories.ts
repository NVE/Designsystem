import './../../components/nve-checkbox/nve-checkbox.component';
import { StoryObj } from '@storybook/web-components';
import { NveCheckbox, NveCheckboxProps } from './NveCheckbox';
import NveCheckboxDoc from './NveCheckboxDoc.mdx';

const meta = {
  title: 'Nve/NveCheckbox',
  tags: ['autodocs'],
  render: (args: NveCheckboxProps) => NveCheckbox(args),
  parameters: {
    docs: {
      page: NveCheckboxDoc,
      description: {
        component: `<div>
        <a href="<a href="https://github.com/NVE/Designsystem/tree/main/doc/nve-checkbox.md">API-dokumentasjon</a>
        <p>Brukeren kan klikke på en sjekkboks for å aktivere eller deaktivere en tilstand eller et alternativ. 
        Når sjekkboksen er merket (hakket av), indikerer det at brukeren har valgt eller aktivert det tilhørende alternativet.
        Når den ikke er merket, betyr det at alternativet ikke er valgt. Sjekkbokser brukes ofte i skjemaer, 
        innstillinger og lignende situasjoner der brukeren skal gi spesifikke tillatelser, velge alternativer eller angi preferanser.
        </div>`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<NveCheckboxProps>;

export const Primary: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    value: 'value',
  },
};

export const Unchecked: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: false,
    value: 'unchecked',
  },
};

export const Checked: Story = {
  args: {
    disabled: false,
    checked: true,
    indeterminate: false,
    value: 'checked',
  },
};

export const Indeterminate: Story = {
  args: {
    disabled: false,
    checked: false,
    indeterminate: true,
    value: 'indeterminate',
  },
};

export const Disabledunchecked: Story = {
  args: {
    disabled: true,
    checked: false,
    indeterminate: false,
    value: 'unchecked',
  },
};

export const Disabledchecked: Story = {
  args: {
    disabled: true,
    checked: true,
    indeterminate: false,
    value: 'checked',
  },
};

export const Disabledindeterminate: Story = {
  args: {
    disabled: true,
    checked: false,
    indeterminate: true,
    value: 'indeterminate',
  },
};
