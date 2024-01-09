import { html } from 'lit';

export interface NveCheckboxProps {
  disabled: boolean;
  checked: boolean;
  indeterminate: boolean;
  invalid: boolean;
}

export const NveCheckbox = (props: NveCheckboxProps) => {
  return html`
    <nve-checkbox
      ?disabled=${props.disabled}
      ?checked=${props.checked}
      ?indeterminate=${props.indeterminate}
      ?invalid=${props.invalid}
      >Value</nve-checkbox
    >
  `;
};
