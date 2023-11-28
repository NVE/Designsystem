import '../components/nve-checkbox/nve-checkbox';
import { html } from 'lit';

const NveCheckbox = ({
  indeterminate,
  disabled,
}: {
    indeterminate: boolean;
    disabled: boolean;
}) => html`
<nve-checkbox .disabled=${disabled} .indeterminate=${indeterminate}>Check me</nve-checxkbox>
`

export default {
  title: 'NveCheckbox', // Title for the component in Storybook
  component: 'nve-checkbox',
  render: (args: {
    indeterminate: boolean;
    disabled: boolean;
  }) => NveCheckbox(args)
};

export const Chekbox = {
  args: {
    indeterminate: false,
    disabled: false
  },
};