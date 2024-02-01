import { html } from 'lit';
import '../../components/nve-button/nve-button.component';

export interface NvespinnerProps {
  button: boolean
}

export const Nvespinner = ({
  button
}: {button: boolean
  
  
  
}) => {   
if (!button) {
    return html`<nve-spinner></nve-spinner>`;
}else{
  return html`<nve-button variant="primary">Nve-button<nve-spinner></nve-spinner></nve-button>`;
};
};