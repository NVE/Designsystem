import { html } from 'lit';
import './button.css';



/**
 * Primary UI component for user interaction
 */
export const NveButton = ({ size, type, disabled, loading, label, showLabel, trailingIcon, leadingIcon }) => {


  return html`
        <nve-button 
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
