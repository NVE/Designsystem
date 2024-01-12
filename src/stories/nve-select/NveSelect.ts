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
      value=${props.value}
      default-value=${props.defaultValue}
      size=${props.size}
      placeholder=${props.placeholder}
      max-options-visible=${props.maxOptionsVisible}
      ?disabled=${props.disabled}
      ?clearable=${props.clearable}
      ?open=${props.open}
      ?filled=${props.filled}
      label=${props.label}
      placement=${props.placement}
      help-text=${props.helpText}
      ?required=${props.required}
    >
      <nve-label value="Label" slot="label"></nve-label>
      <nve-option ?filled=${props.filled} value="option-1">Option 1</nve-option>
      <nve-option ?filled=${props.filled} value="option-2">Option 2</nve-option>
      <nve-option ?filled=${props.filled} value="option-3">Option 3</nve-option>
      <nve-option ?filled=${props.filled} disabled value="option-4"
        >Option 4 <nve-icon slot="suffix" name="lock"></nve-icon
      ></nve-option>
    </nve-select>
  `;
};
