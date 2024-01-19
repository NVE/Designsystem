import { html } from 'lit';

export interface NveRadioGroupProps {
  orientation: 'vertical' | 'horizontal';
  disabled: boolean;
  required: boolean;
  label: string;
  size: 'small' | 'medium' | 'large';
  value: number;
}

export const NveRadioGroup = (props: NveRadioGroupProps) => {
  return !props.disabled ? html`
    <nve-radio-group
      orientation=${props.orientation}
      label=${props.label}
      ?required=${props.required}
      size=${props.size}
      value=${props.value}
    >
      <nve-radio value="1">Value 1</nve-radio>
      <nve-radio value="2">Value 2</nve-radio>
      <nve-radio value="3">Value 3</nve-radio>
    </nve-radio-group>
   
  
  ` : html` <nve-radio-group
      orientation=${props.orientation}
      label=${props.label}
      ?required=${props.required}
      size=${props.size}
      value=${props.value}
    >
      <nve-radio disabled="disabled" value="1">Value 1 (disabled)</nve-radio>
      <nve-radio disabled="disabled" value="2">Value 2 (disabled)</nve-radio>
      <nve-radio disabled="disabled" value="3">Value 3 (disabled)</nve-radio>
    </nve-radio-group>
  `
  ;
};
