import { html } from 'lit';
import './button.css';



/**
 * Primary UI component for user interaction
 */
export const NveButton = ({ size, type, disabled, loading, label, showLabel, trailingIcon, leadingIcon, 
  variant, caret, outline, pill, circle, name, value, href, target, rel, download, form, formAction, formEnctype,
  formMethod, formNoValidate, formTarget

}) => {

  return html`
        <nve-button 
    variant=${variant}
    caret=${caret}
    outline=${outline}
    pill=${pill}
    circle=${circle}
    name=${name}
    value=${value}
    href=${href}
    target=${target}
    rel=${rel}
    download=${download}
    form=${form}
    formAction=${formAction}
    formEnctype=${formEnctype}
    formMethod=${formMethod}
    formNoValidate=${formNoValidate}
    formTarget=${formTarget}
    label=${label}
    size=${size}
    type=${type}
    disabled=${disabled}
    loading=${loading}
    trailing-icon=${trailingIcon}
    leading-icon=${leadingIcon}
    show-label=${showLabel}
    >
  </nve-button>
  `;
};
