import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

export interface NveCheckboxGroupProps {
  disabled: boolean;
  orientation: 'vertical' | 'horizontal';
  label: string;
  tooltip: string;
  errorMessage: string;
  required: boolean;
  requiredLabel: string;
}

export const NveCheckboxGroup = (props: NveCheckboxGroupProps) => {
  return html`
    <form style="width: fit-content">
      <nve-checkbox-group
        ?disabled=${props.disabled}
        orientation=${props.orientation}
        label=${props.label}
        tooltip=${props.tooltip}
        errorMessage=${props.errorMessage}
        ?required=${props.required}
        requiredLabel=${props.requiredLabel}
      >
        <nve-checkbox>Value</nve-checkbox>
        <nve-checkbox>Value</nve-checkbox>
        <nve-checkbox>Value</nve-checkbox>
      </nve-checkbox-group>
      <nve-button style="margin-top: 10px" size="small" variant="primary" type="submit">Submit</nve-button>
    </form>
  `;
};
