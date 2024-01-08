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
  tooltip: boolean,
  icon: boolean

}

export const NveInput = (props: NveInputProps) => { 
  return props.type === 'password' ? html`
   <nve-input
        label=${props.label}
        value=${props.value}
        password-toggle
        size=${props.size}
        type=${props.type}          
      >` :
 html`
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
      
      ${props.tooltip ? html`<nve-label value="Svev over ikonet" slot="label" tooltip="Hjelpetekst"></nve-label>` : ''}
      ${props.icon ? html`<nve-icon slot="suffix" name="lock"></nve-icon>` : ''}
      </nve-input>
    `;
};
