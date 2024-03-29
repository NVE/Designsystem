import { html } from 'lit';

export interface NveInputProps {
  filled: boolean,
  label: string,
  readonly: boolean,
  value: string,
  required: boolean,
  requiredLabel: string,
  size: string,
  disabled: boolean,
  type: string,
  min: string,
  max: string,
  tooltip: boolean,
  icon: boolean,
  helpText: string

}

export const NveInput = (props: NveInputProps) => { 
  return props.type === 'password' ? html`
   <nve-input
        label=${props.label}
        value=${props.value}
        password-toggle
        size=${props.size}
        ?required=${props.required}
        type=${props.type}
        help-text=${props.helpText}          
        requiredLabel=${props.required ? props.requiredLabel : " "}
        ?readonly=${props.readonly}
      >` :
 html`
      <nve-input
        ?filled=${props.filled}
        label=${props.label}
        value=${props.value}
        ?required=${props.required}
        requiredLabel=${props.required ? props.requiredLabel : " "}
        size=${props.size}
        ?disabled=${props.disabled}
        min=${props.min}
        max=${props.max}
        type=${props.type}  
        help-text=${props.helpText}
        ?readonly=${props.readonly}
      >
      
      ${props.tooltip ? html`<nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"></nve-label>` : ''}
      ${props.icon ? html`<nve-icon slot="suffix" name="lock"></nve-icon>` : ''}
      </nve-input>
    `;
};
