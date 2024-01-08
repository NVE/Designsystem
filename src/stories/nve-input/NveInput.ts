import { html } from 'lit';

export interface NveInputProps {
  filled: boolean,
  label: string;
  value: string,
  required: boolean,
  requiredLabel: string,
  size: string,
  disabled: boolean,
  type: string,
  min: string,
  max: string,

}

export const NveInput = (props: NveInputProps) => {
  return html`
      <nve-input
        ?filled=${props.filled}
        label=${props.label}
        value=${props.value}
        ?required=${props.required}
        requiredLabel=${props.requiredLabel}
        size=${props.size}
        ?disabled=${props.disabled}
        min=${props.min}
        max=${props.max}
        type=${props.type}
      >
      </nve-input>
    `;
};
