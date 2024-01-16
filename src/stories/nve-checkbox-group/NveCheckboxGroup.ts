import { html } from 'lit';

export interface NveCheckboxGroupProps {
  disabled: boolean;
  invalid: boolean;
  orientation: 'vertical' | 'horizontal';
  label: string;
  tooltip: string;
  errorMessage: string;
}

export const NveCheckboxGroup = (props: NveCheckboxGroupProps) => {
  return html`
    <nve-checkbox-group
      ?disabled=${props.disabled}
      ?invalid=${props.invalid}
      orientation=${props.orientation}
      label=${props.label}
      tooltip=${props.tooltip}
      errorMessage=${props.errorMessage}
    >
      <nve-checkbox>Value</nve-checkbox>
      <nve-checkbox>Value</nve-checkbox>
      <nve-checkbox>Value</nve-checkbox>
    </nve-checkbox-group>
  `;
};
