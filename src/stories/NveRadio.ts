import { html } from 'lit';

export interface NveRadioGroupProps {
    orientation: 'vertical' | 'horizontal',
    disabled: boolean,
    required: boolean,
    label: string,
}

export const NveRadioGroup = (props: NveRadioGroupProps) => {
    return html`
      <nve-radio-group 
        .orientation=${props.orientation} 
        .disabled=${props.disabled} 
        .label=${props.label}
        .required=${props.required}
        value="none" >
            <nve-radio value="1">Value 1</nve-radio>
            <nve-radio value=-1>Value -1</nve-radio>
            <nve-radio disabled=disabled value=-1>Value -1 (disabled)</nve-radio>
      </nve-radio-group>
    `;
};