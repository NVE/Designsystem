import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

export interface NveSpinnerProps {
  button: boolean
}

export const NveSpinner = ({
  button
}: {button: boolean
  
  
  
}) => {   
if (!button) {
    return html`<nve-spinner></nve-spinner>`;
}else{
  return html`<nve-button variant="primary" loading>Nve-button</nve-button>`;
};
};