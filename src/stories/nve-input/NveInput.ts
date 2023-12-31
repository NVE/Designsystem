import { html } from 'lit';

export interface NveInputProps {
  filled: boolean,
  label: string;
  value: string,
  required: boolean,
  requiredLabel: string
}

export const NveInput = (props: NveInputProps) => {
  return html`
      <nve-input
        ?filled=${props.filled}
        label=${props.label}
        value=${props.value}
        ?required=${props.required}
        requiredLabel=${props.requiredLabel}
      >
      </nve-input>
    `;
};
