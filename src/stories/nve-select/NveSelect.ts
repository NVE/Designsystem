import { html, TemplateResult } from 'lit';

export interface NveSelectProps {
    name: string;
    value: string | string[];
    defaultValue: string | string[];
    size: 'small' | 'medium' | 'large';
    placeholder: string;
    multiple: boolean;
    maxOptionsVisible: number;
    disabled: boolean;
    clearable: boolean;
    open: boolean;
    filled: boolean;
    pill: boolean;
    label: string;
    placement: 'top' | 'bottom';
    helpText: string;
    form: string;
    required: boolean;
    getTag: (option: any, index: number) => TemplateResult | string | HTMLElement;
    validity: any;
    validationMessage: string;
    updateComplete: Promise<void>;
}

export const NveSelect = (props: NveSelectProps) => {
    return html`
        <nve-select 
            name=${props.name} 
            value=${props.value} 
            default-value=${props.defaultValue} 
            size=${props.size} 
            placeholder=${props.placeholder} 
            ?multiple=${props.multiple} 
            max-options-visible=${props.maxOptionsVisible} 
            ?disabled=${props.disabled} 
            ?clearable=${props.clearable} 
            ?open=${props.open} 
            ?filled=${props.filled} 
            ?pill=${props.pill} 
            label=${props.label} 
            placement=${props.placement} 
            help-text=${props.helpText} 
            form=${props.form} 
            ?required=${props.required} 
            get-tag=${props.getTag} 
            validity=${props.validity} 
            validation-message=${props.validationMessage} 
            update-complete=${props.updateComplete}
        >
                <nve-label value="Label" slot="label" ></nve-label>
                <nve-option value="option-1">Option 1</nve-option>
                <nve-option value="option-2">Option 2</nve-option>
                <nve-option value="option-3">Option 3</nve-option>
                <nve-option disabled value="option-4">Option 4 <nve-icon slot="suffix" name="lock"></nve-icon></nve-option>
        </nve-select>
    `;
};