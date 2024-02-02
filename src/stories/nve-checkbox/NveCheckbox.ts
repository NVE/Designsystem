import { html } from 'lit';

export interface NveCheckboxProps {
  disabled: boolean;
  checked: boolean;
  indeterminate: boolean;
  dataUserInvalid: boolean;
  value: string;
}


export const NveCheckbox = (props: NveCheckboxProps) => {
  return html`
    <nve-checkbox
      value=${props.value}
      ?disabled=${props.disabled}
      ?checked=${props.checked}
      ?indeterminate=${props.indeterminate}
      ?data-user-invalid=${props.dataUserInvalid}
      ?data-valid=${!props.dataUserInvalid}
      >Value</nve-checkbox
    >
    </form>
  `;
};
