import { html } from 'lit';

export interface NveTextareaProps {
  value: string;
  filled: boolean;
  label: string;
  helpText: string;
  tooltip: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  requiredLabel: string;
}

export const NveTextarea = (props: NveTextareaProps) => {
  return html`
    <nve-textarea
      ?filled=${props.filled}
      label=${props.label}
      value=${props.value}
      ?required=${props.required}
      requiredLabel=${props.required ? (props.requiredLabel ? props.requiredLabel : '*Obligatorisk') : ' '}
      tooltip=${props.tooltip}
      ?disabled=${props.disabled}
      helpText=${props.helpText}
      ?readonly=${props.readonly}
    >
    </nve-textarea>
  `;
};
