import { html } from 'lit';

/**
 * Primary UI component for user interaction
 */
export const NveCheckbox = ({ label, checked, indeterminate }) => {
  return html` <nve-checkbox label=${label} checked=${checked} indeterminate=${indeterminate}> </nve-checkbox> `;
};
